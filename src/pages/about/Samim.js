import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../../components/Navbar/Navbar';
function Samim() {
  let url="###";
  let element=<a href={url}>Github handle</a>;
  render (
    <div className="App">
      <Navbar/>
        samim kohistani ....................: {element}
    </div>
  );
}

export default Samim;