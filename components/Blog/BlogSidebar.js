import React from 'react'
import Link from 'next/link'

const BlogSidebar = () => {
    return (
        <>
            <aside className="widget-area">
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

                <div className="widget widget_enry_posts_thumb">
                    <h3 className="widget-title">Popular Posts</h3>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg1" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Being The Best-Selling Smart Phone This Year</a>
                                </Link>
                            </h4>
                            <span className="date">
                                <i className="ri-calendar-2-fill"></i> Jan 15, 2020
                            </span>
                        </div>
                    </article>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg2" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Love Songs Helped Me Through Heartbreak</a>
                                </Link>
                            </h4>
                            <span className="date">
                                <i className="ri-calendar-2-fill"></i> Jan 14, 2020
                            </span>
                        </div>
                    </article>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg3" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Two Fashion Designers Busy With 2020 Winter Fashion</a>
                                </Link>
                            </h4>
                            <span className="date">
                                <i className="ri-calendar-2-fill"></i> Jan 13, 2020
                            </span>
                        </div>
                    </article>

                    <article className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg4" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>Working in the Office is a Tradition For Women</a>
                                </Link>
                            </h4>
                            <span className="date">
                                <i className="ri-calendar-2-fill"></i> Jan 12, 2020
                            </span>
                        </div>
                    </article>
                </div>

                <div className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>

                    <ul>
                        <li>
                            <Link href="/blog-grid">
                                <a>
                                    Business <span className="post-count">(2)</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog-grid">
                                <a>Privacy <span className="post-count">(5)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog-grid">
                                <a>Technology <span className="post-count">(6)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog-grid">
                                <a>Tips <span className="post-count">(2)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog-grid">
                                <a>Uncategorized <span className="post-count">(1)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog-grid">
                                <a>Log in <span className="post-count">(1)</span></a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="widget widget_newsletter">
                    <h4>Subscribe To Our Newsletter</h4>
                    <p>Subscribe to our newsletter to get the new updates!</p>

                    <form className="newsletter-form" >
                        <input 
                            type="email" 
                            className="input-newsletter" 
                            placeholder="Enter your email" 
                            name="EMAIL" required 
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
 
                <div className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>

                    <div className="tagcloud">
                        <Link href="/blog-grid">
                            <a>Advertisement <span className="tag-link-count"> (3)</span></a>
                        </Link>
                        <Link href="/blog-grid">
                            <a>Business <span className="tag-link-count"> (3)</span></a>
                        </Link>
                        <Link href="/blog-grid">
                            <a>Life <span className="tag-link-count"> (5)</span></a>
                        </Link>
                        <Link href="/blog-grid">
                            <a>Lifestyle <span className="tag-link-count"> (2)</span></a>
                        </Link>
                        <Link href="/blog-grid">
                            <a>Fashion <span className="tag-link-count"> (2)</span></a>
                        </Link>
                        <Link href="/blog-grid">
                            <a>Inspiration <span className="tag-link-count"> (1)</span></a>
                        </Link>
                        <Link href="/blog-grid">
                            <a>Blog <span className="tag-link-count"> (1)</span></a>
                        </Link>
                        <Link href="/blog-grid">
                            <a>Ads <span className="tag-link-count"> (3)</span></a>
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default BlogSidebar;