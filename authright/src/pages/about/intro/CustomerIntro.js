import React from 'react'
import { Row, Col } from 'antd';
import  "./intro.css"

export default function CustomerIntro() {
    return (
        <div className='about-intro-block2'>
                    <div className="inner">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={8}>
                            <div className="about-color-block">
                                <div className="about-black-block">
                                   <div className="about-color-block-title">More than</div>
                                   <div className="about-color-block-title2">1,000,000</div>
                                   <div className="about-color-block-title3">users</div>
                                   <div className="about-color-block-served">served by</div>
                                   <div className="about-color-block-served2">Authright</div>
                                </div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={16}>
                            <div className='about-company-title2'>
                                We are Committed to Saving Money and 
                            </div>
                            <div className='career-company-title2'>
                                Improving Efficiency for Our Customers
                            </div>
                            <div className='career-company-intro'>
                                Our professional team will escort your business all the time and provide 24/7 managed services. The IAM certificate holding exceeds <span style={{fontFamily: "SFProDisplay-bold"}}>90%</span>
                            </div>
                        </Col>
                    </Row>
                    </div>
                </div>
    )
}
