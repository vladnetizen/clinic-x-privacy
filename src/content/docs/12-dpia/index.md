---
title: "Module 12 · DPIA process"
description: "When a small clinic needs a data protection impact assessment, how to screen, score and decide, and a worked DPIA for an AI note-taking pilot that ends in 'approved with conditions'."
---


> **Fictional example.** Clinic X is an invented practice. This page is educational and is not legal advice.

| | |
|---|---|
| **What it is** | A short procedure for deciding whether a new processing needs a DPIA, doing one properly, and acting on the result |
| **Who it is for** | The practice owner, the privacy adviser, and anyone who proposes a new tool, a new provider or a new kind of recording |
| **GDPR hook** | Art. 35 (DPIA), Art. 36 (prior consultation), Art. 25 (by design), Art. 5(2) (accountability) |
| **Owner at Clinic X** | Dr. A (owner-physician), with the external privacy adviser |
| **Review** | Yearly, and each time a screening ends in "required" |
| **You get** | A procedure with a screening form and register; a worked DPIA on an AI note-taking pilot with a risk register and conditions; blank versions of both |

## 1. Why it exists

Module 10 ended with a close call: cameras in a clinic, two criteria met, no DPIA. This module covers the other end. A DPIA is not a form to fill in for every project. It is the point at which the practice stops and asks what a new use of data could do to the people whose data it is, before it starts.

A small clinic needs a method for three reasons:

- **The trigger is not obvious.** The law's examples talk about large scale. A single clinic is rarely large scale. The test that matters in practice is the Article 29 Working Party's: two or more of nine criteria usually means a DPIA.
- **Tools arrive from the side.** A provider offers a new feature, a doctor wants to try an AI tool. Without a screening step, the first the privacy side hears of it is after it is in use.
- **The output has to be usable.** A DPIA that ends in a list of conditions with owners and dates changes what happens. One that ends in a report nobody reads does not.

## 2. When is a DPIA needed?

| Test | Source | How the practice applies it |
|---|---|---|
| The law names the case | Art. 35(3) GDPR: (a) systematic and extensive evaluation of people by automated means that leads to significant decisions; (b) large-scale processing of special-category data; (c) large-scale systematic monitoring of a publicly accessible area | A single practice is not large scale for its own patients (recital 91). Cases (a) and (c) are checked on their facts. |
| The authority's list | Art. 35(4): ANSPDCP Decision no. 174/2018 lists operations that require a DPIA, for example large-scale monitoring of public areas or employees, and large-scale use of innovative technology | Read the current list before each screening. Most items are about large scale. |
| Two or more WP248 criteria | Article 29 Working Party guidelines, WP248 rev.01: nine criteria; two met usually means a DPIA | The screening form counts the criteria. Two or more: DPIA, unless a written reason says why not. |
| The practice's own triggers | Practice rule | A DPIA is done, whatever the count, before: a new technology that touches health data; any recording of patients; a new transfer of health data outside the EU; an AI tool used on patient data. |

### The screening form

One page, filled in before the project starts, kept whatever the result. It asks fifteen questions: what happens to the data, then the WP248 criteria, then the legal and practice triggers, then the result and who decided.

| Question | Answer |
|---|---|
| Project and owner | Name of the project; owner |
| What will happen to the data, in two sentences | Describe |
| Does it involve special-category data (health)? | Yes / No |
| Does it use a new technology, or an AI tool? | Yes / No |
| Will patients or staff be recorded, tracked or monitored? | Yes / No |
| Does it concern vulnerable people (patients, children, employees)? | Yes / No |
| Does it evaluate or score people, or make automated decisions? | Yes / No |
| Is it on a large scale, or does it combine datasets? | Yes / No |
| Could it stop people using a service or exercising a right? | Yes / No |
| Does it send data outside the EU, or to a new provider? | Yes / No |
| Number of WP248 criteria met | Number |
| Does Art. 35(3), the authority's list or a practice trigger apply? | Yes / No, which |
| Result | DPIA required / not required, with the reason |
| Adviser consulted, date | Name, date |
| Decided by, date | Name, date |

