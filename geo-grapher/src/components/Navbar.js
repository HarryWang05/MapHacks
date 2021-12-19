import React from "react"
import "../stylesheets/navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li class="nav-item">
                    <a>
                        Geo-Carter
                    </a>
                </li>

                <li>
                    <a>
                        News
                    </a>
                </li>

                <li>
                    <a>
                        Download
                    </a>
                </li>

                <li>
                    <a>
                        Game Info
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;