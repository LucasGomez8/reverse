import React, { useState } from 'react'
import {Link} from "react-router-dom";
import HomeLogin from './HomeLogin';
import "../assets/scss/home.scss";

import { useEffect } from 'react';
import { useUser } from "../context/UserContext.jsx";

export default function Home() {

  const {getAllPost, isLogin, createPost} = useUser();

  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetching = async() => {
      
      const result = await getAllPost();
        setPost(result);
    }

    fetching();
  },[])
  

  const updatePosts = async (postValues) => {
    const res = await createPost(postValues);
    let updatedPost = [...post];
    updatedPost.unshift(res[0]);
    setPost(updatedPost);
  }

  if(isLogin != true) {
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
  )}
  else{
    return (
      <HomeLogin post={post} updatePosts={updatePosts}></HomeLogin>
    )
  }
}
