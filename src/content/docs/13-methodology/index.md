---
title: "Methodology"
description: "How the Clinic X case study was built: the fictional clinic, the twelve modules, how documents and data link up, how sources were checked, what is still open, and how to reuse the material."
---


> **Fictional example.** Clinic X is an invented practice. This page is educational and is not legal advice.

## 1. What this is, and what it is not

This site is a worked privacy programme for a small private clinic in Romania. It follows one invented practice, Clinic X, from "one notice and nothing else" to a programme with twelve working parts: a notice, a record of processing, a retention schedule, procedures for requests and incidents, a security policy, training, provider agreements, a camera assessment, an employee notice and a DPIA process.

Every module has the same three layers: **why it exists**, **a worked example for Clinic X**, and **a blank template** that anyone can adapt. The aim is to show what a proportionate programme looks like for a practice with three or four people, and how the parts hold together.

It is **not** a compliance certificate, a legal opinion or a product. The documents show one reasonable way of doing the work. Whether a practice is compliant depends on its facts and its national law. Where a statement rests on a source that was not checked, the page says so.

## 2. The fictional clinic

Clinic X is a family-medicine practice in an invented town, with an owner-physician, a practice nurse, a receptionist and a visiting physician, and about 2,800 patient records. Everything about it is invented. People are letters and roles (Dr. A, Nurse C), providers are generic labels ("Accounting Firm", "CCTV Installer"), and all addresses, numbers and domains are placeholders or reserved (`.example`).

A single description, the **Clinic Profile** ([module 1](../01-clinic-profile/)), holds every fact that more than one document uses: roles, systems, providers, retention periods, deadlines, camera locations, dates. If a document and the profile disagree, the profile wins. That is how a camera, a deadline or a provider appears in ten documents with the same details.

**Dates.** Inside the fiction, the programme is adopted on 1 December 2026 and the story runs to December 2027, with worked cases in 2027. Dates in "checked on 7 November 2026" notes are real: they are the day the legal sources were read.

## 3. The twelve modules

| # | Module | The question it answers | Main legal hook | Main documents |
|---|---|---|---|---|
| 1 | [Clinic Profile](../01-clinic-profile/) | What are we, and what are our fixed facts? | Art. 5(2), 24 | Profile |
| 2 | [Patient notice](../02-patient-notice/) | What do we tell patients? | Art. 12 to 14 | Notice v1.0 and v2.0, blank |
| 3 | [ROPA](../03-ropa/) | What do we process, why, with whom? | Art. 30 | Record, register, blank |
| 4 | [Retention](../04-retention/) | How long do we keep it? | Art. 5(1)(e) | Schedule, register, blank |
| 5 | [Data subject rights](../05-data-subject-rights/) | What do we do when someone asks? | Art. 12, 15 to 22 | Procedure, 15 templates, register, blank |
| 6 | [Incidents](../06-incidents/) | What do we do when it goes wrong? | Art. 33, 34 | Procedure, 7 templates, breach register, blank |
| 7 | [Security policy](../07-security-policy/) | How do we protect it? | Art. 32 | Policy, staff pack, 38 controls, blank |
| 8 | [Training](../08-training/) | How do staff know? | Art. 32(4) | Plan, mini-tests, record, blank |
| 9 | [Providers and Art. 28](../09-providers/) | Who else touches the data? | Art. 28 | Provider pack, agreement, register, blank |
| 10 | [CCTV and legitimate interest](../10-cctv-lia/) | Are the cameras justified? | Art. 6(1)(f); Law 190/2018 Art. 5 | Assessment, operating sheet, log, blank |
| 11 | [Employee notice](../11-employee-notice/) | What do we tell staff? | Art. 13, 14 | Notice, checklist, record, blank |
| 12 | [DPIA process](../12-dpia/) | When do we stop and assess? | Art. 35, 36 | Procedure, worked DPIA, registers, blank |

A [self-assessment](../14-self-assessment/) turns the twelve modules into 36 questions that a reader can score against their own practice.

## 4. How a module is built

