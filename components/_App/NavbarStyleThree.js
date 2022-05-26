import React, { useState } from "react";
import Link from '@/utils/ActiveLink';

const NavbarStyleThree = () => {
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });  
        window.scrollTo(0, 0); 
    }) 

    // Search Modal
    const [isActiveSearchModal, setActiveSearchModal] = useState("false");
    const handleToggleSearchModal = () => {
        setActiveSearchModal(!isActiveSearchModal);
    };
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area navbar-style-three">
                <div className="zixon-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="/images/white-logo.png" alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="#" activeClassName="active">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                Home
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Home Demo - 1</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-2" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Home Demo - 2</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-3" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Home Demo - 3</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                Pages
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="#" activeClassName="active">
                                                    <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                        About Us
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/about-simple" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">About Simple</a>
                                                        </Link>
                                                    </li> 

                                                    <li className="nav-item">
                                                        <Link href="/about-modern" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">About Modern</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/company-history" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Company History</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/team" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Our Team</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/testimonials" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Testimonials</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/faq" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">FAQ</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/sign-in" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Sign In</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/sign-up" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Sign Up</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/privacy-policy" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Privacy Policy</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/terms-conditions" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Terms & Conditions</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/coming-soon" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Coming Soon</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/404" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">404 Error Page</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                Services
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/services-1" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Services Style 01</a>
                                                </Link>
                                            </li> 

                                            <li className="nav-item">
                                                <Link href="/services-2" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Services Style 02</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/services-3" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Services Style 03</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/services-details" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Services Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                Projects
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/projects-1" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Projects Two Column</a>
                                                </Link>
                                            </li> 

                                            <li className="nav-item">
                                                <Link href="/projects-2" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Projects Three Column</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/projects-3" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Projects Right Sidebar</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/project-details" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Projects Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                About Us
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/about-simple" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">About Simple</a>
                                                </Link>
                                            </li> 

                                            <li className="nav-item">
                                                <Link href="/about-modern" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">About Modern</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                Blog
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/blog-grid" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog Grid</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-right-sidebar" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog Right Sidebar</a>
                                                </Link>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link href="/blog-details" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog Details</a>
                                                </Link>
                                            </li> 
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/contact" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="others-option">
                                <div className="search-icon" onClick={handleToggleSearchModal}>
                                    <i className="ri-search-line"></i>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Search Form */}
            <div className={`search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"}`}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        
                        <div className="search-overlay-close" onClick={handleToggleSearchModal}>
                            <span className="search-overlay-close-line"></span>
                            <span className="search-overlay-close-line"></span>
                        </div>

                        <div className="search-overlay-form">
                            <form>
                                <input type="text" className="input-search" placeholder="Enter your keywords..." />
                                <button type="submit">
                                    <i className="ri-search-line"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarStyleThree;