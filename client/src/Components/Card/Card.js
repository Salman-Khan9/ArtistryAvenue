import React from 'react'
import "../Card/card.css"
import { Link } from 'react-router-dom'
const Card = ({artistname,artname,imageurl}) => {
  const encodedImageUrl = encodeURIComponent(imageurl)
  return (
    <div className='card'>
        <img src={imageurl} alt='Loading' height="200px" width="200px" />
       <div className='about-painting'>{artname} made by {artistname}</div>
       <Link className='view-in-room' to={`/viewinroom/${encodedImageUrl}`}>
        View in Room
      </Link>
    </div>
  )
}

export default Card