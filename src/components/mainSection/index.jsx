import React, { Component } from 'react';
import { QuerySection } from './../querySection';
import UserDetails from '../userDetails';
import './mainSection.scss';

export default class MainSection extends Component {

    renderQuerySection = () => (
        <QuerySection />
    );

render(){
    return(
    <div className='main-section'>
        {this.renderQuerySection()}
        <UserDetails />
    </div>
    );
}
}