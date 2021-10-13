import React, { Component } from 'react'
import './ForgerockSupport.css'
import { Row, Col } from 'antd';

import ForgerockImg from '../../../../../../img/forgerock.svg'
import ForgerockCert1 from '../../../../../../img/forgerock-cert1.png'
import ForgerockCert2 from '../../../../../../img/forgerock-cert2.png'
import ForgerockCert3 from '../../../../../../img/forgerock-cert3.png'
import ForgerockCert4 from '../../../../../../img/forgerock-cert4.png'
import ForgerockCert5 from '../../../../../../img/forgerock-cert5.png'

export default class ForgerockSupport extends Component {
    render() {
        return (
            <div className='solution-IAM-bg' style={{backgroundColor: 'white'}}>
                <div className='inner'>
                    <img src={ForgerockImg} width={220} alt = 'logo' className='solution-forgerock-logo'/>
                    <div className='solution-iam-title'>
                        Authright
                    </div>
                    <div className='solution-forgerock-title'>
                        ForgeRock Support and Maintenance
                    </div>
                    <div className='managedService-intro2'>
                        Our ForgeRock team offers onsite and offsite support to ensure your ForgeRock applications are up-to-date and running with nearly zero downtime.
                    </div>
                    <div className='managedService-gray-lane2' />
                    

                    <div className="forgerock-conent-bg">
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Virtual assistance
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    Including troubleshooting of variety of issues and bug fixing.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Patch management practices
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    To facilitate our clients to keep the most updated version by our frequent patch releases.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Timely Deployments and proactive monitorin
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                  
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    Reduced operating costs and increased ROI
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
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
