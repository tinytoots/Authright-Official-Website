import React, { Component } from 'react'
import './business.css'
import BrandBox from './brand-box/box'
import BrandCard from './brand-card/card'


export default class business extends Component {
    render() {
        return (
            <div>
                <div className='career-bg'>
                    <h1 style={{marginBottom: 50}}>This is business page</h1>
                    <BrandBox />
                    <BrandCard />
                </div>
            </div>
        )
    }
}
