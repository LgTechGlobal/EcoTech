import React from 'react';
import { ShieldCheck, Compass, Wrench, HeartHandshake, Award, Clock } from 'lucide-react';

export default function CommitmentSection() {
  const commitments = [
    {
      icon: Compass,
      title: "Accurate Measurement & Sizing",
      description: "Our technicians inspect on-site dimensions before fabrication to ensure seamless structural fit."
    },
    {
      icon: ShieldCheck,
      title: "Quality Materials & Profile Cores",
      description: "All products use multi-chambered uPVC profiles reinforced with corrosion-resistant galvanized steel."
    },
    {
      icon: Wrench,
      title: "Trained Installation Standards",
      description: "Proper anchoring, level alignment, and weather-tight silicone sealing against heavy Odisha monsoons."
    },
    {
      icon: HeartHandshake,
      title: "Transparent Advice & Free Quotes",
      description: "Direct guidance on sliding vs casement systems tailored to your floor layout and budget expectations."
    }
  ];

  return (
    <section className="py-20 bg-surface border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-royal-subtle border border-royal/20 text-royal text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Customer First Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-surface-dark tracking-tight">
            Our Commitment to Customers
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            We hold ourselves to genuine quality and authentic service across Odisha. Verified reviews and project case studies are continually added as our client installations complete.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-7 border border-slate-100 shadow-card hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-royal/10 text-royal flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-surface-dark mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-emerald-600 uppercase tracking-wider flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
