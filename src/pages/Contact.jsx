import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Send, CheckCircle2, Clock, Mail, ShieldCheck, Loader2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    
    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    const indianPhoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!indianPhoneRegex.test(phoneClean)) {
      errs.phone = 'Please provide a valid Indian mobile number.';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please provide a valid email address.';
      }
    }

    if (!formData.message.trim()) errs.message = 'Message is required.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          phone: formData.phone,
          email: formData.email,
          location: 'Contact Form Inquiry',
          productCategory: 'General Inquiry',
          projectDetails: `Subject: ${formData.subject}\nMessage: ${formData.message}`
        })
      });
    } catch (err) {
      // Local fallback
      const list = JSON.parse(localStorage.getItem('ecotech_contacts') || '[]');
      list.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem('ecotech_contacts', JSON.stringify(list));
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-28 pb-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-royal">Contact ECOTECH</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-surface-dark tracking-tight mt-2">
            Get in Touch With Us
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Have a question about uPVC doors, window dimensions, or site installations? Our team in Odisha is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Verified Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
              <h2 className="text-2xl font-bold tracking-tight mb-2">
                {COMPANY_INFO.name}
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-8">
                {COMPANY_INFO.category}
              </p>

              <div className="space-y-6 text-sm">
                
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Direct Telephone Support</span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-lg font-bold text-white hover:text-royal-light transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Instant WhatsApp Chat</span>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-emerald-400 hover:underline"
                    >
                      Chat on +91 8895009493
                    </a>
                  </div>
                </div>

                {/* Service Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-royal-light">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Service Coverage Location</span>
                    <p className="text-slate-200 text-sm leading-relaxed mt-0.5">
                      Serving Odisha, India — including Soro, Balasore, Bhadrak, Bhubaneswar, and surrounding areas.
                    </p>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      (Physical showroom address will be updated once confirmed)
                    </span>
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-navy-muted/60 text-xs text-slate-300">
                <span className="flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Available Mon to Sat: 9:00 AM – 7:00 PM IST</span>
                </span>
              </div>
            </div>
          </div>

          {/* Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-premium border border-slate-100">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-eco-subtle text-eco rounded-full flex items-center justify-center mx-auto mb-4 border border-eco/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-surface-dark">Message Sent Successfully</h3>
                  <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out to ECOTECH. Our team will review your message and reply via phone or WhatsApp shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-royal text-white text-xs font-bold uppercase tracking-wider hover:bg-royal-hover transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-surface-dark mb-1">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    Fill out the form below and we will get back to you promptly.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.name ? 'border-red-400' : 'border-slate-200 focus:border-royal'
                        } focus:outline-none focus:ring-2 focus:ring-royal/20 text-sm`}
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 8895009493"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.phone ? 'border-red-400' : 'border-slate-200 focus:border-royal'
                        } focus:outline-none focus:ring-2 focus:ring-royal/20 text-sm`}
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20 text-sm"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Sliding window quotation for villa"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your requirements or questions..."
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.message ? 'border-red-400' : 'border-slate-200 focus:border-royal'
                      } focus:outline-none focus:ring-2 focus:ring-royal/20 text-sm`}
                    ></textarea>
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
