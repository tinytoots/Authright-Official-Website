import React, { Component } from 'react'
import './expandCard'

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
                </div>
            </div>
        )
    }
}
