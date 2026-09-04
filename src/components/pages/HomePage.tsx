import React from 'react';
import { PageId } from '../../types';
import { COMPANY_INFO } from '../../data/rentals';

interface HomePageProps {
  onNavigate: (page: PageId, selectedItem?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-bg">
          <div
            className="hero-slide"
            style={{ backgroundImage: "url('/assets/bounce-large-1.jpg')" }}
          />
          <div
            className="hero-slide"
            style={{ backgroundImage: "url('/assets/bounce-small-1.jpg')" }}
          />
          <div
            className="hero-slide"
            style={{ backgroundImage: "url('/assets/movie-2.jpg')" }}
          />
          <div
            className="hero-slide"
            style={{ backgroundImage: "url('/assets/popcorn-1.jpg')" }}
          />
        </div>
        <div className="hero-scrim" />
        <div className="hero-shapes">
          <div className="circle c1" />
          <div className="circle c2" />
          <div className="circle c3" />
        </div>
        <div className="container-custom relative z-10 w-full">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="pulse" />
              Now Serving All of Texas
            </div>
            <h1>
              Welcome to<br />
              <span className="highlight">EventsRentals.io</span>
            </h1>
            <p className="sub">Proudly Serving All of Texas 🤠</p>
            <p className="body-copy">
              We bring the fun straight to your event — bounce houses, outdoor movie nights, and popcorn to match.
              Clean, safe equipment and easy booking by phone, text, or WhatsApp.
            </p>
            <div className="contact-row">
              <a href={COMPANY_INFO.callLink} className="btn btn-yellow btn-lg">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call to Book
              </a>
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </a>
              <a href={COMPANY_INFO.smsLink} className="btn btn-white btn-lg">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Text Us
              </a>
            </div>
            <div className="urgency-badge">
              ⚡ Weekend Dates Fill Up Fast — Book Early
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT WE OFFER ============ */}
      <section className="offer-section">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="container-custom">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span className="eyebrow">
              <span className="dot" /> What We Rent
            </span>
          </div>
          <h2 className="section-title scroll-reveal">The Fun, Delivered.</h2>
          <p className="section-subtitle scroll-reveal">
            Four handpicked party rentals — everything you need for an unforgettable Texas event.
          </p>

