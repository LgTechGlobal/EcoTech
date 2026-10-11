import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';
import QuoteForm from '../components/QuoteForm';

export default function Quote() {
  return (
    <div className="pt-28 pb-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-royal">Get an Estimate</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-surface-dark tracking-tight mt-2">
            Let's Find the Right Solution for Your Space
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Provide your requirements below and our team will prepare a practical quotation tailored to your architectural dimensions and design preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Quotation Form (8 cols) */}
          <div className="lg:col-span-8">
            <QuoteForm />
          </div>

          {/* Contact Details & Direct Assistance (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick WhatsApp Support Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-5">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-surface-dark mb-2">
                Need Faster Assistance?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                You can chat directly with our Odisha team on WhatsApp to share blueprints, window sizes, or photos of your site.
              </p>
              
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Direct Call Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-royal/10 text-royal flex items-center justify-center mb-5">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-surface-dark mb-2">
                Call Us Directly
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Speak directly to our technical representative for guidance on specifications or scheduling an on-site visit.
              </p>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-lg font-bold text-royal hover:underline block mb-4"
              >
                {COMPANY_INFO.phone}
              </a>
              <span className="text-xs text-slate-500 flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
              </span>
            </div>

            {/* Service Coverage Guarantee */}
            <div className="bg-navy rounded-3xl p-6 sm:p-8 text-white">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Coverage</span>
              </div>
              <h4 className="text-lg font-bold">Serving Projects in Odisha</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                We cater to home builders, contractors, and architects in Soro, Balasore, Bhadrak, Bhubaneswar, and surrounding regions.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
