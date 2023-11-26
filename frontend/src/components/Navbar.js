import React from "react";
import logo from "../img/logo192.png";
import "./Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/"><img className="homeIcon" src={logo}/></Link>
            <ul className="nav-menu">
                <Link to="/signup">
                <li>Sign Up</li>
                </Link>
                <Link to="/signin">
                <li>Sign In</li>
                </Link>
                <Link to="/profile">
                <li>Profile</li>
                </Link>
                <Link to="/createPost">
                <li>Create Post</li>
                </Link>
            </ul>
        </div>
    )
}