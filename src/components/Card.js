import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className='my-3'>
      <div className="card" style={{ borderRadius: '20px' }}>
        <div>
          <img src={props.url} height={250} className="card-img-top" alt="..." style={{ borderRadius: '30px', padding: '10px' }} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
            <p>{props.room} Room</p>
            <p>{props.bed} Bed</p>
            <p>{props.bath} Bath</p>
            <p>{props.area} sft</p>
          </div>
          <hr />
          <div style={{ height:'33px', display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
            <p>${props.price} /month</p>
            <p>{props.city}</p>
            <Link to={props.url} target="blank" className="btn btn-sm btn-primary"
              style={{ borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              Read More
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card