- **The page** explains why the document exists, shows the Clinic X version, lists what was verified and what was not, gives the design decisions, adds a box for the Romanian national layer, and says how to use the blank template.
- **The documents** are Word files. Each has a Clinic X version and a blank template with yellow fields. The blank is generated from the same source as the worked version, so the two cannot drift apart.
- **The registers** (record of processing, retention, requests, breaches, controls, providers, training, camera plan, access log, screenings, risks) are available as spreadsheets and as data files that the site uses for filterable views.
- **No personal or real names.** Documents carry a neutral author field and no comments or tracked changes.

## 5. How the codes link up

Short codes tie the documents together. A code is defined once and used everywhere.

| Code | Meaning | Defined in |
|---|---|---|
| PA-01 to PA-13 | Processing activities | Module 3 |
| RET-01 to RET-13 | Retention rows | Module 4 |
| T0 to T14 | Reply templates for requests | Module 5 |
| REQ-2027-nnn | Requests in the register | Module 5 |
| I1 to I7, INC-2027-nnn | Incident templates; incidents in the breach register | Module 6 |
| SEC-01 to SEC-38 | Security controls | Module 7 |
| A-01 to A-14 | Assets (systems, devices, paper) | Clinic Profile |
| S-01 to S-07 | People and roles | Clinic Profile |
| V-01 to V-12 | Providers and recipients | Clinic Profile, module 9 |
| C1 to C4, G1 to G14 | Cameras; camera safeguards | Module 10 |
| LIA-nn, LOG-2027-nnn | Legitimate interest assessments; access log | Module 10 |
| SCR-nnnn-nn, DPIA-nnnn-nn | Screenings; DPIAs | Module 12 |
| OI-01 to OI-27 | Open items | This page |

## 6. How facts are checked

Each page says what was checked and what was not. The labels mean:

- **Checked, with a date.** The source was read, and the page says in what form (the official text, a published copy, a summary). "Checked on 7 November 2026" means that day.
- **To be confirmed.** The point was not verified, or only a secondary source was read. It is listed in the open items below.
- **Recommendation.** The practice's own choice, where no law sets a figure (for example a retention period). The page says so.
- **Assumption.** Something the example takes for granted, such as a provider's behaviour. It is labelled, and where it matters it is made a condition to verify.
- **Fictional.** An invented fact about Clinic X.

What was **not** done: no lawyer has reviewed the documents, no real provider was tested, and no real regulator was asked. The Romanian layer is a researcher's reading of the sources, not an opinion.

## 7. Open items

All "to be confirmed" points from the pages, in one list. None is closed. The register is also a spreadsheet and a data file.

