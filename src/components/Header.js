//Header.js
<<<<<<< HEAD
import { Link } from "react-router-dom"
import {logo} from "public/gallery/logo.png"
=======
import React from "react"
import { Link, Route } from "react-router-dom"
>>>>>>> 13455c3e6e90d17ce8a3315bfdfb89d5de430946

function Header() {
    return (
        <nav className="nav">
<<<<<<< HEAD
            <Link to="/">
                <div>{logo}</div>
                <div>The Rogue Tavern</div>
            </Link>
            
=======
            <Route>
                <Link to="/">
                    <div>The Rogue Tavern</div>
                </Link>
            </Route>
>>>>>>> 13455c3e6e90d17ce8a3315bfdfb89d5de430946
        </nav>
    )
}

export default Header