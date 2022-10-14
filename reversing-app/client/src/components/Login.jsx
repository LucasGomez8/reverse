import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import { Form, Formik } from 'formik';
import "../assets/scss/login.scss";
import { useState } from 'react';
import { useUser } from '../context/UserContext';

export default function Login() {

    const [userValue, setUserValue] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate();

    const {checkLogin} = useUser();

  return (
    <div className='login-container'>
        <Formik
        initialValues={userValue}
         onSubmit={async(values) => {
            if(await checkLogin(values)){
            setUserValue({
                email: "",
                password: "",
            })

            navigate("/");
            }
        }}>
            { ({handleChange, handleSubmit}) => (
                  <Form className='loginform'>
                  <div className='login-divider'>
                  <h1>Login to Your Account</h1>
                      <div className='form-item'>
                          <label htmlFor='email'>Email:</label>
                          <input type="text" name='email' id='email' onChange={handleChange}/>
                      </div>
                      <div className='form-item'>
                          <label htmlFor='password'>Password:</label>
                          <input type="password" id='password' name='password' onChange={handleChange} />
                      </div>
                      <button type='submit' onSubmit={handleSubmit}>Login</button>
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
                  </Form>
            )}
        </Formik>
    </div>
  )
}
