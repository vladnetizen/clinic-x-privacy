---
title: "Module 3 · Record of processing activities (ROPA)"
description: "The register that shows what data a small clinic processes, why, on what basis, with whom it is shared and for how long. Worked example with 13 activities, a spreadsheet version and a blank template."
---


> **Fictional example.** Clinic X is an invented practice. This page is educational and is not legal advice.

| | |
|---|---|
| **What it is** | The clinic's internal register of everything it does with personal data |
| **Who it is for** | The practice owner, the privacy contact, and the supervisory authority on request |
| **GDPR hook** | Article 30 (records of processing), with Article 5(2) (accountability) |
| **Owner at Clinic X** | Dr. A (owner-physician) |
| **Review** | Yearly, and whenever an activity, system or provider changes |
| **You get** | A 13-activity register for Clinic X, a CSV version, a blank template |

## 1. Why it exists

The record of processing activities, or **ROPA**, is the clinic's own map of its data. For each activity it says what data is used, why, on what legal basis, who receives it, whether it leaves the EU and how long it is kept.

Three reasons it matters more than its size suggests:

- **It is a legal duty.** Art. 30 requires a written record. The exemption for organisations with fewer than 250 employees does *not* apply if the processing is not occasional or includes special-category data (Art. 30(5)). A clinic handles health data every day, so it needs one.
- **It is the first thing a regulator asks for.** The record must be made available to the supervisory authority on request (Art. 30(4)). It is the quickest way to show accountability (Art. 5(2)).
- **It keeps the other documents honest.** The patient notice, the retention schedule, the vendor register and the security policy should all say the same thing. The ROPA is where they are checked against each other.

### What Art. 30(1) requires, and where it sits in the template

| Art. 30(1) | Requirement | Field in the ROPA |
|---|---|---|
| (a) | Name and contact details of the controller (and joint controller, representative, DPO) | Section 1 |
| (b) | Purposes of the processing | Purpose of processing |
| (c) | Categories of data subjects and of personal data | Categories of data subjects; categories of personal data |
| (d) | Categories of recipients | Recipients (including processors) |
| (e) | Transfers to third countries and the safeguards | Transfers outside the EU/EEA |
| (f) | Time limits for erasure, where possible | Retention period (RET code) |
| (g) | General description of the security measures (Art. 32(1)) | Specific security measures; section 4 |

The template adds four fields that Art. 30 does not list but that make the record useful: the **legal basis**, the **Art. 9 condition** for health data, the **source** of the data, and an **internal owner**. It also adds an "assessments needed" line, which is where DPIA thresholds, legitimate interest assessments and transfer checks are recorded.

*This record covers the clinic as a controller. A separate record under Art. 30(2) is only needed if the clinic also acts as a processor for someone else.*

## 2. How to build one

1. **List activities by purpose, not by software.** Follow the patient's journey (booking, visit, results, invoice, follow-up) and the staff's tasks (hiring, payroll, security). One card per purpose.
2. **Ask the same questions for each card.** Who, what data, why, on what basis, from where, to whom, outside the EU, how long, how it is protected, who owns it.
3. **Split a card when the basis or recipients differ.** Appointment reminders (service messages) and newsletters (consent) are different activities even if the same provider sends both.
4. **Cross-check.** Does the notice say the same thing? Is every provider in the processor table? Does every card point to a retention code?
5. **Name an owner and a review date.** An unowned record goes out of date within a year.

**Mistakes to avoid**

- Listing systems ("the practice software") instead of activities.
- Copying the notice into the register. The register is more detailed and internal.
- Forgetting the unglamorous activities: HR, recruitment, the website, CCTV, handling requests, incidents.
- Using "etc." or "various". A record that cannot be read as a list is not a record.
- Putting actual patient data in it. The record holds *categories*, not data.
- Never updating it.

## 3. Worked example: Clinic X

Clinic X is a small private outpatient practice with about 2,800 patient records, two employees, one owner-physician and a visiting physician (see the [clinic profile](../01-clinic-profile/)). It has **13 processing activities**. Four are optional in a generic template (PA-03, PA-08, PA-12, PA-13) but all apply to Clinic X.

**Downloads**

