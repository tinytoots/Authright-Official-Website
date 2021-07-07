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
                <img src={ForgerockImg} width={220} alt = 'logo' className='forgerock-logo'/>
                <div className='forgerock-content1'>
                    ForgeRock provides digital identity management through its primary product,
                </div>
                <div className='forgerock-content2'>
                    the ForgeRock Identity Platform. The ForgeRock Identity Platform includes Access
                </div>
                <div className='forgerock-content2'>
                    Management, Identity Management, Directory Services, and Identity Gateway.
                </div>
                <Row gutter={[10, 10]}>
                    <Col className="gutter-row1" span={12}>
                        <div style={style}>
                            <div className='company-title'>
                                <img className='service-img' src={Consulting} width={85} />
                                <div className='service-iam-title'>ForgeRock Consulting</div>
                                <div className='forgerock-content3'>Our ForgeRock consultants integrate your enterprise</div>
                                <div className='forgerock-content3'>applications with simple, secured, centralized</div>
                                <div className='forgerock-content3'>& immediate identity access management.</div>
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
                            <div className='company-title'>
                                <img className='service-img' src={Design} width={80} />
                                <div className='service-iam-title'>ForgeRock Design</div>
                                <div className='service-iam-title'>Development</div>
                                <div className='forgerock-content3'>Our ForgeRock developers assist you to develop IAM solution</div>
                                <div className='forgerock-content3'>for your business to securely manage identity</div>
                                <div className='forgerock-content3'>based access to applications anytime on</div>
                                <div className='forgerock-content3'>any medium through any device.</div>
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
                            <div className='company-title'>
                                <img className='service-img' src={Integration} width={135} />
                                <div className='service-iam-title'>ForgeRock Integration</div>
                                <div className='forgerock-content3'>Our Open Source integration experts can connect ForgeRock</div>
                                <div className='forgerock-content3'>based Open IAM solution to your corporate website,</div>
                                <div className='forgerock-content3'>intranet/extranet portals, e-Commerce and legacy solution.</div>
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
                            <div className='company-title'>
                                <img className='service-img' src={Support} width={78} />
                                <div className='service-iam-title'>ForgeRock Support</div>
                                <div className='service-iam-title'>& Maintenance</div>
                                <div className='forgerock-content3'>Our ForgeRock team offers onsite and offsite support to ensure</div>
                                <div className='forgerock-content3'>your ForgeRock applications are up-to-date and</div>
                                <div className='forgerock-content3'>running with nearly zero downtime.</div>
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
