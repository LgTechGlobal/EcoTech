import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, SlidersHorizontal, Check } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/siteData';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Windows', 'Doors', 'Custom Solutions'];

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Windows') return product.name.toLowerCase().includes('window') && !product.name.toLowerCase().includes('custom');
    if (activeFilter === 'Doors') return product.name.toLowerCase().includes('door') && !product.name.toLowerCase().includes('custom');
    if (activeFilter === 'Custom Solutions') return product.name.toLowerCase().includes('custom');
    return true;
  });

  return (
    <div className="pt-28 pb-20 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-royal">Architectural Systems</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-surface-dark tracking-tight mt-2">
            Explore Our Door & Window Collection
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Find a design that complements your space. Engineered for clean aesthetics, effortless operation, and long-term durability.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-royal text-white shadow-md shadow-royal/30'
                  : 'bg-white text-slate-600 hover:text-navy hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Specifications Clarity Note */}
        <div className="mt-16 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 max-w-3xl mx-auto text-center shadow-sm">
          <h3 className="font-bold text-surface-dark text-base">Custom Configurations & Profiles</h3>
          <p className="text-sm text-slate-600 mt-2">
            Product profiles are available in multiple track sizes, glazing depths, and hardware combinations. 
            <span className="block mt-1 font-medium text-royal">Contact us for available specifications and site measurements.</span>
          </p>
          <div className="mt-4">
            <Link
              to="/quote"
              className="inline-flex items-center space-x-2 text-xs font-bold text-royal hover:underline uppercase tracking-wider"
            >
              <span>Request custom elevation enquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
