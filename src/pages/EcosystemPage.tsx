import React, { useState } from 'react';
import { ECOSYSTEM_SECTORS, CROSS_SECTOR_CHAINS, REGIONAL_ECOSYSTEM_DATA } from '../data/ecosystemData';
import { 
  Compass, 
  Search, 
  ChevronRight, 
  ArrowRight
} from 'lucide-react';

export const EcosystemPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSector, setActiveSector] = useState(ECOSYSTEM_SECTORS[0]);
  const [activeTab, setActiveTab] = useState<'sectors' | 'chains' | 'regions'>('sectors');

  const categories = ['All', 'Core Content', 'Interactive Media', 'Production & Technical', 'Distribution & Digital', 'Experience & Physical', 'Workforce & Talent', 'Commercial & Capital', 'Broadcast & Media'];

  const filteredSectors = ECOSYSTEM_SECTORS.filter(s => {
    const matchesCategory = selectedCategory === 'All' || s.category === selectedCategory;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.stakeholders.some(st => st.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#090B10] text-[#F5F6FA] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Clean, Quiet */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#55E6D0] font-semibold block mb-3">
            System Taxonomy
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#F5F6FA] leading-tight mb-4">
            Ecosystem Explorer
          </h1>

          <p className="text-base text-[#9AA3B5] leading-relaxed">
            Navigate the 26 interconnected sectors, multi-tier supply chains, and linguistic hubs that define modern Indian entertainment.
          </p>
        </div>

        {/* View Switcher Tabs - Clean */}
        <div className="flex items-center gap-1.5 mb-8 p-1 rounded-lg bg-[#0E121B] border border-white/[0.06] w-fit">
          <button
            onClick={() => setActiveTab('sectors')}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-md transition-all ${
              activeTab === 'sectors' 
                ? 'bg-white/10 text-[#55E6D0] font-medium' 
                : 'text-[#9AA3B5] hover:text-[#F5F6FA]'
            }`}
          >
            26 Primary Sectors
          </button>
          <button
            onClick={() => setActiveTab('chains')}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-md transition-all ${
              activeTab === 'chains' 
                ? 'bg-white/10 text-[#55E6D0] font-medium' 
                : 'text-[#9AA3B5] hover:text-[#F5F6FA]'
            }`}
          >
            Cross-Sector Chains
          </button>
          <button
            onClick={() => setActiveTab('regions')}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-md transition-all ${
              activeTab === 'regions' 
                ? 'bg-white/10 text-[#55E6D0] font-medium' 
                : 'text-[#9AA3B5] hover:text-[#F5F6FA]'
            }`}
          >
            10 Regional Hubs
          </button>
        </div>

        {/* TAB 1: 26 SECTORS */}
        {activeTab === 'sectors' && (
          <div>
            {/* Filter & Search Bar - Clean, Streamlined */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.06]">
              {/* Category selector */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                <span className="text-[11px] font-mono text-[#9AA3B5] uppercase shrink-0 mr-1">Filter:</span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded text-xs whitespace-nowrap transition-colors ${
                      selectedCategory === cat
                        ? 'bg-white/10 text-[#55E6D0] font-medium'
                        : 'text-[#9AA3B5] hover:text-[#F5F6FA]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative w-full sm:w-60 shrink-0">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#9AA3B5]" />
                <input
                  type="text"
                  placeholder="Filter 26 sectors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#0E121B] border border-white/[0.08] text-xs text-[#F5F6FA] placeholder-[#9AA3B5]/60 focus:outline-none focus:border-white/20"
                />
              </div>
            </div>

            {/* Split Explorer Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Sector List */}
              <div className="lg:col-span-5 max-h-[640px] overflow-y-auto space-y-1 pr-1.5 scrollbar-thin">
                {filteredSectors.map((sector) => {
                  const isSelected = activeSector.id === sector.id;
                  return (
                    <button
                      key={sector.id}
                      onClick={() => setActiveSector(sector)}
                      className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between group ${
                        isSelected
                          ? 'bg-[#0E121B] border-white/20'
                          : 'bg-[#0E121B]/40 border-transparent hover:bg-[#0E121B] hover:border-white/[0.04]'
                      }`}
                    >
                      <div className="pr-2">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className={`text-[11px] font-mono font-medium ${
                            isSelected ? 'text-[#55E6D0]' : 'text-[#9AA3B5]'
                          }`}>
                            {sector.id}
                          </span>
                          <h3 className={`text-xs font-semibold ${
                            isSelected ? 'text-[#F5F6FA]' : 'text-[#9AA3B5] group-hover:text-[#F5F6FA]'
                          }`}>
                            {sector.name}
                          </h3>
                        </div>
                        <span className="text-[11px] text-[#9AA3B5]/60 block line-clamp-1">
                          {sector.category}
                        </span>
                      </div>

                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                        isSelected ? 'text-[#55E6D0] translate-x-0.5' : 'text-white/10 group-hover:text-white/40'
                      }`} />
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Active Sector Deep Inspection */}
              <div className="lg:col-span-7 rounded-xl border border-white/[0.08] bg-[#0E121B] p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#9AA3B5]">
                    <span>{activeSector.category}</span>
                    <span>ID: {activeSector.id}</span>
                  </div>

                  <h2 className="font-display font-bold text-2xl text-[#F5F6FA] mb-2">
                    {activeSector.name}
                  </h2>

                  <p className="text-xs text-[#9AA3B5] leading-relaxed mb-5">
                    {activeSector.description}
                  </p>

                  {/* Regional context */}
                  {activeSector.regionalSignificance && (
                    <div className="mb-6 pl-3.5 py-1 border-l-2 border-[#F4BD67] text-xs">
                      <span className="text-[10px] font-mono uppercase text-[#F4BD67] font-semibold block mb-0.5">
                        Regional Context
                      </span>
                      <p className="text-[#9AA3B5] leading-relaxed">
                        {activeSector.regionalSignificance}
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/[0.06] mb-6">
                    <div>
                      <span className="text-[11px] font-mono uppercase text-[#55E6D0] font-semibold block mb-2">
                        Primary Stakeholders
                      </span>
                      <ul className="text-xs text-[#F5F6FA] space-y-1">
                        {activeSector.stakeholders.map((s, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#55E6D0] mt-0.5">•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase text-[#9B8CFF] font-semibold block mb-2">
                        Connected Industries
                      </span>
                      <ul className="text-xs text-[#F5F6FA] space-y-1">
                        {activeSector.interconnectedSectors.map((s, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#9B8CFF] mt-0.5">•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Friction Points */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="text-[11px] font-mono uppercase text-[#F4BD67] font-semibold block mb-2">
                      Friction Points Under Investigation
                    </span>
                    <ul className="text-xs text-[#9AA3B5] space-y-1.5">
                      {activeSector.sampleProblems.map((prob, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#F4BD67] mt-0.5">•</span>
                          <span>{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#9AA3B5]">
                    Sector {activeSector.id}
                  </span>
                  <button
                    onClick={() => onNavigate('/share-a-problem')}
                    className="text-[#55E6D0] hover:underline flex items-center gap-1"
                  >
                    <span>Report a Problem in this Sector</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: CROSS-SECTOR CHAINS */}
        {activeTab === 'chains' && (
          <div className="space-y-4">
            {CROSS_SECTOR_CHAINS.map((chain) => (
              <div key={chain.id} className="p-6 rounded-xl bg-[#0E121B] border border-white/[0.08]">
                <h3 className="font-display font-semibold text-lg text-[#F5F6FA] mb-3">
                  {chain.title}
                </h3>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {chain.nodes.map((node, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-[#090B10] border border-white/[0.06] text-xs font-mono text-[#F5F6FA]">
                        {node}
                      </span>
                      {i < chain.nodes.length - 1 && (
                        <ChevronRight className="w-3.5 h-3.5 text-[#9AA3B5]/60" />
                      )}
                    </div>
                  ))}
                </div>

                <p className="text-xs text-[#9AA3B5] leading-relaxed mb-4">
                  {chain.description}
                </p>

                <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-[#F4BD67]">
                  <strong>Systemic Bottleneck:</strong> {chain.insight}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: 10 REGIONAL HUBS */}
        {activeTab === 'regions' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {REGIONAL_ECOSYSTEM_DATA.map((reg, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#0E121B] border border-white/[0.08] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2 text-xs font-mono pb-2 border-b border-white/[0.06]">
                    <span className="text-[#55E6D0]">Hub 0{idx + 1}</span>
                    <span className="text-[#9AA3B5]">{reg.languages.join(' · ')}</span>
                  </div>

                  <h3 className="font-display font-semibold text-lg text-[#F5F6FA] my-2">
                    {reg.region}
                  </h3>

                  <p className="text-xs text-[#9AA3B5] leading-relaxed mb-4">
                    {reg.characteristics}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] text-xs">
                  <span className="text-[10px] font-mono uppercase text-[#F4BD67] block mb-0.5">Priority Investigation:</span>
                  <p className="text-[#F5F6FA] text-xs">{reg.investigativeNeed}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
