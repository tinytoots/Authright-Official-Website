import React, { Component } from 'react'
import './career.css'
import IAM from './careersIam/careersIam'
import FullStack from './careersFullStack/careersFullStack'

export default class career extends Component {
    render() {
        return (
            <div>
                 <div className='career-bg'>
                    <IAM />
                </div>
            </div>
        )
    }
}
