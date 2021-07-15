import React, { Component } from 'react'
import AppDev from './AppDev/AppDev'
import WebDev from './WebDev/WebDev'


export default class ServiceDigital extends Component {
    render() {
        return (
            <div>
                <WebDev />
                <AppDev />
            </div>
        )
    }
}
