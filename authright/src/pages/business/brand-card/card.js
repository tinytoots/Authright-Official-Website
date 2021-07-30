import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';
import './card.css'
// import bostonImg from '../../../img/boston.jpg'
import hsbcImg from '../../../img/bank.png'
import homedepotImg from '../../../img/homeDepot.jpg'
import deloitteImg from '../../../img/deloitte.jpg'
import toyotaImg from '../../../img/toyota.jpg'
import equifaxImg from '../../../img/equifax.jpg'
import bcbsImg from '../../../img/medical.jpg'
import pearsonImg from '../../../img/education.jpg'
import mohawkImg from '../../../img/mohawk2.jpg'
import lowesImg from '../../../img/card-lowes.png'

// import hsbcImg from './img/hsbc.svg'

var cardHsbc = {
    // backgroundPosition: "20% 100%",
    backgroundImage: `url(${hsbcImg}`
}

var cardBcbs = {
    backgroundPosition: "40% 100%",
    backgroundImage: `url(${bcbsImg})`
}

var cardPearson = {
    backgroundPosition: "30% 100%",
    backgroundImage: `url(${pearsonImg})`
}

export default class card extends Component {
    
    render() {
        return (
            <div className='card-bg'>
                <div className="card-grid-case-study-title">Our Case Studies</div>
                <div className="card-grid-title">We are committed to providing reliable and efficient IAM</div>
                <div className="card-grid-title2">and Full Stack services in different industrial fields </div>
                {/* <h1>This is card</h1> */}
                <Row gutter={[25, 25]}>
                    <Col className="gutter-row" span={6}>
                    <div className="card" style={cardHsbc}>
                        <div className="card-content">
                            <h2 className="card-title">HSBC</h2>
                            <p className="card-body">This is a great compnay that everyone want be a employee</p>
                            <a href="/home" className="button">Learn More</a>
                        </div>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div className="card" style={{backgroundImage: `url(${homedepotImg})`}}>
                        <div className="card-content">
                            <h2 className="card-title">The Home Depot</h2>
                            <p className="card-body">This is a great compnay that everyone want be a employee</p>
                            <a href="/home" className="button">Learn More</a>
                        </div>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div className="card" style={{backgroundImage: `url(${mohawkImg})`}}>
                        <div className="card-content">
                            <h2 className="card-title">Mohawk Industries</h2>
                            <p className="card-body">This is a great compnay that everyone want be a employee</p>
                            <a href="/home" className="button">Learn More</a>
                        </div>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div className="card" style={{backgroundImage: `url(${toyotaImg})`}}>
                        <div className="card-content">
                            <h2 className="card-title">Toyota</h2>
                            <p className="card-body">This is a great compnay that everyone want be a employee</p>
                            <a href="/home" className="button">Learn More</a>
                        </div>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div className="card" style={cardBcbs}>
                        <div className="card-content">
                            <h2 className="card-title">Blue Cross Blue Shield</h2>
                            <p className="card-body">This is a great compnay that everyone want be a employee</p>
                            <a href="/home" className="button">Learn More</a>
                        </div>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div className="card" style={{backgroundImage: `url(${equifaxImg})`}}>
                        <div className="card-content">
                            <h2 className="card-title">Equifax</h2>
                            <p className="card-body">This is a great compnay that everyone want be a employee</p>
                            <a href="/home" className="button">Learn More</a>
                        </div>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div className="card" style={cardPearson}>
                        <div className="card-content">
                            <h2 className="card-title">Pearson</h2>
                            <p className="card-body">This is a great compnay that everyone want be a employee</p>
                            <a href="/home" className="button">Learn More</a>
                        </div>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div className="card" style={{backgroundImage: `url(${deloitteImg})`}}>
                        <div className="card-content">
                            <h2 className="card-title">Deloitte</h2>
                            <p className="card-body">This is a great compnay that everyone want be a employee</p>
                            <a href="/home" className="button">Learn More</a>
                        </div>
                    </div>
                    </Col>
                    {/* <Col className="gutter-row" span={6}>
                    <div className="card" style={{backgroundImage: `url(${lowesImg})`}}>
                        <div className="card-content">
                            <h2 className="card-title">Lowe's</h2>
                            <p className="card-body">This is a great compnay that everyone want be a employee</p>
                            <a href="/home" className="button">Learn More</a>
                        </div>
                    </div>
                    </Col> */}
                    {/* <Col className="gutter-row" span={8}>
                    <div className="card" style={{backgroundImage: `url(${bostonImg})`}}>
                        <div className="card-content">
                            <h2 className="card-title">Homesite Insurance</h2>
                            <p className="card-body">This is a great compnay that everyone want be a employee</p>
                            <a href="/home" className="button">Learn More</a>
                        </div>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                    <div className="card" style={{backgroundImage: `url(${bostonImg})`}}>
                        <div className="card-content">
                            <h2 className="card-title">Databento</h2>
                            <p className="card-body">This is a great compnay that everyone want be a employee</p>
                            <a href="/home" className="button">Learn More</a>
                        </div>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                    <div className="card" style={{backgroundImage: `url(${bostonImg})`}}>
                        <div className="card-content">
                            <h2 className="card-title">CueThink</h2>
                            <p className="card-body">This is a great compnay that everyone want be a employee</p>
                            <a href="/home" className="button">Learn More</a>
                        </div>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                    <div className="card" style={{backgroundImage: `url(${bostonImg})`}}>
                        <div className="card-content">
                            <h2 className="card-title">Lowe's</h2>
                            <p className="card-body">This is a great compnay that everyone want be a employee</p>
                            <a href="/home" className="button">Learn More</a>
                        </div>
                    </div>
                    </Col> */}
                </Row>
                
            </div>
        )
    }
}
