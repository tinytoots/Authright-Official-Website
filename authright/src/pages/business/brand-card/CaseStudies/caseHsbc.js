import React, { Component } from 'react'
import { Row, Col } from 'antd';
import './caseStudies.css';

export default class caseHsbc extends Component {
    render() {
        return (
            <div className="hsbc-bg">
                <div className="inner">
                    <div className="caseStudies-title">
                        Authright offers round-the-clock global IAM technical support,
                    </div>
                    <div className="caseStudies-title2">
                        ensuring uninterrupted assistance to clients across all time zones.
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
                                <img src="https://p.ipic.vip/gs2f4v.jpeg" width={550} alt = 'logo' className='case-hsbc-img' style={{paddingTop: 50, paddingBottom: 70}}/>
                            </Col>
                            <Col>
                                <div className="caseStudies-about-title">
                                    Authright Empowers the Finance Sector
                                </div>
                                <div className="caseStudies-about-content">
                                For this client, we revolutionized their digital security framework with Forgerock products, ensuring millions of their customers can now effortlessly and securely manage their accounts across various platforms, be it web browsers or mobile devices.
                                </div>    
                            </Col>
                        </Row>
                    </div>
                </div>
                
                <div className="inner">
                    <Row>
                        <Col>
                            <div className="caseStudies-about-title">
                                Key Contributions to Client Success
                            </div>
                            <div className="caseStudies-about-content" style={{paddingBottom: 70}}>
                            Let us dive into the remarkable journey of how we transformed our client's operations. By seamlessly integrating their legacy application and database, implementing robust multi-factor authentication (MFA), and enabling smooth single sign-on (SSO) across web and mobile platforms using SAML and OAuth, we fortified their security and streamlined their processes. Additionally, we empowered end-users with self-service capabilities through a customized user interface. Now, witness their evolution as they migrate their platform to the AWS cloud, achieving exceptional scalability and flexibility. <br/>
                                {/* Secure authentication and authorization with MFA<br/>
                                SSO through SAML, Oauth across web and mobile<br/>
                                End user self-service through a customized UI<br/>
                                Now migrating the platform to AWS cloud. */}

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
                                        <div className="caseStudies-data" style={{marginTop: 90}}>
                                            OpenAM
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div className="caseStudies-data3" style={{marginTop: 90}}>
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
                                    Tailored UI Dashboard Development <br />
                                    Customization of AM Endpoint and Authentication Node<br />
                                    Personalized AM Session and Token Management<br />
                                    Dedicated Troubleshooting and Responsive Support<br />
                                </div>    
                            </Col>
                        </Row>
                    </div>
                </div>
          
            </div>
        )
    }
}
