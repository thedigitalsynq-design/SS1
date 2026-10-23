import React, { useState, useEffect } from 'react';
import { 
  Network, 
  Menu, 
  X, 
  ArrowRight,
  Search
} from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Problem', path: '/problem' },
    { label: 'Approach', path: '/approach' },
    { label: 'Toolkits', path: '/toolkits' },
    { label: 'Ecosystem', path: '/ecosystem' },
    { label: 'Stakeholders', path: '/stakeholders' },
    { label: 'Intelligence', path: '/intelligence' },
    { label: 'Opportunities', path: '/opportunities' },
    { label: 'About', path: '/about' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 px-3 sm:px-6 pointer-events-none">
      <div 
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 pointer-events-auto px-4 sm:px-5 py-2.5 flex items-center justify-between border ${
          isScrolled 
            ? 'bg-[#0E121B]/90 backdrop-blur-2xl border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)]' 
            : 'bg-[#090B10]/85 backdrop-blur-xl border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.4)]'
        }`}
      >
        
        {/* Brand with subtle live telemetry */}
        <button 
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-2.5 group text-left focus:outline-none"
          aria-label="SolutionSynq Homepage"
        >
          <div className="w-7 h-7 rounded-lg bg-[#090B10] border border-white/10 flex items-center justify-center text-[#55E6D0] group-hover:border-[#55E6D0]/50 transition-colors">
            <Network className="w-3.5 h-3.5" />
          </div>
          
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-base tracking-tight text-[#F5F6FA]">
              Solution<span className="text-[#55E6D0]">Synq</span>
            </span>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.05] text-[9px] font-mono text-[#9AA3B5]">
              <span className="flex items-end gap-0.5 h-2.5">
                <span className="w-0.5 h-1.5 bg-[#55E6D0] rounded-full animate-pulse" />
                <span className="w-0.5 h-2.5 bg-[#55E6D0] rounded-full animate-pulse [animation-delay:150ms]" />
                <span className="w-0.5 h-2 bg-[#55E6D0] rounded-full animate-pulse [animation-delay:300ms]" />
              </span>
              <span>LIVE INTEL</span>
            </div>
          </div>
        </button>

        {/* Desktop Navigation - Refined Segmented Capsules */}
        <nav className="hidden lg:flex items-center gap-0.5 p-1 rounded-full bg-white/[0.02] border border-white/[0.04]">
          {navLinks.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive 
                    ? 'text-[#55E6D0] bg-white/10 shadow-sm' 
                    : 'text-[#9AA3B5] hover:text-[#F5F6FA] hover:bg-white/[0.03]'
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action CTAs - Search + Button-in-Button Architecture */}
        <div className="hidden md:flex items-center gap-2">
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="px-2.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-white/20 text-[#9AA3B5] hover:text-[#F5F6FA] transition-all flex items-center gap-2 text-xs font-mono group"
              title="Quick Search (Ctrl+K or ⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-[#55E6D0] group-hover:scale-110 transition-transform" />
              <span className="text-[11px] text-[#5E6778] group-hover:text-[#9AA3B5]">Search</span>
              <kbd className="px-1 py-0.2 rounded bg-white/[0.05] text-[9px] text-[#5E6778] border border-white/[0.06]">⌘K</kbd>
            </button>
          )}

          <button
            onClick={() => handleNavClick('/share-a-problem')}
            className={`px-3 py-1.5 text-xs font-mono rounded-full transition-all ${
              currentPath === '/share-a-problem'
                ? 'text-[#F4BD67] bg-[#F4BD67]/10'
                : 'text-[#9AA3B5] hover:text-[#F5F6FA]'
            }`}
          >
            Share Problem
          </button>

          <button
            onClick={() => handleNavClick('/join')}
            className="group pl-3.5 pr-2 py-1.5 text-xs font-mono font-semibold rounded-full bg-[#55E6D0] text-[#090B10] hover:bg-[#55E6D0]/90 transition-all flex items-center gap-2 hover:shadow-[0_0_20px_rgba(85,230,208,0.3)] active:scale-[0.98]"
          >
            <span>Join Network</span>
            <div className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <ArrowRight className="w-2.5 h-2.5 text-[#090B10]" />
            </div>
          </button>
        </div>

        {/* Mobile menu trigger & search */}
        <div className="flex md:hidden items-center gap-1.5">
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="p-1.5 rounded-full border border-white/10 text-[#9AA3B5] hover:text-[#55E6D0]"
              aria-label="Open Search"
            >
              <Search className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={() => handleNavClick('/join')}
            className="px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-[#55E6D0] text-[#090B10]"
          >
            Join
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full border border-white/10 text-[#F5F6FA]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-lg mx-auto bg-[#090B10]/98 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl pointer-events-auto">
          <div className="flex flex-col gap-1">
            <button
              onClick={() => handleNavClick('/')}
              className={`p-2.5 text-left rounded-lg text-xs font-medium ${
                currentPath === '/' ? 'text-[#55E6D0] bg-white/[0.05]' : 'text-[#F5F6FA]'
              }`}
            >
              Overview
            </button>

            {navLinks.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`p-2.5 text-left rounded-lg text-xs font-medium ${
                  currentPath === item.path ? 'text-[#55E6D0] bg-white/[0.05]' : 'text-[#9AA3B5] hover:text-[#F5F6FA]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('/share-a-problem')}
                className="w-full py-2 text-center text-xs font-mono rounded-lg border border-white/10 text-[#F4BD67]"
              >
                Share a Problem
              </button>

              <button
                onClick={() => handleNavClick('/join')}
                className="w-full py-2.5 text-center text-xs font-mono font-medium rounded-lg bg-[#55E6D0] text-[#090B10]"
              >
                Join the Founding Network
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
