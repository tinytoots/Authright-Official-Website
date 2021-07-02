import React, { Component } from 'react'
import './solutions.css'
import { Row, Col, Divider } from 'antd';

const style = { background: '#141414', 
                padding: '28px 0',
            };

export default class solutions extends Component {
    render() {
        return (
            <div className='solutions-bg'>
                <div className='grid-posi'>
                <Row gutter={[16, 24]}>
                    <Col className="gutter-row" span={8}>
                        <div className='solution-content2' style={style}>Federation & Single Sign-On</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className='solution-content2' style={style}>User Provisioning</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className='solution-content2' style={style}>Enterprise Directory</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className='solution-content' style={style}>Workshops</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className='solution-content' style={style}>Upgrades & Migrations</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className='solution-content' style={style}>Cloud Identity</div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div className='solution-content' style={style}>Website Design and Development</div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div className='solution-content' style={style}>App Development and Automation</div>
                    </Col>
                </Row>
                </div>
            </div>
        )
    }
}
