import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useSelector } from 'react-redux'
import { selectartdata } from '../../Redux/Slices/Artdataslice'
import "../Paintings/Paintings.css"
const Paintings = () => {
  const data = useSelector(selectartdata)
  
  return (
    <div>
      <Navbar></Navbar>
      <div className='painting-container'>

      {data.map((subdata,index)=>(
        <div key={index} className='painting-card'>
          <img src={subdata.imageurl} alt='loading' height="auto" width="100%"/>
          <div className='painting-detail'>
            <div className='painting-name'>{subdata.artname}</div>
            <div className='artist-names'>Made by: {subdata.artistname}</div>
            <div className='about-painting'>{subdata.aboutpainting}</div>
          </div>
        </div>
      ))}

      </div>
      
    </div>
  )
}

export default Paintings