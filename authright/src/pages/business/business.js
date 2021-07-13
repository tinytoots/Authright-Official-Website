import React, { Component } from 'react'
import './business.css'
import BrandBox from './brand-box/box'
import BrandCard from './brand-card/card'
import ExpandCard from './brand-expandCard/expandCard'
import UnderLine from '../../img/Underline.svg';


export default class business extends Component {
    render() {
        return (
            <div>
                <div className='business-bg'>
                    <div className="businessOutcome-title1">We save a lot of money</div>
                    <div className="businessOutcome-title2">for many of the world's</div>
                    <div className="businessOutcome-title2">top 500 companies</div>
                    <img className='businessOutcome-underline-img' src={UnderLine} width={245} />
                    <BrandBox />
                    <BrandCard />
                    <ExpandCard />
                </div>
            </div>
        )
    }
}