- [ROPA_v1.0_Clinic-X_EN.docx](../downloads/03-ropa/ROPA_v1.0_Clinic-X_EN.docx): the full document
- [ROPA_register_Clinic-X_EN.csv](../downloads/03-ropa/ROPA_register_Clinic-X_EN.csv): the same data as a spreadsheet, one row per activity
- [Blank template](../downloads/03-ropa/ROPA_Blank_Template_EN.docx)

### Controller details

| Field | Value |
|---|---|
| **Controller** | Clinic X – X Medical S.R.L. |
| **Tax code** | RO 00000000 (invalid on purpose) |
| **Address** | Str. X nr. 0, Town X, Romania |
| **Contact** | +40 700 000 000 / privacy@clinic-x.example |
| **Legal representative** | Dr. A, owner-physician |
| **Data protection contact person** | Dr. A, owner-physician – privacy@clinic-x.example |
| **Data Protection Officer (DPO)** | Not appointed. The assessment of 1 December 2026 concluded that appointment is not mandatory because the practice does not carry out large-scale processing (recital 91 GDPR). Reviewed yearly. |
| **Joint controllers** | None. The visiting physician (Dr. B) is treated as a separate controller for the records of his own patients; the arrangement is to be confirmed. |
| **Representative in the EU** | Not applicable. |

### Overview

| Code | Activity | Basis (Art. 6) | Special data (Art. 9) | Retention |
|---|---|---|---|---|
| PA-01 | Appointments | Art. 6(1)(b) | Sometimes – (h) | RET-07 |
| PA-02 | Providing medical services and keeping medical records | Art. 6(1)(b), (c) | Yes – (h) | RET-01, 02 |
| PA-03 | Reporting to the health insurance fund and other authorities | Art. 6(1)(c) | Yes – (h) | RET-01, 05 |
| PA-04 | Invoicing and accounting | Art. 6(1)(c), (b) | Possibly – (h) | RET-05 |
| PA-05 | Laboratories and other healthcare providers (referrals and results) | Art. 6(1)(b), (c) | Yes – (h) | RET-03, 04, 01 |
| PA-06 | Communications about appointments and treatment | Art. 6(1)(b) | Possibly – (h) | RET-07 |
| PA-07 | Video surveillance (CCTV) | Art. 6(1)(f) | No | RET-06 |
| PA-08 | Promotional communications | Art. 6(1)(a) | No | RET-08 |
| PA-09 | Handling data subject requests | Art. 6(1)(c) | Possibly | RET-09 |
| PA-10 | Handling personal data breaches | Art. 6(1)(c) | No | RET-10 |
| PA-11 | HR and payroll | Art. 6(1)(b), (c) | Yes – Art. 9(2)(b) | RET-11 |
| PA-12 | Recruitment | Art. 6(1)(b), (a) | No | RET-12 |
| PA-13 | Website and cookies | Art. 6(1)(f), (a) | No | RET-13 |

<div data-table-tools data-name="ropa"></div>

### Detailed records

Open any card to see all twelve fields.

<details>
<summary><strong>PA-01</strong> – Appointments</summary>

| Field | Clinic X |
|---|---|
| **Purpose of processing** | Scheduling patients for consultations and investigations and managing the clinic diary. |
| **Categories of data subjects** | Patients; legal representatives or carers who make the appointment. |
| **Categories of personal data** | Name, phone, e-mail; date and time of the appointment; family or internal medicine consultation, ECG, ultrasound, blood sampling; reason for the appointment, only as far as necessary (it may reveal health information). |
| **Legal basis (Art. 6 GDPR)** | Art. 6(1)(b) – steps taken at the patient's request before entering into the medical services contract, and its performance. |
| **Condition for special-category data (Art. 9 GDPR)** | Art. 9(2)(h), where the reason for the appointment contains health data. |
| **Source of the data** | The data subject (phone, e-mail, contact form on the website, see PA-13, in person at reception). |
| **Recipients (including processors)** | Medical and reception staff; the Practice Software Provider (V-01) and the E-mail Provider (V-06) – processors. |
| **Transfers outside the EU/EEA** | No. Hosting is in the EU; the e-mail provider's support access is checked in the vendor review. |
| **Retention period** | See RET-07 in the retention schedule. |
| **Specific security measures** | Individual accounts; the diary is not visible to patients; no diagnoses are written in the diary; reception screen positioned away from the waiting room. |
| **Assessments needed** | No separate assessment needed. The website contact form is covered in PA-13. |
| **Internal owner** | Receptionist D |

