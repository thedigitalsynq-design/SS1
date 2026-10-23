import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  X, 
  ArrowRight, 
  FileSpreadsheet, 
  Scale, 
  MapPin, 
  AlertCircle, 
  Layers, 
  Compass, 
  Sparkles, 
  Users2,
  FileCode,
  Shield,
  Activity
} from 'lucide-react';

interface CommandItem {
  id: string;
  title: string;
  category: 'Toolkit' | 'Problem' | 'Methodology' | 'Ecosystem' | 'Action';
  description: string;
  path: string;
  icon: React.ReactNode;
  shortcut?: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

const COMMANDS: CommandItem[] = [
  // Toolkits
  {
    id: 'cue-sheet',
    title: 'Broadcast Cue-Sheet Validator',
    category: 'Toolkit',
    description: 'Audit unassigned cues, detect trapped royalties across regional channels.',
    path: '/toolkits',
    icon: <FileSpreadsheet className="w-4 h-4 text-[#55E6D0]" />,
    shortcut: 'T1'
  },
  {
    id: 'contracts',
    title: 'Model Contracts & Riders',
    category: 'Toolkit',
    description: 'Download SWA option agreements, Section 19 sync riders & crew deal memos.',
    path: '/toolkits',
    icon: <Scale className="w-4 h-4 text-[#9B8CFF]" />,
    shortcut: 'T2'
  },
  {
    id: 'permits',
    title: 'Pan-India Shoot Clearance Matrix',
    category: 'Toolkit',
    description: 'SLA turnaround, nodal officers, and single-window permits across 5 states.',
    path: '/toolkits',
    icon: <MapPin className="w-4 h-4 text-[#F4BD67]" />,
    shortcut: 'T3'
  },
  
  // Problems
  {
    id: 'prob-rights',
    title: 'Problem 01: Rights, Licensing & Value Leakage',
    category: 'Problem',
    description: 'Unaccounted secondary royalties and fragmented music publishing tracking.',
    path: '/problem',
    icon: <AlertCircle className="w-4 h-4 text-[#55E6D0]" />
  },
  {
    id: 'prob-payment',
    title: 'Problem 05: Payment & Cash Flow Fragility',
    category: 'Problem',
    description: 'Unregulated 90-180 day settlement delays threatening freelance safety.',
    path: '/problem',
    icon: <AlertCircle className="w-4 h-4 text-[#F4BD67]" />
  },
  {
    id: 'prob-discovery',
    title: 'Problem 02: Fragmented Opportunity Discovery',
    category: 'Problem',
    description: 'High gatekeeping, informal whisper networks, and opaque greenlight channels.',
    path: '/problem',
    icon: <AlertCircle className="w-4 h-4 text-[#9B8CFF]" />
  },
  
  // Methodology & Intel
  {
    id: 'approach-8stages',
    title: '8-Stage Scientific Investigation Pipeline',
    category: 'Methodology',
    description: 'From symptom identification through empirical triangulation to institutional intervention.',
    path: '/approach',
    icon: <Compass className="w-4 h-4 text-[#55E6D0]" />
  },
  {
    id: 'intelligence-engines',
    title: 'The 6 Connected Intelligence Engines',
    category: 'Methodology',
    description: 'Deep dive into Signal Intake, Triangulation, Root Cause, and Intervention engines.',
    path: '/intelligence',
    icon: <Layers className="w-4 h-4 text-[#9B8CFF]" />
  },
  {
    id: 'stakeholders-matrix',
    title: 'Stakeholder Perspectives & Value Matrix',
    category: 'Ecosystem',
    description: 'Tailored value proposition across 6 industry groups and 8 beneficiary classes.',
    path: '/stakeholders',
    icon: <Users2 className="w-4 h-4 text-[#F4BD67]" />
  },
  {
    id: 'opportunities-lib',
    title: 'The 10 Opportunity Domains',
    category: 'Ecosystem',
    description: 'Empirically validated structural gaps ready for coordinated solutions.',
    path: '/opportunities',
    icon: <Sparkles className="w-4 h-4 text-[#55E6D0]" />
  },

  // Actions
  {
    id: 'action-share',
    title: 'Submit a Structural Trade Problem',
    category: 'Action',
    description: 'Whistleblower-grade intake with cryptographic pseudonymity and legal protections.',
    path: '/share-a-problem',
    icon: <Shield className="w-4 h-4 text-[#F4BD67]" />,
    shortcut: 'P'
  },
  {
    id: 'action-join',
    title: 'Join the Coordination Network',
    category: 'Action',
    description: 'Collaborate as a researcher, industry contributor, or institutional partner.',
    path: '/join',
    icon: <Activity className="w-4 h-4 text-[#55E6D0]" />,
    shortcut: 'J'
  }
];

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCommands = COMMANDS.filter(cmd => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.description.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          onNavigate(filteredCommands[selectedIndex].path);
          onClose();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onNavigate, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog with Double Bezel Hardware Finish */}
      <div className="relative w-full max-w-2xl hardware-chassis shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-10 animate-in zoom-in-95 duration-200">
        <div className="hardware-chassis-inner overflow-hidden flex flex-col max-h-[80vh]">
          
