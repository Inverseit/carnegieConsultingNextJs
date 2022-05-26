import React from 'react'
import Link from 'next/link'

const AboutContent = () => {
    return (
        <>
            <div className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about/about1.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">ABOUT ALL OF US</span>
                                <h2>One of the Fastest Way to Gain Business Success</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ant extra eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diammi maxil voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>

                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                        <div className="single-about-box">
                                            <div className="icon">
                                                <i className="ri-star-line"></i>
                                            </div>
                                            <h3>Consistency</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                        <div className="single-about-box">
                                            <div className="icon">
                                                <i className="ri-settings-2-line"></i>
                                            </div>
                                            <h3>Strategy</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                        <div className="single-about-box">
                                            <div className="icon">
                                                <i className="ri-line-chart-line"></i>
                                            </div>
                                            <h3>Investment</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="about-btn">
                                    <Link href="/about-simple">
                                        <a className="default-btn">
                                            Read More <i className="ri-arrow-right-line"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutContent;