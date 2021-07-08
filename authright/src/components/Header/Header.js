import React, { Component } from 'react';
import './Header.css';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom'
import 'antd/dist/antd.css'; 
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import Logo from '../../img/Logo.png'

const { SubMenu } = Menu;

export default class Header extends Component {
    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };

    render() {
        const { current } = this.state;
        return (
            <div className='inner1'>
                <div className='inner2'>
                    <NavLink to="/home">
                        <img className='logo' src={Logo} width={160} />
                    </NavLink>
                    <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                        <Menu.Item key="home">
                            <NavLink to="/home" style={{color: '#8e8e93', textDecoration: 'none'}} activeStyle={{color: '#d1d1d6', textDecoration: 'none'}}>Home</NavLink>   
                        </Menu.Item>
                        <Menu.Item key="business">
                        <NavLink to="/business" style={{color: '#8e8e93', textDecoration: 'none'}} activeStyle={{color: '#d1d1d6', textDecoration: 'none'}}>Business Outcomes</NavLink> 
                        </Menu.Item>
                        <SubMenu key="service" title="Services" style={{color: '#8e8e93', textDecoration: 'none'}} activeStyle={{color: '#d1d1d6', textDecoration: 'none'}}>
                            <Menu.Item key="setting:1"><NavLink to="/services_iam">IAM</NavLink></Menu.Item>
                            <Menu.Item key="setting:2"><NavLink to="/services">Digital Service</NavLink></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="solution">
                            <NavLink to="/solutions" style={{color: '#8e8e93', textDecoration: 'none'}} activeStyle={{color: '#d1d1d6', textDecoration: 'none'}}>Solutions</NavLink>   
                        </Menu.Item>
                        <Menu.Item key="about">
                            <NavLink to="/about-us" style={{color: '#8e8e93', textDecoration: 'none'}} activeStyle={{color: '#d1d1d6', textDecoration: 'none'}}>About us</NavLink>   
                        </Menu.Item>
                        <Menu.Item key="career">
                            <NavLink to="/Careers" style={{color: '#8e8e93', textDecoration: 'none'}} activeStyle={{color: '#d1d1d6', textDecoration: 'none'}}>Careers</NavLink>   
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        );
    }
}