          {/* Search Header */}
          <div className="p-4 border-b border-white/[0.08] flex items-center gap-3 bg-[#090B10]">
            <Search className="w-5 h-5 text-[#55E6D0] shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tools, problem dossiers, model contracts, methodologies..."
              className="w-full bg-transparent text-[#F5F6FA] placeholder-[#5E6778] text-sm focus:outline-none font-sans"
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="p-1 rounded-md text-[#9AA3B5] hover:text-[#F5F6FA] hover:bg-white/[0.05]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <div className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-[10px] font-mono text-[#9AA3B5]">
              ESC
            </div>
          </div>

          {/* Categories Quick Filter */}
          <div className="px-4 py-2 border-b border-white/[0.04] bg-[#0E121B] flex items-center gap-2 overflow-x-auto text-[11px] font-mono text-[#9AA3B5]">
            <span className="text-[#5E6778]">Quick Filter:</span>
            {['All', 'Toolkit', 'Problem', 'Methodology', 'Action'].map((cat) => (
              <button
                key={cat}
                onClick={() => setQuery(cat === 'All' ? '' : cat)}
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  (cat === 'All' && !query) || query.toLowerCase() === cat.toLowerCase()
                    ? 'bg-[#55E6D0]/15 text-[#55E6D0] border border-[#55E6D0]/30'
                    : 'hover:text-[#F5F6FA] hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div className="overflow-y-auto p-2 space-y-1 divide-y divide-white/[0.02]">
            {filteredCommands.length === 0 ? (
              <div className="py-12 text-center text-[#9AA3B5]">
                <p className="text-sm">No matching commands or tools found for "{query}".</p>
                <p className="text-xs text-[#5E6778] mt-1">Try searching for "cue-sheet", "contracts", "royalties", or "permits".</p>
              </div>
            ) : (
              filteredCommands.map((cmd, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <div
                    key={cmd.id}
                    onClick={() => {
                      onNavigate(cmd.path);
                      onClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`p-3 rounded-xl cursor-pointer transition-all flex items-center justify-between group ${
                      isSelected 
                        ? 'bg-white/[0.08] border border-[#55E6D0]/30 shadow-sm' 
                        : 'hover:bg-white/[0.04] border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                        isSelected 
                          ? 'bg-[#090B10] border-[#55E6D0]/40' 
                          : 'bg-white/[0.02] border-white/[0.06]'
                      }`}>
                        {cmd.icon}
                      </div>

                      <div className="truncate">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-semibold ${
                            isSelected ? 'text-[#55E6D0]' : 'text-[#F5F6FA]'
                          }`}>
                            {cmd.title}
                          </span>
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/[0.04] text-[#9AA3B5] border border-white/[0.06]">
                            {cmd.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#9AA3B5] truncate mt-0.5">
                          {cmd.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-3">
                      {cmd.shortcut && (
                        <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[9px] font-mono text-[#9AA3B5]">
                          {cmd.shortcut}
                        </span>
                      )}
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${
                        isSelected 
                          ? 'text-[#55E6D0] translate-x-0.5' 
                          : 'text-white/20'
                      }`} />
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Navigation Hints */}
          <div className="p-3 border-t border-white/[0.06] bg-[#090B10] flex items-center justify-between text-[11px] font-mono text-[#5E6778]">
            <div className="flex items-center gap-3">
              <span><kbd className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-[#9AA3B5]">↑↓</kbd> Navigate</span>
              <span><kbd className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-[#9AA3B5]">↵</kbd> Select</span>
            </div>
            <span>SolutionSynq OS Intelligence</span>
          </div>

        </div>
      </div>
    </div>
  );
};
