import React, { useState } from 'react';
import { 
  FileQuestion, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ArrowUpRight,
  UploadCloud,
  Eye,
  Info,
  Sparkles,
  FileText,
  BadgeAlert
} from 'lucide-react';
import { ECOSYSTEM_SECTORS } from '../data/ecosystemData';

const COMMON_PROBLEM_PILLS = [
  'Delayed or Withheld Invoices (>60 Days)',
  'Missing Cue Attribution / Royalty Leakage',
  'Uncapped Script Revisions / Stalled Milestones',
  'Excessive Hours without Overtime / Turnaround Breaches',
  'Municipal Shoot Permit & Police NOC Delays',
  'Informal Hiring / Blacklisting Threats'
];

export const ShareProblemPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const [problemPill, setProblemPill] = useState(COMMON_PROBLEM_PILLS[0]);
  const [role, setRole] = useState('Camera / Technical Crew');
  const [sector, setSector] = useState(ECOSYSTEM_SECTORS[0].name);
  const [region, setRegion] = useState('Hindi Heartland (Mumbai / Delhi NCR)');
  const [narrative, setNarrative] = useState('');
  const [affectedCount, setAffectedCount] = useState('Entire department / Multiple crew members');
  const [frequency, setFrequency] = useState('Recurring on almost every project');
  const [impactLevel, setImpactLevel] = useState('Severe (Personal financial distress / Health risk)');
  const [evidenceNotes, setEvidenceNotes] = useState('');
  const [confidentialityTier, setConfidentialityTier] = useState('anonymized-research');
  const [consentAcknowledged, setConsentAcknowledged] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSignalId, setSubmittedSignalId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!narrative.trim() || !consentAcknowledged) return;

    setIsSubmitting(true);

    // Simulate cryptographic intake hashing and de-identification
    setTimeout(() => {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      setSubmittedSignalId(`SIG-2026-IND-${randomSuffix}`);
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  return (
    <div className="bg-[#090B10] text-[#F5F6FA] min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Direct, Empathetic & Whistleblower-Protected */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#55E6D0] mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>Whistleblower-Grade De-Identification Protocol</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#F5F6FA] leading-tight mb-4">
            You experience the friction.{' '}
            <span className="text-[#9AA3B5] font-normal">We turn it into verified evidence.</span>
          </h1>

          <p className="text-base text-[#9AA3B5] leading-relaxed max-w-2xl">
            Freelance crew, regional writers, and artists often suffer in silence due to fear of blacklisting. SolutionSynq decouples your personal identity from your testimony to build unassailable, collective proof against systemic breakdowns.
          </p>

          {/* Reassurance Badges */}
          <div className="flex flex-wrap items-center gap-3 mt-4 text-xs font-mono text-[#9AA3B5]">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0E121B] border border-white/[0.06]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#55E6D0]" />
              Zero Name Publication
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0E121B] border border-white/[0.06]">
              <Lock className="w-3.5 h-3.5 text-[#F4BD67]" />
              Cryptographic Signal Hashing
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0E121B] border border-white/[0.06]">
              <BadgeAlert className="w-3.5 h-3.5 text-[#9B8CFF]" />
              FWICE & SWA Mediation Alignment
            </span>
          </div>
        </div>

        {/* If successfully submitted */}
        {submittedSignalId ? (
          <div className="hardware-chassis">
            <div className="hardware-chassis-inner p-8 sm:p-10 text-center animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-[#55E6D0]/10 border border-[#55E6D0]/30 flex items-center justify-center mx-auto mb-4 text-[#55E6D0] shadow-[0_0_24px_rgba(85,230,208,0.2)]">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <span className="text-[10px] font-mono uppercase text-[#55E6D0] tracking-widest block mb-1 font-semibold">
                Testimony Cryptographically De-Identified
              </span>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F6FA] mb-2">
                Problem Signal Registered
              </h2>

              <div className="inline-block px-3.5 py-1.5 rounded-lg bg-[#090B10] border border-white/[0.08] font-mono text-xs text-[#55E6D0] my-3">
                Signal Hash: {submittedSignalId}
              </div>

              <p className="text-xs text-[#9AA3B5] max-w-lg mx-auto leading-relaxed mb-6">
                Your report has been stripped of personal identities, project names, and metadata trails. It has been queued into the Listening Engine to match recurring dispute patterns across peer productions.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmittedSignalId(null);
                    setNarrative('');
                    setActiveStep(1);
                  }}
                  className="px-4 py-2 text-xs font-mono rounded-xl bg-[#090B10] text-[#F5F6FA] border border-white/[0.08] hover:border-white/20 transition-all ease-spring"
                >
                  Submit Another Report
                </button>
                <button
                  onClick={() => onNavigate('/toolkits')}
                  className="group relative inline-flex items-center gap-2 px-5 py-2 text-xs font-mono font-medium rounded-xl bg-[#55E6D0] text-[#090B10] shadow-[0_0_16px_rgba(85,230,208,0.2)] hover:shadow-[0_0_24px_rgba(85,230,208,0.35)] transition-all ease-spring"
                >
                  <span>Access Model Contracts</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Intake Form with Step Navigation */
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Step Navigation Bar */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-[#0E121B] border border-white/[0.08]">
              <button
                type="button"
                onClick={() => setActiveStep(1)}
                className={`flex-1 py-2 text-xs font-mono rounded-lg transition-all ${
                  activeStep === 1 ? 'bg-white/10 text-[#55E6D0] font-semibold' : 'text-[#9AA3B5]'
                }`}
              >
                1. Category & Context
              </button>
              <button
                type="button"
                onClick={() => setActiveStep(2)}
                className={`flex-1 py-2 text-xs font-mono rounded-lg transition-all ${
                  activeStep === 2 ? 'bg-white/10 text-[#55E6D0] font-semibold' : 'text-[#9AA3B5]'
                }`}
              >
                2. Lived Experience
              </button>
              <button
                type="button"
                onClick={() => setActiveStep(3)}
                className={`flex-1 py-2 text-xs font-mono rounded-lg transition-all ${
                  activeStep === 3 ? 'bg-white/10 text-[#55E6D0] font-semibold' : 'text-[#9AA3B5]'
                }`}
              >
                3. Evidence & Protection
              </button>
            </div>

            {/* STEP 1: CATEGORY & CONTEXT */}
            {activeStep === 1 && (
              <div className="hardware-chassis">
                <div className="hardware-chassis-inner p-6 sm:p-8 space-y-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#55E6D0] mb-2 font-semibold">
                      Select Primary Friction Point
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {COMMON_PROBLEM_PILLS.map((pill, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setProblemPill(pill)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono text-left transition-all duration-200 ${
                            problemPill === pill
                              ? 'bg-[#55E6D0]/15 text-[#55E6D0] border border-[#55E6D0]/40 font-medium'
                              : 'bg-[#090B10] text-[#9AA3B5] border border-white/[0.06] hover:border-white/15'
                          }`}
                        >
                          {pill}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4 border-t border-white/[0.06]">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#9AA3B5] mb-1.5">
                        Your Professional Role
                      </label>
                      <select 
                        value={role} 
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-[#090B10] border border-white/[0.08] text-xs text-[#F5F6FA] focus:outline-none focus:border-[#55E6D0]/40"
                      >
                        <option>Camera / Technical Crew</option>
                        <option>Screenwriter / Dialogue Writer</option>
                        <option>Director / Filmmaker</option>
                        <option>Actor / Performer</option>
                        <option>Singer / Composer / Lyricist</option>
                        <option>VFX / Post-Production Artist</option>
                        <option>Line Producer / Production Manager</option>
                        <option>Independent Producer / Boutique Studio</option>
                        <option>Equipment Rental / Vendor</option>
                        <option>Digital Creator / YouTuber</option>
                        <option>Regional Audience / Consumer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#9AA3B5] mb-1.5">
                        Entertainment Sector
                      </label>
                      <select 
                        value={sector} 
                        onChange={(e) => setSector(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-[#090B10] border border-white/[0.08] text-xs text-[#F5F6FA] focus:outline-none focus:border-[#55E6D0]/40"
                      >
                        {ECOSYSTEM_SECTORS.map((s) => (
                          <option key={s.id} value={s.name}>{s.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#9AA3B5] mb-1.5">
                        Region / Language Context
                      </label>
                      <select 
                        value={region} 
                        onChange={(e) => setRegion(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-[#090B10] border border-white/[0.08] text-xs text-[#F5F6FA] focus:outline-none focus:border-[#55E6D0]/40"
                      >
                        <option>Hindi Heartland (Mumbai / Delhi NCR)</option>
                        <option>South India (Telugu / Tollywood)</option>
                        <option>South India (Tamil / Kollywood)</option>
                        <option>South India (Malayalam / Mollywood)</option>
                        <option>South India (Kannada / Sandalwood)</option>
                        <option>Eastern India (Bengali / Tollywood East)</option>
                        <option>Western India (Marathi Cinema & Theatre)</option>
                        <option>Northern India (Punjabi Music & Film)</option>
                        <option>Eastern Vernacular (Bhojpuri / Maithili)</option>
                        <option>Northeast India & Indigenous Languages</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setActiveStep(2)}
                      className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-[#55E6D0] font-mono text-xs flex items-center gap-1.5 transition-all"
                    >
                      <span>Next: Describe What Happened</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: THE LIVED NARRATIVE */}
            {activeStep === 2 && (
              <div className="hardware-chassis">
                <div className="hardware-chassis-inner p-6 sm:p-8 space-y-5">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-[#F5F6FA] mb-1">
                      Describe the Operational Breakdown
                    </h3>
                    <p className="text-xs text-[#9AA3B5] mb-3">
                      Focus on process, contractual milestones, and timeline friction. <strong>Avoid naming individuals</strong> — we corroborate procedural patterns.
                    </p>

                    <textarea
                      rows={5}
                      required
                      value={narrative}
                      onChange={(e) => setNarrative(e.target.value)}
                      placeholder="Example: We wrapped principal photography 90 days ago, but technician milestone payments remain frozen because the broadcaster has not signed off on color deliverables..."
                      className="w-full p-4 rounded-xl bg-[#090B10] border border-white/[0.08] text-xs text-[#F5F6FA] placeholder:text-[#9AA3B5]/40 focus:outline-none focus:border-[#55E6D0]/40 leading-relaxed font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#9AA3B5] mb-1">
                        Who is affected?
                      </label>
                      <select
                        value={affectedCount}
                        onChange={(e) => setAffectedCount(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-[#090B10] border border-white/[0.08] text-xs text-[#F5F6FA]"
                      >
                        <option>Just myself / isolated</option>
                        <option>Entire department / Multiple crew</option>
                        <option>Across multiple vendors / productions</option>
                        <option>Ecosystem-wide condition</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#9AA3B5] mb-1">
                        Frequency
                      </label>
                      <select
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-[#090B10] border border-white/[0.08] text-xs text-[#F5F6FA]"
                      >
                        <option>First time observed</option>
                        <option>Occurs occasionally (1 in 3 projects)</option>
                        <option>Recurring on almost every project</option>
                        <option>Continuous systemic state</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#9AA3B5] mb-1">
                        Severity
                      </label>
                      <select
                        value={impactLevel}
                        onChange={(e) => setImpactLevel(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-[#090B10] border border-white/[0.08] text-xs text-[#F5F6FA]"
                      >
                        <option>Minor friction / Inconvenience</option>
                        <option>Moderate (Wasted hours / Budget variance)</option>
                        <option>Severe (Personal financial distress / Health risk)</option>
                        <option>Critical (Threatens business continuity)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveStep(1)}
                      className="px-4 py-2 rounded-xl bg-white/[0.04] text-[#9AA3B5] font-mono text-xs"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveStep(3)}
                      className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-[#55E6D0] font-mono text-xs flex items-center gap-1.5 transition-all"
                    >
                      <span>Next: Evidence & Protection Tier</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: EVIDENCE & PROTECTION TIER */}
            {activeStep === 3 && (
              <div className="hardware-chassis">
                <div className="hardware-chassis-inner p-6 sm:p-8 space-y-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#55E6D0] mb-1.5 font-semibold">
                      Supporting Documentation Notes (Optional)
                    </label>
                    <input
                      type="text"
                      value={evidenceNotes}
                      onChange={(e) => setEvidenceNotes(e.target.value)}
                      placeholder="e.g. Call sheets, WhatsApp payment promise screenshot, unexecuted deal memo available on request."
                      className="w-full p-3 rounded-xl bg-[#090B10] border border-white/[0.08] text-xs text-[#F5F6FA] placeholder:text-[#9AA3B5]/40 focus:outline-none focus:border-[#55E6D0]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#F4BD67] mb-2 font-semibold">
                      Select Confidentiality Protection Tier
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <label className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        confidentialityTier === 'anonymized-research' ? 'bg-[#0E121B] border-[#55E6D0]/40 text-[#55E6D0] shadow-[0_0_16px_rgba(85,230,208,0.1)]' : 'bg-[#090B10] border-white/[0.06] text-[#9AA3B5]'
                      }`}>
                        <input 
                          type="radio" 
                          name="confidentiality" 
                          value="anonymized-research"
                          checked={confidentialityTier === 'anonymized-research'}
                          onChange={(e) => setConfidentialityTier(e.target.value)}
                          className="sr-only" 
                        />
                        <span className="text-xs font-semibold block mb-1 font-mono text-[#F5F6FA]">Tier 1: Research Index</span>
                        <p className="text-[11px] leading-relaxed">Aggregated into public anonymous industry variance reports.</p>
                      </label>

                      <label className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        confidentialityTier === 'researcher-eyes-only' ? 'bg-[#0E121B] border-[#55E6D0]/40 text-[#55E6D0] shadow-[0_0_16px_rgba(85,230,208,0.1)]' : 'bg-[#090B10] border-white/[0.06] text-[#9AA3B5]'
                      }`}>
                        <input 
                          type="radio" 
                          name="confidentiality" 
                          value="researcher-eyes-only"
                          checked={confidentialityTier === 'researcher-eyes-only'}
                          onChange={(e) => setConfidentialityTier(e.target.value)}
                          className="sr-only" 
                        />
                        <span className="text-xs font-semibold block mb-1 font-mono text-[#F5F6FA]">Tier 2: Guild Mediation</span>
                        <p className="text-[11px] leading-relaxed">Shared solely with designated union legal counsel for collective dispute action.</p>
                      </label>

                      <label className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        confidentialityTier === 'aggregate-only' ? 'bg-[#0E121B] border-[#55E6D0]/40 text-[#55E6D0] shadow-[0_0_16px_rgba(85,230,208,0.1)]' : 'bg-[#090B10] border-white/[0.06] text-[#9AA3B5]'
                      }`}>
                        <input 
                          type="radio" 
                          name="confidentiality" 
                          value="aggregate-only"
                          checked={confidentialityTier === 'aggregate-only'}
                          onChange={(e) => setConfidentialityTier(e.target.value)}
                          className="sr-only" 
                        />
                        <span className="text-xs font-semibold block mb-1 font-mono text-[#F5F6FA]">Tier 3: Absolute Blind Hash</span>
                        <p className="text-[11px] leading-relaxed">Increments systemic frequency counters only. Raw text discarded after verification.</p>
                      </label>
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer text-xs text-[#9AA3B5] p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                      <input 
                        type="checkbox" 
                        checked={consentAcknowledged} 
                        onChange={(e) => setConsentAcknowledged(e.target.checked)}
                        className="mt-0.5 rounded border-white/20 text-[#55E6D0] focus:ring-0" 
                      />
                      <span>
                        I confirm this report reflects authentic lived or observed experience in the Indian entertainment sector. I authorize SolutionSynq to analyze this signal under the selected confidentiality tier.
                      </span>
                    </label>
                  </div>

                  {/* Submission CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
                    <button
                      type="button"
                      onClick={() => setActiveStep(2)}
                      className="px-4 py-2 rounded-xl bg-white/[0.04] text-[#9AA3B5] font-mono text-xs"
                    >
                      ← Back
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting || !consentAcknowledged || !narrative.trim()}
                      className={`group relative inline-flex items-center gap-2.5 px-6 py-2.5 text-xs font-mono font-medium rounded-xl transition-all duration-300 ease-spring active:scale-[0.98] ${
                        isSubmitting || !consentAcknowledged || !narrative.trim()
                          ? 'bg-white/[0.04] text-[#9AA3B5]/40 border border-white/[0.06] cursor-not-allowed'
                          : 'bg-[#55E6D0] text-[#090B10] shadow-[0_0_20px_rgba(85,230,208,0.2)] hover:shadow-[0_0_28px_rgba(85,230,208,0.35)]'
                      }`}
                    >
                      {isSubmitting ? (
                        <span>Registering Cryptographic Signal...</span>
                      ) : (
                        <>
                          <span>Submit De-Identified Signal</span>
                          <span className="w-4 h-4 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-spring">
                            <ArrowUpRight className="w-3 h-3" />
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}

          </form>
        )}

      </div>
    </div>
  );
};
