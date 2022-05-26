import React from 'react'
import Link from 'next/link'

const MainBanner = () => {
    return (
        <>
            <div className="banner-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="banner-content">
                                <span className="sub-title">WE ARE ZIXON</span>
                                <h1>Transform & Build Your Own Business</h1>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                                <Link href="/contact">
                                    <a className="default-btn">
                                        Contact Us <i className="ri-arrow-right-line"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="banner-image">
                                <img src="/images/banner/banner5.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainBanner;