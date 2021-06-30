import React, { Component } from 'react'
import './caseStudy.css'
import { Row, Col, Divider } from 'antd';

const style = { background: '#0092ff', padding: '100px 0' };

export default class caseStudy extends Component {
    render() {
        return (
            <div className='caseStudy-bg'>
                <Row gutter={{ xs: 10, sm: 10, md: 10, lg: 10 }}>
                    <Col className="gutter-row" span={12}>
                        <div style={style}>
                            <div className='company-title'>
                                HomeDepot
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div style={style}>
                            <div className='company-title'>
                                HSBC
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
