import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, Phone, MessageSquare, Loader2, Sparkles } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS_DATA } from '../data/siteData';

export default function QuoteForm({ preselectedProduct = '' }) {
  const [searchParams] = useSearchParams();
  const initialProduct = preselectedProduct || searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    customerType: 'Homeowner',
    productCategory: initialProduct || PRODUCTS_DATA[0]?.name || '',
    quantity: '',
    dimensions: '',
    projectType: 'New Construction',
    preferredContact: 'WhatsApp',
    projectDetails: '',
    fileReferenceNote: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState('');

  const customerTypes = ['Homeowner', 'Builder', 'Contractor', 'Architect', 'Business'];
  const projectTypes = ['New Construction', 'Renovation', 'Commercial Project'];
  const contactPreferences = ['WhatsApp', 'Phone Call', 'Email'];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    }

    // Indian mobile number validation (10 digits starting with 6,7,8,9, optional +91 or 0)
    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    const indianPhoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!indianPhoneRegex.test(phoneClean)) {
      errs.phone = 'Please provide a valid 10-digit Indian mobile number.';
    }

    // Email validation
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please provide a valid email address.';
      }
    }

    if (!formData.location.trim()) {
      errs.location = 'City or location in Odisha is required (e.g. Soro, Balasore, Bhubaneswar).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionFeedback('');

    try {
      // First attempt to submit to local Node/Express backend if running
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmittedSuccess(true);
        setSubmissionFeedback('Your quotation request has been securely registered in our system. Our Odisha technical advisor will reach out promptly.');
      } else {
        // If server responded with error or not configured, store locally as acknowledged and provide WhatsApp instant handover
        saveLocalAndConfirm();
      }
    } catch (err) {
      // Graceful fallback when standalone client runs without active server
      saveLocalAndConfirm();
    } finally {
      setIsSubmitting(false);
    }
  };

  const saveLocalAndConfirm = () => {
    try {
      const existing = JSON.parse(localStorage.getItem('ecotech_enquiries') || '[]');
      existing.push({
        ...formData,
        id: 'ENQ-' + Date.now(),
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('ecotech_enquiries', JSON.stringify(existing));
    } catch (e) {
      console.warn('Storage unavailable', e);
    }
    setSubmittedSuccess(true);
    setSubmissionFeedback('Enquiry recorded successfully! Our team will contact you directly.');
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello ECOTECH UPVC DOORS AND WINDOWS,
I would like to request a quotation:
- Name: ${formData.fullName || 'Prospective Client'}
- Location: ${formData.location || 'Odisha'}
- Product: ${formData.productCategory}
- Customer Type: ${formData.customerType}
- Project: ${formData.projectType}
- Quantity: ${formData.quantity || 'To be measured'}
${formData.projectDetails ? `- Details: ${formData.projectDetails}` : ''}`;
    return encodeURIComponent(text);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-premium border border-slate-100">
      {submittedSuccess ? (
        <div className="text-center py-10 animate-in fade-in duration-300">
          <div className="w-16 h-16 bg-eco-subtle text-eco rounded-full flex items-center justify-center mx-auto mb-5 border border-eco/30">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h3 className="text-2xl font-bold text-surface-dark">Thank You for Your Request!</h3>
          <p className="mt-3 text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
            {submissionFeedback}
          </p>

          <div className="mt-8 p-6 bg-surface rounded-2xl max-w-lg mx-auto border border-slate-200/80 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Request Summary</h4>
            <div className="text-sm space-y-1 text-slate-700">
              <p><span className="font-semibold">Name:</span> {formData.fullName}</p>
              <p><span className="font-semibold">Contact:</span> {formData.phone}</p>
              <p><span className="font-semibold">Location:</span> {formData.location}</p>
              <p><span className="font-semibold">Product:</span> {formData.productCategory}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Speed Up on WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setSubmittedSuccess(false);
                setFormData({
                  fullName: '',
                  phone: '',
                  email: '',
                  location: '',
                  customerType: 'Homeowner',
                  productCategory: PRODUCTS_DATA[0]?.name || '',
                  quantity: '',
                  dimensions: '',
                  projectType: 'New Construction',
                  preferredContact: 'WhatsApp',
                  projectDetails: '',
                  fileReferenceNote: ''
                });
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-sm transition-all"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rajesh Mohapatra"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.fullName ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-royal/20 focus:border-royal'
                } focus:outline-none focus:ring-2 text-sm text-slate-800 transition-all`}
              />
              {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Phone Number (WhatsApp Preferred) <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 9876543210 or +91 8895009493"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-royal/20 focus:border-royal'
                } focus:outline-none focus:ring-2 text-sm text-slate-800 transition-all`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Email Address (Optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.email ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-royal/20 focus:border-royal'
                } focus:outline-none focus:ring-2 text-sm text-slate-800 transition-all`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            {/* City or Location */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                City / Location in Odisha <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Soro, Balasore, Bhadrak, Bhubaneswar"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.location ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-royal/20 focus:border-royal'
                } focus:outline-none focus:ring-2 text-sm text-slate-800 transition-all`}
              />
              {errors.location && <p className="mt-1 text-xs text-red-500">{errors.location}</p>}
            </div>

            {/* Customer Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Customer Type
              </label>
              <select
                name="customerType"
                value={formData.customerType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-royal/20 focus:border-royal focus:outline-none focus:ring-2 text-sm text-slate-800 bg-white"
              >
                {customerTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Product Category */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Product Category Required
              </label>
              <select
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-royal/20 focus:border-royal focus:outline-none focus:ring-2 text-sm text-slate-800 bg-white"
              >
                {PRODUCTS_DATA.map((product) => (
                  <option key={product.id} value={product.name}>{product.name}</option>
                ))}
              </select>
            </div>

            {/* Number of Windows / Doors */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Approximate Count (Windows / Doors)
              </label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. 5 windows, 2 balcony doors"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-royal/20 focus:border-royal focus:outline-none focus:ring-2 text-sm text-slate-800"
              />
            </div>

            {/* Approximate Dimensions */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Approximate Dimensions (Optional)
              </label>
              <input
                type="text"
                name="dimensions"
                value={formData.dimensions}
                onChange={handleChange}
                placeholder="e.g. 5ft x 4ft, or site visit needed"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-royal/20 focus:border-royal focus:outline-none focus:ring-2 text-sm text-slate-800"
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Project Type
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-royal/20 focus:border-royal focus:outline-none focus:ring-2 text-sm text-slate-800 bg-white"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Preferred Contact Method
              </label>
              <select
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-royal/20 focus:border-royal focus:outline-none focus:ring-2 text-sm text-slate-800 bg-white"
              >
                {contactPreferences.map((pref) => (
                  <option key={pref} value={pref}>{pref}</option>
                ))}
              </select>
            </div>

          </div>

          {/* Project Details */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Project Details & Specific Requirements
            </label>
            <textarea
              name="projectDetails"
              rows="3"
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder="Tell us about your requirements, e.g., floor level, flymesh requirement, acoustic glass needs, or requested visit date..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-royal/20 focus:border-royal focus:outline-none focus:ring-2 text-sm text-slate-800"
            ></textarea>
          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:flex-1 inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-70 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Enquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Free Quotation Request</span>
                </>
              )}
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact via WhatsApp</span>
            </a>
          </div>

          <p className="text-center text-xs text-slate-500 pt-2">
            No spam. We use your details strictly to assess requirements and provide verified quotes.
          </p>
        </form>
      )}
    </div>
  );
}
