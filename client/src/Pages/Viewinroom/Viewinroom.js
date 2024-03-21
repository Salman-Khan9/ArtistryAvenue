import React from 'react'
import { useParams } from 'react-router-dom'
import "../Viewinroom/viewinroom.css"

const Viewinroom = () => {
  const { imageUrl } = useParams()

  return (
    <div className='roomimage-container'>
      <span className='roomimage'></span>
      <div className='painting-container'>
        <img className='painting' src={imageUrl} alt='loading' />
      </div>
    </div>
  )
}

export default Viewinroom