import React, { Component } from 'react'
import PropTypes from "prop-types"

export default class TeamMember extends Component {
    render() {
        return (
            <>
                <div className="team-area pt-100 pb-70 bg-fafafa">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">
                                {this.props.subHeading}
                            </span>
                            <h2>
                                {this.props.heading}
                            </h2>
                        </div>

                        <div className="row justify-content-center">
                            {this.props.team.map((member) => (
                                <div className="col-lg-3 col-md-6 col-sm-6" key={member.id}>
                                    <div className="single-team-member">
                                        <img 
                                            src={member.image} 
                                            alt={member.altText} 
                                        />
                                        <div className="content">
                                            <h3>
                                                {member.name}
                                            </h3>
                                            <span>
                                                {member.designation}
                                            </span>
                                            <ul className="social-links">
                                                {member.socialLinks.map((link) => (
                                                    <li key={link.id}>
                                                        <a href={link.url} target="_blank">
                                                            <i className={link.icon}></i>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
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

TeamMember.propTypes = {
    title: PropTypes.string,
}

TeamMember.defaultProps = {
    // Team Header
    subHeading: "TEAM",
    heading: "Meet Members of Our Exclusive Team for Your Business",

    // Team Members
    team: [
        {
            id: 1,
            image: "/images/team/team1.jpg",
            altText: "James Andy",
            name: "James Andy",
            designation: "CEO & Founder",

            socialLinks: [
                {
                    id: 1,
                    icon: "ri-facebook-fill",
                    url: "https://www.facebook.com/",
                },
                {
                    id: 2,
                    icon: "ri-twitter-fill",
                    url: "https://twitter.com/",
                },
                {
                    id: 3,
                    icon: "ri-linkedin-fill",
                    url: "https://www.linkedin.com/",
                },
                {
                    id: 4,
                    icon: "ri-instagram-line",
                    url: "https://www.instagram.com/",
                },
            ]
        },
        {
            id: 2,
            image: "/images/team/team2.jpg",
            altText: "Sarah Taylor",
            name: "Sarah Taylor",
            designation: "Office Manager",

            socialLinks: [
                {
                    id: 1,
                    icon: "ri-facebook-fill",
                    url: "https://www.facebook.com/",
                },
                {
                    id: 2,
                    icon: "ri-twitter-fill",
                    url: "https://twitter.com/",
                },
                {
                    id: 3,
                    icon: "ri-linkedin-fill",
                    url: "https://www.linkedin.com/",
                },
                {
                    id: 4,
                    icon: "ri-instagram-line",
                    url: "https://www.instagram.com/",
                },
            ]
        },
        {
            id: 3,
            image: "/images/team/team3.jpg",
            altText: "Steven Smith",
            name: "Steven Smith",
            designation: "General Manager",

            socialLinks: [
                {
                    id: 1,
                    icon: "ri-facebook-fill",
                    url: "https://www.facebook.com/",
                },
                {
                    id: 2,
                    icon: "ri-twitter-fill",
                    url: "https://twitter.com/",
                },
                {
                    id: 3,
                    icon: "ri-linkedin-fill",
                    url: "https://www.linkedin.com/",
                },
                {
                    id: 4,
                    icon: "ri-instagram-line",
                    url: "https://www.instagram.com/",
                },
            ]
        },
        {
            id: 4,
            image: "/images/team/team4.jpg",
            altText: "Alina Lucy",
            name: "Alina Lucy",
            designation: "PR and Consulting",

            socialLinks: [
                {
                    id: 1,
                    icon: "ri-facebook-fill",
                    url: "https://www.facebook.com/",
                },
                {
                    id: 2,
                    icon: "ri-twitter-fill",
                    url: "https://twitter.com/",
                },
                {
                    id: 3,
                    icon: "ri-linkedin-fill",
                    url: "https://www.linkedin.com/",
                },
                {
                    id: 4,
                    icon: "ri-instagram-line",
                    url: "https://www.instagram.com/",
                },
            ]
        },
    ]
};