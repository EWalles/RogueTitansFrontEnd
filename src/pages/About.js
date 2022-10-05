import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import Edith from "./about/Edith";
import Samim from "./about/Samim";
import Zach from "./about/Zach";
import Jayden from "./about/Jaden";

function About ( ) {
    return (
      <div className="Group">
        <span> </span>
        <Edith />
        <Jaden/>
        <Samim />
        <Zach />
      </div>
    );
  }
  
export default About;