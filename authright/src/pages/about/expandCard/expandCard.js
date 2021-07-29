import React, { Component } from 'react'
// import BostonImg from '../../../img/cr7.png'
import BostonImg from '../../../img/cr7.png'
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

                    <div class="rank">7</div>
                    {/* <FontAwesomeIcon icon="user" /> */}
                    <div className="front">
                        <img className="thumbnail" src={BostonImg} height={170} alt=""/>
                        <h3 className="name">Cristiano Ronaldo</h3>
                        <div className="stats">
                            <p className="viewers">Software Developer</p>
                            {/* <div className="streamers">
                                <img src={Blue_Cross} height={100} alt="" />
                                <img src={HSBC} height={100} alt="" />
                                <img src={Deloitte} height={100} alt="" />
                            </div> */}
                        </div>
                    </div>

                    <div className="back">
                    <div className="streaming-info">
                         <p className="game-stat">IAM<span>SDE</span></p>
                         <p className="game-stat">15<span>YOE</span></p>
                    </div>
                    <button className="btn">See more info</button>
                    <div className="streamers">
                        <div className="streamer">
                            <div className="icon"><img src={Blue_Cross} /></div>
                        </div>
                        <div className="streamer">
                            <div className="icon"><img src={HSBC} /></div>
                        </div>
                        <div className="streamer">
                            <div className="icon"><img src={Deloitte} /></div>
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
