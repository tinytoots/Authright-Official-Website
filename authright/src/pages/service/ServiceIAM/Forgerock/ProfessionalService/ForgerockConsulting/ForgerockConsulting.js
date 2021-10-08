import React, { Component } from 'react'
import './ForgerockConsulting.css'
import { Row, Col } from 'antd';

import ForgerockImg from '../../../../../../img/forgerock.svg'
import ForgerockCert1 from '../../../../../../img/forgerock-cert1.png'
import ForgerockCert2 from '../../../../../../img/forgerock-cert2.png'
import ForgerockCert3 from '../../../../../../img/forgerock-cert3.png'
import ForgerockCert4 from '../../../../../../img/forgerock-cert4.png'
import ForgerockCert5 from '../../../../../../img/forgerock-cert5.png'

export default class ForgerockConsulting extends Component {
    render() {
        return (
            <div className='solution-IAM-bg' style={{backgroundColor: 'white'}}>
                <div className='inner'>
                    <img src={ForgerockImg} width={220} alt = 'logo' className='solution-forgerock-logo'/>
                    <div className='solution-iam-title'>
                        Authright
                    </div>
                    <div className='solution-forgerock-title'>
                        ForgeRock Consulting
                    </div>
                    <div className='managedService-intro2'>
                        Our ForgeRock consultants integrate your enterprise applications with simple, secured, centralized & immediate identity access management.
                    </div>
                    <div className='managedService-gray-lane2' />
                    

                    <div className="forgerock-conent-bg">
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Architecture design service
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    By evaluating customer requirements and use cases in order to determine what is the best approach to deploy the ForgeRock Identity Platform. Proposes a feasible high-level architecture plan, covering functional and non-functional requirements, to deploy.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Product configuration service
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    According to the architectural specifications to define a prototype of the ForgeRock platform. Documents a customer-specific configuration proposal scoped to the goals of each customer’s project.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Professional product implementation service
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    Provides a POC or system-building service by our product specialist. Thus, the customer can benefit from ForgeRock product expertise.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Adaptability evaluation
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    Examines the build or production system in use and evaluate if the employed configuration works well with ForgeRock and achieves expectations and best practices. Reports a document about the adaptability of the environment.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    On-site support and training
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    Provides on-site support for the customer’ production environment.  This service focuses on educating and training the customer IT department with a guideline of prevention to avoid future issues regarding production environment.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    On-site troubleshooting
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    Offers prompt on-site technical supports to diagnose and analyze issues that being faced. Consequently, brings out solutions for addressing the specific issue.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Performance assessment
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    The performance of the ForgeRock Platform execution will be assessed by our specialist. Products a detailed analysis report regarding deviations between actual performance and expectations, and actionable recommendations for improvement.
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
