import React from 'react';
import { render } from '@testing-library/react';
function Samim() {
  let url="https://www.linkedin.com/in/samim-kohistani-82615b24b/";
  let element=<a href={url}>Samim Kohistani</a>;
  render (
    <div className="App">
        samim kohistani ....................: {element}
    </div>
  );
}

export default Samim;