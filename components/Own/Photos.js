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

export default class Photos extends Component {

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
                <div className="testimonial-area pb-70">
                    <div className="container">
                        {/* <div className="section-title">
                            <span className="sub-title">
                                {this.props.subTitle}
                            </span>
                            <h2>
                                {this.props.title}
                            </h2>
                        </div> */}

                        {this.state.display ? <OwlCarousel 
                        className="testimonial-slides owl-carousel owl-theme"
                            {...options}
                        > 
                            {this.props.testimonials.map((item) => (
                                <div className="single-testimonial-box" key={item.id}>
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-md-12">
                                            <h2>Our events</h2>
                                            <div className="testimonial-desc">
                                                <div className="info">
                                                    <h3>{item.eventName}</h3>
                                                    <span>{item.designation}</span>
                                                </div>
                                                <p>
                                                    {item.feedbckText}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-lg-7 col-md-12">
                                            <div className="testimonial-image events-image-div">
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

Photos.propTypes = {
    title: PropTypes.string,
}

Photos.defaultProps = {
    // Testimonial Header
    subTitle: "",
    title: "Our Events",

    // Testimonial Item
    testimonials: [
        {
            id: 1,
            quotesIcon: "ri-double-quotes-l",
            feedbckText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ant extra eirmod ut labore et dolore magna aliquyam erat, sed diammi maxil voluptua. At vero eos et accusam lores et ea rebum. Stet clitaiai to ankasd gubergren, no sea takimata sanctus est Lorem ipsu adasta na. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
            eventName: "Some Event",
            designation: "Some Event",
            image: "https://via.placeholder.com/1080x720.png?text=Some%20Event%20Photo",
            altText: "Max Anderson"
        },
        {
            id: 2,
            quotesIcon: "ri-double-quotes-l",
            feedbckText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ant extra eirmod ut labore et dolore magna aliquyam erat, sed diammi maxil voluptua. At vero eos et accusam lores et ea rebum. Stet clitaiai to ankasd gubergren, no sea takimata sanctus est Lorem ipsu adasta na. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
            eventName: "Max Anderson",
            designation: "CEO, Switch Color Ltd.",
            image: "https://via.placeholder.com/1080x720.png?text=Some%20Event%20Photo",
            altText: "Max Anderson"
        },
        {
            id: 3,
            quotesIcon: "ri-double-quotes-l",
            feedbckText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ant extra eirmod ut labore et dolore magna aliquyam erat, sed diammi maxil voluptua. At vero eos et accusam lores et ea rebum. Stet clitaiai to ankasd gubergren, no sea takimata sanctus est Lorem ipsu adasta na. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
            eventName: "Max Anderson",
            designation: "CEO, Switch Color Ltd.",
            image: "https://via.placeholder.com/1080x720.png?text=Some%20Event%20Photo",
            altText: "Max Anderson"
        },
    ]
};