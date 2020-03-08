import React from 'react';
import logo from "../../logo.svg"
import "./navbar.scss";

export default function Navbar(){
    return (
        <nav className="navbar">
            {/*<i class="fab fa-adobe iconn"></i>*/}
            {/*<ion-icon name="aperture"  class="iconn"></ion-icon>*/}
            <ion-icon src="/images/logo.svg"  class="iconn"></ion-icon>
            {/*<img src={logo} alt="city tours company" width="50" />*/}

            <ul className="nav-links">
                <li><a href="/"  className="nav-link">home</a></li>
                <li><a href="/"  className="nav-link">about</a></li>
                <li><a href="/"  className="nav-link active">tours</a></li>
            </ul>
        </nav>
    )
}