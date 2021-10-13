import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './services.css';
import { Row, Col } from 'antd';
import IAM from '../../../img/IAM.svg';
import SDE from '../../../img/SDE.svg';

export default class services extends Component {
    render() {
        return (
            <div className='services-bg' style={{minWidth: 1200}}>
                <div className='service-IAM-bg'>
                    <div className='service-digital-title'></div>
                <Row gutter={{ xs: 10, sm: 10, md: 10, lg: 10 }} >
                    <Col className="gutter-row" span={12}>
                        <div className='' style={{ opacity: '0.9', minWidth: 500}}>
                            <NavLink to="/services_iam">
                                <div className='company-title' style={{minWidth: 500}}>
                                    <div className='service-content2'>AuthRight Technology offers a full range of professional</div>
                                    <div className='service-content2'>services focused solely on identity management solutions.</div> 
                                    <div className='service-content2'>Our services has been tested across multiple industries.</div>
                                    <img className='home-service-img' style={{marginTop: 18 }} src={IAM} width={135} alt = "" />                               </div>
                            </NavLink>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div className='' style={{ opacity: '0.9', minWidth: 500}}>
                            <NavLink to="/services_iam">
                                <div className='company-title' style={{minWidth: 500}}>
                                    
                                    <div className='service-content2'>AuthRight Technology has a reliable techinal team, and</div>
                                    <div className='service-content2'>some of staffs own more than eight professional certifications.</div> 
                                    <div className='service-content2'>So far, AuthRight has been widely acclaimed by customers.</div>
                                    <img className='home-service-img' style={{marginTop: 18 }} src={SDE} width={135} alt=""/>                             </div>
                            </NavLink>
                        </div>
                    </Col>
                    {/* <Col className="gutter-row" span={12}>
                        <div className='service-Digital-bg' style={{padding: '100px 0', opacity: '0.9', height: 503, minWidth: 500}}>
                            <NavLink to="/services_digital">
                                <div className='company-title' style={{minWidth: 500}}>
                                    <div className='service-digital-title'>Digital Services</div>
                                    <div className='service-content2'>AuthRight can offer our clients technology solutions that</div>
                                    <div className='service-content2'>add real value to their business. We understand that our</div>
                                    <div className='service-content2'>success is measured by success of our clients.</div>
                                    <img className='home-service-img' style={{marginTop: 18 }} src={SDE} width={135} />  
                                </div>
                            </NavLink>
                        </div>
                    </Col> */}
                </Row>
                </div>
            </div>
        )
    }
}
