---
title: "PHP2Shell: is Shopify safer than WooCommerce and PHP e-commerce?"
date: 2026-10-22 09:00:00 +0200
categories: Ecommerce
related: [shopify, wordpress, migrations]
reading_time: 9
audience: dev
---

Every time a critical PHP vulnerability comes out, the same question comes back: **is a Shopify store safer than one on WooCommerce, Magento or PrestaShop?** The short answer is yes, for many stores. The long answer is that Shopify isn't safer because it is better written, but because it **moves the job of keeping it patched onto someone else**.

To reason about it with a concrete case, let's take **PHP2Shell**, the pair of PHP core vulnerabilities published in the last few days.

### What PHP2Shell is

PHP2Shell names a pair of critical vulnerabilities in PHP's Zend engine (**CVE-2026-109618** and **CVE-2026-109619**, CVSS 9.2)[^php2shell] that allow **remote code execution (RCE)** before any application code (WordPress, WooCommerce, Magento) actually runs.

The weakness lies in how the PHP interpreter handles abnormal interruptions (fatal errors and memory exhaustion in particular) while parsing the HTTP request.

#### The root cause: `zend_bailout()` and `longjmp()`

When PHP handles an HTTP request, its internal allocator (the **Zend Memory Manager**) allocates temporary data structures that live for that single request.

If a fatal error occurs during processing, such as exceeding `memory_limit` (Out-of-Memory), the core calls `zend_bailout()`. This function performs a C `longjmp()`, jumping abruptly out of the call stack to start an emergency cleanup:

- the normal cascading cleanup routines don't run;
- partially initialised data structures are left orphaned or with pointers that were never reset;
- in architectures where persistent processes serve many requests (**PHP-FPM** or **Apache mod_php**), module globals or memory slots can keep pointing to heap regions of the previous request that were just freed (**Use-After-Free**) or never allocated.

#### How the attack works

The exploit chains the two flaws in a multi-request sequence:

1. **Trigger before user code.** The attacker sends a crafted `multipart/form-data` request. PHP starts parsing the payload and native features (such as `session.upload_progress` or populating `$_POST`) before the site's script gets control.
2. **Controlled OOM (memory grooming).** By tuning part sizes, nesting and field lengths, the attacker forces the allocator to exceed `memory_limit` at exactly the right point: an internal structure is marked as existing before its buffer has been allocated, and the `longjmp()` leaves dangling pointers in the worker's state.
3. **Info disclosure (CVE-2026-109618).** Reusing the same worker, the attacker leaks memory: the upload progress handler, now working with invalid pointers, can return heap bytes straight in HTTP headers (for example in the `PHPSESSID` cookie), revealing layouts and addresses useful to bypass ASLR.
4. **Heap spraying and RCE (CVE-2026-109619).** A follow-up request to the same worker refills the freed memory with forged Zend structures. When the worker dereferences the stale pointer, it calls an attacker-controlled function and execution ends up in `system()` or shellcode, with the web server user's permissions (e.g. `www-data`).

#### How bad it really is

It is **pre-authentication** and **application-independent**: it affects the PHP core from 5.4 up to the last builds before the fix. No vulnerable plugin needed, no login needed. The server only has to accept a POST request.

It is not as trivial as Log4Shell, though:

- **worker affinity**: requests have to hit the same process (or thread in mod_php) to exploit the corrupted state;
- **target dependency**: memory offsets change with the PHP version, compile flags and libc, so precise profiling of the target is required.

In practice: not every server will fall in the first few hours, but a motivated attacker with a specific target has everything they need.

#### Fix and mitigations

- **Patch**: upgrade now to **PHP 8.2.35, 8.3.36, 8.4.27 or 8.5.12**.[^phpchangelog]
- **If you can't upgrade right away**: filter unexpected `multipart/form-data` requests at the WAF or reverse proxy, and disable `session.upload_progress.enabled` and `opcache.enable`.

### The point that matters: who applies the patch?

Read the list of fixed versions again. **There is no PHP 8.1, no 8.0, no 7.x.** Those versions are end of life: no official patch is coming.[^phpsupported] And a huge number of WooCommerce, Magento and PrestaShop stores still run on them, often on shared hosting where the merchant doesn't even know which PHP version they are using.

This is the real problem with self-hosted e-commerce. On WooCommerce, when PHP2Shell comes out, someone has to:

1. notice it;
2. work out whether their server is exposed;
3. upgrade PHP (or ask the hosting provider to);
4. check that WordPress, WooCommerce and every plugin still work on the new version;
5. if the upgrade breaks something, choose between a broken site and a vulnerable one.

Step 4 is what keeps stores stuck on old PHP versions for years: an abandoned shipping plugin, a custom theme written in 2018, a payment gateway that doesn't support 8.x. And PHP2Shell is not an isolated case: in 2024 **CVE-2024-4577** (PHP-CGI on Windows, CVSS 9.8)[^cve4577] and **CosmicSting** (CVE-2024-34102, Magento, CVSS 9.8)[^cve34102] were mass-exploited for weeks after the patch, precisely because thousands of stores hadn't applied it.

### Why Shopify doesn't have this problem

A Shopify store has no PHP server to update. No server at all, for that matter.

