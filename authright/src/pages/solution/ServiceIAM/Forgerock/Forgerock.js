import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd';


const style = { background: '#0092ff', padding: '8px 0' };

export default class Forgerock extends Component {
    render() {
        return (
            <div className='solution-IAM-bg'>
                <div className='solution-IAM-Intro-bg'>
                    
                    <div className="forgerock-conent-bg">
                        <div className='solution-topics-title'>
                            Topics
                        </div>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className='solution-forgerock-intro1'>
                                Federation & Single Sign-On
                            </div>
                        </Col>
                        <Col className="gutter-row" span={18}>
                            <div className='solution-forgerock-intro'>
                                Policy agents, SAML, OAuth, OpenID Connect, UMA – there are numerous methods for protecting precious resources. But selecting the right method for the right circumstance is not always obvious.
                            </div>
                        </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className='solution-forgerock-intro1'>
                                User Provisioning
                            </div>
                        </Col>
                        <Col className="gutter-row" span={18}>
                            <div className='solution-forgerock-intro'>
                                There are numerous pockets of identity data strewn across any enterprise. Synchronizing that data, ensuring that it is up to date, and providing your users with methods of managing their own data is critical.
                            </div>
                        </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className='solution-forgerock-intro1'>
                                Enterprise Directory
                            </div>
                        </Col>
                        <Col className="gutter-row" span={18}>
                            <div className='solution-forgerock-intro'>
                                A strong directory infrastructure is at the core of most identity implementations.  Knowing how to properly architect and build an enterprise directory can be as much of an art as it is a science.
                            </div>
                        </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className='solution-forgerock-intro1'>
                                Workshops
                            </div>
                        </Col>
                        <Col className="gutter-row" span={18}>
                            <div className='solution-forgerock-intro'>
                                Seeking to architect an identity solution? Are you looking for a review of your current implementation to determine if it is configured properly? Need someone to watch your back as you move your project into production? AuthRight works with ForgeRock Professional Services to offer a broad range of 3 to 5 day workshops – for those times when you need just a little bit of extra assistance.
                            </div>
                        </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className='solution-forgerock-intro1'>
                                Upgrades & Migrations
                            </div>
                        </Col>
                        <Col className="gutter-row" span={18}>
                            <div className='solution-forgerock-intro'>
                                Is your current identity solution reaching its end of life and the vendor is no longer in business? Do you have an old version of the product and are looking to upgrade to the latest release? Is your current vendor forcing you to migrate to a solution that you really don’t want and are now looking for a more cost effective and palatable alternative? Identity Fusion has extensive experience with upgrades and migrations.
                            </div>
                        </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className='solution-forgerock-intro1'>
                                Cloud Identity
                            </div>
                        </Col>
                        <Col className="gutter-row" span={18}>
                            <div className='solution-forgerock-intro'>
                                Cloud-based identity services are becoming more and more common as companies seek to cut costs. But knowing how to properly architect, implement, and secure cloud-based identity solutions is essential as they hold the keys to your most critical assets. AuthRight has experience building identity solutions in the cloud and understands the challenges associated with IDaaS solutions.
                            </div>
                        </Col>
                        </Row>
                        <div className='solution-gray-lane' />
                        
                    </div>
                </div>
            </div>
            
        )
    }
}
