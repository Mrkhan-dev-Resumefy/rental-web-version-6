import React from 'react';
import { Truck, Sparkles, PhoneCall, MapPin, MessageSquare, ShieldCheck, Heart } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: Truck,
      title: 'Free Delivery & Setup',
      desc: 'On-time delivery, secure anchoring, and full equipment safety check across Texas.',
      badgeBg: 'bg-amber-400 text-slate-900',
    },
    {
      icon: Sparkles,
      title: '100% Sanitized & Clean',
      desc: 'Hospital-grade non-toxic sanitization before & after every celebration.',
      badgeBg: 'bg-sky-400 text-slate-900',
    },
    {
      icon: PhoneCall,
      title: 'Confirmed by Quick Call',
      desc: 'No confusing shopping carts — a friendly Texas team member verifies your timing.',
      badgeBg: 'bg-emerald-400 text-slate-900',
    },
    {
      icon: MapPin,
      title: 'Serving All of Texas',
      desc: 'Statewide coverage: DFW, Austin, Houston, San Antonio, suburban yards & ranches.',
      badgeBg: 'bg-rose-400 text-slate-900',
    },
    {
      icon: MessageSquare,
      title: 'Call, Text or WhatsApp',
      desc: 'Instant replies within minutes during business hours for zero party stress.',
      badgeBg: 'bg-purple-400 text-slate-900',
    },
  ];

  return (
    <section
      id="trust-strip-section"
      className="relative bg-[#F3ECE2] border-y-[3px] border-[#0F172A] py-14 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="eyebrow mb-3">
            <span className="dot" /> The EventsRentals.io Guarantee
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">
            Kid-Approved Fun, Zero Stress for Texas Families
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mt-2">
            Every booking includes white-glove setup, professional grade equipment, and transparent pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                id={`trust-badge-${index}`}
                className="flex flex-col gap-3 p-5 rounded-2xl bg-white border-[2.5px] border-[#0F172A] shadow-[4px_4px_0px_#0F172A,0_8px_16px_rgba(15,23,42,0.06)] hover:-translate-y-1.5 hover:shadow-[6px_6px_0px_#0F172A,0_16px_28px_rgba(15,23,42,0.12)] transition-all duration-200 group"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.badgeBg} border-2 border-[#0F172A] shadow-[2px_2px_0px_#0F172A] group-hover:scale-105 transition-transform`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold font-display text-slate-900 tracking-tight leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[12.5px] text-slate-600 mt-1.5 leading-relaxed">
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
