import React, { useEffect, useState} from 'react'
import { useUser } from '../../context/UserContext'
import { _find } from '../../assets/js/general_functions';
import ProfileData from '../../components/login-user/profile/ProfileData';
import ProfileHeader from '../../components/login-user/profile/ProfileHeader';
import { useNavigate } from 'react-router-dom';

export default function ViewFriend() {

  const {friends, friendView, getFriends, userLogin, deleteFriend } = useUser();

  const navi = useNavigate();

  const delFriend = async(id) => {
    await deleteFriend(userLogin[0].user_id, id);

    navi('/my-friends');
  }
  
  return (
    <div className='profile-container'>
      <div className='profile-start'>
        <div className='header'>
        <ProfileHeader {...friendView} buttonLeft={"Posts"} buttonRight={"Delete from friends"} deleteFriend={delFriend}></ProfileHeader>
        </div>
      </div>
    </div>
  )
}
