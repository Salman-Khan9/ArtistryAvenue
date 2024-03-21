import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'; // assuming Navbar.css contains your styling

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <Link style={{ textDecoration: "none",color:"black" }} to="/">ArtistryAvenue</Link>
      </div>
      <ul className='list'>
        <li className='tags'><Link style={{ textDecoration: "none" ,color:"black" }} to="/">HOME</Link></li>
        <li className='tags'><Link style={{ textDecoration: "none" ,color:"black" }} to="/Paintings">PAINTINGS</Link></li>
        <li className='tags'><Link style={{ textDecoration: "none" ,color:"black" }} to="/Artist">ARTISTS</Link></li>
      </ul>
      
    </div>
  )
}

export default Navbar;
