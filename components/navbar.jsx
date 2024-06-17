import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isResponsive, setIsResponsive] = useState(false);

    const toggleResponsive = () => {
        setIsResponsive(!isResponsive);
    };

    return (
        <div className={`navbar ${isResponsive ? 'responsive' : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/commercial">Commercial</Link>
            <Link to="/residential">Residential</Link>
            <Link to="/add-property">Add Property</Link>
            <Link to="/login">Login</Link>
            <a href="javascript:void(0);" className="icon" onClick={toggleResponsive}>
                &#9776;
            </a>
        </div>
    );
}

export default Navbar;