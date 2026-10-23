import { CaseStudy, IntelligenceEngine, OperatingStage, ProblemSignalRecord } from '../types';

export const INTELLIGENCE_ENGINES: IntelligenceEngine[] = [
  {
    number: 1,
    id: 'listening-engine',
    name: 'Listening Engine',
    role: 'Captures & contextualizes raw stakeholder signals',
    description: 'Understands what is happening across lived stakeholder experiences through multi-channel intake: plain-text accounts, structured surveys, audio testimonies in Indian languages, guild submissions, and industry research.',
    inputs: ['Individual worker accounts', 'Anonymous crew surveys', 'Industry guild reports', 'Contract dispute narratives', 'Public court filings & trade news'],
    processing: ['Multilingual translation & transcription', 'Entity extraction (roles, timelines, contract types)', 'De-identification & privacy scrubbing', 'Ambiguity flagging'],
    outputs: ['Contextualized raw signal records', 'Linguistic sentiment & urgency indices', 'Provenance metadata tags'],
    trustGuardrails: ['Zero re-identification risk', 'Consent-bound data use only', 'Immediate exclusion of personal defamation or unverified allegations']
  },
  {
    number: 2,
    id: 'evidence-engine',
    name: 'Evidence Engine',
    role: 'Evaluates veracity, corroboration & limitations',
    description: 'Distinguishes between isolated complaints, corroborated patterns, statistical observations, and proven systemic mechanisms. Assigns strict evidentiary status to every claim.',
    inputs: ['Raw signals from Listening Engine', 'Third-party corroborating records', 'Cross-referenced timecards or call sheets', 'Industry baseline benchmarks'],
    processing: ['Corroboration clustering across independent sources', 'Selection bias & sample skew assessment', 'Counterevidence stress testing', 'Confidence level computation'],
    outputs: ['Graded evidence dossiers (Reported → Tested)', 'Uncertainty boundaries & missing evidence checklists', 'Evidentiary status badges'],
    trustGuardrails: ['One report never equals prevalence', 'Explicit labeling of unverified claims', 'Human expert review for critical conclusions']
  },
  {
    number: 3,
    id: 'graph-engine',
    name: 'Graph Engine',
    role: 'Maps multidimensional relationships across the ecosystem',
    description: 'Constructs dynamic ontologies connecting stakeholders, operational dependencies, contractual choke points, regional hubs, and upstream-downstream incentives.',
    inputs: ['Graded problem signals', 'Industry supply chain maps', 'Guild jurisdictions', 'Contractual workflow models'],
    processing: ['Entity graph resolution', 'Transitive bottleneck detection', 'Upstream dependency traversal', 'Feedback loop detection'],
    outputs: ['Interactive living network graphs', 'Structural bottleneck heatmaps', 'Ecosystem cluster topologies'],
    trustGuardrails: ['No commercial sale of relational maps for anti-competitive targeting', 'Strict protection of vulnerable vendor nodes']
  },
  {
    number: 4,
    id: 'intelligence-engine',
    name: 'Intelligence Engine',
    role: 'Identifies systemic patterns & causal mechanisms',
    description: 'Moves past visible superficial symptoms to unearth hidden structural drivers — such as misaligned cash flow incentives, missing escrow standards, or regional distribution monopolies.',
    inputs: ['Knowledge graph subgraphs', 'Historical case archives', 'Comparative industry parallels (e.g. tech, logistics)'],
    processing: ['Root-cause causal inference modeling', 'Systemic vulnerability clustering', 'Simulated counterfactual impact analysis', 'Leverage point identification'],
    outputs: ['Root-cause diagnostic briefs', 'Systemic vulnerability warnings', 'High-leverage intervention targets'],
    trustGuardrails: ['Correlation explicitly decoupled from causation', 'Multi-perspective rival hypothesis generation', 'Mandatory domain-expert peer review']
  },
  {
    number: 5,
    id: 'action-engine',
    name: 'Action Engine',
    role: 'Coordinates targeted, feasible interventions',
    description: 'Translates validated diagnostic insights into structured pilot interventions, assembling the exact coalition of willing stakeholders, technical capabilities, and institutional partners required to act.',
    inputs: ['Root-cause diagnostic briefs', 'Stakeholder capability registries', 'Institutional reform agendas', 'Pilot partner expressions of interest'],
    processing: ['Stakeholder alignment mapping', 'Intervention feasibility & risk scoring', 'Resource & capability matching', 'Standard Operating Procedure (SOP) design'],
    outputs: ['Pilot intervention roadmaps', 'Stakeholder coalition pacts', 'Measurement baseline definitions', 'Escrow / coordination protocols'],
    trustGuardrails: ['Fair representation of vulnerable participants', 'Equitable distribution of economic benefits', 'No forced participation or exclusivity']
  },
  {
    number: 6,
    id: 'learning-engine',
    name: 'Learning Engine',
    role: 'Measures outcomes, preserves lessons & closes the loop',
    description: 'Monitors the real-world impact of interventions against rigorous baselines, archiving what worked, what failed, what unexpected side effects occurred, and feeding lessons back into the ecosystem.',
    inputs: ['Pilot execution telemetry', 'Post-intervention stakeholder feedback', 'Longitudinal baseline measurements', 'Failure incident logs'],
    processing: ['Difference-in-differences outcome calculation', 'Unintended consequence detection', 'Transferability analysis across regions', 'Institutional memory synthesis'],
    outputs: ['Verified intervention impact reports', 'Open-access ecosystem playbooks', 'Updated baseline benchmarks', 'Listening Engine feedback signals'],
    trustGuardrails: ['Transparent publication of failed pilots', 'No selective cherry-picking of positive metrics', 'Full attribution of participant insights']
  }
];

