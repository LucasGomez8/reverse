import React from 'react'
import {Link} from "react-router-dom"
import "../assets/css/login.scss"

export default function Login() {
  return (
    <div className='login-container'>
        <form className='loginform'>
        <div className='login-divider'>
        <h1>Login to Your Account</h1>
            <div className='form-item'>
                <label htmlFor='username'>Email:</label>
                <input type="text" name='username' id='username'/>
            </div>
            <div className='form-item'>
                <label htmlFor='userpass'>Password:</label>
                <input type="password" id='userpass' name='userpass' />
            </div>
            <button>Login</button>
        </div>
        <div className='login-divider-buttons'>
                <h1>New Here?</h1>
                <p>Sign up and connect with your friends</p>
            <div className='form-item__buttons'>
                <Link to='/register'>
                    <button>Sign Up</button>
                </Link>
            </div>
        </div>
        </form>
    </div>
  )
}
