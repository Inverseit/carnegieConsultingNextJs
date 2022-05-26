import React from 'react'

const FreeQuoteFormStyle3 = () => {
    return (
        <>
            <div className="free-quote-area">
                <div className="container">
                    <div className="free-quote-inner">
                        <div className="section-title">
                            <span className="sub-title">FREE QUOTE</span>
                            <h2>Searching For An Expert Consultant From Us?</h2>
                        </div>
                        
                        <form>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Your Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Your Email</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Services</label>
                                        <select className="form-select">
                                            <option defaultValue="selected">Financial Consultancy</option>
                                            <option>Strategy Consultancy</option>
                                            <option>Organizational Consultancy</option>
                                            <option>Tax Consultancy</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <button type="submit" className="default-btn">
                                            Request A Quote <i className="ri-arrow-right-line"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="shape6">
                            <img src="/images/shape/shape11.png" alt="image" />
                        </div>
                        <div className="shape7">
                            <img src="/images/shape/shape12.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FreeQuoteFormStyle3;