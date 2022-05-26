import React, { Component } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

const options = {
    nav: false,
    loop: true,
    margin: 30,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='ri-arrow-left-s-line'></i>",
        "<i class='ri-arrow-right-s-line'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
}

export default class ServicesCard extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <>
                <div className="services-area pt-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {this.props.subHeading}
                            </span>
                            <h2>
                                {this.props.heading}
                            </h2>
                            <p>
                                {this.props.shortDec}
                            </p>
                        </div>
 
                        {this.state.display ? <OwlCarousel 
                            className="services-slides owl-carousel owl-theme"
                            {...options}
                        > 
                            {this.props.services.map((service) => (
                                <div className="single-services-box" key={service.id}>
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
                            ))}
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </>
        )
    }
}

ServicesCard.propTypes = {
    title: PropTypes.string,
}

ServicesCard.defaultProps = {

    subHeading: "SERVICES",
    heading: "Our Dedicated Services",
    shortDec: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",

    services: [
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
