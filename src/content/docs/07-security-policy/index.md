---
title: "Module 7 · Security policy"
description: "An information security policy a three-person clinic can actually follow, with a 38-control register, an honest baseline assessment, an asset inventory and a staff pack."
---


> **Fictional example.** Clinic X is an invented practice. This page is educational and is not legal advice.

| | |
|---|---|
| **What it is** | The practice's written rules for protecting data, and a register that shows how far each rule is already in place |
| **Who it is for** | All staff and collaborators, the security lead, providers who touch the systems |
| **GDPR hook** | Art. 32 (security of processing), Art. 5(1)(f), Art. 24 and 25 |
| **Owner at Clinic X** | Dr. A (owner-physician), supported by the IT Support Provider |
| **Review** | Yearly, with the controls register re-scored each time |
| **You get** | A 13-section policy, a 38-control register with a baseline, an asset inventory, a staff pack and a blank version |

## 1. Why it exists

Article 32 asks for "appropriate" technical and organisational measures, judged against the risk. It does not give a list. That leaves a small clinic with two bad options: copy a corporate policy it cannot follow, or write nothing.

This module takes a third route:

- **A short policy in plain language,** with rules a receptionist can read in ten minutes.
- **A register of 38 controls,** each with a status, an owner and a date. The register, not the policy, shows whether the clinic is actually protected.
- **An honest baseline.** On 1 December 2026 Clinic X scores itself: **11 controls in place, 21 partly, 6 not yet.** A clinic that marks everything green has not looked.
- **Proportion.** Clinic X has three people, one cloud practice system and a locked cabinet. The measures are chosen for that, and say so.

### How the controls answer Art. 32

| Art. 32(1) heading | What it asks for | Controls in this register |
|---|---|---|
| (a) Pseudonymisation and encryption | Protect data in a way that fits the risk, including by encryption. | SEC-09, SEC-15 |
| (b) Confidentiality, integrity, availability and resilience | Keep systems and services secure and able to withstand problems. | SEC-01 to SEC-08, SEC-10 to SEC-14, SEC-18 to SEC-26, SEC-29 to SEC-31 |
| (c) Restoring availability and access | Get data back in a timely way after an incident. | SEC-15 to SEC-17, SEC-33, SEC-34 |
| (d) Regular testing and evaluation | A process to test whether the measures work. | SEC-16, SEC-27, SEC-28, SEC-32, SEC-35 to SEC-38 |

## 2. The policy at a glance

### Principles

- Confidentiality, integrity, availability: data is reachable only by those authorised, is correct and complete, and can be used when needed.
- Need to know: each person has access only to the data their tasks require.
- Minimisation: only what is needed is collected and kept (see the retention schedule).
- Proportionality: measures are chosen according to the risks, taking into account the nature of the data (health data), the cost and the size of the practice (Art. 32 GDPR).
- Accountability: each employee answers for following the policy; exceptions are approved in writing.

### Roles

| Role | Responsibilities |
|---|---|
| Physician in charge (Dr. A) | Approves the policy, provides the resources, decides on exceptions and is finally accountable for the security of the data. |
| Security lead (Dr. A, owner-physician) | Applies and updates the policy, keeps the asset inventory and the controls register (Annex B), coordinates training and the relationship with the IT provider, and reviews access and backups regularly. |
| Staff and collaborators | Follow the policy, sign the confidentiality undertaking, attend the training and report incidents at once. |
| IT and software providers (IT Support Provider, Practice Software Provider) | Administer the systems as the contract says (Art. 28 GDPR) and notify incidents without delay. |

### Data classification

| Level | Examples | Minimum rules |
|---|---|---|
| Strictly confidential | Health data, national ID number (CNP), test results, medical images, health data of staff | Access by role only, individual accounts, encryption on mobile devices, no unsafe channels, paper in locked rooms. |
| Confidential | Contact and identification data, appointments, invoices, HR and financial data, CCTV images | Limited access, individual accounts, controlled channels. |
| Internal | Procedures, policies, rotas, administrative mail without personal data | Internal use only. |
| Public | Website content, presentation material | No restriction; approved before publication. |

