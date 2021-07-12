import React, { Component } from 'react'
import './expandCard'
import BosImg from '../../../img/boston.jpg'

export default class expandCard extends Component {
    render() {
        return (
            <div className='expandCard-bg'>
                <h1>This is expand card</h1>
                <div className="expandCard">

                    <div className="front">
                        <img src="./boston2.jpg" art=""></img>
                    </div>

                    <div className="back"></div>
                    {/* <img className='logo' src={Equifax} width={160} alt = 'logo' className='equifax-logo'/> */}
                </div>
            </div>
        )
    }
}
