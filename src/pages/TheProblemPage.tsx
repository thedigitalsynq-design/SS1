import React, { useState } from 'react';
import { 
  FileQuestion, 
  AlertCircle, 
  GitBranch, 
  Search, 
  HelpCircle, 
  TrendingDown, 
  ArrowRight,
  ArrowUpRight,
  ShieldAlert,
  ChevronRight,
  Layers,
  Network,
  CheckCircle,
  Eye,
  Users2,
  Sparkles,
  Wrench
} from 'lucide-react';

interface ProblemDetail {
  id: string;
  number: string;
  title: string;
  tagline: string;
  explanation: string;
  affectedStakeholders: string[];
  investigationMethod: string;
  strengtheningEvidence: string;
  weakeningEvidence: string;
  potentialIntervention: string;
  interconnectedProblems: string[];
}

const PROBLEM_CATEGORIES: ProblemDetail[] = [
  {
    id: 'prob-frag',
    number: '01',
    title: 'Information Fragmentation',
    tagline: 'Valuable operational knowledge locked across isolated silos',
    explanation: 'Individual workers, production companies, legal counsels, and guilds experience the same systemic breakdowns repeatedly, but their observations remain trapped inside isolated WhatsApp groups and confidential project debriefs.',
    affectedStakeholders: ['Freelance Crew', 'Writers', 'Line Producers', 'Boutique Studios'],
    investigationMethod: 'Cross-project anonymous surveys, standardized timecard analysis, and confidential contract post-mortems across 50+ productions.',
    strengtheningEvidence: 'Documented repetition of identical contract dispute clauses across unrelated production houses over a 24-month window.',
    weakeningEvidence: 'Discovery that major guilds already maintain active, accessible registries that successfully resolve disputes prior to escalation.',
    potentialIntervention: 'A de-identified, consent-based problem intake ontology standardizing problem taxonomies without revealing project identities.',
    interconnectedProblems: ['Knowledge Silos', 'Weak Institutional Memory', 'Repeated Failures']
  },
  {
    id: 'prob-failures',
    number: '02',
    title: 'Repeated Operational Failures',
    tagline: 'Reinventing the wheel and repeating avoidable budget blowouts',
    explanation: 'From sudden shoot cancellations due to missing civic permits to post-production color conform bottlenecks, productions repeatedly stumble over identical logistical obstacles because historical failure records are never preserved.',
    affectedStakeholders: ['Line Producers', 'First ADs', 'Post Supervisors', 'Financiers'],
    investigationMethod: 'Auditing variance reports comparing budgeted schedules vs actual principal photography wrap dates across indie and studio films.',
    strengtheningEvidence: 'Statistical proof that 65% of schedule delays stem from the same 4 preventable procedural oversights.',
    weakeningEvidence: 'Evidence demonstrating that schedule variances are purely caused by force majeure or unpredictable artist availability.',
    potentialIntervention: 'Open-access production pre-flight checklists and digital milestone templates developed collaboratively by guild veterans.',
    interconnectedProblems: ['Information Fragmentation', 'Weak Institutional Memory']
  },
  {
    id: 'prob-talent-mismatch',
    number: '03',
    title: 'Talent & Opportunity Mismatches',
    tagline: 'Underemployed artisans coexisting with chronic studio talent deficits',
    explanation: 'Top-tier animation studios and streaming showrunners struggle to find experienced talent, while hundreds of qualified artists in tier-2/3 cities and regional theatres remain undiscovered due to informal, referral-only hiring.',
    affectedStakeholders: ['Regional Actors', 'VFX Pipeline TDs', 'Sound Engineers', 'Casting Directors'],
    investigationMethod: 'Comparing employment rates and portfolio credentials of regional film institute graduates against open studio job postings.',
    strengtheningEvidence: 'High regional graduate underemployment alongside persistent studio vacancies lasting 90+ days for matching skillsets.',
    weakeningEvidence: 'Demonstration that regional applicants fundamentally fail standardized technical auditions regardless of geographic location.',
    potentialIntervention: 'A peer-verified, verifiable credentials sandbox allowing talent to prove competence on actual production assets.',
    interconnectedProblems: ['Fragmented Opportunity Discovery', 'Uneven Visibility & Representation']
  },
  {
    id: 'prob-silos',
    number: '04',
    title: 'Knowledge Silos Across Sectors & Regions',
    tagline: 'Breakthroughs in one industry never reaching adjacent creative sectors',
    explanation: 'The South Indian film industry has pioneered groundbreaking single-window shoot logistics, while the creator economy excels at real-time audience engagement. Yet knowledge rarely crosses between cinema, gaming, streaming, and regional circuits.',
    affectedStakeholders: ['Regional Producers', 'Game Developers', 'Digital Creators', 'Event Promoters'],
    investigationMethod: 'Qualitative interviews with cross-sector operators measuring awareness of peer practices in adjacent creative verticals.',
    strengtheningEvidence: 'Independent rediscovery of identical workflow solutions 3-5 years after they were already perfected in an adjacent industry.',
    weakeningEvidence: 'Evidence that sector differences (e.g. video games vs live theatre) are too structurally divergent for shared practices to apply.',
    potentialIntervention: 'Cross-sector knowledge transfer playbooks and shared interdisciplinary working groups.',
    interconnectedProblems: ['Information Fragmentation', 'Root-Cause Invisibility']
  },
  {
    id: 'prob-root-invisibility',
    number: '05',
    title: 'Root-Cause Invisibility',
    tagline: 'Treating superficial symptoms while ignoring misaligned incentives',
    explanation: 'When crew payments are delayed or VFX artists are forced into 24-hour crunch shifts, anger is directed at the immediate vendor, obscuring the upstream contractual terms, cash flow dependencies, and lack of milestone escrow that caused the crisis.',
    affectedStakeholders: ['VFX Artists', 'Camera Technicians', 'Small Vendors', 'Studio CFOs'],
    investigationMethod: 'Tracing the financial and deliverable chain backwards from technician invoice default to platform milestone release terms.',
    strengtheningEvidence: 'Documented evidence showing that 80% of vendor payment defaults coincide precisely with delayed broadcast deliverable approvals.',
    weakeningEvidence: 'Data indicating that defaults are primarily driven by deliberate vendor fraud rather than upstream structural delays.',
    potentialIntervention: 'Systemic causal diagnostic briefs and milestone-linked smart payment escrow protocols.',
    interconnectedProblems: ['Information Fragmentation', 'Repeated Failures']
  },
  {
    id: 'prob-memory',
    number: '06',
    title: 'Weak Institutional Memory',
    tagline: 'Hard-won project learning evaporating when teams disband',
    explanation: 'Films and television series operate as temporary project vehicles. When a shoot wraps, the informal learnings, vendor performance records, and risk mitigations disappear, forcing the next project team to start from zero.',
    affectedStakeholders: ['Independent Producers', 'First ADs', 'Guild Representatives', 'Investors'],
    investigationMethod: 'Longitudinal tracking of production teams across successive projects, assessing whether past lessons influenced new budgets.',
    strengtheningEvidence: 'Recurring budget overruns across successive projects led by identical executive leadership.',
    weakeningEvidence: 'Proof that corporate studios maintain active internal debrief databases that demonstrably lower future production risks.',
    potentialIntervention: 'Project retrospective standards and open-access industry post-mortem registries.',
    interconnectedProblems: ['Repeated Failures', 'Information Fragmentation']
  },
  {
    id: 'prob-opp-discovery',
    number: '07',
    title: 'Fragmented Opportunity Discovery',
    tagline: 'Dormant capabilities and unmet cultural needs failing to connect',
    explanation: 'Authors with cinematic book rights, composers with unreleased sync catalogs, and regional theatres with empty midweek morning slots exist concurrently with producers seeking source material and audiences seeking community screenings.',
    affectedStakeholders: ['Authors', 'Composers', 'Single-Screen Exhibitors', 'Diaspora Audiences'],
    investigationMethod: 'Supply-demand mapping between unoptioned literary rights registries and active screenwriting adaptation development desks.',
    strengtheningEvidence: 'Hundreds of award-winning regional books remaining unadapted while studios repeatedly purchase expensive overseas remakes.',
    weakeningEvidence: 'Demonstration that adaptation failure is due to lack of cinematic viability rather than discovery friction.',
    potentialIntervention: 'Decentralized IP adaptation registries and demand-pooling pre-booking mechanisms.',
    interconnectedProblems: ['Talent & Opportunity Mismatches', 'Uneven Visibility & Representation']
  },
  {
    id: 'prob-visibility',
    number: '08',
    title: 'Uneven Visibility & Representation',
    tagline: 'Metropolitan tentpoles commanding 90% of attention and capital',
    explanation: 'High-profile commercial stars and major studios receive disproportionate media and policy focus, while regional technicians, non-metro independent storytellers, and accessibility communities remain structurally marginalized.',
    affectedStakeholders: ['Non-Metro Storytellers', 'Accessibility Advocates', 'Folk Musicians', 'Tribal Performers'],
    investigationMethod: 'Content analysis of national media coverage, policy grants, and multiplex screen allocations categorized by language and craft tier.',
    strengtheningEvidence: 'Over 92% of national trade press coverage and box office analysis dedicated to just 2% of released cinematic titles.',
    weakeningEvidence: 'Evidence demonstrating that regional audiences prefer consuming metropolitan content over localized stories.',
    potentialIntervention: 'An inclusive pan-Indian ecosystem observatory providing equal analytical weight to vernacular and craft communities.',
    interconnectedProblems: ['Talent & Opportunity Mismatches', 'Fragmented Opportunity Discovery']
  }
];

