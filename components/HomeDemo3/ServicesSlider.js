import React, { Component } from 'react'
import PropTypes from "prop-types"
import Link from 'next/link'
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
            items: 2
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
}

export default class ServicesSlider extends Component {

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
                <div className="services-area ptb-100 bg-fbf9f7">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {this.props.subHeading}
                            </span>
                            <h2>
                                {this.props.heading}
                            </h2>
                        </div>

                        {this.state.display ? <OwlCarousel 
                            className="services-slides-two owl-carousel owl-theme"
                            {...options}
                        >  
                            {this.props.services.map((item) => (
                                <div className="single-services-item" key={item.id}>
                                    <div className="icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h3>
                                        <Link href={item.detailsUrl}>
                                            <a>{item.title}</a>
                                        </Link>
                                    </h3>
                                    <p>{item.shortDec}</p>

                                    <Link href={item.detailsUrl}>
                                        <a className="link-btn">{item.readMoreText}</a>
                                    </Link>
                                </div> 
                            ))}
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </>
        )
    }
}

ServicesSlider.propTypes = {
    title: PropTypes.string,
}

ServicesSlider.defaultProps = {
    subHeading: "SERVICES",
    heading: "Our All of The Services At a Glance", 

    services: [
        {
            id: 1,
            icon: "ri-group-2-line",
            title: "Human Consultancy",
            shortDec: "Lorem ipsum dolor sit amet, consetet elitr, sed diam nonumy eiod temp labore et dolore magna.",
            readMoreText: "Read More",
            detailsUrl: "/services-details",
        },  
        {
            id: 2,
            icon: "ri-briefcase-line",
            title: "Solicitor Consultancy",
            shortDec: "Lorem ipsum dolor sit amet, consetet elitr, sed diam nonumy eiod temp labore et dolore magna.",
            readMoreText: "Read More",
            detailsUrl: "/services-details",
        },  
        {
            id: 3,
            icon: "ri-money-dollar-box-line",
            title: "Financial Consultancy",
            shortDec: "Lorem ipsum dolor sit amet, consetet elitr, sed diam nonumy eiod temp labore et dolore magna.",
            readMoreText: "Read More",
            detailsUrl: "/services-details",
        },  
        {
            id: 4,
            icon: "ri-settings-2-line",
            title: "Strategy Consultancy",
            shortDec: "Lorem ipsum dolor sit amet, consetet elitr, sed diam nonumy eiod temp labore et dolore magna.",
            readMoreText: "Read More",
            detailsUrl: "/services-details",
        },  
        {
            id: 5,
            icon: "ri-restart-line",
            title: "Tax Consultancy",
            shortDec: "Lorem ipsum dolor sit amet, consetet elitr, sed diam nonumy eiod temp labore et dolore magna.",
            readMoreText: "Read More",
            detailsUrl: "/services-details",
        },  
        {
            id: 6,
            icon: "ri-lightbulb-flash-line",
            title: "Financial Consultancy",
            shortDec: "Lorem ipsum dolor sit amet, consetet elitr, sed diam nonumy eiod temp labore et dolore magna.",
            readMoreText: "Read More",
            detailsUrl: "/services-details",
        },  
    ]
};
