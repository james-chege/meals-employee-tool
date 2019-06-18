import React, { Component } from 'react';
import { QuerySection } from './../querySection';
import './mainSection.scss';

export default class MainSection extends Component {

    

    renderQuerySection = (data) => (
        <QuerySection data={data}/>
    );

render(){
    const data = this.props.data;
    return (
    <div className='main-section'>
        {this.renderQuerySection(data)}
    </div>
    );
}
}