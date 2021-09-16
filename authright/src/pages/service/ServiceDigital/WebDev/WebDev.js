import React, { Component } from 'react'
import ResponsiveImg from '../../../../img/resonsive-design-img.svg'
import BudgetImg from '../../../../img/definition-budget-img.svg'
import TrainingImg from '../../../../img/training.svg'
import Authright_logo from '../../../../img/Authright_greyer.png'
import './WebDev.css'

const style = { background: '#141414', padding: '100px 0' };

export default class WebDev extends Component {
    render() {
        return (
            <div className='IAM-bg'>
                <div className='IAM-Intro-webiste-bg'>
                    <div className="inner">
                        <img src={Authright_logo} width={50} alt = 'logo' className='webDev2-logo'/>
                            <div className='webDev-design-dev-title2'>
                                Website Design and Development
                            </div>
                            <div className='webDev-content1'>
                                Want to add a website for your business but don’t know where to start?
                            </div>
                            <div className='webDev-content2'>
                                From choosing a domain name to figuring out what infrastructure works
                            </div>
                            <div className='webDev-content3'>
                                best – We’ll guide you along the way and do the heavy lifting.
                            </div>
                    </div>
                </div>
                <div className='IAM-Intro-bg2'>
                    <div className="inner"> 
                        <img src={ResponsiveImg} width={550} alt = 'logo' className='webDev-responsive-logo2'/>
                        <div className="responsive-content-position">
                            <div className='webDev-design-dev-title3'>
                                Responsive Design &
                            </div>
                            <div className='webDev-design-dev-titleline2'>
                                Development
                            </div>
                            <div className='webDev-content1'>
                                Our professional services ensure that design is being applied
                            </div>
                            <div className='webDev-content2'>
                                consistently across the project, and delivers to the client a
                            </div>
                            <div className='webDev-content3'>
                                reusable, extensible, and device agnostic system for our
                            </div>
                            <div className='webDev-content3'>
                                clients to use on future projects.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='IAM-Intro-bg'>
                    <div className="inner"> 
                        <img src={TrainingImg} width={550} alt = 'logo' className='know-training-logo'/>
                        <div className="responsive-content-position2">
                            <div className='webDev-design-dev-title'>
                                Knowledge & experience 
                            </div>
                            <div className='webDev-design-dev-titleline2'>
                                training
                            </div>
                            <div className='webDev-content1'>
                                Our training team ensures that a client’s team can move the
                            </div>
                            <div className='webDev-content2'>
                                design system forward when AuthRight’s engagement ends.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='IAM-Intro-bg2'>
                <div className="inner">
                        <img src={BudgetImg} width={550} alt = 'logo' className='webDev-logo'/>
                        <div className="responsive-content-position">
                            <div className='webDev-design-dev-title'>
                                Definition of performance
                            </div>
                            <div className='webDev-design-dev-titleline2'>
                                budget
                            </div>
                            <div className='webDev-content1'>
                                AuthRight helps ensure that the end result will provide
                            </div>
                            <div className='webDev-content2'>
                                client’s users with the best experience possible.
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
        )
    }
}