| Ref | Item | Modules | What closes it | Who |
|---|---|---|---|---|
| OI-01 | Retention periods for medical records (RET-01 to RET-04). No single act giving the periods for a small outpatient practice was found. | 2, 4 | Confirm the applicable act and period with the professional college, the archives rules or a lawyer | Lawyer or professional body |
| OI-02 | ANSPDCP Decision no. 52/2012 on video surveillance: only a draft was found. Final text and current force unknown. | 2, 4, 10 | Obtain the official text from the authority | Author |
| OI-03 | Law no. 190/2018 Art. 5: the current consolidated text; how it applies to an existing system, to cameras not aimed at staff, and to a practice with no representatives. | 10, 11 | Check the consolidated text; legal opinion on the three points | Lawyer |
| OI-04 | Law no. 190/2018 Art. 4 (national ID number): exact wording of the safeguards, including training. | 7, 8, 11 | Read the consolidated text | Author |
| OI-05 | Law no. 46/2003 (patient rights): the articles on access to and copies of medical documents, confidentiality, and requests about minors or deceased patients. | 2, 5 | Identify the articles and update the rights procedure | Lawyer |
| OI-06 | Law no. 506/2004 (marketing and cookies): the specific provisions relied on for PA-08 and PA-13. | 3 | Identify the provisions | Author |
| OI-07 | Art. 9 GDPR conditions for reporting to the health insurance fund (PA-03) and for handling requests (PA-09). | 3 | Confirm the condition for each report | Lawyer |
| OI-08 | Archiving period for personnel files (RET-11(a)). | 4, 11 | Confirm with the accountant or an HR adviser | Accountant |
| OI-09 | Weekends and the 72-hour breach deadline: how EDPB guidance counts them. | 6 | Read the guidance; confirm the cautious reading | Author |
| OI-10 | The authority's channel for breach notification (and for Art. 36 prior consultation). | 6, 12 | Check the authority's current procedure at the time of use | Author |
| OI-11 | Whether NIS2 (GEO no. 155/2024, Law no. 124/2025) covers a small outpatient practice. | 6 | Check the size and sector thresholds | Lawyer |
| OI-12 | The status of the visiting physician: independent controller, joint controller or processor, and the arrangement for using the practice's system. | 1, 3, 5, 6, 9, 11 | Legal check of the arrangement; written agreement | Lawyer |
| OI-13 | The accounting firm's role split: processor for payroll, independent for statutory accounting. | 9 | Confirm the split | Lawyer |
| OI-14 | Whether the CCTV installer can reach recordings (and so is a processor). | 9, 10 | Check in the provider review | Practice |
| OI-15 | The website analytics tool: which one, and whether it transfers data outside the EU. | 3, 9 | Identify it in the provider review; rescreen (SCR-2027-01) | Practice |
| OI-16 | Legal review of the Art. 28 agreement template, and the time limits in it (24 hours, 30 days, 5 and 15 days), which are recommendations. | 9 | Legal review before use with a real provider | Lawyer |
| OI-17 | Professional secrecy: the sources of the duty, and any duty to train staff on it. Sector platforms (health-record, insurance) may have own security rules. | 7, 8 | Identify sources and sector rules | Lawyer |
| OI-18 | Product features: two-step verification and access logs in the practice software; access log on the CCTV recorder. | 7, 10, 11 | Confirm with the providers (SEC-03, SEC-32) | Practice |
| OI-19 | Final texts: EDPB Guidelines 3/2019 (version 2.0), the CJEU judgment in C-708/18, and the official text of ANSPDCP Decision no. 174/2018. | 10, 12 | Read the official texts; check paragraph numbers | Author |
| OI-20 | Employee-notice details: REGES and the labour inspectorate; the basis and the provider's role for occupational health. | 11 | Check the current rules | Lawyer |
| OI-21 | The EDPB DPIA template: a final version after the consultation, and whether ANSPDCP adopted it or its own. | 12 | Check the EDPB and ANSPDCP sites | Author |
| OI-22 | Whether an AI note-taking tool is regulated as a medical device or under the EU AI Act. | 12 | Check against the tool's actual function | Lawyer |
| OI-23 | Recording consultations under Romanian health law; whether the legal basis for the recording is Art. 6(1)(b). | 12 | Legal opinion | Lawyer |
| OI-24 | Retention of items with no legal period: access logs, DPIA files, training records. | 4, 8, 11, 12 | Decide, record as the practice's own choice, add rows to the schedule | Practice |
| OI-25 | How the one-month clock behaves when more information is needed to check identity (EDPB guidance on access). | 5 | Read the guidance | Author |
| OI-26 | Exceptions in accounting retention (assets with a long useful life) and the current text of Art. 25 of Law no. 82/1991. | 4 | Confirm with the accountant | Accountant |
| OI-27 | Whether Clinic X needs a data protection officer: Art. 37(1)(c) GDPR (large-scale special-category processing as a core activity) and any national rule. The profile assumes not, relying on recital 91. | 1, 3 | Legal view on the point; record the reasoning in the record of processing and revisit yearly | Lawyer |

## 8. Sources read

Sources with a web address are linked from the pages that use them. They were read on 7 November 2026 in the form noted on each page.

