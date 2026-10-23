export type EvidenceLevel = 'REPORTED' | 'OBSERVED' | 'INFERRED' | 'HYPOTHESIZED' | 'VALIDATED' | 'TESTED';

export interface SectorItem {
  id: string;
  name: string;
  category: string;
  description: string;
  stakeholders: string[];
  sampleProblems: string[];
  interconnectedSectors: string[];
  regionalSignificance?: string;
}

export interface StakeholderGroup {
  id: string;
  name: string;
  category: 'creators' | 'workforce' | 'businesses' | 'commercial' | 'institutions' | 'audiences';
  roles: string[];
  contributions: string[];
  investigativeProblemAreas: string[];
  capabilitiesOffered: string[];
  solutionSynqBenefits: string[];
  relatedStakeholders: string[];
}

export interface OperatingStage {
  step: number;
  id: string;
  name: string;
  tagline: string;
  description: string;
  inputs: string[];
  activities: string[];
  outputs: string[];
  participants: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  reportedSymptom: string;
  verificationNeeded: string;
  rootCauseHypotheses: string[];
  proposedIntervention: string;
  measuredOutcome: string;
  evidenceRequired: string;
}

export interface OpportunityDomain {
  id: string;
  title: string;
  tagline: string;
  potentialProblem: string;
  affectedStakeholders: string[];
  structuralGap: string;
  possibleIntervention: string;
  evidenceRequired: string;
  targetOutcome: string;
  risksAndAssumptions: string;
}

export interface IntelligenceEngine {
  number: number;
  id: string;
  name: string;
  role: string;
  description: string;
  inputs: string[];
  processing: string[];
  outputs: string[];
  trustGuardrails: string[];
}

export interface ProblemSignalRecord {
  signalId: string;
  stakeholderCategory: string;
  sectorContext: string;
  regionLanguage: string;
  reportedAccount: string;
  problemDomain: string;
  affectedParties: string;
  frequencyEstimate: string;
  impactLevel: string;
  evidenceState: EvidenceLevel;
  supportingEvidence: string;
  counterEvidence: string;
  rootCauseHypothesis: string;
  confidenceScore: string;
  consentClassification: string;
  investigationStatus: 'Triage' | 'Under Investigation' | 'Corroboration' | 'Prioritized for Action';
}
