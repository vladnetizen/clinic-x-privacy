---
title: "Module 1 · Clinic Profile"
description: "The single fact base for the Clinic X case study: who the practice is, who works there, what it holds, which cameras and systems it runs, who else touches the data, and the fixed numbers every other document uses."
---


> **Fictional example.** Clinic X is an invented practice. This page is educational and is not legal advice.

| | |
|---|---|
| **What it is** | One page of facts about the practice, which every other document draws on |
| **Who it is for** | Anyone building or checking a privacy programme who needs the documents to agree with each other |
| **GDPR hook** | Art. 5(2) and 24 (accountability), Art. 30 (what a record of processing must name), Art. 37 (data protection officer) |
| **Owner at Clinic X** | Dr. A (owner-physician) |
| **Review** | Yearly, and before any other document is changed |
| **You get** | This page, a fact sheet (Word), seven tables as spreadsheets and a data file, and a blank profile to fill in |

## 1. Why it exists

A privacy programme is a set of documents that say the same things. The notice names the cameras, the record of processing names them again, the retention schedule gives their period, and the employee notice describes who can watch. When one of these changes alone, the documents start to disagree, and the first person to notice is usually an inspector or a patient.

The profile prevents that. It holds every fact that more than one document uses, once. When a document and the profile disagree, the profile wins, and the profile is changed first.

Three choices shape it:

- **Facts once.** Roles, systems, providers, cameras and dates are written here and nowhere else. Other documents refer to them by code (S-01, A-10, V-05).
- **Numbers fixed.** Every period, deadline and threshold (section 10) is chosen once and used unchanged on every page.
- **Nothing real.** The practice is built to resemble nothing. The rules for that are in section 2.

## 2. How the clinic is made fictional

1. **Nothing real.** No real names, addresses, phone numbers, fiscal codes, vendors or dates.
2. **Safe identifiers.** E-mail and web addresses use the reserved `.example` domain. The phone number is a placeholder that does not work. Fiscal and trade-register codes are visibly invalid, all zeros.
3. **Invented place.** The clinic is in "Town X", a fictional mid-sized town in central Romania. No county is named.
4. **No vendor names.** Providers appear as generic roles ("Practice Software Provider", "Accounting Firm"). No product or company is named, real or invented.
5. **No personal names.** People are letters and roles (Dr. A, Nurse C), with no first names, surnames or biography beyond the role.
6. **Shape, not identity.** What the case study keeps from real life is the shape of a small private practice: its size, data flows and risks.
7. **A disclaimer on every page:** *fictional clinic · educational example · not legal advice*.

## 3. Identity card

| Field | Value |
|---|---|
| Brand | **Clinic X** (Romanian: *Cabinet Medical X*) |
| Legal entity | X Medical S.R.L. |
| Controller | X Medical S.R.L., represented by Dr. A |
| Fiscal code (CUI) | RO 00000000 *(invalid on purpose)* |
| Trade register | J00/0000/2018 *(invalid on purpose)* |
| Address | Str. X nr. 0, Town X, Romania *(fictional)* |
| Phone | +40 700 000 000 *(placeholder)* |
| General e-mail | contact@clinic-x.example |
| Privacy e-mail | privacy@clinic-x.example |
| Website | www.clinic-x.example |
| Founded | 2018 |
| Type | Private outpatient practice, one site, ground-floor premises (rented) |
| Services | Family and internal medicine consultations, ECG, abdominal ultrasound, blood sampling (samples go to a partner lab), prescriptions and referrals |
| Health insurance | Contract with the county health insurance fund for part of the consultations; the rest is private-pay |
| Opening hours | Mon–Fri 08:00–18:00, Sat 09:00–13:00 |
| DPO | **Not appointed.** Not a public authority; core activities are not large-scale processing (recital 91: an individual physician is not large-scale). Reasoning recorded in the ROPA notes and revisited yearly. |
| Privacy contact | Dr. A (owner-physician), supported by an external privacy adviser |

## 4. People and roles

