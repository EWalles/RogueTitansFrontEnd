import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

function Edith() {
  let url="https://linktr.ee/angelscitadel";
  let element=<a href={url}>LinkedIn handle</a>;
  render (
    <div className="App">
        Edith Walles, gamer and budding Software Engineer. I have a fondness for rock music and older movies. Currently studying with General Assembly's Software Engineering Immerssive Bootcamp. You can find me at: {element}
    </div>
  );
}

export default Edith;
