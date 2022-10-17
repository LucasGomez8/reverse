import React from 'react'
import "../../../assets/scss/profile.scss" 
import editIcon from "../../../assets/img/icons/edit-icon.png"
import { useUser } from '../../../context/UserContext'



export default function EditProfile() {

    const {userLogin} = useUser();

    const displayChange = (elem, type) => {
       switch(elem){
        case 1:
            document.getElementById("banner-edit-icon-1").style.display = "inline-block";
        return;
        case 2:
            document.getElementById("banner-edit-icon-1").style.display = "none";
        return;
        case 3:
            document.getElementById("banner-edit-icon-2").style.display="inline-block"
        return;
        case 4:
            document.getElementById("banner-edit-icon-2").style.display="none";
        return;
       }
    }

  return (
    <div className='editerbody'>
        <div className='profileheader-edit'>
            <div className="edit-item">
                <label>First Name</label>
                <input type="text" />
            </div>
            <div className="edit-item">
                <label>Last Name</label>
                <input type="text" />
            </div>
            <div className="edit-item">
                <label>Email</label>
                <input type="email" />
            </div>
            <div className="edit-item">
                <label>Password</label>
                <input type="password" />
            </div>
            <button id='btnConfirm-edit' className='btnConfirm-edit'>Confirm</button>
        </div>
        <div className='profilephoto-editer'>
            <div className='edit-photo-item'>
                <img onMouseOver={e => displayChange(1)} onMouseLeave={e => displayChange(2)} id="banner-editer" className='banner-editer' src={`../../../../public/assets/img/${userLogin[0].user_banner}`} alt={`${userLogin[0].user_banner}`} />
                <img id="banner-edit-icon-1" src={editIcon} className='banner-edit-icon-1' alt="" />
                <img id="photo-editer" onMouseOver={ e=> displayChange(3)} onMouseLeave={e => displayChange(4)} className='photo-editer' src={`../../../../public/assets/img/${userLogin[0].user_image}`} alt="imgprofile" />
                <img id="banner-edit-icon-2" src={editIcon} className='banner-edit-icon-2' alt="" />
            </div>
        </div>
    </div>
  )
}
