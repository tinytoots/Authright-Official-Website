import React, { Component } from 'react'
import PingImg from '../../../../img/ping-identity.svg'
import './Ping.css'
import { Row, Col } from 'antd';
import { NavLink } from 'react-router-dom'
import Consulting from '../../../../img/consulting.svg';
import Design from '../../../../img/design.svg';
import Integration from '../../../../img/Integration.svg'
import Support from '../../../../img/support.svg'

const style = { background: '#141414', padding: '100px 0' };

export default class Ping extends Component {
    render() {
        return (
            <div className='IAM-bg'>
                <div className="ping-intro-bg">
                    <img style={{marginTop: 35}} src={PingImg} width={220} alt = 'logo' className='ping-logo'/>
                    <div className='ping-content1'>
                        The company's software provides federated identity management and self-hosted
                    </div>
                    <div className='ping-content2'>
                        identity access management to web identities via attribute based access controls,
                    </div>
                    <div className='ping-content2'>
                        similar to identity management system tools developed by Microsoft and Okta. This
                    </div>
                    <div className='ping-content2'>
                        Single sign-on (SSO) gives users a single set of credentials to access applications
                    </div>
                    <div className='ping-content3'>
                        applications, apps on mobile devices, VPN, etc) that have company data. 
                    </div>
                </div>
                
                <div className="ping-grid-bg">
                    <Row gutter={[10, 10]}>
                        <Col className="gutter-row" span={12}>
                            <div style={style}>
                                <div className='ping-title'>
                                    <img className='service-img' src={Consulting} width={85} alt=""/>
                                    <div className='service-iam-title'>Ping Identity Consulting</div>
                                    <div className='ping-content4'>Our Ping Identity consultants integrate your enterprise</div>
                                    <div className='ping-content4'>applications with simple, secured, centralized</div>
                                    <div className='ping-content4'>& immediate identity access management.</div>
                                    <NavLink to="/services/iam/professional-services/pingidentity-consulting">
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
                                <div className='ping-title'>
                                    <img className='service-img' src={Design} width={80} alt=""/>
                                    <div className='service-iam-title3'>Ping Identity Design</div>
                                    <div className='service-iam-title2'>Development</div>
                                    <div className='ping-content4'>Our Ping Identity developers assist you to develop IAM solution</div>
                                    <div className='ping-content4'>for your business to securely manage identity</div>
                                    <div className='ping-content4'>based access to applications anytime on</div>
                                    <div className='ping-content4'>any medium through any device.</div>
                                    <NavLink to="/services/iam/professional-services/pingidentity-design-development">
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
                                <div className='ping-title'>
                                    <img className='service-forgerock-integration-img' src={Integration} width={135} alt=""/>
                                    <div className='service-iam-title'>Ping Identity Integration</div>
                                    <div className='ping-content4'>Our Open Source integration experts can connect Ping Identity based</div>
                                    <div className='ping-content4'>Open IAM solution to your corporate website, intranet/extranet</div>
                                    <div className='ping-content4'>portals, e-Commerce and legacy solution.</div>
                                    <NavLink to="/services/iam/professional-services/pingidentity-integration">
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
                                <div className='ping-title'>
                                    <img className='service-forgerock-support-img' src={Support} width={78} alt=""/>
                                    <div className='service-iam-title3'>Ping Identity Support</div>
                                    <div className='service-iam-title2'>& Maintenance</div>
                                    <div className='ping-content4'>Our Ping Identity team offers onsite and offsite support to ensure</div>
                                    <div className='ping-content4'>your Ping Identity applications are up-to-date and</div>
                                    <div className='ping-content4'>running with nearly zero downtime.</div>
                                    <NavLink to="/services/iam/professional-services/pingidentity-support-and-maintenance">
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
