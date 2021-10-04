import React, { Component } from 'react'

import './ServicesCate.css'
import { Row, Col, Divider } from 'antd';
import { NavLink } from 'react-router-dom'
import Consulting from '../../../../img/consulting.svg';
import Design from '../../../../img/design.svg';
import Integration from '../../../../img/Integration.svg'
import Support from '../../../../img/support.svg'

const style = { background: 'rgb(76 76 76)', padding: '100px 0',  borderRadius: 10};

export default class Forgerock extends Component {
    render() {
        return (
            <div className='IAM-bg'>
                <div className="service-ttile">
                    Our Services
                </div>
                <div className="IAM-grid-bg">
                    <Row gutter={[10, 10]} justify="center">
                        <Col className="gutter-row" span={5}>
                            <div style={style}>
                                <div className='forgerock-title'>
                                    <img className='service-card-support-img' src={Support} width={85} alt=""/>
                                    <div className='service-card-title'>Implementation {"&"} Integration</div>
                                    <div className='servicesCate-content4'>Authright team has seasoned experts who will review your expectations and find the best deployment plan based on your particular business requirements. We ensure that our custom solutions are able to integrate with other IAM technologies, HR systems, industry-specific technologies, and custom applications.</div>
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
                        <Col className="gutter-row" span={5}>
                            <div style={style}>
                                <div className='forgerock-title'>
                                    <img className='service-img' src={Design} width={80} alt=""/>
                                    <div className='service-card-title'>Managed Services</div>
                                    <div className='servicesCate-content4' style={{marginTop: 14}}>Authright provides managed services such as hosting, management monitoring, and project-based service to make sure your identity management runs seamlessly. Let our professionals take care of your IAM, and you can focus resources on your core business. </div>
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
                        <Col className="gutter-row" span={5}>
                            <div style={style}>
                                <div className='forgerock-title'>
                                    <img className='service-integration-card-img' src={Integration} width={135} alt=""/>
                                    <div className='service-card-title'>Advisory {"&"} Education</div>
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
                        <Col className="gutter-row" span={5}>
                            <div style={style}>
                                <div className='forgerock-title'>
                                    
                                    <img className='service-img' src={Consulting} width={85} alt=""/>
                                    <div className='service-card-title'>Strategic Talent Services</div>
                                    <div className='servicesCate-content4'>Need help with talent investments？Authright can find the appropriate person or train your team in the IAM area. With our talent strategy road map, you can update your business strategy, identify gaps within your talent management systems and define actionable talent initiatives.</div>
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
