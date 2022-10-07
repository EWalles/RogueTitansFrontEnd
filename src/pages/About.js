import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Edith from "../components/about/Edith";
import Samim from "../components/about/Samim";
import Zach from "../components/about/Zach";
import Jaden from "../components/about/Jaden";

function About ( ) {
    return (
      <div className="Group">
        <Navbar/>
        <span> </span>
        <Edith />
        <Jaden/>
        <Samim />
        <Zach />
      </div>
    );
  }
  
export default About;