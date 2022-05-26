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
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
}

export default class BlogPostStyleTwo extends Component {

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
                <div className="blog-area ptb-100 bg-fbf9f7">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {this.props.subTitle}
                            </span>
                            <h2>
                                {this.props.heading}
                            </h2>
                            <p>
                                {this.props.description}
                            </p>
                        </div>

                        {this.state.display ? <OwlCarousel 
                            className="blog-slides owl-carousel owl-theme"
                            {...options}
                        >
                            {this.props.posts.map((post) => (
                                <div className="single-blog-item" key={post.id}>
                                    <div className="post-image">
                                        <Link href={post.detailsUrl}>
                                            <a className="d-block">
                                                <img 
                                                    src={post.image} 
                                                    alt={post.altText} 
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <ul className="meta">
                                            <li>
                                                <i className="ri-calendar-2-line"></i> {post.date}
                                            </li>
                                            <li>
                                                <i className="ri-user-voice-line"></i> 
                                                <Link href={post.authorLink}>
                                                    <a>{post.author}</a>
                                                </Link>
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link href={post.detailsUrl}>
                                                <a>{post.title}</a>
                                            </Link>
                                        </h3>

                                        <p>{post.shortDesc}</p>
                                        
                                        <Link href={post.detailsUrl}>
                                            <a className="default-btn">
                                                {post.btnText} <i className="ri-arrow-right-line"></i>
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

BlogPostStyleTwo.propTypes = {
    title: PropTypes.string,
}

BlogPostStyleTwo.defaultProps = {
    // Blog Header
    subTitle: "OUR BLOGS",
    heading: "Meet Up With Our Blogs",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",

    // Blog Post
    posts: [
        {
            id: 1,
            image: "/images/blog/blog1.jpg",
            altText: "Blog Image",
            date: "Jan 22, 2021",
            author: "Lords Evans",
            authorLink: "#",
            title: "The Secret of Your Business Success Find Quickly",
            shortDesc: "Lorem ipsum dolor sit amet, conseteturants atal into sadipscing elitr, sed diam nonumy eirmod nsa ada tempor invidunt ut.",
            btnText: "Read More",
            detailsUrl: "/blog-details",
        }, 
        {
            id: 2,
            image: "/images/blog/blog2.jpg",
            altText: "Blog Image",
            date: "Jan 22, 2021",
            author: "Sarah Taylor",
            authorLink: "#",
            title: "Consulting is a Good and Best Into Our Company",
            shortDesc: "Lorem ipsum dolor sit amet, conseteturants atal into sadipscing elitr, sed diam nonumy eirmod nsa ada tempor invidunt ut.",
            btnText: "Read More",
            detailsUrl: "/blog-details",
        }, 
        {
            id: 3,
            image: "/images/blog/blog3.jpg",
            altText: "Blog Image",
            date: "Jan 22, 2021",
            author: "James Andy",
            authorLink: "#",
            title: "Business Has Become a Good in the Global World",
            shortDesc: "Lorem ipsum dolor sit amet, conseteturants atal into sadipscing elitr, sed diam nonumy eirmod nsa ada tempor invidunt ut.",
            btnText: "Read More",
            detailsUrl: "/blog-details",
        }, 
        {
            id: 4,
            image: "/images/blog/blog4.jpg",
            altText: "Blog Image",
            date: "Jan 22, 2021",
            author: "James Andy",
            authorLink: "#",
            title: "Business Has Become a Good in the Global World",
            shortDesc: "Lorem ipsum dolor sit amet, conseteturants atal into sadipscing elitr, sed diam nonumy eirmod nsa ada tempor invidunt ut.",
            btnText: "Read More",
            detailsUrl: "/blog-details",
        }, 
    ]
};