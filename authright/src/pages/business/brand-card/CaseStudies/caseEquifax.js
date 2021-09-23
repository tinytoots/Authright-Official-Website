import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd';
import HsbcImg from '../../../../img/card-equifax.png'
import HsbcLogo from '../../../../img/case-equifax.svg'
import AuthrightLogo from '../../../../img/authright-logo.jpg'
import './caseStudies.css';


const style = { background: '#0092ff', padding: '8px 0' };


export default class caseEquifax extends Component {
    render() {
        return (
            <div className="hsbc-bg">
                <div className="inner">
                    {/* <img src={HsbcLogo} width={220} alt = 'logo' className='case-hsbc-logo-img'/> */}
                    <div className="caseStudies-title" style={{marginTop: 60}}>
                        Authright provides modern IAM customized
                    </div>
                    <div className="caseStudies-title2">
                        solutions for Workforce field
                    </div>
                    <div className="caseStudies-content">
                        We provide the global support for all servers, monitor
                    </div>
                    <div className="caseStudies-content" style={{paddingBottom: 70}}>
                        and alert and take timely action
                    </div>
            </div>

                
                {/* <div className="caseStudies-about-title">
                    <div>Industry <div className='gray-lane-case'></div> &nbsp;&nbsp; Finance</div>
                </div> */}
                <div className="case-about-bg">
                    <div className="inner">
                        <Row>
                            <Col span={12}>
                                <img src="https://tva1.sinaimg.cn/large/008i3skNgy1guq2eyc3xrj60d007b0u002.jpg" width={550} alt = 'logo' className='case-hsbc-img' style={{paddingTop: 50, paddingBottom: 70}}/>
                            </Col>
                            <Col span={12}>
                                <div className="caseStudies-about-title" style={{paddingTop: 60}}>
                                    Description
                                </div>
                                <div className="caseStudies-about-content">
                                    This project focuses on Workforce IAM solution including 20k+ employees from US, Canada, Australia,  
                                    and South America.
                                </div>    
                            </Col>
                        </Row>
                    </div>
                </div>
                
                <div className="inner">
                    <Row>
                        <Col span={12}>
                            <div className="caseStudies-about-title" style={{paddingTop: 40}}>
                                Scenario
                            </div>
                            <div className="caseStudies-about-content" style={{paddingBottom: 70}}>
                                SSO onboarding 200+ applications.<br/>
                                Secure authentication with MFA.<br/>
                                End user self-service through a customized UI.<br/>
                                Comprehensive Authentication Policy basd on various workflows.

                            </div>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={6}>
                                    <div className="caseStudies-data" style={{paddingTop: 10, marginLeft:110, color:"#cf1322", fontSize: 28}}>
                                        130
                                    </div>
                                    <div className="caseStudies-data2" style={{marginLeft:110}}>
                                        Countires
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="caseStudies-data3" style={{paddingTop: 10, marginLeft:200, color:"#cf1322", fontSize: 28}}>
                                        194,000
                                    </div>
                                    <div className="caseStudies-data4" style={{marginLeft:200}}>
                                        Shareholders
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={6}>
                                    <div className="caseStudies-data" style={{marginLeft:110, marginTop:50, color:"#cf1322", fontSize: 28}}>
                                        40,000,000
                                    </div>
                                    <div className="caseStudies-data2" style={{marginLeft:110}}>
                                        Customers
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="caseStudies-data3" style={{marginLeft:200, marginTop:50, color:"#cf1322", fontSize:28}}>
                                        24/7
                                    </div>
                                    <div className="caseStudies-data4" style={{marginLeft:200}}>
                                        Support
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div className="case-about-bg">
                    <div className="inner" style={{marginBottom:100}}>
                        <Row>
                            <Col span={12}>
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
                            <Col span={12}>
                                <div className="caseStudies-about-title">
                                    The Solution
                                </div>
                                <div className="caseStudies-about-content" style={{paddingBottom: 50}}>
                                    Authentication Workflow development.<br/>
                                    Self-service implementation.<br/>
                                    SSO Application onboarding through SAML and OAuth.<br/>
                                    Legacy Application Integration.<br/>
                                    Troubleshooting and support.
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
