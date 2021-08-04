import React, { Component } from 'react'
import Forgerock from './ServiceIAM/Forgerock/Forgerock'
import Ping from './ServiceIAM/Ping/Ping'
import './solution.css'

export default class solution extends Component {
    render() {
        return (
            <div>
                <div className='career-bg'>
                    <div className='inner'>
                        <Forgerock />
                        <Ping />
                    </div>
                </div>
            </div>
        )
    }
}
