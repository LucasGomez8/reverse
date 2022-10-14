import React from 'react';
import "../../assets/scss/friendcard.scss";
import DefaultBannerPhoto from "../../../public/assets/img/banner-inicial.jpg"
import DefaultProfilePhoto from "../../../public/assets/img/user-default.png"
import { useUser } from '../../context/UserContext';
import { useState } from 'react';
import Button from '../util/Button';


export default function FriendCard({user_firstname, user_lastname, user_id, clicker, buttonTittle, switcher}) {

  const {userLogin} = useUser();
  const [sender, setSender] = useState({
    myid: userLogin[0].user_id,
    followid: user_id
  })

  const returnClicker = async(id) => {
    await clicker(id);
  }

  return (
    <div className='card-container'>
        <div className='imagen'>
            <img className='banner' src={DefaultBannerPhoto} alt="" />
            <img className='photo' src={DefaultProfilePhoto} alt="" />
        </div>
        <div className='friend-data'>
            <p>{user_firstname + " " + user_lastname}</p>
            <p></p>
        </div>
        <button onClick={ e => returnClicker(user_id)}>{buttonTittle}</button>
    </div>
  )
}