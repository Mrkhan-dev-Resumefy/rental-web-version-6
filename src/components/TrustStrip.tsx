import React from 'react';
import { Truck, Sparkles, PhoneCall, MapPin, MessageSquare, ShieldCheck, Heart } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: Truck,
      title: 'Free Delivery & Setup',
      desc: 'On-time delivery, secure anchoring, and full equipment check across Texas.',
      badgeColor: 'bg-red-500 text-white',
      cardBg: 'border-red-200/70',
    },
    {
      icon: Sparkles,
      title: '100% Sanitized & Clean',
      desc: 'Hospital-grade non-toxic sanitization before & after every party for safe play.',
      badgeColor: 'bg-blue-600 text-white',
      cardBg: 'border-blue-200/70',
    },
    {
      icon: PhoneCall,
      title: 'Confirmed by Quick Call',
      desc: 'No confusing shopping carts — a friendly Texas human verifies your timing.',
      badgeColor: 'bg-amber-500 text-slate-950',
      cardBg: 'border-amber-200/70',
    },
    {
      icon: MapPin,
      title: 'Serving All of Texas',
      desc: 'Statewide coverage: DFW, Austin, Houston, San Antonio, suburban yards & ranches.',
      badgeColor: 'bg-red-600 text-white',
      cardBg: 'border-red-200/70',
    },
    {
      icon: MessageSquare,
      title: 'Call, Text or WhatsApp',
      desc: 'Instant replies within minutes during business hours for zero party stress.',
      badgeColor: 'bg-blue-600 text-white',
      cardBg: 'border-blue-200/70',
    },
  ];

  return (
    <section
      id="trust-strip-section"
      className="relative bg-[#FFFDF2]/90 backdrop-blur-xl border-y-2 border-red-200/80 py-10 px-4 sm:px-6 lg:px-8 shadow-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-xs font-black uppercase tracking-widest text-red-600 bg-red-100/80 border border-red-200 px-3.5 py-1 rounded-full inline-block">
            🎪 The EventsRentals.io Promise
          </span>
          <h3 className="text-2xl font-black font-display text-slate-900 mt-1">
            Kid-Approved Fun, Zero Stress for Texas Parents
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                id={`trust-badge-${index}`}
                className={`flex items-start gap-3 p-4 rounded-2xl bg-[#FFFDF6]/95 backdrop-blur-md border-2 ${item.cardBg} hover:-translate-y-1 transition-all duration-200 shadow-md group hover:shadow-lg`}
              >
                <div
                  className={`p-2.5 rounded-xl shrink-0 ${item.badgeColor} shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black font-display text-slate-900 tracking-tight leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
