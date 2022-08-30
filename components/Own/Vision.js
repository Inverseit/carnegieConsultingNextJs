import React from "react";
import Link from "next/link";

const Vision = () => {
  return (
    <>
      <div className="what-we-do-area ptb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="what-we-do-text">
                <h2>Our vision</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy ant extra eirmod tempor invidunt ut labore et
                  dolore magna aliquyam erat, sed diammi maxil voluptua. At vero
                  eos et accusam et justo duo dolores et ea rebum.
                </p>

                <Link href="/instagram">
                  <a className="default-btn insta">
                    Instagram <i className="ri-instagram-line"></i>
                  </a>
                </Link>

                <Link href="/contact">
                  <a className="default-btn linkedin mx-2">
                    LinkedIn <i className="ri-linkedin-fill"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <Link href="#">
                <div className="d-flex flex-column justify-content-center vision-link-div align-items-center">
                  <h3>Register Link</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
