import React, { Component } from 'react'
import PropTypes from "prop-types"
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

const options = {
    nav: false,
    loop: true,
    margin: 30,
    dots: true,
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='ri-arrow-left-s-line'></i>",
        "<i class='ri-arrow-right-s-line'></i>"
    ]
}

export default class TestimonialStyleOne extends Component {

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
                <div className="testimonial-area">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {this.props.subTitle}
                            </span>
                            <h2>
                                {this.props.title}
                            </h2>
                        </div>

                        {this.state.display ? <OwlCarousel 
                        className="testimonial-slides owl-carousel owl-theme"
                            {...options}
                        > 
                            {this.props.testimonials.map((item) => (
                                <div className="single-testimonial-box" key={item.id}>
                                    <div className="row align-items-center">
                                        <div className="col-lg-8 col-md-8">
                                            <div className="testimonial-desc">
                                                <i className={item.quotesIcon}></i>
                                                <p>
                                                    {item.feedbckText}
                                                </p>
                                                <div className="info">
                                                    <h3>{item.clientName}</h3>
                                                    <span>{item.designation}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <div className="testimonial-image">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.altText} 
                                                />
                                            </div>
                                        </div>
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

TestimonialStyleOne.propTypes = {
    title: PropTypes.string,
}

TestimonialStyleOne.defaultProps = {
    // Testimonial Header
    subTitle: "TESTIMONIALS",
    title: "Let's Meet With Our Client Says",

    // Testimonial Item
    testimonials: [
        {
            id: 1,
            quotesIcon: "ri-double-quotes-l",
            feedbckText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ant extra eirmod ut labore et dolore magna aliquyam erat, sed diammi maxil voluptua. At vero eos et accusam lores et ea rebum. Stet clitaiai to ankasd gubergren, no sea takimata sanctus est Lorem ipsu adasta na. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
            clientName: "Max Anderson",
            designation: "CEO, Switch Color Ltd.",
            image: "/images/testimonial/testimonial1.jpg",
            altText: "Max Anderson"
        },
        {
            id: 2,
            quotesIcon: "ri-double-quotes-l",
            feedbckText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ant extra eirmod ut labore et dolore magna aliquyam erat, sed diammi maxil voluptua. At vero eos et accusam lores et ea rebum. Stet clitaiai to ankasd gubergren, no sea takimata sanctus est Lorem ipsu adasta na. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
            clientName: "Max Anderson",
            designation: "CEO, Switch Color Ltd.",
            image: "/images/testimonial/testimonial2.jpg",
            altText: "Max Anderson"
        },
        {
            id: 3,
            quotesIcon: "ri-double-quotes-l",
            feedbckText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ant extra eirmod ut labore et dolore magna aliquyam erat, sed diammi maxil voluptua. At vero eos et accusam lores et ea rebum. Stet clitaiai to ankasd gubergren, no sea takimata sanctus est Lorem ipsu adasta na. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
            clientName: "Max Anderson",
            designation: "CEO, Switch Color Ltd.",
            image: "/images/testimonial/testimonial3.jpg",
            altText: "Max Anderson"
        },
    ]
};