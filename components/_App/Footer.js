import React from 'react'
import Link from 'next/link'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <Link href="/">
                                    <a className="logo">
                                        <img src="/images/white-logo.png" alt="image" />
                                    </a>
                                </Link>
                                <p>Lorem ipsum dolor sit amet sadipscing elitr, sed diam no tempor invidunt ut.</p>
                                <div className="footer-contact-info">
                                    <h5>Contact:</h5>
                                    <ul>
                                        <li><span>Call:</span> <a href="tel:+(1)8144822296">+(1) 814 482 2296</a></li>
                                        <li><span>Email:</span> <a href="mailto:hello@zixon.com">hello@zixon.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget pl-4">
                                <h3>Quick Links</h3>
                                <ul className="links-list">
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about-simple">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services-1">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-details">
                                            <a>Blog Details</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Get A Quote</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget pl-2">
                                <h3>Help Us</h3>
                                <ul className="links-list">
                                    <li>
                                        <Link href="/about-simple">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-conditions">
                                            <a>Help Center</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/testimonials">
                                            <a>Feedback</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-grid">
                                            <a>Our Blog</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Opening Hours</h3>
                                <ul className="opening-hours">
                                    <li>SUN - MON: <span>8:00 AM - 9:00 PM</span></li>
                                    <li>TUE: <span>8:00 AM - 9:00 PM</span></li>
                                    <li>WED: <span>8:00 AM - 9:00 PM</span></li>
                                    <li>THU: <span>8:00 AM - 9:00 PM</span></li>
                                    <li>FRI-SAT: <span>Closed</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-7 col-sm-6">
                                <p>&copy; {currentYear} Zixon is Proudly Crafted by <a href="https://envytheme.com/" target="_blank">EnvyTheme</a></p>
                            </div>

                            <div className="col-lg-6 col-md-5 col-sm-6">
                                <ul className="social-links">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="ri-facebook-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="ri-twitter-fill"></i>
                                        </a>
                                    </li>
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
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;