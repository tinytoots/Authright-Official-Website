import React, { Component } from 'react'
import './history.css'
import { Row, Col, Divider } from 'antd';
import UnderLine from '../../../img/Underline.svg';

const style = {padding: '80px 0' };

export default class history extends Component {
    render() {
        return (
            <div className='history-bg'>
                <Row gutter={[16, 24]}>
                    <Col className="gutter-row" span={8}>
                        <div style={style}>
                            <div className='history-year'>2014</div>
                            <img className='underline-img' src={UnderLine} width={135} />
                            <div className='history-content2'>AUTHRIGHT</div>
                            <div className='history-content2'>FOUNDED</div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div style={style}>
                            <div className='history-year'>2018</div>
                            <img className='underline-img' src={UnderLine} width={135} />
                            <div className='history-content'> AuthRight and ForgeRock announced a Delivery and Strategic Partnership to provide top information security solutions globally</div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div style={style}>
                            <div className='history-year'>2020</div>
                            <img className='underline-img' src={UnderLine} width={135} />
                            <div className='history-content'> Provide efficient and reliable technical services for dozens of companies including the world's top 500</div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
