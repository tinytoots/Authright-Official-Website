import React, { Component } from 'react'
import Forgerock from './Forgerock/Forgerock'
import Ping from './Ping/Ping'

export default class ServiceIAM extends Component {
    render() {
        return (
            <div>
                <Forgerock />
                <Ping/>
                <h1>This is IAM page</h1>
            </div>
        )
    }
}
