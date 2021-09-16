import React, { Component } from 'react'
import ServicesCate from './Services/ServicesCate'
import Forgerock from './Forgerock/Forgerock'
import Ping from './Ping/Ping'

export default class ServiceIAM extends Component {
    render() {
        return (
            <div>
                <ServicesCate />
                <h1>This is IAM page</h1>
            </div>
        )
    }
}
