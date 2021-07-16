import React, { Component } from 'react'
import MacImg from '../../../../img/digital-mac.png'
import { Row, Col} from 'antd';
import Consulting from '../../../../img/consulting.svg';
import Design from '../../../../img/design.svg';
import Integration from '../../../../img/Integration.svg'
import Support from '../../../../img/support.svg'
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
                <div className='IAM-Intro-bg2'>
                    <img src={ResponsiveImg} width={550} alt = 'logo' className='webDev-logo'/>
                    <div className='webDev-design-dev-title'>
                        Responsive Design &
                    </div>
                    <div className='webDev-design-dev-titleline2'>
                        Development
                    </div>
                    <div className='webDev-content1'>
                        Our professional services ensure that design is being applied consistently
                    </div>
                    <div className='webDev-content2'>
                        across the project, and delivers to the client a reusable, extensible, and device
                    </div>
                    <div className='webDev-content3'>
                        agnostic system for our clients to use on future projects.
                    </div>
                </div>
                <div className='IAM-Intro-bg'>
                    <img src={TrainingImg} width={550} alt = 'logo' className='know-training-logo'/>
                    <div className='webDev-design-dev-title'>
                        Knowledge and experience 
                    </div>
                    <div className='webDev-design-dev-titleline2'>
                        training
                    </div>
                    <div className='webDev-content1'>
                        Our training team ensures that a client’s team can move the design system
                    </div>
                    <div className='webDev-content2'>
                        forward when AuthRight’s engagement ends.
                    </div>
                </div>
                <div className='IAM-Intro-bg2'>
                    <img src={BudgetImg} width={550} alt = 'logo' className='webDev-logo'/>
                    <div className='webDev-design-dev-title'>
                        Definition of performance
                    </div>
                    <div className='webDev-design-dev-titleline2'>
                        budget
                    </div>
                    <div className='webDev-content1'>
                        AuthRight helps ensure that the end result will provide client’s users with
                    </div>
                    <div className='webDev-content2'>
                        the best experience possible.
                    </div>
                </div>      
            </div>
        )
    }
}