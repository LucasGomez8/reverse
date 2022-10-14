import React, { useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import "../../assets/scss/myfriends.scss";
import { useState } from 'react';
import FriendCard from '../../components/login-user/FriendCard';
import {useNavigate} from "react-router-dom"

export default function MyFriends() {

  const navi = useNavigate();
    const { getFriends, userLogin, setFriendView } = useUser();

    const [friends, setFriends] = useState([]);

    useEffect(()=>{

      const fetching = async() => {
        
       const res = await getFriends(userLogin[0].user_id);

       setFriends(res);
      }

      fetching();
    },[]);



    const viewProfile = async(val) => {
      setFriendView(val)
      navi("/viewfriend")
    }

  return (
    <div className='friends-container'>
    <div className='friend-container__resol'>
    {
      friends.map((item, i) => (
        item.user_id !== userLogin[0].user_id ?
        <div className='data-card' key={i}>
            <FriendCard switcher={false} clicker={viewProfile} buttonTittle={"View"} {...item}></FriendCard>
          </div>
          :
        ""
      ))
    }
    </div>
  </div>
  )
}
