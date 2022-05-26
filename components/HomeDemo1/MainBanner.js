import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

const options = {
    nav: true,
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    margin: 30,
    items: 1,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='ri-arrow-left-s-line'></i>",
        "<i class='ri-arrow-right-s-line'></i>"
    ]
};

const MainBanner = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            {display ? <OwlCarousel 
                className="home-slides owl-carousel owl-theme"
                {...options}
            >
                <div className="single-banner-item bg1">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="banner-item-content">
                                    <span className="sub-title">WELCOME TO US</span>
                                    <h1>Business Consultant & Grid Line For You</h1>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam intaas nonumy eirmod tempor invidunt ut labore et.</p>

                                    <div className="btn-box">
                                        <Link href="/contact">
                                            <a className="default-btn">
                                                Contact Us <i className="ri-arrow-right-line"></i>
                                            </a>
                                        </Link>
                                        <Link href="/contact">
                                            <a className="default-btn">
                                                Get Started <i className="ri-arrow-right-line"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="banner-item-image">
                                    <img src="/images/banner/banner2.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-banner-item bg2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="banner-item-content">
                                    <span className="sub-title">ABOUT ALL OF US</span>
                                    <h1>Take Our Help To Reach The Top</h1>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam intaas nonumy eirmod tempor invidunt ut labore et.</p>
                                    
                                    <div className="btn-box">
                                        <Link href="/contact">
                                            <a className="default-btn">
                                                Contact Us <i className="ri-arrow-right-line"></i>
                                            </a>
                                        </Link>
                                        <Link href="/contact">
                                            <a className="default-btn">
                                                Get Started <i className="ri-arrow-right-line"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="banner-item-image">
                                    <img src="/images/banner/banner3.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-banner-item bg3">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="banner-item-content">
                                    <span className="sub-title">REASON OF CHOOSE US</span>
                                    <h1>Transform & Build Your Own Business</h1>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam intaas nonumy eirmod tempor invidunt ut labore et.</p>
                                    
                                    <div className="btn-box">
                                        <Link href="/contact">
                                            <a className="default-btn">
                                                Contact Us <i className="ri-arrow-right-line"></i>
                                            </a>
                                        </Link>
                                        <Link href="/contact">
                                            <a className="default-btn">
                                                Get Started <i className="ri-arrow-right-line"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="banner-item-image">
                                    <img src="/images/banner/banner4.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel> : ''}
        </>
    )
}

export default MainBanner;