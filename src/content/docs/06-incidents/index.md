---
title: "Module 6 · Security incidents"
description: "How a small clinic recognises, contains, assesses and reports a personal data breach within 72 hours: roles, decision tree, severity matrix, breach register, a worked case and seven templates."
---


> **Fictional example.** Clinic X is an invented practice. This page is educational and is not legal advice.

| | |
|---|---|
| **What it is** | The clinic's procedure for security incidents and personal data breaches, with a register and ready-made forms |
| **Who it is for** | All staff (to recognise and report), the incident lead, the physician in charge |
| **GDPR hook** | Art. 33 (notifying the authority), Art. 34 (informing people), Art. 33(5) (documenting every breach), Art. 28(3)(f) and 33(2) (providers) |
| **Owner at Clinic X** | Dr. A (owner-physician), deputy Nurse C |
| **Review** | Yearly, after every incident, and after every drill |
| **You get** | A procedure, a breach register, 7 templates (I1 to I7), a worked case, a drill and a blank version |

## 1. Why it exists

A breach is not a question of *if*. In a small clinic the likely ones are ordinary: a result e-mailed to the wrong person, a lost laptop, a phishing e-mail, a provider outage. What decides the outcome is the first hours.

Four facts shape the procedure:

- **The clock is short and starts early.** The authority must be notified without undue delay and, where feasible, within **72 hours** of the clinic becoming aware. A reply from a stranger saying "this is not mine" starts it.
- **Health data tips the balance.** The clinic cannot easily show that a risk is *unlikely* when health data was seen by someone else, so most breaches involving it are notified.
- **Not every incident is notified, but every one is recorded.** The register, with the reasoning, is the proof that a decision was made on purpose.
- **Most of it is people, not tools.** The first line is the receptionist or the nurse who notices. The procedure asks them for one thing: tell the incident lead at once.

### Deadlines

| Stage | Deadline |
|---|---|
| Internal report | Immediately, and in any case within 1 hour of noticing (working hours). |
| Containment | Starts at once, within the first hour after the report. |
| Initial assessment and classification | Within 24 hours of the report. |
| Notifying the authority (if needed) | Without undue delay and, where feasible, no later than 72 hours after the practice became aware of the breach (Art. 33(1) GDPR). The practice plans on the 72 hours running through weekends and days off. If the deadline is missed, the reasons for the delay are given with the notification. |
| Informing the people affected (if the risk is high) | Without undue delay (Art. 34(1) GDPR). |
| Provider tells the practice | Without delay, within 24 hours of the provider becoming aware. |
| Review after the incident | Within 30 days of closing the incident. |

**When the 72 hours start.** The practice is regarded as “aware” when it has a reasonable degree of certainty that a security incident has affected personal data (EDPB Guidelines 9/2022, para. 31). When a provider tells the practice about a breach, the practice is in principle aware from that moment (para. 44). A short investigation to establish whether a breach happened is allowed, but it must start immediately. The Guidelines do not spell out how weekends are counted; the practice plans on continuous hours – to be confirmed.

### Three types of breach

| Type | Meaning | Example in a clinic |
|---|---|---|
| Confidentiality | Unauthorised disclosure of, or access to, personal data. | Lab results e-mailed to the wrong person. |
| Integrity | Unauthorised or accidental alteration of personal data. | Records altered by malware. |
| Availability | Loss of access to, or destruction of, personal data. | Ransomware, or a failed system with no usable backup. |

## 2. How the procedure works

### Roles

| Role | Responsibilities |
|---|---|
| All staff | Report immediately any incident or suspicion to the incident lead, and in any case within 1 hour of noticing it during working hours. They do not try to “fix” it alone, and they do not delete messages or files that may serve as evidence. |
| Incident lead (Dr. A, owner-physician; deputy: Nurse C) | Receives reports, contains the incident, leads the assessment, proposes the decision, completes the breach register and coordinates communications. If the lead cannot be reached, the deputy takes the report and starts containment, and calls the external privacy adviser the same day so that the notification decision is not missed. |
| Physician in charge (Dr. A) | Decides whether to notify the authority and inform the people affected, approves the communications and owns the relationship with affected patients. |
| IT and software providers (IT Support Provider, Practice Software Provider, E-mail Provider) | Help with containment, technical analysis and recovery. They notify the practice without delay, and within 24 hours of becoming aware, of any incident on their side (Art. 33(2) GDPR; set out in the Art. 28 agreement). |

