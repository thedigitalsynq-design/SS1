import React, { useState } from 'react';
import { OPERATING_STAGES } from '../data/intelligenceData';
import { Check } from 'lucide-react';

export const OperatingModelJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const currentStage = OPERATING_STAGES.find(s => s.step === activeStep) || OPERATING_STAGES[0];
  return (
    <div className="hardware-chassis">
      <div className="hardware-chassis-inner p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#55E6D0] font-semibold block mb-1">
              End-To-End Methodology
            </span>
            <h3 className="font-display font-bold text-2xl text-[#F5F6FA]">
              From Fragmented Experience to Collective Intelligence
            </h3>
            <p className="text-xs text-[#9AA3B5] mt-1 max-w-xl leading-relaxed">
              An 8-stage closed-loop operating model ensuring every reported experience is validated, connected, acted upon, and preserved as institutional memory.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#55E6D0] bg-[#090B10] px-3.5 py-1.5 rounded-lg border border-white/[0.08] shrink-0 shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-[#55E6D0] animate-pulse" />
            <span>Stage 0{activeStep} of 08: {currentStage.name}</span>
          </div>
        </div>

        {/* Steps Ribbon with Precision Active Indicator */}
        <div className="pt-6 pb-4 overflow-x-auto">
          <div className="flex items-center min-w-[700px] justify-between relative px-2">
            <div className="absolute top-4 left-6 right-6 h-[1px] bg-white/[0.08] -z-0" />

            {OPERATING_STAGES.map((stage) => {
              const isCurrent = stage.step === activeStep;
              const isCompleted = stage.step < activeStep;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStep(stage.step)}
                  className="flex flex-col items-center group relative z-10 focus:outline-none transition-transform duration-200 ease-spring hover:scale-105"
                >
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ease-spring ${
                      isCurrent
                        ? 'bg-[#55E6D0] text-[#090B10] shadow-[0_0_16px_rgba(85,230,208,0.4)] scale-110'
                        : isCompleted
                        ? 'bg-white/10 text-[#55E6D0] border border-[#55E6D0]/30'
                        : 'bg-[#090B10] text-[#9AA3B5] border border-white/[0.08] group-hover:border-white/20'
                    }`}
                  >
                    {isCompleted ? <Check className="w-3.5 h-3.5 text-[#55E6D0]" /> : stage.step}
                  </div>

                  <span className={`text-[11px] font-mono uppercase mt-2.5 transition-colors ${
                    isCurrent ? 'text-[#55E6D0] font-semibold' : 'text-[#9AA3B5]'
                  }`}>
                    {stage.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail */}
        <div className="rounded-xl border border-white/[0.06] bg-[#090B10] p-5 sm:p-6 mt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.06] gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-[#55E6D0] border border-white/[0.08]">
                  STAGE 0{currentStage.step}
                </span>
                <h4 className="font-display font-semibold text-lg text-[#F5F6FA]">
                  {currentStage.name}
                </h4>
              </div>
              <p className="text-xs text-[#F4BD67] font-mono mt-1">
                {currentStage.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStep((prev) => (prev > 1 ? prev - 1 : 8))}
                className="px-3 py-1.5 text-xs font-mono rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#9AA3B5] hover:text-[#F5F6FA] border border-white/[0.06] transition-all ease-spring"
              >
                ← Prev
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev < 8 ? prev + 1 : 1))}
                className="px-3 py-1.5 text-xs font-mono rounded-lg bg-white/10 hover:bg-white/15 text-[#55E6D0] font-medium border border-white/10 transition-all ease-spring"
              >
                Next →
              </button>
            </div>
          </div>

          <p className="text-xs text-[#9AA3B5] leading-relaxed my-4">
            {currentStage.description}
          </p>

          {/* 4 Dimension Columns - Clean Hairlines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <span className="text-[10px] font-mono uppercase text-[#9AA3B5] block mb-1.5 font-semibold">Inputs</span>
              <ul className="text-xs text-[#F5F6FA] space-y-1">
                {currentStage.inputs.map((inItem, idx) => (
                  <li key={idx} className="leading-snug">• {inItem}</li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <span className="text-[10px] font-mono uppercase text-[#9AA3B5] block mb-1.5 font-semibold">Activities</span>
              <ul className="text-xs text-[#F5F6FA] space-y-1">
                {currentStage.activities.map((act, idx) => (
                  <li key={idx} className="leading-snug">• {act}</li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <span className="text-[10px] font-mono uppercase text-[#55E6D0] block mb-1.5 font-semibold">Outputs</span>
              <ul className="text-xs text-[#F5F6FA] space-y-1">
                {currentStage.outputs.map((out, idx) => (
                  <li key={idx} className="leading-snug text-[#55E6D0]">• {out}</li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <span className="text-[10px] font-mono uppercase text-[#9AA3B5] block mb-1.5 font-semibold">Stakeholders</span>
              <ul className="text-xs text-[#F5F6FA] space-y-1">
                {currentStage.participants.map((part, idx) => (
                  <li key={idx} className="leading-snug">• {part}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
