import React, { Component } from 'react'
// import PropTypes from 'prop-types';

import './userDetails.scss'

export  class UserDetails extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        return (
            <div className="container">
                <div className="user_details__main">
                    <div className="avatar__container">
                        <img
                            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                            alt="Profile placeholder"
                            className="avatar"/>
                    </div>
                    <div className="user_details">
                        <div className="user_name">Tonida Baraza</div>
                        <div className="user_email">tonidabarasa@gmail.com</div>
                        <div className="user_bamboo_id">2001</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetails;