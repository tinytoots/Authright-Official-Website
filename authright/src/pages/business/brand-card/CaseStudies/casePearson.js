import React, { Component } from 'react'
import { Row, Col } from 'antd';
import './caseStudies.css';

export default class casePearson extends Component {
    render() {
        return (
            <div className="hsbc-bg">
                <div className="inner">
                    {/* <img src={HsbcLogo} width={200} alt = 'logo' className='case-hsbc-logo-img'/> */}
                    <div className="caseStudies-title">
                        Revolutionize Education with Authright's
                    </div>
                    <div className="caseStudies-title2">
                        Tailored Modern IAM Solutions
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
                                <img src="https://p.ipic.vip/vi77v5.jpeg" width={550} alt = 'logo' className='case-hsbc-img' style={{paddingTop: 50, paddingBottom: 70}}/>
                            </Col>
                            <Col>
                                <div className="caseStudies-about-title" style={{paddingTop: 55}}>
                                    Authright Empowers the Education Field
                                </div>
                                <div className="caseStudies-about-content">
                                    We proudly showcase our expertise in facilitating smooth transitions for our esteemed client, exemplified by our successful endeavor in assisting the migration from Sun OpenSSO 8.0 to ForgeRock OpenAM 13. Our approach was rooted in meticulous planning, strategic execution, and unwavering commitment to excellence. We began by conducting a comprehensive assessment of the client’s existing infrastructure, identifying potential gaps and areas for improvement. Leveraging our deep understanding of both Sun OpenSSO and ForgeRock OpenAM platforms, we devised a customized migration strategy tailored to the client’s unique requirements.
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
                                Restored a lost OpenSSO dev/testing environment to full functionality, ensuring uninterrupted operations. <br/>
                                Upgraded from OpenSSO 8 to ForgeRock OpenAM 13, boosting security and efficiency.<br/>
                                Migrated hundreds of legacy applications bound to OpenSSO to ForgeRock OpenAM, streamlining authentication and authorization processes.<br/>
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

                <div className="case-about-bg" style={{marginBottom: 100}}>
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
                                    Expertly exported the OpenSSO configuration from the production environment and meticulously fine-tuned it, and reconstructed a robust OpenSSO development and testing environment, ensuring a flawless transition for future developments.<br/>
                                    Implemented a strategic upgrade, elevating OpenSSO 8.0 to the advanced ForgeRock OpenAM 13 platform.<br/>
                                    Executed a streamlined migration process, seamlessly transitioning OpenSSO 8.0 Agent-based applications to seamlessly integrate with ForgeRock OpenAM 13. <br/>
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
