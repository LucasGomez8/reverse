import React from 'react';
import {Link} from "react-router-dom";
import "../assets/scss/navbar.scss";
import { useUser } from '../context/UserContext';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LoginIcon from '@mui/icons-material/Login';

export default function Navbar() {

    const {isLogin} = useUser();

    if(isLogin == false){
        return (
            <div>
                <nav className='navbar'>
                    <div className='nav-item'>
                        <div className='nav-item__logo'>
                            <h2><Link to='/'>Home</Link></h2>
                        </div>
                    </div>
                    <div className='nav-item'>
                        <ul className='nav-ul__list'>
                            <li className='nav-ul-list__item'>
                                <Link to='/login'>Login</Link>
                                <LoginIcon className='nav-icon'></LoginIcon>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
    else{
        return (
            <div>
                <nav className='navbar'>
                    <div className='nav-item'>
                        <div className='nav-item__logo'>
                            <h2><Link to='/'>Reversing</Link></h2>
                        </div>
                    </div>
                    <div className='nav-item'>
                        <ul className='nav-ul__list'>
                            <li>
                                <NotificationsIcon></NotificationsIcon>
                            </li>
                            <li>
                                <Link to='/my-friends'>My friends</Link>
                            </li>
                            <li>
                                <Link to='/profile'>Profile</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
