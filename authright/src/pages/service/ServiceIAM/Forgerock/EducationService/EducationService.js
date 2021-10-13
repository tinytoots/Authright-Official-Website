import React, { Component } from 'react'
import './EducationService.css'

import { Row, Col } from 'antd';

import ForgerockImg from '../../../../../img/forgerock.svg'
import ForgerockCert1 from '../../../../../img/forgerock-cert1.png'
import ForgerockCert2 from '../../../../../img/forgerock-cert2.png'
import ForgerockCert3 from '../../../../../img/forgerock-cert3.png'
import ForgerockCert4 from '../../../../../img/forgerock-cert4.png'
import ForgerockCert5 from '../../../../../img/forgerock-cert5.png'

export default class EducationService extends Component {
    render() {
        return (
            <div className='solution-IAM-bg' style={{backgroundColor: 'white'}}>
                <div className='inner'>
                    <img src={ForgerockImg} width={220} alt = 'logo' className='solution-forgerock-logo'/>
                    <div className='solution-iam-title'>
                        Authright
                    </div>
                    <div className='solution-forgerock-title'>
                        Education Services
                    </div>
                    <div className='managedService-intro2'>
                        Authright consultants have been writing and delivering identity focused training for over ten years. Our clients include ForgeRock, Oracle, and Sun Microsystems. If you have taken an identity management class from any of these vendors; chances are that it was written or delivered by an Authright consultant.
                    </div>
                    <div className='managedService-gray-lane2' />

                    <div className="forgerock-conent-bg">
                        <div className='solution-topics-title'>
                            Managed Service Offerings:
                        </div>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    ForgeRock Training
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    Authright is the premier delivery partner of ForgeRock training throughout North America and across the globe. Classes may be delivered at your site or you may join one of our many scheduled online training sessions. If a particular class does not meet your needs, Authright will work with ForgeRock to customize the materials and provide a truly unique training experience.
                                </div>
                            </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className='solution-forgerock-intro1'>
                                    A Blended Learning Experience
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className='solution-forgerock-intro'>
                                    One reason for our success is our ability to bring real world experience into the classroom. Our classes are delivered by instructors who have first-hand experience architecting and implementing identity management products from several different vendors. These same instructors are able to articulate technical challenges in “human terms” and provide a vision on how to implement these solutions in your own environment.
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