### Clinic X's register

Three screenings, with three different reasons. The first is the cameras from module 10. The third is the worked example below.

| Ref | Date | Project | Criteria met | Result | Reason | DPIA ref | Review |
|---|---|---|---|---|---|---|---|
| SCR-2026-01 | Mon 7 Dec 2026 | Video surveillance (PA-07, module 10) | 2 and 1 partly | DPIA not required | Not on a large scale; list items concern large-scale monitoring. Close call, reasoned in the LIA. Reopen if cameras, sound, analytics, remote viewing or longer retention are proposed. | None | Dec 2027 |
| SCR-2027-01 | Thu 25 Mar 2027 | Website analytics tool (PA-13) | 0 | DPIA not required (provisional) | Standard analytics on consent, no health data on the site. Provisional until the tool is identified in the provider review; rescreen if it is a tool that tracks across sites. | None | On identifying the tool |
| SCR-2027-02 | Mon 11 Oct 2027 | AI consultation notes (pilot) | 3 | DPIA required | Health data, an AI tool and recording of patients. Meets two criteria and the practice's own triggers. | DPIA-2027-01 | Mon 13 Dec 2027 |

<div data-table-tools data-name="dpia"></div>

**Why the second one is "provisional".** The website analytics tool was not yet identified when the screening was done. A reasoned "not required" that says what would change it is better than waiting for certainty.

## 3. How it works: the eight steps

| Step | What | Output |
|---|---|---|
| 1. Screen | Before the project starts, fill the screening form (section 5). Decide: DPIA needed, or not, with the reason. | Screening form; entry in the register |
| 2. Describe | What data, from whom, how it flows, who sees it, where it is stored, for how long, which providers. | Systematic description |
| 3. Test necessity | Is the purpose legitimate? Is there a legal basis? Could the aim be reached with less data or in a less intrusive way? Is it proportionate? | Necessity and proportionality section; alternatives table |
| 4. Find the risks | For each risk to people (not to the practice): what could happen, how likely, how serious. Score before measures. | Risk register, inherent level |
| 5. Choose measures | Technical, organisational and contractual measures that reduce likelihood or severity. Score again. | Measures; residual level |
| 6. Take advice and views | Privacy adviser's advice, staff views, patients' views where appropriate, the provider's answers. | Record of consultation |
| 7. Decide | Rejected; approved; approved with conditions; or consult the authority (Art. 36) if a high residual risk remains and the practice still wants to go ahead. | Decision, conditions with owners and dates |
| 8. Monitor and review | Check the conditions were met. Review at a set date, and whenever the processing changes. | Review date; register updated |

### Scoring risk

Likelihood and severity each from 1 to 3, multiplied. Each risk is to a **person**, not to the practice.

| Score | Likelihood | Severity (for the person) |
|---|---|---|
| 1 Low | Unlikely in normal operation | Minor, short-lived inconvenience |
| 2 Medium | Could happen from time to time | Real distress or loss of control over data, reversible |
| 3 High | Likely, or has happened elsewhere with this kind of tool | Serious or lasting harm: wrong care, exposure of health data, discrimination |

| Likelihood × severity | Severity 1 | Severity 2 | Severity 3 |
|---|---|---|---|
| Likelihood 1 | 1 Low | 2 Low | 3 Medium |
| Likelihood 2 | 2 Low | 4 Medium | 6 High |
| Likelihood 3 | 3 Medium | 6 High | 9 High |

Acceptance. Low risks are accepted. Medium risks are accepted only with measures, an owner and a review. High residual risks are not accepted: the practice changes the project, drops it, or consults the authority under Art. 36. A very serious harm is not made acceptable by a low likelihood: where severity is 3, the measures must be strong and checked.

### Possible outcomes

The outcomes follow the EDPB's DPIA template. The first three are the controller's own; the fourth is the legal step in Art. 36.

