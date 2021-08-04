import React, { Component } from 'react'
import './about.css'
import Leadership from './leadership/leadership'
import Intro from './intro/intro'

export default class about extends Component {
    render() {
        return (
            <div>
                <div className=''>
                    <Intro />
                    <div className="about-leadership">
                        <div className="inner">
                            <div className="about-leadership-position">
                                <Leadership />   
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
        )
    }
}
