//Header.js
import { Link } from "react-router-dom"

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div>The Rogue Tavern</div>
            </Link>
            
        </nav>
    )
}

export default Header