| Outcome | When | What follows |
|---|---|---|
| Rejected | Residual risks stay high and cannot be reduced | The project does not start |
| Approved | Residual risks are low or accepted | Start; review at the set date |
| Approved with conditions | Residual risks are acceptable once specific things are done | Start only when the conditions are met; the conditions are tracked |
| Authority consulted (Art. 36) | A high residual risk remains and the practice still wants to proceed | Send the DPIA to the authority and wait. Do not start before the authority replies |

### Records

- Keep the screening form for every new processing or major change, whatever the result. A reasoned "no" is evidence too.
- Keep each DPIA with its risk register and the record of consultation in the privacy folder. Retention: while the processing continues and 5 years after it ends (a recommendation, to be added to the retention schedule).
- Update the record of processing, the retention schedule, the providers register, the controls register and the patient notice when a DPIA leads to a change.
- Review each DPIA at the date it sets, and when the purpose, the data, the provider, the technology or the risks change (Art. 35(11)).

## 4. Worked example: AI consultation notes (pilot)

In October 2027 Dr. A proposes to try a tool that listens to a consultation and drafts the clinical note. He would look at the patient instead of the keyboard. It records the voices of patient and doctor, sends the audio to a new provider, and returns text. The screening (SCR-2027-02) meets three WP248 criteria (sensitive data, vulnerable people, innovative technology) and the practice's own triggers (health data, recording of patients, an AI tool). A DPIA is required, and is done before the pilot starts.

The structure follows the EDPB's DPIA template (section numbers 0 to 6), so the document can be moved into that format or into a national template.

### 0. Overview

| Item | Entry |
|---|---|
| Reference and version | DPIA-2027-01; version 1.0 |
| Controller | Clinic X (X Medical S.R.L.) |
| Processor and sub-processors | AI Scribe Provider (V-13), processor. One sub-processor hosts the speech-to-text and language model (provider to confirm name, role and location, condition C1) |
| Project owner | Dr. A, owner-physician |
| Screening | SCR-2027-02, Mon 11 Oct 2027 |
| Dates | Drafted 12 to 25 Oct 2027; adviser's advice Thu 4 Nov 2027; decision Mon 8 Nov 2027; pilot Mon 15 Nov to Fri 10 Dec 2027; review Mon 13 Dec 2027 |
| Status | Approved with conditions |

In one paragraph. Dr. A wants to try a tool that listens to a consultation and drafts the clinical note, so that he can look at the patient instead of typing. The tool records the voice of the patient and the doctor, so the practice would put health data in the hands of a new provider, through a new technology. The assessment finds nine risks to patients. Six were High before measures and none is High after them. Four stay Medium (errors in the note, a breach at the provider, reuse by the provider, and transfers outside the EU). The practice approves a four-week pilot with Dr. A only, on conditions, and decides on 13 December 2027 whether to continue.

### 1. How it works

| Step | What happens | Where | Data |
|---|---|---|---|
| 1. Agreement | Dr. A tells the patient about the tool and asks. If the patient declines, nothing is recorded. | Consulting room | None |
| 2. Recording | Dr. A starts the recording on a tablet that belongs to the practice. He stops it at the end of the conversation, and before the examination. | Consulting room | Voice of patient and doctor |
| 3. Upload | The audio goes to the provider's service over an encrypted connection. Nothing is stored on the tablet. | Provider, EU region (to confirm) | Audio |
| 4. Draft note | The service turns the audio into text and drafts a clinical note. | Provider and sub-processor | Transcript; draft note |
| 5. Review | Dr. A reads the draft, corrects it, and pastes it into the practice software himself. There is no direct link between the two systems. | Practice software (A-01) | Final note |
| 6. Deletion | The audio is deleted by the provider within 24 hours of upload. Transcript and draft are deleted when Dr. A confirms the note, and at the latest after 72 hours. The final note is part of the medical record (RET-01). | Provider | Audio, transcript, draft |

