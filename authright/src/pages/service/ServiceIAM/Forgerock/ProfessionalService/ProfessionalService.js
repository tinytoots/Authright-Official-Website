import React, { Component } from 'react'
import ForgeRock from '../Forgerock'
import Ping from '../../Ping/Ping'


export default class ProfessionalService extends Component {
    render() {
        return (
            <div>
                <ForgeRock />
                <Ping/> 
            </div>
        )
    }
}
