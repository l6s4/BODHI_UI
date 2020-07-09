import React, { Component } from 'react';
import './MenuBar.css'

class MenuBar extends Component {
    render() {
        return (
            <div className="menubar">
                <ul>
                    <li><a href="/userProfile">Profile</a></li>
                    <li><a href="/booking">Book Appointment</a></li>
                    <li><a href="/mybookings">My Bookings</a></li>
                    <li><a href="#contact">Notifications</a></li>
                    <li><a href="/logout">LogOut</a></li>
                </ul>
            </div>
        );
    }
}

export default MenuBar;