import React, { useState } from 'react'
import {Link} from "react-router-dom";
import "../assets/css/home.scss";

import { useEffect } from 'react';
import { useUser } from "../context/UserContext.jsx";

export default function Home() {

  const {getUsers, user} = useUser();

  useEffect(()=>{
    getUsers();
  },[])
  
  console.log(user);

  return(
    <div className='home-container'>
      <div className='home-start'>
        <div className='home-start__title'>
          <h1>Reversing App</h1>
          <h3>Connect with us!</h3>
        </div>
        <div className='home-start__subtitle'>
          <h2>Not Registered in Reversing Yet?</h2>
          <h5>Just click bellow to </h5>
          <Link to='/register' className='home-start-subtitle__register'>
            <button>Register</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
