import React, { Component } from 'react'
import './intro.css'

export default class intro extends Component {
    render() {
        return (
            <div className='about-intro-bg'>
                <div className='career-company-title'>
                    About Authright
                    {/* <div className='gray-lane' /> */}
                </div>
                <div className='career-company-intro'>
                    AuthRight Technology provide you with high quality IT consulting services, we have deep experience in cloud storage, identity management, systems integration, you can bring fast, efficient and safe solution.
                </div>




                <div className='career-company-content1'>
                    An Innovative Service Company 
                </div>
                <div className='career-company-content2'>
                    Consulting, Solutions, Training
                </div>
            </div>
        )
    }
}
