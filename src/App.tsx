import React, { useState } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { HomePage } from './components/pages/HomePage';
import { BounceHousesPage } from './components/pages/BounceHousesPage';
import { MovieScreenPage } from './components/pages/MovieScreenPage';
import { PopcornCartPage } from './components/pages/PopcornCartPage';
import { ContactPage } from './components/pages/ContactPage';
import { useScrollReveal } from './utils/useScrollReveal';

interface AppProps {
  initialPage?: PageId;
}

export default function App({ initialPage }: AppProps = {}) {
  const getInitialPage = (): PageId => {
    if (initialPage) return initialPage;
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.replace(/^\/|\/$/g, '');
      if (path === 'bounce-houses') return 'bounce-houses';
      if (path === 'movie-screens' || path === 'movie-screen') return 'movie-screen';
      if (path === 'popcorn' || path === 'popcorn-cart') return 'popcorn-cart';
      if (path === 'contact' || path === 'booking') return 'contact';
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [preSelectedItem, setPreSelectedItem] = useState<string | undefined>(undefined);

  // Initialize scroll-reveal observer across page switches
  useScrollReveal(currentPage);

  const handleNavigate = (page: PageId, selectedItem?: string) => {
    setCurrentPage(page);
    setPreSelectedItem(selectedItem);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FFFBEB] text-[#0F172A] font-sans pb-20 sm:pb-0 overflow-x-hidden">
      {/* Global Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page Views */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}
        {currentPage === 'bounce-houses' && (
          <BounceHousesPage onNavigate={handleNavigate} selectedItem={preSelectedItem} />
        )}
        {currentPage === 'movie-screen' && (
          <MovieScreenPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'popcorn-cart' && (
          <PopcornCartPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'contact' && (
          <ContactPage preSelectedItem={preSelectedItem} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Quick Action Bar */}
      <FloatingActions />
    </div>
  );
}
