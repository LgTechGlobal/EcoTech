# ECOTECH UPVC DOORS AND WINDOWS — Website & Systems

A complete, production-grade, responsive website and quotation platform for **ECOTECH UPVC DOORS AND WINDOWS**, serving residential and commercial clients across Odisha, India.

---

## 🌟 Brand & Design Identity

- **Brand Name**: ECOTECH UPVC DOORS AND WINDOWS
- **Tagline**: UPVC DOORS & WINDOWS
- **Core Market**: Odisha, India (including Soro, Balasore, Bhadrak, Bhubaneswar & surrounding districts)
- **Primary Contact**: Phone & WhatsApp: `+91 8895009493`
- **Color Palette**:
  - Deep Navy Blue: `#10243A`
  - Royal Blue: `#1769AA`
  - Eco Green: `#3B8D63`
  - Surface Light Grey: `#F4F6F8`
  - Dark Charcoal Text: `#17212B`

---

## 🛠️ Technology Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS with custom design system tokens
- **Icons**: Lucide React
- **Routing**: React Router DOM (v7)
- **Backend API**: Node.js + Express with Helmet, CORS, and Express-Rate-Limit
- **Database Model**: MongoDB / Mongoose schemas (`Enquiry`, `Product`, `Project`)

---

## 🚀 Getting Started

### 1. Frontend Development

```bash
# Install dependencies (already completed)
npm install

# Start Vite dev server
npm run dev
```

The application runs on `http://localhost:5173`.

### 2. Frontend Production Build

```bash
npm run build
npm run preview
```

### 3. Optional Backend Server

```bash
cd server
npm install
# Copy .env.example to .env and insert your MongoDB connection URI if available:
# cp .env.example .env
npm start
```

*Note: The frontend operates autonomously with client-side fallback and direct WhatsApp synchronization if a MongoDB instance is not configured.*

---

## 📋 Features Implemented

1. **Sticky Navigation Bar**:
   - Transparent overlay on hero image, transitions smoothly to dark navy on scroll.
   - Interactive dropdown for product categories on desktop.
   - Mobile slide-out drawer menu with direct call & quotation links.

2. **Architectural Hero Section**:
   - Headline: *"Bring More Light. Add More Comfort."*
   - Floating featured product preview card.
   - Bottom trust strip highlighting *Modern Designs*, *Professional Installation*, and *Customer-Focused Service*.

3. **Complete Product Catalogue & Individual Detail Pages**:
   - `uPVC Sliding Windows`
   - `uPVC Casement Windows`
   - `uPVC Sliding Doors`
   - `uPVC Casement Doors`
   - `uPVC Fixed Windows`
   - `Custom Door & Window Solutions`
   - Transparent specifications notice (*"Contact us for available specifications"*).
   - In-page dynamic quote form that automatically preselects the viewed product.

4. **Projects Gallery**:
   - Category filtering (Residential, Apartments, Commercial, Doors, Windows, Renovations).
   - Lightbox modal viewer for high-resolution images.
   - Clear disclosure of architectural demonstration content.

5. **Quote Request & Contact Form**:
   - Validates Indian mobile numbers (10 digits starting with 6,7,8,9).
   - Dual-path submission: API backend + instant pre-filled WhatsApp link handover.

6. **Floating WhatsApp CTA**:
   - Fixed position bottom-right on all pages with pre-filled message to `+91 8895009493`.
