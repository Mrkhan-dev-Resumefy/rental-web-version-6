import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../../data/rentals';

interface ContactPageProps {
  preSelectedItem?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ preSelectedItem }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [items, setItems] = useState<{ [key: string]: boolean }>({
    'large-bounce': preSelectedItem === 'large-bounce' || preSelectedItem === 'large',
    'small-bounce': preSelectedItem === 'small-bounce' || preSelectedItem === 'small',
    movie: preSelectedItem === 'movie' || preSelectedItem === 'movie-screen',
    popcorn: preSelectedItem === 'popcorn' || preSelectedItem === 'popcorn-cart',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preSelectedItem) {
      setItems((prev) => ({
        ...prev,
        'large-bounce': preSelectedItem === 'large-bounce' || preSelectedItem === 'large',
        'small-bounce': preSelectedItem === 'small-bounce' || preSelectedItem === 'small',
        movie: preSelectedItem === 'movie' || preSelectedItem === 'movie-screen',
        popcorn: preSelectedItem === 'popcorn' || preSelectedItem === 'popcorn-cart',
      }));
    }
  }, [preSelectedItem]);

  const toggleItem = (key: string) => {
    setItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setPhone('');
    setDate('');
    setCity('');
    setMessage('');
    setItems({
      'large-bounce': false,
      'small-bounce': false,
      movie: false,
      popcorn: false,
    });
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <div>
      {/* ============ PAGE HERO ============ */}
      <section className="page-hero">
        <div className="container-custom">
          <span className="eyebrow">
            <span className="dot" /> Book Now
          </span>
          <h1>Let's Book Your Event.</h1>
          <p>Fill out the form or reach us directly — we'll confirm your booking by phone call.</p>
        </div>
      </section>

      {/* ============ FORM + CONTACT SIDEBAR ============ */}
      <section className="product-detail">
        <div className="container-custom">
          <div className="contact-layout">
            {/* Form Block */}
            <div className="form-block scroll-reveal">
              <form id="booking-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field" style={{ marginBottom: 0 }}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-field" style={{ marginBottom: 0 }}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="(555) 123-4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field" style={{ marginBottom: 0 }}>
                    <label htmlFor="date">Event Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <div className="form-field" style={{ marginBottom: 0 }}>
                    <label htmlFor="city">City (Texas) *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      placeholder="Dallas, Austin, Houston..."
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label>Interested In (check all that apply)</label>
                  <div className="checkbox-grid">
                    <label className={`checkbox-item ${items['large-bounce'] ? 'checked' : ''}`}>
                      <input
                        type="checkbox"
                        name="items"
                        value="large-bounce"
                        checked={!!items['large-bounce']}
                        onChange={() => toggleItem('large-bounce')}
                      />
                      <span>🎪 Large Bounce House</span>
                    </label>

                    <label className={`checkbox-item ${items['small-bounce'] ? 'checked' : ''}`}>
                      <input
                        type="checkbox"
                        name="items"
                        value="small-bounce"
                        checked={!!items['small-bounce']}
                        onChange={() => toggleItem('small-bounce')}
                      />
                      <span>🧸 Small Bounce House</span>
                    </label>

                    <label className={`checkbox-item ${items['movie'] ? 'checked' : ''}`}>
                      <input
                        type="checkbox"
                        name="items"
                        value="movie"
                        checked={!!items['movie']}
                        onChange={() => toggleItem('movie')}
                      />
                      <span>🎬 Movie Screen &amp; Projector</span>
                    </label>

                    <label className={`checkbox-item ${items['popcorn'] ? 'checked' : ''}`}>
                      <input
                        type="checkbox"
                        name="items"
                        value="popcorn"
                        checked={!!items['popcorn']}
                        onChange={() => toggleItem('popcorn')}
                      />
                      <span>🍿 Popcorn Cart</span>
                    </label>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message / Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your event — how many kids, what time, any questions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {submitted && (
                  <div className="bg-[#DCFCE7] border-[3px] border-[#15803D] text-[#14532D] p-4 rounded-2xl mb-5 font-bold flex items-start gap-3 shadow-[4px_4px_0_#15803D]">
                    <span className="text-2xl">🎉</span>
                    <div>
                      <div className="text-base font-extrabold text-[#14532D]">Booking Request Received!</div>
                      <div className="text-sm font-semibold text-[#166534] mt-0.5">
                        Thank you! We will give you a quick phone call shortly to confirm equipment availability, delivery time, and Texas location details.
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-red btn-lg cursor-pointer"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    background: submitted ? '#15803D' : undefined,
                    color: submitted ? '#FFFFFF' : undefined,
                  }}
                >
                  {submitted ? "✓ Booking Request Sent!" : 'Send My Booking Request →'}
                </button>

                <p className="form-note">
                  📞 All bookings are confirmed via a quick phone call — we'll reach out shortly after you submit.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <aside className="contact-sidebar scroll-reveal reveal-delay-200">
              <h3>Prefer to reach out directly?</h3>
              <p style={{ marginBottom: '20px', color: 'var(--ink-2)', fontWeight: 600 }}>
                Pick your favorite way — we answer fast.
              </p>

              <a href={COMPANY_INFO.callLink} className="direct-btn call">
                <div className="ico">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="label">
                  <strong>Call Now</strong>
                  <small>(469) 994-2172</small>
                </div>
              </a>

              <a href={COMPANY_INFO.smsLink} className="direct-btn text">
                <div className="ico">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="label">
                  <strong>Text Us</strong>
                  <small>Fastest replies</small>
                </div>
              </a>

              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="direct-btn whatsapp"
              >
                <div className="ico">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51z" />
                  </svg>
                </div>
                <div className="label">
                  <strong>WhatsApp</strong>
                  <small>Chat with us</small>
                </div>
              </a>

              <a href={`mailto:${COMPANY_INFO.email}`} className="direct-btn" style={{ background: 'var(--white)' }}>
                <div className="ico" style={{ background: 'var(--ink)', color: 'var(--yellow)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="label">
                  <strong>Email Us</strong>
                  <small>{COMPANY_INFO.email}</small>
                </div>
              </a>

              <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '3px dashed var(--ink)', textAlign: 'center' }}>
                <p style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 600, color: 'var(--ink)' }}>
                  🤠 Proudly serving all of Texas.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};