</details>

<details>
<summary><strong>PA-02</strong> – Providing medical services and keeping medical records</summary>

| Field | Clinic X |
|---|---|
| **Purpose of processing** | Consultations, diagnosis, treatment, prescriptions, medical recommendations and referrals; creating and keeping the medical record and the registers required by law. |
| **Categories of data subjects** | Patients; patients' legal representatives. |
| **Categories of personal data** | Identification data (name, national ID number, ID document); contact data; medical history, diagnosis, treatments, tests, prescriptions, recommendations; health insurance data. |
| **Legal basis (Art. 6 GDPR)** | Art. 6(1)(b) – the medical services contract; (c) – legal obligations (medical records). National ID number: Art. 4 of Law no. 190/2018. |
| **Condition for special-category data (Art. 9 GDPR)** | Art. 9(2)(h), in compliance with Art. 9(3) (professional secrecy). |
| **Source of the data** | The patient; other doctors or healthcare providers (referrals, results); the health insurance fund – checking insured status. |
| **Recipients (including processors)** | Doctors and medical staff involved in care; medical collaborators when needed; the Practice Software Provider (V-01) and the IT Support Provider (V-03; remote support, no routine access to records) – processors; authorities, on a lawful request. |
| **Transfers outside the EU/EEA** | No. Hosting is in the EU (see V-01). |
| **Retention period** | See RET-01 and RET-02. |
| **Specific security measures** | Role-based access, only for staff involved in care; individual accounts; access log kept by the practice software and checked during the periodic access review; paper files in locked rooms; backups; staff confidentiality undertaking. |
| **Assessments needed** | DPIA threshold assessment: December 2026 (see module 12). Processing by a small practice is in principle not "large scale" (recital 91 GDPR); documented in the threshold assessment. |
| **Internal owner** | Dr. A |

</details>

<details>
<summary><strong>PA-03</strong> – Reporting to the health insurance fund and other authorities <em>(optional)</em></summary>

| Field | Clinic X |
|---|---|
| **Purpose of processing** | Meeting legal obligations for reporting, claims and inspections by the health insurance fund and other competent authorities. |
| **Categories of data subjects** | Insured patients. |
| **Categories of personal data** | Identification data including the national ID number; data on services provided; diagnosis, as far as the reporting requires. |
| **Legal basis (Art. 6 GDPR)** | Art. 6(1)(c) – legal obligations. National ID number: Art. 4 of Law no. 190/2018. |
| **Condition for special-category data (Art. 9 GDPR)** | Art. 9(2)(h). To be confirmed for specific reports; a public-interest condition such as (i) may fit better. |
| **Source of the data** | The medical record; the patient. |
| **Recipients (including processors)** | The county health insurance fund and other competent authorities, through their IT platforms. |
| **Transfers outside the EU/EEA** | No. |
| **Retention period** | See RET-01 and RET-05. |
| **Specific security measures** | Transmission only through the official platforms; individual user accounts; the digital certificate is held by Dr. A. |
| **Assessments needed** | No separate assessment needed. |
| **Internal owner** | Dr. A |

</details>

<details>
<summary><strong>PA-04</strong> – Invoicing and accounting</summary>

| Field | Clinic X |
|---|---|
| **Purpose of processing** | Issuing invoices and receipts, collecting payments, accounting and tax records. |
| **Categories of data subjects** | Patients, or the person who pays for the services. |
| **Categories of personal data** | Name, address; national ID number only where an insurance claim or the law requires it; name of the service (minimum description); amount; method of payment; health insurance data where applicable. |
| **Legal basis (Art. 6 GDPR)** | Art. 6(1)(c) – accounting and tax law; (b) – the services contract. |
| **Condition for special-category data (Art. 9 GDPR)** | Art. 9(2)(h), where the description of a service reveals health data; descriptions are kept to the minimum necessary. |
| **Source of the data** | The patient; the medical record. |
| **Recipients (including processors)** | The Accounting Firm (V-04) – processor; tax authorities; the Card Payment Provider (V-11) – separate controller; the Shredding Provider (V-10) – processor. |
| **Transfers outside the EU/EEA** | No. |
| **Retention period** | See RET-05. |
| **Specific security measures** | Accounting documents in locked files; sent to the accountant through an encrypted channel agreed with the Accounting Firm; limited access. |
| **Assessments needed** | No separate assessment needed. |
| **Internal owner** | Receptionist D |

