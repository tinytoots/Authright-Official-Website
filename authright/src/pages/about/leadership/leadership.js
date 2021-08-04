import React, { Component } from 'react'
import ExpandCard from '../expandCard/expandCard'
import './leadership.css'
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';

const style = { background: '#0092ff', padding: '8px 0' };

export default class leadership extends Component {
    render() {
        return (
                <div className="leadership-bg">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={12} style={{paddingLeft: 370, paddingBottom: 100}}>
                            <ExpandCard />
                        </Col>
                        <Col className="gutter-row" span={12} style={{paddingLeft: 65, paddingBottom: 100}}>
                            <ExpandCard />
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6} style={{paddingLeft: 65, paddingBottom: 100}}>
                            <ExpandCard />
                        </Col>
                        <Col className="gutter-row" span={6} style={{paddingLeft: 65, paddingBottom: 100}}>
                            <ExpandCard />
                        </Col>
                        <Col className="gutter-row" span={6} style={{paddingLeft: 65, paddingBottom: 100}}>
                            <ExpandCard />
                        </Col>
                        <Col className="gutter-row" span={6} style={{paddingLeft: 65, paddingBottom: 100}}>
                            <ExpandCard />
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6} style={{paddingLeft: 65, paddingBottom: 100}}>
                            <ExpandCard />
                        </Col>
                        <Col className="gutter-row" span={6} style={{paddingLeft: 65, paddingBottom: 100}}>
                            <ExpandCard />
                        </Col>
                        <Col className="gutter-row" span={6} style={{paddingLeft: 65, paddingBottom: 100}}>
                            <ExpandCard />
                        </Col>
                        <Col className="gutter-row" span={6} style={{paddingLeft: 65, paddingBottom: 100}}>
                            <ExpandCard />
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={24} style={{paddingLeft: 518, paddingBottom: 100}}>
                            <ExpandCard />
                        </Col>
                    </Row>
                </div>
        )
    }
}
