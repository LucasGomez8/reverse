import React from 'react';
import {Link} from "react-router-dom";
import "../assets/css/navbar.scss";

export default function Navbar() {
  return (
    <div>
        <nav className='navbar'>
            <div className='nav-item'>
                <div className='nav-item__logo'>
                    <h2><Link to='/'>Home</Link></h2>
                    <input type="text" id='search-bar' name='search' placeholder='Search...'/>
                </div>
            </div>
            <div className='nav-item'>
                <ul className='nav-ul__list'>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