| Data | Examples | Special category | Source |
|---|---|---|---|
| Voice and speech | What the patient and doctor say | Yes, by content | The patient and the doctor |
| Clinical content | Symptoms, history, medication, test results mentioned | Yes | The conversation |
| Third-party data | A relative or another person named or present | Possibly | The conversation |
| Technical data | Account, time and length of the recording, device | No | The service |

Scope. One physician, in the pilot, for consultations at the practice. Each consultation is about 15 to 20 minutes. Excluded from the pilot: children, mental health, sexual and reproductive health, and any visit where a third person is present and does not agree. Patients are a mix of adults, some elderly. Dr. B does not take part, and the tool is not installed on shared devices.

### 2. Analysis

**Lawfulness.**

| Question | Answer |
|---|---|
| Legal basis for the clinical note | Art. 6(1)(b) GDPR (the care contract), and Art. 9(2)(h) (health care), under the professional secrecy of the physician. The note is the same record as before; only the way it is drafted changes. |
| Legal basis for the recording and the transfer to the provider | Art. 6(1)(b), with the practice's own rule of asking the patient each time. The agreement is a safeguard and a way of respecting the patient. It is not the legal basis. If the patient says no, the consultation goes ahead without the tool. |
| Is the provider a processor? | Yes, if it acts only on the practice's instructions. An Art. 28 agreement is required before the pilot (condition C2). If the provider uses the data to train its own models for its own purposes, it would become a controller for that use, which is not accepted. |
| Automated decisions (Art. 22) | None. The tool drafts text. Dr. A decides what goes into the record. |

**Minimisation.**

- Recording starts and stops by Dr. A's decision, only for the conversation. It stops before the examination.
- No video, no continuous recording, no recording in waiting areas, and no use outside consultations.
- Excluded visit types and third-person rule (section 1.4).
- The audio is not kept after transcription: 24 hours at most.
- The transcript is not kept after the note is confirmed: 72 hours at most.

**Retention.**

| Data | Kept for | Where | Deleted by |
|---|---|---|---|
| Audio | 24 hours at most | Provider | The provider, automatically; the practice checks the setting at the pilot review |
| Transcript and draft note | Until Dr. A confirms the note; 72 hours at most | Provider | The provider, automatically, or Dr. A on confirming |
| Final clinical note | As the medical record (RET-01) | Practice software | Under the retention schedule |

**Measures that support compliance.**

| Area | Measure |
|---|---|
| Fairness and transparency | New section in the patient notice; a sign in the consulting room; Dr. A asks each time with a standard sentence. |
| Purpose limitation | The tool is for drafting clinical notes only. The contract bans other uses, including training the provider's models. |
| Accuracy | A draft is never filed without Dr. A reading it. Names, doses and sides are checked. The record shows that the note is Dr. A's. |
| Rights | Access, rectification and objection are handled under the rights procedure (module 5). Because audio and transcripts are deleted within 72 hours, nearly all requests concern the final note, which is in the record. |
| Security | Encrypted in transit and at rest. A practice-owned account with two-step verification. No audio stored on the tablet. Screen lock and remote wipe on the tablet. |
| Data protection by design | Opt-in for each consultation, narrow scope, automatic deletion, no link to the practice software. |
| Processor | Art. 28 agreement from the template in module 9. EU region. List of sub-processors, with notice of changes. Breach notice to the practice without undue delay. Deletion on request and at the end. |

### 3. Necessity and proportionality

| Option | What it gives | Why chosen or not |
|---|---|---|
| Type notes during the consultation (as now) | No new data flow | Costs eye contact and time. This is the baseline, and the pilot is measured against it. |
| Dictate the note after the visit | Part of the time saving, no recording of the patient's voice | Less intrusive: only the doctor's voice is recorded. The practice has not trialled it. This is the weak point of the case for recording the patient, and the reason the pilot is limited. |
| Templates and macros | Faster structured notes | Already used. Not a substitute for the narrative. |
| AI scribe with the patient in the room (this DPIA) | Most time saved; the doctor looks at the patient | New risks, mitigated as set out here. Proportionate only as a limited pilot. |

