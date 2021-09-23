import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd';
import HsbcImg from '../../../../img/case-mohawk-img.jpg'
import HsbcLogo from '../../../../img/case-mohawk-industries-logo.svg'
import AuthrightLogo from '../../../../img/authright-logo.jpg'
import './caseStudies.css';


const style = { background: '#0092ff', padding: '8px 0' };


export default class caseMohawk extends Component {
    render() {
        return (
            <div className="hsbc-bg">
                <div className="inner">
                    {/* <img src={HsbcLogo} width={180} alt = 'logo' className='case-hsbc-logo-img'/> */}
                    <div className="caseStudies-title">
                        Authright provides modern IAM customized
                    </div>
                    <div className="caseStudies-title2">
                        solutions for Commercial Industries
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
                                <img src="https://tva1.sinaimg.cn/large/008i3skNgy1guq28n6fqfj60d00d475a02.jpg" width={550} height={500} alt = 'logo' className='case-hsbc-img' style={{paddingTop: 50, paddingBottom: 70}}/>
                            </Col>
                            <Col span={12}>
                                <div className="caseStudies-about-title" style={{paddingTop: 70}}>
                                    Description
                                </div>
                                <div className="caseStudies-about-content">
                                    This is an American flooring manufacturer which produces floor covering
                                    products for residential and commercial applications in North America and residential 
                                    applications in Europe. 
                                </div>    
                                <div className="caseStudies-about-content">
                                    ForgeRock IAM is used to integrate Azure Active Directory and their commercial 
                                    applications to achieve Single-Sing On.
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
                                Customer account login. <br />
                                A non-typical SSO flow through SAML.
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
                    <div className="inner">
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
                                    SSO through SAML with a non-typical workflow.<br/>
                                    Hybrid Cloud and On-prem system structure.<br/>
                                    Component customization and development.<br/>
                                    System upgrade.<br/>
                                    Production supporting and issue solving.

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