export const TheProblemPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [fragmentationState, setFragmentationState] = useState<'before' | 'after'>('before');
  const [selectedProblemId, setSelectedProblemId] = useState<string>(PROBLEM_CATEGORIES[0].id);

  const activeProblem = PROBLEM_CATEGORIES.find(p => p.id === selectedProblemId) || PROBLEM_CATEGORIES[0];

  return (
    <div className="bg-[#090B10] text-[#F5F6FA] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Minimal, Noise-Free */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#F4BD67] font-semibold block mb-3">
            Structural Diagnosis
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#F5F6FA] leading-tight mb-4">
            The ecosystem has knowledge.{' '}
            <span className="text-[#9AA3B5] font-normal">The challenge is connecting it.</span>
          </h1>

          <p className="text-base text-[#9AA3B5] leading-relaxed mb-6">
            India's entertainment industries are not constrained by a lack of creative talent or market demand, but by structural coordination failures that prevent individual experiences from becoming collective progress.
          </p>

          <div className="p-3 rounded-lg bg-[#0E121B] border border-white/[0.06] text-xs text-[#F4BD67] font-mono">
            <strong>Methodological Note:</strong> These problem dossiers represent empirical hypotheses formulated for systematic investigation, not sweeping generalizations about any single company.
          </div>
        </div>

        {/* SECTION 1: THE FRAGMENTATION PROBLEM (BEFORE VS AFTER & 4 PERSPECTIVES) */}
        <div className="mb-14 hardware-chassis">
          <div className="hardware-chassis-inner p-6 lg:p-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-6 border-b border-white/[0.06]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#55E6D0] font-semibold block mb-1">
                  Systemic Baseline
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-[#F5F6FA]">
                  Connected by Value. Fragmented by Intelligence.
                </h2>
                <p className="text-xs text-[#9AA3B5] mt-1">
                  Compare how different stakeholders experience and understand the exact same underlying problems.
                </p>
              </div>

              {/* Before vs After Switcher - Tactile Hardware Switch */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#090B10] border border-white/[0.08] shrink-0 shadow-inner">
                <button
                  onClick={() => setFragmentationState('before')}
                  className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all duration-200 ease-spring ${
                    fragmentationState === 'before'
                      ? 'bg-white/10 text-[#F4BD67] font-medium shadow-[0_0_12px_rgba(244,189,103,0.15)] border border-white/10'
                      : 'text-[#9AA3B5] hover:text-[#F5F6FA]'
                  }`}
                >
                  Before: Fragmented Silos
                </button>
                <button
                  onClick={() => setFragmentationState('after')}
                  className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all duration-200 ease-spring ${
                    fragmentationState === 'after'
                      ? 'bg-white/10 text-[#55E6D0] font-medium shadow-[0_0_12px_rgba(85,230,208,0.15)] border border-white/10'
                      : 'text-[#9AA3B5] hover:text-[#F5F6FA]'
                  }`}
                >
                  After: Synchronized
                </button>
              </div>
            </div>

            {/* 4 Perspectives Grid - Clean, Calm */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#090B10] border border-white/[0.06] hover:border-white/15 transition-all duration-300 ease-spring flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#9B8CFF] font-semibold block mb-1">01 · Frontlines</span>
                  <h3 className="font-display font-bold text-sm text-[#F5F6FA] mb-1">Those Who Experience</h3>
                  <p className="text-xs text-[#9AA3B5] mb-4">Freelancers, camera crew, writers, background artists, small vendors.</p>
                </div>
                <div className="pt-3 border-t border-white/[0.06] text-xs">
                  {fragmentationState === 'before' ? (
                    <span className="text-[#F4BD67] leading-relaxed block">Pain suffered in isolation; fear of blacklisting; dismissed as isolated bad luck.</span>
                  ) : (
                    <span className="text-[#55E6D0] leading-relaxed block">Protected de-identified reporting; testimonies structured into corroborated evidence.</span>
                  )}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#090B10] border border-white/[0.06] hover:border-white/15 transition-all duration-300 ease-spring flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#55E6D0] font-semibold block mb-1">02 · Diagnosticians</span>
                  <h3 className="font-display font-bold text-sm text-[#F5F6FA] mb-1">Those Who Understand</h3>
                  <p className="text-xs text-[#9AA3B5] mb-4">Line producers, guild arbitrators, legal scholars, veteran operators.</p>
                </div>
                <div className="pt-3 border-t border-white/[0.06] text-xs">
                  {fragmentationState === 'before' ? (
                    <span className="text-[#F4BD67] leading-relaxed block">Recognize recurring patterns across sets, but lack industry-wide data to prove root causes.</span>
                  ) : (
                    <span className="text-[#55E6D0] leading-relaxed block">Access relational ontologies, cross-referenced timesheets, and causal models.</span>
                  )}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#090B10] border border-white/[0.06] hover:border-white/15 transition-all duration-300 ease-spring flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#F4BD67] font-semibold block mb-1">03 · Solvers</span>
                  <h3 className="font-display font-bold text-sm text-[#F5F6FA] mb-1">Those With Capabilities</h3>
                  <p className="text-xs text-[#9AA3B5] mb-4">Fintech escrow rails, verified casting tools, sovereign Indic AI builders.</p>
                </div>
                <div className="pt-3 border-t border-white/[0.06] text-xs">
                  {fragmentationState === 'before' ? (
                    <span className="text-[#F4BD67] leading-relaxed block">Build software in isolation without integration into daily film workflows.</span>
                  ) : (
                    <span className="text-[#55E6D0] leading-relaxed block">Directly matched to validated systemic choke points and willing pilot studios.</span>
                  )}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#090B10] border border-white/[0.06] hover:border-white/15 transition-all duration-300 ease-spring flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#55E6D0] font-semibold block mb-1">04 · Leaders</span>
                  <h3 className="font-display font-bold text-sm text-[#F5F6FA] mb-1">Those Who Can Act</h3>
                  <p className="text-xs text-[#9AA3B5] mb-4">Studio heads, commissioning editors, state film boards, bank underwriters.</p>
                </div>
                <div className="pt-3 border-t border-white/[0.06] text-xs">
                  {fragmentationState === 'before' ? (
                    <span className="text-[#F4BD67] leading-relaxed block">React defensively to crises; lack audited baselines; stalled by bureaucratic blame.</span>
                  ) : (
                    <span className="text-[#55E6D0] leading-relaxed block">Deploy de-risked intervention pilots backed by audited baselines and clear incentives.</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: THE 8 STRUCTURAL PROBLEM CATEGORIES */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase text-[#55E6D0] font-semibold tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#55E6D0] animate-pulse" />
              The 8 Structural Problem Dossiers
            </span>
            <span className="text-xs font-mono text-[#9AA3B5]">
              Select a category to inspect
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {PROBLEM_CATEGORIES.map((prob) => {
              const isSelected = selectedProblemId === prob.id;
              return (
                <button
                  key={prob.id}
                  onClick={() => setSelectedProblemId(prob.id)}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 ease-spring flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#0E121B] border-[#55E6D0]/40 text-[#F5F6FA] shadow-[0_0_20px_rgba(85,230,208,0.1)] -translate-y-0.5'
                      : 'bg-[#090B10] border-white/[0.06] hover:border-white/20 hover:-translate-y-0.5 text-[#9AA3B5] hover:text-[#F5F6FA]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[11px] font-mono font-medium ${isSelected ? 'text-[#55E6D0]' : 'text-[#9AA3B5]'}`}>
                        DOSSIER {prob.number}
                      </span>
                      <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isSelected ? 'bg-[#55E6D0] shadow-[0_0_8px_#55E6D0]' : 'bg-white/20'}`} />
                    </div>
                    <h4 className="font-display font-semibold text-sm text-[#F5F6FA] mb-1">
                      {prob.title}
                    </h4>
                    <p className="text-xs text-[#9AA3B5] line-clamp-2 leading-relaxed">
                      {prob.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Deep Dive Problem Dossier in Hardware Chassis */}
        <div className="hardware-chassis mb-14">
          <div className="hardware-chassis-inner p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#55E6D0] tracking-widest block mb-1">
                  Structural Problem Dossier 0{activeProblem.number}
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F6FA]">
                  {activeProblem.title}
                </h2>
                <p className="text-xs font-mono text-[#F4BD67] mt-1">
                  {activeProblem.tagline}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#9AA3B5] bg-[#090B10] px-3.5 py-1.5 rounded-lg border border-white/[0.08] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#55E6D0] animate-pulse" />
                  Hypothesis Under Investigation
                </span>
              </div>
            </div>

            <p className="text-sm text-[#F5F6FA]/90 leading-relaxed my-6 max-w-4xl">
              {activeProblem.explanation}
            </p>

            {/* 4 Evidence & Method Details - Editorial 2-Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/[0.06] mb-6">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase text-[#55E6D0] font-semibold block mb-2">
                    Stakeholders Most Vulnerable
                  </span>
                  <ul className="text-xs text-[#F5F6FA] space-y-1.5">
                    {activeProblem.affectedStakeholders.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#55E6D0] mt-0.5">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase text-[#9B8CFF] font-semibold block mb-2">
                    Investigation Methodology
                  </span>
                  <p className="text-xs text-[#9AA3B5] leading-relaxed">
                    {activeProblem.investigationMethod}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase text-[#55E6D0] font-semibold block mb-2">
                    What Would Strengthen Hypothesis
                  </span>
                  <p className="text-xs text-[#9AA3B5] leading-relaxed">
                    {activeProblem.strengtheningEvidence}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase text-[#F4BD67] font-semibold block mb-2">
                    What Would Weaken Hypothesis
                  </span>
                  <p className="text-xs text-[#9AA3B5] leading-relaxed">
                    {activeProblem.weakeningEvidence}
                  </p>
                </div>
              </div>
            </div>

            {/* Potential Intervention & Interconnected Nodes - Clean Divider */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase text-[#55E6D0] font-semibold block mb-1">
                  Potential Solution Intervention
                </span>
                <p className="text-xs font-medium text-[#F5F6FA]">
                  {activeProblem.potentialIntervention}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <span className="text-xs font-mono text-[#9AA3B5]">Coupled To:</span>
                <div className="flex flex-wrap gap-1">
                  {activeProblem.interconnectedProblems.map((cp, idx) => (
                    <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-[#9B8CFF] border border-white/[0.06]">
                      {cp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* DIRECT ACTIONABLE OPERATIONAL BRIDGE */}
            <div className="mt-6 p-4 rounded-xl bg-[#55E6D0]/[0.05] border border-[#55E6D0]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#55E6D0]/10 border border-[#55E6D0]/20 flex items-center justify-center text-[#55E6D0] shrink-0">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#F5F6FA]">
                    Need immediate operational protection for this problem?
                  </h4>
                  <p className="text-[11px] text-[#9AA3B5]">
                    Run the broadcast cue-sheet validator, export SWA/IPRS model riders, or check state shoot clearances.
                  </p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/toolkits')}
                className="px-3.5 py-1.5 rounded-lg bg-[#55E6D0] text-[#090B10] font-mono font-medium text-[11px] hover:bg-[#45D0BA] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
              >
                <span>Launch Toolkits</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Gateway to Our Approach in Hardware Chassis with Button-in-Button */}
        <div className="hardware-chassis">
          <div className="hardware-chassis-inner p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-display font-bold text-lg text-[#F5F6FA] mb-1">
                How do we investigate and solve these structural problems?
              </h3>
              <p className="text-xs text-[#9AA3B5]">
                Explore the 8-stage scientific methodology or access everyday operational contracts.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/toolkits')}
                className="px-4 py-2.5 rounded-xl bg-white/[0.04] text-[#F5F6FA] border border-white/[0.1] hover:bg-white/[0.08] font-mono font-medium text-xs transition-colors"
              >
                Operational Toolkits
              </button>

              <button
                onClick={() => onNavigate('/approach')}
                className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#55E6D0] text-[#090B10] font-mono font-medium text-xs shadow-[0_0_20px_rgba(85,230,208,0.2)] hover:shadow-[0_0_28px_rgba(85,230,208,0.35)] transition-all duration-300 ease-spring active:scale-[0.98] shrink-0"
              >
                <span>Explore Our Approach</span>
                <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-spring">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
