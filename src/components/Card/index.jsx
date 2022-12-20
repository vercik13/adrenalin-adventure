import React from 'react';

import star from '../../assets/Star 1.png';
import './card.css'


const Card = ({item}) => {

  let badgeText 
  if (item.openSpots === 0 ) {
    badgeText = "SOLD OUT"
  } else if (item.price < 200) {
    badgeText = "SALE"
  }

  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img src={item.coverImg} alt="" className='card--img'/>
      <div className='card--stats'>
        <img src={star} alt="" />
        <span>&nbsp;{item.stats.rating}&nbsp;</span>
        <span className='gray'>{item.stats.reviewCount}&nbsp;•&nbsp;</span>
        <span className='gray'>{item.location}</span>
      </div>
      <p>{item.title}</p>
      <p><span className='bold'>From ${item.price}</span> / person</p>
    </div>
  )
}

export default Card