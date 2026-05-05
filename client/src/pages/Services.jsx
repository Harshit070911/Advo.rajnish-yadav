import React from 'react';
import { Scale, Shield, Users, BookOpen, Briefcase, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const allServices = [
    { icon: <Scale size={40} />, title: 'Criminal Law', desc: 'Expert defense against all forms of criminal charges, from white-collar crimes to major felonies. We protect your rights at every stage of the legal process.' },
    { icon: <Shield size={40} />, title: 'Civil Litigation', desc: 'Robust representation in complex civil disputes including property matters, breach of contract, and tort claims.' },
    { icon: <Briefcase size={40} />, title: 'Corporate Law', desc: 'Comprehensive legal strategies for businesses: mergers and acquisitions, compliance, and corporate dispute resolution.' },
    { icon: <Users size={40} />, title: 'Family Law', desc: 'Handling sensitive family matters with care and discretion, including divorce proceedings, child custody, and alimony.' },
    { icon: <BookOpen size={40} />, title: 'Constitutional Law', desc: 'Filing writ petitions and PILs in the High Court and Supreme Court to protect fundamental rights.' },
    { icon: <FileText size={40} />, title: 'Intellectual Property', desc: 'Safeguarding your innovations, trademarks, and copyrights against infringement.' }
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px', paddingBottom: '40px', minHeight: '100vh' }}>
      <div className="container">
        <div className="text-center section-header" style={{ marginBottom: '4rem' }}>
          <h4 className="text-accent subtitle">Our Expertise</h4>
          <h1 className="section-title">Practice Areas</h1>
          <p className="section-desc" style={{ maxWidth: '700px', margin: '0 auto' }}>
            We provide specialized legal services across a wide spectrum of practice areas, 
            delivering strategic solutions to complex legal challenges.
          </p>
        </div>

        <div className="grid grid-cols-3">
          {allServices.map((service, index) => (
            <motion.div 
              key={index}
              className="glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: 'var(--shadow-glow)' }}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ 
                width: '70px', height: '70px', 
                background: 'rgba(212, 175, 55, 0.1)', 
                color: 'var(--color-accent)', 
                display: 'flex', justifyContent: 'center', alignItems: 'center', 
                borderRadius: '12px', marginBottom: '1.5rem' 
              }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
                {service.title}
              </h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
