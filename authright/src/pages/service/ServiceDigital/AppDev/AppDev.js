import React, { Component } from 'react'
import AppImg from '../../../../img/digital-app.png'
import './AppDev.css'
import MobileAppImg from '../../../../img/mobile-app.svg'
import IotImg from '../../../../img/IoT.svg'
import Prototyping from '../../../../img/prototyping-img.svg'
import Authright_logo from '../../../../img/Authright_greyer.png'

const style = { background: '#141414', padding: '100px 0' };

export default class AppDev extends Component {
    render() {
        return (
            <div className='IAM-bg'>
                <div className='IAM-Intro-bg'>
                    <img src={Authright_logo} width={50} alt = 'logo' className='appDev-logo2'/>
                    <div className='appDev-design-dev-title1'>
                        App Development and Automation
                    </div>
                    <div className='appDev-content1'>
                        Looking for a custom software solution for your business? Our nimble software engineering team
                    </div>
                    <div className='appDev-content2'>
                        can provide a solution in a cost-effective and timely manner. Custom programming 
                    </div>
                    <div className='appDev-content3'>
                        can bring to life a solution that works for your particular problem.
                    </div>
                </div>
                <div className='IAM-Intro-bg2'>
                    <img src={MobileAppImg} width={230} alt = 'logo' className='appDev-logo'/>
                    <div className='appDev-design-dev-title'>
                        Mobile app development
                    </div>
                    <div className='appDev-content1'>
                        We build the product using the best practices and latest technologies
                    </div>
                    <div className='appDev-content2'>
                        available for iOS and Android.
                    </div>
                </div>
                <div className='IAM-Intro-bg'>
                    <img src={IotImg} width={270} alt = 'logo' className='appDev-IoT-logo'/>
                    <div className='appDev-design-dev-title'>
                        IoT User Experience
                    </div>
                    <div className='appDev-content1'>
                        AuthRight’s strong background in IoT security technology combined 
                    </div>
                    <div className='appDev-content2'>
                        with our user-focused design will help you design and build 
                    </div>
                    <div className='appDev-content3'>
                        robust connected products that customers will love.
                    </div>
                </div>
                <div className='IAM-Intro-bg2'>
                    <img src={Prototyping} width={600} alt = 'logo' className='appDev-prototyping-logo'/>
                    <div className='appDev-design-dev-title'>
                        Prototyping
                    </div>
                    <div className='appDev-content1'>
                        AuthRight rapidly builds and tests concepts to answer questions
                    </div>
                    <div className='appDev-content2'>
                        without wasting valuable development time.
                    </div>
                </div>
                
            </div>
        )
    }
}