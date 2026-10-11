import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS_DATA } from '../data/siteData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [location.pathname]);

  const navBackgroundClass = isScrolled
    ? 'bg-navy/95 backdrop-blur-md shadow-lg border-b border-navy-muted/40 py-3'
    : isHome
    ? 'bg-gradient-to-b from-navy/80 via-navy/40 to-transparent py-5'
    : 'bg-navy py-4 border-b border-navy-muted/30';

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 relative py-1 hover:text-white ${
      isActive ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-royal-light' : 'text-slate-200'
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Brand / Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-royal to-navy-light border border-royal-light/40 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-white text-xl tracking-tighter">E</span>
              <div className="w-1.5 h-1.5 rounded-full bg-eco ml-0.5"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-black tracking-wider text-xl text-white group-hover:text-royal-light transition-colors">
                ECOTECH
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-emerald-400 uppercase -mt-1">
                UPVC DOORS & WINDOWS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About Us</NavLink>

            {/* Products with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <NavLink 
                to="/products" 
                className={({ isActive }) => `flex items-center space-x-1 text-sm font-medium transition-colors duration-200 py-1 hover:text-white ${
                  isActive ? 'text-white font-semibold' : 'text-slate-200'
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-royal-light' : ''}`} />
              </NavLink>

              {/* Dropdown Menu */}
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 py-3 mt-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Door & Window Range</p>
                  </div>
                  {PRODUCTS_DATA.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.slug}`}
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-royal transition-colors font-medium"
                    >
                      {product.name}
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-slate-100 px-4">
                    <Link
                      to="/products"
                      className="text-xs font-semibold text-royal hover:underline flex items-center justify-between"
                    >
                      <span>View All Products</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/projects" className={navLinkClass}>Our Projects</NavLink>
            <NavLink to="/why-choose-us" className={navLinkClass}>Why Choose Us</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* WhatsApp Quick Link */}
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with ECOTECH on WhatsApp"
              className="p-2.5 rounded-full bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-200 border border-emerald-500/30"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
            </a>

            {/* Direct Call */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="text-xs font-medium text-slate-300 hover:text-white flex items-center space-x-1 px-2.5 py-1.5 rounded-lg border border-slate-700/60 hover:border-slate-500 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-royal-light" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            {/* Free Quote CTA Button */}
            <Link
              to="/quote"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-royal hover:bg-royal-hover text-white text-sm font-semibold shadow-md shadow-royal/20 hover:shadow-royal/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center space-x-3 lg:hidden">
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-navy-light focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-900/98 backdrop-blur-xl border-b border-navy-muted/50 px-4 pt-4 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            <NavLink
              to="/"
              className={({ isActive }) => `px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-royal text-white' : 'text-slate-200 hover:bg-navy-light'}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-royal text-white' : 'text-slate-200 hover:bg-navy-light'}`}
            >
              About Us
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => `px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-royal text-white' : 'text-slate-200 hover:bg-navy-light'}`}
            >
              Products Catalogue
            </NavLink>
            
            {/* Mobile Sub-products */}
            <div className="pl-4 border-l border-slate-700/60 my-1 space-y-1.5">
              {PRODUCTS_DATA.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  className="block py-1 text-sm text-slate-300 hover:text-royal-light"
                >
                  • {product.name}
                </Link>
              ))}
            </div>

            <NavLink
              to="/projects"
              className={({ isActive }) => `px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-royal text-white' : 'text-slate-200 hover:bg-navy-light'}`}
            >
              Our Projects
            </NavLink>
            <NavLink
              to="/why-choose-us"
              className={({ isActive }) => `px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-royal text-white' : 'text-slate-200 hover:bg-navy-light'}`}
            >
              Why Choose Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-royal text-white' : 'text-slate-200 hover:bg-navy-light'}`}
            >
              Contact
            </NavLink>

            <div className="pt-4 border-t border-slate-800 flex flex-col space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-lg bg-navy-light text-slate-200 border border-slate-700 font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-royal-light" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>

              <Link
                to="/quote"
                className="flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-lg bg-royal hover:bg-royal-hover text-white font-semibold text-sm shadow-lg shadow-royal/30"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