### Eight steps

1. **Detect and report.** The employee tells the incident lead (phone first, then template I1) and writes down when they noticed.
2. **Contain.** Stop the cause and limit the effect. Keep the evidence.
3. **Assess.** Complete the assessment sheet (I2).
4. **Classify and decide.** Use the decision tree and severity matrix below. The physician in charge approves.
5. **Notify the authority,** if needed, within 72 hours (I3).
6. **Inform the people affected,** if needed (I4). Ask a wrong recipient to delete (I5).
7. **Repair and recover.**
8. **Record and learn.** Register entry, post-incident report (I7), updates to the ROPA, security policy and training.

### The first hour, for every employee

- [ ] Tell the incident lead now (phone, then a short note using I1). Write down the time you noticed.
- [ ] Do not delete or change anything. Do not try to fix it alone.
- [ ] If the cause is still running (an open account, a lost device, a wrongly sent message), stop it: end sessions, change passwords, ask for the message to be deleted.
- [ ] Write down what you know: what, when, where, how many people, what data.
- [ ] Do not discuss it outside the practice, and do not post anything.

## 3. Assessing the risk

### Factors to weigh

- the type of breach (confidentiality, integrity, availability);
- the nature, sensitivity and volume of the data: health data is sensitive, and where it is involved the practice assumes a risk is likely unless it can show otherwise;
- how easily people can be identified from the data;
- the severity of consequences (discrimination, reputational harm, fraud, effect on care);
- special characteristics of the people (children, vulnerable people) and how many they are;
- the protections in place (for example encrypted data, an available backup);
- whether the recipient is trustworthy and has confirmed deletion in writing.

### Decision tree

| Question | If the answer is… |
|---|---|
| 1. Is personal data affected? | No: a security incident without personal data. Fix and record it internally.<br>Yes: it is a personal data breach. Go to question 2. |
| 2. Is the breach likely to result in a risk to the rights and freedoms of people? | No (for example, data encrypted and unreadable, or a trusted recipient who has confirmed deletion): no notification to the authority, but record the reasoning in the register (Art. 33(5) GDPR).<br>Yes: notify the authority within 72 hours. Go to question 3. |
| 3. Is the breach likely to result in a high risk? | Yes: inform the people affected without undue delay. This is not needed if the data was encrypted or unintelligible, if later measures rule out the high risk, or if informing each person would take disproportionate effort (then a public notice is used) – Art. 34(3) GDPR.<br>No: notify the authority only. |

The authority can require the practice to inform people even if the practice judged it unnecessary (Art. 34(4) GDPR).

### Severity matrix

| Level | Description | Action |
|---|---|---|
| Low | No risk to people is likely. | Record in the register with the reasoning. Fix the cause. |
| Medium | A risk is likely, but not a high one. | Notify the authority within 72 hours. Record. Clinic policy: also tell the people affected when health data was seen by an unauthorised person, even though the law requires this only for high risk. |
| High | A high risk is likely (for example health data of several people exposed, or unencrypted data lost). | Notify the authority within 72 hours and inform the people affected. |

### Common scenarios

Indicative only. Each case is decided on its own facts.

| Scenario | Type | Indicative classification |
|---|---|---|
| Lab results e-mailed to another patient | Confidentiality | Medium or high, depending on what the recipient saw. The authority is normally notified. Whether to inform the patient is assessed (often yes). Ask the recipient to delete. |
| Text message with appointment details sent to a wrong number | Confidentiality | Usually low or medium; depends on the content. Health detail raises it. |
| Doctor's laptop lost or stolen, unencrypted, with patient data | Confidentiality | High: authority and people. Block access and, if possible, wipe remotely. |
| Same laptop, encrypted with a strong password; clinical data lives in the cloud application | Confidentiality / availability | Low or medium with reasoning; informing people is usually not needed (Art. 34(3)(a)). End the application sessions and change passwords. |
| Ransomware: files encrypted, practice software unreachable | Availability (and possibly confidentiality) | Medium or high; the authority is normally notified. If data theft is suspected, treat as high. Restore from the verified backup. |
| Practice software account taken over through phishing | Confidentiality | High if records were accessible. |
| Staff member opens records with no care or administrative reason | Confidentiality | Medium or high; disciplinary measures also apply. |
| Paper files or lab printouts lost or stolen | Confidentiality / availability | Depends on how many people; health data: usually high. |
| Visiting physician loses a device with his own patients' records | Confidentiality | He is an independent controller and decides on notification; the practice helps. Arrangement to be confirmed. |
| CCTV footage given to or seen by someone with no right to it | Confidentiality | Medium; check who, what was visible, and whether the extract was logged. |
| Short outage of the practice software, no data lost | Availability | Usually low, recorded; assess the effect on care. |
| A provider reports a breach on its side | Any | The practice assesses and decides on notification, because it is the controller. The 72 hours run from the provider's notice. |

