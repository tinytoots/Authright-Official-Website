import React, { Component } from 'react'
import Forgerock from './Forgerock/Forgerock'
import Ping from './Ping/Ping'

export default class ServiceIAM extends Component {
    render() {
        return (
            <div>
                <Forgerock />
                <Ping/>
            </div>
        )
    }
}