Necessity. The aim is legitimate: less time at the screen and more attention to the patient. The tool is not strictly necessary. Dictation after the visit gets part of the benefit with less intrusion. The pilot therefore tests whether the extra benefit justifies the extra risk. Proportionality. The risks to patients are acceptable only in a limited form: one physician, four weeks, patients who agree, visit types excluded, and a decision based on evidence at the end. A permanent, wider roll-out would need a new review.

The honest part of this section is the second row. Dictating a note after the visit is less intrusive and gets part of the benefit. The practice has not tried it. That is the weak point of the case for recording the patient, and it is the reason the pilot is small, short and stoppable.

### 4. Risks to patients

Nine risks, scored before and after the measures.

| Ref | Risk to people | L | S | Inherent | Measures | L | S | Residual |
|---|---|---|---|---|---|---|---|---|
| R1 | The recording picks up more than the consultation needs: a relative, a phone call, a side comment. | 3 | 2 | High (6) | Dr. A starts and stops it. Stops before the examination. Visit types excluded. A third person must also agree, or Dr. A does not record. | 1 | 2 | Low (2) |
| R2 | Audio or transcripts at the provider are seen by someone who should not: breach or misuse by an employee. | 2 | 3 | High (6) | Art. 28 agreement. Encryption at rest and in transit. Access limited. Audio deleted within 24 hours and text within 72 hours. Security evidence checked before the pilot (C1). | 1 | 3 | Medium (3) |
| R3 | A mistake in the transcript or draft (a drug, a dose, the wrong side) enters the record and affects care. | 3 | 3 | High (9) | A draft is never filed unread. Dr. A checks names, doses and sides. No direct link to the record. Pilot stops after two errors that reach the record. | 2 | 2 | Medium (4) |
| R4 | The provider or a sub-processor uses the data to train or improve its models, or for its own purposes. | 2 | 3 | High (6) | Contract bans it. Setting checked and noted. Sub-processors listed, and changes notified. | 1 | 3 | Medium (3) |
| R5 | Data reaches a country outside the EU through a sub-processor or through support access. | 2 | 3 | High (6) | EU region and EU-only support in the contract. Sub-processor list. A transfer assessment if any location is outside the EU (C1). | 1 | 3 | Medium (3) |
| R6 | Patients feel they cannot refuse, and hold back information or avoid care. | 2 | 2 | Medium (4) | Ask each time, in a standard sentence. Refusal has no consequence. A sign, and a notice that says so. | 1 | 2 | Low (2) |
| R7 | The tablet or the account is lost or taken, with audio or notes on it. | 2 | 3 | High (6) | Nothing stored on the tablet. Screen lock, device encryption, remote wipe, two-step verification on the account. | 1 | 2 | Low (2) |
| R8 | The transcripts are used for other purposes: checking staff, marketing, research. | 2 | 2 | Medium (4) | Purpose fixed in the notice and the contract. Only Dr. A has access. A new purpose needs a new DPIA. | 1 | 2 | Low (2) |
| R9 | A patient cannot get access to, correct or have deleted what the provider holds. | 2 | 2 | Medium (4) | Audio and text are gone within 72 hours. The final note is in the record, with the rights procedure. The provider must support deletion on request. | 1 | 2 | Low (2) |

<div data-table-tools data-name="dpia-risks"></div>

**Reading the table.** Six risks are High before measures. After measures none is High: four are Medium and five Low. Look at R2, R4 and R5, where severity stays at 3 because the harm, if it happened, would still be serious. Their residual level depends on promises from the provider. That is why the first condition is to check them, and why the pilot cannot start until it is done.

### 5. Who was asked

