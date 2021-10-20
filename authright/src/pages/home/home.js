import React, { Component } from 'react';
import './home.css'
import Intro from './intro/intro'
import Advantage from './advantage/advantage'
import Client from './clients/clients'
import CustomerComments from './costomerComments/costomerComments'
import BrandTrust from '../business/brand-trust/trust'

export default class home extends Component {
    render() {
        return (
            <div className='home-bg'>
                <Intro />
                <Client />
                <Advantage />
                <CustomerComments />
                <BrandTrust />
            </div>
        )
    }
}
