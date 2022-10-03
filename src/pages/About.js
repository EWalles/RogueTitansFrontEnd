import React, { PureComponent } from 'react';

import Edith from "./about/Edith";
import Samim from "./about/Samim";
import Zach from "./about/Zach";
import Jayden from "./about/Jayden";

function About (props) {
    return (
      <div className="Group">
        <span> </span>
        <Edith />
        <Jayden/>
        <Samim />
        <Zach />
      </div>
    );
  }
  
export default About;