import React from 'react'
import Link from 'next/link'

const ServiceSidebar = () => {
    return (
        <>
            <div className="widget-area">
                <div className="widget widget_search">
                    <form className="search-form">
                        <label>
                            <input 
                                type="search" 
                                className="search-field" 
                                placeholder="Search..." 
                            />
                        </label>
                        <button type="submit">
                            <i className="ri-search-2-line"></i>
                        </button>
                    </form>
                </div>

                <div className="widget widget_service_categories">
                    <h3 className="widget-title">Service Category</h3>

                    <ul>
                        <li>
                            <Link href="/services-details">
                                <a>
                                    Startup Advisory Solutions 
                                    <i className="ri-arrow-right-s-line"></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services-details">
                                <a>
                                    Business Incorporation 
                                    <i className="ri-arrow-right-s-line"></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services-details">
                                <a>
                                    Entrepreneur Consulting 
                                    <i className="ri-arrow-right-s-line"></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services-details">
                                <a>
                                    Communication Services 
                                    <i className="ri-arrow-right-s-line"></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services-details">
                                <a>
                                    Business Planning 
                                    <i className="ri-arrow-right-s-line"></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services-details">
                                <a>
                                    Brand Development 
                                    <i className="ri-arrow-right-s-line"></i>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>

                    <div className="tagcloud">
                        <Link href="#">
                            <a>Advertisement <span className="tag-link-count"> (3)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Business <span className="tag-link-count"> (3)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Life <span className="tag-link-count"> (5)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Lifestyle <span className="tag-link-count"> (2)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Fashion <span className="tag-link-count"> (2)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Inspiration <span className="tag-link-count"> (1)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Blog <span className="tag-link-count"> (1)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Ads <span className="tag-link-count"> (3)</span></a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceSidebar;