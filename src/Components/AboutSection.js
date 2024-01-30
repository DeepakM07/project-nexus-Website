import React from 'react';

function AboutSection() {
  return (
    <section id="about" className="about">
    <div className="container">

      <div className="section-title">
        <h2>About</h2>
        <h3 >Learn <span>About Us</span></h3>
        <p>Techies is founded in 2018 with the group of Full Stack Developers.</p>
      </div>

      <div className="row content">
        <div className="col-lg-6">
          <p>
            We are on a mission of helping the businesses to Utilize the Technology
          </p>
          <ul>
            <li><i className="fa-solid fa-check"></i> Understand Your Needs</li>
            <li><i className="fa-solid fa-check"></i> Develop the Functionalities with User Friendly Access</li>
            <li><i className="fa-solid fa-check"></i> Helps to Transform From Man Work to System Work</li>
          </ul>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0">
          <p>
            If you are running a Business, Our new Product <strong>Techies Business</strong>
            will help you to solve many needs. It's a anytime and anywhere access product with free of cost.
            We are planning to make it as an ERP and have a try with the product.
          </p>
          <a href="https://business.strackit.com" target="_blank" className="btn-learn-more">Start Now</a>
          <a href="https://business.strackit.com/explore.pdf" target="_blank" className="btn-learn-more">Learn More</a>
        </div>
      </div>

    </div>
  </section>
  );
}

export default AboutSection;
