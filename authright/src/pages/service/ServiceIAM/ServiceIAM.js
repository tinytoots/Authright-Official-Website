import React, { Component } from 'react'
import ServicesCate from './Services/ServicesCate'
import Forgerock from './Forgerock/Forgerock'
import Ping from './Ping/Ping'
import BrandCard from "../../business/brand-card/card"
import CustomerIntro from "../../about/intro/CustomerIntro"
import "./ServiceIAM.css"
import AuthrightImg from '../../../img/authright-logo.jpg'
export default class ServiceIAM extends Component {
    render() {
        return (
            <div>
                <div className='service-banner'>
                    <img src={AuthrightImg} width={380} alt = 'logo' className='servicesCate-authright-logo'/>
                    <div className='servicesCate-content1'>
                        Authright's IAM team is dedicated to creating a variety of customized services that you need. Whether it's Forgerock or PingIdentity, our IAM experts have a wealth of experience. Over the past few years, Authright has provided reliable and efficient IAM services to dozens of organizations, including several Fortune 500 companies. If you want a team of professionals to provide you with IAM solutions, Authright is the right choice for you.
                    </div>
                </div>
                
                <div className="businessOutcome-card-bg">
                    <div className="businessOutcome-card">
                        <BrandCard />
                    </div>
                </div>
                <CustomerIntro />
                <ServicesCate />
                
                
            </div>
        )
    }
}
