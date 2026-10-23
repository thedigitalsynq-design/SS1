import { StakeholderGroup } from '../types';

export const STAKEHOLDER_GROUPS: StakeholderGroup[] = [
  {
    id: 'creators',
    name: 'Creators & Intellectual Property Owners',
    category: 'creators',
    roles: [
      'Screenwriters & Dialogue Writers',
      'Directors & Filmmakers',
      'Producers (Independent & Studio)',
      'Actors & Performers',
      'Singers & Playback Vocalists',
      'Composers & Lyricists',
      'Dancers & Choreographers',
      'Independent Digital Creators & YouTubers',
      'Podcasters & Audio Storytellers',
      'Game Developers & Authors'
    ],
    contributions: [
      'Originating intellectual property, core screenplays, musical melodies, and cultural narratives.',
      'Front-facing emotional connection with domestic and international audiences.',
      'Cultural experimentation and aesthetic definition of Indian identity across languages.'
    ],
    investigativeProblemAreas: [
      'Inconsistent contractual attribution of residual royalties for secondary digital broadcasts.',
      'Uncertain copyright reversion timelines for screenwriters following unproduced option periods.',
      'Extreme cash-flow volatility between multi-year development cycles.',
      'Lack of legal literacy to negotiate fair terms with aggressive platform contracts.'
    ],
    capabilitiesOffered: [
      'Creative vision, story development, and narrative craft.',
      'High-affinity cultural voice and audience credibility.',
      'Original characters, worlds, and scalable intellectual properties.'
    ],
    solutionSynqBenefits: [
      'Transparent visibility into industry-wide baseline contracting standards without breaking NDA trust.',
      'Systemic evidence demonstrating the commercial value of well-funded development phases.',
      'Connection to verified legal and institutional support systems.'
    ],
    relatedStakeholders: ['Production Houses', 'OTT Commissioning Editors', 'IP Lawyers', 'Guilds & Unions', 'Audiences']
  },
  {
    id: 'workforce',
    name: 'Production & Technical Workforce',
    category: 'workforce',
    roles: [
      'Cinematographers & Focus Pullers',
      'Lighting Gaffers & Best Boys',
      'Sound Recordists & Boom Operators',
      'Offline/Online Film Editors',
      'Colorists & DI Conformists',
      'VFX Compositors & 3D Artists',
      'Makeup Artists & Prosthetics Designers',
      'Costume Designers & Wardrobe Teams',
      'Art Directors & Set Construction Labor',
      'Line Producers, Unit Production Managers & PAs',
      'Dubbing Artists, Foley Artists & Sound Mixers'
    ],
    contributions: [
      'The manual and technological craft that executes raw ideas into polished cinematic reality.',
      'Executing on-set safety, physical rigging, continuous 14-to-18 hour operational shifts.',
      'Managing specialized technical hardware worth millions of dollars.'
    ],
    investigativeProblemAreas: [
      'Unregulated shift lengths without mandatory turnaround rest periods between shoot days.',
      'Payment delays exceeding 90 to 180 days past project delivery.',
      'Lack of health, disability, and equipment insurance coverage on hazardous locations.',
      'Vulnerability to informal verbal agreements without written terms of engagement.'
    ],
    capabilitiesOffered: [
      'Deep domain craft in visual imaging, sound engineering, physical art direction, and post workflows.',
      'High adaptability to severe real-world constraints and rapid troubleshooting on set.',
      'Knowledge of operational bottlenecks that production executives rarely witness.'
    ],
    solutionSynqBenefits: [
      'Aggregated, anonymous evidence documenting on-set labor conditions and payment defaults.',
      'Standardized workflow handover protocols to reduce avoidable last-minute overtime panic.',
      'Recognition and credential verification across regional boundaries.'
    ],
    relatedStakeholders: ['Line Producers', 'Equipment Rental Companies', 'Guilds', 'Producers', 'Insurance Underwriters']
  },
  {
    id: 'businesses',
    name: 'Entertainment Businesses & Studios',
    category: 'businesses',
    roles: [
      'Major Film Studios & Production Houses',
      'Independent Production Boutiques',
      'Music Record Labels & Publishing Houses',
      'Talent Management & Casting Agencies',
      'VFX & Virtual Production Facilities',
      'OTT Streaming Networks & Broadcasters',
      'Theatrical Film Distributors & Cinema Multiplex Chains',
      'Event Production Houses & Venue Operators',
      'Equipment Rental Houses & Grip Vendors'
    ],
    contributions: [
      'Capital mobilization, infrastructure maintenance, legal liability assumption, and market distribution.',
      'Employment generation for thousands of direct and indirect industry workers.',
      'Physical infrastructure: studios, camera packages, sound stages, and cinema screens.'
    ],
    investigativeProblemAreas: [
      'Severe budget overruns driven by unstandardized pre-production and on-set scope creep.',
      'High cost of capital and absence of institutional debt underwriting.',
      'Opaque performance metrics and audience churn in digital streaming economics.',
      'Vendor coordination friction across fragmented sub-contractor networks.'
    ],
    capabilitiesOffered: [
      'Scale execution, enterprise project management, and global commercial distribution channels.',
      'Legal infrastructure and financial backing for multi-million dollar projects.',
      'Ecosystem employment and talent incubation.'
    ],
    solutionSynqBenefits: [
      'Empirical benchmarking on production efficiencies and root causes of cost blowouts.',
      'Systemic intelligence to de-risk vendor selection and workflow planning.',
      'Collective solutions for regulatory hurdles, local permits, and piracy reduction.'
    ],
    relatedStakeholders: ['Investors', 'Broadcasters', 'Exhibitors', 'Regulators', 'Production Crews']
  },
  {
    id: 'commercial',
    name: 'Commercial & Financial Stakeholders',
    category: 'commercial',
    roles: [
      'National & Regional Advertisers',
      'Brand Partnerships & Media Buying Agencies',
      'Media Investment Funds & Private Equity',
      'Venture Debt Lenders & NBFCs',
      'Completion Bond Underwriters & Risk Insurers',
      'Merchandising Brands & D2C Licensing Partners',
      'International Sales Agents & Overseas Buyers'
    ],
    contributions: [
      'Fueling industry liquidity through sponsorships, debt financing, and advertising expenditure.',
      'De-risking catastrophic production losses through insurance and completion bonds.',
      'Expanding monetization beyond the box office into global syndication and consumer products.'
    ],
    investigativeProblemAreas: [
      'Lack of audited, dependable data on project completion track records and real viewership.',
      'High risk premium imposed due to historical precedent of creative delays and budget indiscipline.',
      'Difficulty in enforcing rights recovery and recoupment waterfall priority in informal markets.'
    ],
    capabilitiesOffered: [
      'Non-creative financial capital, institutional governance models, and audit discipline.',
      'Access to international co-production treaties and global distribution networks.',
      'Brand equity and commercial sponsor integration.'
    ],
    solutionSynqBenefits: [
      'Verified intelligence on operational risk factors before deploying capital.',
      'Transparent data frameworks to enable project completion bonding in Indian productions.',
      'Clarity on audience demographics, reducing wasted advertising spend.'
    ],
    relatedStakeholders: ['Studio CFOs', 'Lawyers', 'Producers', 'Brand Custodians']
  },
  {
    id: 'institutions',
    name: 'Enabling Institutions & Researchers',
    category: 'institutions',
    roles: [
      'Film Institutes & Media Academies (FTII, SRFTI, etc.)',
      'Industry Guilds & Craft Associations (FWICE, SWA, AICWA, etc.)',
      'State Film Facilitation Offices & Cultural Ministries',
      'Legal Think Tanks & Intellectual Property Societies (IPRS, ISRA)',
      'Academic Researchers & Cultural Sociologists',
      'Trade Journalists & Independent Industry Analysts'
    ],
    contributions: [
      'Preserving industry heritage, training next-generation talent, and advocating for labor welfare.',
      'Formulating public cultural policy, single-window shooting incentives, and legal precedents.',
      'Rigorous independent scrutiny, historical documentation, and ethical guardrails.'
    ],
    investigativeProblemAreas: [
      'Severe disconnection between curriculum taught in colleges and actual digital workflows used on sets.',
      'Fragmented union jurisdictions leading to inter-association friction during interstate shoots.',
      'Absence of empirical data to inform government policymaking and tax incentive schemes.'
    ],
    capabilitiesOffered: [
      'Neutral platform for consensus building, conflict arbitration, and ethical standards.',
      'Statutory and legal authority to represent collective stakeholder interests.',
      'Curricular design, skill accreditation, and academic research depth.'
    ],
    solutionSynqBenefits: [
      'Empirical evidence base to replace anecdotal complaints with verified data for policy reform.',
      'Dynamic skills gap intelligence to update film school curricula in real-time.',
      'Cross-regional bridge between differing state-level guild rules and practices.'
    ],
    relatedStakeholders: ['Government Bodies', 'Students', 'Guild Members', 'Production Houses']
  },
  {
    id: 'audiences',
    name: 'Audiences & Cultural Communities',
    category: 'audiences',
    roles: [
      'Theatrical Cinema Goers (Single-Screen & Multiplex)',
      'Digital Streaming Subscribers & Free-AVOD Viewers',
      'Independent Fan Clubs & Grassroots Welfare Associations',
      'Regional & Vernacular Linguistic Communities',
      'Diaspora Populations Seeking Cultural Connection',
      'Accessibility Communities (Deaf, Hard of Hearing, Visually Impaired)'
    ],
    contributions: [
      'The ultimate arbiter of value and commercial viability: time, attention, subscription, and box office ticket spend.',
      'Spreading organic word-of-mouth, community cultural celebration, and fan art.',
      'Preserving community folk memory and linguistic heritage through media consumption.'
    ],
    investigativeProblemAreas: [
      'Exorbitant theatrical ticket and concession prices pricing middle-class families out of cinema halls.',
      'Pervasive lack of closed captions (CC) and audio descriptions (AD) across domestic releases.',
      'Algorithmic homogenization drowning out independent and minority language cultural cinema.'
    ],
    capabilitiesOffered: [
      'Passionate word-of-mouth amplification, direct engagement feedback, and cultural loyalty.',
      'Grassroots fan-organized community welfare initiatives in regional hubs.',
      'Direct patronage for independent crowdfunding and community screenings.'
    ],
    solutionSynqBenefits: [
      'Direct feedback channels into studio awareness regarding accessibility and pricing barriers.',
      'Visibility for overlooked regional and diaspora cultural demand.',
      'Protection against misleading marketing and predatory monetization practices.'
    ],
    relatedStakeholders: ['Exhibitors', 'OTT Platforms', 'Creators', 'Subtitling Studios']
  }
];
