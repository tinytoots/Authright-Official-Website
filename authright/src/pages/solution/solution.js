import React, { useState } from "react";
import Forgerock from "./ServiceIAM/Forgerock/Forgerock";
import Ping from "./ServiceIAM/Ping/Ping";
import "./solution.css";
import ForgerockImg from "../../img/forgerock.svg";
import PingImg from "../../img/ping-identity.svg";
import ForgerockCert1 from "../../img/forgerock-cert1.png";
import ForgerockCert2 from "../../img/forgerock-cert2.png";
import ForgerockCert3 from "../../img/forgerock-badge-2020.png";
import ForgerockCert4 from "../../img/forgerock-cert4.png";
import Ping1 from "../../img/ping-cert1.png";
import Ping2 from "../../img/ping-cert2.png";
import Ping3 from "../../img/ping-cert3.png";
import Ping4 from "../../img/ping-cert4.png";
import { Row, Col } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";


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
            <div className='career-bg'>
                <div className="even-row solution-row" >
                    <div className='inner'>
                        <div className = "partner-title">
                            We are Trusted by the Identity Leaders
                        </div>
                        <Row justify="start" gutter={10}>
                            <Col span={13}>
                                <img src={ForgerockImg} width={250} alt = 'logo' className='solution-fg-logo'/>
                                <div className="solution-logo-gray-lane"> </div>
                            </Col>
                            <Col>
                                <div className='solution-iam-title'>
                                    
                                </div>
                                <div className='solution-row-title'>
                                    ForgeRock
                                </div>
                                <div className='solution-content-text'>
                                    <i>Make it easy for users to log into apps and services.</i>
                                </div>
                            </Col>
                        </Row>
                        <div className="fr-cert">
                            <Row justify="start">
                                
                                <Col className=" " span={3}>
                                        <img src={ForgerockCert4} width={90} alt = 'logo'/>      
                                </Col>
                                <Col className=" " span={3}>
                                        <img src={ForgerockCert1} width={90} alt = 'logo' className=''/>
                                </Col>
                                <Col className=" " span={3}>
                                        <img src={ForgerockCert3} width={90} alt = 'logo' className=''/>
                                </Col>
                                <Col className=" " span={4}>
                                        <img src={ForgerockCert2} width={90} alt = 'logo' className=''/>
                                </Col>
                                <Col span={3}>
                                    <div style={{width: 400, marginLeft: 17}} className="solution-content-text">
                                        {/* 需要扩展 */}
                                        
                                        <div className="learn-more-extend" onClick = {(number) => _handleRowClick(0)}>
                                            Learn more {
                                                    show[0] === "none"?< DownOutlined style={{width:14}}/>:<UpOutlined style={{width:14}}/>
                                                }
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        
                    </div>   
                </div>
                <div className  = "inner" style = {{display: show[0]}}>
                    <Forgerock />
                </div>
                <div className = "even-row solution-row">
                    <div className='inner'>
                    <Row justify="start" gutter={10}>
                            <Col span={13}>
                                <img src={PingImg} width={120} alt = 'logo' className='solution-ping-logo'/>   
                                <div className="solution-ping-logo-gray-lane"> </div> 
                            </Col>
                            <Col>
                                <div className='solution-row-title' style={{paddingTop: 70}}>
                                    Ping Identity
                                </div>
                                <div className='solution-content-text'>
                                    <i>Identity Security for the Global Enterprise.</i>
                                </div>
                            </Col>
                        </Row>
                        
                        <div className="ping-cert-row">
                            <Row justify="start">
                                <Col className="cert-unit" span={3}>
                                        <img src={Ping1} width={100} alt = 'logo' style={{marginRight:50}}/>
                                </Col>
                                <Col className="cert-unit" span={3}>
                                        <img src={Ping2} width={100} alt = 'logo' className=''/>    
                                </Col>
                                <Col className="cert-unit" span={3}>
                                        <img src={Ping3} width={100} alt = 'logo' className=''/>
                                </Col>
                                <Col className="cert-unit " span={4}>
                                        <img src={Ping4} width={100} alt = 'logo' className=''/>
                                </Col>
                                <Col>
                                    <div style={{width: 400, marginLeft: 17}} className="solution-content-text">
                                        
                                        <div className="learn-more-extend" onClick = {(number) => _handleRowClick(1)}>
                                            Learn more {
                                                show[1] === "none"?< DownOutlined style={{width:14}}/>:<UpOutlined style={{width:14}}/>
                                                }
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        {/* <div className='solution-gray-lane' /> */}
                    </div>    
                </div>
                <div className="inner" style = {{display: show[1]}}>
                        <Ping />
                </div>
            </div>

  );
}
