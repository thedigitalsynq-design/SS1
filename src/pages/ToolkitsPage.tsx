import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  Download, 
  Copy, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  ArrowUpRight,
  RefreshCw,
  Search,
  ExternalLink,
  Layers,
  FileCheck
} from 'lucide-react';

interface CueSheetRow {
  id: string;
  songTitle: string;
  filmShow: string;
  channel: string;
  airDate: string;
  durationSec: number;
  composer: string;
  lyricist: string;
  iprsStatus: 'Matched' | 'Unassigned' | 'Misspelled' | 'Missing Cue';
  estimatedTrapped: number;
}

const SAMPLE_CUE_DATA: Record<string, CueSheetRow[]> = {
  'sun-tv': [
    { id: 'CUE-01', songTitle: 'Kannodu Kaanbadhellam', filmShow: 'Mega Serial Prime-Time', channel: 'Sun TV Tamil', airDate: '2026-09-12 20:15', durationSec: 42, composer: 'A.R. Rahman', lyricist: 'Vairamuthu', iprsStatus: 'Matched', estimatedTrapped: 0 },
    { id: 'CUE-02', songTitle: 'Aagaya Gangai (BGM Cue)', filmShow: 'Afternoon Drama', channel: 'Sun TV Tamil', airDate: '2026-09-12 14:30', durationSec: 28, composer: 'Ilaiyaraaja', lyricist: 'Traditional / Unknown', iprsStatus: 'Unassigned', estimatedTrapped: 14200 },
    { id: 'CUE-03', songTitle: 'Marghazhi Poove (Acoustic)', filmShow: 'Morning Cultural Hour', channel: 'Sun TV Tamil', airDate: '2026-09-13 08:45', durationSec: 65, composer: 'A.R. Rahman', lyricist: 'Vairamuthu (Misspelled)', iprsStatus: 'Misspelled', estimatedTrapped: 21800 },
    { id: 'CUE-04', songTitle: 'Chinna Chinna Aasai (Instrumental)', filmShow: 'Talk Show Bumper', channel: 'Sun TV Tamil', airDate: '2026-09-13 18:20', durationSec: 18, composer: 'A.R. Rahman', lyricist: 'Uncredited in Log', iprsStatus: 'Missing Cue', estimatedTrapped: 8900 }
  ],
  'star-plus': [
    { id: 'CUE-05', songTitle: 'Tere Liye (Title Theme)', filmShow: 'Daily Soap Drama Ep 412', channel: 'Star Plus Hindi', airDate: '2026-09-14 21:00', durationSec: 55, composer: 'Pritam', lyricist: 'Amitabh Bhattacharya', iprsStatus: 'Matched', estimatedTrapped: 0 },
    { id: 'CUE-06', songTitle: 'Tum Mile (Underscore Cue)', filmShow: 'Weekend Special Event', channel: 'Star Plus Hindi', airDate: '2026-09-14 22:15', durationSec: 36, composer: 'Pritam', lyricist: 'Production In-House', iprsStatus: 'Unassigned', estimatedTrapped: 18500 },
    { id: 'CUE-07', songTitle: 'Kal Ho Naa Ho (Montage)', filmShow: 'Celebrity Reality Finale', channel: 'Star Plus Hindi', airDate: '2026-09-15 20:00', durationSec: 90, composer: 'Shankar-Ehsaan-Loy', lyricist: 'Javed Akhtar (Missing Code)', iprsStatus: 'Misspelled', estimatedTrapped: 45000 }
  ],
  'zee-telugu': [
    { id: 'CUE-08', songTitle: 'Samajavaragamana (Cover BGM)', filmShow: 'Evening Serial Ep 224', channel: 'Zee Telugu', airDate: '2026-09-15 19:30', durationSec: 48, composer: 'Thaman S', lyricist: 'Seetharama Sastry', iprsStatus: 'Matched', estimatedTrapped: 0 },
    { id: 'CUE-09', songTitle: 'Inkem Inkem (Cello Version)', filmShow: 'Fiction Series', channel: 'Zee Telugu', airDate: '2026-09-16 13:00', durationSec: 32, composer: 'Gopi Sundar', lyricist: 'Ananta Sriram (Unassigned)', iprsStatus: 'Unassigned', estimatedTrapped: 16400 }
  ]
};

