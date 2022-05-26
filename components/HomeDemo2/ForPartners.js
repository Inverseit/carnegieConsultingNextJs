import React from "react";
import Link from "next/link";

const ForPartners = () => {
  return (
    <>
      <div className="call-back-request-area pb-100" id="for-partners">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="call-back-request-image">
                <img src="/images/call-back-request.png" alt="image" />
                <img
                  src="/images/shape/shape9.png"
                  className="shape4"
                  alt="image"
                />
                <img
                  src="/images/shape/shape10.png"
                  className="shape5"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="call-back-request-content">
                <span className="sub-title">Partners</span>
                <h2>HOST AN EVENT </h2>

                <p>
                  We frequently work with consulting companies to co-host
                  recruiting events on campus. Find out what we can do for you.
                </p>

                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="single-call-back-box">
                      <div className="icon">
                        <i className="ri-checkbox-multiple-line"></i>
                      </div>
                      <h3>Client Engagement Project</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="single-call-back-box">
                      <div className="icon">
                        <i className="ri-pie-chart-2-line"></i>
                      </div>
                      <h3>Case Study Competitions</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="single-call-back-box">
                      <div className="icon">
                        <i className="ri-briefcase-line"></i>
                      </div>
                      <h3>Something else</h3>
                    </div>
                  </div>
                </div>

                <div className="request-btn">
                  <Link href="/contact">
                    <a className="default-btn">
                      Contact Us<i className="ri-arrow-right-line"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForPartners;
