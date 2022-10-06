import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Edith from "./about/Edith";
import Samim from "./about/Samim";
import Zach from "./about/Zach";
import Jaden from "./about/Jaden";

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