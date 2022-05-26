import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default class ProjectsTwoColumn extends Component {
    render() {
        return (
            <>
                <div className="projects-area ptb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            {this.props.projects.map((item) => (
                                <div className="col-lg-6 col-md-6" key={item.id}>
                                    <div className="single-projects-box">
                                        <img 
                                            src={item.image} 
                                            alt={item.altText} 
                                        />
                                        <h3>{item.title}</h3>
                                        <span>{item.category}</span>

                                        <Link href={item.detailsUrl}>
                                            <a className="default-btn">
                                                {item.linkText} <i className="ri-arrow-right-line"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div> 
                            ))}

                            <div className="col-lg-12 col-md-12">
                                <div className="pagination-area text-center">
                                    <Link href="/projects-1">
                                        <a className="next page-numbers">
                                            <i className="ri-arrow-left-s-line"></i>
                                        </a>
                                    </Link>
                                    <Link href="/projects-1">
                                        <a className="page-numbers current">1</a>
                                    </Link>
                                    <Link href="/projects-1">
                                        <a className="page-numbers">2</a>
                                    </Link>
                                    <Link href="/projects-1">
                                        <a className="page-numbers">3</a>
                                    </Link>
                                    <Link href="/projects-1">
                                        <a className="page-numbers">4</a>
                                    </Link>
                                    <Link href="/projects-1">
                                        <a className="next page-numbers">
                                            <i className="ri-arrow-right-s-line"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

ProjectsTwoColumn.propTypes = {
    title: PropTypes.string,
}

ProjectsTwoColumn.defaultProps = {
    projects: [
        {
            id: 1,
            image: "/images/projects/projects1.jpg",
            altText: "Project Image",
            title: "Financial Consultancy",
            category: "Financial",
            linkText: "Read More",
            detailsUrl: "/project-details",
        },
        {
            id: 2,
            image: "/images/projects/projects2.jpg",
            altText: "Project Image",
            title: "Strategy Consultancy",
            category: "Strategy",
            linkText: "Read More",
            detailsUrl: "/project-details",
        },
        {
            id: 3,
            image: "/images/projects/projects3.jpg",
            altText: "Project Image",
            title: "Organizational Consultancy",
            category: "Consultancy",
            linkText: "Read More",
            detailsUrl: "/project-details",
        },
        {
            id: 4,
            image: "/images/projects/projects4.jpg",
            altText: "Project Image",
            title: "Tax Consultancy",
            category: "Tax",
            linkText: "Read More",
            detailsUrl: "/project-details",
        },
        {
            id: 5,
            image: "/images/projects/projects5.jpg",
            altText: "Project Image",
            title: "Business Consultancy",
            category: "Business",
            linkText: "Read More",
            detailsUrl: "/project-details",
        },
        {
            id: 6,
            image: "/images/projects/projects6.jpg",
            altText: "Project Image",
            title: "Marketing Consultancy",
            category: "Marketing",
            linkText: "Read More",
            detailsUrl: "/project-details",
        },
        {
            id: 7,
            image: "/images/projects/projects7.jpg",
            altText: "Project Image",
            title: "Tax Solutions",
            category: "Startup",
            linkText: "Read More",
            detailsUrl: "/project-details",
        },
        {
            id: 8,
            image: "/images/projects/projects8.jpg",
            altText: "Project Image",
            title: "Consultancy Analytics",
            category: "Resources",
            linkText: "Read More",
            detailsUrl: "/project-details",
        },
    ]
};