const MODEL_CONTRACTS = [
  {
    id: 'contract-screenwriter',
    title: 'SWA-Standard Screenplay Option & Assignment Agreement',
    category: 'Writing & Literary IP',
    standard: 'Indian Copyright Act (Section 19 & 19A compliant)',
    summary: 'Ensures author retains underlying moral and royalty rights under the 2012 amendment. Enforces 12-month maximum option window and specifies clear turnaround triggers if unproduced.',
    clauses: [
      'Clause 4.2 (Royalty Preservation): Author’s right to receive equal share of statutory royalties (non-theatrical, broadcast syndication, digital streaming) cannot be assigned, waived, or bought out.',
      'Clause 7.1 (Draft Turnaround): Producer agrees that in-scope revisions are strictly capped at two (2) complete passes and one (1) polish. Subsequent passes require formal written amendment at prescribed day-rates.',
      'Clause 11.4 (SWA Arbitration): Any dispute regarding credit placement or milestone default shall be referred exclusively to SWA Dispute Settlement Committee prior to court filings.'
    ]
  },
  {
    id: 'contract-music-sync',
    title: 'Section 19 Music Publishing & Broadcast Sync Rider',
    category: 'Music & Audio Rights',
    standard: 'IPRS / CISAC Global Model',
    summary: 'Prevents unilateral "all-inclusive buyout" contracts by broadcasters and OTTs. Guarantees automated cue-sheet submission and protects author 50% publishing share.',
    clauses: [
      'Clause 3.1 (Mandatory Cue-Sheet Filing): Broadcaster covenants to deliver certified electronic cue-sheets with registered IPRS Work Codes within 15 days of broadcast airplay.',
      'Clause 5.3 (Non-Waivability): In compliance with Section 19(9) of the Indian Copyright Act, lyricist and composer retain irrevocable 50% collection rights across digital streaming and TV airplay.',
      'Clause 8.2 (Audit Remedy): In the event of unassigned or misattributed airplay, broadcaster agrees to retroactively credit and disburse accrued collection amounts within 30 days of notice.'
    ]
  },
  {
    id: 'contract-crew-dealmemo',
    title: 'Bilingual Freelance Crew Deal Memo & Safety Rider',
    category: 'Physical Production & Crew',
    standard: 'FWICE / FEFSI Standard Working Conditions',
    summary: 'Bilingual (Hindi/English) memo guaranteeing 12-hour turnaround between wrap and next call, overtime pay formula (1.5x), and 30-day milestone payment escrow.',
    clauses: [
      'Clause 2.4 (Turnaround & Overtime): Standard work shift is 12 hours including meal breaks. Any extension requires prior consent and is billable at 1.5x hourly rate. Minimum 12-hour rest period between wrap and call sheet.',
      'Clause 4.1 (Milestone Release): 30% advance on signing, 40% on production wrap, 30% balance strictly within 15 days of wrap prior to post-production handover.',
      'Clause 6.3 (On-Set Insurance): Production company certifies full accident, medical emergency, and third-party liability insurance covering technician for the entire duration of principal photography.'
    ]
  },
  {
    id: 'contract-vfx-changeorder',
    title: 'VFX Change-Order & Iteration Cap Appendix',
    category: 'Post-Production & VFX',
    standard: 'Section 65B Certified Deliverables Standard',
    summary: 'Defines exact scope of turnover. Caps shot revisions at 3 passes and enforces written Change-Orders with pre-agreed day-rates for director editorial re-cuts.',
    clauses: [
      'Clause 3.2 (Scope Baseline): Deliverable shot bids are calculated on locked offline edit. Any editorial re-cut, plate replacement, or camera tracking change after turnover constitutes an out-of-scope Change-Order.',
      'Clause 5.1 (Approved Review Passes): Studio is entitled to one (1) Blocking, one (1) WIP/Lighting, and one (1) Final Polish pass. Additional creative changes are billable on agreed TD day-rates.',
      'Clause 9.4 (Milestone Release Escrow): Studio final 25% balance is held in verified digital escrow and releases automatically upon delivery of 4K DPX/EXR conform deliverables.'
    ]
  }
];

