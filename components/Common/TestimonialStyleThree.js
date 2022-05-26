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

export default class TestimonialStyleThree extends Component {

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
                <div className="testimonial-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="testimonial-content">
                                    <span className="sub-title">
                                        {this.props.subTitle}
                                    </span>
                                    <h2>
                                        {this.props.title}
                                    </h2> 

                                    {this.state.display ? <OwlCarousel 
                                    className="testimonial-slides owl-carousel owl-theme"
                                        {...options}
                                    > 
                                        {this.props.testimonials.map((item) => (
                                            <div className="testimonial-desc" key={item.id}>
                                                <div className="testimonial-desc">
                                                    <p>
                                                        {item.feedbckText}
                                                    </p>
                                                
                                                    <div className="info">
                                                        <h3>{item.clientName}</h3>
                                                        <span>{item.designation}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </OwlCarousel> : ''}
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="testimonial-img">
                                    <img src="/images/man.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

TestimonialStyleThree.propTypes = {
    title: PropTypes.string,
}

TestimonialStyleThree.defaultProps = {
    // Testimonial Header
    subTitle: "TESTIMONIAL",
    title: "Lets Meet Up With Our All Of The Clients Says At A Glance",
   
    // Testimonial Item
    testimonials: [
        {
            id: 1, 
            feedbckText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ant extra eirmod ut labore et dolore magna aliquyam erat, sed diammi maxil voluptua. At vero eos et accusam lores et ea rebum. Stet clitaiai to ankasd gubergren, no sea takimata sanctus est Lorem ipsu adasta na. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
            clientName: "Max Anderson",
            designation: "CEO, Switch Color Ltd.", 
        },
        {
            id: 2, 
            feedbckText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ant extra eirmod ut labore et dolore magna aliquyam erat, sed diammi maxil voluptua. At vero eos et accusam lores et ea rebum. Stet clitaiai to ankasd gubergren, no sea takimata sanctus est Lorem ipsu adasta na. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
            clientName: "Max Anderson",
            designation: "CEO, Switch Color Ltd.", 
        },
        {
            id: 3, 
            feedbckText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ant extra eirmod ut labore et dolore magna aliquyam erat, sed diammi maxil voluptua. At vero eos et accusam lores et ea rebum. Stet clitaiai to ankasd gubergren, no sea takimata sanctus est Lorem ipsu adasta na. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
            clientName: "Max Anderson",
            designation: "CEO, Switch Color Ltd.", 
        },
    ]
};