</details>

<details>
<summary><strong>PA-05</strong> – Laboratories and other healthcare providers (referrals and results)</summary>

| Field | Clinic X |
|---|---|
| **Purpose of processing** | Sending and receiving referrals, test and investigation results and medical letters, to ensure continuity of care. |
| **Categories of data subjects** | Patients. |
| **Categories of personal data** | Identification data; relevant medical data (tests, imaging, diagnosis). |
| **Legal basis (Art. 6 GDPR)** | Art. 6(1)(b) and (c). |
| **Condition for special-category data (Art. 9 GDPR)** | Art. 9(2)(h). |
| **Source of the data** | The patient; the medical record; laboratories and other providers. |
| **Recipients (including processors)** | The Partner Laboratory (V-08) and the specialists to whom the patient is referred – separate controllers. |
| **Transfers outside the EU/EEA** | No. Providers are in the EU. |
| **Retention period** | See RET-03, RET-04 and RET-01. |
| **Specific security measures** | Transmission through secure channels (results are received on the clinic business e-mail and filed in the patient record); medical data is not sent through personal messaging apps. |
| **Assessments needed** | No separate assessment needed. |
| **Internal owner** | Dr. A |

</details>

<details>
<summary><strong>PA-06</strong> – Communications about appointments and treatment</summary>

| Field | Clinic X |
|---|---|
| **Purpose of processing** | Appointment reminders and confirmations; information about treatment recommendations or available results (service messages, not marketing). |
| **Categories of data subjects** | Patients. |
| **Categories of personal data** | Name, phone or e-mail, date and time of the appointment; minimal medical information. |
| **Legal basis (Art. 6 GDPR)** | Art. 6(1)(b). |
| **Condition for special-category data (Art. 9 GDPR)** | Art. 9(2)(h), where a message could reveal health data; messages are written without diagnosis or medical details. |
| **Source of the data** | The patient. |
| **Recipients (including processors)** | The Messaging Provider (V-02) – processor. |
| **Transfers outside the EU/EEA** | No (EU provider). |
| **Retention period** | See RET-07. |
| **Specific security measures** | Message templates without medical data; checking the phone number / e-mail address; sender name shows the clinic only, not a medical specialty. |
| **Assessments needed** | None needed while the provider stays in the EU. |
| **Internal owner** | Receptionist D |

</details>

<details>
<summary><strong>PA-07</strong> – Video surveillance (CCTV)</summary>

| Field | Clinic X |
|---|---|
| **Purpose of processing** | Safety of patients and staff, protection of property, prevention and investigation of security incidents. |
| **Categories of data subjects** | Patients, visitors, staff, couriers and suppliers. |
| **Categories of personal data** | Video images from common areas; date and time. The system does not record sound. |
| **Legal basis (Art. 6 GDPR)** | Art. 6(1)(f) – the clinic's legitimate interest. |
| **Condition for special-category data (Art. 9 GDPR)** | The clinic does not aim to process special-category data. The medical context could allow inferences about health, so cameras are limited to common areas and access to images is restricted. |
| **Source of the data** | The surveillance cameras. |
| **Recipients (including processors)** | Authorised staff (Dr. A only); authorities, on a lawful request; the CCTV Installer (V-05) – processor, only if it has access to recordings, under supervision. |
| **Transfers outside the EU/EEA** | No. Recordings stay on the local recorder. |
| **Retention period** | See RET-06 (7 days; never more than 30). |
| **Specific security measures** | Access with an individual account and password; automatic deletion by overwriting; recorder in a locked cabinet; log of video exports; signage at the entrance; no cameras in consultation rooms, the treatment room, toilets or the staff room. |
| **Assessments needed** | Legitimate interest assessment (LIA) – module 10, completed December 2026. DPIA threshold check: December 2026. For employees: Art. 5 of Law no. 190/2018 (well-founded legitimate interest, prior information, consultation of the union or employee representatives, necessity of the measure, storage of no more than 30 days, with the exceptions in law). |
| **Internal owner** | Dr. A |

</details>

<details>
<summary><strong>PA-08</strong> – Promotional communications <em>(optional)</em></summary>