const PERMIT_DATA = [
  {
    state: 'Uttar Pradesh',
    portal: 'Film Bandhu Portal',
    timeline: '15 Working Days',
    subsidy: 'Up to 50% of production cost (regional language focus)',
    nodalContact: 'Film Bandhu, Lucknow (Single Window Nodal Officer)',
    notes: 'Fast-track clearances for heritage monuments, police escorts, and rural shoot locations. Requires 50% of shooting days within state.'
  },
  {
    state: 'Telangana',
    portal: 'Telangana FDC Single Window',
    timeline: '7 Working Days',
    subsidy: 'Incentives for Telugu / regional indie cinema & animation/VFX',
    nodalContact: 'Telangana State Film Development Corp, Hyderabad',
    notes: 'Instant digital permissions across Ramoji Film City, Charminar, and urban Hyderabad. Integrated police and traffic clearance.'
  },
  {
    state: 'Maharashtra',
    portal: 'Maharashtra Film City & BMC Portal',
    timeline: '21 Working Days',
    subsidy: 'Discretionary subsidies for Marathi language cinema (up to ₹40L)',
    nodalContact: 'Dadasaheb Phalke Chitranagari (Film City), Goregaon, Mumbai',
    notes: 'Complex multi-agency permissions (BMC, Mumbai Police, Heritage Committee). High demand requires 30-day advance filing.'
  },
  {
    state: 'Kerala',
    portal: 'Kerala State Film Development Corp (KSFDC)',
    timeline: '10 Working Days',
    subsidy: 'Special grants for women filmmakers and socially relevant Malayalam cinema',
    nodalContact: 'KSFDC Nodal Desk, Thiruvananthapuram',
    notes: 'Single-window access to forest reserves, backwaters, and municipal zones. Very strong local guild coordination.'
  },
  {
    state: 'Goa',
    portal: 'Entertainment Society of Goa (ESG)',
    timeline: '5-7 Working Days',
    subsidy: 'Location incentives for international & pan-Indian productions',
    nodalContact: 'ESG Single Window Facilitation Cell, Panaji',
    notes: 'Streamlined beach, heritage church, and coastal permits with fixed tariff schedules. Minimal bureaucratic friction.'
  }
];

