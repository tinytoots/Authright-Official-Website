import React, { Component, useState } from 'react'
import Forgerock from './ServiceIAM/Forgerock/Forgerock'
import Ping from './ServiceIAM/Ping/Ping'
import './solution.css'
import ForgerockImg from '../../img/forgerock.svg'
import PingImg from '../../img/ping-identity.svg'
import ForgerockCert1 from '../../img/forgerock-cert1.png'
import ForgerockCert2 from '../../img/forgerock-cert2.png'
import ForgerockCert3 from '../../img/forgerock-cert3.png'
import ForgerockCert4 from '../../img/forgerock-cert4.png'
import ForgerockCert5 from '../../img/forgerock-cert5.png'
import Ping1 from '../../img/ping-cert1.png'
import Ping2 from '../../img/ping-cert2.png'
import Ping3 from '../../img/ping-cert3.png'
import Ping4 from '../../img/ping-cert4.png'
import { Row, Col, Divider } from 'antd';

export default function Solution()  {
        const [show, setShow] = useState(["none", "none"]);

        const _handleRowClick = (number)=> {
            console.log(number)
            let s = []
            for ( let i = 0; i < show.length; i++)
                s[i] = i === number ? show[i] === "none" ? "block" : "none" : show[i]
            setShow(s)
        }
        return (
            <div>
                <div className='career-bg'>
                        <div className="even-row solution-row" onClick = {(number) => _handleRowClick(0)}>
                            <div className='inner'>
                                <img src={ForgerockImg} width={220} alt = 'logo' className='solution-ping-logo'/>
                                <div className='solution-iam-title'>
                                    IAM
                                </div>
                                <div className='solution-forgerock-title'>
                                    Forgerock Solutions
                                </div>
                                <div className='solution-forgerock-intro2'>
                                    Make it easy for users to log into apps and services.
                                </div>
                                <div className="fr-cert">
                                    <Row justify="start">
                                        <Col className=" " span={4}>
                                                <img src={ForgerockCert4} width={150} alt = 'logo' className=''/>
                                        </Col>
                                        <Col className=" " span={4}>
                                                <img src={ForgerockCert3} width={150} alt = 'logo' className=''/>    
                                        </Col>
                                        <Col className=" " span={4}>
                                                <img src={ForgerockCert1} width={150} alt = 'logo' className=''/>
                                        </Col>
                                        <Col className=" " span={4}>
                                                <img src={ForgerockCert2} width={150} alt = 'logo' className=''/>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='solution-gray-lane' />
                            </div>   
                        </div>
                        <div className  = "inner" style = {{display: show[0]}}>
                                <Forgerock />
                        </div>

                        <div className = "even-row solution-row" onClick = {(number) => _handleRowClick(1)}>
                            <div className='inner'>
                                <img src={PingImg} width={160} alt = 'logo' className='solution-ping-logo'/>
                                <div className='solution-iam-title2'>
                                    IAM
                                </div>
                                <div className='solution-forgerock-title'>
                                    Ping Identity Solutions
                                </div>
                                <div className='solution-forgerock-intro2'>
                                    Identity Security for the Global Enterprise.
                                </div>
                                <div className="ping-cert-row">
                                    <Row justify="start">
                                        <Col className="cert-unit" span={4}>
                                                <img src={Ping1} width={150} alt = 'logo' className=''/>
                                        </Col>
                                        <Col className="cert-unit" span={4}>
                                                <img src={Ping2} width={150} alt = 'logo' className=''/>    
                                        </Col>
                                        <Col className="cert-unit" span={4}>
                                                <img src={Ping3} width={150} alt = 'logo' className=''/>
                                        </Col>
                                        <Col className="cert-unit " span={4}>
                                                <img src={Ping4} width={150} alt = 'logo' className=''/>
                                        </Col>
                                        <Col className="cert-unit " span={4}>
                                                <img src={Ping4} width={150} alt = 'logo' className=''/>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='solution-gray-lane' />
                            </div>    
                        </div>
                        <div className="inner" style = {{display: show[1]}}>
                                <Ping />
                        </div>

                </div>
            </div>
        )
    
}
