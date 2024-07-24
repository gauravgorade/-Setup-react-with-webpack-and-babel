import React, { FC } from 'react'
import { Link } from 'react-router-dom';

const Nav: FC = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li> <Link to="/resume" className="nav-link">Resume</Link></li>
            </ul>
        </nav>
    )
}

export default Nav 