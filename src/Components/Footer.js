import React from 'react';

function Footer() {
  return (
    <footer id="footer">

      <div className="footer-top">
        <div className="container1">
          <div className="row">

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4 id='Fot'>Techies</h4>
              <p>
                Orchid Park Layout <br />
                Electronic City, Bangalore<br />
                India <br /><br />
                <strong>Phone:</strong> +91 8667213369<br />
                <strong>Email:</strong> contact@Techies.com<br />
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#services">Services</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="https://business.strackit.com" target="_blank" rel="noopener noreferrer">Business</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="https://sms.strackit.com" target="_blank" rel="noopener noreferrer">Strackit SMS</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#calltoaction">Web Design</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#calltoaction">Web Development</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#calltoaction">Product Management</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#calltoaction">Marketing</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#calltoaction">Graphic Design</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>Get updates about us</p>
              <form action="" method="post">
                <input type="email" name="email" autoComplete='yes' />
                <input type="submit" value="Subscribe"  autoComplete='yes'/>
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">

        <div className="mr-md-auto text-center text-md-left">
          <div className="copyright">
            &copy; Copyright <strong><span>Techies</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://strackit.com/" target="_blank" rel="noopener noreferrer">Techies Private Limited</a>
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="https://www.facebook.com/strackit/" target="_blank" rel="noopener noreferrer" className="facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/strackit-private-limited/" target="_blank" rel="noopener noreferrer" className="instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/strackit/" target="_blank" rel="noopener noreferrer" className="linkedin"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://api.whatsapp.com/send?phone=918667213369" target="_blank" rel="noopener noreferrer" className="back-to-topw" style={{ marginBottom: '50px' }}><i class="fa-brands fa-whatsapp"></i></a>
          <a href="#" className="back-to-top"><i class="fa-sharp fa-solid fa-arrow-up"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
