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
                    Authright's IAM team is committed to delivering a diverse range of customized services tailored to your specific needs. With extensive expertise in Forgerock and PingIdentity, our IAM specialists have a proven track record of success. Over the years, Authright has consistently provided dependable and efficient IAM solutions to numerous organizations, including multiple Fortune 500 companies. If you're seeking a team of seasoned professionals to handle your IAM needs, Authright is the ideal choice for you.
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
