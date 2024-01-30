import React from 'react';

function FAQSection() {
    return (
        <section id="faq" className="faq">
        <div className="container">
  
          <div className="section-title">
            <h2 className='H2'>F.A.Q</h2>
            <h3 className='H9'>Frequently Asked <span>Questions</span></h3>
          </div>
  
          <ul className="faq-list">
            <li>
              <a data-toggle="collapse" href="#faq2" className="collapsed">What kind of projects you can do? <i className="fa-regular fa-arrow-right"></i></a>
              <div id="faq2" className="collapse" data-parent=".faq-list">
                <p>
                  As we already mentioned we are more enthusiastic in technologies. So whatever you planned to develop as a software you can contact us anytime.
                </p>
              </div>
            </li>
  
            <li>
              <a data-toggle="collapse" href="#faq3" className="collapsed">How much time you will take for projects? <i className="icofont-simple-up"></i></a>
              <div id="faq3" className="collapse" data-parent=".faq-list">
                <p>
                  Project time will be vary based on the requirement. For example, We can deliver an E-Commerce application or Website in 2 days if you are ok with our theme. If you are looking for a Customized projects it will be vary.
                </p>
              </div>
            </li>
  
            <li>
              <a data-toggle="collapse" href="#faq4" className="collapsed">What about the pricing? <i className="icofont-simple-up"></i></a>
              <div id="faq4" className="collapse" data-parent=".faq-list">
                <p>
                  Don't worry about that. We will charge only as per your interest and requiremnet. We don't want our clients to waste money. We are also running a business and we know how worth it is.
                </p>
              </div>
            </li>
  
            <li>
              <a data-toggle="collapse" href="#faq5" className="collapsed">How I can know the work status? <i className="icofont-simple-up"></i></a>
              <div id="faq5" className="collapse" data-parent=".faq-list">
                <p>
                  We will allocate you a person. You can contact them whenever you want and you can check the production status in live.
                </p>
              </div>
            </li>
  
          </ul>
  
        </div>
      </section>
	);
}

export default FAQSection;