| Source | Used in | Form read |
|---|---|---|
| [Law no. 190/2018, Art. 5 (and Art. 4 in summary)](https://www.primariasebes.ro/wp-content/uploads/2021/05/Legea-190-din-2018-DCP-.pdf) | 10, 11 | Published copy |
| [ANSPDCP Decision no. 174/2018](https://primariabt.ro/gdpr/legislatie/Decizie174_18.10.2018.pdf) | 10, 12 | Published copy |
| [EDPB Guidelines 3/2019 on video devices](https://edpb.europa.eu/sites/edpb/files/consultation/edpb_guidelines_201903_videosurveillance.pdf) | 10, 11 | Version for public consultation, 10 July 2019 |
| [CJEU C-708/18 (11 December 2019)](https://www.rpclegal.com/snapshots/data-protection/cjeus-cctv-ruling-guidance-on-legitimate-interests-processing/) | 10 | Law firm summary |
| [WP29 Opinion 2/2017 on data processing at work](https://gdpr-text.com/en/guidelines/dataprocessingatwork/) | 11 | Published text |
| [Recital 91 GDPR](https://gdpr-info.eu/recitals/no-91/) | 12 | Published text |
| [WP248 rev.01, nine criteria](https://www.scl.org/10311-when-to-conduct-dpias/) | 10, 12 | Published summary |
| [EDPB DPIA template, announcement](https://www.edpb.europa.eu/news/news/2026/enhancing-compliance-and-consistency-edpb-adopts-dpia-template_en) and [template](https://datenschutzarchiv.org/fileadmin/Dokumente/2026/LL_EDPB_20260414_DPIA_Template_en.pdf) | 12 | Announcement and a copy of the template |
| [Law no. 36/2023 amending Law no. 82/1991, Art. 25 (accounting retention)](https://www.fiscalitatea.ro/documente-care-vor-fi-pastrate-in-arhiva-timp-de-5-ani-de-contribuabili-conform-legii-362023-22429/) | 4 | A published summary (secondary); official text to be confirmed (OI-26) |
| Ministry of Public Finance Order no. 1447/2023 (accounting retention exception) | 4 | Cited by number from the tax authority's publication; no link located, not re-read (OI-26) |
| [EDPB Guidelines 9/2022 on breach notification](https://www.edpb.europa.eu/system/files/documents/2023-04/edpb_guidelines_202209_personal_data_breach_notification_v2.0_en.pdf) | 6 | Final version 2.0, as published by the EDPB |
| GEO no. 155/2024 and [Law no. 124/2025](https://www.posta-romana.ro/cnpr-data/_editor/files/sintact-legea-124-2025-pentru-aprobarea-ordonantei%281%29.pdf) (NIS2) | 6 | Text of Law no. 124/2025 as published in Monitorul Oficial no. 638 of 7 July 2025 |
| [Commission Implementing Decision (EU) 2021/915](https://eur-lex.europa.eu/eli/dec_impl/2021/915/oj) (Art. 28 clauses) | 9 | Official text on EUR-Lex |
| [EDPB Guidelines 07/2020 on controller and processor](https://www.edpb.europa.eu/system/files/documents/2023-10/EDPB_guidelines_202007_controllerprocessor_final_en.pdf) | 9 | Final version, adopted 7 July 2021 |
| GDPR text (Art. 5, 6, 9, 12 to 22, 24, 25, 28 to 36) | All | Known text; articles cited as used |

## 9. Principles

These choices recur across the modules.

1. **Proportionate.** Short where the risk is low. A three-person clinic should be able to keep the programme up.
2. **One source of facts.** Fixed numbers live in one place, and the others follow.
3. **Honest status.** "Partial", "to be confirmed" and "not yet used" are used where they are true. A register that is green on day one is less believable.
4. **Evidence over assertion.** A procedure counts when there is a record that it was used.
5. **The same fact, the same way, everywhere.** Camera rules, providers and retention periods are checked across documents, and the mismatches are written down.
6. **A reasoned "no" is a record.** Screenings, refusals and decisions not to notify are kept, with the reasons.
7. **State the weak point.** If the evidence for a choice is thin, the document says so and says what would change the answer.
8. **Practice turns paper into behaviour.** Training, drills, reviews and registers with dates matter as much as the documents.
9. **Risks to people.** Not fines, not the practice's convenience.
10. **Plain English, with the source shown.** Every legal statement shows where it comes from.

## 10. Reuse, licence and disclaimer

The documents and page text are proposed for reuse under **CC BY 4.0**, and the code and data files under the **MIT licence**. The final licence is set in the repository. Please keep the disclaimer when you reuse the templates.

> **Educational example, not legal advice.** Clinic X and everyone in it are fictional. The documents show one proportionate approach and may be wrong for your practice or your country. Check current law and your own facts, and take legal advice before relying on any document with real patients, staff or providers.

**How it was made.** The documents were drafted with the help of an AI assistant and edited by the author, using sources read on the dates above. The AI assistant can make mistakes, which is one reason the pages separate what was checked from what was not.
