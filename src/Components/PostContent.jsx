import React from 'react';
import { 
    FaGithub, 
    FaLinkedin } from "react-icons/fa";

export default function PostContent(props) {
    const { title, blogImage, blogText } = props.post;
    return (
        <div className="main-area bgs section-ptb">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="news-details">
                            {blogImage ? 
                            <div className="news-details-img mb-4">
                                <img className="img-fluid" src={blogImage} alt={title} />
                            </div>
                            : null }
                           <div className="post-details mb-4">
                                <p>{blogText}</p>
                           </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div class="row">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaGithub/></i>
                            </div>
                            <a className="btn-animation" href="https://github.com/TRNisbet">github.com/TRNisbet</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30 mb-lg-0">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaLinkedin /></i>
                            </div>
                            <a className="btn-animation" href="https://www.linkedin.com/in/trnisbet">linkedin.com/in/trnisbet</a>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}
