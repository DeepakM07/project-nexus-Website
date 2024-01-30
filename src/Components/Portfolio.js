import React from 'react';

function Portfolio() {
	return (
		<section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title">
          <h2 className='H2'>Portfolio</h2>
          <h3 className='H9'>Check our <span>Portfolio</span></h3>
          <p>This is the proof What we can do and What we already done.</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-web">Web</li>
              <li data-filter=".filter-app">App</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="/images/jothi-transports.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Jothi Transports</h4>
              <p>Web and Manager Application to Manage the Lorries and Drivers</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="/images/vaigai-claas.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Vaigai Automotives</h4>
              <p>An ERP Application to manage multiple branches</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <a href="https://mobi-lapygo.com" target="_blank" className="details-link" title="More Details">
              <img src="/images/mobi-lapygo.png" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Mobi-Lapy Go</h4>
                <p>Online Mobile Service which gives service on door</p>
              </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <a href="https://business.strackit.com" target="_blank"  className="details-link" title="More Details">
              <img src="/images/strackit-business.png" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Techy Business</h4>
                <p>One stop solution for most of your business needs</p>
              </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <a href="https://sms.strackit.com" target="_blank" className="details-link" title="More Details">
              <img src="/images/strackit-sms.png" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Techy Bulk SMS</h4>
                <p>Engage with customers by delivering the right information at right time.</p>
              </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <a href="https://hachikopetstore.com" target="_blank" className="details-link" title="More Details">
              <img src="/images/hachiko.png" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Hachiko Pet Store</h4>
                <p>E-Commerce Online shopping application for pets</p>
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
	);
}

export default Portfolio;
