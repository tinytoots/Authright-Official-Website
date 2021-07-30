import React, { Component } from 'react';
import './services.css';
import { Row, Col, Divider } from 'antd';
import IAM from '../../../img/IAM.svg';
import SDE from '../../../img/SDE.svg';

export default class services extends Component {
    render() {
        return (
            <div className='services-bg'>
                <Row gutter={{ xs: 10, sm: 10, md: 10, lg: 10 }}>
                    <Col className="gutter-row" span={12}>
                        <div className='service-IAM-bg' style={{padding: '100px 0', opacity: '0.9', height: 503}}>
                            <div className='company-title'>
                                <div className='service-digital-title'>IAM</div>
                                <div className='service-content2'>AuthRight Technology offers a full range of professional services focused solely on identity management solutions. Our services has been tested across multiple industries.</div>
                                <img className='service-img' src={IAM} width={135} />
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div className='service-Digital-bg' style={{padding: '100px 0', opacity: '0.9', height: 503}}>
                            <div className='company-title'>
                                <div className='service-digital-title'>Digital Services</div>
                                <div className='service-content2'>AuthRight can offer our clients technology solutions that add real value to their business. We understand that our success is measured by success of our clients.</div>
                                <img className='service-img' src={SDE} width={135} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
