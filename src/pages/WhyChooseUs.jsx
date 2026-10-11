import React from 'react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/siteData';
import { Layers, Compass, Wrench, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CommitmentSection from '../components/CommitmentSection';

const iconMap = {
  Layers: Layers,
  Compass: Compass,
  Wrench: Wrench,
  HeartHandshake: HeartHandshake
};

export default function WhyChooseUs() {
  return (
    <div className="pt-28 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-royal">Why Choose Us</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-surface-dark tracking-tight mt-2">
            Practical Solutions. Thoughtful Design.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We prioritize transparent guidance, verified product builds, and dependable installation support for every client in Odisha.
          </p>
        </div>

        {/* Four Core Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {WHY_CHOOSE_US.map((item) => {
            const IconComponent = iconMap[item.icon] || Layers;
            return (
              <div 
                key={item.id}
                className="bg-surface rounded-3xl p-8 sm:p-10 border border-slate-200/80 hover:border-royal/40 hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-royal/10 text-royal flex items-center justify-center">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Advantage 0{item.id}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-surface-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center space-x-2 text-xs font-semibold text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Transparent Standards Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment to Customers Pillar */}
        <CommitmentSection />

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="max-w-xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-surface-dark">Get in Touch with our Technical Team</h3>
            <p className="text-sm text-slate-600">
              Speak with us directly regarding configurations, measurements, or receiving a quotation for your site.
            </p>
            <div className="pt-2">
              <Link
                to="/quote"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-royal hover:bg-royal-hover text-white font-semibold text-sm shadow-md transition-all"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
