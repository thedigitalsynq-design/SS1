import { OpportunityDomain } from '../types';

export const OPPORTUNITY_DOMAINS: OpportunityDomain[] = [
  {
    id: 'prod-ops',
    title: 'Production & Operational Coordination',
    tagline: 'Standardizing workflows, milestone escrow, and logistical predictability',
    potentialProblem: 'On-set chaos, delayed approvals, sudden schedule blowouts, and 90-120 day payment hold-ups cascade down to freelancers and small vendors.',
    affectedStakeholders: ['Line Producers', 'Freelance Technicians', 'Equipment Rental Houses', 'Studio CFOs'],
    structuralGap: 'Absence of standardized digital milestone sign-off protocols and enforceable escrow models for project delivery.',
    possibleIntervention: 'Deployment of milestone-backed smart payment rails and verified vendor handover digital checklists.',
    evidenceRequired: 'Time-stamped approval audit logs, vendor cash-flow cycle telemetry, and post-production delay variance reports.',
    targetOutcome: 'Reduction in technician payment settlement from 90+ days to under 14 days, with 30% reduction in unbudgeted schedule extensions.',
    risksAndAssumptions: 'Assumes studio willingness to lock milestone criteria prior to principal photography wrap.'
  },
  {
    id: 'talent-work',
    title: 'Talent Discovery & Verified Professional Credits',
    tagline: 'Replacing informal gatekeeping with transparent capability verification',
    potentialProblem: 'Casting and crew hiring remain locked within closed nepotistic or metropolitan WhatsApp circles, while regional artisans remain undiscovered.',
    affectedStakeholders: ['Regional Actors', 'Specialized Crew', 'Casting Directors', 'Showrunners'],
    structuralGap: 'No unified, verified digital credit registry connecting regional craftspeople with national production teams.',
    possibleIntervention: 'An open, peer-verified talent and credit credentialing registry with verifiable project metadata.',
    evidenceRequired: 'Independent verification of on-screen credits, union membership cross-checks, and portfolio skill attestations.',
    targetOutcome: '45% increase in verified regional talent cast or hired on mainstream national streaming and cinematic projects.',
    risksAndAssumptions: 'Requires careful verification protocols to prevent fake credit claims and protect sensitive contact info.'
  },
  {
    id: 'rights-revenue',
    title: 'Rights, Licensing & Royalty Transparency',
    tagline: 'Automating multi-platform royalty attribution and clear chain-of-title',
    potentialProblem: 'Composers, lyricists, authors, and screenwriters lose millions annually in uncollected secondary digital royalties and obscure adaptation rights.',
    affectedStakeholders: ['Music Composers', 'Lyricists', 'Screenwriters', 'Publishers', 'Digital Platforms'],
    structuralGap: 'Fragmented broadcast cue-sheet standards and archaic contract clauses lacking clarity on digital/AI rights.',
    possibleIntervention: 'Automated audio-visual fingerprinting integrated with open royalty reconciliation ledgers for collecting societies.',
    evidenceRequired: 'Matching broadcast airplay logs against society distribution statements, plus verified contract chain-of-title archives.',
    targetOutcome: 'Reduction in royalty reconciliation lag from 18 months to real-time monthly disbursement.',
    risksAndAssumptions: 'Dependent on regulatory compliance and transparency from legacy broadcasters and major record labels.'
  },
  {
    id: 'distribution-discovery',
    title: 'Distribution & Regional Content Discovery',
    tagline: 'Unlocking community demand-pooling for indie and regional cinematic releases',
    potentialProblem: 'Exceptional non-metro films cannot secure theatrical screen allocations against corporate tentpoles and struggle with high delivery fees.',
    affectedStakeholders: ['Independent Directors', 'Regional Producers', 'Single-Screen Theatres', 'Cultured Audiences'],
    structuralGap: 'Lack of verified pre-commitment audience demand data to de-risk theatrical showtime scheduling for exhibitors.',
    possibleIntervention: 'Decentralized pre-commitment ticket pooling allowing audiences to unlock guaranteed theatrical screenings.',
    evidenceRequired: 'Pre-sale confirmation receipts, box office collection audit reports, and exhibitor net share statements.',
    targetOutcome: 'Over 200+ micro-budget and regional titles securing profitable theatrical runs with zero empty-auditorium risk.',
    risksAndAssumptions: 'Requires exhibitor cooperation to allocate flexible digital projection slots.'
  },
  {
    id: 'creator-economy',
    title: 'Creator Economy & Fair Brand Monetization',
    tagline: 'Eliminating multi-tier agency markups and cash-flow unpredictability for creators',
    potentialProblem: 'Vernacular creators suffer from 120-day agency payment terms, arbitrary algorithmic throttling, and lack of institutional credit.',
    affectedStakeholders: ['Digital Video Creators', 'Independent Vloggers', 'Brand Marketing Teams', 'Fintech Lenders'],
    structuralGap: 'Absence of standardized brand campaign contract terms and programmatic invoice factoring for digital creators.',
    possibleIntervention: 'Creator-first campaign escrow and standardized verified audience engagement analytics.',
    evidenceRequired: 'Audited platform API performance metrics, agency payment timestamp records, and creator balance sheet audits.',
    targetOutcome: 'Guaranteed 48-hour campaign payment release upon verified deliverable approval.',
    risksAndAssumptions: 'Assumes brands are incentivized to bypass opaque intermediate middlemen.'
  },
  {
    id: 'workforce-education',
    title: 'Workforce Readiness & Dynamic Skills Intelligence',
    tagline: 'Aligning educational curricula with real-time digital production workflows',
    potentialProblem: 'Film and media graduates enter the industry with obsolete knowledge, while studios face acute deficits in virtual production and pipeline TDs.',
    affectedStakeholders: ['Media Students', 'Film Academies', 'VFX Studios', 'Industry Guilds'],
    structuralGap: 'No systematic feedback loop reporting industry technological shifts back to university curriculum committees.',
    possibleIntervention: 'Dynamic skills demand radar providing quarterly industry software and technique requirement data to academic partners.',
    evidenceRequired: 'Hiring manager skill gap surveys, post-graduation employment placement audits, and syllabus review benchmarks.',
    targetOutcome: 'Double the first-year placement rate for certified technical media graduates in high-wage studio roles.',
    risksAndAssumptions: 'Requires educational institutions to possess agility in updating semester curricula.'
  },
  {
    id: 'live-entertainment',
    title: 'Live Entertainment & Civic Permission Coordination',
    tagline: 'Streamlining multi-agency event clearances and safety compliance',
    potentialProblem: 'Concert promoters and theatre troupes navigate up to 15 disparate civic departments, resulting in extortion, delays, or abrupt cancellations.',
    affectedStakeholders: ['Event Organizers', 'Musicians', 'Civic Authorities', 'Audience Attendees'],
    structuralGap: 'Absence of an integrated single-window clearance protocol and unified venue compliance standards.',
    possibleIntervention: 'A transparent digital event compliance framework with standardized safety checklists and municipal SLAs.',
    evidenceRequired: 'Municipal permit turnaround timestamps, documented safety audit inspections, and event cancellation logs.',
    targetOutcome: 'Permit approval time reduced from 45 days to 7 business days, saving crores in idle production overheads.',
    risksAndAssumptions: 'Requires municipal and state administrative willingness to adopt digital transparent workflows.'
  },
  {
    id: 'audience-community',
    title: 'Audience Inclusion & Universal Accessibility Standards',
    tagline: 'Embedding closed captions, audio descriptions, and affordable access by default',
    potentialProblem: 'Millions of deaf, hard-of-hearing, and visually impaired citizens are excluded from domestic cinema and OTT releases.',
    affectedStakeholders: ['Accessibility Communities', 'Subtitling Studios', 'OTT Platforms', 'Exhibitors'],
    structuralGap: 'Incentive misalignment where accessibility deliverables are treated as low-priority afterthought costs.',
    possibleIntervention: 'Mandatory standard delivery package requirements with automated AI-assisted captioning plus human verification.',
    evidenceRequired: 'Delivery audit logs across theatrical DCPs and OTT streaming packages, alongside community accessibility surveys.',
    targetOutcome: '100% of major Indian theatrical releases and top OTT titles equipped with compliant CC and Audio Description.',
    risksAndAssumptions: 'Depends on enforcement of national accessibility guidelines and guild adoption.'
  },
  {
    id: 'financing-investment',
    title: 'Entertainment Financing & Completion Risk Governance',
    tagline: 'Enabling institutional debt underwriting through transparent project tracking',
    potentialProblem: 'Film financing relies heavily on usurious informal private lenders (24-36% interest) due to lack of corporate bank underwriting.',
    affectedStakeholders: ['Independent Producers', 'Commercial Banks', 'Insurance Firms', 'Family Offices'],
    structuralGap: 'Absence of dependable, standardized completion bonding and independent milestone auditing in Indian filmmaking.',
    possibleIntervention: 'Standardized completion guarantee governance frameworks and audited pre-production health diagnostics.',
    evidenceRequired: 'Historical budget variance databases, audited production milestone compliance reports, and bond execution data.',
    targetOutcome: 'Lower cost of project capital from 30%+ informal interest to 11-14% institutional banking debt.',
    risksAndAssumptions: 'Producers must accept rigorous external project auditing and budget discipline.'
  },
  {
    id: 'tech-infrastructure',
    title: 'Technology & Ethical AI Infrastructure',
    tagline: 'Building sovereign Indian linguistic models and ethical creative safeguards',
    potentialProblem: 'Foreign AI tools lack nuance for 22 Indian languages, while artists fear unconsented voice and likeness theft without remuneration.',
    affectedStakeholders: ['Voice Artists', 'Animators', 'Indian AI Labs', 'Copyright Regulators'],
    structuralGap: 'Lack of localized open data standards and enforceable ethical consent registries for creative likeness protection.',
    possibleIntervention: 'A sovereign Indian Creative AI Consortium defining ethical licensing, consent registries, and dialect benchmarks.',
    evidenceRequired: 'Cryptographic consent verification signatures, linguistic dialect accuracy scores, and artist licensing receipts.',
    targetOutcome: 'Establishment of an industry-wide ethical AI protocol compensating artists for training and synthetic voice utilization.',
    risksAndAssumptions: 'Requires cross-industry consensus between tech startups and traditional artist guilds.'
  }
];
