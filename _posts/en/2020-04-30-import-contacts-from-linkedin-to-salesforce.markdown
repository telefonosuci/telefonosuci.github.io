---
layout: post
title:  "Import contacts from LinkedIn to Salesforce"
date:   2020-04-30 21:03:36 +0200
categories: Salesforce
lang: en
---

Your LinkedIn connections can become Leads or Contacts in Salesforce without any code: export a CSV from LinkedIn and import it with Salesforce's Data Import Wizard.

### 1. Export connections from LinkedIn

1. Click **Me → Settings & Privacy → Data privacy → Get a copy of your data**.
2. Select only **Connections** and request the archive.
3. After a few minutes you'll receive an email with the link to download `Connections.csv`.

The file contains: `First Name`, `Last Name`, `URL`, `Email Address`, `Company`, `Position`, `Connected On`.

### 2. Clean up the CSV

- The first lines of the file are notes from LinkedIn: delete everything above the header row.
- `Email Address` is empty for most people (it's only there if they allow it). Without an email, duplicate matching is harder.
- Remove the people you don't want in your CRM.

### 3. Import into Salesforce

1. **Setup → Data Import Wizard → Launch Wizard**.
2. Choose **Leads** (or **Accounts and Contacts**) and **Add new records**. Set duplicate matching on email where available.
3. Upload the CSV and map the columns:
   - `First Name` → First Name, `Last Name` → Last Name
   - `Company` → Company (or Account Name)
   - `Position` → Title
   - `URL` → a custom field such as `LinkedIn_URL__c`
4. Start the import and check the result in the email Salesforce sends you.

The wizard handles up to 50,000 records; beyond that, use **Data Loader**.

**Note on privacy:** importing personal data into a CRM requires a legal basis under GDPR. Import only contacts you actually have a relationship with.
