import { Link } from "react-router-dom";

// STYLES
import "../components/Navbar.css";

export default function Navbar() {
    return (<>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Catalog">Movies</Link></li>
        </ul>
    </>)
}