| Field | Clinic X |
|---|---|
| **Purpose of processing** | Information about new services and clinic campaigns, only with the person's consent. |
| **Categories of data subjects** | Patients who have given consent. |
| **Categories of personal data** | Name, e-mail address or phone; proof of consent (date and method). |
| **Legal basis (Art. 6 GDPR)** | Art. 6(1)(a) – consent. |
| **Condition for special-category data (Art. 9 GDPR)** | No health data is processed for promotion (the contact list is not segmented by diagnosis or treatment). |
| **Source of the data** | The data subject. |
| **Recipients (including processors)** | The Messaging Provider (V-02) – processor. |
| **Transfers outside the EU/EEA** | No (EU provider). |
| **Retention period** | See RET-08. |
| **Specific security measures** | List kept separate from the medical records; unsubscribe option in every message; withdrawal of consent is processed immediately. |
| **Assessments needed** | Check compliance with the rules on unsolicited commercial communications (Law no. 506/2004 – to be verified). |
| **Internal owner** | Receptionist D |

</details>

<details>
<summary><strong>PA-09</strong> – Handling data subject requests</summary>

| Field | Clinic X |
|---|---|
| **Purpose of processing** | Receiving, assessing and answering requests to exercise rights under the GDPR, and keeping proof of the reply. |
| **Categories of data subjects** | Patients, employees and others who make requests; their representatives. |
| **Categories of personal data** | Identification data; content of the request; proof of identity; correspondence and the reply. |
| **Legal basis (Art. 6 GDPR)** | Art. 6(1)(c) – the legal obligation in Art. 12–22 GDPR. |
| **Condition for special-category data (Art. 9 GDPR)** | Where the request contains health data: Art. 9(2)(f) or (h) – to be confirmed. |
| **Source of the data** | The data subject. |
| **Recipients (including processors)** | Authorised staff; the external privacy adviser, if needed. |
| **Transfers outside the EU/EEA** | No. |
| **Retention period** | See RET-09. |
| **Specific security measures** | Register kept separate from the medical record; identity checked before data is released; limited access. |
| **Assessments needed** | No separate assessment needed. |
| **Internal owner** | Dr. A |

</details>

<details>
<summary><strong>PA-10</strong> – Handling personal data breaches</summary>

| Field | Clinic X |
|---|---|
| **Purpose of processing** | Documenting every personal data breach (Art. 33(5) GDPR), notifying the supervisory authority and informing affected people when required. |
| **Categories of data subjects** | People affected by a breach (patients, staff). |
| **Categories of personal data** | Description of the breach; categories and approximate number of people and records; consequences; measures taken; contact details. |
| **Legal basis (Art. 6 GDPR)** | Art. 6(1)(c) – the obligations in Art. 33 and 34 GDPR. |
| **Condition for special-category data (Art. 9 GDPR)** | The register does not contain the medical data of affected people, only categories and numbers. |
| **Source of the data** | Staff; providers; affected people. |
| **Recipients (including processors)** | The supervisory authority; affected people; the IT Support Provider (V-03) and the external privacy adviser, if involved. |
| **Transfers outside the EU/EEA** | No. |
| **Retention period** | See RET-10. |
| **Specific security measures** | Register with limited access; breaches are reported internally without delay. |
| **Assessments needed** | No separate assessment needed. |
| **Internal owner** | Dr. A |

</details>

<details>
<summary><strong>PA-11</strong> – HR and payroll</summary>

| Field | Clinic X |
|---|---|
| **Purpose of processing** | Concluding and running employment or collaboration contracts, payroll, tax and social obligations, working time records, health and safety at work, occupational health. |
| **Categories of data subjects** | Employees and collaborators. |
| **Categories of personal data** | Identification data including the national ID number; contact; education and qualifications; licence to practise and professional authorisations; contract; salary and bank account; attendance and leave; occupational health certificate. |
| **Legal basis (Art. 6 GDPR)** | Art. 6(1)(b) and (c). |
| **Condition for special-category data (Art. 9 GDPR)** | Art. 9(2)(b) – obligations in employment and social security law (for example sick leave, occupational health certificate). |
| **Source of the data** | The data subject; authorities; the occupational health provider. |
| **Recipients (including processors)** | The Accounting Firm (V-04) – processor for payroll; labour, tax and social security authorities; the Occupational Health Provider (V-12) – separate controller; the professional college; the employee's bank. |
| **Transfers outside the EU/EEA** | No. |
| **Retention period** | See RET-11. |
| **Specific security measures** | Personnel files locked; access limited to management and Dr. A. |
| **Assessments needed** | Employee privacy notice – module 11. |
| **Internal owner** | Dr. A |

