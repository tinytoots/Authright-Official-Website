import React, { Component } from 'react'
import { Row, Col } from 'antd';
import './caseStudies.css';

export default class caseHomeDepot extends Component {
    render() {
        return (
            <div className="hsbc-bg">
                <div className="inner">
                    {/* <img src={HsbcLogo} width={180} alt = 'logo' className='case-hsbc-logo-img'/> */}
                    <div className="caseStudies-title">
                        Authright offers cutting-edge IAM solutions tailored specifically for the
                    </div>
                    <div className="caseStudies-title2">
                        Retailer Industry, ensuring seamless and secure access management in today's dynamic market landscape.
                    </div>
                    <div className="caseStudies-content">
                        We offer comprehensive global support for all servers, ensuring continuous<br/>
                        monitoring, proactive alerts, and swift action to resolve any issues promptly.
                    </div>
            </div>

                
                {/* <div className="caseStudies-about-title">
                    <div>Industry <div className='gray-lane-case'></div> &nbsp;&nbsp; Finance</div>
                </div> */}
                <div className="case-about-bg">
                    <div className="inner">
                        <Row>
                            <Col>
                                <img src="https://p.ipic.vip/qaygg4.jpeg" width={550} alt = 'logo' className='case-hsbc-img' style={{paddingTop: 50, paddingBottom: 70}}/>
                            </Col>
                            <Col>
                                <div className="caseStudies-about-title" style={{paddingTop: 70}}>
                                    IAM System Powers E-Commerce Growth
                                </div>
                                <div className="caseStudies-about-content">
                                Our IAM system serves as the backbone of their bustling online e-commerce platform, facilitating seamless customer logins day in and day out. With a staggering 100 million registered accounts and over 30 million active users, our robust IAM solution is the driving force behind their continued growth and success in the digital marketplace. 
                                </div>    
                                
                            </Col>
                        </Row>
                    </div>
                </div>
                
                <div className="inner">
                    <Row>
                        <Col>
                            <div className="caseStudies-about-title" style={{paddingTop: 40}}>
                                Key Contributions to Client Success 
                            </div>
                            <div className="caseStudies-about-content" style={{paddingBottom: 70}}>
                                Implementation of CIAM for 30,000,000+ active users<br />
                                Efficient monitoring and extraction of customer behavior data<br />
                                Enhancement of self-service capabilities<br />
                                Seamless migration of user accounts
                            </div>
                        </Col>
                        <Col>
                        <Row style ={{marginTop: "75px"}}>
                                <Col >
                                    <div className = "case-mark-block" >
                                    {/* style={{paddingTop: 10, marginLeft:110, color:"#cf1322", fontSize: 28}} */}
                                        <div className="case-mark-number" >
                                            130
                                        </div>
                                        {/* style={{marginLeft:110}} */}
                                        <div className="case-mark-text">
                                            Countires
                                        </div>
                                    </div>
                                </Col>
                                <Col >
                                <div className = "case-mark-block" >
                                    {/* style={{paddingTop: 10, marginLeft:110, color:"#cf1322", fontSize: 28}} */}
                                        <div className="case-mark-number" >
                                            40,000,000
                                        </div>
                                        {/* style={{marginLeft:110}} */}
                                        <div className="case-mark-text">
                                            Users
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                <div className = "case-mark-block" >
                                    {/* style={{paddingTop: 10, marginLeft:110, color:"#cf1322", fontSize: 28}} */}
                                        <div className="case-mark-number" >
                                            24/7
                                        </div>
                                        {/* style={{marginLeft:110}} */}
                                        <div className="case-mark-text">
                                            Support
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                <div className = "case-mark-block" >
                                    {/* style={{paddingTop: 10, marginLeft:110, color:"#cf1322", fontSize: 28}} */}
                                        <div className="case-mark-number" >
                                             100%
                                        </div>
                                        {/* style={{marginLeft:110}} */}
                                        <div className="case-mark-text">
                                            Customer Satisfaction
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div className="case-about-bg">
                    <div className="inner">
                        <Row>
                        <div className = "case-solution-tool">
                            <Col>
                                <Row>
                                    <Col span={6}>
                                        <div className="caseStudies-data" style={{marginTop: 70}}>
                                            OpenAM
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div className="caseStudies-data3" style={{marginTop: 70}}>
                                            OpenDJ
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={6}>
                                        <div className="caseStudies-data">
                                            SAML2
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div className="caseStudies-data3">
                                            OAuth
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            </div>
                            <Col>
                                <div className="caseStudies-about-title">
                                    Our Comprehensive Solution
                                </div>
                                <div className="caseStudies-about-content" style={{paddingBottom: 50}}>
                                    Tailored authentication module customization <br />
                                    Seamless migration of DS user accounts <br />
                                    Comprehensive disaster recovery setup <br />
                                    Efficient system upgrades<br />
                                    Proactive troubleshooting and continuous support

                                </div>    
                            </Col>
                        </Row>
                    </div>
                </div>
                


                {/* <div className="case-about-bg">
                    <div className="caseStudies-about-title">
                        About AuthRight
                    </div>
                    <div className="caseStudies-about-content">
                        AuthRight, founded in 2014 in Massachusetts, is an accelerator of digital transformation. We advise, train and build solutions to help business seize the opportunities offered by the digital economy. AuthRight’s professional services help clients protect, connect, and manage their digital identities of people, devices, and the internet of things (IoT) through an all-in-one Identify Platform.
                    </div>
                </div>
           */}
            </div>
        )
    }
}
