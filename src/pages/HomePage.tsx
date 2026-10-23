import React from 'react';
import { 
  ArrowRight, 
  Layers, 
  Compass, 
  FileQuestion,
  Wrench,
  Users2,
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#090B10] text-[#F5F6FA] min-h-screen">
      
      {/* CALM EDITORIAL HERO */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 border-b border-white/[0.06] overflow-hidden">
        {/* Very subtle static ambient gradient */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#55E6D0]/[0.03] blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Subtle label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-[#9AA3B5] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#55E6D0]" />
            <span>Problem Intelligence &amp; Solution Coordination</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-[#F5F6FA] tracking-tight leading-[1.15] mb-6">
            Connecting India's Entertainment Ecosystem to Solve What Matters.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#9AA3B5] leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            A collaborative intelligence layer bringing creative talent, technical crew, and studios together to uncover root causes, connect capabilities, and coordinate measurable interventions.
          </p>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('/problem')}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#55E6D0] text-[#090B10] font-medium text-xs sm:text-sm hover:bg-[#55E6D0]/90 transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
            >
              <span>Explore The Problem</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('/approach')}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 hover:border-white/20 text-[#F5F6FA] font-medium text-xs sm:text-sm hover:bg-white/[0.06] transition-all flex items-center justify-center gap-2"
            >
              <span>Our Methodology</span>
            </button>
          </div>

        </div>

        {/* Quiet Metric Summary (Clean, dignified, zero flashing lights) */}
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 mt-16 pt-10 border-t border-white/[0.06]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left sm:text-center">
            <div>
              <span className="block text-xl font-display font-semibold text-[#F5F6FA] mb-1">
                26 Sectors
              </span>
              <span className="text-xs text-[#8F99AA]">
                Full lifecycle scope from writing and technical crew to streaming exhibition
              </span>
            </div>

            <div>
              <span className="block text-xl font-display font-semibold text-[#F5F6FA] mb-1">
                8 Structural Failures
              </span>
              <span className="text-xs text-[#8F99AA]">
                Documented bottlenecks with root causes, evidence tiers, and solutions
              </span>
            </div>

            <div>
              <span className="block text-xl font-display font-semibold text-[#55E6D0] mb-1">
                Confidential Reporting
              </span>
              <span className="text-xs text-[#8F99AA]">
                Protected whistleblower protocols for workers and freelance technicians
              </span>
            </div>
          </div>
        </div>

      </section>

      {/* EDITORIAL THESIS SECTION */}
      <section className="py-24 border-b border-white/[0.06] bg-[#0E121B]/30">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#55E6D0] block mb-3 font-medium">
              Guiding Principle
            </span>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-[#F5F6FA] leading-snug tracking-tight">
              “We don't create entertainment. We help the entire entertainment ecosystem understand itself, learn from itself, and improve itself.”
            </blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/[0.06]">
            <div>
              <span className="text-xs font-mono text-[#55E6D0] uppercase tracking-wider block mb-2 font-medium">
                01 · Understand
              </span>
              <h3 className="text-base font-semibold text-[#F5F6FA] mb-1.5">Corroborate Real Signals</h3>
              <p className="text-xs text-[#8F99AA] leading-relaxed">
                Transform qualitative, fragmented worker experiences and operational pain points into structured, verified problem signals.
              </p>
            </div>

            <div>
              <span className="text-xs font-mono text-[#55E6D0] uppercase tracking-wider block mb-2 font-medium">
                02 · Synchronize
              </span>
              <h3 className="text-base font-semibold text-[#F5F6FA] mb-1.5">Direct Solution Matching</h3>
              <p className="text-xs text-[#8F99AA] leading-relaxed">
                Connect verified structural bottlenecks directly to solvers, studio cohorts, and institutional policy frameworks.
              </p>
            </div>

            <div>
              <span className="text-xs font-mono text-[#55E6D0] uppercase tracking-wider block mb-2 font-medium">
                03 · Learn
              </span>
              <h3 className="text-base font-semibold text-[#F5F6FA] mb-1.5">Preserve Shared Memory</h3>
              <p className="text-xs text-[#8F99AA] leading-relaxed">
                Measure intervention outcomes against audited baselines and preserve solutions openly so the ecosystem doesn't repeat past errors.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* THREE CORE INVESTIGATION PILLARS */}
      <section className="py-20 border-b border-white/[0.06] bg-[#090B10]">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          
          <div className="mb-12 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#55E6D0] block mb-2 font-medium">
              Core Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F5F6FA] tracking-tight">
              Explore the Research &amp; Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pillar 1: The Problem */}
            <div 
              onClick={() => onNavigate('/problem')}
              className="p-7 rounded-2xl bg-[#0E121B] border border-white/[0.06] hover:border-white/20 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#F5F6FA] mb-5">
                  <FileQuestion className="w-4 h-4 text-[#55E6D0]" />
                </div>
                <span className="text-[10px] font-mono text-[#8F99AA] uppercase tracking-wider block mb-1">
                  Investigation
                </span>
                <h3 className="font-display font-semibold text-lg text-[#F5F6FA] mb-2 group-hover:text-[#55E6D0] transition-colors">
                  The Problem
                </h3>
                <p className="text-xs text-[#8F99AA] leading-relaxed mb-6">
                  The 8 systemic failures in Indian media, covering payment latency, invisible root causes, and trapped royalties.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium text-[#8F99AA] group-hover:text-[#55E6D0] transition-colors">
                <span>Read Analysis</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Pillar 2: Our Approach */}
            <div 
              onClick={() => onNavigate('/approach')}
              className="p-7 rounded-2xl bg-[#0E121B] border border-white/[0.06] hover:border-white/20 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#F5F6FA] mb-5">
                  <Layers className="w-4 h-4 text-[#55E6D0]" />
                </div>
                <span className="text-[10px] font-mono text-[#8F99AA] uppercase tracking-wider block mb-1">
                  Methodology
                </span>
                <h3 className="font-display font-semibold text-lg text-[#F5F6FA] mb-2 group-hover:text-[#55E6D0] transition-colors">
                  Our Approach
                </h3>
                <p className="text-xs text-[#8F99AA] leading-relaxed mb-6">
                  The 8-stage scientific methodology and solution orchestration framework, from raw intake to verified rollout.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium text-[#8F99AA] group-hover:text-[#55E6D0] transition-colors">
                <span>Explore Method</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Pillar 3: Ecosystem */}
            <div 
              onClick={() => onNavigate('/ecosystem')}
              className="p-7 rounded-2xl bg-[#0E121B] border border-white/[0.06] hover:border-white/20 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#F5F6FA] mb-5">
                  <Compass className="w-4 h-4 text-[#55E6D0]" />
                </div>
                <span className="text-[10px] font-mono text-[#8F99AA] uppercase tracking-wider block mb-1">
                  Taxonomy
                </span>
                <h3 className="font-display font-semibold text-lg text-[#F5F6FA] mb-2 group-hover:text-[#55E6D0] transition-colors">
                  Ecosystem Explorer
                </h3>
                <p className="text-xs text-[#8F99AA] leading-relaxed mb-6">
                  A comprehensive mapping of 26 sectors, 10 regional hubs, and cross-sector dependencies across the country.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium text-[#8F99AA] group-hover:text-[#55E6D0] transition-colors">
                <span>View Sectors</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* QUIET RESOURCES SECTION */}
      <section className="py-16 border-b border-white/[0.06] bg-[#0E121B]/20">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            <div 
              onClick={() => onNavigate('/toolkits')}
              className="p-5 rounded-xl bg-[#090B10] border border-white/[0.06] hover:border-white/15 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-2">
                <Wrench className="w-4 h-4 text-[#55E6D0]" />
                <h4 className="text-sm font-semibold text-[#F5F6FA] group-hover:text-[#55E6D0] transition-colors">
                  Operational Toolkits
                </h4>
              </div>
              <p className="text-xs text-[#8F99AA] leading-relaxed">
                Model contracts, royalty cue-sheet audit tools, and shoot permit workflows.
              </p>
            </div>

            <div 
              onClick={() => onNavigate('/stakeholders')}
              className="p-5 rounded-xl bg-[#090B10] border border-white/[0.06] hover:border-white/15 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-2">
                <Users2 className="w-4 h-4 text-[#55E6D0]" />
                <h4 className="text-sm font-semibold text-[#F5F6FA] group-hover:text-[#55E6D0] transition-colors">
                  Stakeholder Analysis
                </h4>
              </div>
              <p className="text-xs text-[#8F99AA] leading-relaxed">
                Value propositions and risk profiles across creators, crew, studios, and streaming platforms.
              </p>
            </div>

            <div 
              onClick={() => onNavigate('/opportunities')}
              className="p-5 rounded-xl bg-[#090B10] border border-white/[0.06] hover:border-white/15 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-4 h-4 text-[#55E6D0]" />
                <h4 className="text-sm font-semibold text-[#F5F6FA] group-hover:text-[#55E6D0] transition-colors">
                  Opportunity Library
                </h4>
              </div>
              <p className="text-xs text-[#8F99AA] leading-relaxed">
                High-potential intervention areas where resolving structural friction yields compounding value.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* RESTRAINED INVITATION CTA */}
      <section className="py-24 bg-[#090B10]">
        <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#F5F6FA] tracking-tight mb-4">
            Participate in the coordination layer.
          </h2>

          <p className="text-sm text-[#8F99AA] leading-relaxed mb-8 font-normal">
            Whether you wish to report a lived operational breakdown or join our founding advisory cohort, your participation helps build the collective picture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('/join')}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#55E6D0] text-[#090B10] font-medium text-xs hover:bg-[#55E6D0]/90 transition-all flex items-center justify-center gap-2"
            >
              <span>Join Founding Network</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onNavigate('/share-a-problem')}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-white/10 hover:border-white/20 text-[#F5F6FA] font-medium text-xs hover:bg-white/[0.03] transition-all"
            >
              <span>Share a Problem Confidentially</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
