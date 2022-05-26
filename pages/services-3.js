import React, { Component } from 'react'
import TopHeaderStyleTwo from '@/components/_App/TopHeaderStyleTwo'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBanner from '@/components/Common/PageBanner'
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

                <div className="services-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {this.props.subTitle}
                            </span>
                            <h2>
                                {this.props.title}
                            </h2> 
                        </div>

                        <div className="row align-items-center">
                            {this.props.services.map((service) => (
                                <div className="col-lg-4 col-sm-6 col-md-6" key={service.id}>
                                    <div className="single-services-item border">
                                        <div className="icon">
                                            <i className={service.serviceIcon}></i>
                                        </div>
                                        <h3>
                                            <a href={service.serviceDetailsUrl}>
                                                {service.serviceTitle}
                                            </a>
                                        </h3>
                                        <p>
                                            {service.serviceShortDescription}
                                        </p>
                                        <Link href={service.serviceDetailsUrl}>
                                            <a className="link-btn">
                                                {service.readMoreText}
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            ))}

                            <div className="col-lg-12 col-md-12">
                                <div className="pagination-area text-center">
                                    <Link href="/services-3">
                                        <a className="next page-numbers">
                                            <i className="ri-arrow-left-s-line"></i>
                                        </a>
                                    </Link>
                                    <Link href="/services-3">
                                        <a className="page-numbers current">1</a>
                                    </Link>
                                    <Link href="/services-3">
                                        <a className="page-numbers">2</a>
                                    </Link>
                                    <Link href="/services-3">
                                        <a className="page-numbers">3</a>
                                    </Link>
                                    <Link href="/services-3">
                                        <a className="page-numbers">4</a>
                                    </Link>
                                    <Link href="/services-3">
                                        <a className="next page-numbers">
                                            <i className="ri-arrow-right-s-line"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
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
    title: "All The Services That We Provide to Our Clients", 

    // Services Item
    services: [
        {
            id: 1,
            serviceIcon: "ri-group-2-line",
            serviceTitle: "Human Consultancy",
            serviceShortDescription: "Lorem ipsum dolor sit amet, consetet elitr, sed diam nonumy eiod temp labore et dolore magna.",
            readMoreText: "Read More",
            serviceDetailsUrl: "/services-details",
        }, 
        {
            id: 2,
            serviceIcon: "ri-briefcase-line",
            serviceTitle: "Solicitor Consultancy",
            serviceShortDescription: "Lorem ipsum dolor sit amet, consetet elitr, sed diam nonumy eiod temp labore et dolore magna.",
            readMoreText: "Read More",
            serviceDetailsUrl: "/services-details",
        },
        {
            id: 3,
            serviceIcon: "ri-money-dollar-box-line",
            serviceTitle: "Financial Consultancy",
            serviceShortDescription: "Lorem ipsum dolor sit amet, consetet elitr, sed diam nonumy eiod temp labore et dolore magna.",
            readMoreText: "Read More",
            serviceDetailsUrl: "/services-details",
        },
        {
            id: 4,
            serviceIcon: "ri-settings-2-line",
            serviceTitle: "Strategy Consultancy",
            serviceShortDescription: "Lorem ipsum dolor sit amet, consetet elitr, sed diam nonumy eiod temp labore et dolore magna.",
            readMoreText: "Read More",
            serviceDetailsUrl: "/services-details",
        },
        {
            id: 5,
            serviceIcon: "ri-restart-line",
            serviceTitle: "Tax Consultancy",
            serviceShortDescription: "Lorem ipsum dolor sit amet, consetet elitr, sed diam nonumy eiod temp labore et dolore magna.",
            readMoreText: "Read More",
            serviceDetailsUrl: "/services-details",
        },
        {
            id: 6,
            serviceIcon: "ri-lightbulb-flash-line",
            serviceTitle: "Financial Consultancy",
            serviceShortDescription: "Lorem ipsum dolor sit amet, consetet elitr, sed diam nonumy eiod temp labore et dolore magna.",
            readMoreText: "Read More",
            serviceDetailsUrl: "/services-details",
        },
        {
            id: 7,
            serviceIcon: "ri-stack-line",
            serviceTitle: "Solicitor Consultancy",
            serviceShortDescription: "Lorem ipsum dolor sit amet, consetet elitr, sed diam nonumy eiod temp labore et dolore magna.",
            readMoreText: "Read More",
            serviceDetailsUrl: "/services-details",
        },
        {
            id: 8,
            serviceIcon: "ri-registered-fill",
            serviceTitle: "HR Consultancy",
            serviceShortDescription: "Lorem ipsum dolor sit amet, consetet elitr, sed diam nonumy eiod temp labore et dolore magna.",
            readMoreText: "Read More",
            serviceDetailsUrl: "/services-details",
        },
        {
            id: 9,
            serviceIcon: "ri-checkbox-multiple-line",
            serviceTitle: "Start Ups",
            serviceShortDescription: "Lorem ipsum dolor sit amet, consetet elitr, sed diam nonumy eiod temp labore et dolore magna.",
            readMoreText: "Read More",
            serviceDetailsUrl: "/services-details",
        },
    ]
};