          <div className="offer-grid">
            {/* Card 1: Large Bounce */}
            <div
              onClick={() => onNavigate('bounce-houses', 'large')}
              className="item-card cursor-pointer scroll-reveal reveal-delay-100"
            >
              <div className="thumb">
                <span className="tag-sticker">Most Popular</span>
                <img src="/assets/bounce-large-1.jpg" alt="Large bounce house" />
              </div>
              <div className="body">
                <h3>Bounce House — Large</h3>
                <p>Perfect for big backyard parties and group events. Plenty of room to jump and play safely.</p>
                <span className="price-line">📞 Call for Pricing</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate('contact', 'large-bounce');
                  }}
                  className="btn btn-primary btn-sm cursor-pointer"
                  style={{ alignSelf: 'flex-start' }}
                >
                  Book This →
                </button>
              </div>
            </div>

            {/* Card 2: Small Bounce */}
            <div
              onClick={() => onNavigate('bounce-houses', 'small')}
              className="item-card cursor-pointer scroll-reveal reveal-delay-200"
            >
              <div className="thumb">
                <span className="tag-sticker green">Toddler-Safe</span>
                <img src="/assets/bounce-small-1.jpg" alt="Small toddler bounce house" />
              </div>
              <div className="body">
                <h3>Bounce House — Small</h3>
                <p>Ideal for toddlers and smaller spaces — all the fun, right-sized for little ones.</p>
                <span className="price-line">📞 Call for Pricing</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate('contact', 'small-bounce');
                  }}
                  className="btn btn-yellow btn-sm cursor-pointer"
                  style={{ alignSelf: 'flex-start' }}
                >
                  Book This →
                </button>
              </div>
            </div>

            {/* Card 3: Movie */}
            <div
              onClick={() => onNavigate('movie-screen')}
              className="item-card cursor-pointer scroll-reveal reveal-delay-300"
            >
              <div className="thumb">
                <span className="tag-sticker red">Movie Night</span>
                <img src="/assets/movie-2.jpg" alt="Movie screen setup" />
              </div>
              <div className="body">
                <h3>Movie Screen + HD Projector</h3>
                <p>Turn your backyard into a movie theater. Includes big screen, HD projector, and easy setup.</p>
                <span className="price-line">📞 Call for Pricing</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate('contact', 'movie');
                  }}
                  className="btn btn-red btn-sm cursor-pointer"
                  style={{ alignSelf: 'flex-start' }}
                >
                  Book This →
                </button>
              </div>
            </div>

            {/* Card 4: Popcorn */}
            <div
              onClick={() => onNavigate('popcorn-cart')}
              className="item-card cursor-pointer scroll-reveal reveal-delay-400"
            >
              <div className="thumb">
                <span className="tag-sticker">Fan Favorite</span>
                <img src="/assets/popcorn-1.jpg" alt="Popcorn cart" />
              </div>
              <div className="body">
                <h3>Popcorn Cart</h3>
                <p>Fresh, hot popcorn served right at your event — the perfect add-on for movie nights and parties.</p>
                <span className="price-line">📞 Call for Pricing</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate('contact', 'popcorn');
                  }}
                  className="btn btn-white btn-sm cursor-pointer"
                  style={{ alignSelf: 'flex-start' }}
                >
                  Book This →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <section className="trust-strip">
        <div className="container-custom">
          <div className="trust-grid">
            <div className="trust-item scroll-reveal reveal-delay-100">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 16.5A2.5 2.5 0 0 1 11.5 19h-9v-3.5A2.5 2.5 0 0 1 5 13h6.5A2.5 2.5 0 0 1 14 15.5v1z" />
                  <circle cx="7" cy="9" r="3" />
                  <path d="M16 3h5v5" />
                  <path d="m21 3-6.5 6.5" />
                </svg>
              </div>
              <span>Free Delivery<br />&amp; Setup</span>
            </div>
            <div className="trust-item scroll-reveal reveal-delay-200">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <span>Clean &amp; Sanitized<br />Equipment</span>
            </div>
            <div className="trust-item scroll-reveal reveal-delay-300">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span>Booking Confirmed<br />by Phone Call</span>
            </div>
            <div className="trust-item scroll-reveal reveal-delay-400">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span>Serving All<br />of Texas</span>
            </div>
            <div className="trust-item scroll-reveal reveal-delay-500">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <span>Call, Text,<br />or WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="how-section">
        <div className="container-custom">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span className="eyebrow">
              <span className="dot" /> Easy as 1-2-3
            </span>
          </div>
          <h2 className="section-title scroll-reveal">Booking Is Simple.</h2>
          <p className="section-subtitle scroll-reveal">
            No online carts, no confusing checkouts — just three quick steps.
          </p>
          <div className="how-grid">
            <div className="how-card scroll-reveal reveal-delay-100">
              <div className="num">1</div>
              <h3>Reach Out</h3>
              <p>
                Call, text, or message us on WhatsApp — or fill out the quick form on our Contact page. Tell us what you need and when.
              </p>
            </div>
            <div className="how-card scroll-reveal reveal-delay-200">
              <div className="num">2</div>
              <h3>We Confirm</h3>
              <p>
                A real person calls you back to lock in your date, price, and delivery details. No credit card surprises.
              </p>
            </div>
            <div className="how-card scroll-reveal reveal-delay-300">
              <div className="num">3</div>
              <h3>We Deliver</h3>
              <p>
                We show up on time, set everything up, and pick it back up when the party's over. You just enjoy the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INSTAGRAM GALLERY ============ */}
      <section className="gallery-section">
        <div className="container-custom">
          <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span className="eyebrow" style={{ background: 'var(--white)' }}>
              <span className="dot" /> From Our Events
            </span>
          </div>
          <h2 className="section-title scroll-reveal">Real Parties. Real Fun.</h2>
          <p className="section-subtitle scroll-reveal">A peek at what your weekend could look like.</p>

          <div className="ig-grid">
            {[
              { img: '/assets/bounce-large-1.jpg', alt: 'Large bounce house at party' },
              { img: '/assets/bounce-large-2.jpg', alt: 'Party' },
              { img: '/assets/movie-1.jpg', alt: 'Movie night' },
              { img: '/assets/popcorn-1.jpg', alt: 'Popcorn cart' },
              { img: '/assets/party-1.jpg', alt: 'Backyard party' },
              { img: '/assets/bounce-small-1.jpg', alt: 'Small bounce' },
              { img: '/assets/movie-2.jpg', alt: 'Movie screen' },
              { img: '/assets/popcorn-2.jpg', alt: 'Popcorn' },
              { img: '/assets/bounce-large-3.jpg', alt: 'Bounce' },
              { img: '/assets/bounce-small-2.jpg', alt: 'Toddler bounce' },
              { img: '/assets/party-2.jpg', alt: 'Party rentals' },
              { img: '/assets/popcorn-3.jpg', alt: 'Popcorn machine' },
            ].map((tile, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-2xl border-[3px] border-[#0F172A] shadow-[4px_4px_0_#0F172A] relative group transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:rotate-[-1deg] hover:shadow-[6px_6px_0_#0F172A] bg-[#BAE6FD] scroll-reveal"
              >
                <img src={tile.img} alt={tile.alt} className="w-full h-full object-cover" />
                <div className="overlay">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-cta scroll-reveal">
            <a
              href={COMPANY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.51h-2l-.396 3.98h2.396v8.01Z" />
              </svg>
              Follow Us on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="final-cta">
        <div
          className="blob"
          style={{
            top: '-60px',
            left: '-40px',
            width: '240px',
            height: '240px',
            background: 'var(--yellow)',
          }}
        />
        <div
          className="blob"
          style={{
            bottom: '-80px',
            right: '-60px',
            width: '300px',
            height: '300px',
            background: 'var(--red)',
          }}
        />
        <div className="container-custom scroll-reveal" style={{ position: 'relative', zIndex: 1 }}>
          <h2>Ready to Book Your Event?</h2>
          <p>Weekend dates fill up fast — reach out today and we'll lock in your fun.</p>
          <div className="contact-row">
            <a href={COMPANY_INFO.callLink} className="btn btn-yellow btn-lg">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (469) 994-2172
            </a>
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
            <a href={COMPANY_INFO.smsLink} className="btn btn-white btn-lg">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Text Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
