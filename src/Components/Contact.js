import React from 'react';

function Contact() {
	return (
		<section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2 className='H2'>Contact</h2>
          <h3 className='H9'>Contact <span>Us</span></h3>
          <p>Just give a call or Whatsapp message for immediate response.</p>
        </div>

        <div>
          <iframe src="https://maps.google.com/maps?q=Strackit%20Private%20Limited&t=&z=13&ie=UTF8&iwloc=&output=embed" allowFullScreen className='Map'></iframe>
        </div>

        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
              <i className="fa-sharp fa-solid fa-location-dot"></i>
                <h4 >Location:</h4>
                <p>Coimbatore, Tirupur</p>
              </div>

              <div className="email">
              <i className="fa-sharp fa-solid fa-envelope"></i>
                <h4>Email:</h4>
                <p>contact@strackit.com</p>
              </div>

              <div className="phone">
              <i className="fa-sharp fa-solid fa-phone"></i>
                <h4>Call:</h4>
                <p>+91 8667213369</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form action="forms/whatsapp.php" method="post" role="form" className="php-email-form">
              <div className="form-group">
                <input type="text" className="form-control" name="name" id="name" placeholder="Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" autoComplete='yes' />
                <div className="validate"></div>
              </div>
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input type="text" name="mobile" className="form-control" id="mobile" placeholder="Your Mobile" data-rule="minlen:10" data-msg="Mobile Number should be 10 Characters" />
                  <div className="validate"></div>
                </div>
                <div className="col-md-6 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" autoComplete='yes'/>
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something" placeholder="Message"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <center>
                <span className="text-center"><button type="submit" onClick="{Message}">Send Message</button></span>
                <span className="text-center"><button type="submit" onClick="{openWhatsapp}">Whatsapp Now</button></span>
              </center>
            </form>

          </div>

        </div>

      </div>
    </section>
			);
}
export default Contact;
