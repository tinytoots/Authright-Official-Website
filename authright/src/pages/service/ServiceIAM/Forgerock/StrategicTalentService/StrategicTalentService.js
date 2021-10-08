import React, { Component } from 'react'
import './StrategicTalentService.css'

import { Row, Col } from 'antd';
import ForgerockImg from '../../../../../img/forgerock.svg'
import ForgerockCert1 from '../../../../../img/forgerock-cert1.png'
import ForgerockCert2 from '../../../../../img/forgerock-cert2.png'
import ForgerockCert3 from '../../../../../img/forgerock-cert3.png'
import ForgerockCert4 from '../../../../../img/forgerock-cert4.png'
import ForgerockCert5 from '../../../../../img/forgerock-cert5.png'

export default class StrategicTalentService extends Component {
    render() {
        return (
            <div className='solution-IAM-bg' style={{backgroundColor: 'white'}}>
                <div className='inner'>
                    <img src={ForgerockImg} width={220} alt = 'logo' className='solution-forgerock-logo'/>
                    <div className='solution-iam-title'>
                        Authright
                    </div>
                    <div className='solution-forgerock-title'>
                        Strategic Talent Services
                    </div>
                    <div className='managedService-intro2'>
                    Finding the perfect person is always hard and time-consuming, especially for security roles. How would you know that he/she is reliable and has professional skill to handle the job, since you are not an expert in the security field? Forgerock has the professional team to search for the right one or do the technical screening for you!
                        <br/>
                    </div>
                    
                    <div className='managedService-gray-lane2' />

                    <div className="forgerock-conent-bg">
                        <div className='solution-topics-title'>
                            We provide the following service:
                        </div>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Security Staffing Services
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    Permanent placement, contract, fractional leadership, and contract to hire options for any level of security role from entry-level to executive.
                                    <br/><br/>
                                    If you’re looking for help tracking down your next hire, we’ll find exactly who you need, when you need them.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Turnkey Teams
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    Do you have IAM projects that require a consistent headcount and/or budgeted hours?
                                    <br/><br/>
                                    We can build out a skilled team to tackle the challenges you are facing and ensure that it is staffed to your specifications at all times.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Candidate Screening
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    Do you know someone you think could be a fit for your organization, but lack the processes or technical skills internally to properly vet the candidate?
                                    <br/><br/>
                                    Send them to us and we’ll make sure their talents live up to real-world expectations.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Candidate Support
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    The candidates we provide are part of a solid network of IAM professionals consisting of Authright Analysts, Architects, Implementers, and Project Managers.
                                    <br/><br/>
                                    Our experts are available to help answer questions, tackle challenges, and provide support to those placed by our Talent Services.
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
