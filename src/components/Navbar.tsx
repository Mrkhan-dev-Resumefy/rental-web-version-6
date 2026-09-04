import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/rentals';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      {/* Top Banner Strip */}
      <div className="header-top">
        <div className="container-custom">
          <span>🎉 Now Serving All of Texas</span>
          <span className="dot"></span>
          <span>Book by Call, Text or WhatsApp</span>
          <span className="dot"></span>
          <span>Free Delivery &amp; Setup</span>
        </div>
      </div>

      {/* Main Navbar Row */}
      <div className="header-main">
        <div className="container-custom">
          {/* Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNav('home')}
            className="logo cursor-pointer bg-transparent border-0 text-left p-0"
            title="EventsRentals.io"
          >
            <span className="logo-mark" aria-hidden="true">
              <img
                src="/assets/events-rentals-tent-logo.svg"
                alt="Tent Logo"
                className="w-full h-full object-contain"
                style={{ width: '32.9922px', height: '32.9922px' }}
                referrerPolicy="no-referrer"
              />
            </span>
            <span>EventsRentals<span className="io">.io</span></span>
          </button>

          {/* Desktop Nav Pills */}
          <nav className="nav-desktop">
            <button
              onClick={() => handleNav('home')}
              className={`cursor-pointer ${currentPage === 'home' ? 'active' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('bounce-houses')}
              className={`cursor-pointer ${currentPage === 'bounce-houses' ? 'active' : ''}`}
            >
              Bounce Houses
            </button>
            <button
              onClick={() => handleNav('movie-screen')}
              className={`cursor-pointer ${currentPage === 'movie-screen' ? 'active' : ''}`}
            >
              Movie Screen
            </button>
            <button
              onClick={() => handleNav('popcorn-cart')}
              className={`cursor-pointer ${currentPage === 'popcorn-cart' ? 'active' : ''}`}
            >
              Popcorn Cart
            </button>
            <button
              onClick={() => handleNav('contact')}
              className={`cursor-pointer ${currentPage === 'contact' ? 'active' : ''}`}
            >
              Contact
            </button>
          </nav>

          {/* Contact Action Buttons */}
          <div className="contact-buttons">
            <a
              href={COMPANY_INFO.callLink}
              className="cta-icon cta-call"
              title="Call (469) 994-2172"
              aria-label="Call (469) 994-2172"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
            <a
              href={COMPANY_INFO.smsLink}
              className="cta-icon cta-text"
              title="Text (469) 994-2172"
              aria-label="Text (469) 994-2172"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </a>
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-icon cta-whatsapp"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </a>

            {/* Book Now Button */}
            <button
              onClick={() => handleNav('contact')}
              className="btn-book cursor-pointer"
            >
              Book Now →
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hamburger cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <nav className={`nav-mobile ${mobileMenuOpen ? 'open' : ''}`}>
        <button
          onClick={() => handleNav('home')}
          className={`w-full text-left cursor-pointer ${currentPage === 'home' ? 'active' : ''}`}
        >
          Home
        </button>
        <button
          onClick={() => handleNav('bounce-houses')}
          className={`w-full text-left cursor-pointer ${currentPage === 'bounce-houses' ? 'active' : ''}`}
        >
          Bounce Houses
        </button>
        <button
          onClick={() => handleNav('movie-screen')}
          className={`w-full text-left cursor-pointer ${currentPage === 'movie-screen' ? 'active' : ''}`}
        >
          Movie Screen Rental
        </button>
        <button
          onClick={() => handleNav('popcorn-cart')}
          className={`w-full text-left cursor-pointer ${currentPage === 'popcorn-cart' ? 'active' : ''}`}
        >
          Popcorn Cart
        </button>
        <button
          onClick={() => handleNav('contact')}
          className={`w-full text-left cursor-pointer ${currentPage === 'contact' ? 'active' : ''}`}
        >
          Contact / Book Now
        </button>
      </nav>
    </header>
  );
};
