import React from 'react'
import star from '../images/star.png'

function Card(props) {

  let badgeText;
  if (props.openSpots === 0){
    badgeText = "SOLD OUT";
  }else if (props.location === "Online"){
    badgeText = "ONLINE";
  }

  return (
    <div className='card'>
        {badgeText && <div className="badge">{badgeText}</div>}
        <img src={props.coverImg} alt="card" className='card-img'></img>
        <div className='state'>
            <img src={star} alt="star" className='star'></img>
            <span>{props.stats.rating}</span>
            <span className='gray'> ({props.stats.reviewCount}) . </span>
            <span className='gray'> {props.location}</span>
        </div>
        <p className='text'>{props.title}</p>
        <p className='price'><span className='bold'>From ${props.price}</span> / person</p>
    </div>
  )
}


export default Card;