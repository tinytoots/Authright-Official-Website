import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd';
import HsbcImg from '../../../../img/card-toyota.png'
import HsbcLogo from '../../../../img/case-toyota.svg'
import AuthrightLogo from '../../../../img/authright-logo.jpg'
import './caseStudies.css';


const style = { background: '#0092ff', padding: '8px 0' };


export default class caseToyota extends Component {
    render() {
        return (
            <div className="hsbc-bg">
                <div className="inner">
                    {/* <img src={HsbcLogo} width={220} alt = 'logo' className='case-hsbc-logo-img'/> */}
                    <div className="caseStudies-title" style={{marginTop: 70}}>
                        Authright provides modern IAM customized
                    </div>
                    <div className="caseStudies-title2">
                        solutions for Consumer Vehicle
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
                                <img src="https://tva1.sinaimg.cn/large/008i3skNgy1guq2ba9k72j60d008ogmn02.jpg" width={550} alt = 'logo' className='case-hsbc-img' style={{paddingTop: 50, paddingBottom: 70}}/>
                            </Col>
                            <Col span={12}>
                                <div className="caseStudies-about-title" style={{paddingTop: 60}}>
                                    Description
                                </div>
                                <div className="caseStudies-about-content">
                                    This project enables mobile OneApp to provide identity and access management services for 
                                    its customers.
                                </div>    
                            </Col>
                        </Row>
                    </div>
                </div>
                
                <div className="inner" style={{marginBottom: 50}}>
                    <Row>
                        <Col span={12}>
                            <div className="caseStudies-about-title" style={{paddingTop: 40}}>
                                Scenario
                            </div>
                            <div className="caseStudies-about-content" style={{paddingBottom: 70}}>
                                Using IDM to finish user self-service registration flow.<br/>
                                Using AM to finish OAuth authentication flow.<br/>
                                Custimaize End-user self-service UI.

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

                <div className="case-about-bg" style={{marginBottom: 150}}>
                    <div className="inner" >
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
                                    IDM API endpoints customization.<br/>
                                    User self-service workflow customization and development.<br/>
                                    AM session and token management customization

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
