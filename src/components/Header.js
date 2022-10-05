//Header.js
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
                <div>

                </div>
            </Route>

        </nav>
    )
}

export default Header