import React, { useState } from 'react';
import { EvidenceLadder } from '../components/EvidenceLadder';
import { INTELLIGENCE_ENGINES, SAMPLE_PROBLEM_RECORD, TRUST_PRINCIPLES } from '../data/intelligenceData';
import { 
  Layers, 
  Cpu, 
  ShieldCheck, 
  FileCode, 
  UserCheck, 
  Bot, 
  ArrowRight, 
  Sparkles,
  AlertTriangle,
  GitMerge,
  Network,
  Lock
} from 'lucide-react';

export const IntelligencePage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [selectedEngineIdx, setSelectedEngineIdx] = useState(0);

  const activeEngine = INTELLIGENCE_ENGINES[selectedEngineIdx];

  const SCHEMA_FIELDS = [
    { field: 'Signal ID', type: 'String (UUID v4 / Cryptographic Hash)', example: SAMPLE_PROBLEM_RECORD.signalId, desc: 'Unique identifier decoupling account from real-world submitter identity.' },
    { field: 'Stakeholder Category', type: 'Taxonomy Enum', example: SAMPLE_PROBLEM_RECORD.stakeholderCategory, desc: 'Classification within the 6 primary ecosystem groups.' },
    { field: 'Regional / Linguistic Context', type: 'String Array', example: SAMPLE_PROBLEM_RECORD.regionLanguage, desc: 'Preserves geographic, state-level, and cultural boundaries.' },
    { field: 'Original Account (De-identified)', type: 'Encrypted String', example: SAMPLE_PROBLEM_RECORD.reportedAccount, desc: 'Qualitative narrative stripped of private names, company brands, or identifying landmarks.' },
    { field: 'Problem Domain', type: 'Ontology Node', example: SAMPLE_PROBLEM_RECORD.problemDomain, desc: 'Mapped to standardized structural problem taxonomy.' },
    { field: 'Affected Parties & Scale', type: 'Quantified Range', example: SAMPLE_PROBLEM_RECORD.affectedParties, desc: 'Scope of workers, artists, or institutions impacted.' },
    { field: 'Evidentiary Status', type: 'Level 1 to 5 Enum', example: SAMPLE_PROBLEM_RECORD.evidenceState, desc: 'Pinned strictly to the 5-Tier Evidence Ladder.' },
    { field: 'Supporting Evidence', type: 'Dossier Reference', example: SAMPLE_PROBLEM_RECORD.supportingEvidence, desc: 'Corroborating timesheets, contract clauses, or programmatic broadcast logs.' },
    { field: 'Counterevidence Documented', type: 'Text / Nullable', example: SAMPLE_PROBLEM_RECORD.counterEvidence, desc: 'Documented opposing stakeholder explanations or conflicting audits.' },
    { field: 'Root-Cause Hypothesis', type: 'Causal Graph Node', example: SAMPLE_PROBLEM_RECORD.rootCauseHypothesis, desc: 'Distinguishes superficial symptom from systemic incentive failure.' },
    { field: 'Confidence & Limitations', type: 'Confidence Score (%)', example: SAMPLE_PROBLEM_RECORD.confidenceScore, desc: 'Statistical confidence score and sample skew limitations.' },
    { field: 'Consent & Permissions Tier', type: 'Consent Enum', example: SAMPLE_PROBLEM_RECORD.consentClassification, desc: 'Permissible usage bounds granted explicitly by contributor.' },
    { field: 'Investigation Status', type: 'Lifecycle State', example: SAMPLE_PROBLEM_RECORD.investigationStatus, desc: 'Current state: Triage → Corroboration → Action → Closed Loop.' }
  ];

  return (
    <div className="bg-[#090B10] text-[#F5F6FA] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Clean & Minimal */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#55E6D0] font-semibold block mb-3">
            Deep Technical Architecture
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#F5F6FA] leading-tight mb-4">
            From scattered signals to{' '}
            <span className="text-[#9AA3B5] font-normal">evidence-backed action.</span>
          </h1>

          <p className="text-base text-[#9AA3B5] leading-relaxed mb-6">
            SolutionSynq is architected around six specialized engines operating over shared data provenance, the 5-tier evidence ladder, and an uncompromising human review protocol.
          </p>

          <div className="p-3 rounded-lg bg-[#0E121B] border border-white/[0.06] text-xs text-[#F4BD67] font-mono">
            <strong>Model Disclosure:</strong> The architecture presented below represents the proposed SolutionSynq intelligence engine specifications.
          </div>
        </div>

        {/* SECTION 1: THE 6 CONNECTED ENGINES */}
        <div className="hardware-chassis mb-14">
          <div className="hardware-chassis-inner p-6 lg:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/[0.06] gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#55E6D0] tracking-widest block mb-1 font-semibold">
                  Processing Topology
                </span>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F5F6FA]">
                  The Six Connected Engines
                </h2>
                <p className="text-xs text-[#9AA3B5] font-mono mt-1">
                  Select an engine to examine inputs, analytical transformations, and safety guardrails.
                </p>
              </div>
            </div>

            {/* Selector Tabs - Tactile Hardware Switch */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
              {INTELLIGENCE_ENGINES.map((engine, idx) => {
                const isSelected = selectedEngineIdx === idx;
                return (
                  <button
                    key={engine.id}
                    onClick={() => setSelectedEngineIdx(idx)}
                    className={`p-3 rounded-xl border text-left transition-all duration-300 ease-spring ${
                      isSelected
                        ? 'bg-[#0E121B] border-[#55E6D0]/40 text-[#55E6D0] font-medium shadow-[0_0_16px_rgba(85,230,208,0.15)] -translate-y-0.5'
                        : 'bg-[#090B10] border-white/[0.06] hover:border-white/20 text-[#9AA3B5] hover:text-[#F5F6FA] hover:-translate-y-0.5'
                    }`}
                  >
                    <span className={`text-[10px] font-mono block ${isSelected ? 'text-[#55E6D0]' : 'opacity-60'}`}>0{engine.number}</span>
                    <span className="text-xs font-display font-semibold block line-clamp-1">{engine.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Engine Card */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#090B10] border border-white/[0.06]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
              <div>
                <span className="text-xs font-mono uppercase text-[#55E6D0] font-semibold block mb-1">
                  Engine 0{activeEngine.number} · {activeEngine.id}
                </span>
                <h3 className="font-display font-bold text-xl text-[#F5F6FA]">
                  {activeEngine.name}
                </h3>
                <p className="text-xs font-mono text-[#F4BD67] mt-0.5">
                  {activeEngine.role}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#9AA3B5] leading-relaxed my-4 max-w-4xl">
              {activeEngine.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6 border-t border-white/[0.06] mt-4">
              <div>
                <span className="text-xs font-mono uppercase text-[#55E6D0] font-semibold block mb-2">
                  System Inputs
                </span>
                <ul className="text-xs text-[#F5F6FA] space-y-1.5">
                  {activeEngine.inputs.map((inItem, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#55E6D0]">•</span>
                      <span>{inItem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-[#9B8CFF] font-semibold block mb-2">
                  Transformation Engine
                </span>
                <ul className="text-xs text-[#F5F6FA] space-y-1.5">
                  {activeEngine.processing.map((proc, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#9B8CFF]">•</span>
                      <span>{proc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-[#55E6D0] font-semibold block mb-2">
                  Derived Outputs
                </span>
                <ul className="text-xs text-[#F5F6FA] space-y-1.5">
                  {activeEngine.outputs.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#55E6D0]">•</span>
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-[#F4BD67] font-semibold block mb-2">
                  Trust Guardrails
                </span>
                <ul className="text-xs text-[#F5F6FA] space-y-1.5">
                  {activeEngine.trustGuardrails.map((g, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#F4BD67]">•</span>
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: THE 5-TIER EVIDENCE LADDER */}
        <div className="mb-14">
          <EvidenceLadder />
        </div>

        {/* SECTION 3: SHARED FOUNDATION PILLARS */}
        <div className="p-6 lg:p-8 rounded-xl bg-[#0E121B] border border-white/[0.06] mb-14">
          <span className="text-xs font-mono uppercase text-[#55E6D0] tracking-wider block mb-2 font-semibold">
            Foundational Governance Infrastructure
          </span>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F6FA] mb-4">
            Shared Pillars Supporting All Six Engines
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 text-center">
            {[
              'Data Provenance',
              'Granular Consent',
              'Evidence Standards',
              'Context & Metadata',
              'Privacy Safeguards',
              'Human Review',
              'Open Feedback Loops'
            ].map((pillar, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-[#090B10] border border-white/[0.06] text-xs font-mono text-[#F5F6FA]">
                {pillar}
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: AI CAPABILITIES VS HUMAN REVIEW MANDATE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
          <div className="p-6 lg:p-8 rounded-xl bg-[#0E121B] border border-white/[0.06]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center text-[#55E6D0]">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-[#F5F6FA]">
                  Where AI Assists
                </h3>
                <span className="text-xs font-mono text-[#55E6D0]">
                  Scalable Synthesis & Pattern Acceleration
                </span>
              </div>
            </div>

            <ul className="text-xs text-[#9AA3B5] space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-[#55E6D0] font-bold mt-0.5">01</span>
                <span><strong>Multilingual Translation:</strong> Ingesting spoken or written testimonies across 15+ Indian languages and normalizing into standard semantic structures.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#55E6D0] font-bold mt-0.5">02</span>
                <span><strong>Entity & Privacy Obfuscation:</strong> Automated scrubbing of individual names, production titles, and private locations to guarantee zero re-identification.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#55E6D0] font-bold mt-0.5">03</span>
                <span><strong>Similarity Detection:</strong> Clustering seemingly unrelated worker reports across different cities into shared structural problem archetypes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#55E6D0] font-bold mt-0.5">04</span>
                <span><strong>Counterfactual Modeling:</strong> Simulating how milestone escrow or standardized cue-sheets would alter cash flow across multi-tier vendors.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 lg:p-8 rounded-xl bg-[#0E121B] border border-white/[0.06]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center text-[#F4BD67]">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-[#F5F6FA]">
                  Why Human Review is Mandatory
                </h3>
                <span className="text-xs font-mono text-[#F4BD67]">
                  Context, Ethics & Consequential Decisions
                </span>
              </div>
            </div>

            <ul className="text-xs text-[#9AA3B5] space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-[#F4BD67] font-bold mt-0.5">01</span>
                <span><strong>Sensitive Allegation Review:</strong> Allegations of workplace harassment or legal fraud are never published automatically by algorithms; they require legal and guild oversight.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F4BD67] font-bold mt-0.5">02</span>
                <span><strong>Cultural Nuance Verification:</strong> AI frequently misinterprets informal regional idioms and colloquial trade agreements. Human domain analysts ensure fidelity.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F4BD67] font-bold mt-0.5">03</span>
                <span><strong>Counterevidence Stress Testing:</strong> When a systemic conclusion could impact a craft or business sector, a peer panel deliberately searches for contrary evidence.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F4BD67] font-bold mt-0.5">04</span>
                <span><strong>Pilot Intervention Governance:</strong> Coalition charters, baseline benchmarks, and financial escrow parameters are strictly finalized with human consensus.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 5: 12 CORE TRUST & GOVERNANCE PRINCIPLES */}
        <div className="rounded-xl border border-white/[0.06] bg-[#0E121B] p-6 lg:p-8 mb-14">
          <div className="mb-6">
            <span className="text-xs font-mono uppercase text-[#55E6D0] font-semibold block mb-1">
              Ethical Guardrails
            </span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F5F6FA] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#55E6D0]" />
              <span>12 Core Trust & Governance Principles</span>
            </h2>
            <p className="text-xs text-[#9AA3B5] mt-1">
              Ensuring SolutionSynq never commercializes contributor vulnerability or exposes sensitive information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {TRUST_PRINCIPLES.map((principle, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-[#090B10] border border-white/[0.06]">
                <span className="text-[10px] font-mono text-[#55E6D0] uppercase block mb-1">
                  Principle 0{idx + 1}
                </span>
                <h4 className="font-display font-semibold text-sm text-[#F5F6FA] mb-1">
                  {principle.title}
                </h4>
                <p className="text-xs text-[#9AA3B5] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 6: STRUCTURED PROBLEM RECORD SCHEMA */}
        <div className="hardware-chassis">
          <div className="hardware-chassis-inner p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/[0.06] gap-3">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#55E6D0] uppercase tracking-wider font-semibold">
                  <FileCode className="w-4 h-4" />
                  Problem Record Schema
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F5F6FA] mt-1">
                  Standardized Data Contract
                </h2>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-lg bg-[#090B10] text-[#55E6D0] border border-white/[0.08] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#55E6D0] animate-pulse" />
                Version 1.2 · JSON-LD / Typed Schema
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#090B10] text-[#9AA3B5] uppercase text-[10px] tracking-wider border-b border-white/[0.06]">
                  <tr>
                    <th className="py-2.5 px-3">Field Name</th>
                    <th className="py-2.5 px-3">Type / Format</th>
                    <th className="py-2.5 px-3">Sample Value</th>
                    <th className="py-2.5 px-3">Purpose & Governance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04] text-[#F5F6FA]">
                  {SCHEMA_FIELDS.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-2.5 px-3 font-semibold text-[#55E6D0] whitespace-nowrap">
                        {item.field}
                      </td>
                      <td className="py-2.5 px-3 text-[#9AA3B5] whitespace-nowrap">
                        {item.type}
                      </td>
                      <td className="py-2.5 px-3 text-[#F5F6FA] max-w-xs truncate">
                        {item.example}
                      </td>
                      <td className="py-2.5 px-3 text-[#9AA3B5] max-w-md">
                        {item.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
