import React, { Component } from 'react';
import './MenuBar.css'
class MenuBar extends Component {
    render() {
        return (
            <div className="menubar">
                <ul>
                    <li><a className="active" href="#home">Profile</a></li>
                    <li><a href="#news">Appointments</a></li>
                    <li><a href="#contact">Notifications</a></li>
                    <li><a href="/login">LogOut</a></li>
                </ul>
            </div>
        );
    }
}

export default MenuBar;