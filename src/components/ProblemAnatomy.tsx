import React, { useState } from 'react';
import { FUNDAMENTAL_CASE_STUDIES } from '../data/intelligenceData';
import { ChevronRight } from 'lucide-react';

export const ProblemAnatomy: React.FC = () => {
  const [activeCaseId, setActiveCaseId] = useState<string>(FUNDAMENTAL_CASE_STUDIES[0].id);

  const activeCase = FUNDAMENTAL_CASE_STUDIES.find(c => c.id === activeCaseId) || FUNDAMENTAL_CASE_STUDIES[0];

  return (
    <div className="hardware-chassis">
      <div className="hardware-chassis-inner p-6 lg:p-8">
        {/* Header and Case Selector */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#55E6D0] font-semibold block mb-1">
              Fundamental Insight
            </span>
            <h3 className="font-display font-bold text-2xl text-[#F5F6FA]">
              The problem is not always where it appears.
            </h3>
            <p className="text-xs text-[#9AA3B5] mt-1 max-w-xl leading-relaxed">
              Superficial complaints often mask deeper structural misalignments. Explore how SolutionSynq unbundles symptoms into root causes and measurable interventions.
            </p>
          </div>

          {/* Case Switcher Tabs - Tactile Milled Hardware Switch */}
          <div className="flex items-center gap-1.5 bg-[#090B10] p-1 rounded-xl border border-white/[0.08] shrink-0 shadow-inner">
            {FUNDAMENTAL_CASE_STUDIES.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setActiveCaseId(c.id)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all duration-200 ease-spring ${
                  activeCaseId === c.id
                    ? 'bg-white/10 text-[#55E6D0] font-medium shadow-[0_0_12px_rgba(85,230,208,0.15)] border border-white/10'
                    : 'text-[#9AA3B5] hover:text-[#F5F6FA]'
                }`}
              >
                Case {String.fromCharCode(65 + idx)}: {c.category.split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Anatomy Pipeline Diagram */}
        <div className="pt-6">
          <div className="mb-5 flex items-center justify-between text-xs font-mono">
            <h4 className="font-display font-semibold text-base text-[#F5F6FA] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#55E6D0] animate-pulse" />
              {activeCase.title}
            </h4>
            <span className="text-[#9AA3B5] text-[11px] bg-white/[0.03] px-2.5 py-1 rounded border border-white/[0.06]">
              Illustrative Diagnostic Case
            </span>
          </div>

          {/* 5-Stage Anatomy Progression Grid - Spring Physics & Hairline Accents */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
            
            {/* Step 1: Reported Symptom */}
            <div className="rounded-xl border border-white/[0.06] hover:border-white/15 bg-[#090B10] p-4 flex flex-col justify-between transition-all duration-300 ease-spring hover:-translate-y-0.5">
              <div>
                <span className="text-[10px] font-mono text-[#F4BD67] uppercase block mb-1.5 font-semibold">
                  01 · Observed Symptom
                </span>
                <p className="text-xs text-[#F5F6FA] leading-relaxed">
                  {activeCase.reportedSymptom}
                </p>
              </div>
            </div>

            {/* Step 2: Verification Needed */}
            <div className="rounded-xl border border-white/[0.06] hover:border-white/15 bg-[#090B10] p-4 flex flex-col justify-between transition-all duration-300 ease-spring hover:-translate-y-0.5">
              <div>
                <span className="text-[10px] font-mono text-[#9AA3B5] uppercase block mb-1.5 font-semibold">
                  02 · Verification Needed
                </span>
                <p className="text-xs text-[#9AA3B5] leading-relaxed">
                  {activeCase.verificationNeeded}
                </p>
              </div>
            </div>

            {/* Step 3: Root Cause Hypotheses */}
            <div className="rounded-xl border border-white/[0.06] hover:border-white/15 bg-[#090B10] p-4 flex flex-col justify-between transition-all duration-300 ease-spring hover:-translate-y-0.5">
              <div>
                <span className="text-[10px] font-mono text-[#55E6D0] uppercase block mb-1.5 font-semibold">
                  03 · Root Causes
                </span>
                <ul className="text-xs text-[#9AA3B5] space-y-1.5">
                  {activeCase.rootCauseHypotheses.map((h, i) => (
                    <li key={i} className="leading-snug flex items-start gap-1.5">
                      <span className="text-[#55E6D0] mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Step 4: Proposed Intervention */}
            <div className="rounded-xl border border-white/[0.06] hover:border-white/15 bg-[#090B10] p-4 flex flex-col justify-between transition-all duration-300 ease-spring hover:-translate-y-0.5">
              <div>
                <span className="text-[10px] font-mono text-[#55E6D0] uppercase block mb-1.5 font-semibold">
                  04 · Pilot Intervention
                </span>
                <p className="text-xs text-[#F5F6FA] leading-relaxed">
                  {activeCase.proposedIntervention}
                </p>
              </div>
            </div>

            {/* Step 5: Measured Outcome */}
            <div className="rounded-xl border border-[#55E6D0]/30 shadow-[0_0_20px_rgba(85,230,208,0.08)] bg-[#090B10] p-4 flex flex-col justify-between transition-all duration-300 ease-spring hover:-translate-y-0.5">
              <div>
                <span className="text-[10px] font-mono text-[#55E6D0] uppercase block mb-1.5 font-semibold">
                  05 · Measured Outcome
                </span>
                <p className="text-xs text-[#55E6D0] leading-relaxed font-medium">
                  {activeCase.measuredOutcome}
                </p>
              </div>
            </div>

          </div>

          {/* Audit footnote */}
          <div className="mt-5 pt-3.5 border-t border-white/[0.06] text-[11px] font-mono text-[#9AA3B5] flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>Audit Standard: {activeCase.evidenceRequired}</span>
            <span className="text-[#55E6D0]">SolutionSynq Epistemic Framework</span>
          </div>

        </div>
      </div>
    </div>
  );
};
