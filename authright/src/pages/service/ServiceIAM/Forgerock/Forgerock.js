import React, { Component } from 'react'
import ForgerockImg from '../../../../img/forgerock.svg'
import './Forgerock.css'
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
                <div className='IAM-Intro-bg'>
                    <img src={ForgerockImg} width={220} alt = 'logo' className='forgerock-logo'/>
                    <div className='forgerock-content1'>
                        ForgeRock provides digital identity management through its primary product, the 
                    </div>
                    <div className='forgerock-content2'>
                        ForgeRock Identity Platform. The ForgeRock Identity Platform includes Access
                    </div>
                    <div className='forgerock-content3'>
                        Management, Identity Management, Directory Services, and Identity Gateway.
                    </div>
                </div>
                <div className="IAM-grid-bg">
                    <Row gutter={[10, 10]}>
                        <Col className="gutter-row" span={12}>
                            <div style={style}>
                                <div className='forgerock-title'>
                                    <img className='service-img' src={Consulting} width={85} />
                                    <div className='service-iam-title'>ForgeRock Consulting</div>
                                    <div className='forgerock-content4'>Our ForgeRock consultants integrate your enterprise</div>
                                    <div className='forgerock-content4'>applications with simple, secured, centralized</div>
                                    <div className='forgerock-content4'>& immediate identity access management.</div>
                                    <NavLink to="/services/iam/professional-services/forgerock-consulting">
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
                                    <img className='service-img' src={Design} width={80} />
                                    <div className='service-iam-title3'>ForgeRock Design</div>
                                    <div className='service-iam-title2'>Development</div>
                                    <div className='forgerock-content4'>Our ForgeRock developers assist you to develop IAM solution</div>
                                    <div className='forgerock-content4'>for your business to securely manage identity</div>
                                    <div className='forgerock-content4'>based access to applications anytime on</div>
                                    <div className='forgerock-content4'>any medium through any device.</div>
                                    <NavLink to="/services/iam/professional-services/forgerock-design-development">
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
                                    <img className='service-forgerock-integration-img' src={Integration} width={135} />
                                    <div className='service-iam-title'>ForgeRock Integration</div>
                                    <div className='forgerock-content4'>Our Open Source integration experts can connect ForgeRock</div>
                                    <div className='forgerock-content4'>based Open IAM solution to your corporate website,</div>
                                    <div className='forgerock-content4'>intranet/extranet portals, e-Commerce and legacy solution.</div>
                                    <NavLink to="/services/iam/professional-services/forgerock-integration">
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
                                    <img className='service-forgerock-support-img' src={Support} width={78} />
                                    <div className='service-iam-title3'>ForgeRock Support</div>
                                    <div className='service-iam-title2'>& Maintenance</div>
                                    <div className='forgerock-content4'>Our ForgeRock team offers onsite and offsite support to ensure</div>
                                    <div className='forgerock-content4'>your ForgeRock applications are up-to-date and</div>
                                    <div className='forgerock-content4'>running with nearly zero downtime.</div>
                                    <NavLink to="/services/iam/professional-services/forgerock-support-and-maintenance">
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