<div data-table-tools data-name="incidents-scenarios" data-mode="quiz"></div>

### Containment

- Message or e-mail sent to the wrong person: try to recall it; contact the recipient and ask for permanent deletion and written confirmation (I5).
- Compromised account: reset passwords at once, end active sessions, remove access, switch on two-step verification and check the access logs.
- Lost or stolen device: block signed-in accounts, wipe remotely if possible, report theft to the police and check what data it held.
- Malware or ransomware: disconnect devices from the network (without switching them off, if the provider advises so), call the IT support provider, do not pay a ransom without the physician in charge and a specialist, and restore from the verified backup.
- Paper documents: search, list what is missing, report theft to the police and secure the premises.
- Unauthorised access by staff: suspend the access, keep the logs and inform the physician in charge.
- Other steps, as needed: tell the insurer (if cyber cover exists), the police, and any provider concerned.

### Notifying the authority and informing people

The authority. The notification is made through the form and channel set by ANSPDCP (the online breach-notification form on www.dataprotection.ro; checked 7 November 2026 through a secondary source – verify at the time of the incident). The minimum content (Art. 33(3) GDPR) is in template I3: nature of the breach, categories and approximate numbers of people and records, contact point, likely consequences, measures taken or proposed. If not everything is known, the information is given in stages without further undue delay (Art. 33(4) GDPR). The practice does not wait for the end of the investigation to notify. The confirmation of submission is kept with the version sent.

The people affected. Plain language, covering what happened, a contact point, likely consequences, the measures taken, and what the person can do to protect themselves (template I4). It is sent to each person individually, through a safe channel, and not by messages containing medical data.

Other reporting duties. Romania transposed NIS2 by Government Emergency Ordinance no. 155/2024, approved with amendments by Law no. 124/2025. Whether a small outpatient practice falls within scope is to be confirmed; the practice does not expect to, but this is not verified.

## 4. Worked case: a lab result goes to the wrong person

**Case INC-2027-001** (fictional, dated after the programme starts to show how it runs). A lab result is e-mailed to a mistyped address. The recipient, an unrelated person, reports it the next morning.

| When | What happens | Why |
|---|---|---|
| Thu 8 Apr 2027, 16:40 | Receptionist D e-mails the lab result of patient P-02 to the patient, but mistypes one letter of the address. The file is not password-protected. | The rule is that results go only as a password-protected file. This is the control that failed. |
| Fri 9 Apr, 09:10 – 09:15 | The unrelated recipient (R-01) replies to the shared mailbox: “I received results that are not mine.” D reads it at 09:15. | Awareness: 09:15. The practice now has a reasonable degree of certainty. The 72 hours run to Mon 12 Apr, 09:15, weekend included. |
| 09:20 | D phones Dr. A, then sends a short note (I1). D does not delete anything. | Report within minutes. Evidence is kept. |
| 09:25 – 10:00 | Dr. A replies to R-01 with I5 (delete and confirm in writing). The E-mail Provider's message trace is saved. D is asked not to resend anything. | Containment first: stop further spread, keep proof of what was sent. |
| 10:30 | Dr. A completes the assessment sheet (I2). One patient, health data, recipient unrelated, file opened. Classification: medium. | The practice cannot show that a risk is unlikely, because the file was opened. |
| 11:50 | R-01 confirms in writing that the e-mail was deleted, and says it was not copied or forwarded. | A trusted, quick confirmation lowers the risk. It does not remove the duty to notify. |
| 14:30 | Dr. A submits the notification to the authority (content in I3). It is the initial notification, 5 h 15 min after awareness. | Well inside 72 hours. The practice does not wait for more facts. |
| 15:00 | Dr. A phones patient P-02 and explains what happened. The letter (I4) follows by post. | The law requires this only for high risk. The practice's own rule goes further when health data was seen by a stranger. |
| 16:00 | The register entry INC-2027-001 is made. | Art. 33(5): every breach is recorded, with the reasoning. |
| Wed 14 Apr | Final update to the authority: no new facts. | The notification is closed in stages. |
| Tue 20 Apr | Post-incident review (I7). Actions: results sent only as a password-protected file or collected in person; address typed from the file and read back; auto-complete off on the shared mailbox; 10-minute refresher for all staff on 26 Apr. | Within the 30 days. The root cause was a missing step, not a person. |

