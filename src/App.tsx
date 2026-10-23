import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { TheProblemPage } from './pages/TheProblemPage';
import { OurApproachPage } from './pages/OurApproachPage';
import { EcosystemPage } from './pages/EcosystemPage';
import { StakeholdersPage } from './pages/StakeholdersPage';
import { IntelligencePage } from './pages/IntelligencePage';
import { OpportunitiesPage } from './pages/OpportunitiesPage';
import { AboutPage } from './pages/AboutPage';
import { ShareProblemPage } from './pages/ShareProblemPage';
import { JoinNetworkPage } from './pages/JoinNetworkPage';
import { ToolkitsPage } from './pages/ToolkitsPage';
import { CommandPalette } from './components/CommandPalette';
import { AmbientSpotlight } from './components/AmbientSpotlight';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navigateTo = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/problem':
        return <TheProblemPage onNavigate={navigateTo} />;
      case '/approach':
        return <OurApproachPage onNavigate={navigateTo} />;
      case '/toolkits':
        return <ToolkitsPage onNavigate={navigateTo} />;
      case '/ecosystem':
        return <EcosystemPage onNavigate={navigateTo} />;
      case '/stakeholders':
        return <StakeholdersPage onNavigate={navigateTo} />;
      case '/intelligence':
        return <IntelligencePage onNavigate={navigateTo} />;
      case '/opportunities':
        return <OpportunitiesPage onNavigate={navigateTo} />;
      case '/about':
        return <AboutPage onNavigate={navigateTo} />;
      case '/share-a-problem':
        return <ShareProblemPage onNavigate={navigateTo} />;
      case '/join':
        return <JoinNetworkPage onNavigate={navigateTo} />;
      case '/':
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="bg-[#090B10] text-[#F5F6FA] min-h-screen flex flex-col font-sans selection:bg-[#55E6D0]/20 selection:text-[#55E6D0] relative">
      <AmbientSpotlight />
      <Navbar 
        currentPath={currentPath} 
        onNavigate={navigateTo} 
        onOpenSearch={() => setIsSearchOpen(true)}
      />
      
      <main className="flex-grow relative z-10">
        {renderCurrentPage()}
      </main>

      <Footer onNavigate={navigateTo} />

      <CommandPalette 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigateTo}
      />
    </div>
  );
}

export default App;
