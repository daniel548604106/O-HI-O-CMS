import React from 'react';

const Loader = () => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      position: 'fixed',
      zIndex: '50',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    Loading...
  </div>
);

export default Loader;
