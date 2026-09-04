import React from 'react';
import { PageId } from '../../types';
import { COMPANY_INFO } from '../../data/rentals';

interface BounceHousesPageProps {
  onNavigate: (page: PageId, selectedItem?: string) => void;
  selectedItem?: string;
}

export const BounceHousesPage: React.FC<BounceHousesPageProps> = ({ onNavigate, selectedItem }) => {
  React.useEffect(() => {
    if (selectedItem) {
      const targetId = selectedItem.includes('small') ? 'small' : 'large';
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [selectedItem]);
  return (
    <div>
      {/* ============ PAGE HERO ============ */}
      <section className="page-hero">
        <div className="container-custom">
          <span className="eyebrow">
            <span className="dot" /> Bounce Houses
          </span>
          <h1>Big or Small — We've Got You Covered.</h1>
          <p>
            Choose the perfect size for your event. All units cleaned, sanitized, and delivered free anywhere in Texas.
          </p>
        </div>
      </section>

      {/* ============ PRODUCT DETAIL ============ */}
      <section className="product-detail">
        <div className="container-custom">
          {/* Large Bounce House Block */}
          <div className="product-block scroll-reveal" id="large">
            <div className="gallery">
              <div className="main">
                <img
                  src="/assets/bounce-large-1.jpg?v=upload-1"
                  alt="Large bounce house main view"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="thumb-sm">
                <img
                  src="/assets/bounce-large-2.jpg?v=upload-1"
                  alt="Large bounce house side view"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="thumb-sm">
                <img
                  src="/assets/bounce-large-3.jpg"
                  alt="Large bounce house rainbow"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="details">
              <span className="eyebrow" style={{ background: 'var(--red)', color: 'var(--white)', borderColor: 'var(--ink)' }}>
                <span className="dot" style={{ background: 'var(--yellow)' }} /> Most Popular
              </span>
              <h2 style={{ marginTop: '16px' }}>Large Bounce House</h2>
              <p className="intro">
                Our big-kid crowd-pleaser. Enough room for a whole birthday party to jump, slide, and burn off endless energy. Perfect for backyards, block parties, and school events.
              </p>
              <ul className="spec-list">
                <li><span className="k">Dimensions</span><span className="v">Approx. 15 × 15 ft (confirm on booking)</span></li>
                <li><span className="k">Ages</span><span className="v">5 – 12 years</span></li>
                <li><span className="k">Capacity</span><span className="v">Up to 8 kids at a time</span></li>
                <li><span className="k">Power</span><span className="v">Standard outlet within 100 ft</span></li>
                <li><span className="k">Setup space</span><span className="v">Flat 20 × 20 ft area, min. 8 ft overhead clearance</span></li>
                <li><span className="k">Price</span><span className="v" style={{ color: 'var(--sky-600)' }}>📞 Call for pricing — (469) 994-2172</span></li>
              </ul>
              <div className="contact-row">
                <a href={COMPANY_INFO.callLink} className="btn btn-primary">
                  📞 Call to Book
                </a>
                <a
                  href="https://wa.me/14699942172?text=Hi!%20I'd%20like%20to%20book%20the%20LARGE%20bounce%20house."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  WhatsApp Us
                </a>
                <button
                  onClick={() => onNavigate('contact', 'large-bounce')}
                  className="btn btn-yellow cursor-pointer"
                >
                  Reserve Online →
                </button>
              </div>
            </div>
          </div>

          {/* Small Bounce House Block (Reversed) */}
          <div className="product-block reverse scroll-reveal" id="small">
            <div className="gallery">
              <div className="main">
                <img
                  src="/assets/bounce-small-1.jpg?v=upload-1"
                  alt="Small toddler bounce house"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="thumb-sm">
                <img src="/assets/bounce-small-2.jpg" alt="Toddler bounce house play" />
              </div>
              <div className="thumb-sm">
                <img src="/assets/bounce-small-3.jpg" alt="Toddler castle bounce" />
              </div>
            </div>
            <div className="details">
              <span className="eyebrow" style={{ background: 'var(--green)', color: 'var(--white)', borderColor: 'var(--ink)' }}>
                <span className="dot" style={{ background: 'var(--yellow)' }} /> Toddler-Safe
              </span>
              <h2 style={{ marginTop: '16px' }}>Small Bounce House</h2>
              <p className="intro">
                The right-sized bouncer for the littles. Softer play area, lower walls, and easy access — designed for toddlers and preschoolers to feel safe and have a blast.
              </p>
              <ul className="spec-list">
                <li><span className="k">Dimensions</span><span className="v">Approx. 9 × 9 ft (confirm on booking)</span></li>
                <li><span className="k">Ages</span><span className="v">2 – 6 years</span></li>
                <li><span className="k">Capacity</span><span className="v">Up to 4 kids at a time</span></li>
                <li><span className="k">Power</span><span className="v">Standard outlet within 100 ft</span></li>
                <li><span className="k">Setup space</span><span className="v">Flat 12 × 12 ft area, min. 7 ft overhead clearance</span></li>
                <li><span className="k">Price</span><span className="v" style={{ color: 'var(--sky-600)' }}>📞 Call for pricing — (469) 994-2172</span></li>
              </ul>
              <div className="contact-row">
                <a href={COMPANY_INFO.callLink} className="btn btn-primary">
                  📞 Call to Book
                </a>
                <a
                  href="https://wa.me/14699942172?text=Hi!%20I'd%20like%20to%20book%20the%20SMALL%20bounce%20house."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  WhatsApp Us
                </a>
                <button
                  onClick={() => onNavigate('contact', 'small-bounce')}
                  className="btn btn-yellow cursor-pointer"
                >
                  Reserve Online →
                </button>
              </div>
            </div>
          </div>

          {/* Safety Callout */}
          <div className="callout-note scroll-reveal" style={{ marginTop: '32px' }}>
            <div className="ico">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <strong>Safety first.</strong> All units are inspected, cleaned, and sanitized before every rental. Setup and breakdown are always included — you don't lift a finger.
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