</details>

<details>
<summary><strong>PA-12</strong> – Recruitment <em>(optional)</em></summary>

| Field | Clinic X |
|---|---|
| **Purpose of processing** | Assessing candidates for open positions. |
| **Categories of data subjects** | Candidates. |
| **Categories of personal data** | CV, contact details, education and experience, other information the candidate sends. |
| **Legal basis (Art. 6 GDPR)** | Art. 6(1)(b) – steps taken at the candidate's request; (a) – consent, to keep the CV for future positions. |
| **Condition for special-category data (Art. 9 GDPR)** | No special-category data is requested. |
| **Source of the data** | The candidate. |
| **Recipients (including processors)** | Staff designated for recruitment, in practice Dr. A. |
| **Transfers outside the EU/EEA** | No. |
| **Retention period** | See RET-12. |
| **Specific security measures** | Limited access; CVs are not circulated through insecure channels. |
| **Assessments needed** | No separate assessment needed. |
| **Internal owner** | Dr. A |

</details>

<details>
<summary><strong>PA-13</strong> – Website and cookies <em>(optional)</em></summary>

| Field | Clinic X |
|---|---|
| **Purpose of processing** | Operation and security of the website, informing the public, contact form. |
| **Categories of data subjects** | Website visitors. |
| **Categories of personal data** | IP address; strictly necessary cookies; analytics cookies, with consent; data entered in the form. |
| **Legal basis (Art. 6 GDPR)** | Art. 6(1)(f) – website security and strictly necessary cookies; (a) – consent for non-essential cookies (Law no. 506/2004 – to be verified). |
| **Condition for special-category data (Art. 9 GDPR)** | The form does not ask for health data. Visitors are asked not to write medical details in the form. |
| **Source of the data** | The visitor. |
| **Recipients (including processors)** | The Hosting Provider (V-07) – processor; the analytics tool provider, to be confirmed in the vendor review. |
| **Transfers outside the EU/EEA** | No by design; to be confirmed for the analytics tool. |
| **Retention period** | See RET-13. |
| **Specific security measures** | HTTPS; regular updates; cookie banner; administrator access with strong authentication. |
| **Assessments needed** | Cookie policy – published on the website with the cookie banner. |
| **Internal owner** | Dr. A |

</details>

### General security measures

These apply to every activity (Art. 30(1)(g)). The security policy (module 7) holds the detail.

- Access control: individual accounts and strong passwords; access limited to the data each role needs; access removed when a collaboration ends.
- Device security: updates, antivirus, automatic screen lock, encryption of laptops and mobile devices that hold data.
- Backups: practice software backed up by its provider; non-clinical files on an encrypted disk kept locked; restore tested periodically.
- Physical security: locked rooms for files and equipment, locked doors outside opening hours, controlled access to work areas.
- Paper documents: kept in locked cabinets; secure destruction when the retention period ends.
- Confidentiality and training: confidentiality undertakings signed by all staff; periodic training.
- Providers: Art. 28 GDPR contracts with providers that process data for the clinic.
- Incident handling: a procedure for reporting and response (separate document).

### Processors and other main recipients

The record lists every provider that receives data, and says whether it is a processor (needs an Art. 28 contract) or a separate controller. Module 9 holds the vendor register and the agreement.

| Provider | Service | Activities | Role | Art. 28 contract | Location |
|---|---|---|---|---|---|
| Practice Software Provider (V-01) | Medical software, hosting, maintenance | PA-01–05 | Processor | Yes, Dec 2026 | EU |
| IT Support Provider (V-03) | Remote IT support | PA-02, 13 | Processor | Yes, Dec 2026 | EU |
| Accounting Firm (V-04) | Accounting, payroll | PA-04, 11 | Processor | Yes, Dec 2026 | EU |
| Messaging Provider (V-02) | Messages to patients | PA-06, 08 | Processor | Yes, Dec 2026 | EU |
| E-mail Provider (V-06) | Business e-mail | PA-01, 05, 09, 12 | Processor | Standard DPA reviewed | EU region |
| CCTV Installer (V-05) | Maintenance of the video system | PA-07 | Processor (if it has access) | Yes (limited), Dec 2026 | EU |
| Hosting Provider (V-07) | Website | PA-13 | Processor | Yes, Dec 2026 | EU |
| Shredding Provider (V-10) | Paper destruction | PA-02, 04, 11 | Processor | Yes, Dec 2026 | EU |
| Partner Laboratory (V-08) | Tests, investigations | PA-05 | Separate controller | Not applicable | EU |
| Occupational Health Provider (V-12) | Medical checks for staff | PA-11 | Separate controller | Not applicable | EU |
| Card Payment Provider (V-11) | Payments | PA-04 | Separate controller | Not applicable | EU |

