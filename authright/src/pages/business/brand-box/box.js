import React, { Component } from 'react'

export default class box extends Component {
    render() {
        return (
            <div>
                <div className="slider">
                    <div className="container">
                        <div className="slide x">
                        </div>
                        <div className="slide y">
                        </div>
                        <div className="slide z">
                        </div>
                    </div>
                    <div className="shadow"></div>
                </div>
            </div>
        )
    }
}
