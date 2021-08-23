import React, { Component } from 'react'
import './costomerComments.css'
import { Row, Col, Divider } from 'antd';
import ForgerockCEOImag from '../../../img/forgerock-ceo2.jpg'
import PingCEOImag from '../../../img/ping-ceo.jpg'
import BrandTrust from '../../business/brand-trust/trust'
// import HsbcImg from '../../../../../../img/case-home-depot-img.jpg'
// import HsbcLogo from '../../../../../img/case-home-depot.svg'
// import AuthrightLogo from '../../../../img/authright-logo.jpg'

export default class costomerComments extends Component {
    render() {
        return (
            <div className="customerComments-bg">
                <div className="inner">
                    <div className="customerComments-title" style={{width: 800, margin: 'auto'}}>
                        What our customers say
                    </div>
                    <div className="customerComments-title2">
                        "Since Authright was founded in 2014, we have provided customized IAM services to dozens of medium and large enterprises, and our IAM experts have been recognized and supported by our customers"
                    </div>
            </div>

                
                {/* <div className="caseStudies-about-title">
                    <div>Industry <div className='gray-lane-case'></div> &nbsp;&nbsp; Finance</div>
                </div> */}
                <div className="case-about-bg" style={{backgroundColor: '#f5f5f5'}}>
                    <div className="inner">
                        <Row>
                            <Col span={12}>
                                <img src={ForgerockCEOImag} width={150} alt = 'logo' className='customerComments-forgerockCeo-img' />    
                                <div className="customerComments-customer-title">
                                    Fran Rosch
                                </div>
                                <div className="customerComments-customer-title2">
                                    CEO of Forgerock
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="comments-bg2">
                                    <div className="comments-bg">
                                        <div className="customer-comments-content" style={{marginLeft: 50}}>
                                            "As one of our premier ‘go to’ partners, Identity Fusion has proven themselves time and time again to handle the really tough projects."
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="comments-bg2">
                                    <div className="comments-bg">
                                        <div className="customer-comments-content" style={{marginLeft: 40}}>
                                            "Authright thrives in solving real world security and identity problems with a calming seasoned leadership approach that few can match."
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12}>
                                <img src={PingCEOImag} width={150} alt = 'logo' className='customerComments-forgerockCeo-img' />    
                                <div className="customerComments-customer-title">
                                    Kris Nagel
                                </div>
                                <div className="customerComments-customer-title2" style={{paddingBottom: 90}}>
                                    COO of PingIdentity
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                
            </div>
        )
    }
}
