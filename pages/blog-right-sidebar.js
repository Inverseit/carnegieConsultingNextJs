import React, { Component } from 'react'
import TopHeaderStyleTwo from '@/components/_App/TopHeaderStyleTwo'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBanner from '@/components/Common/PageBanner'
import BlogSidebar from '@/components/Blog/BlogSidebar'
import PropTypes from "prop-types"
import Link from 'next/link'
import Footer from '@/components/_App/Footer'

export default class BlogRightSidebar extends Component {
    render() {
        return (
            <>
                <TopHeaderStyleTwo /> 

                <NavbarStyleOne /> 

                <PageBanner 
                    pageTitle="Blog Right Sidebar" 
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="Blog Right Sidebar"
                />

                <div className="blog-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="row justify-content-center">
                                    {this.props.posts.map((post) => (
                                        <div className="col-lg-6 col-md-6" key={post.id}>
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

                                    <div className="col-lg-12 col-md-12">
                                        <div className="pagination-area text-center">
                                            <Link href="/blog-grid">
                                                <a className="next page-numbers">
                                                    <i className="ri-arrow-left-s-line"></i>
                                                </a>
                                            </Link>
                                            <Link href="/blog-grid">
                                                <a className="page-numbers current">1</a>
                                            </Link>
                                            <Link href="/blog-grid">
                                                <a className="page-numbers">2</a>
                                            </Link>
                                            <Link href="/blog-grid">
                                                <a className="page-numbers">3</a>
                                            </Link>
                                            <Link href="/blog-grid">
                                                <a className="page-numbers">4</a>
                                            </Link>
                                            <Link href="/blog-grid">
                                                <a className="next page-numbers">
                                                    <i className="ri-arrow-right-s-line"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
                
                <Footer />
            </>
        )
    }
}

BlogRightSidebar.propTypes = {
    title: PropTypes.string,
}

BlogRightSidebar.defaultProps = {
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
        {
            id: 4,
            image: "/images/blog/blog4.jpg",
            altText: "Blog Image",
            date: "Jan 16, 2021",
            author: "James Andy",
            authorLink: "/author",
            title: "Business Has Become a Good in the Global World",
            shortDesc: "Lorem ipsum dolor sit amet, conseteturants atal into sadipscing elitr, sed diam nonumy eirmod nsa ada tempor invidunt ut.",
            btnText: "Read More",
            detailsUrl: "/blog-details",
        }, 
        {
            id: 5,
            image: "/images/blog/blog5.jpg",
            altText: "Blog Image",
            date: "Jan 14, 2021",
            author: "Sarah Taylor",
            authorLink: "/author",
            title: "Magic Monday: Looking Forward With Hope",
            shortDesc: "Lorem ipsum dolor sit amet, conseteturants atal into sadipscing elitr, sed diam nonumy eirmod nsa ada tempor invidunt ut.",
            btnText: "Read More",
            detailsUrl: "/blog-details",
        }, 
        {
            id: 6,
            image: "/images/blog/blog6.jpg",
            altText: "Blog Image",
            date: "Jan 12, 2021",
            author: "James Andy",
            authorLink: "/author",
            title: "Outsourcing IT Services: The Hows and Why",
            shortDesc: "Lorem ipsum dolor sit amet, conseteturants atal into sadipscing elitr, sed diam nonumy eirmod nsa ada tempor invidunt ut.",
            btnText: "Read More",
            detailsUrl: "/blog-details",
        }, 
    ]
};
 