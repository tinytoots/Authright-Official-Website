import React, { Component } from 'react'
import { Row, Col } from 'antd';
import './caseStudies.css';

export default class caseEquifax extends Component {
    render() {
        return (
            <div className="hsbc-bg">
                <div className="inner">
                    {/* <img src={HsbcLogo} width={220} alt = 'logo' className='case-hsbc-logo-img'/> */}
                    <div className="caseStudies-title" style={{marginTop: 60}}>
                        Authright Transforms Workforce Management with
                    </div>
                    <div className="caseStudies-title2">
                        Cutting-edge Custom IAM Solutions
                    </div>
                    <div className="caseStudies-content">
                        We offer comprehensive global support for all servers, ensuring continuous monitoring,<br/>
                        proactive alerts, and swift action to resolve any issues promptly.
                    </div>
            </div>

                
                {/* <div className="caseStudies-about-title">
                    <div>Industry <div className='gray-lane-case'></div> &nbsp;&nbsp; Finance</div>
                </div> */}
                <div className="case-about-bg">
                    <div className="inner">
                        <Row>
                            <Col>
                                <img src="https://p.ipic.vip/46ueuy.jpeg" width={550} alt = 'logo' className='case-hsbc-img' style={{paddingTop: 50, paddingBottom: 70}}/>
                            </Col>
                            <Col>
                                <div className="caseStudies-about-title" style={{paddingTop: 60}}>
                                    Empowering the Workforce Management
                                </div>
                                <div className="caseStudies-about-content">
                                    We take pride in delivering cutting-edge Workforce IAM solutions that have positively impacted over 20,000 employees spanning across the United States, Canada, Australia, and South America.
                                </div>    
                            </Col>
                        </Row>
                    </div>
                </div>
                
                <div className="inner">
                    <Row>
                        <Col>
                            <div className="caseStudies-about-title" style={{paddingTop: 40}}>
                                Key Contributions to Client Successes
                            </div>
                            <div className="caseStudies-about-content" style={{paddingBottom: 70}}>
                                Seamless SSO onboarding for over 200 applications.<br/>
                                Strengthened security with MFA authentication.<br/>
                                Customized UI design that enabled end-users with  self-service.<br/>
                                Implemented comprehensive Authentication Policy tailored to a variety of workflows.
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
                    <div className="inner" style={{marginBottom:100}}>
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
                                    Development of smooth Authentication Workflow.<br/>
                                    Implementation of Seamless Self-Service.<br/>
                                    Effortless SSO Application Onboarding via SAML and OAuth.<br/>
                                    Seamless Integration with Legacy Applications.<br/>
                                    Dedicated Troubleshooting and Support.
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
