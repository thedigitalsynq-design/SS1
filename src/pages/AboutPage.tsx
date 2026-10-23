import React from 'react';
import { 
  ShieldCheck, 
  Heart, 
  Globe2, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  CheckCircle,
  FileText,
  Lock,
  Compass
} from 'lucide-react';

export const AboutPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const GUIDING_PRINCIPLES = [
    { num: '01', title: 'Start with real problems', desc: 'We never invent theoretical software tools looking for problems. We start exclusively from documented, lived stakeholder friction.' },
    { num: '02', title: 'Preserve cultural and regional context', desc: 'A payment bottleneck in a Hindi TV production differs fundamentally from screen allocation for a Marathi indie play. Context is never flattened.' },
    { num: '03', title: 'Separate evidence from assumptions', desc: 'An isolated complaint is not a statistical trend; correlation is not causation; allegations are not proven findings. Epistemology is paramount.' },
    { num: '04', title: 'Connect stakeholders fairly', desc: 'We bridge creators, technicians, studios, and capital without allowing corporate power or celebrity status to silence frontline voices.' },
    { num: '05', title: 'Respect privacy and consent by default', desc: 'Every data point is collected under explicit, granular consent. Zero re-identification risk protects vulnerable freelance contributors.' },
    { num: '06', title: 'Measure outcomes against audited baselines', desc: 'We measure success not by vanity metrics or app downloads, but by tangible real-world improvements in payment days, safety, and rights attribution.' },
    { num: '07', title: 'Learn openly from failure', desc: 'When a pilot intervention fails to achieve its target outcome, the failure is documented and published openly to prevent future waste.' },
    { num: '08', title: 'Preserve linguistic & cultural diversity', desc: 'India’s 22 official languages and regional storytelling heritages are treated as core sovereign assets to be empowered, not homogenized.' },
    { num: '09', title: 'Make intelligence actionable', desc: 'Knowledge is not compiled for academic prestige or passive dashboards; it is synthesized into practical pilot coalitions and standard operating procedures.' },
    { num: '10', title: 'Expand only when evidence supports it', desc: 'We scale responsibly across sectors and regions only after underlying causal mechanisms and pilot interventions have been verified.' }
  ];

  return (
    <div className="bg-[#090B10] text-[#F5F6FA] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Clean & Minimal */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#55E6D0] font-semibold block mb-3">
            Mission & Epistemology
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#F5F6FA] leading-tight mb-4">
            An ecosystem that learns together{' '}
            <span className="text-[#9AA3B5] font-normal">can solve problems differently.</span>
          </h1>

          <p className="text-base text-[#9AA3B5] leading-relaxed">
            SolutionSynq was conceived around a simple yet transformative conviction: valuable experience, solvable problems, useful knowledge, and meaningful capabilities should not remain permanently disconnected from the people who could benefit from them.
          </p>
        </div>

        {/* Core Narrative Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
          
          <div className="p-6 lg:p-8 rounded-xl bg-[#0E121B] border border-white/[0.06]">
            <span className="text-xs font-mono uppercase text-[#55E6D0] font-semibold block mb-2">
              The Fundamental Why
            </span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F5F6FA] mb-3">
              Why SolutionSynq Exists
            </h2>
            <p className="text-xs text-[#9AA3B5] leading-relaxed mb-3">
              The Indian entertainment ecosystem generates extraordinary artistic and commercial value. Yet behind the box office numbers and streaming subscriber milestones lies an industry wrestling with recurring payment defaults, opaque royalty tracking, grueling working conditions, and exhibition gatekeeping.
            </p>
            <p className="text-xs text-[#9AA3B5] leading-relaxed">
              These are not failures of creative talent. They are coordination failures born of extreme information fragmentation. SolutionSynq exists to build the missing intelligence and coordination layer that connects problems to solvers.
            </p>
          </div>

          <div className="p-6 lg:p-8 rounded-xl bg-[#0E121B] border border-white/[0.06]">
            <span className="text-xs font-mono uppercase text-[#9B8CFF] font-semibold block mb-2">
              The Initial Context
            </span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F5F6FA] mb-3">
              Why India First?
            </h2>
            <p className="text-xs text-[#9AA3B5] leading-relaxed mb-3">
              India is the world's most linguistically complex, culturally vibrant, and high-volume entertainment landscape. Spanning Bollywood, Tollywood, Kollywood, Mollywood, Kannada, Bengali, Marathi, Punjabi, Bhojpuri, and an explosive creator economy, it represents the ultimate crucible for collective problem intelligence.
            </p>
            <p className="text-xs text-[#9AA3B5] leading-relaxed">
              If an intelligence infrastructure can successfully solve coordination breakdowns across India's regional and linguistic diversity, its principles will be adaptable to creative ecosystems worldwide.
            </p>
          </div>

        </div>

        {/* Roadmap: What We Are Building Now vs Future Ambition */}
        <div className="rounded-xl border border-white/[0.06] bg-[#0E121B] p-6 lg:p-8 mb-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/[0.06] gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-[#F4BD67] tracking-wider block mb-1">
                Honest Product Roadmap
              </span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F5F6FA]">
                What We Are Building Now vs. Long-Term Ambitions
              </h2>
            </div>
            <span className="text-xs font-mono text-[#9AA3B5] bg-[#090B10] px-3 py-1.5 rounded-md border border-white/[0.06]">
              Transparent Commitments
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-lg bg-[#090B10] border border-white/[0.06]">
              <span className="text-xs font-mono uppercase text-[#55E6D0] font-medium block mb-3">
                Phase 1: In Active Development Now
              </span>
              <ul className="text-xs text-[#9AA3B5] space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#55E6D0] shrink-0 mt-0.5" />
                  <span><strong>Qualitative Intake Terminal:</strong> Multilingual secure intake channels for confidential freelancer and guild problem reporting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#55E6D0] shrink-0 mt-0.5" />
                  <span><strong>Ecosystem Ontology Schema:</strong> Structuring 26 sector taxonomies, roles, and recurring operational bottlenecks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#55E6D0] shrink-0 mt-0.5" />
                  <span><strong>Founding Network Convening:</strong> Engaging inaugural cohort of independent line producers, legal scholars, and guild arbitrators.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-[#090B10] border border-white/[0.06]">
              <span className="text-xs font-mono uppercase text-[#9AA3B5] font-medium block mb-3">
                Phase 2: Long-Term Category Ambitions
              </span>
              <ul className="text-xs text-[#9AA3B5] space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#9AA3B5] font-bold mt-0.5">•</span>
                  <span><strong>Production Escrow Protocols:</strong> Standardized milestone payment automation reducing crew payables to under 14 days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9AA3B5] font-bold mt-0.5">•</span>
                  <span><strong>Verified Talent Credentialing:</strong> Decentralized craft credential registry breaking regional hiring gatekeeping.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9AA3B5] font-bold mt-0.5">•</span>
                  <span><strong>Institutional Completion Bonding:</strong> Risk diagnostics enabling commercial bank underwriting for mid-budget Indian cinema.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 10 GUIDING PRINCIPLES */}
        <div className="rounded-xl border border-white/[0.06] bg-[#0E121B] p-6 lg:p-8 mb-14">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase text-[#55E6D0] tracking-wider block mb-1 font-semibold">
              Constitutional Framework
            </span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F5F6FA]">
              The 10 Guiding Principles
            </h2>
            <p className="text-xs text-[#9AA3B5] mt-1">
              The non-negotiable ethical and operational values guiding every investigation, relationship, and intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {GUIDING_PRINCIPLES.map((p) => (
              <div key={p.num} className="p-4 rounded-lg bg-[#090B10] border border-white/[0.06] flex items-start gap-3.5">
                <span className="text-sm font-mono font-bold text-[#55E6D0] shrink-0 mt-0.5">
                  {p.num}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-sm text-[#F5F6FA] mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#9AA3B5] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Gateway to Participate */}
        <div className="p-6 lg:p-8 rounded-xl bg-[#0E121B] border border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h3 className="font-display font-bold text-lg text-[#F5F6FA] mb-1">
              Help shape this infrastructure from the ground up
            </h3>
            <p className="text-xs text-[#9AA3B5]">
              Join independent creators, technicians, and industry leaders in the SolutionSynq Founding Network.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/join')}
            className="px-5 py-2.5 text-xs font-mono font-medium rounded-lg bg-[#55E6D0] text-[#090B10] hover:bg-[#55E6D0]/90 transition-all flex items-center gap-2 shrink-0"
          >
            <span>Join Founding Network</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
