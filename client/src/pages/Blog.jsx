import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "Defense Wins Bail for Noida Activists as Court Questions Police Evidence and Custody",
      excerpt: "A Noida court has granted bail to several students and activists arrested following an industrial protest in Noida on April 10.Families of the arrested individuals, including scholars and teachers, claim their relatives were picked up without cause and have no history of criminal activity.The court issued bail after the defense highlighted a lack of evidence and the recovery of personal electronic gadgets from the accused.",
      date: "April,2026",
      author: "Adv. Rajnish Chand Yadav",
      category: "",
      imageSrc: "/newspapers/WhatsApp%20Image%202026-05-06%20at%201.5.jpeg"
    },
    {
      title: "Is Ideology a Crime?: Lawyer Challenges Arrest of DU PhD Scholar Akriti",
      excerpt: "Lawyer Rajnish Chand Yadav states the police haven't clarified specific charges against Akriti, a PhD student from Delhi University.The police verbally alleged she was instigating workers due to her association with 'leftist ideology'.The defense questions her involvement in an April 13 incident since she was already in custody by April 11.The lawyer maintains that holding a peaceful protest is a constitutional right and does not constitute a criminal offense.",
      date: "April,2026",
      author: "Adv. Rajnish Chand Yadav",
      category: "",
      imageSrc: "/newspapers/WhatsApp%20Image%202026-05-06%20at%201.54.17%20AM.jpeg"
    },
    {
      title: "Summons Followed by Bail: Noida Court Rules on Bhupesh Baghel’s Pandemic Act Charges",
      excerpt: "A Noida court has granted bail to former Chhattisgarh Chief Minister Bhupesh Baghel.The case involves alleged COVID-19 protocol violations during a 2022 election campaign in Noida.Legal action followed a police chargesheet regarding a door-to-door rally for a Congress candidate.Baghel's defense counsel argued that the charges were intentionally fabricated and politically motivated.",
      date: "Jan,2022",
      author: "Adv. Rajnish Chand Yadav",
      category: "",
      imageSrc: "/newspapers/WhatsApp%20Image%202026-05-06%20at%202.17.59%20AM.jpeg"
    }
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px', paddingBottom: '40px', minHeight: '100vh' }}>
      <div className="container">
        <div className="text-center section-header" style={{ marginBottom: '4rem' }}>
          <h4 className="text-accent subtitle">Legal Insights</h4>
          <h1 className="section-title">News & Articles</h1>
        </div>

        <div className="grid grid-cols-3">
          {posts.map((post, index) => (
            <div key={index} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                height: '200px', 
                borderRadius: '8px',
                marginBottom: '1.5rem',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <img 
                  src={post.imageSrc}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Calendar size={14} /> {post.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <User size={14} /> {post.author}
                </span>
              </div>
              
              <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                {post.category}
              </span>
              
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
                {post.title}
              </h3>
              
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', flexGrow: 1 }}>
                {post.excerpt}
              </p>
              
              <a href="#" style={{ color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500', marginTop: 'auto' }}>
                Read Article <ArrowRight size={16} className="text-accent" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