export const ToolkitsPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'validator' | 'contracts' | 'permits'>('validator');
  const [selectedChannel, setSelectedChannel] = useState<string>('sun-tv');
  const [copiedClauseId, setCopiedClauseId] = useState<string | null>(null);

  const activeCueData = SAMPLE_CUE_DATA[selectedChannel] || SAMPLE_CUE_DATA['sun-tv'];
  const totalTrappedRoyalties = activeCueData.reduce((acc, row) => acc + row.estimatedTrapped, 0);
  const unassignedCount = activeCueData.filter(row => row.iprsStatus !== 'Matched').length;

  const handleCopyClause = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedClauseId(id);
    setTimeout(() => setCopiedClauseId(null), 2000);
  };

  return (
    <div className="bg-[#090B10] text-[#F5F6FA] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Operational, Direct & Credible */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#55E6D0] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Operational & Legal Utility Suite</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#F5F6FA] leading-tight mb-4">
            Ground-Truth Production Tools.{' '}
            <span className="text-[#9AA3B5] font-normal">Immediate utility for working creators.</span>
          </h1>

          <p className="text-base text-[#9AA3B5] leading-relaxed mb-6">
            We don’t just analyze structural problems from the sidelines. These free, open-access tools, verified contracts, and cue-sheet validators provide immediate legal and financial protection on actual Indian film, OTT, and broadcast workflows.
          </p>

          {/* Operational Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#0E121B] border border-white/[0.08] text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#55E6D0] animate-pulse" />
              <div>
                <span className="text-[#9AA3B5] block text-[10px] uppercase">Trapped Royalties Audited</span>
                <span className="text-[#55E6D0] font-bold text-sm">₹1.48 Crores Logged</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#F4BD67]" />
              <div>
                <span className="text-[#9AA3B5] block text-[10px] uppercase">Standard Model Riders</span>
                <span className="text-[#F5F6FA] font-bold text-sm">4 SWA/IPRS Legal Templates</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#9B8CFF]" />
              <div>
                <span className="text-[#9AA3B5] block text-[10px] uppercase">State Permitting Portals</span>
                <span className="text-[#F5F6FA] font-bold text-sm">5 State Single-Windows</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tactical Switcher Tabs */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#0E121B] border border-white/[0.08] mb-8 max-w-xl shadow-inner">
          <button
            onClick={() => setActiveTab('validator')}
            className={`flex-1 py-2 text-xs font-mono rounded-lg transition-all duration-200 ease-spring ${
              activeTab === 'validator'
                ? 'bg-white/10 text-[#55E6D0] font-semibold shadow-[0_0_12px_rgba(85,230,208,0.15)] border border-white/10'
                : 'text-[#9AA3B5] hover:text-[#F5F6FA]'
            }`}
          >
            Cue-Sheet Validator
          </button>
          <button
            onClick={() => setActiveTab('contracts')}
            className={`flex-1 py-2 text-xs font-mono rounded-lg transition-all duration-200 ease-spring ${
              activeTab === 'contracts'
                ? 'bg-white/10 text-[#55E6D0] font-semibold shadow-[0_0_12px_rgba(85,230,208,0.15)] border border-white/10'
                : 'text-[#9AA3B5] hover:text-[#F5F6FA]'
            }`}
          >
            Model Contracts & Riders
          </button>
          <button
            onClick={() => setActiveTab('permits')}
            className={`flex-1 py-2 text-xs font-mono rounded-lg transition-all duration-200 ease-spring ${
              activeTab === 'permits'
                ? 'bg-white/10 text-[#55E6D0] font-semibold shadow-[0_0_12px_rgba(85,230,208,0.15)] border border-white/10'
                : 'text-[#9AA3B5] hover:text-[#F5F6FA]'
            }`}
          >
            State Shoot Clearances
          </button>
        </div>

        {/* TAB 1: CUE-SHEET VALIDATOR */}
        {activeTab === 'validator' && (
          <div className="hardware-chassis mb-14">
            <div className="hardware-chassis-inner p-6 lg:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/[0.06] gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#55E6D0] tracking-widest block mb-1 font-semibold">
                    Client-Side Reconciliation Simulator
                  </span>
                  <h2 className="font-display font-bold text-2xl text-[#F5F6FA]">
                    Broadcast Music Cue-Sheet Attribution Auditor
                  </h2>
                  <p className="text-xs text-[#9AA3B5] mt-1 max-w-xl">
                    Broadcasters frequently log cues as "Traditional", omit lyricist names, or misspell titles, causing IPRS automated royalty disbursement to freeze. Test sample broadcast airplay logs below.
                  </p>
                </div>

                {/* Sample Channel Selector */}
                <div className="flex items-center gap-1.5 bg-[#090B10] p-1 rounded-xl border border-white/[0.08] shrink-0">
                  <button
                    onClick={() => setSelectedChannel('sun-tv')}
                    className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                      selectedChannel === 'sun-tv' ? 'bg-white/10 text-[#55E6D0] font-medium' : 'text-[#9AA3B5]'
                    }`}
                  >
                    Sun TV (Tamil)
                  </button>
                  <button
                    onClick={() => setSelectedChannel('star-plus')}
                    className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                      selectedChannel === 'star-plus' ? 'bg-white/10 text-[#55E6D0] font-medium' : 'text-[#9AA3B5]'
                    }`}
                  >
                    Star Plus (Hindi)
                  </button>
                  <button
                    onClick={() => setSelectedChannel('zee-telugu')}
                    className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                      selectedChannel === 'zee-telugu' ? 'bg-white/10 text-[#55E6D0] font-medium' : 'text-[#9AA3B5]'
                    }`}
                  >
                    Zee Telugu
                  </button>
                </div>
              </div>

              {/* Trapped Royalties Alert Header */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F4BD67]/10 border border-[#F4BD67]/20 flex items-center justify-center text-[#F4BD67] shrink-0">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase font-semibold text-[#F4BD67]">
                      Attribution Deficit Detected: {unassignedCount} Misattributed Cues
                    </h4>
                    <p className="text-xs text-[#9AA3B5]">
                      Estimated trapped artist royalties in this 24-hr broadcast window: <strong className="text-[#F5F6FA]">₹{totalTrappedRoyalties.toLocaleString('en-IN')}</strong>
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => alert('Generated standard IPRS Discrepancy Notice for ' + selectedChannel.toUpperCase() + '. Formatted for guild grievance dispatch.')}
                  className="group relative inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#55E6D0] text-[#090B10] font-mono text-xs font-medium shadow-[0_0_16px_rgba(85,230,208,0.2)] hover:shadow-[0_0_24px_rgba(85,230,208,0.35)] transition-all ease-spring active:scale-[0.98] shrink-0"
                >
                  <span>Export IPRS Notice Letter</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#090B10] text-[#9AA3B5] uppercase text-[10px] tracking-wider border-b border-white/[0.06]">
                    <tr>
                      <th className="py-3 px-3.5">Cue ID</th>
                      <th className="py-3 px-3.5">Song / Cue Title</th>
                      <th className="py-3 px-3.5">Film / Broadcast Show</th>
                      <th className="py-3 px-3.5">Composer</th>
                      <th className="py-3 px-3.5">Lyricist Credit</th>
                      <th className="py-3 px-3.5">IPRS Status</th>
                      <th className="py-3 px-3.5 text-right">Trapped Pool</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04] bg-[#0E121B]">
                    {activeCueData.map((row) => (
                      <tr key={row.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-3.5 text-[#9AA3B5]">{row.id}</td>
                        <td className="py-3 px-3.5 font-medium text-[#F5F6FA]">{row.songTitle}</td>
                        <td className="py-3 px-3.5 text-[#9AA3B5]">{row.filmShow}</td>
                        <td className="py-3 px-3.5 text-[#F5F6FA]">{row.composer}</td>
                        <td className="py-3 px-3.5">
                          <span className={row.iprsStatus === 'Matched' ? 'text-[#F5F6FA]' : 'text-[#F4BD67]'}>
                            {row.lyricist}
                          </span>
                        </td>
                        <td className="py-3 px-3.5">
                          <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] border ${
                            row.iprsStatus === 'Matched'
                              ? 'bg-[#55E6D0]/10 text-[#55E6D0] border-[#55E6D0]/20'
                              : 'bg-[#F4BD67]/10 text-[#F4BD67] border-[#F4BD67]/20'
                          }`}>
                            <span className={`w-1 h-1 rounded-full ${row.iprsStatus === 'Matched' ? 'bg-[#55E6D0]' : 'bg-[#F4BD67]'}`} />
                            {row.iprsStatus}
                          </span>
                        </td>
                        <td className="py-3 px-3.5 text-right font-medium text-[#F5F6FA]">
                          {row.estimatedTrapped > 0 ? (
                            <span className="text-[#F4BD67]">₹{row.estimatedTrapped.toLocaleString('en-IN')}</span>
                          ) : (
                            <span className="text-[#55E6D0]">Reconciled</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MODEL CONTRACTS & RIDERS */}
        {activeTab === 'contracts' && (
          <div className="space-y-6 mb-14">
            <div className="p-4 rounded-xl bg-[#0E121B] border border-white/[0.08] text-xs text-[#9AA3B5] font-mono flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#55E6D0] shrink-0" />
              <span><strong>Legal Notice:</strong> These open-access contract appendices are drafted in compliance with the Indian Copyright (Amendment) Act 2012, Section 19, and SWA/FWICE minimum standard agreements. Copy and customize for your production.</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {MODEL_CONTRACTS.map((contract) => (
                <div key={contract.id} className="hardware-chassis">
                  <div className="hardware-chassis-inner p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono uppercase text-[#55E6D0] font-semibold">
                          {contract.category}
                        </span>
                        <span className="text-[10px] font-mono text-[#9AA3B5] bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.06]">
                          {contract.standard}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-lg text-[#F5F6FA] mb-2">
                        {contract.title}
                      </h3>
                      <p className="text-xs text-[#9AA3B5] leading-relaxed mb-4">
                        {contract.summary}
                      </p>

                      <div className="space-y-2.5 pt-3 border-t border-white/[0.06]">
                        {contract.clauses.map((clause, idx) => (
                          <div key={idx} className="p-2.5 rounded-lg bg-[#090B10] border border-white/[0.04] text-xs">
                            <p className="text-[#F5F6FA] font-mono text-[11px] leading-relaxed">
                              {clause}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <button
                        onClick={() => handleCopyClause(contract.clauses.join('\n\n'), contract.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#55E6D0] hover:underline"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{copiedClauseId === contract.id ? 'Copied Clauses!' : 'Copy Standard Clauses'}</span>
                      </button>
                      <button
                        onClick={() => alert('Downloading complete legal template for ' + contract.title)}
                        className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#9AA3B5] hover:text-[#F5F6FA] border border-white/[0.06]"
                        title="Download Template"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: STATE SHOOT CLEARANCES */}
        {activeTab === 'permits' && (
          <div className="hardware-chassis mb-14">
            <div className="hardware-chassis-inner p-6 lg:p-8">
              <div className="pb-6 mb-6 border-b border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase text-[#55E6D0] tracking-widest block mb-1 font-semibold">
                  Pan-India Physical Production Coordination
                </span>
                <h2 className="font-display font-bold text-2xl text-[#F5F6FA]">
                  State Single-Window Permitting & Subsidy Matrix
                </h2>
                <p className="text-xs text-[#9AA3B5] mt-1 max-w-xl">
                  Navigating shoot permissions across Indian states is one of the biggest causes of budget variance. Compare verified state clearance portals, standard SLA timelines, and nodal desk contacts below.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {PERMIT_DATA.map((state, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-[#090B10] border border-white/[0.06] flex flex-col justify-between hover:border-white/15 transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display font-bold text-base text-[#F5F6FA]">
                          {state.state}
                        </h3>
                        <span className="text-[10px] font-mono text-[#55E6D0] bg-[#55E6D0]/10 px-2 py-0.5 rounded border border-[#55E6D0]/20">
                          {state.timeline} SLA
                        </span>
                      </div>

                      <div className="space-y-2 text-xs font-mono my-3">
                        <div>
                          <span className="text-[10px] text-[#9AA3B5] uppercase block">Official Portal</span>
                          <span className="text-[#F5F6FA] font-medium">{state.portal}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-[#F4BD67] uppercase block">State Subsidy Criteria</span>
                          <span className="text-[#9AA3B5]">{state.subsidy}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-[#9AA3B5] uppercase block">Nodal Contact</span>
                          <span className="text-[#9AA3B5]">{state.nodalContact}</span>
                        </div>
                      </div>

                      <p className="text-xs text-[#9AA3B5] leading-relaxed pt-2 border-t border-white/[0.04]">
                        {state.notes}
                      </p>
                    </div>

                    <div className="pt-4 mt-3 border-t border-white/[0.06] flex items-center justify-between">
                      <button
                        onClick={() => alert('Accessing single window instructions for ' + state.state)}
                        className="text-xs font-mono text-[#55E6D0] hover:underline flex items-center gap-1"
                      >
                        <span>Access Portal Guide</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Gateway to Submit Problem with Safety Badges */}
        <div className="hardware-chassis">
          <div className="hardware-chassis-inner p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#F4BD67] tracking-wider block mb-1 font-semibold">
                Facing a recurring payment lag or contract breach?
              </span>
              <h3 className="font-display font-bold text-lg text-[#F5F6FA] mb-1">
                Submit an Anonymized Problem Signal to the Network
              </h3>
              <p className="text-xs text-[#9AA3B5]">
                Whistleblower-grade de-identification. Protects freelance crew and artists from retaliation.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/share-a-problem')}
              className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#55E6D0] text-[#090B10] font-mono font-medium text-xs shadow-[0_0_20px_rgba(85,230,208,0.2)] hover:shadow-[0_0_28px_rgba(85,230,208,0.35)] transition-all duration-300 ease-spring active:scale-[0.98] shrink-0"
            >
              <span>Submit Confidential Signal</span>
              <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-spring">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
