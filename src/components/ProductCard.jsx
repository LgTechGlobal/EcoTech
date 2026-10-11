import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-card hover:shadow-premium-hover transition-all duration-300 flex flex-col hover:-translate-y-1.5">
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={product.heroImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-[11px] font-bold text-navy shadow-sm">
            <Sparkles className="w-3 h-3 text-royal" />
            <span>uPVC System</span>
          </span>
        </div>
      </div>

      {/* Product Details Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-surface-dark group-hover:text-royal transition-colors">
            {product.name}
          </h3>
          <p className="mt-2.5 text-sm text-slate-600 leading-relaxed line-clamp-3">
            {product.shortDescription}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <Link
            to={`/products/${product.slug}`}
            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:text-royal hover:border-royal/50 hover:bg-royal/5 transition-all"
          >
            <span>View Details</span>
          </Link>
          <Link
            to={`/quote?product=${encodeURIComponent(product.name)}`}
            className="flex-1 inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-lg bg-royal hover:bg-royal-hover text-white text-xs font-semibold shadow-sm hover:shadow transition-all"
          >
            <span>Get Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
