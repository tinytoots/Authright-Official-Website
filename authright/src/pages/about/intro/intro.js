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
                

                <div className='about-intro-block'>
                    <div className="inner">
                        <div className='career-values-title'>
                            Our Values
                        </div>
                        <div className='career-company-intro'>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={6}>
                                    <img className='values-img' src={Heart} width={50} />
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <img className='values-img' src={Important} width={50} />
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <img className='values-img' src={Growth} width={50} />
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <img className='values-img' src={Bulb} width={50} />
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