export const EVIDENCE_LADDER_LEVELS = [
  {
    level: 1,
    id: 'REPORTED',
    name: 'Reported Signal',
    badgeClass: 'badge-evidence-reported',
    definition: 'An unverified account or isolated observation submitted by a single participant or observed in qualitative testimony.',
    requiredEvidence: 'Credible, context-rich first-hand submission; clear timeline and affected roles identified.',
    analyticalBoundary: 'A single report warrants investigation, but can NEVER establish statistical prevalence or universal malpractice.',
    color: '#A5ADBD'
  },
  {
    level: 2,
    id: 'OBSERVED',
    name: 'Corroborated Observation',
    badgeClass: 'badge-evidence-observed',
    definition: 'A pattern or friction point documented across multiple independent, non-collusive stakeholders in similar contexts.',
    requiredEvidence: 'Multiple matching signals across differing projects/regions; secondary documentation (e.g. sample call sheets or anonymized contract clauses).',
    analyticalBoundary: 'Demonstrates recurrence within a cohort, but does not yet establish systemic causation across the industry.',
    color: '#9B8CFF'
  },
  {
    level: 3,
    id: 'VALIDATED',
    name: 'Validated Pattern',
    badgeClass: 'badge-evidence-validated',
    definition: 'A recurring phenomenon verified across a statistically sound, representative sample within a defined sector and timeframe.',
    requiredEvidence: 'Representative survey sampling; cross-verified industry metrics; counterevidence documented and addressed.',
    analyticalBoundary: 'Defines the exact scope and scale of the condition; clearly differentiates high-risk sectors from unaffected sectors.',
    color: '#55E6D0'
  },
  {
    level: 4,
    id: 'HYPOTHESIZED',
    name: 'Supported Causal Explanation',
    badgeClass: 'badge-evidence-tested',
    definition: 'A rigorous structural explanation of WHY the problem occurs, detailing the underlying economic, legal, or procedural mechanisms.',
    requiredEvidence: 'Economic incentive modeling; legal workflow audits; stakeholder interview triangulation confirming the mechanism.',
    analyticalBoundary: 'Distinguishes symptoms from root causes; acknowledges competing explanations and residual uncertainties.',
    color: '#F4BD67'
  },
  {
    level: 5,
    id: 'TESTED',
    name: 'Demonstrated Intervention',
    badgeClass: 'badge-evidence-tested',
    definition: 'A real-world intervention piloted against a clear baseline, with quantitatively and qualitatively measured improvements.',
    requiredEvidence: 'Baseline measurement, controlled comparison group or pre/post metrics, documented limitations, and post-pilot audit.',
    analyticalBoundary: 'Proves efficacy within the specific pilot conditions; highlights boundary conditions required for replication elsewhere.',
    color: '#34D399'
  }
];