**What the case shows**

- **The clock starts when the clinic is reasonably certain,** not when the mistake was made. Here: Friday 09:15, not Thursday 16:40.
- **Containment came before paperwork.** The deletion request went out within 45 minutes.
- **Medium risk still means notification.** Health data was seen and the file was opened. The recipient's quick confirmation reduced the risk but did not remove the duty.
- **The clinic went beyond the legal minimum** by telling the patient too, which also pre-empts the question "why did nobody tell me?".
- **The root cause was a missing step.** The fix is a rule (password-protected results only, read back the address), not a reprimand.

> **A variation that changes the answer.** If the same file had gone, by mistake, to *another physician bound by professional secrecy*, who deleted it unread, the clinic could reasonably conclude that a risk is unlikely, not notify, and **record that reasoning** in the register. The facts decide, and the register shows the decision was deliberate.

### The three documents

<details>
<summary>I5 – Request to delete (9 April 2027)</summary>

> Clinic X | Str. X nr. 0, Town X, Romania | privacy@clinic-x.example | +40 700 000 000
>
> No. INC-2027-001 / 9 April 2027
>
> To: R-01
>
> Subject: Message sent in error – please delete it
>
> Dear Sir or Madam,
>
> On 8 April 2027 a message was sent to you in error by Clinic X. It contains confidential information that is not meant for you.
>
> Please: do not read or pass on the message or its attachment; delete them permanently (including from the deleted-items folder and from any backups, if possible); and confirm to us in writing that you have done so by 9 April 2027.
>
> Thank you for letting us know so quickly, and we apologise for the inconvenience.
>
> Kind regards,
>
> Dr. A, owner-physician

</details>

<details>
<summary>I3 – Content of the notification to the authority (9 April 2027)</summary>

> Type of notification: initial
>
> 1. Controller: Clinic X (X Medical S.R.L.), Str. X nr. 0, Town X, Romania. Contact person: Dr. A, owner-physician, +40 700 000 000, privacy@clinic-x.example.
>
> 2. Times: incident Thu 8 April 2027, 16:40; aware Fri 9 April 2027, 09:15.
>
> 3. Nature of the breach: confidentiality. One laboratory result was e-mailed by mistake to a wrongly typed address, as an unprotected attachment. The recipient is an unrelated private person who reported it and opened the file.
>
> 4. People concerned: patients, 1.
>
> 5. Data records: identification data and health data (blood test results), 1 record.
>
> 6. Likely consequences: limited. The recipient does not know the patient and confirmed deletion.
>
> 7. Measures: deletion request made and written confirmation received at 11:50; message trace saved; staff rule on password-protected results restated; patient informed.
>
> 8. Informing the people: done on 9 April 2027.
>
> 9. Other authorities / Member States: no.
>
> 10. Later information: final update by 14 April 2027.

</details>

<details>
<summary>I4 – Letter to the patient (9 April 2027)</summary>

> Clinic X | Str. X nr. 0, Town X, Romania | privacy@clinic-x.example | +40 700 000 000
>
> No. INC-2027-001 / 9 April 2027
>
> To: P-02
>
> Subject: Information about a security incident involving your personal data
>
> Dear P-02,
>
> We are writing to tell you about an incident that affected your personal data.
>
> What happened: on 8 April 2027 a blood test result of yours was e-mailed by mistake to a person who is not your doctor, because one letter of the address was mistyped. The person told us the next morning.
>
> What data is involved: your name, the date and the values of one blood test.
>
> What consequences may follow: we consider the risk limited. The person does not know you and has confirmed in writing that the e-mail was deleted and not shared.
>
> What we have done: we asked for deletion and received confirmation, we informed the National Supervisory Authority for Personal Data Processing, and we changed how results are sent: only as a password-protected file or in person.
>
> What you can do: be alert to unusual messages or calls that mention your health, and do not give out passwords. Contact us if you notice anything unusual.
>
> We apologise for this. For any question, you can contact Dr. A at +40 700 000 000 or privacy@clinic-x.example.
>
> You have the right to lodge a complaint with the National Supervisory Authority for Personal Data Processing (ANSPDCP, www.dataprotection.ro, anspdcp@dataprotection.ro) and to apply to the competent court.
>
> Kind regards,
>
> Dr. A, owner-physician

