import React from 'react'
import "../../../assets/scss/profiledata.scss"

export default function ProfileData(props) {
  return (
    <div className='profiledata-container'>
        <p className='title-data'>My Information</p>
        <p className='thedata'>Email: {props[0].email}</p>
    </div>
  )
}
