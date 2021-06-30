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


export default class home extends Component {
    render() {
        return (
            <div className='inner'>
                <Intro />
                <Advantage />
                <Services />
                <Solutions />
                <History />
                <Client />
                <CaseStudy />
            </div>
        )
    }
}
