import React, { Component } from 'react'
// import './business.css'
import BrandBox from './brand-box/box'


export default class business extends Component {
    render() {
        return (
            <div>
                <div className='career-bg'>
                    <h1>This is business page</h1>
                    <BrandBox />
                </div>
            </div>
        )
    }
}
