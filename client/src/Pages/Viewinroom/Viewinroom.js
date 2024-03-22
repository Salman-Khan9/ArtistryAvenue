import React from 'react'
import { useParams } from 'react-router-dom'
import "../Viewinroom/viewinroom.css"
import roomimage from "../../images/viewinroom.png"
const Viewinroom = () => {
  const { imageUrl } = useParams()

  return (
    <div className='viewimage-body'>
    <div className='roomimage-container'>
      <img className='roomimage' src={roomimage}/>
        <img className='painting' src={imageUrl} alt='loading' />
        </div>
    </div>
  )
}

export default Viewinroom