</details>

### The register

Three illustrative entries: one notified breach, and two incidents where the clinic recorded why it did not notify. The register is kept for 5 years from closing the incident (RET-10 in the [retention schedule](../04-retention/)); it never holds medical data, only categories and figures.

| No. | Date and time of incident | Date and time aware | Description (facts) | Data categories | People affected (categories, approx. no.) | Consequences and measures taken | Risk (low / medium / high) and reasoning | Authority (yes / no, date; reasoning) | People informed (yes / no, date) | Providers involved | Closed on / review report |
|---|---|---|---|---|---|---|---|---|---|---|---|
| INC-2027-001 | Thu 8 Apr 2027, 16:40 | Fri 9 Apr 2027, 09:15 | Laboratory result of one patient e-mailed by the reception to a wrongly typed address, as an unprotected attachment. The unrelated recipient reported it and opened the file. | Identification; health (blood test) | Patients: 1 | Recipient deleted the e-mail and confirmed in writing at 11:50. Password-protection and address read-back rules restated. | Medium: health data seen by an unrelated person; mitigated by the recipient's prompt confirmation. | Yes, 9 Apr 2027, 14:30 (5 h 15 min after awareness) | Yes, 9 Apr 2027 (phone, then letter) | E-mail Provider (message trace) | 20 Apr 2027 (I7 completed) |
| INC-2027-002 | Tue 15 Jun 2027, 18:20 | Tue 15 Jun 2027, 18:45 | Doctor's laptop left on a train. Disk encrypted, screen locked. No clinical data stored on the device: it is in the cloud application. Not recovered. | Administrative files (invoices, templates) | Patients: up to ~40 names on invoices | All sessions ended, passwords changed, device blocked, police report filed. | Low: encrypted disk, strong password, no clinical data on the device; reasoning recorded. | No (low risk; reasoning recorded) | No | Practice Software Provider (sessions ended) | 22 Jun 2027 |
| INC-2027-003 | Wed 8 Sep 2027, 09:00 | Wed 8 Sep 2027, 09:05 | Practice software unavailable for 3 hours because of a provider outage. No data lost. Paper fallback used for appointments. | Availability only | None identified | Provider notice received at 09:40. Service restored at 12:00. | Low: no loss, no unauthorised access; effect on care assessed as minimal. | No (low risk; reasoning recorded) | No | Practice Software Provider | 10 Sep 2027 |

<div data-table-tools data-name="incidents"></div>

## 5. Templates I1 to I7

| Code | Template |
|---|---|
| I1 | Internal report of an incident (employee → incident lead) |
| I2 | Incident assessment sheet (internal) |
| I3 | Content of the notification to the authority (Art. 33(3)) – to be transferred into the authority's form |
| I4 | Informing the people affected (Art. 34) |
| I5 | Request to delete a message sent to the wrong recipient |
| I6 | Incident notice from a provider (to be completed by the provider) |
| I7 | Post-incident report (lessons learned) |

<details>
<summary>Read the text of all 7 templates</summary>

<details>
<summary><strong>I1</strong> – Internal report of an incident (employee → incident lead)</summary>

> **Reported by:** <mark>[name]</mark>  |  **Date and time of the report:** <mark>[ ]</mark>
>
> **What happened** (briefly, facts only): <mark>[ ]</mark>
>
> **When and where it happened / was noticed:** <mark>[ ]</mark>
>
> **Data or systems involved** (do not write medical data in clear): <mark>[ ]</mark>
>
> **How many people may be affected (estimate):** <mark>[ ]</mark>
>
> **What you have already done:** <mark>[ ]</mark>
>
> **Who else knows:** <mark>[ ]</mark>
>
> *Do not delete messages, files or logs, and do not try to fix it alone. Reporting an incident does not lead to sanctions; hiding one is a serious problem.*

</details>

<details>
<summary><strong>I2</strong> – Incident assessment sheet (internal)</summary>

