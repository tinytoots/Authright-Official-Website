import React, { Component } from 'react'
import './caseStudy.css'
import { Row, Col, Divider } from 'antd';
import { NavLink } from 'react-router-dom'
import HSBC from '../../../img/hsbc-2.svg'
import Deloitte from '../../../img/deloitte-2.svg'
import Toyota from '../../../img/toyota-2.svg'
import HomeDepot from '../../../img/the-home-depot.svg'
import CaseStudy from '../../../img/case-study.svg';

const style = { background: '#141414', padding: '100px 0' };

export default class caseStudy extends Component {
    render() {
        return (
            <div className='caseStudy-bg'>
                <div className='Case-title'>
                    <div className='case-title' style={{paddingTop: 30}}>Featured Case Studies</div>
                    <div className='caseStudy-content'>AuthRight Technology offers a full range of professional services focused solely on identity management solutions. Our services has been tested across multiple industries.</div>
                    {/* <img className='caseStudy-img' src={CaseStudy} width={135} /> */}
                </div>
                <Row gutter={[10, 10]}>
                    <Col className="gutter-row" span={12}>
                        <div style={style}>
                            <div className='company-title'>
                            <NavLink to="/home">
                                <img className='logo' src={HSBC} width={160} alt = 'logo' className='hsbc-logo2'/>
                            </NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div style={style}>
                            <div className='company-title'>
                            <NavLink to="/home">
                                <img className='logo' src={HomeDepot} width={160} alt = 'logo' className='homeDepot-logo2'/>
                            </NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div style={style}>
                            <div className='company-title'>
                            <NavLink to="/home">
                                <img className='logo' src={Deloitte} width={160} alt = 'logo' className='deloitte-logo2'/>
                            </NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div style={style}>
                            <div className='company-title'>
                            <NavLink to="/home">
                                <img className='logo' src={Toyota} width={160} alt = 'logo' className='toyota-logo2'/>
                            </NavLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
