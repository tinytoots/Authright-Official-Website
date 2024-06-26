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
import { useMediaQuery } from 'react-responsive';


export default function Solution()  {
        const [show, setShow] = useState(["none", "none"]);

        const _handleRowClick = (number)=> {
            console.log(number)
            let s = []
            for ( let i = 0; i < show.length; i++)
                s[i] = i === number ? show[i] === "none" ? "block" : "none" : show[i]
            setShow(s)
        }
        const isMobile = useMediaQuery({ query: `(max-width: 420px)` });
        return (
            <div>
                <div className='career-bg'>
                        <div className="even-row solution-row" >
                            <div className='inner'>
                                <div className = "partner-title">
                                    Identity Leaders Trust Us 
                                </div>
                                {/* <div className = "parnter-subTitle">
                                Identity Leaders Trust Us 
                                </div>  */}
                                <Row justify={isMobile? "center": "start"} gutter={0}>
                                    <Col span={13}>
                                        <img src={ForgerockImg} alt = 'logo' className='solution-fg-logo'/>
                                        <div className="solution-logo-gray-lane"> </div>
                                    </Col>
                                    <Col>
                                        <div className='solution-row-title'>
                                            ForgeRock
                                        </div>
                                        <div className='solution-content-text'>
                                            <i>which Simplifies User Access to Apps and Services.</i>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="fr-cert">
                                    <Row justify={isMobile? "center": "start"} gutter={[0,25]}>
                                        
                                        <Col className="crt-img" >
                                                <img src={ForgerockCert4} width={90} alt = 'logo' className = "fg-cert"/>      
                                        </Col>
                                        <Col className="crt-img">
                                                <img src={ForgerockCert1} width={90} alt = 'logo' className = "fg-cert"/>
                                        </Col>
                                        <Col className="crt-img">
                                                <img src={ForgerockCert3} width={90} alt = 'logo' className = "fg-cert"/>
                                        </Col>
                                        <Col className="crt-img">
                                                <img src={ForgerockCert2} width={90} alt = 'logo' className = "fg-cert"/>
                                        </Col>
                                        <Col >
                                            <div className="learn-more-extend learn-more-extra-space" onClick = {(number) => _handleRowClick(0)}>
                                                Learn more {
                                                        show[0] === "none"?< DownOutlined style={{width:14}}/>:<UpOutlined style={{width:14}}/>
                                                    }
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                
                            </div>   
                        </div>
                        <div className  = "inner" style = {{display: show[0]}}>
                                <Forgerock />
                        </div>

                        {isMobile ? <div className="gap-lane"></div> : ""}
                        <div className = "even-row solution-row">
                            <div className='inner'>
                            <Row justify={isMobile? "center": "start"} gutter={0}>
                                    <Col span={13}>
                                        <img src={PingImg} alt = 'logo' className='parnter-ping-logo'/>   
                                        <div className="solution-ping-logo-gray-lane"> </div> 
                                    </Col>
                                    <Col>
                                        <div className='solution-row-title' style={{paddingTop: 70}}>
                                            Ping Identity
                                        </div>
                                        <div className='solution-content-text'>
                                            <i>Identity Security for Global Businesses.</i>
                                        </div>
                                    </Col>
                                </Row>
                                
                                <div className="ping-cert-row">
                                    <Row justify={isMobile? "center": "start"} gutter={[0,10]}>
                                        <Col className="crt-img">
                                                <img src={Ping1} width={100} alt = 'logo' className='ping-cert'/>
                                        </Col>
                                        <Col className="crt-img" >
                                                <img src={Ping2} width={100} alt = 'logo' className='ping-cert'/>    
                                        </Col>
                                        <Col className="crt-img">
                                                <img src={Ping3} width={100} alt = 'logo' className='ping-cert'/>
                                        </Col>
                                        <Col className="crt-img">
                                                <img src={Ping4} width={100} alt = 'logo' className='ping-cert'/>
                                        </Col>
                                        <Col>      
                                                <div className="learn-more-extend" onClick = {(number) => _handleRowClick(1)}>
                                                    Learn more {
                                                        show[1] === "none"?< DownOutlined style={{width:14}}/>:<UpOutlined style={{width:14}}/>
                                                        }
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
    </div>

  );
}