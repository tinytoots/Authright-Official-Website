import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';
import './card.css'

export default class card extends Component {
    render() {
        return (
            <div className='card-bg'>
                {/* <h1>This is card</h1> */}
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                    <div className="card">
                        <div className="card-content">
                            <h2 className="card-title">Welcome Authright!</h2>
                            <p className="card-body">This is a great compnay that everyone want be a employee</p>
                            <a href="/home" className="button">Learn More</a>
                        </div>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div className="card">
                        <div className="card-content">
                            <h2 className="card-title">Welcome Authright!</h2>
                            <p className="card-body">This is a great compnay that everyone want be a employee</p>
                            <a href="/home" className="button">Learn More</a>
                        </div>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div className="card">
                        <div className="card-content">
                            <h2 className="card-title">Welcome Authright!</h2>
                            <p className="card-body">This is a great compnay that everyone want be a employee</p>
                            <a href="/home" className="button">Learn More</a>
                        </div>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div className="card">
                        <div className="card-content">
                            <h2 className="card-title">Welcome Authright!</h2>
                            <p className="card-body">This is a great compnay that everyone want be a employee</p>
                            <a href="/home" className="button">Learn More</a>
                        </div>
                    </div>
                    </Col>
                </Row>
                
            </div>
        )
    }
}
