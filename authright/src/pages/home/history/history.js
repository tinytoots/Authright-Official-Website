import React, { Component } from 'react'
import './history.css'
import { Row, Col } from 'antd';
import UnderLine from '../../../img/brush.svg';

const style = {padding: '80px 0' };

export default class history extends Component {
    render() {
        return (
            <div className='history-bg'>
                <Row gutter={[16, 24]}>
                    <Col className="gutter-row" span={8}>
                        <div style={style}>
                            <div className='history-year'>2014</div>
                            <img className='underline-img' src={UnderLine} width={135} alt="" />
                            <div className='history-content2'>AUTHRIGHT</div>
                            <div className='history-content2'>FOUNDED</div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div style={style}>
                            <div className='history-year'>2018</div>
                            <img className='underline-img' src={UnderLine} width={135} alt=""/>
                            <div className='history-content'>AuthRight and ForgeRock announced</div>
                            <div className='history-content'>a Delivery and Strategic Partnership</div>
                            <div className='history-content'>to provide top information security</div>
                            <div className='history-content'>solutions globally</div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div style={style}>
                            <div className='history-year'>2020</div>
                            <img className='underline-img' src={UnderLine} width={135} alt=""/>
                            <div className='history-content'>Provide efficient and reliable technical</div>
                            <div className='history-content'>services for dozens of companies</div>
                            <div className='history-content'>including the world's top 500</div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
