---
layout: post
title:  "Importare contatti da LinkedIn a Salesforce"
date:   2020-04-30 21:03:36 +0200
categories: Salesforce
lang: it
reading_time: 2
---

I collegamenti di LinkedIn possono diventare Lead o Contatti in Salesforce senza scrivere codice: si esporta un CSV da LinkedIn e lo si importa con il Data Import Wizard di Salesforce.

### 1. Esportare i collegamenti da LinkedIn

1. Clicca **Tu → Impostazioni e privacy → Privacy dei dati → Ottieni una copia dei tuoi dati**.
2. Seleziona solo **Collegamenti** e richiedi l'archivio.
3. Dopo qualche minuto arriva un'email con il link per scaricare `Connections.csv`.

Il file contiene: `First Name`, `Last Name`, `URL`, `Email Address`, `Company`, `Position`, `Connected On`.

### 2. Pulire il CSV

- Le prime righe del file sono note di LinkedIn: cancella tutto quello che sta sopra la riga delle intestazioni.
- `Email Address` è vuoto per la maggior parte delle persone (c'è solo se lo consentono). Senza email è più difficile riconoscere i duplicati.
- Togli le persone che non vuoi nel CRM.

### 3. Importare in Salesforce

1. **Setup → Data Import Wizard → Launch Wizard**.
2. Scegli **Leads** (oppure **Accounts and Contacts**) e **Add new records**. Imposta il controllo duplicati sull'email, dove presente.
3. Carica il CSV e mappa le colonne:
   - `First Name` → First Name, `Last Name` → Last Name
   - `Company` → Company (o Account Name)
   - `Position` → Title
   - `URL` → un campo personalizzato, ad esempio `LinkedIn_URL__c`
4. Avvia l'importazione e controlla il risultato nell'email che invia Salesforce.

Il wizard gestisce fino a 50.000 record; oltre serve **Data Loader**.

**Nota sulla privacy:** importare dati personali in un CRM richiede una base giuridica secondo il GDPR. Importa solo i contatti con cui hai davvero un rapporto.
