import React from 'react'
import '../styles/Navigation.css';

const Navigation = (props) => {
    return (
        <div>
            <nav>
                <ul className="headernav">
                    <li>Home</li>
                    <li>Register</li>
                    <li>Info</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation