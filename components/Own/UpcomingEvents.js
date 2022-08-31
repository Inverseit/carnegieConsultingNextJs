import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "next";

export default class UpcomingEvents extends Component {
  render() {
    return (
      <>
        <div className="company-history-area pb-70">
          <div className="container">
            <div className="section-title">
              <h2>{this.props.heading}</h2>
            </div>

            <div className="company-history-content">
              <ul className="timeline">
                {this.props.history.map((item) => (
                  <li className="timeline-item" key={item.id}>
                    <div className="timeline-info">
                      <span className="sub-title">
                        {" "}
                        <span>
                          {item.month} {item.day}
                        </span>
                        , {item.year}
                      </span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 image">
                          <img src={item.image} alt={item.altText} />
                        </div>

                        <div className="col-lg-6 col-md-6 content">
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                          {item.link && (
                            <a className="default-btn" href={item.destination}>
                              {item.link}{" "}
                              <i className="ri-arrow-right-line"></i>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

UpcomingEvents.propTypes = {
  title: PropTypes.string,
};

UpcomingEvents.defaultProps = {
  heading: "Upcoming events",

  history: [
    {
      id: 1,
      month: "October -",
      day: "10",
      year: "2022",
      image: "https://via.placeholder.com/1080x720.png?text=Some%20Event%20Photo",
      altText: "History Image",
      title: "Some event",
      link: "Some link text",
      destination: "#",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ant extra eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diammi maxil. At vero eos et accusam et justo duo dolores et ea rebum. Stet clitaiai to ankasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      month: "April -",
      day: "15",
      year: "2023",
      image: "https://via.placeholder.com/1080x720.png?text=Other%20Event%20Photo",
      altText: "History Image",
      title: "Other event",
      link: "Other link text",
      destination: "#",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ant extra eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diammi maxil. At vero eos et accusam et justo duo dolores et ea rebum. Stet clitaiai to ankasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      id: 3,
      month: "March -",
      day: "15",
      year: "2023",
      image: "https://via.placeholder.com/1080x720.png?text=Consulting",
      altText: "History Image",
      title: "Other event",
      // link: "Other link text",
      // destination: "#",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ant extra eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diammi maxil. At vero eos et accusam et justo duo dolores et ea rebum. Stet clitaiai to ankasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
  ],
};
