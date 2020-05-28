import React from 'react';
import './MainNavigation.css';

const mainNavigation = props => (
    <header className="main-navigation">
        <div className="main-navigation__logo">
            <label style={{fontFamily:"Ubuntu", fontSize:33, fontWeight:1000, color: "green"}}>Bodhi</label>
        </div>
    </header>
);

export default mainNavigation;