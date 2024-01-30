import React from 'react';

function ServicesSection() {
  return (
    <section id="services" className="services">
      <div className="container">

        <div className="section-title">
          <h2 className='H2'>Services</h2>
          <h3 className='H9'>We do offer awesome <span>Services</span></h3>
          <p>Your Success is our Mission. It will not end until you stop.</p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="fa-brands fa-dribbble"></i></div>
              <h4 className="title"><a href="#">E-Commerce</a></h4>
              <p className="description">Standalone Shopping App and All in One Business app to manage your Bills, Stocks, Purchases and Customer Accountings.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="fa-bramds fa-file"></i></div>
              <h4 className="title"><a href="#">ERP Applications</a></h4>
              <p className="description">We are already done in Transport and Automobile Management System. Contact us to get Customized One.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="fa-solid fa-store"></i></div>
              <h4 className="title"><a href="#">Digital Marketing</a></h4>
              <p className="description">We are here to offer Bulk SMS, Whatsapp Marketing and the more with SEO, Google Ads or Social Media Marketing.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="fa-sharp fa-solid fa-earth-americas"></i></div>
              <h4 className="title"><a href="#">Web and Mobile App Development</a></h4>
              <p className="description">Do you have an idea or Do you want convert your business to online. We'll be there. Web, Android and iOS as your wish</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ServicesSection;
