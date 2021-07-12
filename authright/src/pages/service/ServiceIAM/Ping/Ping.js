import React, { Component } from 'react'
import PingImg from '../../../../img/ping-identity.svg'
import './Ping.css'
import { Row, Col, Divider } from 'antd';
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
                <img src={PingImg} width={220} alt = 'logo' className='ping-logo'/>
                <div className='forgerock-content1'>
                    The company's software provides federated identity management and self-hosted
                </div>
                <div className='forgerock-content2'>
                    identity access management to web identities via attribute based access controls,
                </div>
                <div className='forgerock-content2'>
                    similar to identity management system tools developed by Microsoft and Okta. This
                </div>
                <div className='forgerock-content2'>
                    Single sign-on (SSO) gives users a single set of credentials to access applications
                </div>
                <div className='forgerock-content3'>
                    applications, apps on mobile devices, VPN, etc) that have company data. 
                </div>
                
                <Row gutter={[10, 10]}>
                    <Col className="gutter-row" span={12}>
                        <div style={style}>
                            <div className='forgerock-title'>
                                <img className='service-img' src={Consulting} width={85} />
                                <div className='service-iam-title'>Ping Identity Consulting</div>
                                <div className='forgerock-content4'>Our Ping Identity consultants integrate your enterprise</div>
                                <div className='forgerock-content4'>applications with simple, secured, centralized</div>
                                <div className='forgerock-content4'>& immediate identity access management.</div>
                                <div>
                                    <a
                                        className='unifiedcontrol-card-default'
                                        href='https://docs.approw.com/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        
                                        <div className='serivce-iam-link'>
                                            Learn more >
                                            <i className='approw-arrow-down-line arrow'></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div style={style}>
                            <div className='forgerock-title'>
                                <img className='service-img' src={Design} width={80} />
                                <div className='service-iam-title'>Ping Identity Design</div>
                                <div className='service-iam-title'>Development</div>
                                <div className='forgerock-content4'>Our Ping Identity developers assist you to develop IAM solution</div>
                                <div className='forgerock-content4'>for your business to securely manage identity</div>
                                <div className='forgerock-content4'>based access to applications anytime on</div>
                                <div className='forgerock-content4'>any medium through any device.</div>
                                <div>
                                    <a
                                        className='unifiedcontrol-card-default'
                                        href='https://docs.approw.com/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        
                                        <div className='serivce-iam-link'>
                                            Learn more >
                                            <i className='approw-arrow-down-line arrow'></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div style={style}>
                            <div className='forgerock-title'>
                                <img className='service-img' src={Integration} width={135} />
                                <div className='service-iam-title'>Ping Identity Integration</div>
                                <div className='forgerock-content4'>Our Open Source integration experts can connect Ping Identity</div>
                                <div className='forgerock-content4'>based Open IAM solution to your corporate website,</div>
                                <div className='forgerock-content4'>intranet/extranet portals, e-Commerce and legacy solution.</div>
                                <div>
                                    <a
                                        className='unifiedcontrol-card-default'
                                        href='https://docs.approw.com/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        
                                        <div className='serivce-iam-link'>
                                            Learn more >
                                            <i className='approw-arrow-down-line arrow'></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div style={style}>
                            <div className='forgerock-title'>
                                <img className='service-img' src={Support} width={78} />
                                <div className='service-iam-title'>Ping Identity Support</div>
                                <div className='service-iam-title'>& Maintenance</div>
                                <div className='forgerock-content4'>Our Ping Identity team offers onsite and offsite support to ensure</div>
                                <div className='forgerock-content4'>your Ping Identity applications are up-to-date and</div>
                                <div className='forgerock-content4'>running with nearly zero downtime.</div>
                                <div>
                                    <a
                                        className='unifiedcontrol-card-default'
                                        href='https://docs.approw.com/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        
                                        <div className='serivce-iam-link'>
                                            Learn more >
                                            <i className='approw-arrow-down-line arrow'></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            
        )
    }
}