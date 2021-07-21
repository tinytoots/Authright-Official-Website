import React, { Component } from 'react'
import './pulse.css'
import Blue_Cross from '../../../img/blue-cross-blue-shield-1.svg'
import HSBC from '../../../img/hsbc-1.svg'
import Deloitte from '../../../img/deloitte-2.svg'

export default class pulse extends Component {
    render() {
        return (
            <div className="pulseBg">
                <h1>This is pulse</h1>
                <div className="streamers2">
                    <div className="streamer2">
                        <div className="icon2">
                            <img src={Blue_Cross} height={100} />
                        </div>
                        <p className="name">Gamer1</p>
                        <p className="number">36.1k</p>
                    </div>
                </div>
            </div>
        )
    }
}
