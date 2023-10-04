import React from 'react';
import Hotels from './Hotel';

const Home = ({ selectedCity }) => {
  return (
    <div style={{marginTop:'30px'}}>
      <Hotels selectedCity={selectedCity} />
    </div>
  );
};

export default Home;
