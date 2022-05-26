import React, { Component } from 'react'
import TopHeaderStyleTwo from '@/components/_App/TopHeaderStyleTwo'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBanner from '@/components/Common/PageBanner'
import SeeWhatWeDo from '@/components/Common/SeeWhatWeDo'
import PropTypes from "prop-types"
import Link from 'next/link'
import Footer from '@/components/_App/Footer'

export default class Services extends Component {
    render() {
        return (
            <>
                <TopHeaderStyleTwo /> 

                <NavbarStyleOne /> 

                <PageBanner 
                    pageTitle="Services" 
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="Services"
                />

                <SeeWhatWeDo />

                <div className="services-area pb-70">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {this.props.subTitle}
                            </span>
                            <h2>
                                {this.props.title}
                            </h2>
                            <p>
                                {this.props.shortDescription}
                            </p>
                        </div>

                        <div className="row align-items-center">
                            {this.props.services.map((service) => (
                                <div className="col-lg-4 col-sm-6 col-md-6" key={service.id}>
                                    <div className="services-box">
                                        <div className="d-flex align-items-center">
                                            <i className={service.serviceIcon}></i>
                                            <h3>
                                                <a href={service.serviceDetailsUrl}>
                                                    {service.serviceTitle}
                                                </a>
                                            </h3>
                                        </div>
                                        <p>
                                            {service.serviceShortDescription}
                                        </p>
                                        <Link href={service.serviceDetailsUrl}>
                                            <a className="default-btn">
                                                {service.readMoreText} <i className="ri-arrow-right-line"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
    
                <Footer />
            </>
        )
    }
}

Services.propTypes = {
    title: PropTypes.string,
}

Services.defaultProps = {
    // Services Header
    subTitle: "SERVICES",
    title: "Please See All of Our Services and All Other Details",
    shortDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",

    // Services Item
    services: [
        {
            id: 1,
            serviceIcon: "icon ri-group-2-line",
            serviceTitle: "Human Consultancy",
            serviceShortDescription: "Lorem ipsum dolor sit amet, consetetur sadicinan elitr, sed diam nonumy eirmod tempor invidunt utis labore et dolore magna aliquyam erat, sed diamsan voluptua at vero.",
            readMoreText: "Read More",
            serviceDetailsUrl: "/services-details",
        },
        {
            id: 2,
            serviceIcon: "icon ri-briefcase-line",
            serviceTitle: "Solicitor Consultancy",
            serviceShortDescription: "Lorem ipsum dolor sit amet, consetetur sadicinan elitr, sed diam nonumy eirmod tempor invidunt utis labore et dolore magna aliquyam erat, sed diamsan voluptua at vero.",
            readMoreText: "Read More",
            serviceDetailsUrl: "/services-details",
        },
        {
            id: 3,
            serviceIcon: "icon ri-money-dollar-box-line",
            serviceTitle: "Financial Consultancy",
            serviceShortDescription: "Lorem ipsum dolor sit amet, consetetur sadicinan elitr, sed diam nonumy eirmod tempor invidunt utis labore et dolore magna aliquyam erat, sed diamsan voluptua at vero.",
            readMoreText: "Read More",
            serviceDetailsUrl: "/services-details",
        },
        {
            id: 4,
            serviceIcon: "icon ri-settings-2-line",
            serviceTitle: "Strategy Consultancy",
            serviceShortDescription: "Lorem ipsum dolor sit amet, consetetur sadicinan elitr, sed diam nonumy eirmod tempor invidunt utis labore et dolore magna aliquyam erat, sed diamsan voluptua at vero.",
            readMoreText: "Read More",
            serviceDetailsUrl: "/services-details",
        },
        {
            id: 5,
            serviceIcon: "icon ri-restart-line",
            serviceTitle: "Tax Consultancy",
            serviceShortDescription: "Lorem ipsum dolor sit amet, consetetur sadicinan elitr, sed diam nonumy eirmod tempor invidunt utis labore et dolore magna aliquyam erat, sed diamsan voluptua at vero.",
            readMoreText: "Read More",
            serviceDetailsUrl: "/services-details",
        },
        {
            id: 6,
            serviceIcon: "icon ri-lightbulb-flash-line",
            serviceTitle: "Financial Consultancy",
            serviceShortDescription: "Lorem ipsum dolor sit amet, consetetur sadicinan elitr, sed diam nonumy eirmod tempor invidunt utis labore et dolore magna aliquyam erat, sed diamsan voluptua at vero.",
            readMoreText: "Read More",
            serviceDetailsUrl: "/services-details",
        },
    ]
};

