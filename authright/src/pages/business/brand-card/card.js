import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';
import './card.css'
import { Link, Route, useRouteMatch, Switch } from "react-router-dom"
import hsbcImg from '../../../img/bank.png'
import homedepotImg from '../../../img/homedepot2.jpg'
import deloitteImg from '../../../img/deloitte.jpg'
import toyotaImg from '../../../img/toyota.jpg'
import equifaxImg from '../../../img/equifax.jpg'
import bcbsImg from '../../../img/medical.jpg'
import pearsonImg from '../../../img/education.jpg'
import mohawkImg from '../../../img/mohawk2.jpg'
import lowesImg from '../../../img/card-lowes.png'


var cardHsbc = {
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


export default function Card() {

        const { url, path } = useRouteMatch();
    
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
                            <h2 className="card-title"><p>Financial Services</p><p>with CIAM</p></h2>
                            <p className="card-body">Digital Security Platform enabling millions of customer services</p>
                            <Link to="/hsbc" className="button">Learn More</Link>
                        </div>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div className="card" style={{backgroundImage: `url(${homedepotImg})`}}>
                        <div className="card-content">
                            <h2 className="card-title"><p>Retailer Services with</p><p>CIAM</p></h2>
                            <p className="card-body">E-commerce Store for daily customer authentication and authorization</p>
                            <Link to="/home-depot" className="button">Learn More</Link>
                        </div>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div className="card" style={{backgroundImage: `url(${mohawkImg})`}}>
                        <div className="card-content">
                            <h2 className="card-title"><p>Global Commercial</p><p> SSO Soilution</p></h2>
                            <p className="card-body">Customized system integration and SSO implementation</p>
                            <Link to="/mohawk-industries" className="button">Learn More</Link>
                        </div>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div className="card" style={{backgroundImage: `url(${toyotaImg})`}}>
                        <div className="card-content">
                            <h2 className="card-title"><p>Consumer Vehicle</p><p>Industry IAM Platform</p></h2>
                            <p className="card-body">Unified application platform with IAM capability for end users</p>
                            <Link to="/toyota" className="button">Learn More</Link>
                        </div>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div className="card" style={cardBcbs}>
                        <div className="card-content">
                            <h2 className="card-title"><p>Helthcare Industry</p><p>IAM Services</p></h2>
                            <p className="card-body">Compliance driven multi-region system migration and upgrade</p>
                            <Link to="/blue-cross-blue-shield" className="button">Learn More</Link>
                        </div>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div className="card" style={{backgroundImage: `url(${equifaxImg})`}}>
                        <div className="card-content">
                            <h2 className="card-title"><p>Workforce IAM</p><p>Solution</p></h2>
                            <p className="card-body">Enforce employee security with MFA while smoothing SSO process</p>
                            <Link to="/equifax" className="button">Learn More</Link>
                        </div>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div className="card" style={cardPearson}>
                        <div className="card-content">
                            <h2 className="card-title"><p>IAM Platform for </p><p>Educational Sercive</p></h2>
                            <p className="card-body">End user access handling with reliability and security</p>
                            <Link to="/pearson" className="button">Learn More</Link>
                        </div>
                    </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div className="card" style={{backgroundImage: `url(${deloitteImg})`}}>
                        <div className="card-content">
                            <h2 className="card-title"><p>Governmental</p><p>IAM Program</p></h2>
                            <p className="card-body">User lifecycle management and cross domain SSO</p>
                            <Link to="/deloitte" className="button">Learn More</Link>
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
