import React, { Component } from 'react'
import BostonImg from '../../../img/boston.jpg'

export default class wave extends Component {
    render() {
        return (
            <div>
                <h1>This is wave part</h1>
                <div className="card3">
                    <img className="thumbnail" src={BostonImg} height={170} alt=""/>
                </div>
            </div>
        )
    }
}
