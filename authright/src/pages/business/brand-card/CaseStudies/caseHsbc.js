import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd';
import HsbcImg from '../../../../img/case-hsbc.png'
import HsbcLogo from '../../../../img/case-hsbc-logo.svg'
import './caseStudies.css';


const style = { background: '#0092ff', padding: '8px 0' };


export default class caseHsbc extends Component {
    render() {
        return (
            <div className="hsbc-bg">
                <img src={HsbcImg} width={550} alt = 'logo' className='case-hsbc-img'/>
                <img src={HsbcLogo} width={150} alt = 'logo' className='case-hsbc-logo-img'/>
                <div className="caseStudies-title">
                    Authright provides 24/7 global
                </div>
                <div className="caseStudies-title2">
                    IAM technical support for HSBC
                </div>
                <div className="caseStudies-content">
                    We provide the global support for all servers, monitor
                </div>
                <div className="caseStudies-content">
                    and alert and take timely action
                </div>

                
                <div className="caseStudies-about-title">
                    <div>Industry <div className='gray-lane-case'></div> &nbsp;&nbsp; Finance</div>
                </div>


                <div className="caseStudies-about-title">
                    About HSBC
                </div>
                <div className="caseStudies-about-content">
                    HSBC is one of the world’s largest banking and financial services organisations. We serve more than 40 million customers through our global businesses: Wealth and Personal Banking, Commercial Banking, and Global Banking & Markets. Our network covers 64 countries and territories in Europe, Asia, the Middle East and Africa, North America and Latin America.
                </div>

                <div className="caseStudies-about-title">
                    The Challenge
                </div>
                <div className="caseStudies-about-content">
                    HSBC is one of the world’s largest banking and financial services organisations. We serve more than 40 million customers through our global businesses: Wealth and Personal Banking, Commercial Banking, and Global Banking & Markets. Our network covers 64 countries and territories in Europe, Asia, the Middle East and Africa, North America and Latin America.
                </div>

                <div className="caseStudies-about-title">
                    The Solution
                </div>
                <div className="caseStudies-about-content">
                    HSBC is one of the world’s largest banking and financial services organisations. We serve more than 40 million customers through our global businesses: Wealth and Personal Banking, Commercial Banking, and Global Banking & Markets. Our network covers 64 countries and territories in Europe, Asia, the Middle East and Africa, North America and Latin America.
                </div>

                <div className="caseStudies-about-title">
                    The Results
                </div>
                <div className="caseStudies-about-content">
                    HSBC is one of the world’s largest banking and financial services organisations. We serve more than 40 million customers through our global businesses: Wealth and Personal Banking, Commercial Banking, and Global Banking & Markets. Our network covers 64 countries and territories in Europe, Asia, the Middle East and Africa, North America and Latin America.
                </div>

                <div className="caseStudies-about-title">
                    About AuthRight
                </div>
                <div className="caseStudies-about-content">
                    AuthRight, founded in 2014 in Massachusetts, is an accelerator of digital transformation. We advise, train and build solutions to help business seize the opportunities offered by the digital economy. AuthRight’s professional services help clients protect, connect, and manage their digital identities of people, devices, and the internet of things (IoT) through an all-in-one Identify Platform.
                </div>
            
          
            </div>
        )
    }
}
