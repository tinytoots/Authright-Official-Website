import React, { Component } from 'react'
import { Row, Col } from 'antd';
import './caseStudies.css';

export default class caseBlue extends Component {
    render() {
        return (
            <div className="hsbc-bg">
                <div className="inner">
                    {/* <img src={HsbcLogo} width={180} alt = 'logo' className='case-hsbc-logo-img'/> */}
                    <div className="caseStudies-title">
                        Authright delivers tailored IAM solutions for the healthcare industry,
                    </div>
                    <div className="caseStudies-title2">
                        empowering organizations with modern security mechanisms.
                    </div>
                    <div className="caseStudies-content">
                    We offer comprehensive global support for all servers, ensuring continuous monitoring,<br/>
                    proactive alerts, and swift action to resolve any issues promptly.
                    </div>
            </div>

                <div className="case-about-bg">
                    <div className="inner">
                        <Row>
                            <Col>
                                <img src="https://p.ipic.vip/gj9uhb.jpeg" width={550} alt = 'logo' className='case-hsbc-img' style={{paddingTop: 50, paddingBottom: 70}}/>
                            </Col>
                            <Col>
                                <div className="caseStudies-about-title" style={{paddingTop: 55}}>
                                    Empowering the Healthcare Industry
                                </div>
                                <div className="caseStudies-about-content">
                                    Authright, a premier IAM solution provider, demonstrates its proficiency in crafting advanced, cloud-based Customer Identity Access Management (CIAM) platforms tailored for the healthcare industry. Through partnerships with prominent IAM companies and top-tier healthcare organizations, Authright adeptly tackles critical industry challenges, expands service offerings, enhances user experience and security measures, delivering robust, cost-effective solutions across the healthcare industry. 
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
                                • Upgraded Architecture.<br/>
                                • Expanded Service Reach.<br/>
                                • Cost-Effective Deployment and Maintenance.<br/>
                                • Strengthened Risk Management.<br/>
                                • Broadened User Coverage Across Multiple Devices.<br/>
                                • Seamless Integration.<br/>
                                • Enhanced Patient Data Protection and Legal Compliance.<br/>
                                • Data Collection for Business Analysis.<br/>
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

                <div className="case-about-bg" >
                    <div className="inner" style={{marginBottom: 100}}>
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
                                    Authright plays a crucial role in transforming the digital infrastructure of healthcare organizations. Through our expertise, Authright facilitates clients’ transition from legacy IAM products to a modern ForgeRock architecture system, incorporating ForgeRock Identity Cloud, Remote Connector Server, and Identity Gateway.<br/>
                                    <br/>
                                    Our solutions implement containerized component deployment on the cloud with Docker and Kubernetes. We creatively design journeys with various authentication methods and self-services consumed by applications, as well as helpdesk service flow for delegated admins to handle support cases. Moreover, we implement data migration with RCS and OpenICF connectors to achieve synchronization, and set up a federated system for single sign-on across healthcare applications and third-party identity platforms.<br/> 
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
