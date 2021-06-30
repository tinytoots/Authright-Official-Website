import React, { Component } from 'react';
import './intro.css';
import { Divider } from 'antd';
import BostonBg from '../../../img/boston.jpg';

// var bgImg = {
//     width: '100%',
//     backgroundImage: `url(${BostonBg})` 
// }

export default class intro extends Component {
    render() {
        return (
            <div className='intro-bg'>
                <h1 />
                <div className='company-title'>
                    AUTHRIGHT
                </div>
                <div className='gray-lane' />
                <div className='company-content1'>
                    An Innovative Service Company 
                </div>
                <div className='company-content2'>
                    Consulting, Solutions, Training
                </div>
            </div>
        )
    }
}
