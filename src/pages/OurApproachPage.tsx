import React, { useState } from 'react';
import { OperatingModelJourney } from '../components/OperatingModelJourney';
import { ProblemAnatomy } from '../components/ProblemAnatomy';
import { 
  Activity, 
  ArrowRight, 
  ArrowUpRight,
  CheckCircle, 
  FileText, 
  RotateCw, 
  Sparkles, 
  ShieldCheck, 
  Layers,
  ChevronRight,
  TrendingUp,
  Cpu
} from 'lucide-react';

export const OurApproachPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [selectedCaseStep, setSelectedCaseStep] = useState<number>(1);

  const CASE_WALKTHROUGH_STEPS = [
    {
      step: 1,
      name: 'Listen',
      phase: 'Step 1: Capture Raw Lived Experience',
      action: '42 independent regional lyricists and playback singers across Chennai and Hyderabad submit testimonies through secure vernacular voice notes, describing that broadcast syndication airplay generates zero visible royalty disbursements.',
      evidence: 'Raw audio testimonies transcribed and de-identified with explicit consent.'
    },
    {
      step: 2,
      name: 'Structure',
      phase: 'Step 2: Ontological Signal Normalization',
      action: 'Transformed qualitative narratives into structured signal records: identifying the exact contract types (all-inclusive buyout vs residual rights), missing cue-sheet delivery timestamps, and affected broadcast channels.',
      evidence: 'Structured schema record SIG-2026-IND-ROYALTY-019 created with confidence grade 88%.'
    },
    {
      step: 3,
      name: 'Validate',
      phase: 'Step 3: Corroboration & Counterevidence Audit',
      action: 'Cross-referenced public satellite TV program logs against collecting society (IPRS) distribution archives. Confirmed that 74% of broadcast music cues had unassigned or misspelled lyricist credits, preventing automatic payouts.',
      evidence: 'Audited log of 12,000 broadcast hours proving systematic metadata mismatch, not deliberate label theft.'
    },
    {
      step: 4,
      name: 'Connect',
      phase: 'Step 4: Relational Graph Traversal',
      action: 'Mapped the dependency chain: Broadcaster Traffic Desk → Audio Fingerprinting Engine → Society Cue Ledger → Music Label Master Catalog → Individual Bank Account.',
      evidence: 'Discovered the exact break: TV stations lacked an automated API connection to the central music metadata registry.'
    },
    {
      step: 5,
      name: 'Prioritize',
      phase: 'Step 5: High-Leverage Intervention Scoring',
      action: 'Ranked this bottleneck as High Priority due to high recurring scale (crores in trapped artist royalties), low technical barrier, and broad willingness among broadcasters to automate manual logging.',
      evidence: 'Passed ethics, feasibility, and equity criteria with 9.4/10 leverage score.'
    },
    {
      step: 6,
      name: 'Activate',
      phase: 'Step 6: Pilot Coalition Assembled',
      action: 'Formed a 90-day pilot coalition comprising 3 regional TV channels, 2 prominent indie music labels, the lyricists guild, and an automated audio fingerprinting tech enabler.',
      evidence: 'Signed multilateral pilot charter with audited pre-pilot baseline metrics.'
    },
    {
      step: 7,
      name: 'Measure',
      phase: 'Step 7: Measured Impact Telemetry',
      action: 'Tracked automated broadcast matching over 3 consecutive months. Unassigned broadcast cues dropped from 74% to under 4%. Average royalty reconciliation timeline shortened from 18 months to 21 days.',
      evidence: 'Independent accounting audit verifying ₹1.4 Crores in trapped royalties successfully distributed to 320 creators.'
    },
    {
      step: 8,
      name: 'Learn',
      phase: 'Step 8: Open Playbook Synthesis',
      action: 'Published the "Indian Broadcast Music Metadata Standardization Playbook" under Creative Commons, providing free open-source cue-sheet converters to all Indian regional broadcasters.',
      evidence: 'Feedback loop signal fed into Listening Engine to monitor adaptation in Punjabi and Bengali markets.'
    }
  ];

  return (
    <div className="bg-[#090B10] text-[#F5F6FA] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Quiet & Minimal */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#55E6D0] font-semibold block mb-3">
            The Scientific Method
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#F5F6FA] leading-tight mb-4">
            We don't start with solutions.{' '}
            <span className="text-[#9AA3B5] font-normal">We start by understanding the problem.</span>
          </h1>

          <p className="text-base text-[#9AA3B5] leading-relaxed">
            Most digital platforms rush to build tools, portals, or marketplaces before understanding the structural incentives that cause failures. SolutionSynq follows a disciplined 8-step operating methodology to turn fragmented experiences into measured, lasting outcomes.
          </p>
        </div>

        {/* SECTION 1: THE FUNDAMENTAL INSIGHT (PROBLEM ANATOMY) */}
        <div className="mb-14">
          <ProblemAnatomy />
        </div>

        {/* SECTION 2: THE 8-STAGE OPERATING MODEL JOURNEY */}
        <div className="mb-14">
          <OperatingModelJourney />
        </div>

        {/* SECTION 3: THE LEARNING LOOP */}
        <div className="hardware-chassis mb-14">
          <div className="hardware-chassis-inner p-6 lg:p-8">
            <div className="mb-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#55E6D0] font-semibold block mb-1">
                Continuous Feedback
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-[#F5F6FA]">
                The Learning Loop: Every Intervention Makes the Ecosystem Smarter
              </h2>
              <p className="text-xs text-[#9AA3B5] mt-1">
                Learning feeds future investigations. When a pilot concludes, lessons are preserved as open-access ecosystem memory.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-6 p-3.5 rounded-xl bg-[#090B10] border border-white/[0.08] shadow-inner">
              {[
                'Experience',
                'Evidence',
                'Insight',
                'Intervention',
                'Outcome',
                'Learning',
                'Better Understanding'
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-[#55E6D0] font-medium border border-white/[0.08] shadow-sm">
                    {step}
                  </div>
                  {idx < 6 && <ChevronRight className="w-3.5 h-3.5 text-white/20" />}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/[0.06]">
              <div className="p-4 rounded-xl bg-[#090B10] border border-white/[0.06] hover:border-white/15 transition-all duration-300 ease-spring">
                <h4 className="text-xs font-mono uppercase text-[#55E6D0] font-semibold mb-1.5">
                  Preserved Institutional Memory
                </h4>
                <p className="text-xs text-[#9AA3B5] leading-relaxed">
                  We document exactly what was attempted, what the baseline was, what changed, and what failed. Failures are preserved openly to prevent the next production team from repeating them.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#090B10] border border-white/[0.06] hover:border-white/15 transition-all duration-300 ease-spring">
                <h4 className="text-xs font-mono uppercase text-[#F4BD67] font-semibold mb-1.5">
                  Boundary Condition Audits
                </h4>
                <p className="text-xs text-[#9AA3B5] leading-relaxed">
                  A solution that succeeded in a Mumbai OTT drama may fail in a Malayalam indie feature. Every playbook explicitly documents regional, budget, and legal boundary conditions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#090B10] border border-white/[0.06] hover:border-white/15 transition-all duration-300 ease-spring">
                <h4 className="text-xs font-mono uppercase text-[#9B8CFF] font-semibold mb-1.5">
                  Closed-Loop Feedback
                </h4>
                <p className="text-xs text-[#9AA3B5] leading-relaxed">
                  Evaluated outcomes generate new signals for the Listening Engine, ensuring continuous adaptation to emerging technologies like virtual production and generative AI workflows.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: END-TO-END CASE WALKTHROUGH */}
        <div className="hardware-chassis mb-14">
          <div className="hardware-chassis-inner p-6 lg:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/[0.06] gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#F4BD67] tracking-widest block mb-1 font-semibold">
                  End-To-End Case Study Walkthrough
                </span>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F5F6FA]">
                  Case: Automated Royalty Attribution & Broadcast Metadata
                </h2>
                <p className="text-xs text-[#9AA3B5] mt-1 font-mono">
                  How an 18-month royalty payment lag was diagnosed, validated, piloted, and solved in 90 days.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#55E6D0] bg-[#090B10] px-3.5 py-1.5 rounded-lg border border-white/[0.08]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#55E6D0] animate-pulse" />
                <span>Step 0{selectedCaseStep} of 08</span>
              </div>
            </div>

            {/* Interactive Step Switcher - Tactile & Spring Physics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-6">
              {CASE_WALKTHROUGH_STEPS.map((cs) => {
                const isSelected = selectedCaseStep === cs.step;
                return (
                  <button
                    key={cs.step}
                    onClick={() => setSelectedCaseStep(cs.step)}
                    className={`p-3 rounded-xl border text-center transition-all duration-300 ease-spring ${
                      isSelected
                        ? 'bg-[#0E121B] border-[#55E6D0]/40 text-[#55E6D0] font-medium shadow-[0_0_16px_rgba(85,230,208,0.15)] -translate-y-0.5'
                        : 'bg-[#090B10] border-white/[0.06] hover:border-white/20 text-[#9AA3B5] hover:text-[#F5F6FA] hover:-translate-y-0.5'
                    }`}
                  >
                    <span className={`text-[10px] font-mono block ${isSelected ? 'text-[#55E6D0]' : 'opacity-60'}`}>0{cs.step}</span>
                    <span className="text-xs font-mono uppercase tracking-wider">{cs.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Case Step Display */}
            {(() => {
              const activeStepData = CASE_WALKTHROUGH_STEPS.find(s => s.step === selectedCaseStep) || CASE_WALKTHROUGH_STEPS[0];
              return (
                <div className="p-6 rounded-xl bg-[#090B10] border border-white/[0.06] flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase text-[#55E6D0] font-semibold block mb-2">
                      {activeStepData.phase}
                    </span>
                    <p className="text-sm text-[#F5F6FA] leading-relaxed mb-5">
                      {activeStepData.action}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[#F4BD67] font-semibold text-[11px] uppercase tracking-wider">Audited Evidence:</span>
                      <span className="text-[#9AA3B5]">{activeStepData.evidence}</span>
                    </div>
                    <button
                      onClick={() => setSelectedCaseStep((prev) => (prev < 8 ? prev + 1 : 1))}
                      className="text-[#55E6D0] hover:text-[#55E6D0]/80 font-mono text-xs shrink-0 flex items-center gap-1.5 transition-colors font-medium"
                    >
                      <span>{selectedCaseStep === 8 ? 'Restart Walkthrough' : 'Next Step'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Bottom Gateway to Ecosystem in Hardware Chassis with Button-in-Button */}
        <div className="hardware-chassis">
          <div className="hardware-chassis-inner p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-display font-bold text-lg text-[#F5F6FA] mb-1">
                Explore the 26 entertainment sectors we analyze
              </h3>
              <p className="text-xs text-[#9AA3B5]">
                Interactive mapping across film, streaming, music, gaming, and creator ecosystems.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/ecosystem')}
              className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#55E6D0] text-[#090B10] font-mono font-medium text-xs shadow-[0_0_20px_rgba(85,230,208,0.2)] hover:shadow-[0_0_28px_rgba(85,230,208,0.35)] transition-all duration-300 ease-spring active:scale-[0.98] shrink-0"
            >
              <span>Ecosystem Explorer</span>
              <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-spring">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
