import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'; 

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>this is header</h1>
                <DatePicker />
            </div>
        )
    }
}
