import { Link } from "react-router-dom";

const Footer1 = () => {
  return (
    <div className="footer1 _relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-footer-items footer-logo-area">
              <div className="footer-logo ozone-logo">
                <a href="">
                  <img src="/assets/img/logo/ozone-logo.png" alt="" />
                </a>
              </div>
              <div className="space20"></div>
              <div className="heading1">
                <p>
                  At Ozone Software & Technologies IT Solutions, we are
                  dedicated to delivering innovative technology solutions
                  tailored to meet the unique needs of businesses like yours.{" "}
                </p>
              </div>
              <ul className="social-icon">
                <li>
                  <a
                    href="https://www.linkedin.com/company/ozone-software-and-technologies/"
                    target="target_blank"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=917400786736&text=Hi%20there!%20%F0%9F%91%8B"
                    target="target_blank"
                  >
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Our Core Service</h3>

              <ul className="menu-list">
                <li>
                  <Link to="#">Software Development</Link>
                </li>
                <li>
                  <Link to="#">Web Development</Link>
                </li>
                <li>
                  <Link to="#">UI/UX</Link>
                </li>
                <li>
                  <Link to="#">Mobile Application Development</Link>
                </li>
                <li>
                  <Link to="#">Digital Marketing</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Useful Links</h3>

              <ul className="menu-list">
                <li>
                  <Link to="/about">About Us </Link>
                </li>
                <li>
                  <Link to="/service">Our Services</Link>
                </li>
                <li>
                  <Link to="/blog">Blog & News</Link>
                </li>
                <li>
                  <Link to="/#HomeProjects">Project</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Contact Us</h3>

              {/* <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon1.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="tel:0500222333">0500 222 333</a>
                              </div>
                            </div> */}

              <div className="contact-box">
                <div className="icon">
                  <img src="/assets/img/icons/footer1-icon2.png" alt="" />
                </div>
                <div className="pera">
                  <a href="tel:+917400786736">+91 74007 86736</a>
                </div>
              </div>

              <div className="contact-box">
                <div className="icon">
                  <img src="/assets/img/icons/footer1-icon3.png" alt="" />
                </div>
                <div className="pera">
                  <a href="mailto:info@techozone.pro">info@techozone.pro</a>
                </div>
              </div>

              <div className="contact-box">
                <div className="icon">
                  <img src="/assets/img/icons/footer1-icon4.png" alt="" />
                </div>
                <div className="pera">
                  <a href="http://www.techozone.pro/">www.techozone.pro</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space40"></div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="coppyright">
                <p>
                  {" "}
                  &copy; {new Date().getFullYear()}{" "}
                  <a href="/">Ozone Software and Technologies</a>. All Rights
                  Reserved.
                </p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="coppyright right-area">
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
