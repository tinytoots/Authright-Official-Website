import React, { Component } from 'react'
import BostonImg from '../../../img/boston.jpg'
import './expandCard.scss'
import Blue_Cross from '../../../img/blue-cross-blue-shield-1.svg'
import HSBC from '../../../img/hsbc-1.svg'
import Deloitte from '../../../img/deloitte-2.svg'


export default class expandCard extends Component {
    render() {
        return (
            <div className="expCard-bg">
                <div className="game">

                    <div class="rank">3</div>

                    <div className="front">
                        <img className="thumbnail" src={BostonImg} width={535} alt=""/>
                        <h3 className="name">Team name</h3>
                        <div className="stats">
                            <p className="viewers">539.9k</p>
                            <div className="streamers">
                                <img src={Blue_Cross} width={300} alt="" />
                                <img src={HSBC} width={300} alt="" />
                                <img src={Deloitte} width={300} alt="" />
                            </div>
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
                            <p className="name">Gamer1</p>
                            <p className="number">36.1k</p>
                        </div>
                        <div className="streamer">
                            <p className="name">Gamer2</p>
                            <p className="number">35.1k</p>
                        </div>
                        <div className="streamer">
                            <p className="name">Gamer3</p>
                            <p className="number">34.1k</p>
                        </div>
                    </div>
                </div>

                <div className="background">
                    
                </div>

            </div>
        )
    }
}
