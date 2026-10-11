import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Compass, 
  Wrench, 
  ShieldAlert, 
  Info,
  ChevronRight,
  Phone,
  MessageSquare
} from 'lucide-react';
import { PRODUCTS_DATA, COMPANY_INFO } from '../data/siteData';
import QuoteForm from '../components/QuoteForm';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  // Related products (all except current)
  const relatedProducts = PRODUCTS_DATA.filter((p) => p.id !== product.id).slice(0, 3);

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.heroImage];

  return (
    <div className="pt-28 pb-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs font-medium text-slate-500 mb-8 overflow-x-auto whitespace-nowrap py-1">
          <Link to="/" className="hover:text-royal">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/products" className="hover:text-royal">Products</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-surface-dark font-semibold">{product.name}</span>
        </nav>

        {/* Product Hero Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Gallery View Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-card">
              <img
                src={images[activeImage] || product.heroImage}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* Thumbnail selector */}
            {images.length > 1 && (
              <div className="flex items-center space-x-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative w-24 h-18 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImage === idx ? 'border-royal shadow-md' : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail preview" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & CTA Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-royal-subtle text-royal text-xs font-bold uppercase tracking-wider">
              <span>Architectural uPVC System</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-surface-dark tracking-tight">
              {product.name}
            </h1>

            <p className="text-slate-600 leading-relaxed text-base">
              {product.overview}
            </p>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-3">
              <div className="flex items-start space-x-3 text-xs text-slate-700">
                <Info className="w-4 h-4 text-royal shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-surface-dark">Specifications Notice</span>
                  <p className="text-slate-600 mt-0.5">{product.specificationsNote}</p>
                </div>
              </div>
            </div>

            {/* Persistent Quote CTA */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="#enquiry-form"
                className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-semibold text-sm shadow-md transition-all"
              >
                <span>Request a Quote for this Product</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(`Hello ECOTECH, I am inquiring about ${product.name}. Please share details and pricing.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all"
                title="Ask on WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-2 flex items-center space-x-4 text-xs text-slate-500">
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-eco" />
                <span>Custom measurements</span>
              </span>
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-eco" />
                <span>On-site fitting in Odisha</span>
              </span>
            </div>

          </div>

        </div>

        {/* Technical Breakdown Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Key Design Considerations */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-card">
            <div className="w-10 h-10 rounded-xl bg-royal/10 text-royal flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-surface-dark mb-4">Key Design Features</h3>
            <ul className="space-y-3">
              {product.designConsiderations.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-royal mt-1.5 shrink-0"></span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Available Configurations */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-card">
            <div className="w-10 h-10 rounded-xl bg-royal/10 text-royal flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-surface-dark mb-4">Available Styles & Layouts</h3>
            <ul className="space-y-3">
              {product.availableStyles.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Application Areas & Care */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-card">
            <div className="w-10 h-10 rounded-xl bg-royal/10 text-royal flex items-center justify-center mb-4">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-surface-dark mb-4">Application & Care</h3>
            <div className="space-y-3">
              <p className="text-xs font-semibold text-surface-dark uppercase tracking-wider">Suitable For:</p>
              <ul className="space-y-1.5 pb-2">
                {product.applicationAreas.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-600 flex items-center space-x-2">
                    <span className="text-slate-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-slate-100">
                <p className="text-xs font-semibold text-surface-dark uppercase tracking-wider mb-1">Maintenance:</p>
                <p className="text-xs text-slate-600 leading-relaxed">{product.maintenance}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Embedded Quotation Form for this Product */}
        <div id="enquiry-form" className="mb-20 scroll-mt-28">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">Direct Inquiry</span>
            <h2 className="text-3xl font-extrabold text-surface-dark mt-1">
              Request a Quotation for {product.name}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Fill out your details below and our team will get in touch with approximate estimates and measurement availability.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <QuoteForm preselectedProduct={product.name} />
          </div>
        </div>

        {/* Related Products */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-surface-dark">Related Products</h3>
            <Link to="/products" className="text-sm font-semibold text-royal hover:underline flex items-center space-x-1">
              <span>View Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                to={`/products/${rel.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-card hover:shadow-premium transition-all p-4 flex flex-col"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4">
                  <img src={rel.heroImage} alt={rel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="font-bold text-surface-dark group-hover:text-royal transition-colors text-base">
                  {rel.name}
                </h4>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                  {rel.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
