import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import axios from 'axios';
import Footer from '../../Components/Footer/Footer';
import './Artist.css'; // Import CSS file for component styling

const Artist = () => {
  const backendurl = process.env.REACT_APP_BACKEND_URL

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendurl}/artist`, { withCredentials: true });
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [backendurl]);

  return (
    <div>
      <Navbar />

      <div className="artist-container">
        {data.map((artist, index) => (
          <div key={index} className="artist-card">
            <img className="artist-image" src={artist.imageurl} alt="Loading..." />
            <div className="artist-details">
              <div className="artist-name">{artist.artistname}</div>
              <div className="artist-info">{artist.Dob}</div>
              <div className="about-artist">{artist.aboutartist}</div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Artist;
