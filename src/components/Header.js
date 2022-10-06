//Header.js
// import firebae.js
import {login, logout } from '../services/firebase';
// import {logo} from "public/gallery/logo.png"
import Navbar from "./Navbar/Navbar"

import React from "react"
import { Link, Route } from "react-router-dom"



function Header() {
    return (
        <nav className="nav">
            <Route>
            <Link to="/">
                    <div>The Rogue Tavern</div>
            </Link>
            {/* <div style={{display: 'flex'}}>
                <div
                onClick={login}
                style={{marginRight: 10}}>Login</div>
                <div
                onClick={logout}
                style={{marginRight: 10}}>Logout</div>

            </div> */}
            </Route>

        </nav>
    );
}

export default Header