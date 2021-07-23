import React, { Component } from 'react'
import BostonImg from '../../../img/boston.jpg'
import './expandCard.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import Blue_Cross from '../../../img/blue-cross-blue-shield-1.svg'
import HSBC from '../../../img/hsbc-1.svg'
import Deloitte from '../../../img/deloitte-2.svg'
import PulseBtn from '../pulse/pulse'
import WaveIm from '../waveAnim/wave'

library.add(faUser);

export default class expandCard extends Component {
    render() {
        return (
                <div className="game">

                    <div class="rank">3</div>
                    {/* <FontAwesomeIcon icon="user" /> */}
                    <div className="front">
                        <img className="thumbnail" src={BostonImg} height={170} alt=""/>
                        <h3 className="name">Team name</h3>
                        <div className="stats">
                            <p className="viewers">539.9k</p>
                            <div className="streamers">
                                <img src={Blue_Cross} height={100} alt="" />
                                <img src={HSBC} height={100} alt="" />
                                <img src={Deloitte} height={100} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="back">
                    <div className="streaming-info">
                         <p className="game-stat">559k<span>Watching</span></p>
                         <p className="game-stat">25.8k<span>Streams</span></p>
                    </div>
                    <button className="btn">See more streams</button>
                    <div className="streamers">
                        <div className="streamer">
                            <div className="icon"><img src={Blue_Cross} /></div>
                            <p className="name">Gamer1</p>
                            <p className="number">36.1k</p>
                        </div>
                        <div className="streamer">
                            <div className="icon"><img src={HSBC} /></div>
                            <p className="name">Gamer2</p>
                            <p className="number">35.1k</p>
                        </div>
                        <div className="streamer">
                            <div className="icon"><img src={Deloitte} /></div>
                            <p className="name">Gamer3</p>
                            <p className="number">34.1k</p>
                        </div>
                    </div>
                </div>

                <div className="background">
                    
                </div>

                {/* <PulseBtn className="pulse-bg" /> */}
                {/* <WaveIm /> */}
            </div>
                
                

        )
    }
}
