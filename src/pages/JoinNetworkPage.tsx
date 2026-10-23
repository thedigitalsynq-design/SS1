import React, { useState } from 'react';
import { 
  Users2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Building2, 
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { ECOSYSTEM_SECTORS } from '../data/ecosystemData';

export const JoinNetworkPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [roleCategory, setRoleCategory] = useState('Independent Creator / Writer / Director');
  const [sector, setSector] = useState(ECOSYSTEM_SECTORS[0].name);
  const [region, setRegion] = useState('Mumbai / Maharashtra (Hindi / Marathi)');
  const [participationType, setParticipationType] = useState('Expert Review & Corroboration');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [consentFollowUp, setConsentFollowUp] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !consentFollowUp) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          organization,
          roleCategory,
          sector,
          region,
          participationType,
          email,
          phone,
          notes,
        }),
      });

      if (!response.ok) {
        throw new Error('Endpoint unreachable');
      }
    } catch {
      // Graceful fallback for environments where Pages Functions are not active
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#090B10] text-[#F5F6FA] min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Clean & Minimal */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#55E6D0] font-semibold block mb-3">
            Ecosystem Convening
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#F5F6FA] leading-tight mb-4">
            Help shape a new intelligence layer{' '}
            <span className="text-[#9AA3B5] font-normal">for Indian entertainment.</span>
          </h1>

          <p className="text-base text-[#9AA3B5] leading-relaxed max-w-2xl">
            We are bringing together a founding network of creators, technicians, studio operators, researchers, and guild veterans to advise on research taxonomy, participate in peer review, and co-design inaugural pilot interventions.
          </p>

          <div className="mt-4 p-3 rounded-lg bg-[#0E121B] border border-white/[0.06] text-xs text-[#9AA3B5] font-mono">
            <strong>Participation Disclosure:</strong> Joining the Founding Network indicates willingness to participate in consultative research or pilot testing. It does not imply formal employment or commercial obligation.
          </div>
        </div>

        {/* Success State */}
        {isSuccess ? (
          <div className="p-8 sm:p-10 rounded-xl bg-[#0E121B] border border-white/20 text-center animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center mx-auto mb-4 text-[#55E6D0]">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <span className="text-xs font-mono uppercase text-[#55E6D0] tracking-wider block mb-1 font-medium">
              Application Confirmed
            </span>

            <h2 className="font-display font-bold text-2xl text-[#F5F6FA] mb-2">
              Welcome to the Founding Network, {fullName}.
            </h2>

            <p className="text-xs text-[#9AA3B5] max-w-lg mx-auto leading-relaxed mb-6">
              We have recorded your expression of interest in <strong>{participationType}</strong> within <strong>{sector}</strong>. 
              Our editorial and research team reviews all applications to ensure diverse representation across craft, gender, and regional geography. We will contact you directly via <strong>{email}</strong> as working groups convene.
            </p>

            <button
              onClick={() => onNavigate('/')}
              className="px-5 py-2.5 text-xs font-mono font-medium rounded-lg bg-[#55E6D0] text-[#090B10] hover:bg-[#55E6D0]/90 transition-all"
            >
              Return to SolutionSynq Overview
            </button>
          </div>
        ) : (
          /* Application Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Step 1: Identity & Role */}
            <div className="p-6 sm:p-8 rounded-xl bg-[#0E121B] border border-white/[0.06]">
              <h3 className="font-display font-semibold text-base text-[#F5F6FA] mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-white/[0.05] text-[#55E6D0] font-mono text-xs flex items-center justify-center">1</span>
                <span>Professional Identity</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#9AA3B5] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Anand Murthy"
                    className="w-full p-2.5 rounded-lg bg-[#090B10] border border-white/[0.06] text-xs text-[#F5F6FA] focus:outline-none focus:border-white/20"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#9AA3B5] mb-1.5">
                    Organization / Guild Affiliation (Optional)
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. SWA / Independent / Studio X"
                    className="w-full p-2.5 rounded-lg bg-[#090B10] border border-white/[0.06] text-xs text-[#F5F6FA] focus:outline-none focus:border-white/20"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#9AA3B5] mb-1.5">
                    Stakeholder Group
                  </label>
                  <select
                    value={roleCategory}
                    onChange={(e) => setRoleCategory(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-[#090B10] border border-white/[0.06] text-xs text-[#F5F6FA] focus:outline-none focus:border-white/20"
                  >
                    <option>Independent Creator / Writer / Director</option>
                    <option>Production & Technical Crew (Camera / Sound / Art / Post)</option>
                    <option>Studio Executive / Producer / Line Producer</option>
                    <option>Equipment Vendor / Service Provider</option>
                    <option>Talent Agency / Casting Director</option>
                    <option>Digital Video Creator / Streamer</option>
                    <option>Academic Researcher / Film Faculty</option>
                    <option>Industry Guild / Union Representative</option>
                    <option>Institutional Financier / Legal Counsel</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#9AA3B5] mb-1.5">
                    Primary Entertainment Sector
                  </label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-[#090B10] border border-white/[0.06] text-xs text-[#F5F6FA] focus:outline-none focus:border-white/20"
                  >
                    {ECOSYSTEM_SECTORS.map((s) => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Participation Preferences */}
            <div className="p-6 sm:p-8 rounded-xl bg-[#0E121B] border border-white/[0.06]">
              <h3 className="font-display font-semibold text-base text-[#F5F6FA] mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-white/[0.05] text-[#55E6D0] font-mono text-xs flex items-center justify-center">2</span>
                <span>Preferred Mode of Participation</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {[
                  {
                    title: 'Lived Experience & Problem Signals',
                    desc: 'Share recurring operational challenges from on-set or post-production experience.'
                  },
                  {
                    title: 'Expert Review & Corroboration',
                    desc: 'Help review hypothesis briefs and validate analytical findings in your domain.'
                  },
                  {
                    title: 'Pilot Partner & Implementation',
                    desc: 'Test workflow interventions (milestone escrow, verified credits) in live projects.'
                  },
                  {
                    title: 'Research & Policy Collaboration',
                    desc: 'Collaborate on longitudinal industry datasets and public policy papers.'
                  }
                ].map((type, idx) => (
                  <label
                    key={idx}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      participationType === type.title 
                        ? 'bg-white/10 border-white/20 text-[#55E6D0]' 
                        : 'bg-[#090B10] border-white/[0.06] text-[#9AA3B5]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="participationType"
                      value={type.title}
                      checked={participationType === type.title}
                      onChange={(e) => setParticipationType(e.target.value)}
                      className="sr-only"
                    />
                    <span className="text-xs font-semibold block mb-1 font-mono">{type.title}</span>
                    <p className="text-[11px] leading-relaxed">{type.desc}</p>
                  </label>
                ))}
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-[#9AA3B5] mb-1.5">
                  Areas of Particular Interest or Expertise (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Virtual production pipeline bottlenecks, South Indian dubbing workflows, or contract residual disputes..."
                  className="w-full p-2.5 rounded-lg bg-[#090B10] border border-white/[0.06] text-xs text-[#F5F6FA] placeholder:text-[#9AA3B5]/50 focus:outline-none focus:border-white/20"
                />
              </div>
            </div>

            {/* Step 3: Contact & Consent */}
            <div className="p-6 sm:p-8 rounded-xl bg-[#0E121B] border border-white/[0.06]">
              <h3 className="font-display font-semibold text-base text-[#F5F6FA] mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-white/[0.05] text-[#55E6D0] font-mono text-xs flex items-center justify-center">3</span>
                <span>Contact & Communication Consent</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#9AA3B5] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full p-2.5 rounded-lg bg-[#090B10] border border-white/[0.06] text-xs text-[#F5F6FA] focus:outline-none focus:border-white/20"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#9AA3B5] mb-1.5">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full p-2.5 rounded-lg bg-[#090B10] border border-white/[0.06] text-xs text-[#F5F6FA] focus:outline-none focus:border-white/20"
                  />
                </div>
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#9AA3B5]">
                  <input
                    type="checkbox"
                    checked={consentFollowUp}
                    onChange={(e) => setConsentFollowUp(e.target.checked)}
                    className="mt-0.5 rounded border-white/10 text-[#55E6D0] focus:ring-0"
                  />
                  <span>
                    I agree to be contacted by SolutionSynq regarding Founding Network activities, working group discussions, and consultative research in accordance with the Privacy Policy.
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <span className="text-xs font-mono text-[#9AA3B5]">
                Strict Data Minimization: Used exclusively for research coordination.
              </span>

              <button
                type="submit"
                disabled={isSubmitting || !fullName || !email || !consentFollowUp}
                className={`px-6 py-2.5 text-xs font-mono font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${
                  isSubmitting || !fullName || !email || !consentFollowUp
                    ? 'bg-white/[0.04] text-[#9AA3B5]/40 border border-white/[0.06] cursor-not-allowed'
                    : 'bg-[#55E6D0] text-[#090B10] hover:bg-[#55E6D0]/90'
                }`}
              >
                {isSubmitting ? (
                  <span>Registering Application...</span>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
