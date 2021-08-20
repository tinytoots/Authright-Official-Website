import React, { Component } from 'react';
import advantage from './advantage/advantage';
import './home.css'
import Intro from './intro/intro'
import Advantage from './advantage/advantage'
import Services from './services/services'
import Solutions from './solutions/solutions'
import History from './history/history'
import Client from './clients/clients'
import CaseStudy from './case-study/caseStudy'
import CostomerComments from './costomerComments/costomerComments'
import BrandTrust from '../business/brand-trust/trust'

export default class home extends Component {
    render() {
        return (
            <div className='home-bg'>
                <Intro />
                <Client />
                <Advantage />
                <Services />
                {/* <Solutions /> */}
                {/* <History /> */}
                <CostomerComments />
                {/* <CaseStudy /> */}
                <BrandTrust />
                {/* <CaseStudy /> */}
            </div>
        )
    }
}
