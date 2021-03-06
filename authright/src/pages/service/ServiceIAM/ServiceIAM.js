import React, { Component } from 'react'
import ServicesCate from './Services/ServicesCate'
import BrandCard from "../../business/brand-card/card"
import CustomerIntro from "../../about/intro/CustomerIntro"
import "./ServiceIAM.css"
import AuthrightImg from '../../../img/authright-logo.jpg'
export default class ServiceIAM extends Component {
    render() {
        return (
            <div className='service-bg'>
                <div className='service-banner'>
                    <img src={AuthrightImg} alt = 'logo' className='servicesCate-authright-logo'/>
                    <div className='servicesCate-content1'>
                        Authright's IAM team is dedicated to create a variety of customized services that you need. Whether it's Forgerock or PingIdentity, our IAM experts have a wealth of experience. Over the past few years, Authright has provided reliable and efficient IAM services to dozens of organizations, including several Fortune 500 companies. If you want a team of professionals to provide you with IAM solutions, Authright is the right choice for you.
                        {/* Authright's IAM team is dedicated to create customized services. Our IAM experts have rich experience of ForgeRock and PingIdentity products and provided reliable IAM services to various organizations. If you are looking for a professional IAM solution team, Authright is the right choice for you. */}
                    </div>
                </div>
                <div className = "businessOutcome-card-bg">
                    <BrandCard />
                </div>
                <div className = "service-inner">
                    <CustomerIntro/>
                    <ServicesCate />
                </div>
                
            </div>
        )
    }
}
