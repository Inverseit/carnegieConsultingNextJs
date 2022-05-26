import React from 'react';
import Link from 'next/link'
import TopHeaderStyleTwo from '@/components/_App/TopHeaderStyleTwo';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import Footer from '@/components/_App/Footer';

const BlogDetails = () => {
    return (
        <>
            <TopHeaderStyleTwo /> 

            <NavbarStyleOne /> 

            <PageBanner 
                pageTitle="Blog Details" 
                homePageUrl="/"
                homePageText="Home"
                activePageText="Blog Details"
            />
            
            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog/blog1.jpg" alt="image" />
                                </div>
                                
                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <i className="ri-shield-user-line"></i>
                                                <a href="#">Chris Orwig</a>
                                            </li>
                                            <li>
                                                <i className="ri-calendar-2-line"></i>
                                                15 Jan, 2021
                                            </li>
                                            <li>
                                                <i className="ri-message-2-line"></i>
                                                <a href="#">04 Comments</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h3>The Secret of Your Business Success Find Quickly</h3>
                                    <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur <strong>adipisicing</strong> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <a href="#">commodo</a> consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                    
                                    <blockquote className="wp-block-quote">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <cite>Tom Cruise</cite>
                                    </blockquote>

                                    <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p>
                                    
                                    <ul className="wp-block-gallery columns-3">
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog2.jpg" alt="image" />
                                            </figure>
                                        </li>
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog3.jpg" alt="image" />
                                            </figure>
                                        </li>
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog4.jpg" alt="image" />
                                            </figure>
                                        </li>
                                    </ul>

                                    <h3>Four major elements that we offer:</h3>
                                    <ul className="features-list">
                                        <li>Scientific skills for getting a better result</li>
                                        <li>Communication skills to getting in touch</li>
                                        <li>A career overview opportunity available</li>
                                        <li>A good work environment for work</li>
                                    </ul>
                                    <h3>Setting the mood with incense</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                    <h3>The rise of marketing and why you need it</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                </div>

                                <div className="article-footer">
                                    <div className="article-tags">
                                        <Link href="/blog-grid">
                                            <a>Business</a>
                                        </Link>
                                        <Link href="/blog-grid">
                                            <a>Startup</a>
                                        </Link>
                                        <Link href="/blog-grid">
                                            <a>Agency</a>
                                        </Link>
                                    </div>
                                    <div className="article-share">
                                        <ul className="social">
                                            <li><span>Share:</span></li>
                                            <li><a href="#" className="facebook" target="_blank"><i className="ri-facebook-fill"></i></a></li>
                                            <li><a href="#" className="twitter" target="_blank"><i className="ri-linkedin-fill"></i></a></li>
                                            <li><a href="#" className="linkedin" target="_blank"><i className="ri-twitter-fill"></i></a></li>
                                            <li><a href="#" className="instagram" target="_blank"><i className="ri-instagram-line"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="comments-area">
                                    <h3 className="comments-title">2 Comments:</h3>
                                    <ol className="comment-list">
                                        <li className="comment">
                                            <div className="comment-body">
                                                <footer className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <img src="/images/user/user1.jpg" className="avatar" alt="image" />
                                                        <b className="fn">John Jones</b>
                                                    </div>
                                                    <div className="comment-metadata">
                                                        <span>January 01, 2021 at 10:59 am</span>
                                                    </div>
                                                </footer>
                                                <div className="comment-content">
                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                </div>
                                                <div className="reply">
                                                    <a href="#" className="comment-reply-link">Reply</a>
                                                </div>
                                            </div>

                                            <ol className="children">
                                                <li className="comment">
                                                    <div className="comment-body">
                                                        <footer className="comment-meta">
                                                            <div className="comment-author vcard">
                                                                <img src="/images/user/user2.jpg" className="avatar" alt="image" />
                                                                <b className="fn">Steven Smith</b>
                                                            </div>
                                                            <div className="comment-metadata">
                                                                <span>January 02, 2021 at 21:59 am</span>
                                                            </div>
                                                        </footer>
                                                        <div className="comment-content">
                                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                        </div>
                                                        <div className="reply">
                                                            <a href="#" className="comment-reply-link">Reply</a>
                                                        </div>
                                                    </div>

                                                    <ol className="children">
                                                        <li className="comment">
                                                            <div className="comment-body">
                                                                <footer className="comment-meta">
                                                                    <div className="comment-author vcard">
                                                                        <img src="/images/user/user3.jpg" className="avatar" alt="image" />
                                                                        <b className="fn">Sarah Taylor</b>
                                                                    </div>
                                                                    <div className="comment-metadata">
                                                                        <span>January 03, 2021 at 05:59 am</span>
                                                                    </div>
                                                                </footer>
                                                                <div className="comment-content">
                                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                                </div>
                                                                <div className="reply">
                                                                    <a href="#" className="comment-reply-link">Reply</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </li>
                                            </ol>
                                        </li>

                                        <li className="comment">
                                            <div className="comment-body">
                                                <footer className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <img src="/images/user/user4.jpg" className="avatar" alt="image" />
                                                        <b className="fn">John Doe</b>
                                                    </div>
                                                    <div className="comment-metadata">
                                                        <span>January 04, 2021 at 05:59 am</span>
                                                    </div>
                                                </footer>
                                                <div className="comment-content">
                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                </div>
                                                <div className="reply">
                                                    <a href="#" className="comment-reply-link">Reply</a>
                                                </div>
                                            </div>

                                            <ol className="children">
                                                <li className="comment">
                                                    <div className="comment-body">
                                                        <footer className="comment-meta">
                                                            <div className="comment-author vcard">
                                                                <img src="/images/user/user1.jpg" className="avatar" alt="image" />
                                                                <b className="fn">James Anderson</b>
                                                            </div>
                                                            <div className="comment-metadata">
                                                                <span>January 05, 2021 at 04:59 am</span>
                                                            </div>
                                                        </footer>
                                                        <div className="comment-content">
                                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                        </div>
                                                        <div className="reply">
                                                            <a href="#" className="comment-reply-link">Reply</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>

                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">Leave A Reply</h3>
                                        <form className="comment-form">
                                            <p className="comment-notes">
                                                <span id="email-notes">Your email address will not be published.</span>
                                                Required fields are marked <span className="required">*</span>
                                            </p>
                                            <p className="comment-form-author">
                                                <label>Name <span className="required">*</span></label>
                                                <input type="text" id="author" placeholder="Your Name*" name="author" required="required" />
                                            </p>
                                            <p className="comment-form-email">
                                                <label>Email <span className="required">*</span></label>
                                                <input type="email" id="email" placeholder="Your Email*" name="email" required="required" />
                                            </p>
                                            <p className="comment-form-url">
                                                <label>Website</label>
                                                <input type="url" id="url" placeholder="Website" name="url" />
                                            </p>
                                            <p className="comment-form-comment">
                                                <label>Comment</label>
                                                <textarea name="comment" id="comment" cols="45" placeholder="Your Comment..." rows="5" maxLength="65525" required="required"></textarea>
                                            </p>
                                            <p className="comment-form-cookies-consent">
                                                <input type="checkbox" value="yes" name="comment-cookies-consent" id="comment-cookies-consent" />
                                                <label htmlFor="comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                            </p>
                                            <p className="form-submit">
                                                <input type="submit" name="submit" id="submit" className="submit" value="Post A Comment" />
                                            </p>
                                        </form>
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

export default BlogDetails;