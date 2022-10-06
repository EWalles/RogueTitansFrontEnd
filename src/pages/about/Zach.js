import React from 'react';

function Zach() {
  let url="www.linkedin.com/in/zachgexler";
  let element=<a href={url}>Zachary Gexler</a>;
  return(
    <div className="App">
        Zachary Gexler, a budding Software Engineer. Currently studying with General Assembly's Software Engineering Immerssive Bootcamp. You can find me at: {element}
    </div>
  );
}

export default Zach;
