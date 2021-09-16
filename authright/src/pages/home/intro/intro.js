import React, { Component } from 'react';
import './intro.css';
import 'antd/dist/antd.css';

export default class intro extends Component {
    render() {
        return (
            <div className='intro-bg' style={{minWidth: 1200}}>
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