| Who | What was asked and said |
|---|---|
| Privacy adviser (advice, Thu 4 Nov 2027) | Asked whether recording is necessary, and the answer is in section 3. Advised: ask each time; exclude sensitive visit types; confirm in writing that the provider does not train on the data; do not link the tool to the record in the pilot; set stop rules. All adopted. No DPO is appointed or required, so Art. 35(2) does not apply. |
| Patients (Art. 35(9); notice and comment box in the waiting room, Mon 18 to Fri 29 Oct 2027) | Eleven comments. Seven positive or neutral. Four worried about being recorded; three of them asked for an easy way to refuse. The practice added the ask-each-time rule and the sign in response. |
| Staff (Nurse C, Receptionist D) | Nurse C asked who could hear the recordings and whether they were kept: answered in the deletion rules. Receptionist D is not in the consulting rooms and has no role. |
| The provider (written answers, Fri 22 Oct 2027) | The provider stated EU hosting, no training on customer data, and the deletion times above. These statements have not been verified. Condition C1 requires evidence before the pilot. |

Two things from this table changed the project. Patients' comments led to the ask-each-time rule and the sign in the room. The adviser's questions led to the stop rules and to keeping the tool away from the record in the pilot.

### 6. Decision and conditions

Approved with conditions. No residual risk is High. Four are Medium and are accepted with the measures and conditions above. The authority does not have to be consulted under Art. 36, because no high residual risk remains. The pilot may start only when C1 to C6 are done. Approved by Dr. A on Mon 8 Nov 2027.

| Ref | Condition | Owner | Due |
|---|---|---|---|
| C1 | Complete the provider review and obtain written evidence of EU hosting, the sub-processor list, no training on the data, the deletion times, and security measures. Assess any location outside the EU. | Dr. A, with the adviser | Fri 12 Nov 2027 |
| C2 | Sign the Art. 28 agreement (template of module 9) with the provider. | Dr. A | Fri 12 Nov 2027 |
| C3 | Update the patient notice, put the sign in the consulting room, and adopt the sentence for asking the patient. | Dr. A | Fri 12 Nov 2027 |
| C4 | Brief Nurse C (10 minutes) and tell Dr. B that the tool is not for his consultations or his devices. | Dr. A | Fri 12 Nov 2027 |
| C5 | Update the record of processing (new activity), the retention schedule, the providers register (V-13) and the controls register. | Dr. A | Fri 12 Nov 2027 |
| C6 | Add a scenario to the incident procedure: a note or transcript in the wrong record; a breach at the provider. Add the provider's breach contact. | Dr. A | Fri 12 Nov 2027 |
| C7 | Run the pilot only with Dr. A, from Mon 15 Nov to Fri 10 Dec 2027, with the excluded visit types and the ask-each-time rule. Keep a simple log: visits, refusals, errors found, minutes saved. | Dr. A | 15 Nov to 10 Dec 2027 |
| C8 | Stop at once if: a breach at the provider; two errors reach the record; or a complaint that the practice cannot answer. Record the reason. | Dr. A | During the pilot |
| C9 | Review on Mon 13 Dec 2027 with the log. Decide: stop, continue as is, or widen after a further DPIA review. Update this DPIA and the register. | Dr. A, with the adviser | Mon 13 Dec 2027 |

<div data-table-tools data-name="dpia-conditions"></div>

### Changes triggered in other documents

A DPIA that stays on its own shelf has failed. These are the changes it causes in the rest of the programme:

| Document | Change triggered | Module |
|---|---|---|
| Record of processing | New activity PA-14, AI consultation notes; V-13 as processor | 3 |
| Retention schedule | New row for audio and transcripts (24 and 72 hours); a row for DPIA files | 4 |
| Rights procedure | No change. Note that audio and transcripts are gone within 72 hours | 5 |
| Incident procedure | New scenarios (C6) | 6 |
| Security controls register | Entries for the tablet and the provider account; two-step verification | 7 |
| Training | Add a question to the mini-test bank about asking patients and checking drafts | 8 |
| Providers and Art. 28 | V-13 in the register; Art. 28 agreement; provider review (C1, C2) | 9 |
| Patient notice | New section on the tool; sign in the consulting room (C3) | 2 |

### What is specific to AI here

The DPIA did not need a new method for AI. It needed these questions asked of the provider, in writing:

