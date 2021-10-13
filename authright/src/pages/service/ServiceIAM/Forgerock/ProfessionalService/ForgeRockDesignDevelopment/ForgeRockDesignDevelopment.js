import React, { Component } from 'react'
import './ForgeRockDesignDevelopment.css'
import { Row, Col } from 'antd';

import ForgerockImg from '../../../../../../img/forgerock.svg'
import ForgerockCert1 from '../../../../../../img/forgerock-cert1.png'
import ForgerockCert2 from '../../../../../../img/forgerock-cert2.png'
import ForgerockCert3 from '../../../../../../img/forgerock-cert3.png'
import ForgerockCert4 from '../../../../../../img/forgerock-cert4.png'
import ForgerockCert5 from '../../../../../../img/forgerock-cert5.png'

export default class ForgeRockDesignDevelopment extends Component {
    render() {
        return (
            <div className='solution-IAM-bg' style={{backgroundColor: 'white'}}>
                <div className='inner'>
                    <img src={ForgerockImg} width={220} alt = 'logo' className='solution-forgerock-logo'/>
                    <div className='solution-iam-title'>
                        Authright
                    </div>
                    <div className='solution-forgerock-title'>
                        ForgeRock Design Development
                    </div>
                    <div className='managedService-intro2'>
                        Our ForgeRock developers assist you to develop IAM solution for your business to securely manage identity based access to applications anytime on any medium through any device.
                    </div>
                    <div className='managedService-gray-lane2' />
                    <div className='solution-topics-title'>
                        Featured modules of ForgeRock:
                    </div>
                    <div className='solution-gray-lane' />

                    <div className="forgerock-conent-bg">
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    OpenIDM
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    An identity management system that provides simple management and synchronization of identity.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    OpenAM
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    An access management solution that includes Authentication, SSO, Authorization, Federation, Entitlements and Web Services Security.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    OpenDJ
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    A lightweight, embeddable directory that can easily share realtime customer, device, and user identity data across enterprise, cloud, social, and mobile environments.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    OpenICF
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    The Open Identity Connector Framework provides connections of a consistent generic layer between applications and target resources.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    OpenIG
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    An independent policy enforcement point that reduces the proliferation of passwords and ensures consistent, secure access across multiple web apps and APIs.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />

                        <div className='solution-topics-title' style={{marginTop: 70}}>
                            Solutions:
                        </div>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Single sign-on & Federation
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    There are many of approaches to protect your systems and information, including policy agents, SAML, OAuth, OpenID Connect, UMA, etc. We are able to bring up the most appropriate solutions according to specific circumstance.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    User provisioning
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    In order to ensure that user accounts are automatically created, modified, deactivated, and deleted, when staff turnover within your company.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Enterprise Directory
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    The Enterprise Directory can be used as a general purpose infrastructure of many applications and hold virtually data. So, it is required our technicians to architect the directory properly.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Upgrades & Migrations
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    AuthRight Inc gives our clients a flexibility in upgrades and migrations in different situations, such as the termination of current identity solution since the vendor in no longer in business, products in old version and waiting for upgrade to the latest release, or seeking other more cost-effective alternative.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Cloud Identity
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    Experienced in architect properly, implement cloud-based identity solutions.
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
