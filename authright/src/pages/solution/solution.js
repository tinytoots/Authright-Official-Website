import React, { Component } from 'react'
import Forgerock from './ServiceIAM/Forgerock/Forgerock'
import Ping from './ServiceIAM/Ping/Ping'

export default class solution extends Component {
    render() {
        return (
            <div>
                <div className='career-bg'>
                    <Forgerock />
                    <Ping/>
                </div>
            </div>
        )
    }
}
