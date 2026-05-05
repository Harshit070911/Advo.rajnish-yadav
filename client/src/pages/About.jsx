import React from 'react';

const About = () => {
  return (
    <div className="page-wrapper" style={{ paddingTop: '100px', paddingBottom: '40px', minHeight: '100vh' }}>
      <div className="container">
        <h1 className="section-title text-accent">About Adv. Rajnish Yadav</h1>
        <div className="glass-card">
          <p>
           Adv.Rajnish Chand Yadav is a highly respected legal professional practicing primarily in the District Courts of Greater Noida. With an extensive career built on a reputation for providing meticulous, strategic, and aggressive representation, he has become a trusted name for clients facing complex legal challenges.
          </p>
          <br/> 
          <h3 className="text-accent" style={{ marginBottom: '1rem' }}>Education & Background</h3>
          <p>
            Adv. Yadav holds a Master's degree in Law, specializing in Criminal Law. His academic excellence laid the foundation for a career marked by a deep understanding of legal principles and their practical application in complex litigation.
          </p>
          <br/>
          <h3 className="text-accent" style={{ marginBottom: '1rem' }}>Our Philosophy</h3>
          <p>
            We believe that every client deserves dedicated, personalized attention. Legal battles are not just cases; they are pivotal moments in our clients' lives. We approach every matter with the gravity and dedication it demands, ensuring that our clients are supported by a powerhouse of legal strategy and unwavering ethics.
          </p>
          <br/>
          <h3 className="text-accent" style={{ marginBottom: '1rem' }}>Contact Info</h3>
          <p>For legal consultation and representation, you can reach out to our office at the District Court Compound:
          <li>Chamber Number: 223</li>
          <li>Office Address: Chamber No. 223, Street 6, District Court Compound, G, Surajpur, Greater Noida, Uttar Pradesh 201306</li>
          <li>Contact Number: +91 9811673167</li>
          <li>Email: rajnish07advo@gmail.com</li>
</p>
        </div>
      </div>
    </div>
  );
};

export default About;
