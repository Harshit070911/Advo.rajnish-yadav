import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally handle API submission here
    alert('Thank you for your message. We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px', paddingBottom: '40px', minHeight: '100vh' }}>
      <div className="container">
        <div className="text-center section-header" style={{ marginBottom: '4rem' }}>
          <h4 className="text-accent subtitle">Get In Touch</h4>
          <h1 className="section-title">Contact Us</h1>
          <p className="section-desc">
            Schedule a confidential consultation. We are here to provide the legal support you need.
          </p>
        </div>

        <div className="grid grid-cols-2" style={{ gap: '4rem' }}>
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1.5rem' }}>
              Our Office
            </h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>
              We are strategically located in the heart of the legal district, ensuring easy access for our clients.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ 
                  width: '50px', height: '50px', borderRadius: '50%', 
                  background: 'rgba(212, 175, 55, 0.1)', color: 'var(--color-accent)',
                  display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0
                }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Location</h4>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                    Chamber No. 223, Street 6,<br />
                    District Court Compound, G, Surajpur,<br />
                    Greater Noida, Uttar Pradesh 201306
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ 
                  width: '50px', height: '50px', borderRadius: '50%', 
                  background: 'rgba(212, 175, 55, 0.1)', color: 'var(--color-accent)',
                  display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0
                }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Phone</h4>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                    +91 9811673167<br />
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ 
                  width: '50px', height: '50px', borderRadius: '50%', 
                  background: 'rgba(212, 175, 55, 0.1)', color: 'var(--color-accent)',
                  display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0
                }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>
                    rajnish07advo@gmail.com
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ 
                  width: '50px', height: '50px', borderRadius: '50%', 
                  background: 'rgba(212, 175, 55, 0.1)', color: 'var(--color-accent)',
                  display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0
                }}>
                  <Clock size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Working Hours</h4>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                    Monday - Friday: 9:00 AM - 7:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="glass-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem' }}>
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="name" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    style={{ 
                      padding: '0.8rem 1rem', 
                      background: 'rgba(0,0,0,0.2)', 
                      border: '1px solid rgba(255,255,255,0.1)', 
                      borderRadius: '4px',
                      color: 'var(--color-text)',
                      outline: 'none'
                    }} 
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="email" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    style={{ 
                      padding: '0.8rem 1rem', 
                      background: 'rgba(0,0,0,0.2)', 
                      border: '1px solid rgba(255,255,255,0.1)', 
                      borderRadius: '4px',
                      color: 'var(--color-text)',
                      outline: 'none'
                    }} 
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="phone" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    style={{ 
                      padding: '0.8rem 1rem', 
                      background: 'rgba(0,0,0,0.2)', 
                      border: '1px solid rgba(255,255,255,0.1)', 
                      borderRadius: '4px',
                      color: 'var(--color-text)',
                      outline: 'none'
                    }} 
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="subject" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    style={{ 
                      padding: '0.8rem 1rem', 
                      background: 'rgba(0,0,0,0.2)', 
                      border: '1px solid rgba(255,255,255,0.1)', 
                      borderRadius: '4px',
                      color: 'var(--color-text)',
                      outline: 'none'
                    }} 
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="message" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows="5" 
                  required 
                  style={{ 
                    padding: '0.8rem 1rem', 
                    background: 'rgba(0,0,0,0.2)', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    borderRadius: '4px',
                    color: 'var(--color-text)',
                    outline: 'none',
                    resize: 'vertical'
                  }} 
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ 
                  marginTop: '1rem', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  padding: '1rem'
                }}
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
        
        {/* Google Maps Embed */}
        <div style={{ marginTop: '5rem', height: '400px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
          <iframe 
            src="https://maps.google.com/maps?q=District+Court+Compound,+Surajpur,+Greater+Noida&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
