import React, { Component } from 'react'
import './clients.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../../img/Logo.png'
import Blue_Cross from '../../../img/blue-cross-blue-shield-1.svg'
import HSBC from '../../../img/hsbc-1.svg'
import Deloitte from '../../../img/deloitte-2.svg'
import Toyota from '../../../img/toyota-1.svg'
import HomeDepot from '../../../img/the-home-depot.svg'
import Equifax from '../../../img/equifax.svg'
import Mohawk from '../../../img/mohawk-industries-logo.svg'
import Lowes from '../../../img/lowe-s-5.svg'
import Pearson from '../../../img/pearson-logo.svg'
import Homesite from '../../../img/homesite-insurance-vector-logo.svg'

export default class clients extends Component {
    render() {
        return (
            <div className='clients-bg2'>
                <div className='clients-bg'>
                    <NavLink to="/home">
                            <img className='logo' src={HSBC} width={160} alt = 'logo' className='hsbc-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Blue_Cross} width={160} alt = 'logo' className='blue-cross-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Deloitte} width={160} alt = 'logo' className='deloitte-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Toyota} width={160} alt = 'logo' className='toyota-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={HomeDepot} width={160} alt = 'logo' className='homeDepot-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Equifax} width={160} alt = 'logo' className='equifax-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Mohawk} width={160} alt = 'logo' className='mohawk-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Lowes} width={160} alt = 'logo' className='lowes-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Pearson} width={160} alt = 'logo' className='pearson-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={HSBC} width={160} alt = 'logo' className='hsbc-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Blue_Cross} width={160} alt = 'logo' className='blue-cross-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Deloitte} width={160} alt = 'logo' className='deloitte-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Toyota} width={160} alt = 'logo' className='toyota-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={HomeDepot} width={160} alt = 'logo' className='homeDepot-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Equifax} width={160} alt = 'logo' className='equifax-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Mohawk} width={160} alt = 'logo' className='mohawk-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Lowes} width={160} alt = 'logo' className='lowes-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Pearson} width={160} alt = 'logo' className='pearson-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={HSBC} width={160} alt = 'logo' className='hsbc-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Blue_Cross} width={160} alt = 'logo' className='blue-cross-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Deloitte} width={160} alt = 'logo' className='deloitte-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Toyota} width={160} alt = 'logo' className='toyota-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={HomeDepot} width={160} alt = 'logo' className='homeDepot-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Equifax} width={160} alt = 'logo' className='equifax-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Mohawk} width={160} alt = 'logo' className='mohawk-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Lowes} width={160} alt = 'logo' className='lowes-logo'/>
                    </NavLink>
                    <NavLink to="/home">
                            <img className='logo' src={Pearson} width={160} alt = 'logo' className='pearson-logo'/>
                    </NavLink>
                    


                    

                    {/* <NavLink to="/home">
                            <img className='logo' src={Homesite} width={160} alt = 'logo' className='customer-logo'/>
                    </NavLink> */}
                    {/* <h1>This is clients part</h1> */}
                </div>
            </div>
        )
    }
}
