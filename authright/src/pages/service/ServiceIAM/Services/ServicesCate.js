import React, { Component } from 'react'

import './ServicesCate.css'
import { Row, Col, Divider } from 'antd';
import { NavLink } from 'react-router-dom'
import Consulting from '../../../../img/consulting.svg';
import Design from '../../../../img/design.svg';
import Integration from '../../../../img/Integration.svg'
import Support from '../../../../img/support.svg'

const style = { background: '#141414', padding: '100px 0' };

export default class Forgerock extends Component {
    render() {
        return (
            <div className='IAM-bg'>
                
                <div className="IAM-grid-bg">
                    <Row gutter={[10, 10]}>
                        <Col className="gutter-row" span={12}>
                            <div style={style}>
                                <div className='forgerock-title'>
                                    <img className='service-img' src={Consulting} width={85} alt=""/>
                                    <div className='service-iam-title'>Professional Services</div>
                                    <div className='servicesCate-content4'>Authright has extensive IAM experience in a wide range of industries, including healthcare, finance, manufacturing and retail. Our services are recognized by our clients, but our consultants are never satisfied with that. We always seek to put our clients first and deliver results that exceed their expectations.</div>
                                    <NavLink to="/services/iam/professional-services">
                                        <div>
                                            <div className='company-title' style={{fontSize: 18, marginTop: 30}}>
                                                Learn More {">"}
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={12}>
                            <div style={style}>
                                <div className='forgerock-title'>
                                    <img className='service-img' src={Design} width={80} alt=""/>
                                    <div className='service-iam-title3'>Managed Services</div>
                                    <div className='servicesCate-content4' style={{marginTop: 14}}>With the development of the Internet and the growth of users and employees, IAM is gradually playing an increasingly important role in the development of enterprises. However, some companies lack the skills to develop and maintain an IAM or the cost to build an IAM team is too expensive, which is a huge concern for their business. We specialize in providing and maintaining customized IAM solutions that allow enterprises to focus on their core business, helping them save costs and ensure the security and good operation of their identity infrastructure..</div>
                                    <NavLink to="/services/iam/managed-services">
                                        <div>
                                            <div className='company-title' style={{fontSize: 18, marginTop: 30}}>
                                                Learn More {">"}
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={12}>
                            <div style={style}>
                                <div className='forgerock-title'>
                                    <img className='service-forgerock-integration-img' src={Integration} width={135} alt=""/>
                                    <div className='service-iam-title'>Education Services</div>
                                    <div className='servicesCate-content4'>Authright has rich experience in IAM training, and our consultants and internal resources can effectively help customers improve their IAM skills. The IAM certificate rate of our employees is over 90%(including Forgerock and PingIdentity)</div>
                                    <NavLink to="/services/iam/education-services">
                                        <div>
                                            <div className='company-title' style={{fontSize: 18, marginTop: 30}}>
                                                Learn More {">"}
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={12}>
                            <div style={style}>
                                <div className='forgerock-title'>
                                    <img className='service-forgerock-support-img' src={Support} width={78} alt=""/>
                                    <div className='service-iam-title3'>Strategic Talent</div>
                                    <div className='service-iam-title2'>Services</div>
                                    <div className='forgerock-content4'>Our ForgeRock team offers onsite and offsite support to ensure</div>
                                    <div className='forgerock-content4'>your ForgeRock applications are up-to-date and</div>
                                    <div className='forgerock-content4'>running with nearly zero downtime.</div>
                                    <NavLink to="/services/iam/strategic-talent-services">
                                        <div>
                                            <div className='company-title' style={{fontSize: 18, marginTop: 30}}>
                                                Learn More {">"}
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            
        )
    }
}