| ID | Label (fictional) | Role | Employment | Data access |
|---|---|---|---|---|
| S-01 | Dr. A | Owner-physician, family medicine; legal representative; privacy contact; incident lead | Owner | Full clinical + admin + CCTV |
| S-02 | Dr. B | Visiting physician (ultrasound/cardiology), 2 days a week | Independent collaborator (own practice) | Clinical records of his own patients |
| S-03 | Nurse C | Practice nurse (blood sampling, ECG, triage) | Employee | Clinical (limited), appointments |
| S-04 | Receptionist D | Receptionist / administrator | Employee | Appointments, contact and billing data; no clinical notes |
| S-05 | Accountant E | Accountant | External (Accounting Firm) | Invoices, payroll data; no clinical data |
| S-06 | *(unnamed)* IT support technician | Remote support, ~4 hours a month | External (IT Support Provider) | Admin access to devices; no routine access to clinical records |
| S-07 | *(unnamed)* | Cleaning (evenings) | External, small contractor | Physical access to premises only |

**Headcount:** two employees, one owner and one visiting collaborator. Three external service providers have some access.

**Why the headcount matters.** With two employees, a staff notice, a confidentiality undertaking and one consultation meeting are proportionate. A visiting physician raises the real question of whether he is an independent controller, a joint controller or a processor. The profile takes the position that Dr. B is an independent controller for his own patients' files, using the practice's premises and system under a documented arrangement. That is a position, not a finding, and it is on the list of open items (OI-12).

## 5. Patients and volumes

| Item | Value |
|---|---|
| Patient records on file | ~2,800 |
| Visits per month | ~350 |
| New patients per month | ~15 |
| Share of patients over 65 | roughly one third |
| Minors | a minority; the parent/guardian is the contact |
| Special-category data | Health data in virtually every record; occasional vaccination and chronic-condition data |
| CNP (national ID number) | Collected for insured patients and invoicing, handled under the Romanian CNP safeguards |
| Data subject requests per year | ~3 (mostly copies of records); target response ≤ 30 days |
| Newsletter / promo subscribers | ~120, consent-based |
| Incidents so far | 1 near miss (misdirected e-mail, caught before sending the attachment) used in the incident drill |

These numbers are why the programme is sized as it is. About 2,800 records and 350 visits a month is a small practice. Health data is in nearly every record, which is why the security and retention work matters more than the size suggests.

## 6. Premises and cameras

**Layout:** entrance vestibule, reception, waiting room, corridor, two consultation rooms, one treatment room (blood sampling and ECG), one staff and admin room, and one patient toilet.

| Camera | Location | Covers | Not covered |
|---|---|---|---|
| C1 | Entrance vestibule | Door and vestibule | Street beyond the threshold |
| C2 | Reception | Counter and desk area | Screens (angle checked) |
| C3 | Waiting room | Seating area | Toilet door |
| C4 | Corridor | Corridor to the rooms | Interiors of consultation and treatment rooms |

- **No camera** in consultation rooms, treatment room, toilet or staff room. **No audio.**
- **Recorder:** local NVR in a locked cabinet in the admin room. Overwrites automatically.
- **Retention:** **7 days** (recommended), never more than 30 days. Overwrite is automatic; extracts for incidents are kept only as long as the incident requires.
- **Access:** Dr. A only; the installer works under supervision.
- **Signage:** at the entrance and in the waiting room, with the notice available at reception and on the website.
- **Monitoring of staff:** no live viewing; footage is not used for performance monitoring. Staff consultation recorded (Law 190/2018 Art. 5 conditions).
- **System limits (module 10):** no remote access (maintenance on site, supervised), no analytics or facial recognition, no live viewing.
- **CCTV dates (Dec 2026):** staff consultation meeting Thu 3 Dec 2026 (Dr. A, Nurse C, Receptionist D; no union or representatives; cameras pre-date the programme; employee notice handed out at the meeting, module 11); camera angles checked Fri 4 Dec 2026; LIA v1.0 approved Mon 7 Dec 2026; next review Dec 2027.
- **Known gap:** the entrance sign says "safety of patients and staff" only; notice section 7 also names property. Align at next reprint (by 31 Jan 2027).
- **Employee notice (module 11):** v1.0 in force Thu 3 Dec 2026 (handed out at the consultation meeting to Nurse C and Receptionist D; Dr. B acknowledged Tue 26 Jan 2027). Gap stated in the notice: no retention period yet for application access logs (to be set with the software provider by 31 Mar 2027). Joiner/leaver checklist v1.0 adopted Dec 2026; it is the checklist named in SEC-31 (stays Partial until first real use).
- **Access and export log** form adopted Dec 2026; examples LOG-2027-001 to 003 (bag reported 18 May 2027, police copy 24 May, REQ-2027-003 search 12 Jul).