### Main risks

| Risk | Impact | Likelihood | Main measures (sections) |
|---|---|---|---|
| Phishing, a compromised account | High | Medium | Passwords and two-step verification (4), training (11) |
| Ransomware or other malware | High | Medium | Updates and antivirus (5), backups (6) |
| Lost or stolen device | High | Medium | Encryption, screen lock (4, 5) |
| Unauthorised access by staff (curiosity, misuse) | High | Low | Role-based access, logs (4, 10) |
| Data sent to the wrong person (e-mail, SMS) | High | Medium | Communication rules (8), training (11) |
| Patients or visitors seeing data (screen, reception) | Medium | Medium | Physical security (7) |
| Paper documents lost or stolen | High | Low | Locked cabinets, clean desk (7) |
| Backups missing or failing | High | Medium | Backups and restore tests (6) |
| A provider is compromised | High | Low | Contracts and provider review (9) |
| Data visible through the CCTV system, or unauthorised access to footage | Medium | Low | Restricted access to footage (7, 10) |

Impact is high because health data is involved. The likelihood column is the clinic's own estimate and is revisited every year. Note the three "Medium" entries that tie to real events: a near-miss with a misdirected e-mail, a laptop that travels, and backups that have never been tested.

## 3. The rules, section by section

Open a section to read the rules as written for Clinic X.

<details>
<summary><strong>4. Access control</strong></summary>

- Individual accounts. Everyone has their own account; shared accounts are not allowed. Administrator accounts are separate from day-to-day accounts.
- Passwords. At least 12 characters or a passphrase, unique for each account and never reused. They are changed only if compromise is suspected. A password manager is recommended. Passwords are not written on paper left in view and are not shared with anyone, colleagues and providers included.
- Two-step verification. Required for e-mail, cloud storage and the practice software, where it is available (to be confirmed with the Practice Software Provider).
- Role-based access. Access follows the matrix below and is reviewed every 6 months and whenever someone changes role.
- Joining and leaving. Access is given after the undertaking is signed and the training is done. When someone leaves or changes role, access is removed the same day and devices and keys are returned.
- Screen lock. Automatic after at most 5 minutes, and manual whenever someone steps away.

**Access matrix**

| Data / system | Physician in charge | Visiting physician | Nurse | Reception | Accounting Firm | IT Support Provider |
|---|---|---|---|---|---|---|
| Clinical record | Full | Own patients only | Patients in care | — | — | — (technical access only when justified, logged) |
| Identification and contact data | Full | Own patients | Full | Full | — | — |
| Appointments | Full | Own patients | Full | Full | — | — |
| Billing and payments | Read | — | — | Full | Accounting documents | — |
| HR and payroll | Full | — | — | — | Payroll | — |
| CCTV footage | Authorised person only | — | — | — | — | Maintenance, no viewing |
| System administration | Account admin | — | — | — | — | Full, logged |

</details>

<details>
<summary><strong>5. Equipment and network</strong></summary>

- Updates. Operating systems and applications update automatically; critical updates are applied within 7 days.
- Malware protection. Antivirus or endpoint protection is active and up to date on every computer.
- Device encryption. The disks of laptops, phones and tablets that hold data are encrypted. A lost device is reported at once.
- Network. The router has its default password changed and a firewall on. The patients' Wi-Fi is separate from the practice network. The internal network uses WPA2 or WPA3.
- Removable media (USB). Not allowed, except approved encrypted devices.
- Personal devices. Clinical data is not kept on personal devices. Staff phones are used only for appointment logistics, with no clinical data on messaging apps.
- Connected medical equipment is inventoried, updated as the manufacturer advises and, where possible, kept apart from the rest of the network.
- Remote access. Only through approved methods with two-step verification.
- Printers and scanners. Documents are not left in the device; storage functions are switched off where possible.

