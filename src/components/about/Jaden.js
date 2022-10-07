import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../../components/Navbar/Navbar';
function Jaden() {
  let url="https://linktr.ee/angelscitadel";
  let element=<a href={url}>LinkedIn handle</a>;
  render (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default Jaden;
