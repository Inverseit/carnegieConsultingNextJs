import React from 'react'
import Link from 'next/link'


const StayTuned = () => {

    return (
        <>  
            <div className="coming-soon-area">
                <div className="container-fluid p-0">
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="coming-soon-content">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <Link href="/">
                                            <a className="logo">
                                                <img src="/images/logo.png" alt="image" />
                                            </a>
                                        </Link>

                                        <h2>Stay Tuned</h2>
                                        <Link href="/">
                                                <a className="default-btn mt-2">
                                                    Home <i className="ri-home-2-line"></i>
                                                </a>
                                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="work-prog-image">
                                <img src="/images/work-in-progres.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StayTuned;