</details>

<details>
<summary><strong>6. Backups and continuity</strong></summary>

- Rule of 3-2-1 for the practice's own files: at least three copies, on two different media, one of them off the premises or disconnected. Copies are encrypted.
- Clinical data lives in the cloud practice software. The provider's backups and recovery commitments are set out in the Art. 28 agreement (module 9). The practice does not take its own copy of clinical data.
- Frequency: weekly. Copies are kept for no more than 3 months, in line with the retention schedule.
- Restore tests: at least quarterly, with the result noted.
- Running without the system: if the practice software is unavailable, consultations continue on prepared paper forms, entered into the software afterwards. Maximum accepted downtime: 4 hours.

</details>

<details>
<summary><strong>7. Physical security</strong></summary>

- Rooms: the archive, the equipment cabinet and the video recorder are locked, and keys are listed. The alarm is active.
- Paper: patient files are kept in locked cabinets. At the end of the day no documents with personal data are left on desks (clean desk).
- Reception and waiting room: screens cannot be seen by patients; diagnoses are not discussed at the desk or within hearing of others; patients are called by first name.
- Visitors and providers are accompanied in areas with personal data and are not left alone in consulting rooms or the archive.
- Documents outside the practice: only with the approval of the physician in charge, and under safe conditions.
- Video images: the recorder is in a locked room; footage is accessed only with an individual account by authorised persons, and exports are logged.
- Destruction: paper is shredded or collected by an authorised firm; equipment taken out of use is securely wiped before it leaves.

</details>

<details>
<summary><strong>8. Communication and data transfer</strong></summary>

- E-mail: health data is not sent by plain e-mail. Use a password-protected attachment (password given through another channel) or a secure platform (a password-protected file; the password is given by phone). The recipient is checked twice before sending.
- Messaging apps and social media: not used for patients' health or identification data. No exceptions.
- SMS: appointment messages contain no diagnosis or medical detail.
- Phone: the caller's identity is checked before any personal information is given. Health data is not given to unidentified callers.
- Photos and recordings: taking pictures or recordings of documents, screens or patients with personal devices is prohibited. Clinical images are taken only with approved means and with the patient told.
- Laboratories and collaborators: exchanges use agreed, secure channels.
- Cloud storage: only services approved by the practice, with an Art. 28 agreement and data stored in the EU/EEA unless otherwise provided.

</details>

<details>
<summary><strong>9. Providers</strong></summary>

- Each provider that processes data for the practice signs an Art. 28 agreement covering confidentiality, security measures, incident notice, sub-processors, and return or deletion at the end.
- At selection and every year the practice checks: where the data is stored, which security measures apply, whether sub-processors are used, what certifications or policies exist, and how incidents are handled.
- Providers are listed in the ROPA and in the asset inventory.

</details>

<details>
<summary><strong>10. Logging, monitoring and new systems</strong></summary>

- Access logs: the practice software and the video system keep access logs where they can. The security lead reviews a sample every quarter, looking at unusual access: records unrelated to care, access outside working hours.
- Staff monitoring: the practice does not systematically monitor staff communications or activity without respecting Art. 5 of Law no. 190/2018 and informing staff beforehand.
- New systems and services: before introducing a new application, provider, device or processing, the security lead is told. Data protection by design (Art. 25 GDPR), the need for an impact assessment, the provider contract and the ROPA are all checked.

</details>

<details>
<summary><strong>11. Staff: undertaking, training, leaving</strong></summary>

- Everyone with access to data signs the confidentiality undertaking when starting; the duty continues after they leave.
- Training is given on joining and at least once a year, and after incidents or relevant changes (module 8). Attendance is recorded.
- Breaking the policy can lead to disciplinary action and, where relevant, civil or criminal liability under the law.
- On leaving: access is removed the same day, equipment, keys and documents are returned, and the confidentiality duty is restated.

