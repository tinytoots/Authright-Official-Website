import React, { Component } from 'react'
import './Footer.css'
import { Row, Col, Divider } from 'antd';
import Footer_divi from '../../img/Footer-divi.svg';

const style = { background: '#000', padding: '10px 0' };

export default class Footer extends Component {
    render() {
        return (
            <div className='footer-bg'>
                <div className="inner-footer">
                <div className='gray-lane-footer' />
                <Row gutter={[10, 10]}>
                    <Col className="gutter-row" span={12}>
                        <div style={style}>
                            <div>
                                <img className='footer-divi-img' src={Footer_divi} height='20' />
                                <div className='footer-title'>
                                    GET TO KNOW US
                                </div>
                            </div>
                            <div className='footer-content'>
                                About Us
                            </div>
                            <div className='footer-content'>
                                Contact Us
                            </div>
                            <div className='footer-content'>
                                Careers
                            </div>
                            <div className='footer-content'>
                                Privacy Policy
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div style={style}>
                            <img className='footer-divi-img' src={Footer_divi} height='20' />
                            <div className='footer-title'>
                                CONTACT INFO
                            </div>
                            <div className='footer-content'>
                                Address:
                            </div>
                            <div className='footer-content'>
                                Phone:
                            </div>
                            <div className='footer-content'>
                                Fax:
                            </div>
                            <div className='footer-content'>
                                Email:
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            </div>
        )
    }
}
