//Header.js
// import firebae.js
import {login, logout } from '../services/firebase';
// import {logo} from "public/gallery/logo.png"
import Navbar from "./Navbar/Navbar"

import React from "react"
import { Link, Route } from "react-router-dom"



function Header() {
    return (
        <Navbar/>
    );
}

export default Header