</details>

<details>
<summary><strong>13. Compliance, exceptions and review</strong></summary>

- Review: the policy is reviewed at least once a year and after significant changes (activities, providers, technology, incidents). The controls register (Annex B) is updated at each review.
- Check: at least once a year the security lead carries out an internal check using Annex B and reports to the physician in charge.
- Exceptions: any departure from the policy is approved in writing by the physician in charge, with a reason, compensating measures and an end date. Exceptions are kept in a list.

</details>

Section 12 of the policy points to the other modules: incidents (module 6), retention (module 4) and data subject rights (module 5).

## 4. The controls register and the December 2026 baseline

Each control has a **status** (Yes, Partial, No or N/A), an **owner** and a **date**. Status is shown in words and symbols, never by colour alone.

### Where the clinic stands

| Domain | ✔ Yes | ◐ Partial | ✖ No | Total |
|---|---|---|---|---|
| Access | 1 | 5 | 0 | 6 |
| Equipment | 2 | 4 | 0 | 6 |
| Network | 2 | 0 | 0 | 2 |
| Backups | 0 | 1 | 1 | 2 |
| Continuity | 0 | 1 | 0 | 1 |
| Physical | 2 | 3 | 0 | 5 |
| Communication | 0 | 3 | 1 | 4 |
| Providers | 0 | 1 | 1 | 2 |
| Staff | 0 | 1 | 2 | 3 |
| Monitoring | 0 | 0 | 1 | 1 |
| Incidents | 1 | 1 | 0 | 2 |
| Governance | 3 | 1 | 0 | 4 |
| All controls | 11 | 21 | 6 | 38 |

### What the baseline found

- **Many controls were already half there.** The clinic had a locked cabinet, an encrypted doctor's laptop and automatic updates. What was missing was the written rule and the owner.
- **Six controls were not in place at all:** restore test, photographing rules, provider security review, signed confidentiality undertakings, training and log review. Four of them are people-and-paper tasks that cost nothing but time.
- **One finding links straight to module 6.** Lab results travel by e-mail (SEC-23 is "Partial"). The incident in that module, a result sent to a mistyped address, is exactly the failure this control was meant to prevent. The register had recorded the password-protection rule as adopted but "not yet checked in practice", which is what the incident then showed.
- **The cheapest fixes come first.** Individual accounts, two-step verification, screen lock, undertakings and training are all due by the end of January.

### Next actions, in date order

| Due | Code | Action (control) | Owner | Status |
|---|---|---|---|---|
| 31 Jan 2027 | SEC-01 | Individual accounts; no shared accounts. (The reception PC has one shared login. Create individual accounts.) | IT Support Provider | ◐ Partial |
| 31 Jan 2027 | SEC-03 | Two-step verification for e-mail, cloud and the practice software. (On for e-mail. Practice software option to be confirmed with its provider.) | Dr. A | ◐ Partial |
| 31 Jan 2027 | SEC-06 | Automatic screen lock after at most 5 minutes. (Laptop: 5 min. Reception PC: 15 min, to be changed.) | IT Support Provider | ◐ Partial |
| 31 Jan 2027 | SEC-13 | Personal devices: written rules, or forbidden for health data. (Rule in the policy. To be added to the staff notice.) | Dr. A | ◐ Partial |
| 31 Jan 2027 | SEC-18 | Archive, equipment and video system in locked rooms; key list. (Rooms locked. No key list yet.) | Dr. A | ◐ Partial |
| 31 Jan 2027 | SEC-19 | Files in locked cabinets; clean desk and clean screen. (Cabinets locked. Clean-desk habit varies at reception.) | Receptionist D | ◐ Partial |
| 31 Jan 2027 | SEC-20 | Reception screens not visible to patients; discretion at the desk. (The reception screen is partly visible from the waiting room. Privacy filter to be fitted.) | Dr. A | ◐ Partial |
| 31 Jan 2027 | SEC-25 | Photographing documents and screens with personal devices is forbidden. (To be communicated in the staff notice and the training.) | Dr. A | ✖ No |
| 31 Jan 2027 | SEC-26 | Caller's identity checked before data is given by phone. (Practised informally. To be written into the training.) | Receptionist D | ◐ Partial |
| 31 Jan 2027 | SEC-29 | Confidentiality undertakings signed by all staff. (To be signed when the programme starts.) | Dr. A | ✖ No |

The complete list is in the register below and in the CSV.

<div data-table-tools data-name="security"></div>

### The full register

| Code | Domain | Control | Status | Owner | Due | Notes |
|---|---|---|---|---|---|---|
| SEC-01 | Access | Individual accounts; no shared accounts. | ◐ Partial | IT Support Provider | 31 Jan 2027 | The reception PC has one shared login. Create individual accounts. |
| SEC-02 | Access | Passwords of at least 12 characters or a passphrase, unique; password manager. | ◐ Partial | Dr. A | 28 Feb 2027 | Rule adopted. Password manager not yet chosen. |
| SEC-03 | Access | Two-step verification for e-mail, cloud and the practice software. | ◐ Partial | Dr. A | 31 Jan 2027 | On for e-mail. Practice software option to be confirmed with its provider. |
| SEC-04 | Access | Role-based access (matrix) and periodic review of rights. | ◐ Partial | Dr. A | 30 Jun 2027 | Matrix defined. First review due after six months. |
| SEC-05 | Access | Access removed the same day when someone leaves. | ✔ Yes | Dr. A | — | In the policy. No leaver yet to test it. |
| SEC-06 | Access | Automatic screen lock after at most 5 minutes. | ◐ Partial | IT Support Provider | 31 Jan 2027 | Laptop: 5 min. Reception PC: 15 min, to be changed. |
| SEC-07 | Equipment | Automatic updates; critical patches within 7 days. | ✔ Yes | IT Support Provider | — | Automatic updates on. |
| SEC-08 | Equipment | Antivirus or endpoint protection active and up to date. | ✔ Yes | IT Support Provider | — | Built-in protection, centrally checked. |
| SEC-09 | Equipment | Disk encryption on laptops and on phones or tablets holding data. | ◐ Partial | Dr. A / Dr. B | 31 Mar 2027 | Doctor's laptop is encrypted. Visiting physician's laptop and staff phones to be confirmed. |
| SEC-10 | Network | Router and firewall configured; default password changed. | ✔ Yes | IT Support Provider | — | — |
| SEC-11 | Network | Patients' Wi-Fi separate from the practice network; WPA2 or WPA3. | ✔ Yes | IT Support Provider | — | Guest network is separate. |
| SEC-12 | Equipment | Removable media (USB) forbidden or encrypted. | ◐ Partial | Dr. A | 28 Feb 2027 | Rule adopted. USB ports not blocked. |
| SEC-13 | Equipment | Personal devices: written rules, or forbidden for health data. | ◐ Partial | Dr. A | 31 Jan 2027 | Rule in the policy. To be added to the staff notice. |
| SEC-14 | Equipment | Connected medical equipment inventoried, updated and separated. | ◐ Partial | Nurse C | 31 Mar 2027 | Ultrasound and ECG inventoried. Update status to be asked from the suppliers. |
| SEC-15 | Backups | Rule of 3-2-1; encrypted copies. | ◐ Partial | Dr. A | 28 Feb 2027 | Encrypted disk exists. No off-site copy of the administrative files yet. Provider backup of clinical data to be covered in the Art. 28 agreement. |
| SEC-16 | Backups | Restore test at least quarterly, with the result noted. | ✖ No | Dr. A | 31 Mar 2027 | Never tested. First test planned, then quarterly. |
| SEC-17 | Continuity | Procedure for working without the system (paper forms). | ◐ Partial | Nurse C | 28 Feb 2027 | Forms drafted, not yet printed and stored. |
| SEC-18 | Physical | Archive, equipment and video system in locked rooms; key list. | ◐ Partial | Dr. A | 31 Jan 2027 | Rooms locked. No key list yet. |
| SEC-19 | Physical | Files in locked cabinets; clean desk and clean screen. | ◐ Partial | Receptionist D | 31 Jan 2027 | Cabinets locked. Clean-desk habit varies at reception. |
| SEC-20 | Physical | Reception screens not visible to patients; discretion at the desk. | ◐ Partial | Dr. A | 31 Jan 2027 | The reception screen is partly visible from the waiting room. Privacy filter to be fitted. |
| SEC-21 | Physical | Secure destruction of paper; secure wiping of equipment. | ✔ Yes | Dr. A | — | Shredding Provider under contract. |
| SEC-22 | Physical | Visitors and providers accompanied in areas with data. | ✔ Yes | Dr. A | — | The CCTV installer works under supervision. |
| SEC-23 | Communication | No health data by plain e-mail or personal messaging apps. | ◐ Partial | Dr. A | 28 Feb 2027 | Lab results arrive and leave by e-mail. Password-protected files rule adopted; not yet checked in practice. |
| SEC-24 | Communication | Secure channels for laboratories, collaborators and patients. | ◐ Partial | Dr. A | 31 Mar 2027 | No secure portal. Password-protected files used. |
| SEC-25 | Communication | Photographing documents and screens with personal devices is forbidden. | ✖ No | Dr. A | 31 Jan 2027 | To be communicated in the staff notice and the training. |
| SEC-26 | Communication | Caller's identity checked before data is given by phone. | ◐ Partial | Receptionist D | 31 Jan 2027 | Practised informally. To be written into the training. |
| SEC-27 | Providers | Art. 28 agreements with all providers that process data. | ◐ Partial | Dr. A | 31 Mar 2027 | Signed with most providers. CCTV installer limited; e-mail provider on standard terms (module 9). |
| SEC-28 | Providers | Security review of providers at selection and yearly. | ✖ No | Dr. A | 31 Mar 2027 | None done yet (module 9). |
| SEC-29 | Staff | Confidentiality undertakings signed by all staff. | ✖ No | Dr. A | 31 Jan 2027 | To be signed when the programme starts. |
| SEC-30 | Staff | Training on joining and yearly, with attendance records. | ✖ No | Dr. A | 31 Jan 2027 | First session planned (module 8). |
| SEC-31 | Staff | Leaving procedure (access, equipment, keys). | ◐ Partial | Dr. A | 28 Feb 2027 | In the policy. Checklist to be created. |
| SEC-32 | Monitoring | Periodic sample review of access logs. | ✖ No | Dr. A | 31 Mar 2027 | Whether the practice software provides logs is to be confirmed. |
| SEC-33 | Incidents | Incident procedure known to staff; contact list displayed. | ◐ Partial | Dr. A | 31 Jan 2027 | Procedure adopted December 2026. Staff briefing planned. |
| SEC-34 | Incidents | Breach register kept up to date. | ✔ Yes | Dr. A | — | Created December 2026. |
| SEC-35 | Governance | Asset inventory up to date and tied to the ROPA. | ✔ Yes | Dr. A | — | A-01 to A-14, December 2026. |
| SEC-36 | Governance | Risk assessment reviewed yearly. | ✔ Yes | Dr. A | — | First assessment December 2026. |
| SEC-37 | Governance | New systems and providers assessed before introduction. | ◐ Partial | Dr. A | 28 Feb 2027 | Rule adopted. No example yet. |
| SEC-38 | Governance | Policy reviewed at least yearly; exceptions approved in writing. | ✔ Yes | Dr. A | — | Next review December 2027. |

