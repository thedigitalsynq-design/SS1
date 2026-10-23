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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Problem', path: '/problem' },
    { label: 'Our Approach', path: '/approach' },
    { label: 'Ecosystem', path: '/ecosystem' },
    { label: 'About', path: '/about' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 pointer-events-none">
      <div 
        className={`max-w-5xl mx-auto rounded-full transition-all duration-300 pointer-events-auto px-5 py-2.5 flex items-center justify-between border ${
          isScrolled 
            ? 'bg-[#0E121B]/95 backdrop-blur-2xl border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)]' 
            : 'bg-[#090B10]/90 backdrop-blur-xl border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.3)]'
        }`}
      >
        
        {/* Brand */}
        <button 
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-2.5 group text-left focus:outline-none"
          aria-label="SolutionSynq Homepage"
        >
          <div className="w-7 h-7 rounded-lg bg-[#141A26] border border-white/10 flex items-center justify-center text-[#55E6D0] group-hover:border-[#55E6D0]/40 transition-colors">
            <Network className="w-3.5 h-3.5" />
          </div>
          
          <span className="font-display font-semibold text-sm tracking-tight text-[#F5F6FA]">
            Solution<span className="text-[#55E6D0]">Synq</span>
          </span>
        </button>

        {/* Desktop Navigation - 4 Focused Core Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-150 ${
                  isActive 
                    ? 'text-[#55E6D0] bg-white/[0.08]' 
                    : 'text-[#9AA3B5] hover:text-[#F5F6FA] hover:bg-white/[0.04]'
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Search + Single Primary CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-white/20 text-[#8F99AA] hover:text-[#F5F6FA] transition-all flex items-center gap-2 text-xs"
              title="Search (⌘K)"
            >
              <Search className="w-3 h-3 text-[#55E6D0]" />
              <span className="text-[11px]">Search</span>
              <kbd className="px-1 py-0.5 rounded bg-white/[0.05] text-[9px] text-[#6A7382] border border-white/[0.06]">⌘K</kbd>
            </button>
          )}

          <button
            onClick={() => handleNavClick('/join')}
            className="pl-3.5 pr-2.5 py-1.5 text-xs font-medium rounded-full bg-[#55E6D0] text-[#090B10] hover:bg-[#55E6D0]/90 transition-all flex items-center gap-1.5 active:scale-[0.98]"
          >
            <span>Join Network</span>
            <ArrowRight className="w-3 h-3 text-[#090B10]" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
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
        <div className="md:hidden mt-2 max-w-sm mx-auto bg-[#0E121B] border border-white/10 rounded-2xl p-4 shadow-2xl pointer-events-auto">
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
                className="w-full py-2 text-center text-xs rounded-lg border border-white/10 text-[#9AA3B5] hover:text-[#F5F6FA]"
              >
                Share a Problem
              </button>

              <button
                onClick={() => handleNavClick('/join')}
                className="w-full py-2.5 text-center text-xs font-medium rounded-lg bg-[#55E6D0] text-[#090B10]"
              >
                Join Network
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
