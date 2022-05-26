import React, { Component } from 'react'
import PropTypes from "prop-types"
import Link from 'next/link'

export default class BlogPost extends Component {
    render() {
        return (
            <>
                <div className="blog-area pt-100 pb-70">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {this.props.subTitle}
                            </span>
                            <h2>
                                {this.props.heading}
                            </h2>
                        </div>

                        <div className="row justify-content-center">
                            {this.props.posts.map((post) => (
                                <div className="col-lg-4 col-md-6" key={post.id}>
                                    <div className="single-blog-post">
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
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

BlogPost.propTypes = {
    title: PropTypes.string,
}

BlogPost.defaultProps = {
    // Blog Header
    subTitle: "OUR BLOGS",
    heading: "Meet Up With Our Blogs",

    // Blog Post
    posts: [
        {
            id: 1,
            image: "/images/blog/blog1.jpg",
            altText: "Blog Image",
            date: "Jan 22, 2021",
            author: "Lords Evans",
            authorLink: "/author",
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
            authorLink: "/author",
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
            authorLink: "/author",
            title: "Business Has Become a Good in the Global World",
            shortDesc: "Lorem ipsum dolor sit amet, conseteturants atal into sadipscing elitr, sed diam nonumy eirmod nsa ada tempor invidunt ut.",
            btnText: "Read More",
            detailsUrl: "/blog-details",
        }, 
    ]
};