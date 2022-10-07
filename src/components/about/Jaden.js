import React from 'react';
import { render } from '@testing-library/react';
function Jaden() {
  let url="https://www.linkedin.com/in/jaden-garrity-96b33185/";
  let element=<a href={url}>Jaden Garrity</a>;
  render (
    <div className="App">
      Hello! my name is Jaden Garrity. With a prior background in design and creativity, i am currently working to become a Frontend developer! You can find me at: {element}
    </div>
  );
}

export default Jaden;