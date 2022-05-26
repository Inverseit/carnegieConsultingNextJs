import React, { useState } from "react";
import Link from "@/utils/ActiveLink";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

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
  });

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="zixon-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand logoLink">
                  <img src="/images/logo.png" alt="logo" />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
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
                    <Link href="#for-students" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Students
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#for-recs" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Recruiters
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#for-partners" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Partners
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#events" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Events
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#team" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Team
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#contact-us-form" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Contact Us
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
