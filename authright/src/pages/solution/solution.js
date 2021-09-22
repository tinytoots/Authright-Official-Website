import React, { Component, useState } from 'react'
import Forgerock from './ServiceIAM/Forgerock/Forgerock'
import Ping from './ServiceIAM/Ping/Ping'
import './solution.css'
import ForgerockImg from '../../img/forgerock.svg'
import PingImg from '../../img/ping-identity.svg'

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
                        <div className="odd-row solution-row" onClick = {(number) => _handleRowClick(0)}>
                            <div className='inner'>
                                <img src={ForgerockImg} width={220} alt = 'logo' className='solution-forgerock-logo'/>
                                <div className='solution-iam-title'>
                                    IAM
                                </div>
                                <div className='solution-forgerock-title'>
                                    Forgerock Solutions
                                </div>
                                <div className='solution-forgerock-intro2'>
                                    Make it easy for users to log into apps and services.
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
