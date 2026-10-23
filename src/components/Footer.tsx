import React from 'react';
import { Network, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090B10] border-t border-white/[0.06] text-[#9AA3B5] pt-14 pb-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-3">
            <button 
              onClick={() => handleNav('/')}
              className="flex items-center gap-2 text-left"
            >
              <div className="w-7 h-7 rounded-lg bg-[#0E121B] border border-white/10 flex items-center justify-center text-[#55E6D0]">
                <Network className="w-3.5 h-3.5" />
              </div>
              <span className="font-display font-bold text-lg text-[#F5F6FA] tracking-tight">
                Solution<span className="text-[#55E6D0]">Synq</span>
              </span>
            </button>

            <p className="text-xs text-[#9AA3B5] leading-relaxed max-w-sm">
              The Problem Intelligence and Solution Coordination Layer for the Indian Entertainment Ecosystem.
            </p>

            <p className="text-[11px] font-mono text-[#55E6D0]">
              Connect Problems. Synchronize Solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#F5F6FA] font-medium">
              System
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => handleNav('/')} className="hover:text-[#F5F6FA] transition-colors">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/problem')} className="hover:text-[#F5F6FA] transition-colors">
                  The Problem
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/approach')} className="hover:text-[#F5F6FA] transition-colors">
                  Our Approach
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/ecosystem')} className="hover:text-[#F5F6FA] transition-colors">
                  Ecosystem Explorer
                </button>
              </li>
            </ul>
          </div>

          {/* Infrastructure Links */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#F5F6FA] font-medium">
              Intelligence
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => handleNav('/stakeholders')} className="hover:text-[#F5F6FA] transition-colors">
                  Stakeholders & Value
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/intelligence')} className="hover:text-[#F5F6FA] transition-colors">
                  Intelligence System
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/opportunities')} className="hover:text-[#F5F6FA] transition-colors">
                  Opportunities
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/about')} className="hover:text-[#F5F6FA] transition-colors">
                  About SolutionSynq
                </button>
              </li>
            </ul>
          </div>

          {/* Action Links */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#F5F6FA] font-medium">
              Participation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => handleNav('/share-a-problem')} className="text-[#F4BD67] hover:underline flex items-center gap-1">
                  <span>Share a Problem</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/join')} className="text-[#55E6D0] hover:underline flex items-center gap-1">
                  <span>Join Founding Network</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono text-[#9AA3B5]">
          <span>© {new Date().getFullYear()} SolutionSynq. Built for India's Entertainment Ecosystem.</span>

          <div className="flex items-center gap-5">
            <button onClick={() => handleNav('/about')} className="hover:text-[#F5F6FA]">
              Governance & Principles
            </button>
            <button onClick={() => handleNav('/about')} className="hover:text-[#F5F6FA]">
              Privacy & Consent
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
