import React, { Component } from 'react'
import './about.css'
import Leadership from './leadership/leadership'
import Intro from './intro/intro'

export default class about extends Component {
    render() {
        return (
            <div>
                <div className='career-bg'>
                    <Intro />
                    <div className="about-leadership">
                    <Leadership />
                    </div>
                </div>
            </div>
        )
    }
}
