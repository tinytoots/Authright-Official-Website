import React, { Component } from 'react'
import { Row, Col } from 'antd';
import './caseStudies.css';

export default class caseDeloitte extends Component {
    render() {
        return (
            <div className="hsbc-bg">
                <div className="inner">
                    {/* <img src={HsbcLogo} width={180} alt = 'logo' className='case-hsbc-logo-img'/> */}
                    <div className="caseStudies-title">
                        Authright equips governmental organizations and programs
                    </div>
                    <div className="caseStudies-title2">
                        with cutting-Edge customized IAM solutions
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
                                <img src="https://p.ipic.vip/ft4b7i.jpeg" width={550} alt = 'logo' className='case-hsbc-img' style={{paddingTop: 50, paddingBottom: 70}}/>
                            </Col>
                            <Col>
                                <div className="caseStudies-about-title" style={{paddingTop: 35}}>
                                    Empowering Governmental Organizations
                                </div>
                                <div className="caseStudies-about-content">
                                    We take great pride in our service to state agencies, local governments, and institutions of higher education, delivering robust, accessible, and secure digital government services to their constituents.
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
                                User mappings facilitated via IDM, alongside reconciliation and live synchronization.<br/>
                                Seamless integration of IDM Connectors with various applications.<br/>
                                Empower end-users with self-service capabilities through a tailored user interface.
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
                                    Connector Development: Utilized CSV connector for bulk user management, SaleForce connector, and DS connector.<br/>
                                    Mappings: Data reconcile and sync; develop customized scripts for data manipulation.<br/>
                                    Data Mapping: Reconciled and synchronized data; developed customized scripts for data manipulation.<br/>
                                    UI Dashboard Development.<br/>
                                    Custom IDM API Enhancement.
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
