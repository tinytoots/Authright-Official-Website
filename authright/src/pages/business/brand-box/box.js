import React, { Component } from 'react'
import './box.css'

export default class box extends Component {
    render() {
        return (
            <div className='box-bg'>
                <div className="slider">
                    <div className="container">
                        <div className="slide x" />
                        <div className="slide y" />
                        <div className="slide z" />
                    </div>
                    <div className="shadow"></div>
                </div>
            </div>
        )
    }
}
