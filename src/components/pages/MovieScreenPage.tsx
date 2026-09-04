import React from 'react';
import { PageId } from '../../types';
import { COMPANY_INFO } from '../../data/rentals';

interface MovieScreenPageProps {
  onNavigate: (page: PageId, selectedItem?: string) => void;
}

export const MovieScreenPage: React.FC<MovieScreenPageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* ============ PAGE HERO ============ */}
      <section className="page-hero">
        <div className="container-custom">
          <span className="eyebrow">
            <span className="dot" /> Movie Screen &amp; HD Projector
          </span>
          <h1>Backyard? Meet Big Screen.</h1>
          <p>Host an unforgettable outdoor movie night, right in your backyard.</p>
        </div>
      </section>

      {/* ============ PRODUCT DETAIL ============ */}
      <section className="product-detail">
        <div className="container-custom">
          <div className="product-block scroll-reveal">
            <div className="gallery">
              <div className="main">
                <img src="/assets/movie-2.jpg" alt="Outdoor movie screen at dusk" />
              </div>
              <div className="thumb-sm">
                <img src="/assets/movie-1.jpg" alt="Movie screen setup" />
              </div>
              <div className="thumb-sm">
                <img src="/assets/movie-3.jpg" alt="Backyard movie night" />
              </div>
            </div>

            <div className="details">
              <span className="eyebrow" style={{ background: 'var(--red)', color: 'var(--white)', borderColor: 'var(--ink)' }}>
                <span className="dot" style={{ background: 'var(--yellow)' }} /> Movie Night Magic
              </span>
              <h2 style={{ marginTop: '16px' }}>Movie Screen + HD Projector</h2>
              <p className="intro">
                Everything you need to turn your yard into an open-air theater. We show up, set up the screen and projector, and hand you the cables — you press play.
              </p>

              <h3 style={{ fontFamily: 'Fredoka, sans-serif', fontSize: '1.2rem', margin: '20px 0 12px', color: 'var(--sky-700)' }}>
                What's Included
              </h3>
              <ul className="spec-list">
                <li><span className="k">Big screen</span><span className="v">12 ft or 16 ft option (confirm on booking)</span></li>
                <li><span className="k">Projector</span><span className="v">HD projector, HDMI-ready</span></li>
                <li><span className="k">Cables</span><span className="v">HDMI + power cables, extension cords</span></li>
                <li><span className="k">Speakers</span><span className="v">Available on request</span></li>
                <li><span className="k">Setup + breakdown</span><span className="v">Fully included</span></li>
              </ul>

              <h3 style={{ fontFamily: 'Fredoka, sans-serif', fontSize: '1.2rem', margin: '20px 0 12px', color: 'var(--sky-700)' }}>
                Setup Requirements
              </h3>
              <ul className="spec-list">
                <li><span className="k">Space</span><span className="v">Flat open area, min. 20 × 20 ft</span></li>
                <li><span className="k">Power</span><span className="v">Standard outlet within 100 ft</span></li>
                <li><span className="k">Best time</span><span className="v">Starts after dusk for clearest picture</span></li>
                <li><span className="k">Price</span><span className="v" style={{ color: 'var(--sky-600)' }}>📞 Call for pricing — (469) 994-2172</span></li>
              </ul>

              <div className="contact-row" style={{ marginBottom: '20px' }}>
                <a href={COMPANY_INFO.callLink} className="btn btn-primary">
                  📞 Call to Book
                </a>
                <a
                  href="https://wa.me/14699942172?text=Hi!%20I'd%20like%20to%20book%20the%20movie%20screen%20and%20projector."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  WhatsApp Us
                </a>
                <button
                  onClick={() => onNavigate('contact', 'movie')}
                  className="btn btn-yellow cursor-pointer"
                >
                  Reserve Online →
                </button>
              </div>

              <div className="callout-note pair">
                <div className="ico" style={{ background: 'var(--red)', color: 'var(--white)' }}>🍿</div>
                <div>
                  <strong>Pairs perfectly</strong> with our Popcorn Cart — the ultimate movie night combo.{' '}
                  <button
                    onClick={() => onNavigate('popcorn-cart')}
                    className="cursor-pointer font-bold underline bg-transparent border-0 p-0 text-[#0369A1]"
                  >
                    See popcorn →
                  </button>
                </div>
              </div>
            </div>
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
