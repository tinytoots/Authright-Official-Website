import React, { Component } from 'react'
import ServicesCate from './Services/ServicesCate'
import Forgerock from './Forgerock/Forgerock'
import Ping from './Ping/Ping'
import BrandCard from "../../business/brand-card/card"
import "./ServiceIAM.css"

export default class ServiceIAM extends Component {
    render() {
        return (
            <div>
                <ServicesCate />
                <div className="businessOutcome-card-bg">
                    <div className="businessOutcome-card">
                        <BrandCard />
                    </div>
                </div>
            </div>
        )
    }
}
