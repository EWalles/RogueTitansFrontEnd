//Header.js
import { Link } from "react-router-dom"
import {logo} from "public/gallery/logo.png"

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div>{logo}</div>
                <div>The Rogue Tavern</div>
            </Link>
            
        </nav>
    )
}

export default Header