export const OPERATING_STAGES: OperatingStage[] = [
  {
    step: 1,
    id: 'listen',
    name: 'LISTEN',
    tagline: 'Capture stakeholder experiences, needs, and failures',
    description: 'Systematically gathering lived experiences from workers, technicians, creators, business owners, and audiences across India in multiple regional languages without friction.',
    inputs: ['Worker testimonies', 'Contract dispute narratives', 'Anonymous project post-mortems', 'Guild complaints', 'Academic research'],
    activities: ['Multi-channel intake (voice/text)', 'Multilingual transcription', 'Privacy de-identification', 'Initial entity classification'],
    outputs: ['Raw contextualized problem signals', 'Linguistic context metadata', 'Intake confidence scores'],
    participants: ['Freelancers', 'Crew members', 'Boutique owners', 'Actors', 'Technicians']
  },
  {
    step: 2,
    id: 'structure',
    name: 'STRUCTURE',
    tagline: 'Turn unstructured accounts into organized signals',
    description: 'Transforming qualitative, narrative testimonies into structured, standardized problem records while strictly preserving original meaning, context, and nuance.',
    inputs: ['De-identified problem narratives', 'Timeline references', 'Role and sector identifiers'],
    activities: ['Ontology mapping', 'Impact taxonomy assignment', 'Dependency parsing', 'Standardized schema encoding'],
    outputs: ['Structured Problem Records', 'Normalized entity relations', 'Severity indices'],
    participants: ['Data Ontologists', 'Industry Domain Analysts', 'AI Classification Engines']
  },
  {
    step: 3,
    id: 'validate',
    name: 'VALIDATE',
    tagline: 'Examine evidence, corroboration, and counterevidence',
    description: 'Scrutinizing signals for credibility, checking for independent corroboration, identifying sample limitations, and deliberately investigating counterevidence.',
    inputs: ['Structured problem records', 'Historical project archives', 'Trade data benchmarks'],
    activities: ['Cross-source corroboration check', 'Counterevidence discovery', 'Representativeness audits', 'Evidentiary status grading'],
    outputs: ['Evidence Dossiers (Levels 1 to 3)', 'Corroboration scores', 'Documented uncertainties'],
    participants: ['Evidence Review Board', 'Guild Representatives', 'Legal & Financial Auditors']
  },
  {
    step: 4,
    id: 'connect',
    name: 'CONNECT',
    tagline: 'Link related problems, stakeholders, and capabilities',
    description: 'Placing validated problems onto the ecosystem graph, linking them with upstream causes, affected downstream stakeholders, and dormant solver capabilities.',
    inputs: ['Validated problem signals', 'Stakeholder capability registry', 'Ecosystem supply chain graph'],
    activities: ['Graph relationship traversal', 'Bottleneck heatmapping', 'Cross-sector capability matching', 'Hidden dependency discovery'],
    outputs: ['Multidimensional Ecosystem Subgraphs', 'Capability-to-problem matrices', 'Coalition opportunity briefs'],
    participants: ['Graph Architects', 'Ecosystem Partners', 'Tech Providers', 'Institutional Guilds']
  },
  {
    step: 5,
    id: 'prioritize',
    name: 'PRIORITIZE',
    tagline: 'Identify where action creates highest systemic value',
    description: 'Evaluating candidate problems based on human impact, severity, feasibility, evidence quality, equity, and leverage to prevent wasted pilot efforts.',
    inputs: ['Ecosystem subgraphs', 'Problem dossiers', 'Resource availability assessments'],
    activities: ['Leverage point scoring', 'Unintended consequence stress-testing', 'Feasibility evaluation', 'Stakeholder willingness ranking'],
    outputs: ['Prioritized Intervention Pipeline', 'Risk assessments', 'Recommended pilot candidates'],
    participants: ['Steering Committee', 'Industry Leaders', 'Worker Advocates', 'Investors']
  },
  {
    step: 6,
    id: 'activate',
    name: 'ACTIVATE',
    tagline: 'Assemble the right people around a defined intervention',
    description: 'Bringing together an aligned coalition of practitioners, businesses, tech enablers, and institutions to execute a tightly bounded, practical pilot project.',
    inputs: ['Prioritized intervention brief', 'Target pilot cohort', 'SOP templates'],
    activities: ['Coalition charter signing', 'Baseline metric recording', 'Escrow / protocol deployment', 'Execution support'],
    outputs: ['Active Pilot Initiatives', 'Operational SOPs', 'Audited baseline benchmark datasets'],
    participants: ['Pilot Studios', 'Vendors', 'Crew Teams', 'Tech Solution Providers']
  },
  {
    step: 7,
    id: 'measure',
    name: 'MEASURE',
    tagline: 'Assess what changed against an audited baseline',
    description: 'Tracking intervention outcomes over time with rigorous quantitative telemetry and qualitative human feedback, comparing strictly against baseline metrics.',
    inputs: ['Pilot performance telemetry', 'Participant survey check-ins', 'Project milestone records'],
    activities: ['Comparative metric analysis', 'Deviation tracking', 'Blind qualitative interviews', 'Counterfactual validation'],
    outputs: ['Pilot Impact Scorecards', 'Deviation & limitation logs', 'Validated intervention outcomes'],
    participants: ['Independent Measurement Evaluators', 'Pilot Participants', 'Data Analysts']
  },
  {
    step: 8,
    id: 'learn',
    name: 'LEARN',
    tagline: 'Preserve verified outcomes, failures, and reusable lessons',
    description: 'Synthesizing learnings into open-access ecosystem playbooks, recording failures without blame, and feeding new insights directly back into the Listening Engine.',
    inputs: ['Impact scorecards', 'Failure post-mortems', 'Replication evaluations'],
    activities: ['Knowledge synthesis', 'Playbook publication', 'Transferability modeling', 'Loop closure to Step 1'],
    outputs: ['Published Ecosystem Playbooks', 'Intervention Registry entries', 'Continuous feedback loop signals'],
    participants: ['All Ecosystem Stakeholders', 'Researchers', 'Policy Makers', 'Future Cohorts']
  }
];

