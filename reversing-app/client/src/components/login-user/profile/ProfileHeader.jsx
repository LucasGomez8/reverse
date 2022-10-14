import React from 'react';
import bannerinicial from "../../../../public/assets/img/banner-inicial.jpg";
import userDefault from "../../../../public/assets/img/user-default.png";
import "../../../assets/scss/profileheader.scss";
import { Link } from "react-router-dom"
import { useEffect } from 'react';
import { useUser } from '../../../context/UserContext';

export default function ProfileHeader(props) {
  
  const {userLogin} = useUser();
 
  return (
    <div className='profileheader-container'>
        <div className='profileheader-box'>
            <div className='profileheader-box__banner'>
                <img className='profileheader-box__bannner__img' src={bannerinicial} alt="banner" />
            </div>
            <img className='profileheader_box__banner__userphoto' src={userDefault} alt="profile photo" />
            <div className='profileheader-box__data'>
                <p>{props[0].user_firstname.charAt(0).toUpperCase() + props[0].user_firstname.slice(1) + " " +props[0].user_lastname.charAt(0).toUpperCase() + props[0].user_lastname.slice(1)}</p>
            </div>
          <div className='profileheader-bottoner'>
            <div className='bottoner-item'>
              { userLogin[0].user_id != props[0].user_id ?
                <p>{props.buttonLeft}</p>
              :
              <Link to='/edit-profile'><p>Edit Profile</p></Link>
            }
            </div>
            <div className='bottoner-item'>
            { userLogin[0].user_id != props[0].user_id ?  
              <p onClick={e => props.deleteFriend(props[0].user_id)}>{props.buttonRight}</p>
              :
              <Link to='/my-posts'><p>My Posts</p></Link>
            }

            </div>
          </div>
        </div>
    </div>
  )
}