- **Is customer data used to train or improve the provider's models?** Contractually forbidden here, and checked in the settings.
- **Who are the sub-processors, and where are they?** The model host is a sub-processor like any other.
- **What is kept, for how long, and who can see it?** Audio 24 hours, text 72 hours at most.
- **Who is responsible for mistakes?** The doctor reads and signs every note. The tool drafts and does not decide.
- **Does a person see the output before it affects anyone?** Yes: Dr. A, always, before the note is filed.

**Downloads**

- [DPIA_Procedure_v1.0_Clinic-X_EN.docx](../downloads/12-dpia/DPIA_Procedure_v1.0_Clinic-X_EN.docx): the procedure, screening form and register
- [DPIA_Report_AI_Notes_v1.0_Clinic-X_EN.docx](../downloads/12-dpia/DPIA_Report_AI_Notes_v1.0_Clinic-X_EN.docx): the worked DPIA, DPIA-2027-01
- [DPIA_register_Clinic-X_EN.csv](../downloads/12-dpia/DPIA_register_Clinic-X_EN.csv): the screening register as a spreadsheet
- [DPIA_risk_register_AI_notes_Clinic-X_EN.csv](../downloads/12-dpia/DPIA_risk_register_AI_notes_Clinic-X_EN.csv): the risk register as a spreadsheet
- [DPIA_Procedure_Blank_Template_EN.docx](../downloads/12-dpia/DPIA_Procedure_Blank_Template_EN.docx): the blank procedure and form
- [DPIA_Report_Blank_Template_EN.docx](../downloads/12-dpia/DPIA_Report_Blank_Template_EN.docx): the blank DPIA report

The cameras screening is in [module 10](../10-cctv-lia/), the provider agreement template in [module 9](../09-providers/), and the rights and incident procedures that the DPIA refers to in [module 5](../05-data-subject-rights/) and [module 6](../06-incidents/).

## 5. What was verified, and what was not

**Checked on 7 November 2026**

