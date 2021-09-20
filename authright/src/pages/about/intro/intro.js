import React, { Component } from 'react'
import './intro.css'
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';
import Heart from '../../../img/heart.svg';
import Important from '../../../img/center.svg';
import Growth from '../../../img/arrow-growth.svg';
import Bulb from '../../../img/bulb-outline.svg';

const style = { background: '#fff', padding: '18px 18px' };

let data = [
    'E50003',
    '007AE5'
]


export default class intro extends Component {
    render() {
        return (
            <div className='about-intro-bg'>

                <div className='about-intro-block'>
                    <div className="inner">
                        {/* <img src={IAMImg} width={1200} alt = 'logo' /> */}
                        <div className='about-whoWeAre-title1'>
                            We are A top-level Professional Team
                            {/* <div className='gray-lane' /> */}
                        </div>
                        <div className='about-whoWeAre-title2'>
                            in IAM and Digital Services
                        </div>
                        <div className='career-company-intro'>
                            AuthRight Technology provide you with high quality IT consulting services, we have deep experience in cloud storage, identity management, systems integration, you can bring fast, efficient and safe solution.
                        </div>
                    </div>
                </div>
                
                <div className='about-intro-block2'>
                    <div className="inner">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={8}>
                            <div className="about-color-block">
                                <div className="about-black-block">
                                   <div className="about-color-block-title">More than</div>
                                   <div className="about-color-block-title2">1000000</div>
                                   <div className="about-color-block-title3">users</div>
                                   <div className="about-color-block-served">served by</div>
                                   <div className="about-color-block-served2">Authright</div>
                                </div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={16}>
                            <div className='about-company-title2'>
                                We are Committed to Saving Money and 
                            </div>
                            <div className='career-company-title2'>
                                Improving Efficiency for Our Customers
                            </div>
                            <div className='career-company-intro' style={{color: "white"}}>
                                Our experienced professional team will escort your business all the time and provide 24/7 technical support. The IAM certificate holding rate of our employees exceeds <span style={{fontFamily: "SFProDisplay-bold"}}>90%</span>
                            </div>
                        </Col>
                    </Row>
                    </div>
                </div>

                <div className='about-intro-block'>
                    <div className="inner">
                        <div className='career-values-title'>
                            Our Values
                        </div>
                        <div className='career-company-intro'>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={6}>
                                    <img className='service-img' src={Heart} width={50} />
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <img className='service-img' src={Important} width={50} />
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <img className='service-img' src={Growth} width={50} />
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <img className='service-img' src={Bulb} width={50} />
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={6}>
                                    <div style={style}>Client First</div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div style={style}>Employee Centered</div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div style={style}>Growth Oriented</div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div style={style}>Sharing Valued</div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                <div className='about-intro-block3'>
                    <div className='inner'>
                        <div className='about-leadership-title'>
                            Our Leadership
                        </div>
                        <div className='about-leadership-content'>
                            We are a team. A great journey begins here.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}