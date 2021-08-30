import React, { Component } from 'react'
import './costomerComments.css'
import Tilt from 'react-vanilla-tilt'
import { Row, Col, Divider } from 'antd';
import ForgerockCEOImag from '../../../img/forgerock-ceo2.jpg'
import PingCEOImag from '../../../img/ping-ceo.jpg' 
import BrandTrust from '../../business/brand-trust/trust'
// import HsbcImg from '../../../../../../img/case-home-depot-img.jpg'
// import HsbcLogo from '../../../../../img/case-home-depot.svg'
// import AuthrightLogo from '../../../../img/authright-logo.jpg'
import HSBC from '../../../img/comments-hsbc.png'
import Deloitte from '../../../img/deloitte-2.svg'
import Toyota from '../../../img/toyota-1.svg'

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
                <div className="case-about-bg" style={{backgroundColor: '#d9d9d9'}}>
                    <div className="inner">
                        {/* <Row>
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
                        </Row> */}
                    </div>
            <div className="container-youtube" style={{height: 300, color: 'white'}}>
                    <Tilt className="tiltTest" options={{ max: 25, speed: 400}} data-tilt="false">
                    <div className="card-youtube" data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="500">
                        <div className="content-youtube">
                            <img src={ForgerockCEOImag} width={60} alt = 'logo' className='customerComments-forgerockCeo-img' />    
                            {/* <h2>01</h2> */}
                            <h3>Fran Rosch</h3>
                            <h4>CEO of Forgerock</h4>
                            <p>"As one of our premier ‘go to’ partners, Identity Fusion has proven themselves time and time again to handle the really tough projects."</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    </Tilt>
                    {/* <Tilt options={{ scale: 1, max: 52 }}> */}
                    <div className="card-youtube">
                        <div className="content-youtube">
                            {/* <h2>02</h2> */}
                            <img src={PingCEOImag} width={60} alt = 'logo' className='customerComments-forgerockCeo-img' />    
                            <h3>Kris Nagel</h3>
                            <h4>CEO of PingIdentity</h4>
                            <p>"Authright thrives in solving real world security and identity problems with a calming seasoned leadership approach that few can match."</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    {/* </Tilt> */}
                    {/* <Tilt options={{ scale: 1, max: 52 }}> */}
                    <div className="card-youtube">
                        <div className="content-youtube">
                            <img className='comments-logo' src={HSBC} alt = 'logo' /> 
                            <br />
                            {/* <h2>03</h2> */}
                            <img src={ForgerockCEOImag} width={60} alt = 'logo' className='customerComments-forgerockCeo-img' />    
                            <h3>Tim Cook</h3>
                            <h4>CEO of Apple</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do test tempor incididunt, ut labore et dolore magna aliqua.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    {/* </Tilt> */}
                </div>
                </div>
                </div>
        )
    }
}