## 5. The asset inventory

The inventory lists what the policy protects. It is built from the systems in the clinic profile, and each row names the controls that apply to it and the provider involved.

| Asset | Name | Data held | Location | Owner | Provider | Controls |
|---|---|---|---|---|---|---|
| A-01 | Practice software (cloud) | Patient files, appointments, billing, images | Provider cloud, EU | S-01 | V-01 | SEC-02, 03, 04, 15, 27, 32 |
| A-02 | Reception PC | Browser access to A-01; temporary scans | Reception | S-04 | V-03 | SEC-01, 06, 07, 08, 19, 20 |
| A-03 | Doctor's laptop | Browser access to A-01; administrative files | Encrypted disk | S-01 | V-03 | SEC-06, 07, 08, 09 |
| A-04 | Visiting physician's laptop | His own tools; own account on A-01 | His device | S-02 | — | SEC-09, 13 |
| A-05 | Ultrasound unit | Images, short-term local storage | Treatment room | S-02 | — | SEC-14 |
| A-06 | ECG unit | Traces | Treatment room | S-03 | — | SEC-14 |
| A-07 | Business e-mail | Appointment requests, lab results, referrals | Cloud suite, EU region | S-01 | V-06 | SEC-02, 03, 23, 24 |
| A-08 | Reminder service (SMS / e-mail) | Names, phone numbers, appointment times | Provider cloud | S-04 | V-02 | SEC-27 |
| A-09 | Website with contact form | Form submissions, cookie data | Hosting, EU | S-01 | V-07 | SEC-27 |
| A-10 | CCTV system | Video, 7-day buffer | Locked cabinet | S-01 | V-05 | SEC-18, 22, 32 |
| A-11 | Paper records | Forms, lab printouts, HR files | Locked cabinet | S-04 / S-01 | V-10 | SEC-18, 19, 21 |
| A-12 | Admin backup disk | Encrypted copy of non-clinical files | Locked cabinet | S-01 | — | SEC-15, 16, 18 |
| A-13 | Wi-Fi | Traffic (staff and guest networks) | Router, admin room | S-06 | V-03 | SEC-10, 11 |
| A-14 | Staff mobile phones | Calls and texts for appointment logistics | Personal / company | Each user | — | SEC-09, 13, 23, 25 |

