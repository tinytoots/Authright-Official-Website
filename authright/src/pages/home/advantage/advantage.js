import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './advantage.css'

export default class advantage extends Component {
    render() {
        return (
            <div className='adv-bg'>
                <div className='tilte'>High Quality, Rapid Development, Customization</div>
                <div className='advan'>Whether you want to integrate IAM for your own system or need a high-quality development team to help you turn your ideas into reality, we can provide you with the reliable technical services</div>
                <NavLink to="/about-us">
                    <div className='unifiedcontrol-card-title'>
                        Learn more {">"}
                        <i className='approw-arrow-down-line arrow'></i>
                    </div>
                </NavLink>
            </div>
        )
    }
}
