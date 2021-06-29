import React, { Component } from 'react';
import './Header.css';
import { DatePicker } from 'antd';
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
            <div className='inner'>
                <img className='logo' src={Logo} width={160} />
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="home">
                        <NavLink to="/home">Home</NavLink>   
                    </Menu.Item>
                    <Menu.Item key="business">
                    <NavLink to="/business">Business Outcomes</NavLink> 
                    </Menu.Item>
                    <SubMenu key="service" title="Services">
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1"><NavLink to="/services">Service1</NavLink></Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="solution">
                        <NavLink to="/solutions">Solutions</NavLink>   
                    </Menu.Item>
                    <Menu.Item key="about">
                        <NavLink to="/about-us">About us</NavLink>   
                    </Menu.Item>
                    <Menu.Item key="career">
                        <NavLink to="/Careers">Careers</NavLink>   
                    </Menu.Item>


                    {/* <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                    </a>
                    </Menu.Item> */}
                </Menu>
            </div>
        );
    }
}
