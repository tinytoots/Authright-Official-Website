import React, { Component } from 'react'
import './ForgerockIntegration.css'
import { Row, Col } from 'antd';

import ForgerockImg from '../../../../../../img/forgerock.svg'
import ForgerockCert1 from '../../../../../../img/forgerock-cert1.png'
import ForgerockCert2 from '../../../../../../img/forgerock-cert2.png'
import ForgerockCert3 from '../../../../../../img/forgerock-cert3.png'
import ForgerockCert4 from '../../../../../../img/forgerock-cert4.png'
import ForgerockCert5 from '../../../../../../img/forgerock-cert5.png'

export default class ForgerockIntegration extends Component {
    render() {
        return (
            <div className='solution-IAM-bg' style={{backgroundColor: 'white'}}>
                <div className='inner'>
                    <img src={ForgerockImg} width={220} alt = 'logo' className='solution-forgerock-logo'/>
                    <div className='solution-iam-title'>
                        Authright
                    </div>
                    <div className='solution-forgerock-title'>
                        ForgeRock Integration
                    </div>
                    <div className='managedService-intro2'>
                        Our Open Source integration experts can connect ForgeRock based Open IAM solution to your corporate website, intranet/extranet portals, e-Commerce and legacy solution.
                    </div>
                    <div className='managedService-gray-lane2' />
                    

                    <div className="forgerock-conent-bg">
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Runtime Engine
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    Easily configure message flows among client’s systems and services
                                    <br /><br />
                                    Offers a robust runtime of maximizing service reuse without unstableness of point-to-point integration approaches.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Web services
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    Deploy to various web service and fully support to SOAP and REST
                                    <br /><br />
                                    Provide a “firewall” for better protection.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Enterprise data
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    Integrate with database, JMS queues, custom applications, and many packaged applications, including legacy apps.
                                    <br /><br />
                                    Support multiple data formats and programming languages
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Cloud services
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    Integrate with SaaS, cloud and social media platform.
                                    <br /><br />
                                    Create new integrations without knowledge of underlying integration infrastructure.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        
                        <Row gutter={16}>
                            <Col className="gutter-row" span={4}>
                                    <img src={ForgerockCert4} width={150} alt = 'logo' className='ping-cert-logo'/>
                            </Col>
                            <Col className="gutter-row" span={4}>
                                    <img src={ForgerockCert3} width={150} alt = 'logo' className='ping-cert-logo2'/>    
                            </Col>
                            <Col className="gutter-row" span={4}>
                                    <img src={ForgerockCert1} width={150} alt = 'logo' className='ping-cert-logo3'/>
                            </Col>
                            <Col className="gutter-row" span={4}>
                                    <img src={ForgerockCert2} width={150} alt = 'logo' className='ping-cert-logo4'/>
                            </Col>
                            <Col className="gutter-row" span={4}>
                                    <img src={ForgerockCert5} width={150} alt = 'logo' className='ping-cert-logo5'/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}