The assessment behind these rules is [module 10](../10-cctv-lia/). The staff side is [module 11](../11-employee-notice/).

## 7. Systems and assets

| ID | Asset | What it holds | Hosting / location | Owner |
|---|---|---|---|---|
| A-01 | **Practice Software (cloud)** — practice management and electronic records | Patient files, appointments, billing, imaging attachments | Vendor cloud, EU data centre | S-01 |
| A-02 | Reception PC | Browser access to A-01; scanned documents (temporary) | Reception | S-04 |
| A-03 | Doctor laptop (S-01) | Browser access to A-01; admin files | Encrypted disk | S-01 |
| A-04 | Visiting-physician laptop (S-02) | His own tools; accesses A-01 with his own account | His device | S-02 |
| A-05 | Ultrasound unit | Images, short-term local storage, exported to A-01 | Treatment room | S-02 |
| A-06 | ECG unit | Traces, exported to A-01 | Treatment room | S-03 |
| A-07 | Business e-mail (shared mailbox + personal boxes) | Appointment requests, lab results, referrals | International cloud suite, EU region | S-01 |
| A-08 | SMS/e-mail reminder service | Names, phone numbers, appointment times | Vendor cloud | S-04 |
| A-09 | Website with contact form and analytics | Form submissions, cookie data | Hosting provider, EU | S-01 |
| A-10 | CCTV system (4 cameras + NVR) | Video, 7-day buffer | Locked cabinet, admin room | S-01 |
| A-11 | Paper records | Consent/acknowledgement forms, lab printouts, HR files | Locked cabinet, admin room | S-04 / S-01 |
| A-12 | Admin backup disk | Encrypted copy of non-clinical files (HR, contracts) | Locked cabinet | S-01 |
| A-13 | Wi-Fi | Staff network and separate guest network | Router, admin room | S-06 |
| A-14 | Staff mobile phones | Calls, texts to patients only for appointment logistics; **no clinical data on messaging apps** | Personal/company phones | Each user |

## 8. Providers and recipients

Generic labels only. "Role" is the GDPR role the case study assigns, which [module 9](../09-providers/) tests against what each provider does.

| ID | Vendor | Service | Role | Art. 28 agreement | Location |
|---|---|---|---|---|---|
| V-01 | **Practice Software Provider** | A-01 practice management / records | Processor | Yes, signed (worked example) | EU |
| V-02 | **Messaging Provider** | A-08 reminders by SMS/e-mail | Processor | Yes | EU |
| V-03 | **IT Support Provider** | Remote IT support | Processor (can access systems) | Yes | EU |
| V-04 | **Accounting Firm** | Bookkeeping and payroll | Processor for payroll; independent role for statutory accounting duties (note in ROPA) | Yes | EU |
| V-05 | **CCTV Installer** | CCTV installation and maintenance | Processor only if it can access recordings | Yes (limited) | EU |
| V-06 | **E-mail Provider** (large cloud suite) | A-07 business e-mail | Processor | Provider's standard DPA reviewed | EU region |
| V-07 | **Hosting Provider** | A-09 website hosting | Processor | Yes | EU |
| V-08 | **Partner Laboratory** | Partner laboratory; receives samples and sends results | Independent controller | Not applicable (documented data-sharing note) | EU |
| V-09 | **Dr. B** | Visiting physician | Independent controller | Premises/system arrangement | EU |
| V-10 | **Shredding Provider** | Confidential paper destruction | Processor | Yes | EU |
| V-11 | **Card Payment Provider** | Card terminal and payment processing | Independent controller | Not applicable | EU |
| V-12 | **Occupational Health Provider** | Medical checks for the clinic's own staff | Independent controller | Not applicable | EU |
| — | County health insurance fund and other authorities | Reporting, inspections | Independent controllers (legal obligation) | Not applicable | RO |
| — | Professional liability insurer | Claims, on request | Independent controller | Not applicable | EU |

