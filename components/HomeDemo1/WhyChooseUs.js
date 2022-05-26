import React, { Component } from 'react'
import Link from 'next/link'
import PropTypes from "prop-types"

export default class WhyChooseUs extends Component {
    render() {
        return (
            <>
                <div className="why-choose-us-area pt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="why-choose-us-image bg-image">
                                    <img 
                                        src={this.props.image} 
                                        alt={this.props.altText} 
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="why-choose-us-content">
                                    <span className="sub-title">
                                        {this.props.subTitle}
                                    </span>
                                    <h2>
                                        {this.props.title}
                                    </h2>
                                    <p>
                                        {this.props.shortDescription}
                                    </p>

                                    <ul className="choose-list">
                                        {this.props.chooseList.map((list) => (
                                            <li key={list.id}>
                                                <i className={list.icon}></i>
                                                <h3>
                                                    {list.title}
                                                </h3>
                                                <p>
                                                    {list.shortDes}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <div className="read-more-btn">
                                        <Link href={this.props.btnUrl}>
                                            <a className="default-btn">
                                                {this.props.btnText} <i className="ri-arrow-right-line"></i>
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
}

WhyChooseUs.propTypes = {
    title: PropTypes.string,
}

WhyChooseUs.defaultProps = {
    image: "/images/why-choose-us.jpg",
    altText: "About Image",
    subTitle: "REASON OF CHOOSE US",
    title: "Reason of Choice Us From All of The Competitor in World",
    shortDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ant extra eirmod te mpor invidunt ut labore et dolore magna aliquyam erat.",
    btnText: "Read More",
    btnUrl: "/about-simple",

    // Choose list
    chooseList: [
        {
            id: 1,
            icon: "ri-rocket-2-line",
            title: "Startup Facilities",
            shortDes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ant extra mpor invidunt ut labore et dolore magna aliquyam erat.",
        }, 
        {
            id: 2,
            icon: "ri-settings-2-line",
            title: "All Business Consulting Scope",
            shortDes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ant extra mpor invidunt ut labore et dolore magna aliquyam erat.",
        }, 
        {
            id: 3,
            icon: "ri-bar-chart-horizontal-line",
            title: "Financial & Investing Capacity",
            shortDes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ant extra mpor invidunt ut labore et dolore magna aliquyam erat.",
        },  
    ]
};