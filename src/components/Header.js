//Header.js
import React from "react"
import { Link, Route } from "react-router-dom"

function Header() {
    return (
        <nav className="nav">
            <Route>
                <Link to="/">
                    <div>The Rogue Tavern</div>
                </Link>
            </Route>
        </nav>
    )
}

export default Header