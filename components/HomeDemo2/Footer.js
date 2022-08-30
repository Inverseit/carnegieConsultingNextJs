import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <Link href="/">
                  <a className="logo">
                    <img src="/images/white-logo.png" alt="image" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="single-footer-widget">
                <p>
                  Inspiring Greatness. Expanding Networks. Building Futures.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div className="single-footer-widget">
                <div className="footer-contact-info">
                  <h5>Contact:</h5>
                  <ul>
                    <li>
                      <span>Call:</span>{" "}
                      <a href="tel:+(974)12345678">+(974) 1234 5678</a>
                    </li>
                    <li>
                      <span>Email:</span>{" "}
                      <a href="mailto:test@test.com">test@test.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7 col-sm-6">
                <p>&copy; Carnegie Consulting {currentYear} </p>
              </div>

              {/* <div className="col-lg-6 col-md-5 col-sm-6">
                <ul className="social-links">
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
