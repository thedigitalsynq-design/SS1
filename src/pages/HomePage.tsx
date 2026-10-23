import React from 'react';
import { EcosystemNetworkHero } from '../components/EcosystemNetworkHero';
import { 
  ArrowRight, 
  Layers, 
  Compass, 
  Sparkles, 
  Users2, 
  Activity, 
  FileQuestion,
  Lock,
  Wrench
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#090B10] text-[#F5F6FA] min-h-screen">
      
      {/* HERO SECTION WITH LIVING NETWORK VISUALIZATION */}
      <EcosystemNetworkHero 
        onExploreSystem={() => onNavigate('/approach')}
        onUnderstandProblem={() => onNavigate('/problem')}
      />

      {/* LIVE OPERATIONAL TELEMETRY BAR */}
      <section className="py-3.5 border-y border-white/[0.06] bg-[#0E121B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#55E6D0] animate-pulse" />
              <div>
                <span className="text-[#9AA3B5] block text-[10px] uppercase">Trapped Royalties Audited</span>
                <span className="text-[#55E6D0] font-semibold">₹1.48 Cr Logged</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#F4BD67]" />
              <div>
                <span className="text-[#9AA3B5] block text-[10px] uppercase">Standard Model Riders</span>
                <span className="text-[#F5F6FA] font-semibold">4 SWA / IPRS Contracts</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#9B8CFF]" />
              <div>
                <span className="text-[#9AA3B5] block text-[10px] uppercase">Sovereign Ecosystem Scope</span>
                <span className="text-[#F5F6FA] font-semibold">26 Sectors & 10 Hubs</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#55E6D0]" />
              <div>
                <span className="text-[#9AA3B5] block text-[10px] uppercase">Worker Whistleblower Tier</span>
                <span className="text-[#55E6D0] font-semibold">Zero Identity Publication</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL THESIS STATEMENT */}
      <section className="py-24 border-b border-white/[0.06] bg-[#090B10]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-[#F5F6FA] leading-relaxed tracking-tight mb-12">
            “We don't create entertainment. We help the entire entertainment ecosystem understand itself, learn from itself, and improve itself.”
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left pt-8 border-t border-white/[0.06]">
            <div>
              <span className="text-[11px] font-mono text-[#55E6D0] uppercase tracking-wider block mb-2 font-medium">
                01 · Understand
              </span>
              <p className="text-xs text-[#9AA3B5] leading-relaxed">
                Transform qualitative, fragmented worker experiences into structured, corroborated problem signals.
              </p>
            </div>

            <div>
              <span className="text-[11px] font-mono text-[#55E6D0] uppercase tracking-wider block mb-2 font-medium">
                02 · Synchronize
              </span>
              <p className="text-xs text-[#9AA3B5] leading-relaxed">
                Connect verified structural bottlenecks directly to solvers, institutional capital, and pilot studio cohorts.
              </p>
            </div>

            <div>
              <span className="text-[11px] font-mono text-[#55E6D0] uppercase tracking-wider block mb-2 font-medium">
                03 · Learn
              </span>
              <p className="text-xs text-[#9AA3B5] leading-relaxed">
                Measure pilot outcomes against audited baselines and preserve lessons openly as ecosystem memory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE INFRASTRUCTURE PORTALS */}
      <section className="py-20 border-b border-white/[0.06] bg-[#0E121B]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#55E6D0] font-semibold block mb-2">
                System Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F5F6FA] tracking-tight">
                Explore the Four Core Pillars
              </h2>
            </div>
            <p className="text-xs text-[#9AA3B5] max-w-sm">
              In-depth investigations, methodologies, and frameworks segregated across dedicated portals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Portal 1: The Problem */}
            <div 
              onClick={() => onNavigate('/problem')}
              className="p-6 rounded-2xl bg-[#090B10] border border-white/[0.06] hover:border-[#F4BD67]/30 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6)] transition-all duration-300 ease-spring cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#F5F6FA] mb-5 group-hover:scale-105 transition-transform">
                  <FileQuestion className="w-4 h-4 text-[#F4BD67]" />
                </div>
                <span className="text-[10px] font-mono text-[#9AA3B5] uppercase tracking-wider block mb-1.5 font-medium">
                  Pillar 01
                </span>
                <h3 className="font-display font-bold text-lg text-[#F5F6FA] mb-2 group-hover:text-[#55E6D0] transition-colors">
                  The Problem
                </h3>
                <p className="text-xs text-[#9AA3B5] leading-relaxed mb-6 font-normal">
                  The 8 structural failures of entertainment intelligence, from payment latency to root-cause invisibility.
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#9AA3B5] group-hover:text-[#55E6D0]">
                <span>Inspect Dossiers</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Portal 2: Our Approach */}
            <div 
              onClick={() => onNavigate('/approach')}
              className="p-6 rounded-2xl bg-[#090B10] border border-white/[0.06] hover:border-[#55E6D0]/30 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6)] transition-all duration-300 ease-spring cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#F5F6FA] mb-5 group-hover:scale-105 transition-transform">
                  <Activity className="w-4 h-4 text-[#55E6D0]" />
                </div>
                <span className="text-[10px] font-mono text-[#9AA3B5] uppercase tracking-wider block mb-1.5 font-medium">
                  Pillar 02
                </span>
                <h3 className="font-display font-bold text-lg text-[#F5F6FA] mb-2 group-hover:text-[#55E6D0] transition-colors">
                  Our Approach
                </h3>
                <p className="text-xs text-[#9AA3B5] leading-relaxed mb-6 font-normal">
                  The 8-stage scientific methodology, problem anatomy breakdown, and full case walkthrough.
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#9AA3B5] group-hover:text-[#55E6D0]">
                <span>Explore Method</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Portal 3: Ecosystem */}
            <div 
              onClick={() => onNavigate('/ecosystem')}
              className="p-6 rounded-2xl bg-[#090B10] border border-white/[0.06] hover:border-[#9B8CFF]/30 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6)] transition-all duration-300 ease-spring cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#F5F6FA] mb-5 group-hover:scale-105 transition-transform">
                  <Compass className="w-4 h-4 text-[#9B8CFF]" />
                </div>
                <span className="text-[10px] font-mono text-[#9AA3B5] uppercase tracking-wider block mb-1.5 font-medium">
                  Pillar 03
                </span>
                <h3 className="font-display font-bold text-lg text-[#F5F6FA] mb-2 group-hover:text-[#55E6D0] transition-colors">
                  Ecosystem Explorer
                </h3>
                <p className="text-xs text-[#9AA3B5] leading-relaxed mb-6 font-normal">
                  Interactive map across 26 Indian sectors, cross-sector supply chains, and 10 regional hubs.
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#9AA3B5] group-hover:text-[#55E6D0]">
                <span>Explore 26 Sectors</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Portal 4: Intelligence System */}
            <div 
              onClick={() => onNavigate('/intelligence')}
              className="p-6 rounded-2xl bg-[#090B10] border border-white/[0.06] hover:border-[#55E6D0]/30 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6)] transition-all duration-300 ease-spring cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#F5F6FA] mb-5 group-hover:scale-105 transition-transform">
                  <Layers className="w-4 h-4 text-[#55E6D0]" />
                </div>
                <span className="text-[10px] font-mono text-[#9AA3B5] uppercase tracking-wider block mb-1.5 font-medium">
                  Pillar 04
                </span>
                <h3 className="font-display font-bold text-lg text-[#F5F6FA] mb-2 group-hover:text-[#55E6D0] transition-colors">
                  Intelligence System
                </h3>
                <p className="text-xs text-[#9AA3B5] leading-relaxed mb-6 font-normal">
                  The six connected engines, the 5-tier evidence ladder, typed schemas, and human review protocols.
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#9AA3B5] group-hover:text-[#55E6D0]">
                <span>View Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAST GATEWAYS TO TOOLKITS, STAKEHOLDERS & OPPORTUNITIES */}
      <section className="py-14 border-b border-white/[0.06] bg-[#090B10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div 
              onClick={() => onNavigate('/toolkits')}
              className="p-5 rounded-2xl bg-[#0E121B] border border-white/[0.06] hover:border-[#55E6D0]/40 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] transition-all duration-300 ease-spring cursor-pointer group flex flex-col justify-between"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#55E6D0]/10 border border-[#55E6D0]/20 flex items-center justify-center text-[#55E6D0] shrink-0 group-hover:scale-105 transition-transform">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-base text-[#F5F6FA] group-hover:text-[#55E6D0] transition-colors">
                      Operational Toolkits
                    </h3>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-[#55E6D0]/15 text-[#55E6D0]">NEW</span>
                  </div>
                  <p className="text-xs text-[#9AA3B5] mt-1 leading-relaxed">
                    Broadcast cue-sheet validator, SWA/IPRS model contracts, and pan-India shoot clearance matrix.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono text-[#9AA3B5] group-hover:text-[#55E6D0]">
                <span>Launch Interactive Tools</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div 
              onClick={() => onNavigate('/stakeholders')}
              className="p-5 rounded-2xl bg-[#0E121B] border border-white/[0.06] hover:border-[#9B8CFF]/30 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] transition-all duration-300 ease-spring cursor-pointer group flex flex-col justify-between"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#9B8CFF] shrink-0 group-hover:scale-105 transition-transform">
                  <Users2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-[#F5F6FA] group-hover:text-[#9B8CFF] transition-colors">
                    Stakeholder Perspectives
                  </h3>
                  <p className="text-xs text-[#9AA3B5] mt-1 leading-relaxed">
                    Tailored value matrices across 6 stakeholder groups and 8 beneficiary classes.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono text-[#9AA3B5] group-hover:text-[#9B8CFF]">
                <span>Explore Perspectives</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div 
              onClick={() => onNavigate('/opportunities')}
              className="p-5 rounded-2xl bg-[#0E121B] border border-white/[0.06] hover:border-[#F59E0B]/30 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] transition-all duration-300 ease-spring cursor-pointer group flex flex-col justify-between"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#F59E0B] shrink-0 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-[#F5F6FA] group-hover:text-[#F59E0B] transition-colors">
                    The Opportunity Library
                  </h3>
                  <p className="text-xs text-[#9AA3B5] mt-1 leading-relaxed">
                    10 validated opportunity domains where solving recurring trade bottlenecks unlocks compounding value.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono text-[#9AA3B5] group-hover:text-[#F59E0B]">
                <span>Browse Opportunities</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUIET, HIGH-IMPACT CALL TO ACTION */}
      <section className="relative py-28 bg-[#090B10] overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-[#55E6D0]/[0.06] to-transparent blur-[120px] pointer-events-none rounded-full" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#F5F6FA] tracking-tight leading-tight mb-4">
            The future of entertainment depends on what we learn together.
          </h2>

          <p className="text-sm text-[#9AA3B5] leading-relaxed mb-8 max-w-xl mx-auto font-normal">
            Whether you are reporting a lived operational breakdown or joining our consultative founding cohort, your participation belongs in the larger picture.
          </p>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('/join')}
              className="group pl-5 pr-2.5 py-2.5 text-xs font-mono font-semibold rounded-full bg-[#55E6D0] text-[#090B10] hover:bg-[#55E6D0]/95 hover:shadow-[0_0_24px_rgba(85,230,208,0.3)] active:scale-[0.98] transition-all flex items-center gap-2.5"
            >
              <span>Join Founding Network</span>
              <div className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowRight className="w-3 h-3 text-[#090B10]" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('/share-a-problem')}
              className="px-5 py-2.5 text-xs font-mono font-medium rounded-full border border-white/10 hover:border-white/20 text-[#F4BD67] hover:bg-white/[0.02] active:scale-[0.98] transition-all"
            >
              <span>Share a Problem</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
