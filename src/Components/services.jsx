import React from 'react';
import servicIcon_01 from "../assets/images/icons/pen-yellow.png";
import servicIcon_02 from "../assets/images/icons/code.png";
import servicIcon_03 from "../assets/images/icons/search-yellow.png";
import servicIcon_04 from "../assets/images/icons/marketing.png";
import servicIcon_05 from "../assets/images/icons/code-white.png";
import servicIcon_06 from "../assets/images/icons/marketing-white.png";
import SingleCountdown from "../SingleFeatures/SIngleCountdown";
import SectionTitle from "./section_title";
export default function Services() {
    return (
        <div className="services-area section-ptb bgs" id="services">
            <div className="container">
                <SectionTitle
                    title="SERVICES"
                    subTitle="What I Am Great At"
                    desc="Seasoned in Finance, Sales, Undewrwriting, Managemanet, and now entering the world of Web Development.  The varied expierence of my background allows for unigue insight into how many different fields operate"
                />
            </div>
            <div className="container">
                <div className="row service-row mt-45">
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp">
                            <div className="icon mb-20">
                                <img src={servicIcon_01} alt="design" />
                                <img className="d-none" src={servicIcon_02} alt="design" />
                            </div>
                            <div className="skill-project">
                                <h4 className="mb-3">UI/UX Design</h4>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp">
                            <div className="icon mb-20">
                                <img src={servicIcon_05} alt="design" />
                                <img className="d-none" src={servicIcon_02} alt="design" />
                            </div>
                            <div className="skill-project">
                                <h4 className="mb-3">Web Development</h4>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp">
                            <div className="icon mb-20">
                                <img src={servicIcon_03} alt="design" />
                                <img className="d-none" src={servicIcon_03} alt="design" />
                            </div>
                            <div className="skill-project">
                                <h4 className="mb-3">Database Query</h4>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp">
                            <div className="icon mb-20">
                                <img src={servicIcon_06} alt="design" />
                                <img className="d-none" src={servicIcon_04} alt="design" />
                            </div>
                            <div className="skill-project">
                                <h4 className="mb-3">Business Background</h4>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
