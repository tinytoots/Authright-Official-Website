import React, { Component } from 'react'
import './about.css'
import Leadership from './leadership/leadership'
import Intro from './intro/intro'
import Culture from './culture/culture'

export default class about extends Component {
    render() {
        return (
            <div>
                <div className='career-bg'>
                    <Intro />
                    <Culture />
                    <div className="about-leadership">
                    <Leadership />
                    </div>

                </div>
            </div>
        )
    }
}
