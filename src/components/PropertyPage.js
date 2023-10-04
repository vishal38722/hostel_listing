import React from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';
import data from '../Data.json';

const PropertyPage = () => {
  const { id } = useParams();  // Get the property ID from the URL

  const property = data.hotels[id];  // Assuming data.hotels is an array

  return (
    <div>
      {property && (
        <div className='col-lg-4'>
          <Card
            id={id}
            name={property.name}
            city={property.city}
            room={property.room}
            bed={property.bed}
            bath={property.bath}
            area={property.area}
            price={property.price}
            // url={property.url}
            url={process.env.PUBLIC_URL + property.url}
          />
        </div>
      )}
    </div>
  );
}

export default PropertyPage;
