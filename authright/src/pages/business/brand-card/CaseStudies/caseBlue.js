import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd';
import HsbcImg from '../../../../img/card-bcbs.png'
import HsbcLogo from '../../../../img/case-blue-cross.svg'
import AuthrightLogo from '../../../../img/authright-logo.jpg'
import './caseStudies.css';


const style = { background: '#0092ff', padding: '8px 0' };


export default class caseBlue extends Component {
    render() {
        return (
            <div className="hsbc-bg">
                <div className="inner">
                    {/* <img src={HsbcLogo} width={180} alt = 'logo' className='case-hsbc-logo-img'/> */}
                    <div className="caseStudies-title">
                        Authright provides modern IAM customized
                    </div>
                    <div className="caseStudies-title2">
                        solutions for Mohawk Industries
                    </div>
                    <div className="caseStudies-content">
                        We provide the global support for all servers, monitor
                    </div>
                    <div className="caseStudies-content" style={{paddingBottom: 70}}>
                        and alert and take timely action
                    </div>
            </div>

                <div className="case-about-bg">
                    <div className="inner">
                        <Row>
                            <Col span={12}>
                                <img src={HsbcImg} width={550} alt = 'logo' className='case-hsbc-img' style={{paddingTop: 50, paddingBottom: 70}}/>
                            </Col>
                            <Col span={12}>
                                <div className="caseStudies-about-title" style={{paddingTop: 55}}>
                                    Description
                                </div>
                                <div className="caseStudies-about-content">
                                    This is a leading healthcare provider serving more than half of the healthcare organizations across the US. 
                                    ForgeRock is used to replace their legacy (SecureAuth) IAM platform.
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
                                Customer Authentication and Authorization.<br/>
                                User accounts consolidating and provisioning/deprovisioning.<br/>
                                SSO through SAML.

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

                <div className="case-about-bg" >
                    <div className="inner" style={{marginBottom: 100}}>
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
                                    AM chain development and integration.<br/>
                                    IDM development for user account reconciliation and sync.<br/> 
                                    SSO integration through SAML.<br/>
                                    Troubleshooting and support

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
