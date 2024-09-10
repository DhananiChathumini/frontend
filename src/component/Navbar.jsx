import React from "react";
import  './Navbar.css';
import home from '../assets/home.jpeg';
import profile from '../assets/profile.jpeg';
import game from '../assets/game.jpeg';
//import sun from '../assets/sun.jpeg';
//import moon from '../assets/moon.jpeg';
import setting from '../assets/settings.jpeg';
import logo from '../assets/logo.jpeg';

function Navbar() {
    return (
        <div className="navbar">

            <ul className="left-conor">
                <li>
                    <img src={logo} alt="Home Icon" className="icon"/>
                </li>
                <li>
                    <img src={home} alt="Home Icon" className="icon"/>
                </li>
                <li>
                    <img src={game} alt="Home Icon" className="icon"/>
                </li>

            </ul>
            <ul className="right-conor">
                <li>
                    <img src={profile} alt="Home Icon" className="icon"/>
                </li>

                <li>
                    <img src={setting} alt="Home Icon" className="icon"/>
                </li>
            </ul>
        </div>

    );

}
export default Navbar;