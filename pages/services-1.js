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
                        <div className="row align-items-center">
                            {this.props.serviceCard.map((service) => (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={service.id}>
                                    <div className="single-services-box">
                                        <div className="image">
                                            <Link href={service.detailsUrl}>
                                                <a>
                                                    <img 
                                                        src={service.image} 
                                                        alt={service.altText} 
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="content">
                                            <h3>
                                                <Link href={service.detailsUrl}>
                                                    <a>{service.title}</a>
                                                </Link>
                                            </h3>

                                            <p>{service.description}</p>
                                            
                                            <Link href={service.detailsUrl}>
                                                <a className="default-btn">
                                                    {service.linkText} <i className="ri-arrow-right-line"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="col-lg-12 col-md-12">
                                <div className="pagination-area text-center">
                                    <Link href="/services-1">
                                        <a className="next page-numbers">
                                            <i className="ri-arrow-left-s-line"></i>
                                        </a>
                                    </Link>
                                    <Link href="/services-1">
                                        <a className="page-numbers current">1</a>
                                    </Link>
                                    <Link href="/services-1">
                                        <a className="page-numbers">2</a>
                                    </Link>
                                    <Link href="/services-1">
                                        <a className="page-numbers">3</a>
                                    </Link>
                                    <Link href="/services-1">
                                        <a className="page-numbers">4</a>
                                    </Link>
                                    <Link href="/services-1">
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
    serviceCard: [
        {
            id: 1,
            image: "/images/services/services1.jpg",
            altText: "Service Image",
            title: "Financial Consultancy",
            description: "Lorem ipsum dolor sit amet, conseteturants atal into sadipscing elitr, sed diam nonumy eirmod nsa ada tempor invidunt ut",
            linkText: "Read More",
            detailsUrl: "/services-details",
        }, 
        {
            id: 2,
            image: "/images/services/services2.jpg",
            altText: "Service Image",
            title: "Strategy Consultancy",
            description: "Lorem ipsum dolor sit amet, conseteturants atal into sadipscing elitr, sed diam nonumy eirmod nsa ada tempor invidunt ut",
            linkText: "Read More",
            detailsUrl: "/services-details",
        }, 
        {
            id: 3,
            image: "/images/services/services4.jpg",
            altText: "Service Image",
            title: "Organizational Consultancy",
            description: "Lorem ipsum dolor sit amet, conseteturants atal into sadipscing elitr, sed diam nonumy eirmod nsa ada tempor invidunt ut",
            linkText: "Read More",
            detailsUrl: "/services-details",
        }, 
        {
            id: 4,
            image: "/images/services/services4.jpg",
            altText: "Service Image",
            title: "Tax Consultancy",
            description: "Lorem ipsum dolor sit amet, conseteturants atal into sadipscing elitr, sed diam nonumy eirmod nsa ada tempor invidunt ut",
            linkText: "Read More",
            detailsUrl: "/services-details",
        }, 
        {
            id: 6,
            image: "/images/services/services6.jpg",
            altText: "Service Image",
            title: "Marketing Consultancy",
            description: "Lorem ipsum dolor sit amet, conseteturants atal into sadipscing elitr, sed diam nonumy eirmod nsa ada tempor invidunt ut",
            linkText: "Read More",
            detailsUrl: "/services-details",
        }, 
        {
            id: 7,
            image: "/images/services/services7.jpg",
            altText: "Service Image",
            title: "Startup Consultancy",
            description: "Lorem ipsum dolor sit amet, conseteturants atal into sadipscing elitr, sed diam nonumy eirmod nsa ada tempor invidunt ut",
            linkText: "Read More",
            detailsUrl: "/services-details",
        },
    ]
};
