import React, { Component } from 'react'
import './ManagedService.css'
import { Row, Col, Divider } from 'antd';

import ForgerockImg from '../../../../../img/forgerock.svg'
import ForgerockCert1 from '../../../../../img/forgerock-cert1.png'
import ForgerockCert2 from '../../../../../img/forgerock-cert2.png'
import ForgerockCert3 from '../../../../../img/forgerock-cert3.png'
import ForgerockCert4 from '../../../../../img/forgerock-cert4.png'
import ForgerockCert5 from '../../../../../img/forgerock-cert5.png'
import ForgeRock from '../../../../solution/ServiceIAM/Forgerock/Forgerock'

export default class ManagedService extends Component {
    render() {
        return (
            <div className='solution-IAM-bg' style={{backgroundColor: 'white'}}>
                <div className='inner'>
                    <img src={ForgerockImg} width={220} alt = 'logo' className='solution-forgerock-logo'/>
                    <div className='solution-iam-title'>
                        Authright
                    </div>
                    <div className='solution-forgerock-title'>
                        Managed Services
                    </div>
                    <div className='managedService-intro2'>
                        Identity management plays a key role in the enterprise, and if you lack the skills or resources to keep your company's identity management environment running smoothly, your business can be exposed to significant risks
                    </div>
                    <div className='managedService-gray-lane2' />
                    <div className="forgerock-conent-bg">
                        <div className='solution-topics-title'>
                            You may experience the following problems
                        </div>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                        <Col className="gutter-row" span={24}>
                            <div className='solution-forgerock-intro'>
                                An unreachable single sign-on solution can prevent employees from logging in to mission critical applications
                            </div>
                        </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                        <Col className="gutter-row" span={24}>
                            <div className='solution-forgerock-intro'>
                                A user provisioning system that fails to remove terminated employees can leave gaps in a company’s security
                            </div>
                        </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                        <Col className="gutter-row" span={24}>
                            <div className='solution-forgerock-intro'>
                                An enterprise directory that is improperly tuned can impact the entire identity infrastructure
                            </div>
                        </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                        <Col className="gutter-row" span={24}>
                            <div className='solution-forgerock-intro'>
                                Inaccurate data in any of these components can prevent access, or even worse can grant inappropriate access to the wrong people.
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

                    <div className="forgerock-conent-bg">
                        <div className='solution-topics-title'>
                            Managed Service Offerings:
                        </div>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Management
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    Authright consultants will provide assistance in ongoing activities such as: onboarding of SSO applications using appropriate methods and/or protocols (agents, proxies, SAML2, OAUTH2, etc.), creation of policies or access control instructions to ensure the right people have access to the right resources, creation of appropriate workflows to manage user identities, and effective synchronization of identity data between authoritative and target systems.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Tuning  
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    Armed with the information provided from Authright Monitoring Services, our support engineers can recommend which parameters should be modified to keep your applications running efficiently.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Monitoring
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    Knowing what to monitor is more important than simply monitoring the application, itself. If your monitoring tools are only performing healthcheck operations, you are missing the big picture and giving yourself a false sense of security. Authright Monitoring Services analyze the ongoing health of your identity applications and notify you of impending problems in a proactive manner (rather than reactive as most healthcheck applications perform).
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Upgrades
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    Authright support engineers will proactively monitor new releases of your identity management applications. They will review and discuss any new features you might want to consider, advise as to whether the release is compatible with your existing environment, and help you coordinate an upgrade (if appropriate).
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
