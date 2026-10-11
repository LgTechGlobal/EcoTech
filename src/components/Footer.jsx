import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Mail, ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS_DATA } from '../data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-slate-300 border-t border-navy-muted/40 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-royal/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-royal to-navy-light border border-royal-light/40 flex items-center justify-center shadow-md">
                <span className="font-extrabold text-white text-xl tracking-tighter">E</span>
                <div className="w-1.5 h-1.5 rounded-full bg-eco ml-0.5"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-black tracking-wider text-xl text-white">
                  ECOTECH
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-emerald-400 uppercase -mt-1">
                  UPVC DOORS & WINDOWS
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300/90 leading-relaxed">
              Thoughtfully designed uPVC doors and windows that bring style, comfort, and lasting value to living and commercial spaces across Odisha.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-eco/10 border border-eco/30 text-eco-light text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-eco" />
                <span>Odisha & Soro Region Supplier</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-royal pl-2.5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all">
                  <ArrowRight className="w-3 h-3 text-royal-light" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all">
                  <ArrowRight className="w-3 h-3 text-royal-light" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all">
                  <ArrowRight className="w-3 h-3 text-royal-light" />
                  <span>Door & Window Range</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all">
                  <ArrowRight className="w-3 h-3 text-royal-light" />
                  <span>Our Projects</span>
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="hover:text-white hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all">
                  <ArrowRight className="w-3 h-3 text-royal-light" />
                  <span>Why Choose Us</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all">
                  <ArrowRight className="w-3 h-3 text-royal-light" />
                  <span>Contact ECOTECH</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-royal pl-2.5">
              Our Products
            </h3>
            <ul className="space-y-2.5 text-sm">
              {PRODUCTS_DATA.map((product) => (
                <li key={product.id}>
                  <Link 
                    to={`/products/${product.slug}`} 
                    className="hover:text-white hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-royal-light"></span>
                    <span>{product.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Free Quote */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-royal pl-2.5">
              Contact Information
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">Direct Phone Inquiry</p>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-white font-medium hover:text-royal-light transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">Instant WhatsApp Quote</p>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline font-medium"
                  >
                    Message +91 8895009493
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-royal-light mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">Service Coverage</p>
                  <p className="text-slate-300 text-xs">
                    Odisha, India (Soro, Balasore, Bhadrak, Bhubaneswar & nearby districts)
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-5">
              <Link
                to="/quote"
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-royal hover:bg-royal-hover text-white text-xs font-bold tracking-wide uppercase shadow-md transition-all"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 mt-8 border-t border-navy-muted/50 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="text-slate-500">Residential & Commercial Solutions</span>
            <Link to="/contact" className="hover:text-slate-300">Customer Support</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
