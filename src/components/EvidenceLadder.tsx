import React, { useState } from 'react';
import { EVIDENCE_LADDER_LEVELS } from '../data/intelligenceData';
import { ChevronRight } from 'lucide-react';

export const EvidenceLadder: React.FC = () => {
  const [activeLevelIdx, setActiveLevelIdx] = useState<number>(2); // Default to Validated Pattern

  const currentLevel = EVIDENCE_LADDER_LEVELS[activeLevelIdx];
  return (
    <div className="hardware-chassis">
      <div className="hardware-chassis-inner p-6 lg:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#55E6D0] font-semibold block mb-1">
              Epistemological Standard
            </span>
            <h3 className="font-display font-bold text-2xl text-[#F5F6FA]">
              The 5-Tier Evidence Ladder
            </h3>
            <p className="text-xs text-[#9AA3B5] mt-1 max-w-xl leading-relaxed">
              We never confuse allegations with facts, or correlations with causes. Every claim in SolutionSynq is pinned to a verified evidentiary tier.
            </p>
          </div>

          {/* Level Pills - Tactile Switch */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#090B10] p-1 rounded-xl border border-white/[0.08] shadow-inner shrink-0">
            {EVIDENCE_LADDER_LEVELS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveLevelIdx(idx)}
                className={`px-3 py-1 text-xs font-mono rounded-lg transition-all duration-200 ease-spring ${
                  activeLevelIdx === idx
                    ? 'bg-white/10 text-[#55E6D0] font-medium shadow-[0_0_12px_rgba(85,230,208,0.15)] border border-white/10'
                    : 'text-[#9AA3B5] hover:text-[#F5F6FA]'
                }`}
              >
                L{item.level}: {item.id}
              </button>
            ))}
          </div>
        </div>

        {/* Main Interactive Ladder Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
          
          {/* Left Column: Visual Ladder Steps */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {EVIDENCE_LADDER_LEVELS.map((level, idx) => {
              const isSelected = activeLevelIdx === idx;
              return (
                <button
                  key={level.id}
                  onClick={() => setActiveLevelIdx(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-300 ease-spring flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#0E121B] border-[#55E6D0]/40 text-[#F5F6FA] shadow-[0_0_16px_rgba(85,230,208,0.1)] -translate-y-0.5'
                      : 'bg-[#090B10] border-white/[0.06] hover:border-white/20 text-[#9AA3B5] hover:text-[#F5F6FA] hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#55E6D0]' : 'text-[#9AA3B5]'}`}>
                      0{level.level}
                    </span>
                    <div>
                      <h4 className={`text-xs font-semibold ${isSelected ? 'text-[#F5F6FA]' : 'text-[#9AA3B5]'}`}>
                        {level.name}
                      </h4>
                      <span className="text-[10px] font-mono text-[#9AA3B5]/60">
                        Tier {level.level} · {level.id}
                      </span>
                    </div>
                  </div>

                  <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isSelected ? 'text-[#55E6D0] translate-x-0.5' : 'text-white/20'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Inspection Details */}
          <div className="lg:col-span-7 bg-[#090B10] rounded-xl border border-white/[0.06] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#9AA3B5]">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#55E6D0] animate-pulse" />
                  Tier 0{currentLevel.level}
                </span>
                <span className="text-[#55E6D0] bg-white/[0.04] px-2.5 py-0.5 rounded border border-white/[0.06]">
                  {currentLevel.id}
                </span>
              </div>

              <h4 className="font-display font-semibold text-lg text-[#F5F6FA] mb-3">
                {currentLevel.definition}
              </h4>

              <div className="space-y-3.5 my-4 text-xs">
                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-[10px] font-mono uppercase text-[#55E6D0] block mb-1 font-semibold">
                    Required Evidence
                  </span>
                  <p className="text-[#9AA3B5] leading-relaxed">
                    {currentLevel.requiredEvidence}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-[10px] font-mono uppercase text-[#F4BD67] block mb-1 font-semibold">
                    Analytical Boundary & Limitation
                  </span>
                  <p className="text-[#9AA3B5] leading-relaxed">
                    {currentLevel.analyticalBoundary}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-[#9AA3B5] flex items-center justify-between">
              <span>SolutionSynq Epistemic Standard</span>
              <span className="text-[#55E6D0]">L{currentLevel.level} Certified</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
