const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middlewares
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST']
}));
app.use(express.json({ limit: '1mb' }));

// Rate limiter for spam protection
const enquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // max 10 requests per IP per window
  message: { error: 'Too many quote requests from this IP, please try again in 15 minutes or reach us via WhatsApp.' }
});

// Database Models (Mongoose)
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  images: [{ type: String }],
  availableSpecifications: { type: String, default: "Contact us for available specifications." },
  isPublished: { type: Boolean, default: true }
}, { timestamps: true });

const EnquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, default: '' },
  location: { type: String, required: true },
  customerType: { type: String, default: 'Homeowner' },
  productCategory: { type: String, required: true },
  quantity: { type: String, default: '' },
  dimensions: { type: String, default: '' },
  projectType: { type: String, default: 'New Construction' },
  preferredContact: { type: String, default: 'WhatsApp' },
  projectDetails: { type: String, default: '' },
  status: { type: String, enum: ['New', 'Contacted', 'Estimated', 'Closed'], default: 'New' }
}, { timestamps: true });

const ProjectSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String }],
  category: { type: String, required: true },
  location: { type: String },
  isPublished: { type: Boolean, default: true }
}, { timestamps: true });

const Enquiry = mongoose.model('Enquiry', EnquirySchema);
const Product = mongoose.model('Product', ProductSchema);
const Project = mongoose.model('Project', ProjectSchema);

// MongoDB Connection
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB successfully.'))
    .catch(err => console.error('MongoDB connection error:', err));
} else {
  console.log('MONGODB_URI not provided. Server will accept and log enquiries to console/memory fallback.');
}

// API Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'ECOTECH UPVC API Server',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected (Fallback mode)'
  });
});

// Submit quotation enquiry
app.post('/api/enquiries', enquiryLimiter, async (req, res) => {
  try {
    const { fullName, phone, email, location, customerType, productCategory, quantity, dimensions, projectType, preferredContact, projectDetails } = req.body;

    // Validation
    if (!fullName || !phone || !location) {
      return res.status(400).json({ error: 'Full name, phone, and location are required fields.' });
    }

    const indianPhoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
    if (!indianPhoneRegex.test(phone.replace(/[\s-]/g, ''))) {
      return res.status(400).json({ error: 'A valid Indian mobile number is required.' });
    }

    if (mongoose.connection.readyState === 1) {
      const enquiry = new Enquiry({
        fullName,
        phone,
        email,
        location,
        customerType,
        productCategory,
        quantity,
        dimensions,
        projectType,
        preferredContact,
        projectDetails
      });
      await enquiry.save();
      return res.status(201).json({ success: true, message: 'Enquiry recorded in database successfully.', id: enquiry._id });
    } else {
      console.log('Received valid enquiry (Fallback memory):', { fullName, phone, location, productCategory });
      return res.status(200).json({ success: true, message: 'Enquiry acknowledged and queued for Odisha technical team.' });
    }
  } catch (error) {
    console.error('Enquiry submission error:', error);
    res.status(500).json({ error: 'Failed to process enquiry. Please contact us directly via WhatsApp.' });
  }
});

// Retrieve published products
app.get('/api/products', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const products = await Product.find({ isPublished: true });
      return res.json(products);
    }
    // Return standard catalogue dataset when DB is not connected
    const siteData = require('../src/data/siteData');
    res.json(siteData.PRODUCTS_DATA);
  } catch (err) {
    res.status(500).json({ error: 'Unable to retrieve products.' });
  }
});

app.listen(PORT, () => {
  console.log(`ECOTECH server listening on port ${PORT}`);
});
