import React, { Component } from 'react'
import AppImg from '../../../../img/digital-app.png'
import { Row, Col} from 'antd';
import Consulting from '../../../../img/consulting.svg';
import Design from '../../../../img/design.svg';
import Integration from '../../../../img/Integration.svg'
import Support from '../../../../img/support.svg'
import './AppDev.css'

const style = { background: '#141414', padding: '100px 0' };

export default class AppDev extends Component {
    render() {
        return (
            <div className='IAM-bg'>
                <div className='IAM-Intro-bg'>
                    <img src={AppImg} width={230} alt = 'logo' className='appDev-logo'/>
                    <div className='appDev-design-dev-title'>
                        Website Design and Development
                    </div>
                    <div className='appDev-content1'>
                        Want to add a website for your business but don’t know where to start? From choosing a domain name to figuring out what infrastructure works best – We’ll guide you along the way and do the heavy lifting.
                    </div>
                    {/* <div className='appDev-content2'>
                        a domain name to figuring out what infrastructure works best – We’ll guide you along the
                    </div>
                    <div className='appDev-content3'>
                        Management, Identity Management, Directory Services, and Identity Gateway.
                    </div> */}
                </div>
                <div className="IAM-grid-bg">
                    <Row gutter={[10, 10]}>
                        <Col className="gutter-row" span={12}>
                            <div style={style}>
                                <div className='appDev-title'>
                                    <img className='service-img' src={Consulting} width={85} />
                                    <div className='service-iam-title'>appDev Consulting</div>
                                    <div className='appDev-content4'>Our appDev consultants integrate your enterprise</div>
                                    <div className='appDev-content4'>applications with simple, secured, centralized</div>
                                    <div className='appDev-content4'>& immediate identity access management.</div>
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
                                <div className='appDev-title'>
                                    <img className='service-img' src={Design} width={80} />
                                    <div className='service-iam-title'>appDev Design</div>
                                    <div className='service-iam-title2'>Development</div>
                                    <div className='appDev-content4'>Our appDev developers assist you to develop IAM solution</div>
                                    <div className='appDev-content4'>for your business to securely manage identity</div>
                                    <div className='appDev-content4'>based access to applications anytime on</div>
                                    <div className='appDev-content4'>any medium through any device.</div>
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
                                <div className='appDev-title'>
                                    <img className='service-img' src={Integration} width={135} />
                                    <div className='service-iam-title'>appDev Integration</div>
                                    <div className='appDev-content4'>Our Open Source integration experts can connect appDev</div>
                                    <div className='appDev-content4'>based Open IAM solution to your corporate website,</div>
                                    <div className='appDev-content4'>intranet/extranet portals, e-Commerce and legacy solution.</div>
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
                                <div className='appDev-title'>
                                    <img className='service-img' src={Support} width={78} />
                                    <div className='service-iam-title'>appDev Support</div>
                                    <div className='service-iam-title2'>& Maintenance</div>
                                    <div className='appDev-content4'>Our appDev team offers onsite and offsite support to ensure</div>
                                    <div className='appDev-content4'>your appDev applications are up-to-date and</div>
                                    <div className='appDev-content4'>running with nearly zero downtime.</div>
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
            </div>
            
        )
    }
}