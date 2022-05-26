import React, { Component } from 'react'
import PropTypes from "prop-types"
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

const options = {
    nav: false,
    loop: true,
    margin: 30,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='ri-arrow-left-s-line'></i>",
        "<i class='ri-arrow-right-s-line'></i>"
    ],
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 5
        }
    }
}

export default class PartnerSlider extends Component {

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
                <div className="partner-area">
                    <div className="container">
                        {this.state.display ? <OwlCarousel 
                            className="partner-slides owl-carousel owl-theme"
                            {...options}
                        > 
                            {this.props.partners.map((logo) => (
                                <div className="single-partner-item" key={logo.id}>
                                    <a href={logo.link} className="d-inline-block">
                                        <img 
                                            src={logo.image} 
                                            alt={logo.altText} 
                                        />
                                    </a>
                                </div>
                            ))}
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </>
        )
    }
}

PartnerSlider.propTypes = {
    title: PropTypes.string,
}

PartnerSlider.defaultProps = {
    partners: [
        {
            id: 1,
            image: "/images/partner/partner1.png",
            altText: "partner",
            link: "#",
        }, 
        {
            id: 2,
            image: "/images/partner/partner2.png",
            altText: "partner",
            link: "#",
        }, 
        {
            id: 3,
            image: "/images/partner/partner3.png",
            altText: "partner",
            link: "#",
        }, 
        {
            id: 4,
            image: "/images/partner/partner4.png",
            altText: "partner",
            link: "#",
        }, 
        {
            id: 5,
            image: "/images/partner/partner5.png",
            altText: "partner",
            link: "#",
        }, 
    ]
};
