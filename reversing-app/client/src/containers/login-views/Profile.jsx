import React from 'react'
import ProfileHeader from '../../components/login-user/profile/ProfileHeader'
import { useUser } from '../../context/UserContext'
import "../../assets/scss/profile.scss"
import ProfileData from '../../components/login-user/profile/ProfileData';

export default function Profile() {

  const {userLogin} = useUser();

  return (
    <div className='profile-container'>
      <div className='profile-start'>
        <div className='header'>
          <ProfileHeader {...userLogin}></ProfileHeader>
        </div>
        <div className='profile-body'>
          <div className='body-data'>
            <ProfileData {...userLogin}></ProfileData>
          </div>
        </div>
      </div>
    </div>
  )
}
