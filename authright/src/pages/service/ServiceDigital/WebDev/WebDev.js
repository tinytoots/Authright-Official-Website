import React, { Component } from 'react'
import MacImg from '../../../../img/digital-mac.png'
import { Row, Col} from 'antd';
import Consulting from '../../../../img/consulting.svg';
import Design from '../../../../img/design.svg';
import Integration from '../../../../img/Integration.svg'
import Support from '../../../../img/support.svg'
import './WebDev.css'

const style = { background: '#141414', padding: '100px 0' };

export default class WebDev extends Component {
    render() {
        return (
            <div className='IAM-bg'>
                <div className='IAM-Intro-bg'>
                    <img src={MacImg} width={550} alt = 'logo' className='webDev-logo'/>
                    <div className='webDev-design-dev-title'>
                        Website Design and Development
                    </div>
                    <div className='webDev-content1'>
                        Want to add a website for your business but don’t know where to start? From choosing a domain name to figuring out what infrastructure works best – We’ll guide you along the way and do the heavy lifting.
                    </div>
                    {/* <div className='webDev-content2'>
                        a domain name to figuring out what infrastructure works best – We’ll guide you along the
                    </div>
                    <div className='webDev-content3'>
                        Management, Identity Management, Directory Services, and Identity Gateway.
                    </div> */}
                </div>
                <div className="IAM-grid-bg">
                    <Row gutter={[10, 10]}>
                        <Col className="gutter-row" span={12}>
                            <div style={style}>
                                <div className='webDev-title'>
                                    <img className='service-img' src={Consulting} width={85} />
                                    <div className='service-iam-title'>webDev Consulting</div>
                                    <div className='webDev-content4'>Our webDev consultants integrate your enterprise</div>
                                    <div className='webDev-content4'>applications with simple, secured, centralized</div>
                                    <div className='webDev-content4'>& immediate identity access management.</div>
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
                                <div className='webDev-title'>
                                    <img className='service-img' src={Design} width={80} />
                                    <div className='service-iam-title'>webDev Design</div>
                                    <div className='service-iam-title2'>Development</div>
                                    <div className='webDev-content4'>Our webDev developers assist you to develop IAM solution</div>
                                    <div className='webDev-content4'>for your business to securely manage identity</div>
                                    <div className='webDev-content4'>based access to applications anytime on</div>
                                    <div className='webDev-content4'>any medium through any device.</div>
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
                                <div className='webDev-title'>
                                    <img className='service-img' src={Integration} width={135} />
                                    <div className='service-iam-title'>webDev Integration</div>
                                    <div className='webDev-content4'>Our Open Source integration experts can connect webDev</div>
                                    <div className='webDev-content4'>based Open IAM solution to your corporate website,</div>
                                    <div className='webDev-content4'>intranet/extranet portals, e-Commerce and legacy solution.</div>
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
                                <div className='webDev-title'>
                                    <img className='service-img' src={Support} width={78} />
                                    <div className='service-iam-title'>webDev Support</div>
                                    <div className='service-iam-title2'>& Maintenance</div>
                                    <div className='webDev-content4'>Our webDev team offers onsite and offsite support to ensure</div>
                                    <div className='webDev-content4'>your webDev applications are up-to-date and</div>
                                    <div className='webDev-content4'>running with nearly zero downtime.</div>
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