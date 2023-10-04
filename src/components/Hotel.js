import React, { useEffect, useState } from 'react';
import data from '../Data.json'
import Card from './Card';
// import './Hotel.css';

const Hotels = ({ selectedCity }) => {
  const [displayedRows, setDisplayedRows] = useState(2); // Initially display 2 rows (6 cards)

  useEffect(() => {
    setDisplayedRows(2);
  }, [selectedCity]);

  const handleShowMore = () => {
    setDisplayedRows((prevRows) => prevRows + 1); // Show 1 more row (3 more cards) each time
  };

  const filteredHotels = data.hotels.filter((hotel) => hotel.city === selectedCity);
  const totalCardsToDisplay = displayedRows * 3; // Each row displays 3 cards

  return (
    <div>
      <div className='row'>
        {filteredHotels.slice(0, totalCardsToDisplay).map((hotel, index) => {
          return (
            <div key={index} className='col-lg-4'>
              <Card 
              id={index} 
              name={hotel.name} 
              city={hotel.city} 
              room={hotel.room} 
              bed={hotel.bed} 
              bath={hotel.bath} 
              area={hotel.area} 
              price={hotel.price} 
              url={hotel.url} />
            </div>
          );
        })}
      </div>
      <div style={{margin:'10px 0 30px 0'}}>
      {filteredHotels.length > totalCardsToDisplay && (
        <button className='btn btn-primary' onClick={handleShowMore}>
          Show More
        </button>
      )}
      </div>
    </div>
  );
};

export default Hotels;

