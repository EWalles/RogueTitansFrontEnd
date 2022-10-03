//Header.js
import React from "react"
import { Link, Router } from "react-router-dom"

function Header() {
    return (
        <nav className="nav">
            <Router>
                <Link to="/">
                    <div>The Rogue Tavern</div>
                </Link>
            </Router>
        </nav>
    )
}

export default Header