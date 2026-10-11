import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col">
      {/* Interactive Tooltip Prompt */}
      {showTooltip && (
        <div className="mb-3 p-3 bg-white text-navy rounded-xl shadow-2xl border border-slate-100 max-w-xs text-xs relative animate-in fade-in slide-in-from-bottom-2">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute top-1 right-1 text-slate-400 hover:text-slate-700 p-1"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-bold text-navy">Need quick window advice?</p>
          <p className="text-slate-600 mt-1">Chat directly with the ECOTECH team for instant estimates and window options.</p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ECOTECH UPVC DOORS AND WINDOWS on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        {/* Pulsing indicator ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping opacity-75"></span>

        <MessageSquare className="w-7 h-7 fill-current relative z-10" />

        {/* Floating Label for Desktop Hover */}
        <span className="absolute right-16 bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md hidden sm:block">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
