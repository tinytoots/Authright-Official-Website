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
                    <img src={HsbcLogo} width={220} alt = 'logo' className='case-hsbc-logo-img'/>
                    <div className="caseStudies-title" style={{marginTop: -60}}>
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

                
                {/* <div className="caseStudies-about-title">
                    <div>Industry <div className='gray-lane-case'></div> &nbsp;&nbsp; Finance</div>
                </div> */}
                <div className="case-about-bg">
                    <div className="inner">
                        <Row>
                            <Col span={12}>
                                <img src={HsbcImg} width={550} alt = 'logo' className='case-hsbc-img' style={{paddingTop: 50, paddingBottom: 70}}/>
                            </Col>
                            <Col span={12}>
                                <div className="caseStudies-about-title" style={{paddingTop: 35}}>
                                    About Mohawk Industries
                                </div>
                                <div className="caseStudies-about-content">
                                    Mohawk Industries is an American flooring manufacturer based in Calhoun, Georgia, United States. Mohawk produces floor covering products for residential and commercial applications in North America and residential applications in Europe. The company manufacturing portfolio consists of soft flooring products (carpet and rugs), hard flooring products (ceramic and porcelain tile, natural stone and hardwood flooring), laminate flooring, sheet vinyl and luxury vinyl tile. The company employs 37,800 in operations in Australia, Brazil, Canada, Europe, India, Malaysia, Mexico, New Zealand, Russia and the United States.
                                </div>    
                            </Col>
                        </Row>
                    </div>
                </div>
                
                <div className="inner">
                    <Row>
                        <Col span={12}>
                            <div className="caseStudies-about-title" style={{paddingTop: 40}}>
                                The Challenge
                            </div>
                            <div className="caseStudies-about-content" style={{paddingBottom: 70}}>
                                As one of the world's largest banks and financial services organisations, HSBC has 40 million customers and 194,000 shareholders from 130 countries. How to effectively manage these accounts and keep them safe. At the same time, it is also a huge challenge to solve the problems that may emerge at any time in 24 hours.
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
                    <div className="inner">
                        <Row>
                            <Col span={12}>
                                <Row>
                                    <Col span={6}>
                                        <div className="caseStudies-data" style={{marginTop: 140}}>
                                            OpenAM
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div className="caseStudies-data3" style={{marginTop: 140}}>
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
                                    Our IAM experts will ensure the real-time updates of OpenAM and OpenDJ, and ensure the security of all authentication and authorization flows through password, dob, opt authentication, SAML2 and OAuth. At the same time, through the build and deploy pipeline of OpenAM and customized the OpenAM endpoint and authentication node, the efficiency of maintenance and deployment is greatly improved
                                </div>    
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className="case-result-bg">
                    <div className="inner">
                        <Row>
                            <Col span={12}>
                                <div className="caseStudies-about-title" style={{paddingTop: 50}}>
                                    The Results
                                </div>
                                <div className="caseStudies-about-content">
                                    IAM has greatly improved the production efficiency of HSBC. Through customized solutions, we have saved a lot of manpower and material resources for HSBC to provide management and security services for millions of accounts. Authright is committed to serving more users and helping enterprises achieve business goals faster.
                                </div>
                            </Col>
                            <Col span={12}>
                                <img src={AuthrightLogo} width={400} alt = 'logo' className='case-authright-img' style={{paddingTop: 50}} />
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
