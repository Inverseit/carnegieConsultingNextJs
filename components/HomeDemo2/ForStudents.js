import React from 'react'
import Link from 'next/link'

const ForStudents = () => {
    return (
        <>
            <div className="about-area ptb-100" id="for-students">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about/about1.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">FOR STUDENTS</span>
                                <h2>Inspiring Greatness. Expanding Networks. Building Futures.</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ant extra eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diammi maxil voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>

                                <div className="about-btn">
                                    <Link href="#student-projects">
                                        <a className="default-btn">
                                            Student opportunities <i className="ri-arrow-right-line"></i>
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

export default ForStudents;