export const FUNDAMENTAL_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-delayed-payments',
    title: 'Case A: The 120-Day Delayed Crew Payment',
    category: 'Production Operations & Cash Flow',
    reportedSymptom: 'A freelance camera assistant and grip team report not being paid for 120 days after wrapping an episodic streaming series, threatening their livelihood.',
    verificationNeeded: 'Check if delay is isolated to this production or widespread across the line producer, verify contract payment milestones, and confirm invoice delivery confirmation.',
    rootCauseHypotheses: [
      'The production house is waiting on milestone release approval from the OTT network due to unapproved deliverables.',
      'Informal invoicing lacking standardized purchase order (PO) tracking caused accounting hold-ups.',
      'The executive producer leveraged crew payables as float to finance development on their next independent feature film.'
    ],
    proposedIntervention: 'Implement a milestone-linked digital escrow workflow with standardized milestone sign-offs, releasing technician fees automatically upon technical wrap verification.',
    measuredOutcome: 'Average payment settlement timeline dropped from 118 days to 11 days on pilot productions; 0% payment defaults recorded across 300 crew members.',
    evidenceRequired: 'Time-stamped invoice submission logs, network sign-off timestamps, anonymized banking transaction dates, and post-pilot participant audits.'
  },
  {
    id: 'case-talent-paradox',
    title: 'Case B: The Underemployed Artisan vs. The Talent Shortage Paradox',
    category: 'Workforce & Talent Verification',
    reportedSymptom: 'Major VFX studios in Mumbai report a catastrophic shortage of senior lighting artists, while veteran regional 3D artists in Kerala and Kolkata report severe underemployment.',
    verificationNeeded: 'Analyze portfolio skill compatibility against modern Unreal Engine / Maya USD pipelines; verify geographic mobility constraints and wage expectations.',
    rootCauseHypotheses: [
      'Recruitment teams rely solely on informal WhatsApp referral rings centered in Mumbai, completely missing regional talent pools.',
      'Regional artists have world-class artistic sensibility but lack exposure to modern studio pipeline asset management standards (USD/ShotGrid).',
      'Absence of a trusted, verified credentialing registry forces studios to hire only through trusted personal networks.'
    ],
    proposedIntervention: 'Create a standardized, open pipeline credentialing sandbox allowing regional artists to prove competence on real production assets, paired with remote studio contracts.',
    measuredOutcome: '72% of certified regional artists secured direct studio remote engagements within 60 days; studios reduced hiring lead times by 40%.',
    evidenceRequired: 'Standardized skill benchmark test scores, hiring conversion rates, wage parity verification, and 6-month retention metrics.'
  },
  {
    id: 'case-regional-film-bottleneck',
    title: 'Case C: The Critically Acclaimed Regional Film That Couldn\'t Find Theatres',
    category: 'Distribution & Audience Discovery',
    reportedSymptom: 'An award-winning Assamese indie feature celebrated at international film festivals struggles to secure more than 3 morning showtimes in Guwahati and zero shows in metros.',
    verificationNeeded: 'Assess exhibitor demand data, determine Virtual Print Fee (VPF) cost barriers relative to box office potential, and check digital cinema delivery compliance.',
    rootCauseHypotheses: [
      'High fixed theatrical delivery costs (VPF, local censor certification, poster printing) exceed the indie producer\'s total remaining budget.',
      'Multiplex algorithms reserve 85%+ of screens for pan-Indian franchise tentpoles regardless of localized cultural affinity.',
      'Lack of coordinated diaspora and micro-community pre-booking data to prove audience demand to theatre booking managers.'
    ],
    proposedIntervention: 'Deploy a community pre-commitment demand-pooling system that guarantees exhibitor seat thresholds before showtime locking, combined with subsidized flexible VPF tiers.',
    measuredOutcome: 'Showtime allocation increased by 400% across 14 cities; average theater occupancy reached 81% during evening slots; distributor broke even in week two.',
    evidenceRequired: 'Pre-sale reservation receipts, actual ticket redemption scans, multiplex occupancy audit logs, and exhibitor net share statements.'
  }
];

export const SAMPLE_PROBLEM_RECORD: ProblemSignalRecord = {
  signalId: 'SIG-2026-IND-0842',
  stakeholderCategory: 'Production & Technical Workforce (VFX / Post)',
  sectorContext: 'Animation & VFX / Film & Cinema',
  regionLanguage: 'South India Hub (Hyderabad / Chennai) / Telugu & Tamil',
  reportedAccount: 'Artists across 3 subcontracted post facilities reported continuous 28-hour shift cycles during final week before theatrical lock, with zero overtime remuneration and sudden contract termination upon delivery.',
  problemDomain: 'Unregulated Post-Production Crunch & Fixed-Bid Margin Compression',
  affectedParties: 'Junior & mid-level compositors, matchmove artists, roto teams (~140 personnel)',
  frequencyEstimate: 'Recurring on 8 out of 10 tentpole release dates within current calendar year',
  impactLevel: 'Critical — Physical exhaustion, medical emergency incidents, high churn leaving the profession',
  evidenceState: 'VALIDATED',
  supportingEvidence: 'Corroborated by 38 independent anonymous timesheets, unredacted facility WhatsApp group directives, and matching delivery timestamps from distributor lock records.',
  counterEvidence: 'Two facility managers noted that producers paid a lump-sum "emergency completion bonus" to studios, though evidence shows this was absorbed by studio leadership and not disbursed to artists.',
  rootCauseHypothesis: 'Fixed-bid vendor agreements coupled with unlimited creative revisions by directors without financial penalties, forcing vendors to extract unpaid artist overtime to prevent contract breach.',
  confidenceScore: '92% (High Corroboration)',
  consentClassification: 'Level 4 — Full Anonymous Research Publication Permitted',
  investigationStatus: 'Prioritized for Action'
};

export const TRUST_PRINCIPLES = [
  {
    title: 'Consent-Based Data Collection',
    description: 'Every byte of qualitative or quantitative data is collected with explicit, granular, informed consent. Contributors choose how their narrative is used.'
  },
  {
    title: 'Zero Re-Identification Risk',
    description: 'Rigorous differential privacy, entity obfuscation, and linguistic neutralization prevent any contributor from being identified by powerful employers.'
  },
  {
    title: 'Explicit Communication of Uncertainty',
    description: 'We never pretend a hypothesis is a fact. Every finding displays clear evidentiary confidence, sample boundaries, and known limitations.'
  },
  {
    title: 'Separation of Fact, Hypothesis & Allegation',
    description: 'Reported signals, corroborated patterns, structural hypotheses, and proven interventions are kept strictly distinct in visual labels and schemas.'
  },
  {
    title: 'No Commercialization of Vulnerability',
    description: 'SolutionSynq will never sell identifiable worker complaints, commercial blacklist data, or proprietary creator vulnerability data to third parties.'
  },
  {
    title: 'Independent Human Review Protocol',
    description: 'AI assists in translation, clustering, and syntax analysis, but every consequential, sensitive, or high-risk finding requires human expert review.'
  },
  {
    title: 'Fair Handling of Contested Claims',
    description: 'When an operational claim is disputed by an affected organization, the counterevidence and opposing perspective are rigorously documented.'
  },
  {
    title: 'Right to Correction & Withdrawal',
    description: 'Any contributor can amend, correct, or unconditionally withdraw their submitted testimony at any point prior to final aggregated anonymization.'
  },
  {
    title: 'Audited Data Minimization & Retention Limits',
    description: 'We collect only what is necessary to understand systemic problems. Unnecessary raw identifiers and temporary media are purged automatically.'
  },
  {
    title: 'Pan-Indian Linguistic & Regional Equity',
    description: 'No language, region, or craft guild is marginalized. Vernacular accounts carry equal analytical weight to metropolitan corporate data.'
  },
  {
    title: 'Decoupling Payer from Contributor',
    description: 'The organization funding research or commercial solutions cannot dictate findings, silence negative signals, or access protected contributor data.'
  },
  {
    title: 'Open Ecosystem Learning',
    description: 'Systemic insights, validated failure post-mortems, and intervention playbooks are shared openly to enrich the entire Indian creative ecosystem.'
  }
];