**Transfers outside the EU/EEA:** none by design. Two things are noted for checking in the provider review: the e-mail provider's support access, and any analytics tool on the website (OI-15).

## 9. Processing activities

The 13 entries of the [record of processing](../03-ropa/), with the systems and providers they use and the retention row that applies.

| Code | Activity | Applies here | Main systems / vendors | Retention code |
|---|---|---|---|---|
| PA-01 | Appointments | Yes | A-01, A-02, phone, A-07 | RET-07 |
| PA-02 | Medical care and records | Yes | A-01, A-05, A-06, A-11 | RET-01, RET-02 |
| PA-03 | Reporting to the health insurance fund and authorities | Yes | A-01 | RET-01, RET-05 |
| PA-04 | Invoicing and accounting | Yes | A-01, V-04 | RET-05 |
| PA-05 | Laboratory and partner referrals and results | Yes | A-07, A-01, V-08 | RET-03, RET-04, RET-01 |
| PA-06 | Appointment and treatment communications | Yes | A-08, V-02 | RET-07 |
| PA-07 | CCTV | Yes | A-10 | RET-06 |
| PA-08 | Promotional communications (newsletter, consent-based) | Yes | A-08, V-02 | RET-08 |
| PA-09 | Data subject requests | Yes | A-07, request register | RET-09 |
| PA-10 | Security incidents | Yes | Breach register | RET-10 |
| PA-11 | HR and payroll | Yes | A-11, A-12, V-04 | RET-11 |
| PA-12 | Recruitment (spontaneous and advertised CVs) | Yes | A-07 | RET-12 |
| PA-13 | Website and cookies | Yes | A-09, V-07 | RET-13 |

Retention codes RET-01 to RET-13 are defined in [module 4](../04-retention/). A fourteenth activity (PA-14) is added in the story at the go-live of the AI notes pilot ([module 12](../12-dpia/)).

## 10. Fixed numbers

Use these everywhere. Do not vary them from page to page.

| Parameter | Value |
|---|---|
| Response time to a data subject request | 1 month (Art. 12(3)), clinic target 30 days, extendable by 2 months if complex |
| Breach notification to the authority | Within **72 hours** of becoming aware, unless unlikely to result in risk |
| Internal escalation of a suspected incident | Immediately, to the incident lead (S-01) |
| Staff report of an incident | Immediately, at most **1 hour** from noticing (working hours); deputy incident lead: Nurse C (S-03), who also calls the external privacy adviser if Dr. A is unreachable |
| Initial incident assessment | Within **24 hours** of the report |
| Post-incident review | Within **30 days** of closing the incident |
| Breach register retention | **5 years** from closing the incident (RET-10) |
| Vendor notification of a breach to the clinic | Without delay, within **24 hours** of becoming aware (set in the Art. 28 agreement) |
| Reception forwards a patient request to the privacy contact | Within **one working day** |
| CCTV retention | **7 days**, absolute maximum 30 days |
| Promotional contacts | Until consent is withdrawn, **maximum 24 months** after last interaction or last consent confirmation |
| Staff training | On joining and **annually**; short role-based session (about 15–20 minutes extra for clinical and reception staff) plus a 5-question mini-test; record kept |
| Training format | New joiners: **45 minutes** before they get access to data. Annual refresher: **45 minutes**, held each December with the incident drill. Role part: **15–20 minutes** extra. Mini-test: 5 questions drawn from a bank of 10. Records kept with the personnel file (RET-11(a)). First programme session: **19 January 2027** |
| Incident drill | **Annually**, three rotating scenarios |
| Register reviews | ROPA and retention reviewed **annually** and on any new system or vendor |
| Access review | **Periodically** (clinic proposal: every 6 months; the security policy leaves the interval to be completed) |
| Destruction of records past retention | **Once a year**, logged in the destruction register |
| Backup rotation | Backups are overwritten after at most **3 months** |
| Password rule | At least **12 characters** or a passphrase, unique per account; password manager recommended |
| Two-step verification | Required for e-mail, cloud storage and the practice software where the provider offers it |
| Screen lock | Automatic after at most **5 minutes** |
| Critical security updates | Applied within **7 days** |
| Clinic's own backups (non-clinical files) | **Weekly**, encrypted, one copy kept off the premises; restore test **quarterly** |
| Maximum accepted downtime of the practice software | **4 hours**, then paper forms |
| Access-log spot check | **Quarterly** |
| Security baseline assessment | December 2026 (38 controls, status and owner per control); repeated yearly |
| Consent for marketing | Separate, opt-in, withdrawable at any time |
| Patient acknowledgement of the notice | Confirms reading only; **not consent** |

