import React from 'react'
import Link from 'next/link'

const MainBanner = () => {
    return (
        <>
            <div className="main-banner-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="main-banner-content">
                                <span className="sub-title">WELCOME TO US</span>
                                <h1>Take Our Help To Reach The Top</h1>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam inta nonumy eirmod tempor invidunt ut labore et.</p>

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
                            <div className="main-banner-image">
                                <img src="/images/banner/banner1.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainBanner;