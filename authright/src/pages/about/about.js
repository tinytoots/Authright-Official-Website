import React, { Component } from 'react'
import ExpandCard from './expandCard/expandCard'

export default class about extends Component {
    render() {
        return (
            <div>
                <div className='career-bg'>
                    <h1>This is about us page</h1>
                    <ExpandCard />
                </div>
            </div>
        )
    }
}
