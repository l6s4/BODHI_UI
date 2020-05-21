import React from 'react';
import { NavLink } from 'react-router-dom';

import './MainNavigation.css';

const mainNavigation = props => (
    <header className="main-navigation">
        <div className="main-navigation__logo">
            <label style={{fontFamily:"Ubuntu", fontSize:33, fontWeight:1000, color: "green"}}>Bodhi</label>
        </div>
        <nav className="main-navigation__items">
            <ul>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    </header>
);

export default mainNavigation;