import React, { useEffect } from 'react'
import axios from "axios"
import "../Home/Home.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux'
import { selectartdata, set_artdata } from '../../Redux/Slices/Artdataslice'
import Card from '../../Components/Card/Card'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]}
const Home = () => {
  const dispatch = useDispatch()
const backendurl = process.env.REACT_APP_BACKEND_URL
  useEffect(() => {
    const fetchdata =async()=>{
      try {
        const data = await axios.get(`http://localhost:5000/art`,{withCredentials:true})
        dispatch(set_artdata(data.data))
      } catch (error) {
        console.log(error)
      }
    }
  fetchdata()
    
  }, [backendurl,dispatch])
  const Artdata = useSelector(selectartdata)
  console.log(Artdata)
  return (
    <div>
      <Navbar></Navbar>
    <h2 className='heading-1'>Featured Paintings</h2>
    <Slider {...settings}>
      {Artdata.map((data, index) => (
        <div key={index}>
          <Card artistname={data.artistname} artname={data.artname} imageurl={data.imageurl} />
        </div>
      ))}
    </Slider>
    <Footer></Footer>
  </div>
  )
}

export default Home