- **Art. 35 and 36 GDPR.** Art. 35(1) (prior assessment where processing is likely to result in a high risk), 35(3) (three named cases), 35(7) (content), 35(9) (views of data subjects), 35(11) (review) and 36 (prior consultation) are used as described.
- **Recital 91.** Processing of patients' data by an individual physician is not to be considered large scale. Checked in the [text of recital 91](https://gdpr-info.eu/recitals/no-91/). That is why Art. 35(3)(b) does not apply automatically to a single practice, and why the screening relies on the WP248 criteria.
- **The nine WP248 criteria and the two-criteria rule.** Read in a [published summary](https://www.scl.org/10311-when-to-conduct-dpias/) of the Article 29 Working Party guidelines (WP248 rev.01). Also noted there: meeting one criterion can still require a DPIA, and some features (joint controllership, a particular legal basis, international transfers) do not by themselves require one.
- **ANSPDCP Decision no. 174/2018.** Read in a [published copy](https://primariabt.ro/gdpr/legislatie/Decizie174_18.10.2018.pdf) (see module 10). The list is not exhaustive.
- **The EDPB DPIA template.** The EDPB [announced on 14 April 2026](https://www.edpb.europa.eu/news/news/2026/enhancing-compliance-and-consistency-edpb-adopts-dpia-template_en) a template and an explainer, open to public consultation until 9 June, and voluntary. Its structure (overview; description; analysis; necessity and proportionality; risk assessment; interested parties; conclusion) and its four outcomes (rejected, consultation, approved, conditionally approved) were read in a [copy of the template](https://datenschutzarchiv.org/fileadmin/Dokumente/2026/LL_EDPB_20260414_DPIA_Template_en.pdf), and the document header states it was adopted on 10 March 2026.

**Not verified, to be confirmed**

- **The final EDPB template.** This is the version for public consultation. A final version after the consultation was searched for and not found as of 7 November 2026. The explainer was not read in full.
- **The national follow-up.** Whether ANSPDCP has adopted the EDPB template or published its own, and the current way of consulting the authority under Art. 36.
- **Whether the tool is regulated beyond data protection.** An AI note-taking tool may touch rules on medical devices or the EU AI Act, depending on what it does. Not checked. The worked example assumes it only transcribes and drafts.
- **Recording consultations under Romanian health law.** Whether any rule on patient rights or professional secrecy (for example Law no. 46/2003) adds conditions to recording a consultation. To be confirmed with a lawyer.
- **The provider's statements.** They are fictional, and in the example they are explicitly unverified until condition C1.
- **The retention period for DPIA files.** Five years after the processing ends is a recommendation. No legal period was checked.
- **Whether the legal basis for the recording is Art. 6(1)(b).** The page treats the patient's agreement as a safeguard, not as the basis. A lawyer should confirm.

## 6. Design decisions

**1. Screen before anything starts, and keep the screening whatever the answer.** A reasoned "no" shows the thinking. The register is that evidence.

**2. Criteria are a trigger, not a verdict.** Two criteria usually mean a DPIA, and the procedure says that a "no" needs a written reason. Module 10's cameras are exactly that case.

**3. The worked example is a "yes" on purpose.** Showing a DPIA for the cameras would have repeated module 10. An AI tool on health data is the realistic case, and it is the one the project is about.

**4. Risks are to people.** The register talks about a patient hurt by a wrong note, a patient who holds back information, a patient whose recording is seen by a stranger. It does not talk about fines.

**5. A three-by-three scale.** Nine cells and a rule: High is not accepted. A small practice can use it in ten minutes. The rule that a severe harm is not made acceptable by a low likelihood stops the scale from being gamed.

**6. Try the lighter option, or say you did not.** The necessity section admits that the less intrusive option was not tried. That is why the pilot is limited and why it is measured against the baseline.

**7. Provider claims are conditions, not facts.** What the provider says about training, location and deletion is written down as the provider's statement. Checking it is the first condition and blocks the start.

**8. A pilot with stop rules.** One doctor, four weeks, excluded visit types, three reasons to stop at once, and a date to decide. Widening it needs a new review.

**9. Ask the patients, and act on what they say.** A notice and a comment box is cheap. The result is in the record, and so are the two changes it caused.

**10. Follow the DPIA into the other documents.** A table lists what changes in the record of processing, the retention schedule, the notice, the incident procedure, the training and the providers register.

**11. Use the EDPB's structure.** The report can be moved into the EDPB template or a national one without rewriting.

## 7. Romanian national layer

> **Romania-specific points** (the method applies anywhere in the EU)
>
> - **The authority's list.** ANSPDCP Decision no. 174/2018 lists operations that require a DPIA, including large-scale monitoring of public areas and of employees, and large-scale processing with innovative technology. *Read in a published copy; official text to be confirmed.*
> - **Prior consultation.** Where a high residual risk remains and the practice wants to go ahead, the consultation goes to ANSPDCP under Art. 36. *The current channel and procedure are to be confirmed.*
> - **Patient and health law.** Recording consultations, professional secrecy and patient rights (for example Law no. 46/2003) may add conditions. *To be confirmed with a lawyer.*
> - **Language.** Notices and signs for patients are in Romanian in the real world. The model here is in English for the portfolio.

## 8. Blank templates

The blank procedure and the blank DPIA report follow the structure above. Yellow fields are for you to complete; delete the completion notes before use.

**How to use them**

1. Adopt the procedure, name the owner and the adviser, and set the review date.
2. For every new tool, provider or kind of recording, fill in the screening form and add a row to the register. Do it before the project starts.
3. If the result is "required", use the report template. Describe how it really works, with the provider's own answers.
4. Test the necessity honestly. Name the lighter option, and say whether you tried it.
5. List the risks to people. Score them before and after the measures. Do not accept a High.
6. Ask the adviser, the staff and, where appropriate, the patients. Write down what they said and what you changed.
7. Decide, with conditions that have owners and dates. Update the other documents. Set the review date.
