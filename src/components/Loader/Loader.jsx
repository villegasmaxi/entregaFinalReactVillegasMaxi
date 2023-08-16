import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <div className='container d-flex justify-content-center mt-5 mb-5'>
      <Spinner animation="border" size="sm" />
      <Spinner animation="border" />
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
    </div>
  );
}

export default Loader;