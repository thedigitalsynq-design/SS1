import React, { useState } from 'react';
import { OPPORTUNITY_DOMAINS } from '../data/opportunitiesData';
import { 
  Sparkles, 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ArrowUpRight,
  ShieldCheck, 
  TrendingUp,
  FileText
} from 'lucide-react';

export const OpportunitiesPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOpportunityId, setSelectedOpportunityId] = useState(OPPORTUNITY_DOMAINS[0].id);

  const filteredOpportunities = OPPORTUNITY_DOMAINS.filter(opp => 
    opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    opp.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
    opp.potentialProblem.toLowerCase().includes(searchQuery.toLowerCase()) ||
    opp.affectedStakeholders.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const activeOpp = OPPORTUNITY_DOMAINS.find(o => o.id === selectedOpportunityId) || OPPORTUNITY_DOMAINS[0];

  return (
    <div className="bg-[#090B10] text-[#F5F6FA] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Quiet & Minimal */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#55E6D0] font-semibold block mb-3">
            The Opportunity Library
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#F5F6FA] leading-tight mb-4">
            Where recurring problems reveal{' '}
            <span className="text-[#9AA3B5] font-normal">possibilities for progress.</span>
          </h1>

          <p className="text-base text-[#9AA3B5] leading-relaxed mb-6">
            We do not invent speculative startup concepts. Every opportunity in this library represents a validated systemic friction point where collective coordination creates measurable economic and cultural value.
          </p>

          <div className="p-3.5 rounded-xl bg-[#0E121B] border border-white/[0.08] text-xs text-[#F4BD67] font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4BD67] animate-pulse shrink-0" />
            <span><strong>Analytical Transparency:</strong> We deliberately avoid fabricating TAM metrics or claiming premature validation. Criteria and uncertainties are stated transparently for each domain.</span>
          </div>
        </div>

        {/* Search Bar - Clean */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <span className="text-xs font-mono text-[#9AA3B5] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#55E6D0]" />
            Showing 10 Formulated Opportunity Domains
          </span>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#9AA3B5]" />
            <input
              type="text"
              placeholder="Search opportunity domains or roles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#0E121B] border border-white/[0.08] text-xs text-[#F5F6FA] placeholder:text-[#9AA3B5]/60 focus:outline-none focus:border-[#55E6D0]/40 transition-colors"
            />
          </div>
        </div>

        {/* 2-Column Split: Selector & Deep Inspection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14">
          
          {/* Left Column: List of 10 Domains */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[640px] overflow-y-auto pr-1">
            {filteredOpportunities.map((opp, idx) => {
              const isSelected = activeOpp.id === opp.id;
              return (
                <button
                  key={opp.id}
                  onClick={() => setSelectedOpportunityId(opp.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ease-spring ${
                    isSelected
                      ? 'bg-[#0E121B] border-[#55E6D0]/40 text-[#F5F6FA] shadow-[0_0_16px_rgba(85,230,208,0.1)] -translate-y-0.5'
                      : 'bg-[#090B10] border-white/[0.06] hover:border-white/20 text-[#9AA3B5] hover:text-[#F5F6FA] hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-mono font-medium ${isSelected ? 'text-[#55E6D0]' : 'text-[#9AA3B5]'}`}>
                      DOMAIN 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-[#9AA3B5] bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.06]">
                      {opp.affectedStakeholders.length} Cohorts
                    </span>
                  </div>
                  <h3 className={`text-sm font-semibold transition-colors ${
                    isSelected ? 'text-[#F5F6FA]' : 'text-[#9AA3B5]'
                  }`}>
                    {opp.title}
                  </h3>
                  <p className="text-xs text-[#9AA3B5]/70 line-clamp-1 mt-1 font-mono">
                    {opp.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Opportunity Dossier in Hardware Chassis */}
          <div className="lg:col-span-7 hardware-chassis">
            <div className="hardware-chassis-inner p-6 lg:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/[0.04] text-[#55E6D0] border border-white/[0.08] font-medium uppercase tracking-wider">
                    Opportunity Diagnostic
                  </span>
                  <span className="text-xs font-mono text-[#9AA3B5]">
                    ID: {activeOpp.id}
                  </span>
                </div>

                <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F5F6FA] mb-1">
                  {activeOpp.title}
                </h2>
                <p className="text-xs font-mono text-[#F4BD67] mb-5">
                  {activeOpp.tagline}
                </p>

                {/* Stakeholders involved */}
                <div className="mb-5">
                  <span className="text-[11px] font-mono uppercase text-[#9AA3B5] font-semibold block mb-2">
                    Affected Stakeholders
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeOpp.affectedStakeholders.map((s, idx) => (
                      <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded bg-[#090B10] text-[#F5F6FA] border border-white/[0.06]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3 Detail Sections - Editorial Layout */}
                <div className="space-y-5 pt-5 border-t border-white/[0.06] text-xs">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#F4BD67] font-semibold block mb-1">
                      Potential Problem & Structural Gap
                    </span>
                    <p className="text-[#9AA3B5] leading-relaxed mb-2">
                      {activeOpp.potentialProblem}
                    </p>
                    <p className="text-[#F5F6FA] font-mono text-[11px] bg-white/[0.02] p-2.5 rounded-lg border border-white/[0.04]">
                      <strong className="text-[#F4BD67]">Choke Point:</strong> {activeOpp.structuralGap}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.04]">
                    <span className="text-[11px] font-mono uppercase text-[#55E6D0] font-semibold block mb-1">
                      Proposed Intervention
                    </span>
                    <p className="text-[#F5F6FA] leading-relaxed mb-2">
                      {activeOpp.possibleIntervention}
                    </p>
                    <p className="text-[#9AA3B5] font-mono text-[11px]">
                      <strong>Audit Evidence Required:</strong> {activeOpp.evidenceRequired}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.04]">
                    <span className="text-[11px] font-mono uppercase text-[#55E6D0] font-semibold block mb-1">
                      Target Measured Outcome
                    </span>
                    <p className="text-[#F5F6FA] font-medium leading-relaxed mb-2">
                      {activeOpp.targetOutcome}
                    </p>
                    <p className="text-[#F4BD67] font-mono text-[11px]">
                      <strong>Risks & Boundary Assumptions:</strong> {activeOpp.risksAndAssumptions}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-[#9AA3B5] font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#55E6D0] animate-pulse" />
                  Candidate for Pilot Coalition
                </span>
                <button
                  onClick={() => onNavigate('/join')}
                  className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#55E6D0] text-[#090B10] font-mono font-medium text-xs shadow-[0_0_16px_rgba(85,230,208,0.2)] hover:shadow-[0_0_24px_rgba(85,230,208,0.35)] transition-all duration-300 ease-spring active:scale-[0.98]"
                >
                  <span>Express Pilot Interest</span>
                  <span className="w-4 h-4 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-spring">
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