## 6. The staff pack

Two pages, meant to be signed and pinned up.

**The confidentiality undertaking** (signed by each person on joining):

- I have read the Information Security Policy and the 10 rules for staff, and I will follow them;
- in my work I have or may have access to personal data, including patients' health data, which I will use only for the purposes of my duties;
- I will keep these data and any information about patients confidential, during the collaboration and after it ends without time limit, and I will not disclose them to any unauthorised person, including colleagues who have no need for access;
- I will not copy, photograph, send or transfer data outside the approved systems and channels;
- I will report at once any incident, loss, unauthorised access or suspicion;
- I will return the practice's equipment, keys and documents when the collaboration ends;
- I understand that breaking these duties may lead to disciplinary, civil or criminal liability under the law.

**The 10 rules** (displayed in work areas and used in training):

1. Open only the data you need for the task in hand.
2. Never share your password. Lock your screen every time you step away.
3. Do not send health data by plain e-mail, text message with details, or personal messaging apps.
4. Check the recipient twice before sending any message or document.
5. Do not leave papers with patients' data on desks, at the printer or in view of the waiting room.
6. Check who is asking on the phone or at the desk before saying anything.
7. Do not photograph documents, screens or patients with your own phone.
8. Watch for phishing: do not open suspicious attachments or links, and do not plug in unknown USB sticks.
9. Report at once any incident or suspicion, within 1 hour, to Dr. A, +40 700 000 000. Do not hide a mistake.
10. When you leave, return equipment and keys. Confidentiality continues.

**Downloads**

