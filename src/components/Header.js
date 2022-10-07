import React, { Component }  from 'react';
import { Route } from 'react-router-dom';

function Header(props) {
    return (
        <nav className="nav">
            <Route to="/">
                <div>Teveron</div>
            </Route>
        </nav>
    );
}

export default Header;