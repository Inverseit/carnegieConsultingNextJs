import React, { Component } from 'react'
import PropTypes from "prop-types"

export default class ReasonOfChoice extends Component {
    render() {
        return (
            <>
                <div className="why-choose-us-area pt-100 pb-70 bg-f3f2f2">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {this.props.subHeading}
                            </span>
                            <h2>
                                {this.props.heading}
                            </h2>
                        </div>

                        <div className="row justify-content-center">
                            {this.props.reasons.map((reason) => (
                                <div className="col-lg-3 col-sm-6 col-md-6" key={reason.id}>
                                    <div className="single-why-choose-us-box">
                                        <div className="icon">
                                            <i className={reason.icon}></i>
                                        </div>
                                        <h3>{reason.title}</h3>
                                        <p>{reason.shortDec}</p>
                                    </div>
                                </div> 
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

ReasonOfChoice.propTypes = {
    title: PropTypes.string,
}

ReasonOfChoice.defaultProps = {
    subHeading: "REASON FOR CHOICE",
    heading: "Why You Choose Us From All Of The Other's",
 
    reasons: [
        {
            id: 1,
            icon: "ri-rocket-line",
            title: "Startup Facilities",
            shortDec: "Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod. To the great and best.",
        }, 
        {
            id: 2,
            icon: "ri-settings-5-line",
            title: "Easy Understand",
            shortDec: "Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod. To the great and best.",
        }, 
        {
            id: 3,
            icon: "ri-briefcase-line",
            title: "Professional",
            shortDec: "Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod. To the great and best.",
        }, 
        {
            id: 4,
            icon: "ri-bar-chart-box-line",
            title: "Invest Capacity",
            shortDec: "Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod. To the great and best.",
        }, 
    ]
};