**Numbering schemes**

- Processing activities PA-01 to PA-13, and retention rules RET-01 to RET-13 (RET-11 is split into (a) personnel files and (b) payroll)
- Rights templates T0 to T14, and incident templates I1 to I7
- Security controls SEC-01 to SEC-38
- Staff S-xx, assets A-xx, providers V-xx

<div data-table-tools data-name="profile"></div>

## 11. Timeline

Dates are inside the fiction. Programme adoption is the central event; the later rows are the worked cases that modules 5, 6, 10 and 12 draw on.

| When (fictional) | Event |
|---|---|
| 2018 | Practice founded |
| March 2025 | **Patient notice v1.0** drafted and put in use (only document in place) |
| November 2026 | Baseline review: notice is solid, but there is no ROPA, retention schedule, rights procedure, incident process, security policy, vendor paper trail or staff notice |
| 1 December 2026 | **Privacy program v1.0** adopted; notice v2.0 replaces v1.0 |
| 7 Dec 2026 | DPIA procedure v1.0 adopted; screening SCR-2026-01 (CCTV: DPIA not required). 25 Mar 2027: SCR-2027-01 (website analytics, provisional) |
| December 2026 | Vendor agreements signed, staff briefed (15 minutes), CCTV LIA and employee consultation done |
| June 2027 | First access review |
| Oct–Nov 2027 | **AI consultation notes pilot:** screening SCR-2027-02 Mon 11 Oct (DPIA required); patient comment box 18–29 Oct; provider answers 22 Oct; adviser advice Thu 4 Nov; DPIA-2027-01 approved with conditions Mon 8 Nov; conditions C1–C6 due Fri 12 Nov; pilot (Dr. A only) Mon 15 Nov – Fri 10 Dec; review Mon 13 Dec 2027. New provider label V-13 (AI Scribe Provider, processor); new activity PA-14 at go-live |
| December 2027 | First annual review, training and incident drill |

## 12. The story the case study tells

**Before.** A conscientious small practice with one good document, the patient notice. Nothing else is written down.

**The gap.** A notice answers only "what do we tell patients?". A regulator, an insurer, or a patient asking for their records will ask "what do you actually do, who has access, how long do you keep it, and what if something goes wrong?".

**After.** A proportionate programme that a three-person practice can run:

1. Tell patients clearly (notice v2.0)
2. Know what you process (ROPA)
3. Keep it only as long as needed (retention schedule)
4. Answer people's requests (rights procedure + templates)
5. Handle incidents (procedure, register, drill)
6. Keep the data safe (security policy and controls)
7. Make staff aware (lean training)
8. Control suppliers (Art. 28 agreements + register)
9. Justify the cameras (LIA module)
10. Tell employees what happens to their data (employee notice)
11. Decide when a deeper assessment is needed (DPIA process)

**Design principle:** proportionate. Documents are short where the risk is low, and every page says what a small practice can skip.

**Downloads**

- [Clinic_Profile_v1.8_Clinic-X_EN.docx](../downloads/01-clinic-profile/Clinic_Profile_v1.8_Clinic-X_EN.docx): the fact sheet, in tables
- [Clinic_Profile_Blank_Template_EN.docx](../downloads/01-clinic-profile/Clinic_Profile_Blank_Template_EN.docx): the blank profile
- Spreadsheets: [people](../downloads/01-clinic-profile/Profile_People_Clinic-X_EN.csv), [assets](../downloads/01-clinic-profile/Profile_Assets_Clinic-X_EN.csv), [providers and recipients](../downloads/01-clinic-profile/Profile_Providers_and_recipients_Clinic-X_EN.csv), [processing activities](../downloads/01-clinic-profile/Profile_Processing_activities_Clinic-X_EN.csv), [program parameters](../downloads/01-clinic-profile/Profile_Program_parameters_Clinic-X_EN.csv), [camera plan](../downloads/01-clinic-profile/Profile_Camera_plan_Clinic-X_EN.csv) and [timeline](../downloads/01-clinic-profile/Profile_Timeline_Clinic-X_EN.csv)

