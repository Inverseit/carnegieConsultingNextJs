import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  nav: true,
  loop: true,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  margin: 30,
  items: 1,
  dots: false,
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    "<i class='ri-arrow-left-s-line'></i>",
    "<i class='ri-arrow-right-s-line'></i>",
  ],
};

const MainBanner = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      {display ? (
        <OwlCarousel
          className="home-slides owl-carousel owl-theme"
          {...options}
        >
          <div
            className="single-banner-item-test"
            style={{
                height: '450px',
              backgroundImage: `url(https://via.placeholder.com/1920x1080.png?text=Some%20Text)`,
            }}
          >

                                <div className="banner-item-content d-flex justify-content-center">
                                    <div className="btn-box test-buttons-nav">
                                        <Link href="/contact">
                                            <a className="default-btn">
                                                Some Button Link <i className="ri-arrow-right-line"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>


          </div>

          <div
            className="single-banner-item-test"
            style={{
                height: '450px',
              backgroundImage: `url(https://via.placeholder.com/1920x1080.png?text=Some%20Other%20Text)`,
            }}
          >
          </div>

          <div
            className="single-banner-item-test"
            style={{
                height: '450px',
              backgroundImage: `url(https://via.placeholder.com/1920x1080.png?text=Some%20Other%20Text%20LOL)`,
            }}
          >
          </div>

          {/* <div className="single-banner-item bg2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12 mx-auto">
                  <div className="banner-item-image">
                    <img
                      src="https://via.placeholder.com/1500x500.png?text=Some%20Other%20Announcement"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </OwlCarousel>
      ) : (
        ""
      )}
    </>
  );
};

export default MainBanner;
