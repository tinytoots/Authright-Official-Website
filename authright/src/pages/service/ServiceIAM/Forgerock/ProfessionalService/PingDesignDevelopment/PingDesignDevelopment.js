import React, { Component } from 'react'
import './PingDesignDevelopment.css'
import { Row, Col } from 'antd';

import PingImg from '../../../../../../img/ping-identity.svg'
import ForgerockCert1 from '../../../../../../img/ping-cert1.png'
import ForgerockCert2 from '../../../../../../img/ping-cert2.png'
import ForgerockCert3 from '../../../../../../img/ping-cert3.png'
import ForgerockCert4 from '../../../../../../img/ping-cert4.png'
import ForgerockCert5 from '../../../../../../img/ping-cert5.png'

export default class PingDesignDevelopment extends Component {
    render() {
        return (
            <div className='solution-IAM-bg' style={{backgroundColor: 'white'}}>
                <div className='inner'>
                    <img src={PingImg} width={200} alt = 'logo' className='solution-forgerock-logo' style={{marginTop: 50}}/>
                    <div className='solution-iam-title'>
                        Authright
                    </div>
                    <div className='solution-forgerock-title'>
                        PingIdentity Design Development
                    </div>
                    <div className='managedService-intro2'>
                        Our ForgeRock developers assist you to develop IAM solution for your business to securely manage identity based access to applications anytime on any medium through any device.
                    </div>
                    <div className='managedService-gray-lane2' />
                    <div className='solution-topics-title'>
                        Featured modules of PingIdentity:
                    </div>
                    <div className='solution-gray-lane' />

                    <div className="forgerock-conent-bg">
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    PingAccess
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    PingAccess is the Advanced Access Security service within the PingOne Cloud Platform that ensures that only authorized users access the resources they need.
                                    <br /><br />
                                    PingAccess is a centralized access security solution for apps and APIs down to the URL and HTTP method level. It includes a comprehensive policy engine, risk-aware authorization to resources and application-scoped session tokens.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    PingAuthorize
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    PingAuthorize (previously known as PingDataGovernance) is the Advanced Dynamic Authorization service within the PingOne Cloud Platform that helps you comply with privacy regulations by enforcing user consent across all applications.
                                    <br /><br />
                                    PingAuthorize provides centralized authorization policies that protect sensitive data and actions. They can be updated by anyone on the fly with a drag-and-drop UI, without requiring app teams to change their code.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className='solution-forgerock-intro1'>
                                PingCentral
                            </div>
                        </Col>
                        <Col className="gutter-row" span={18}>
                            <div className='solution-forgerock-intro'>
                                PingCentral is the Advanced Central Administration service within the PingOne Cloud Platform. It empowers application teams with a self-service application integration portal to consume IAM services.
                                <br /><br />
                                PingCentral helps IAM teams to do more with less by providing workflows, templates, orchestration automation, lifecycle management and central monitoring.
                            </div>
                        </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className='solution-forgerock-intro1'>
                                PingDirectory
                            </div>
                        </Col>
                        <Col className="gutter-row" span={18}>
                            <div className='solution-forgerock-intro'>
                                PingDirectory is the Advanced Directory service within the PingOne Cloud Platform that securely stores and manages identity and profile data at scale.
                                <br /><br />
                                This high-performance data store supports unstructured data, scales to 100’s of millions of identities with ease and exposes them via APIs.
                            </div>
                        </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className='solution-forgerock-intro1'>
                                PingFederate
                            </div>
                        </Col>
                        <Col className="gutter-row" span={18}>
                            <div className='solution-forgerock-intro'>
                                Is your current identity solution reaching its end of life and the vendor is no longer in business? Do you have an old version of the product and are looking to upgrade to the latest release? Is your current vendor forcing you to migrate to a solution that you really don’t want and are now looking for a more cost effective and palatable alternative? Identity Fusion has extensive experience with upgrades and migrations.
                                <br /><br />
                                PingFederate is built on open standards and provides customers, employees and partners with secure authentication and single sign-on to any application from any device and any location.
                            </div>
                        </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className='solution-forgerock-intro1'>
                                PingFederate
                            </div>
                        </Col>
                        <Col className="gutter-row" span={18}>
                            <div className='solution-forgerock-intro'>
                                PingFederate is the Advanced Single Sign-on service within the PingOne Cloud Platform.
                                <br /><br />
                                PingFederate is built on open standards and provides customers, employees and partners with secure authentication and single sign-on to any application from any device and any location.
                            </div>
                        </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className='solution-forgerock-intro1'>
                                PingID
                            </div>
                        </Col>
                        <Col className="gutter-row" span={18}>
                            <div className='solution-forgerock-intro'>
                                PingID is a cloud-delivered, risk-aware multi-factor authentication service for the workforce with adaptive policies, diverse authentication factors and employee self-service capabilities. PingID can help you balance enterprise security and workforce productivity.
                            </div>
                        </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className='solution-forgerock-intro1'>
                                PingIntelligence for APIs
                            </div>
                        </Col>
                        <Col className="gutter-row" span={18}>
                            <div className='solution-forgerock-intro'>
                                PingIntelligence for APIs is the Advanced API Security service within the PingOne Cloud Platform that protects all your APIs from cyberattacks missed by existing solutions.
                                <br /><br />
                                PingIntelligence for APIs leverages AI for automated API discovery, deep traffic visibility, reporting, threat detection and cyberattack blocking.
                            </div>
                        </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className='solution-forgerock-intro1'>
                                PingOne MFA
                            </div>
                        </Col>
                        <Col className="gutter-row" span={18}>
                            <div className='solution-forgerock-intro'>
                                PingOne MFA is a cloud-delivered, risk-aware multi-factor authentication service for customers with simple and convenient authentication methods, trusted device management and adaptive policies that can be embedded into your own mobile app.
                            </div>
                        </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className='solution-forgerock-intro1'>
                                PingOne Risk
                            </div>
                        </Col>
                        <Col className="gutter-row" span={18}>
                            <div className='solution-forgerock-intro'>
                                PingOne Risk is a cloud-based risk management service that leverages machine learning and intelligent, configurable policies. It secures authentication by considering past user behavior, IP reputation, anonymous network detection and other risk predictors.
                            </div>
                        </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className='solution-forgerock-intro1'>
                                PingOne Verify
                            </div>
                        </Col>
                        <Col className="gutter-row" span={18}>
                            <div className='solution-forgerock-intro'>
                                PingOne Verify is a cloud-based service that enables your customers to securely and conveniently verify their identity during enrollment and registration.
                                <br /><br />
                                Embed PingOne Verify into your applications using a mobile SDK to enhance security and reduce fraudulent account creation. It works by taking a live-face capture, scanning and verifying a government ID and matching the ID to the live-face capture.
                            </div>
                        </Col>
                        </Row>
                        <div className='solution-gray-lane' />

                        {/* <div className='solution-topics-title' style={{marginTop: 70}}>
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
                        </Row> */}
                        {/* <div className='solution-gray-lane' /> */}
                        

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