## 13. What was verified, and what was not

**Checked**

- **Recital 91 GDPR.** Read on 7 November 2026 in a [published text](https://gdpr-info.eu/recitals/no-91/). It says the processing of personal data should not be considered large-scale where it concerns patient data of an individual physician. That is the basis for the "no DPO" position in section 3.
- **Consistency.** Codes, dates and figures were cross-checked between modules as each one was built, and differences were corrected in the documents. The final quality check repeats this across the whole site.

**Not verified, to be confirmed**

- **Whether a data protection officer is needed** (OI-27). Art. 37(1)(c) GDPR requires one where the core activities are large-scale processing of special-category data. A single-site practice with a visiting physician is a judgement, which the record of processing records and revisits each year. Any national rule has not been checked.
- **The visiting physician's role** (OI-12) and **the accounting firm's role split** (OI-13). These are positions for a lawyer to confirm.
- **Retention periods for medical records** (OI-01), **the text of ANSPDCP Decision 52/2012** (OI-02), **Law 190/2018 Art. 5** (OI-03), **Law 46/2003** (OI-05), **Law 506/2004** (OI-06), **the Art. 9 conditions** (OI-07), **the 72-hour count** (OI-09), **the breach channel** (OI-10), **NIS2 scope** (OI-11) and **the accounting retention text** (OI-26). Each is explained on the module page that uses it, and all are collected in the [open items register](../13-methodology/).
- **Transfers.** "None by design" is a design assumption until the provider review tests it (OI-15).
- **Everything about Clinic X itself is invented,** including the figures in section 5.

## 14. Design decisions

**1. One page rather than a glossary.** Facts that two documents share live here. A fact used once stays in its own document.

**2. Codes instead of names.** A document says "A-10" or "V-05", not a description. Changing a camera or a provider then means changing one row.

**3. A role is a position.** The GDPR role in section 8 is the one the case study takes, and the three uncertain ones (visiting physician, accounting firm, CCTV installer) say so on the pages that use them.

**4. Gaps are recorded, not tidied.** The entrance sign wording and the missing log retention period (both in section 6) are listed here, with the date by which each is fixed.

**5. Small numbers, kept.** One near miss, three requests a year and about 120 newsletter subscribers are small on purpose. The programme is sized to a practice this size.

**6. Nothing taken from a real practice.** The numbers and the layout are invented to fit a practice of this size.

## 15. Romanian national layer

> **Romania-specific points** (the profile structure applies anywhere in the EU)
>
> - **Company form and identifiers.** "S.R.L." is the Romanian limited company form. The fiscal code (CUI) and trade-register number follow Romanian formats and are invalid here on purpose.
> - **National ID number (CNP).** Collected for insured patients and invoicing. Art. 4 of Law no. 190/2018 sets safeguards. *Wording to be confirmed (OI-04).*
> - **Cameras.** Art. 5 of Law no. 190/2018 sets conditions for video monitoring of employees (module 10).
> - **Health insurance fund.** The practice reports to the county health insurance fund for the consultations it covers (PA-03). *The Art. 9 condition is to be confirmed (OI-07).*
> - **Authority.** ANSPDCP is the supervisory authority named in the notices.

## 16. Blank template

The blank profile has the same tables, with yellow fields. Fill it in before you write any other document, and keep it open while you do.

**How to use it**

1. Fill in the identity card and the people. Use letters and roles if you will publish the result.
2. Count your patients, visits and requests honestly. These numbers decide what is proportionate.
3. List every system that holds personal data, including paper, personal phones and the Wi-Fi.
4. List every provider and recipient, and write down what you think its GDPR role is. Check the role later against what it does.
5. Set the fixed numbers once (response times, retention, training, backups) and copy them into the other documents from here.
6. Review it each year and whenever a system, provider or camera changes. Change the profile first.
