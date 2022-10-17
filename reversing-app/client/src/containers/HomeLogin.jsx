import React from 'react'
import "../assets/scss/homelogin.scss"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useUser } from '../context/UserContext'
import defaultImage from "../../public/assets/img/user-default.png";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function HomeLogin({post, updatePosts}) {


  const {userLogin, createPost} = useUser();
  const [post_x_user, setPost_x_User] = useState({
    message: "",
    user_id: 0
  })

  const postChanger = (val) => {
    setPost_x_User({
      ...post_x_user,
      message: val,
      user_id: userLogin[0].user_id
    });
  }

  const postSender = () => {
    updatePosts(post_x_user);
    document.getElementById("post-input__target").value = "";
  }

  return (
    <div className='homecontainer'>
      <div className='aside'>
        <p className='friend-box'>
          <PersonAddIcon className='aside__add-icon'></PersonAddIcon>
          <Link to='/follow'>Follow Friends</Link>
          </p>
      </div>
      <div className='home-center'>
        <div className="post-input">
          <div className='title-box'>
            <img src={defaultImage} alt="" />
            <h5>Write something...</h5>
          </div>
          <textarea type="text" maxLength="400" id='post-input__target' onChange={ e => postChanger(e.target.value)} />
          <button onClick={postSender}>OK, post it!</button>
        </div>
        <div className='filter-container' id='filter-container' data-auto-height="true">
          {
            post.map((item, i) => {
              return( 
              <div key={i}>
                <div className='post-data'>
                  <div className='post-data__image'>
                    <img src={defaultImage} alt="" />
                  </div>
                  <div className='arrow'>
                    <div className='outer'></div>
                    <div className='inner'></div>
                  </div>
                  <div className='post-data__box'>
                    <p>{item.user_firstname} says:</p>
                      <p>'{item.post_messages}'</p>
                  </div>
                </div>
              </div>
            )
            })
          }
        </div>
      </div>
      <div className='friend-online-right'>
        
      </div>
    </div>
  )
}
