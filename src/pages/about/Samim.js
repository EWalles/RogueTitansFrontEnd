import React from 'react';
import { render } from '@testing-library/react';

function Samim() {
  let url="###";
  let element=<a href={url}>Github handle</a>;
  render (
    <div className="App">
        samim kohistani ....................: {element}
    </div>
  );
}

export default Samim;