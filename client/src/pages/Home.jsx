import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Scale, Shield, Users, BookOpen, Star } from 'lucide-react';
import { CardStack } from '../components/ui/card-stack';
import VideoInterviews from '../components/VideoInterviews';
import './Home.css';

const Home = () => {
  const interviewVideos = [
    { id: '8VxzZSAwrr8', title: 'Expert Legal Insights & Case Discussion' },
    { id: 'RkkgsKgWsnk', title: 'Understanding Your Rights in Court' },
    { id: 'mdpgRTNDmB0', title: 'Navigating Complex Legal Challenges' },
    { id: 'z7PcE6PZ47A', title: 'Advocate Rajnish Yadav on National TV' }
  ];
  const blogPosts = [
    {
      id: 1,
      title: "Defense Wins Bail for Noida Activists as Court Questions Police Evidence and Custody",
      description: "In a significant development for civil liberties in Noida, Advocate Rajnish Yadav secured bail for activists arrested under the Epidemic Diseases Act. The court’s decision came after a rigorous examination of the prosecution's evidence, highlighting critical procedural lapses and questioning the very basis of the custody orders. This case underscores the importance of robust legal defense in safeguarding fundamental rights against potentially overreaching executive actions.",
      tag: "",
      imageSrc: "/newspapers/WhatsApp%20Image%202026-05-06%20at%201.5.jpeg",
      href: "/blog"
    },
    {
      id: 2,
      title: "Is Ideology a Crime?: Lawyer Challenges Arrest of DU PhD Scholar Akriti",
      description: "Advocate Rajnish Yadav has emerged as a staunch defender of academic freedom and free speech in the controversial arrest of DU PhD scholar Akriti. Challenging the charges that link ideological expression with criminal conduct, Yadav argued vehemently against the notion that dissent or political activism can be criminalized. His legal intervention highlights the critical need for due process and the protection of fundamental rights, even for those whose views may be unpopular.",
      tag: "",
      imageSrc: "/newspapers/WhatsApp%20Image%202026-05-06%20at%201.54.17%20AM.jpeg",
      href: "/blog"
    },
    {
      id: 3,
      title: "Summons Followed by Bail: Noida Court Rules on Bhupesh Baghel’s Pandemic Act Charges",
      description: "In a landmark decision, a Noida court has granted bail to Chhattisgarh Chief Minister Bhupesh Baghel in a case involving charges under the Epidemic Diseases Act. Advocate Rajnish Yadav played a pivotal role in the proceedings, arguing successfully that the charges were disproportionate and lacked merit. The court’s order to proceed with summons rather than immediate custody reflects a nuanced understanding of the law and sets a precedent for handling high-profile cases involving political figures.",
      tag: "",
      imageSrc: "/newspapers/WhatsApp%20Image%202026-05-06%20at%202.17.59%20AM.jpeg",
      href: "/blog"
    }
  ];
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const services = [
    { icon: <Scale size={32} />, title: 'Criminal Defense', desc: 'Aggressive representation for all criminal charges.' },
    { icon: <Shield size={32} />, title: 'Civil Litigation', desc: 'Protecting your rights in civil disputes.' },
    { icon: <Users size={32} />, title: 'Family Law', desc: 'Compassionate handling of sensitive family matters.' },
    { icon: <BookOpen size={32} />, title: 'Corporate Law', desc: 'Strategic counsel for businesses of all sizes.' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="hero-subtitle">Premium Legal Counsel</motion.h2>
            <motion.h1 variants={fadeIn} className="hero-title">
              Justice. Integrity. <br />
              <span className="text-accent">Excellence.</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="hero-desc">
              Dedicated legal representation tailored to your unique situation. 
              We fight tirelessly to protect your rights and secure the best possible outcome.
            </motion.p>
            <motion.div variants={fadeIn} className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book Consultation
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Using a placeholder for 3D scale, you could replace this with a real image/model */}
            <div className="scale-illustration">
              <div className="scale-glow"></div>
              <Scale size={200} className="scale-icon-large" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="about-preview">
            <motion.div 
              className="about-image glass-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <img 
                src="profile.jpeg" 
                alt="Professional Lawyer" 
                className="w-full h-full object-cover rounded-lg border border-[rgba(255,255,255,0.1)]"
              />
            </motion.div>
            
            <motion.div 
              className="about-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h4 variants={fadeIn} className="text-accent subtitle">About The Advocate</motion.h4>
              <motion.h2 variants={fadeIn} className="section-title text-left">Adv. Rajnish Chand Yadav</motion.h2>
              <motion.p variants={fadeIn} className="lead-text">
                With over 20+ years of experience in the Courts, 
                we bring unparalleled expertise to every case.
              </motion.p>
              <motion.p variants={fadeIn}>
                Our practice is built on a foundation of unyielding dedication to our clients. 
                We understand that legal challenges can be daunting, which is why we provide clear, 
                strategic guidance and aggressive representation in the courtroom.
              </motion.p>
              <motion.div variants={fadeIn} className="stats">
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10k+</span>
                  <span className="stat-label">Cases Won</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">21+</span>
                  <span className="stat-label">Years Exp.</span>
                </div>
              </motion.div>
              <motion.div variants={fadeIn} style={{ marginTop: '2rem' }}>
                <Link to="/about" className="link-with-icon">
                  Read Full Profile <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center section-header">
            <h4 className="text-accent subtitle">Our Expertise</h4>
            <h2 className="section-title">Practice Areas</h2>
            <p className="section-desc">Comprehensive legal solutions tailored to your needs.</p>
          </div>
          
          <div className="grid grid-cols-4">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: 'var(--shadow-glow)' }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <Link to={`/services`} className="service-link">
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media & Interviews */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="text-center section-header mb-12">
            <h4 className="text-accent subtitle">Media & Appearances</h4>
            <h2 className="section-title">Interviews & Insights</h2>
            <p className="section-desc">Watch our latest discussions on pressing legal matters and high-profile cases.</p>
          </div>
          
          <VideoInterviews videos={interviewVideos} />
        </div>
      </section>

      {/* Blog/Featured Cards */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center section-header">
            <h4 className="text-accent subtitle">Legal Insights</h4>
            <h2 className="section-title">Latest News & Articles</h2>
            <p className="section-desc">Stay informed with our latest legal updates and expert opinions.</p>
          </div>
          
          <div className="flex justify-center w-full my-8">
            <CardStack 
              items={blogPosts} 
              autoAdvance={true} 
              intervalMs={3000} 
              cardWidth={450}
              cardHeight={300}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog" className="btn btn-outline">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="text-center section-header">
            <h4 className="text-accent subtitle">Client Success</h4>
            <h2 className="section-title">Testimonials</h2>
          </div>
          
          <div className="grid grid-cols-3">
            {[1, 2, 3].map((_, index) => (
              <motion.div 
                key={index}
                className="testimonial-card glass-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} fill="var(--color-accent)" color="var(--color-accent)" />
                  ))}
                </div>
                <p className="testimonial-text">
                  "Advocate Rajnish Yadav provided exceptional legal counsel during a very difficult time. 
                  His strategic approach and courtroom presence are unmatched."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div>
                    <h4 className="author-name">Ravi Kumar</h4>
                    <span className="author-title">Business Owner</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding cta-section">
        <div className="container text-center">
          <motion.div 
            className="cta-content glass-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Need Legal Assistance?</h2>
            <p>Don't face your legal challenges alone. Contact us today for a confidential consultation.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Schedule Consultation</Link>
              <a href="tel:+919811673167" className="btn btn-outline btn-lg">Call +91 9811673167</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
