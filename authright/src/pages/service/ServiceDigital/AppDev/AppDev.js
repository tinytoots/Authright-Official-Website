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
                    <div className="inner">
                        <img src={Authright_logo} width={50} alt = 'logo' className='appDev-logo2'/>
                        <div className='appDev-design-dev-title1'>
                            App Development and Automation
                        </div>
                        <div className='appDev-content1'>
                            Looking for a custom software solution for your business? Our nimble software engineering
                        </div>
                        <div className='appDev-content2'>
                            team can provide a solution in a cost-effective and timely manner. Custom programming
                        </div>
                        <div className='appDev-content3'>
                            can bring to life a solution that works for your particular problem.
                        </div>
                    </div>
                </div>
                <div className='IAM-Intro-bg2'>
                <div className="inner">
                        <img src={MobileAppImg} width={210} alt = 'logo' className='appDev-logo'/>
                        <div className='mobile-content-position'>
                            <div className='appDev-design-dev-title'>
                                Mobile app development
                            </div>
                            <div className='appDev-content1'>
                                We build the product using the best practices and latest
                            </div>
                            <div className='appDev-content2'>
                                technologies available for iOS and Android.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='IAM-Intro-bg'>
                    <div className="inner">
                        <img src={IotImg} width={270} alt = 'logo' className='appDev-IoT-logo'/>
                        <div className='responsive-content-position'>
                            <div className='appDev-design-dev-title'>
                                IoT User Experience
                            </div>
                            <div className='appDev-content1'>
                                AuthRight’s strong background in IoT security technology
                            </div>
                            <div className='appDev-content2'>
                                combined with our user-focused design will help you design and
                            </div>
                            <div className='appDev-content3'>
                                build robust connected products that customers will love.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='IAM-Intro-bg2'>
                <div className="inner">
                        <img src={Prototyping} width={600} alt = 'logo' className='appDev-prototyping-logo'/>
                            <div className='prototyping-content-position'>
                            <div className='appDev-design-dev-title'>
                                Prototyping
                            </div>
                            <div className='appDev-content1'>
                                AuthRight rapidly builds and tests concepts to answer
                            </div>
                            <div className='appDev-content2'>
                                questions without wasting valuable development time.
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}