import React from 'react'
import {Link} from "react-router-dom"
import "../assets/css/register.scss"

export default function Register() {


  return (
    <div className='register-container'>
        <form className='registerform' >
            <div className='form-divider'>
            <h1>Sign Up</h1>
                <div className='form-item'>
                    <label>First Name:</label>
                    <input type="text" id='name' name='name'/>
                </div>
                <div className='form-item'>
                    <label>Last Name:</label>
                    <input type='text' id='lastname' name='lastname'/>
                </div>
                <div className='form-item'>
                    <label>Email:</label>
                    <input type='text' id='email' name='email'/>
                </div>
                <div className='form-item'>
                    <label>Password:</label>
                    <input type='password' id='password' name='password'/>
                </div>
                <div className='form-item'>
                    <label>Repeat Password:</label>
                    <input type='password' id='rpass' name='rpass'/>
                </div>
                <button>Register</button>
            </div>
            <div className='form-divider-right'>
                <div className='form-divider-rigth__box'>
                    <h1>Already have an account?</h1>
                    <p>Login to connect with your friends!</p>
                    <Link to='/login'><button>Log in</button></Link>
                </div>
            </div>
        </form>
    </div>
  )
  
}