## 4. Design decisions

**1. Cards, plus a spreadsheet.** Each activity is a card a non-technical owner can read in a minute. The same data is available as a CSV for filtering and sorting. A single giant table is easy to build but hard for a small clinic to read and keep up to date.

**2. All thirteen, including the dull ones.** Inspectors and patients ask about CCTV, staff data and the website as much as about medical records. HR, recruitment, requests and incidents are included so no part of the clinic is a blank spot.

**3. Legal bases are chosen per activity, not per clinic.** Care rests on Art. 6(1)(b) and (c) with Art. 9(2)(h) and the secrecy condition in Art. 9(3). CCTV rests on legitimate interest (6(1)(f)). Marketing rests on consent (6(1)(a)). HR data uses Art. 9(2)(b). Keeping them separate prevents the common mistake of using consent for everything.

**4. Uncertainty is written down, not hidden.** Where a point still needs checking, the card says so. For example, PA-03 flags that another Art. 9 condition may fit a specific report better. A record that shows its open questions is more credible than one that looks perfect.

**5. One retention code per activity.** Each card points to codes in the retention schedule (module 4) instead of repeating periods. Changing a period then means changing one place.

**6. The visiting physician is recorded as a separate controller.** Dr. B works at the clinic two days a week using its premises and system. The register treats him as a separate controller for his own patients, and flags the arrangement as *to be confirmed* by a lawyer.

**7. Assessments are recorded where they happen.** Each card that triggers one (DPIA threshold, legitimate interest assessment, transfer check) says so in its "assessments needed" line, with a pointer to the module that holds it.

## 5. Romanian national layer

> **Romania-specific points** (the structure of the record applies anywhere in the EU)
>
> - **National ID number (CNP).** Cards that use it (PA-02, PA-03, PA-04, PA-11) cite the safeguards in Art. 4 of Law no. 190/2018.
> - **Staff monitoring.** The CCTV card (PA-07) cites Art. 5 of Law no. 190/2018, which sets conditions for monitoring employees: a well-founded legitimate interest, prior information, consultation of the union or employee representatives, necessity, and storage of no more than 30 days.
> - **Marketing and cookies.** PA-08 and PA-13 refer to Law no. 506/2004. *To be confirmed: the specific provisions.*
> - **Authority.** The supervisory authority is ANSPDCP. The record is made available on request, in Romanian in practice.
> - **Public-sector reporting.** PA-03 covers the county health insurance fund and other authorities. *To be confirmed: the exact Art. 9 condition for each report.*

## 6. Keeping it alive

A ROPA is a working document. Update it when:

- a new activity, application or provider is introduced
- a purpose or legal basis changes
- a retention period, camera, form or campaign changes
- an incident or request shows the record was wrong

And review it in full once a year. Each change goes in the version history, with the date and the person responsible.

**Annual review checklist**

- [ ] Does each card still describe what really happens?
- [ ] Is every provider in the processor table, with a signed agreement?
- [ ] Do the notice and the retention schedule match the cards?
- [ ] Have any optional activities started or stopped?
- [ ] Are the "to be confirmed" items closed?
- [ ] Is the version history updated?

## 7. Blank template

The template follows the structure above. Yellow fields are for you to complete. Cards marked *if applicable* can be deleted if the activity does not exist at your clinic (do not renumber the others).

**Download:** [ROPA_Blank_Template_EN.docx](../downloads/03-ropa/ROPA_Blank_Template_EN.docx)

**How to use it**

1. Start with the overview table and decide which activities apply.
2. Complete one card at a time, from the real workflow, not from the notice.
3. Fill in the processor table and sign Art. 28 agreements where needed (module 9).
4. Check against the notice (module 2) and the retention schedule (module 4).
5. Delete the completion-notes page and the yellow highlight.
