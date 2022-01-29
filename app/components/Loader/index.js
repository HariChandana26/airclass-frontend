import React from 'react';
import loader from '../../images/loader.gif';

function Loader() {
  // eslint-disable-next-line
  return(
    <img
      alt="loader"
      src={loader}
      style={{
        width: '200px',
        margin: 'auto',
        display: 'block',
        alt: 'Loading',
      }}
    />
  );
}

export default Loader;
