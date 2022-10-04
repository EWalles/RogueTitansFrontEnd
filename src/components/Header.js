//Header.js
import React from "react"
import { Link, Route } from "react-router-dom"
import Navbar from "./Nav"

function Header() {
    return (
        <nav className="nav">
            <Route>
            <Link to="/">
                    <div>The Rogue Tavern</div>
            </Link>
                <div>
                    <Navbar />
                </div>
            </Route>
        </nav>
    )
}

export default Header