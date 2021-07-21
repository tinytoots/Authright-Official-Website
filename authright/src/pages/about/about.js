import React, { Component } from 'react'
import './about.css'
import Leadership from './leadership/leadership'

export default class about extends Component {
    render() {
        return (
            <div>
                <div className='career-bg'>
                    <h1>This is about us page</h1>
                    <h1>This is about us page</h1>
                    <Leadership />

                </div>
            </div>
        )
    }
}