- **No exposed runtime.** The platform is written in Ruby on Rails, not PHP, so PHP2Shell doesn't affect it. But the language isn't the point: Ruby has had its CVEs too. The point is that the merchant **doesn't run any runtime**.
- **Centralised patching.** When an infrastructure vulnerability comes out, Shopify fixes it once for every store. Nobody has to notice, nobody has to open a ticket with their host.
- **No third-party code on the server.** Shopify apps don't run inside the store: they run on the developer's servers and talk to Shopify through APIs, with explicit permissions (scopes) approved at install time. A vulnerable app can expose the data it received, but it can't take over the platform. On WordPress a vulnerable plugin runs code with the same permissions as everything else: **most WordPress compromises start from plugins**[^patchstack], not from core.
- **Liquid is a sandbox.** Themes are written in Liquid, a template language that can't touch the filesystem, run commands or make arbitrary database queries. A badly written theme can be slow or ugly, but it can't open a shell.
- **Certified checkout and payments.** Shopify is **PCI DSS Level 1** certified[^pci] and the checkout is run by the platform. With WooCommerce, PCI compliance is (at least partly) the merchant's responsibility.
- **Public bug bounty.** Shopify runs one of the best-paying programmes on HackerOne[^h1], with researchers hunting for vulnerabilities full time.

### What's still on you, even on Shopify

Shopify doesn't make a store invulnerable. It moves the line of responsibility:

- **Accounts and access**: staff accounts with weak passwords or no two-factor authentication are still the first attack vector. 2FA should be mandatory for everyone.
- **Apps**: every installed app gets access to part of your data (orders, customers). Installing abandoned or untrustworthy apps means handing that data to third parties. Review them and uninstall the ones you don't need.
- **Theme scripts**: pixels, chat widgets and third-party embeds loaded in the theme run in your customers' browsers. A compromised vendor can inject malicious code (Magecart-style attacks). The checkout is protected; the rest of the site isn't.
- **Custom integrations**: middleware, ERP connectors and custom apps hold API tokens that must be guarded like passwords.
- **Lock-in and transparency**: you can't audit Shopify's code or choose when a patch is applied. You are delegating trust, not removing it.

### So should WooCommerce be avoided?

No. A well-run WooCommerce store can be secure. But "well-run" has a specific cost:

- serious **managed hosting** that updates PHP, isolates sites and puts a WAF in front;
- **few plugins**, chosen among actively maintained ones;
- someone (in-house or an agency) explicitly tasked with **tracking vulnerabilities and applying updates**, with a staging environment to test them;
- verified backups and a restore plan.

If those are in place, WooCommerce or Magento remain valid choices, especially when you need full control over the code or the data. If they aren't, the store is only safe until someone targets it.

| Aspect | Shopify | WooCommerce / Magento / PrestaShop |
|---|---|---|
| Runtime updates (PHP, server) | Handled by the platform | On you or your host |
| PHP2Shell-type vulnerabilities | Don't affect you | Patch, test and deploy yourself |
| Third-party code | External apps via scoped APIs | Plugins with full server access |
| Checkout PCI compliance | PCI DSS Level 1 included | Shared responsibility |
| Code control and auditability | None | Full |
| Account, app and script security | On you | On you |

### In short

- **PHP2Shell** is a pre-auth RCE in the PHP core: it hits any PHP application, no matter how well written.
- The fix only exists for supported versions (8.2+). **If you're on PHP 8.1 or older, no patch is coming.**
- Shopify's advantage isn't better code, it's a **different responsibility model**: Shopify updates the infrastructure, for everyone, without the merchant doing anything.
- On Shopify, **accounts, apps and third-party scripts** are still your job.
- WooCommerce and Magento can be secure, but only if someone actually owns keeping them updated. If nobody does, Shopify is the safer bet.

[^php2shell]: Zscaler ThreatLabz, [CVE-2026-109618 and CVE-2026-109619: PHP2Shell](https://www.zscaler.com/blogs/security-research/cve-2026-109618-and-cve-2026-109619-php-vulnerable-unauthenticated-rce); Qualys, [PHP2Shell: Find, Mitigate, and Patch Now](https://blog.qualys.com/vulnerabilities-threat-research/2026/10/20/php-announces-critical-security-release-for-two-vulnerabilities).
[^phpchangelog]: PHP, [ChangeLog PHP 8](https://www.php.net/ChangeLog-8.php).
[^phpsupported]: PHP, [Supported Versions](https://www.php.net/supported-versions.php).
[^cve4577]: NIST NVD, [CVE-2024-4577](https://nvd.nist.gov/vuln/detail/CVE-2024-4577).
[^cve34102]: NIST NVD, [CVE-2024-34102](https://nvd.nist.gov/vuln/detail/CVE-2024-34102).
[^patchstack]: Patchstack, [State of WordPress Security in 2024](https://patchstack.com/whitepaper/state-of-wordpress-security-in-2024/): almost all reported vulnerabilities are in plugins and themes, not in core.
[^pci]: Shopify, [PCI DSS compliance](https://www.shopify.com/pci-compliant).
[^h1]: HackerOne, [Shopify bug bounty program](https://hackerone.com/shopify).