- [Security_Policy_v1.0_Clinic-X_EN.docx](../downloads/07-security-policy/Security_Policy_v1.0_Clinic-X_EN.docx): the policy, register and inventory for Clinic X
- [Staff_Pack_Clinic-X_EN.docx](../downloads/07-security-policy/Staff_Pack_Clinic-X_EN.docx): undertaking and the 10 rules
- [Security_controls_register_Clinic-X_EN.csv](../downloads/07-security-policy/Security_controls_register_Clinic-X_EN.csv): the 38 controls as a spreadsheet
- [Security_Policy_Blank_Template_EN.docx](../downloads/07-security-policy/Security_Policy_Blank_Template_EN.docx): the blank policy
- [Staff_Pack_Blank_Template_EN.docx](../downloads/07-security-policy/Staff_Pack_Blank_Template_EN.docx): the blank staff pack

## 7. What was verified, and what was not

**Checked**

- **Art. 32 GDPR.** The four headings in the table above follow the text of Art. 32(1): encryption, confidentiality and resilience, restoring availability, and regular testing.

**Not verified, to be confirmed**

- **Sector rules.** Electronic health-record and insurance platforms used in Romanian healthcare may carry their own security requirements. They are not covered here.
- **Professional secrecy.** The undertaking supplements the secrecy duty of medical staff under the law and the rules of the profession. The exact sources were not checked.
- **National ID number.** Art. 4 of Law no. 190/2018 sets safeguards for processing the CNP. The policy treats the CNP as strictly confidential. Whether the safeguards are fully met is to be confirmed against the current text.
- **Provider features.** Whether the practice software offers two-step verification and access logs is to be confirmed with its provider (SEC-03 and SEC-32).

## 8. Design decisions

**1. The register is the product; the policy is the explanation.** A policy that nobody follows protects nothing. A register with owners and dates is something a small clinic can work through, month by month.

**2. Honest scoring.** Starting with 11 of 38 in place is a stronger position than a clean sheet, because every gap has a name and a date. It also gives the first annual review something real to compare against.

**3. Rules that a receptionist can follow.** The 10 rules fit on one page. Everything else sits behind them for those who need it.

**4. Proportion over completeness.** There is no security operations centre and no penetration test in a three-person clinic. The policy leans on what a small practice controls: accounts, devices, backups, paper, people and providers.

**5. The clinic's own backups cover only what the clinic holds.** Clinical data lives in the provider's cloud, so the guarantees that matter are in the Art. 28 agreement (module 9). The policy says so rather than pretending the clinic backs up everything.

**6. Name the visiting physician.** He has his own laptop and his own account. The matrix, the asset list and SEC-09 all treat him as a separate user with separate responsibility.

**7. No control without a link.** Every control points to an asset or a section, and every asset points to its controls. Gaps in either direction show up.

**8. Link the controls to incidents.** When a real incident happens, the first question in the post-incident review is: which control was missing or partial?

## 9. Romanian national layer

> **Romania-specific points** (the structure applies anywhere in the EU)
>
> - **National ID number (CNP).** Art. 4 of Law no. 190/2018 sets safeguards for processing it. The policy treats it as strictly confidential and the retention schedule limits where it is kept. *To be confirmed: current text.*
> - **Employee monitoring.** Art. 5 of Law no. 190/2018 applies to monitoring staff at work, including by video. The policy says the clinic does not monitor systematically without meeting its conditions and informing staff.
> - **Professional secrecy** of doctors and nurses arises from the law and the rules of the profession. *To be confirmed: sources.*
> - **Health platforms.** National health-insurance and e-prescription systems may have their own access and security rules. *To be confirmed.*

## 10. Blank templates

The blank policy and staff pack follow the structure above. Yellow fields are for you to complete, and the register uses tick-boxes for the status.

**How to use them**

1. Name a security lead and an approver.
2. List every system and device in Annex D, starting from your ROPA.
3. Score each of the 38 controls honestly. Where a control is missing, give it an owner and a date.
4. Fix the cheap, high-value items first: individual accounts, two-step verification, device encryption, a restore test, undertakings and training.
5. Print the 10 rules and put them where staff work.
6. Re-score the register every year and after every incident.
