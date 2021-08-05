import React, { Component } from 'react'
import './trust.css'
import { Row, Col, Divider } from 'antd';

const style = { background: '#0092ff', padding: '8px 0' };

export default class trust extends Component {
    render() {
        return (
            <div className="trust-bg">
                <div className="trust-bg2">
                    <div className="turst-title">The IAM and Full Stack Development</div>
                    <div className="turst-title2">Partner You Can Trust</div>
                    <div className="trust-grid-bg">
                        <Row gutter={16}>
                            <Col className="gutter-row" span={8}>
                                <div className="trust-color-block">
                                    <div className="trust-black-block">
                                        <div className="trust-color-block-title">2018</div>
                                        <div className="trust-color-block-title2">Established</div>
                                        <div className="trust-color-block-title3">Partnership</div>
                                        <div className="trust-color-block-served">with</div>
                                        <div className="trust-color-block-served2">ForgeRock</div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <div className="trust-color-block">
                                    <div className="trust-black-block">
                                        <div className="trust-color-block-title">2021</div>
                                        <div className="trust-color-block-title2">Established</div>
                                        <div className="trust-color-block-title3">Partnership</div>
                                        <div className="trust-color-block-served">with</div>
                                        <div className="trust-color-block-served2">Ping Identity</div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <div className="trust-color-block">
                                    <div className="trust-black-block">
                                        <div className="trust-color-block-title">More than</div>
                                        <div className="trust-color-block-title4">1000000</div>
                                        <div className="trust-color-block-title3">users</div>
                                        <div className="trust-color-block-served">served by</div>
                                        <div className="trust-color-block-served2">Authright</div>
                                    </div>
                                </div>
                                {/* AuthRight and ForgeRock announced a Delivery and Strategic Partnership to provide top information security solutions globall */}
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}
