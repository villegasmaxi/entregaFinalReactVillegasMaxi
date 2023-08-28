import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <div className='container d-flex justify-content-center mt-5 mb-5'>
      <Spinner variant="danger" animation="border" size="sm" />
      <Spinner variant="warning" animation="border" size="lg"/>
      <Spinner variant="success"animation="grow" size="sm" />
      <Spinner variant="info" animation="grow" size="lg" />
    </div>
  );
}

export default Loader;