import React, { Component } from 'react';
import './intro.css';
import { Divider } from 'antd';
import 'antd/dist/antd.css';
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
                <div className='company-name-title'>
                    AUTHRIGHT
                </div>
                <div className='gray-lane-intro'></div>
                <div className='company-name-content1'>
                    An Innovative Service Company 
                </div>
                <div className='company-name-content2'>
                    Consulting, Solutions, Training
                </div>
            </div>
        )
    }
}
