import React, { useState } from 'react';
import { STAKEHOLDER_GROUPS } from '../data/stakeholderData';
import { 
  Users2, 
  Sparkles, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck,
  Building2,
  Heart
} from 'lucide-react';

export const StakeholdersPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [selectedStakeholder, setSelectedStakeholder] = useState(STAKEHOLDER_GROUPS[0]);

  return (
    <div className="bg-[#090B10] text-[#F5F6FA] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Clean, Noise-Free */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9B8CFF] font-semibold block mb-3">
            Human-Centered Architecture
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#F5F6FA] leading-tight mb-4">
            Built around everyone who makes{' '}
            <span className="text-[#9AA3B5] font-normal">entertainment possible.</span>
          </h1>

          <p className="text-base text-[#9AA3B5] leading-relaxed">
            SolutionSynq is designed to serve the entire creative supply chain — from freelance technicians and line producers to studios and audiences. Explore contributions, friction points, and unlocked capabilities across 6 major stakeholder cohorts.
          </p>
        </div>

        {/* SECTION 1: THE FOUNDATIONAL INDEPENDENCE PRINCIPLE */}
        <div className="p-6 lg:p-8 rounded-xl bg-[#0E121B] border border-white/[0.06] mb-14">
          <span className="text-xs font-mono uppercase text-[#55E6D0] tracking-wider block mb-2 font-semibold">
            Foundational Independence Principle
          </span>
          <blockquote className="text-base sm:text-lg md:text-xl font-display font-medium text-[#F5F6FA] italic max-w-4xl leading-relaxed">
            “The person contributing information, the person benefiting from an insight, and the organization paying for a solution may be different.”
          </blockquote>
          <p className="text-xs text-[#9AA3B5] mt-2">
            SolutionSynq protects contributor trust and integrity unconditionally, regardless of how solutions are funded.
          </p>
        </div>

        {/* SECTION 2: STAKEHOLDER PERSPECTIVES EXPLORER */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-white/[0.06] gap-3">
            <span className="text-xs font-mono uppercase text-[#55E6D0] font-semibold">
              Select Stakeholder Cohort
            </span>
            <div className="flex flex-wrap gap-1.5">
              {STAKEHOLDER_GROUPS.map((group) => (
                <button
                  key={group.id}
                  onClick={() => setSelectedStakeholder(group)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all ${
                    selectedStakeholder.id === group.id
                      ? 'bg-white/10 text-[#55E6D0] font-medium'
                      : 'text-[#9AA3B5] hover:text-[#F5F6FA]'
                  }`}
                >
                  {group.name.split('&')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Deep-Dive Card */}
          <div className="rounded-xl border border-white/[0.06] bg-[#0E121B] p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div>
                <span className="text-xs font-mono uppercase text-[#55E6D0] tracking-wider block mb-1">
                  Stakeholder Cohort · {selectedStakeholder.category.toUpperCase()}
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F6FA]">
                  {selectedStakeholder.name}
                </h3>
              </div>
              <span className="text-xs font-mono text-[#9AA3B5] bg-[#090B10] px-3 py-1.5 rounded-md border border-white/[0.06]">
                {selectedStakeholder.roles.length} Documented Roles
              </span>
            </div>

            {/* Sub-Roles Pill Cloud */}
            <div className="py-4 border-b border-white/[0.06]">
              <span className="text-[11px] font-mono text-[#9AA3B5] uppercase tracking-wider block mb-2 font-semibold">
                Representative Roles
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedStakeholder.roles.map((role, idx) => (
                  <span key={idx} className="text-xs font-mono px-2 py-0.5 rounded bg-[#090B10] text-[#F5F6FA] border border-white/[0.06]">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* 4 Dimension Columns - Editorial Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
              <div>
                <h4 className="text-xs font-mono uppercase text-[#55E6D0] font-semibold mb-3 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  What They Contribute
                </h4>
                <ul className="text-xs text-[#9AA3B5] space-y-2">
                  {selectedStakeholder.contributions.map((c, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#55E6D0] mt-0.5">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-[#F4BD67] font-semibold mb-3 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Problems To Investigate
                </h4>
                <ul className="text-xs text-[#9AA3B5] space-y-2">
                  {selectedStakeholder.investigativeProblemAreas.map((p, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#F4BD67] mt-0.5">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-[#9B8CFF] font-semibold mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Capabilities Offered
                </h4>
                <ul className="text-xs text-[#9AA3B5] space-y-2">
                  {selectedStakeholder.capabilitiesOffered.map((cap, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#9B8CFF] mt-0.5">•</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-[#55E6D0] font-semibold mb-3 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  How SolutionSynq Benefits
                </h4>
                <ul className="text-xs text-[#F5F6FA] space-y-2">
                  {selectedStakeholder.solutionSynqBenefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#55E6D0] mt-0.5">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Related Stakeholders */}
            <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between text-xs gap-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[#9AA3B5]">Connected Interdependencies:</span>
                <div className="flex flex-wrap gap-1">
                  {selectedStakeholder.relatedStakeholders.map((r, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-white/[0.04] text-[#55E6D0] font-mono text-[11px] border border-white/[0.06]">
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <span className="text-[11px] font-mono text-[#9AA3B5]/60">
                Lived Experience × Systemic Coordination
              </span>
            </div>
          </div>
        </div>

        {/* SECTION 3: 8-STAKEHOLDER VALUE DISTRIBUTION MATRIX */}
        <div className="rounded-xl border border-white/[0.06] bg-[#0E121B] p-6 lg:p-8 mb-14">
          <div className="mb-6">
            <span className="text-xs font-mono uppercase text-[#55E6D0] font-semibold block mb-1">
              Value Calibration
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F6FA]">
              One Shared Intelligence Layer. Different Forms of Value.
            </h3>
            <p className="text-xs text-[#9AA3B5] mt-1">
              How different participants across the ecosystem realize distinct, proportional benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {[
              { title: 'Individuals & Freelancers', benefit: 'Better access to systemic problem visibility, fair baseline contracting benchmarks, and verified credit portability.' },
              { title: 'Creators & Boutiques', benefit: 'Better-informed pre-production decisions, operational learning from peers, and verified partner discovery.' },
              { title: 'Small Vendors & Rental Houses', benefit: 'Improved cash-flow visibility, reduced invoice default risks, and insight into recurring workflow bottlenecks.' },
              { title: 'Platforms & Enterprise Studios', benefit: 'Aggregated industry intelligence, reduced budget blowout variances, and coordinated systemic improvement pilots.' },
              { title: 'Audiences & Communities', benefit: 'Direct visibility into cultural accessibility barriers, affordable screenings, and localized diaspora programming.' },
              { title: 'Associations & Craft Guilds', benefit: 'Evidence-backed negotiation priorities, objective wage benchmarking, and evaluated welfare initiatives.' },
              { title: 'Investors & Financiers', benefit: 'Clearer operational assumptions, completion risk governance frameworks, and lower project risk premiums.' },
              { title: 'Researchers & Policymakers', benefit: 'Traceable longitudinal datasets, contextualized regional evidence, and targeted cultural policy interventions.' }
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-[#090B10] border border-white/[0.06] flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-semibold text-sm text-[#F5F6FA] mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#9AA3B5] leading-relaxed">
                    {item.benefit}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-white/[0.04] text-[10px] font-mono text-[#55E6D0]">
                  Targeted Value Realization
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Gateway */}
        <div className="p-6 lg:p-8 rounded-xl bg-[#0E121B] border border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h3 className="font-display font-bold text-lg text-[#F5F6FA] mb-1">
              Want to contribute your perspective as a stakeholder?
            </h3>
            <p className="text-xs text-[#9AA3B5]">
              Share an unaddressed operational breakdown or join our founding network cohort.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => onNavigate('/share-a-problem')}
              className="px-4 py-2 text-xs font-mono rounded-lg bg-[#090B10] text-[#F4BD67] border border-white/[0.08] hover:border-white/20 transition-all"
            >
              Share a Problem
            </button>
            <button
              onClick={() => onNavigate('/join')}
              className="px-4 py-2 text-xs font-mono font-medium rounded-lg bg-[#55E6D0] text-[#090B10] hover:bg-[#55E6D0]/90 transition-all"
            >
              Join Network
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
