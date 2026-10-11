import React, { useState } from 'react';
import { PROJECTS_GALLERY } from '../data/siteData';
import { X, MapPin, Eye, Info, Sparkles, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxProject, setLightboxProject] = useState(null);

  const categories = [
    'All',
    'Residential Homes',
    'Apartments',
    'Commercial Buildings',
    'Sliding Windows',
    'Glass Doors',
    'Renovation Projects'
  ];

  const filteredProjects = PROJECTS_GALLERY.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  return (
    <div className="pt-28 pb-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-royal">Architectural Installations</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-surface-dark tracking-tight mt-2">
            Our Projects Gallery
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Explore architectural door and window installations showcasing spatial elegance, modern profiles, and expansive glazing.
          </p>
        </div>

        {/* Clear Demonstration Content Notice */}
        <div className="mb-10 p-4 bg-royal-subtle/80 border border-royal/20 rounded-2xl max-w-2xl mx-auto flex items-start space-x-3 text-xs text-slate-700">
          <Info className="w-4 h-4 text-royal shrink-0 mt-0.5" />
          <p>
            <span className="font-bold text-royal">Demonstration Content Notice:</span> The following gallery displays architectural reference concepts and installation designs. Real ECOTECH installation case studies are updated regularly.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-royal text-white shadow-md shadow-royal/20'
                  : 'bg-white text-slate-600 hover:text-navy hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-card hover:shadow-premium-hover transition-all duration-300 flex flex-col"
            >
              {/* Image with Hover Lightbox trigger */}
              <div 
                className="relative aspect-[4/3] overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => setLightboxProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white text-navy text-xs font-bold shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project</span>
                  </span>
                </div>

                {/* Demonstration tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded bg-black/60 text-white text-[10px] uppercase tracking-wider backdrop-blur-sm">
                    Architectural Demo
                  </span>
                </div>
              </div>

              {/* Information */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                    <span className="font-semibold text-royal">{project.category}</span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{project.location}</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-surface-dark group-hover:text-royal transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">
                    {project.productsUsed.join(', ')}
                  </span>
                  <button
                    onClick={() => setLightboxProject(project)}
                    className="text-xs font-bold text-royal hover:underline"
                  >
                    Details & View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Project Detail Modal */}
        {lightboxProject && (
          <div 
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setLightboxProject(null)}
          >
            <div 
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/9] bg-slate-900">
                <img
                  src={lightboxProject.image}
                  alt={lightboxProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center space-x-3 text-xs text-slate-500 mb-2">
                  <span className="px-2.5 py-1 rounded bg-royal-subtle text-royal font-bold">
                    {lightboxProject.category}
                  </span>
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{lightboxProject.location}</span>
                  </span>
                  <span className="text-slate-400">|</span>
                  <span className="text-slate-500">Demonstration Model</span>
                </div>

                <h3 className="text-2xl font-bold text-surface-dark mb-3">
                  {lightboxProject.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {lightboxProject.description}
                </p>

                <div className="p-4 rounded-xl bg-surface border border-slate-200 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Products Featured</span>
                    <p className="text-sm font-semibold text-surface-dark mt-0.5">{lightboxProject.productsUsed.join(', ')}</p>
                  </div>
                  <Link
                    to="/quote"
                    onClick={() => setLightboxProject(null)}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-royal hover:bg-royal-hover text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
                  >
                    Request Similar Plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
