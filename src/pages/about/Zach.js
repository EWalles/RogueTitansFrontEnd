import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

function Zach() {
  let url="www.linkedin.com/in/zachgexler";
  let element=<a href={url}>GitHub</a>;
  return(
    <div className="App">
    <Navbar/>
        Zachary Gexler, a budding Software Engineer. Currently studying with General Assembly's Software Engineering Immerssive Bootcamp. You can find me at: {element}
    </div>
  );
}

export default Zach;
