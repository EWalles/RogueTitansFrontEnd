import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../../components/Navbar/Navbar';
function Edith() {
  let url="https://linktr.ee/angelscitadel";
  let element=<a href={url}>Edith Walles</a>;
  render (
    <div className="App">
        Edith Walles, gamer and budding Software Engineer. I have a fondness for rock music and older movies. Currently studying with General Assembly's Software Engineering Immerssive Bootcamp. You can find me at: {element}
    </div>
  );
}

export default Edith;
