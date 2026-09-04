import React from 'react';
import { Phone, MessageSquare, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/rentals';

export const FloatingActions: React.FC = () => {
  return (
    <aside
      id="floating-contact-bar"
      aria-label="Quick booking and contact actions"
      className="fixed bottom-0 inset-x-0 z-40 bg-white border-t-[3px] border-[#0F172A] shadow-[0_-4px_0_rgba(15,23,42,0.15)] p-2.5 sm:hidden"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          id="mobile-float-call"
          href={COMPANY_INFO.callLink}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#38BDF8] text-[#0F172A] border-2 border-[#0F172A] font-black text-xs shadow-[2px_2px_0_#0F172A] active:translate-y-0.5 active:shadow-none"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span>Call Now</span>
        </a>

        {/* Text SMS */}
        <a
          id="mobile-float-sms"
          href={COMPANY_INFO.smsLink}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#FACC15] text-[#0F172A] border-2 border-[#0F172A] font-black text-xs shadow-[2px_2px_0_#0F172A] active:translate-y-0.5 active:shadow-none"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span>Text Us</span>
        </a>

        {/* WhatsApp */}
        <a
          id="mobile-float-whatsapp"
          href={COMPANY_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] text-white border-2 border-[#0F172A] font-black text-xs shadow-[2px_2px_0_#0F172A] active:translate-y-0.5 active:shadow-none"
        >
          <Send className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
