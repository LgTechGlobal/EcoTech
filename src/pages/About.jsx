import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, Eye, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function About() {
  return (
    <div className="pt-28 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-royal">Our Story & Standards</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-surface-dark tracking-tight mt-2">
            Designed for Better Living
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            ECOTECH UPVC DOORS AND WINDOWS provides door and window solutions for residential and commercial spaces. Our focus is on practical designs, quality materials, careful installation, and helping customers choose products suited to their needs.
          </p>
        </div>

        {/* Two-Column Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
              alt="Architectural uPVC glazing by ECOTECH"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Serving Odisha</p>
              <h4 className="text-lg font-bold">Residential & Commercial Glazing</h4>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-surface-dark">
              Practical Principles. Direct Collaboration.
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Selecting the right window or door system involves more than choosing a frame style. It requires understanding local weather exposure, wind direction, natural daylight orientation, and everyday space utilization.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              At ECOTECH, we guide homeowners, architects, and building contractors through available sash openings, glass configurations, and hardware accessories without confusing technical jargon or unsupported promises.
            </p>

            <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface border border-slate-200">
                <span className="font-bold text-surface-dark text-sm block">Authentic Materials</span>
                <span className="text-xs text-slate-600 mt-1 block">Galvanized steel reinforced uPVC chambers engineered for durability.</span>
              </div>
              <div className="p-4 rounded-xl bg-surface border border-slate-200">
                <span className="font-bold text-surface-dark text-sm block">Local Execution</span>
                <span className="text-xs text-slate-600 mt-1 block">On-site measurement and installation for Odisha properties.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quality & Installation Approach */}
        <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-slate-200/80 mb-20">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">Our Process</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-surface-dark mt-1">
              Quality & Installation Approach
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              How we approach every project to deliver reliable, long-term door and window performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-royal/10 text-royal flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h4 className="font-bold text-surface-dark mb-2">1. Site Measurement</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We take precise opening dimensions on-site to account for plaster thickness, masonry squareness, and lintel clearances.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-royal/10 text-royal flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h4 className="font-bold text-surface-dark mb-2">2. Fabrication & Assembly</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Profiles are welded and reinforced with internal galvanized steel cores. Hardware and gasket seals are fitted with precision.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-royal/10 text-royal flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h4 className="font-bold text-surface-dark mb-2">3. Professional Installation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Units are anchored securely, plumb-leveled, and sealed with weather-resistant silicone to safeguard against monsoon rains.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Support CTA */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-surface-dark">Discuss Your Upcoming Project</h3>
          <p className="text-sm text-slate-600">
            Have questions about window dimensions or balcony configurations? Connect with our team today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/quote"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-royal hover:bg-royal-hover text-white font-semibold text-sm shadow-md transition-all"
            >
              <span>Get Free Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 8895009493</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
