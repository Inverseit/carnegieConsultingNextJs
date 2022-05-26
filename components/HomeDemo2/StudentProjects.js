import React, { Component } from "react";
import PropTypes from "prop-types";

export default class StudentProjects extends Component {
  render() {
    return (
      <>
        <div className="services-area pb-70 pt-70" id="events">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">{this.props.subTitle}</span>
              <h2>{this.props.title}</h2>
              <p>{this.props.shortDescription}</p>
            </div>

            <div className="row align-items-center">
              {this.props.services.map((service) => (
                <div className="col-lg-3 col-sm-6 col-md-6" key={service.id}>
                  <div className="services-box">
                    <div className="d-flex align-items-center">
                      <i className={service.serviceIcon}></i>
                      <h3>
                        <a>{service.serviceTitle}</a>
                      </h3>
                    </div>
                    <p>{service.serviceShortDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

StudentProjects.propTypes = {
  title: PropTypes.string,
};

StudentProjects.defaultProps = {
  // Services Header
  subTitle: "Events",
  title: "What we do",
  shortDescription: "The list of projects that we are doing!",

  // Services Item
  services: [
    {
      id: 1,
      serviceIcon: "icon ri-briefcase-line ",
      serviceTitle: "Business Discussions",
      serviceShortDescription:
        "Lorem ipsum dolor sit amet, consetetur sadicinan elitr, sed diam nonumy eirmod tempor invidunt utis labore et dolore magna aliquyam erat, sed diamsan voluptua at vero.",
      readMoreText: "Read More",
      serviceDetailsUrl: "/services-details",
    },
    {
      id: 4,
      serviceIcon: "icon ri-settings-2-line",
      serviceTitle: "Information Session / Workshop",
      serviceShortDescription:
        "Lorem ipsum dolor sit amet, consetetur sadicinan elitr, sed diam nonumy eirmod tempor invidunt utis labore et dolore magna aliquyam erat, sed diamsan voluptua at vero.",
      readMoreText: "Read More",
      serviceDetailsUrl: "/services-details",
    },
    {
      id: 2,
      serviceIcon: "icon ri-group-2-line",
      serviceTitle: "Connect with Consultants",
      serviceShortDescription:
        "Lorem ipsum dolor sit amet, consetetur sadicinan elitr, sed diam nonumy eirmod tempor invidunt utis labore et dolore magna aliquyam erat, sed diamsan voluptua at vero.",
      readMoreText: "Read More",
      serviceDetailsUrl: "/services-details",
    },
    {
      id: 3,
      serviceIcon: "icon ri-money-dollar-box-line",
      serviceTitle: "Competitions",
      serviceShortDescription:
        "Lorem ipsum dolor sit amet, consetetur sadicinan elitr, sed diam nonumy eirmod tempor invidunt utis labore et dolore magna aliquyam erat, sed diamsan voluptua at vero.",
      readMoreText: "Read More",
      serviceDetailsUrl: "/services-details",
    },
  ],
};
