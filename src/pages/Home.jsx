import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageSquare, CheckCircle, Sparkles, Building2, Shield, Wrench } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS_DATA, WHY_CHOOSE_US } from '../data/siteData';
import ProductCard from '../components/ProductCard';
import CommitmentSection from '../components/CommitmentSection';

export default function Home() {
  return (
    <div className="overflow-hidden">
      
      {/* 4. HOME PAGE — PREMIUM HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center bg-navy text-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Background Architectural Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="Contemporary architectural home with floor-to-ceiling uPVC windows and doors"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle dark gradient overlay for readable text */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy/85 to-navy/60"></div>
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-navy-900/40 to-navy-900/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Small Label */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-royal-light/20 border border-royal-light/30 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest text-emerald-300 uppercase">
                  PREMIUM uPVC WINDOWS & DOORS
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Bring More Light. <br />
                <span className="bg-gradient-to-r from-white via-slate-100 to-royal-light bg-clip-text text-transparent">
                  Add More Comfort.
                </span>
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-lg sm:text-xl text-slate-200/90 max-w-2xl font-normal leading-relaxed">
                Discover thoughtfully designed uPVC doors and windows that bring style, comfort, and lasting value to your living spaces across Odisha.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-royal hover:bg-royal-hover text-white font-semibold text-base shadow-xl shadow-royal/30 hover:shadow-royal/50 hover:-translate-y-0.5 transition-all"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur-md hover:-translate-y-0.5 transition-all"
                >
                  <span>Request a Free Quote</span>
                </Link>
              </div>

              {/* Service Note */}
              <div className="pt-2 flex items-center space-x-2 text-xs font-semibold text-slate-300">
                <Building2 className="w-4 h-4 text-emerald-400" />
                <span>Residential & Commercial Solutions</span>
                <span className="text-slate-500">•</span>
                <span>Serving Odisha & Soro Region</span>
              </div>

            </div>

            {/* Right Visual Treatment: Floating Architectural Preview Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl backdrop-blur-md bg-white/5 p-2">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80"
                  alt="Architectural sliding glass door installed in contemporary home"
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl shadow-inner"
                />

                {/* Floating Product Detail Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-navy-900/90 backdrop-blur-md border border-white/10 text-white shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">Featured System</p>
                      <h4 className="text-base font-bold text-white mt-0.5">Heavy-Duty Sliding Door</h4>
                      <p className="text-xs text-slate-300 mt-0.5">Engineered for smooth patio & balcony access</p>
                    </div>
                    <Link
                      to="/products/upvc-sliding-doors"
                      className="p-2.5 rounded-xl bg-royal hover:bg-royal-hover text-white transition-colors"
                      title="View System"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Trust Strip */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="flex items-center space-x-4 bg-white/5 sm:bg-transparent p-4 sm:p-0 rounded-xl sm:rounded-none">
              <div className="w-12 h-12 rounded-xl bg-royal/20 border border-royal-light/30 flex items-center justify-center shrink-0 text-royal-light">
                <Sparkles className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Modern Designs</h4>
                <p className="text-xs text-slate-300 mt-0.5">Clean architectural aesthetics for contemporary homes</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-white/5 sm:bg-transparent p-4 sm:p-0 rounded-xl sm:rounded-none">
              <div className="w-12 h-12 rounded-xl bg-royal/20 border border-royal-light/30 flex items-center justify-center shrink-0 text-royal-light">
                <Wrench className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Professional Installation</h4>
                <p className="text-xs text-slate-300 mt-0.5">Precise measurement and expert on-site fitting</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-white/5 sm:bg-transparent p-4 sm:p-0 rounded-xl sm:rounded-none">
              <div className="w-12 h-12 rounded-xl bg-royal/20 border border-royal-light/30 flex items-center justify-center shrink-0 text-royal-light">
                <Shield className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Customer-Focused Service</h4>
                <p className="text-xs text-slate-300 mt-0.5">Direct communication and transparent project estimates</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. ABOUT US SECTION (Two-column layout) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Architectural photograph column */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern architectural house with large uPVC windows"
                  className="w-full h-[460px] object-cover"
                />
              </div>
              
              {/* Floating verified badge */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center space-x-3 bg-navy text-white p-5 rounded-2xl shadow-xl border border-navy-muted">
                <div className="w-10 h-10 rounded-full bg-eco text-white flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Local Odisha Presence</p>
                  <p className="text-sm font-bold">Door & Window Experts</p>
                </div>
              </div>
            </div>

            {/* Text details column */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-royal text-xs font-bold uppercase tracking-wider">
                <span>About ECOTECH</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-surface-dark tracking-tight leading-tight">
                Designed for Better Living
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                ECOTECH UPVC DOORS AND WINDOWS provides door and window solutions for residential and commercial spaces. Our focus is on practical designs, quality materials, careful installation, and helping customers choose products suited to their needs.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-eco/10 text-eco flex items-center justify-center mt-1 shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-surface-dark text-sm">Quality & Installation Approach</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Accurate on-site measurements and dependable fixing practices tailored for coastal weather conditions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-eco/10 text-eco flex items-center justify-center mt-1 shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-surface-dark text-sm">Customer Service Philosophy</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Straightforward recommendations, prompt quote turnarounds, and support from selection to installation.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center space-x-4">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-navy hover:bg-navy-light text-white font-semibold text-sm transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-sm transition-all"
                >
                  <span>Speak With Us</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. PRODUCTS SECTION */}
      <section className="py-24 bg-surface border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">Catalogue</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-surface-dark tracking-tight mt-1">
              Explore Our Door & Window Collection
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Find a design that complements your space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS_DATA.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/quote"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-royal hover:bg-royal-hover text-white font-semibold text-sm shadow-md transition-all"
            >
              <span>Request a Custom Door or Window Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 7. WHY CHOOSE ECOTECH SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">The ECOTECH Advantage</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-surface-dark tracking-tight mt-1">
              Practical Solutions. Thoughtful Design.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Straightforward guidance, verified capabilities, and attentive customer service across every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((item) => (
              <div 
                key={item.id} 
                className="p-8 rounded-2xl bg-surface border border-slate-200/80 hover:border-royal/30 hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-royal/10 text-royal flex items-center justify-center font-bold text-lg mb-6">
                    0{item.id}
                  </div>
                  <h3 className="text-lg font-bold text-surface-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. COMMITMENT TO CUSTOMERS */}
      <CommitmentSection />

      {/* CALL TO ACTION BANNER */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Ready to Upgrade Your Windows & Doors?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Contact our team in Odisha today for product recommendations, site measurement visits, and free transparent quotations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/quote"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-royal hover:bg-royal-hover text-white font-semibold text-sm shadow-xl shadow-royal/30"
              >
                <span>Get a Free Quote Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
