import React, { useState } from 'react'
import { useEffect } from 'react';
import { useUser } from '../../context/UserContext'
import FriendCard from '../../components/login-user/FriendCard';
import "../../assets/scss/myfriends.scss";
import { _remove } from '../../assets/js/general_functions';

export default function FollowUsers() {

  const {getUsers, userLogin, getNotFriends, createFollow} = useUser();

  const[notFriends, setNotFriends] = useState([]);

   

  useEffect(()=>{
    const getting = async() => {
      const res = await getNotFriends(userLogin[0].user_id);

      setNotFriends(res);
    }

    getting();
  },[])

  const quitUserList = async(id) => {
    setNotFriends(_remove(notFriends, id));
    await createFollow(userLogin[0].user_id, id);
  }

  const followHandle = async(values) => {
    await createFollow(values);
  }

  console.log("Not Friends: ", notFriends);

  return (
    <div className='friends-container'>
      <div className='friend-container__resol'>
      {
        notFriends.map((item, i) => (
          item.user_id !== userLogin[0].user_id ?
          <div className='data-card' key={i}>
              <FriendCard switcher={true} clicker={quitUserList} buttonTittle={"Follow"} {...item}></FriendCard>
            </div>
            :
            console.log(item)             
        ))
      }
      </div>
    </div>
  )
}
