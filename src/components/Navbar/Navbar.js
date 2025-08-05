import React from 'react'
import './Navbar.css';

export default function Navbar(props) {
    return (
        <header>
            <div className="navbar">
                <div className="nav_content left">
                    <div className="nav-logo">
                        <div className="logo">
                            <i className="fa-solid fa-person-running" />
                        </div>
                        <div className="brand_name">
                            <span id="solid">FIND</span><span id="thin">MYGYM</span>
                        </div>
                    </div>
                    <div className="nav-search">
                        <input name='search' type="search" placeholder="Search" className='search-input' />
                        <div className="search-icon">
                            <i className="fa-solid fa-magnifying-glass" />
                        </div>
                    </div>
                </div>
                <div className="nav_content right">
                    <div className="userAddress">
                        <div className="userAddress-name" id="solid">
                            {props.location}
                        </div>
                        <div className="userAddress-change">
                            <i className="fa-solid fa-angle-down" />
                        </div>
                    </div>
                    <div className="login">
                        <button className="login-button">Sign In</button>
                    </div>
                </div>
            </div>
        </header >
    )
}