> **Register no.:** <mark>[ ]</mark>  |  **Assessor:** <mark>[ ]</mark>  |  **Date of assessment:** <mark>[ ]</mark>
>
> **1. Facts:** what, when, how, who found it, cause (if known): <mark>[ ]</mark>
>
> **2. Type of breach:** ☐ confidentiality  ☐ integrity  ☐ availability
>
> **3. Data involved:** ☐ identification  ☐ contact  ☐ health  ☐ payment  ☐ national ID number (CNP)  ☐ images  ☐ other: <mark>[ ]</mark>
>
> **4. People affected:** categories <mark>[ ]</mark>; approximate number <mark>[ ]</mark>; records affected <mark>[ ]</mark>; children or vulnerable people: ☐ yes ☐ no
>
> **5. Protections in place** (encryption, backup, recipient's confirmation of deletion): <mark>[ ]</mark>
>
> **6. Likely consequences for people:** <mark>[ ]</mark>
>
> **7. Classification:** ☐ low  ☐ medium  ☐ high. **Reasoning:** <mark>[ ]</mark>
>
> **8. Decision:** notify the authority: ☐ yes ☐ no (reasoning: <mark>[ ]</mark>)  |  inform people: ☐ yes ☐ no (reasoning: <mark>[ ]</mark>)
>
> **9. Containment and remedy** (measures, who, by when): <mark>[ ]</mark>
>
> **10. Approved by the physician in charge:** <mark>[name, date]</mark>

</details>

<details>
<summary><strong>I3</strong> – Content of the notification to the authority (Art. 33(3)) – to be transferred into the authority's form</summary>

> **Type of notification:** ☐ initial  ☐ supplement  ☐ final
>
> **1. Controller:** <mark>[practice name, address]</mark>. **Contact person:** <mark>[name, role, phone, e-mail]</mark>.
>
> **2. Times:** date and time of the incident: <mark>[ ]</mark>; date and time of awareness: <mark>[ ]</mark>. <mark>[If more than 72 hours have passed: reasons for the delay.]</mark>
>
> **3. Nature of the breach:** ☐ confidentiality  ☐ integrity  ☐ availability. **Description:** <mark>[ ]</mark>
>
> **4. Categories and approximate number of people concerned:** <mark>[patients / employees / other; number]</mark>
>
> **5. Categories and approximate number of data records:** <mark>[identification, contact, health, etc.; number]</mark>
>
> **6. Likely consequences:** <mark>[ ]</mark>
>
> **7. Measures taken or proposed** (including to reduce the effects): <mark>[ ]</mark>
>
> **8. Informing the people:** ☐ done on <mark>[date]</mark>  ☐ planned for <mark>[date]</mark>  ☐ not needed (reasoning: <mark>[ ]</mark>)
>
> **9. Other authorities / other Member States involved:** <mark>[no / yes – which]</mark>
>
> **10. Information to be sent later:** <mark>[what, and by which date]</mark>

</details>

<details>
<summary><strong>I4</strong> – Informing the people affected (Art. 34)</summary>

> <mark>[Practice name]</mark> | <mark>[Address]</mark> | <mark>[E-mail]</mark> | <mark>[Phone]</mark>
>
> No. <mark>[ref]</mark> / <mark>[date]</mark>
>
> **To:** <mark>[Name of the person affected]</mark>
>
> Subject: Information about a security incident involving your personal data
>
> Dear <mark>[name]</mark>,
>
> We are writing to tell you about an incident that affected your personal data.
>
> **What happened:** <mark>[clear description in simple terms: what, when, how]</mark>.
>
> **What data is involved:** <mark>[categories of data, without reproducing them]</mark>.
>
> **What consequences may follow:** <mark>[ ]</mark>.
>
> **What we have done:** <mark>[containment and remedy]</mark>. We have informed the National Supervisory Authority for Personal Data Processing.
>
> **What you can do:** <mark>[specific advice, for example: be alert to unusual messages or calls that mention your health; do not give out passwords; contact us if you notice anything unusual]</mark>.
>
> We apologise for this. For any question, you can contact us at <mark>[contact person, phone, e-mail]</mark>.
>
> <mark>[You have the right to lodge a complaint with the National Supervisory Authority for Personal Data Processing (ANSPDCP, www.dataprotection.ro, anspdcp@dataprotection.ro) and to apply to the competent court.]</mark>
>
> Kind regards,
>
> <mark>[name, role]</mark>

</details>

<details>
<summary><strong>I5</strong> – Request to delete a message sent to the wrong recipient</summary>

> <mark>[Practice name]</mark> | <mark>[Address]</mark> | <mark>[E-mail]</mark> | <mark>[Phone]</mark>
>
> No. <mark>[ref]</mark> / <mark>[date]</mark>
>
> **To:** <mark>[Recipient]</mark>
>
> Subject: Message sent in error – please delete it
>
> Dear <mark>[name]</mark>,
>
> On <mark>[date]</mark> a message was sent to you in error by <mark>[practice name]</mark>. It contains confidential information that is not meant for you.
>
> Please: do not read or pass on the message or its attachments; delete them permanently (including from the deleted-items folder and from any backups, if possible); and confirm to us in writing that you have done so by <mark>[date]</mark>.
>
> Thank you for your understanding, and we apologise for the inconvenience.
>
> Kind regards,
>
> <mark>[name, role]</mark>

</details>

<details>
<summary><strong>I6</strong> – Incident notice from a provider (to be completed by the provider)</summary>

> **Provider:** <mark>[ ]</mark>  |  **Contact:** <mark>[ ]</mark>  |  **Date and time of notice to the practice:** <mark>[ ]</mark>
>
> **Description of the incident:** <mark>[ ]</mark>  |  **Date and time it occurred / was found:** <mark>[ ]</mark>
>
> **Practice data involved** (categories, approximate volume): <mark>[ ]</mark>
>
> **Measures taken and planned:** <mark>[ ]</mark>
>
> **Further information to follow:** <mark>[ ]</mark>
>
> Providers notify the practice without delay, and within <mark>[24 hours]</mark> of becoming aware (to be written into the Art. 28 agreement).

</details>

<details>
<summary><strong>I7</strong> – Post-incident report (lessons learned)</summary>

> **Register no.:** <mark>[ ]</mark>  |  **Date of the report:** <mark>[ ]</mark>  |  **Participants:** <mark>[ ]</mark>
>
> **Root cause:** <mark>[ ]</mark>
>
> **What worked well:** <mark>[ ]</mark>
>
> **What did not work / delays:** <mark>[ ]</mark>
>
> **Corrective and preventive actions** (what, who, by when): <mark>[ ]</mark>
>
> **Updates needed:** ☐ ROPA  ☐ Retention schedule  ☐ Security policy  ☐ Staff training  ☐ Provider contracts  ☐ Patient notice  ☐ This procedure
>
> **Approved by:** <mark>[physician in charge, date]</mark>

</details>

</details>

### Contact list

| Who | Person / body | Phone / e-mail |
|---|---|---|
| Incident lead | Dr. A (S-01) | +40 700 000 000 |
| Deputy | Nurse C (S-03) | +40 700 000 000 |
| IT support | IT Support Provider (V-03) | see contract |
| Practice software | Practice Software Provider (V-01) | see contract |
| E-mail | E-mail Provider (V-06) | provider support |
| Supervisory authority | ANSPDCP | www.dataprotection.ro  \|  anspdcp@dataprotection.ro |
| Police | local police | 112 |
| Insurer | if any |   |
| External privacy adviser | external privacy adviser |   |

**Downloads**

- [Incident_Procedure_v1.0_Clinic-X_EN.docx](../downloads/06-incidents/Incident_Procedure_v1.0_Clinic-X_EN.docx): the procedure for Clinic X
- [Incident_Templates_I1-I7_EN.docx](../downloads/06-incidents/Incident_Templates_I1-I7_EN.docx): the 7 blank templates
- [Breach_register_Clinic-X_EN.csv](../downloads/06-incidents/Breach_register_Clinic-X_EN.csv): the register with three illustrative entries
- [Incident_Procedure_Blank_Template_EN.docx](../downloads/06-incidents/Incident_Procedure_Blank_Template_EN.docx): the blank procedure

## 6. The annual drill

Once a year the team walks through one of the scenarios below in 30 to 45 minutes. The result is written up in report I7. The three scenarios rotate year by year.

Questions: What do you do in the first hour? Who decides? Is it a breach? Of what type? What is the risk? Is the authority notified? Are the people informed? What is recorded? Who does what, and by when?

| Scenario | Expected outcome (for the moderator) |
|---|---|
| S1. The receptionist e-mails one patient's lab results to another patient by mistake. Based on the near miss that occurred before the programme was adopted. | Confidentiality breach (health data, 1 person). Containment: deletion request and confirmation (I5). Risk medium or high; normally the authority is notified within 72 hours, and the patient is informed. Recorded in the register. |
| S2. The doctor's laptop is stolen from a car; it holds administrative files. | Depends on encryption. Unencrypted: high risk, authority and people, police report, block accounts. Encrypted with a backup: probably no informing of people, with reasoning in the register. |
| S3. One morning a ransom message appears on every computer; the practice software cannot be reached. | Availability breach (possibly confidentiality too). Isolate, call IT support, restore from the backup, assess data theft, notify the authority within 72 hours in most cases, report to the police, keep seeing patients on paper. |

## 7. What was verified, and what was not

As of **7 November 2026**:

**Checked against sources**

- **When the clinic is "aware".** [EDPB Guidelines 9/2022 on personal data breach notification](https://www.edpb.europa.eu/system/files/documents/2023-04/edpb_guidelines_202209_personal_data_breach_notification_v2.0_en.pdf), para. 31: a controller is aware when it has "a reasonable degree of certainty" that a security incident has compromised personal data. Para. 44: when a processor informs the controller, the controller is in principle aware from that moment.
- **Documenting the reasoning.** The Guidelines (para. 125) expect the controller to document its reasoning, including why a breach was not notified.
- **Romanian NIS2 law.** Government Emergency Ordinance no. 155/2024 transposes the NIS2 Directive; [Law no. 124/2025](https://www.posta-romana.ro/cnpr-data/_editor/files/sintact-legea-124-2025-pentru-aprobarea-ordonantei%281%29.pdf) (Monitorul Oficial no. 638 of 7 July 2025) approved it with amendments and entered into force on 10 July 2025.

**Not verified**

- **How weekends count.** The Guidelines do not explain it in the text. The clinic plans on continuous hours, which is the cautious reading.
- **The authority's notification channel.** The online form on the ANSPDCP site was found through a secondary source. It is to be checked at the time of an incident.
- **Whether NIS2 covers the clinic.** The size and sector thresholds were not confirmed. A small outpatient practice is not expected to be covered, but this is **to be confirmed**.
- **Visiting physician.** Who notifies when his own patients' data is involved depends on the arrangement, which is flagged *to be confirmed* in the ROPA.

## 8. Design decisions

**1. One phone call before any paperwork.** The procedure's first demand is a call to the incident lead within the hour, with the form to follow. Forms slow down the first report.

**2. A deputy, and an outside adviser as the backstop.** A three-person clinic cannot have a full on-call rota. What it can have is a named deputy who starts containment and calls the external adviser the same day, so the 72 hours are not lost to a holiday.

**3. Health data is assumed risky.** The decision tree asks whether a risk is *likely*. For health data the clinic starts from "yes" and must show otherwise, which matches how the authority is likely to read it.

**4. A policy that goes further than the law.** Art. 34 requires informing people only when the risk is high. Clinic X also tells patients when health data was seen by an unauthorised person. This is a stated choice, marked as policy, and not presented as a legal duty.

**5. The register records non-notifications.** An entry that says "not notified, because…" is the best evidence the clinic can have in an inspection.

**6. No medical data in the register or in the forms.** Categories and numbers only.

**7. Blameless reporting.** The report form says reporting never leads to sanctions, and hiding an incident is the serious problem. Without this, incidents are not reported.

**8. Practise once a year.** A drill takes 45 minutes and finds the missing phone number, the expired password or the step nobody owns. Three scenarios rotate: a human error, a lost device and a ransomware attack.

## 9. Romanian national layer

> **Romania-specific points** (the procedure applies anywhere in the EU)
>
> - **Authority.** ANSPDCP (www.dataprotection.ro). Notification is made through its form; check the current channel at the time.
> - **Cybersecurity law.** NIS2 was transposed by Government Emergency Ordinance no. 155/2024, approved by Law no. 124/2025. *To be confirmed: whether a small outpatient practice is covered.*
> - **Police.** Theft and computer crime are reported to the police (112 in an emergency). A police report also supports the insurer and the authority.
> - **Employee monitoring.** Reviewing logs of staff activity is processing of employee data; Law no. 190/2018 Art. 5 conditions apply to monitoring. *To be confirmed for the clinic's setup.*

## 10. Blank templates

The blank procedure and the template library follow the structure above. Yellow fields are for you to complete.

**How to use them**

1. Name the incident lead and a deputy, and an outside adviser if you have one.
2. Fill in the contact list and put it where staff can find it, on paper as well.
3. Check how your providers will notify you, and put the 24-hour rule in your Art. 28 agreements.
4. Find out which of your devices are encrypted, and where your backups are.
5. Brief every employee in 15 minutes: what an incident is and whom to call.
6. Run the first drill within the first year.
