import React from 'react';
import './Card.css';

import RoundedImage from '../RoundedImage/RoundedImage';

export default function Card(props) {
  const { title, person, tag } = props

  return (
    <div className='card-wrapper'>
      <h1>{title}</h1>
      <div id='img-wrapper'>
        <RoundedImage person={person} />
        <p>{tag}</p>
      </div>
    </div>
  )
}
