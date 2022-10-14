import React from 'react';
import {Link} from "react-router-dom";
import "../assets/scss/register.scss";
import { useUser } from '../context/UserContext';
import {Formik, Form} from "formik";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const { createUser } = useUser();
    const navigate = useNavigate();

    const [userValues, setUserValues] = useState({
        email: "",
        password: "",
        name: "",
        lastname: "",
    })

  return (
    <div className='register-container'>
        <Formik initialValues={userValues}
        onSubmit={async (values) => {
            await createUser(values);
            navigate("/login");
        }}>
            {
                ({handleChange, handleSubmit}) => (
                    <Form className='registerform'>
                    <div className='form-divider'>
                    <h1>Sign Up</h1>
                        <div className='form-item'>
                            <label>First Name:</label>
                            <input type="text" id='name' name='name' onChange={handleChange}/>
                        </div>
                        <div className='form-item'>
                            <label>Last Name:</label>
                            <input type='text' id='lastname' name='lastname' onChange={handleChange}/>
                        </div>
                        <div className='form-item'>
                            <label>Email:</label>
                            <input type='text' id='email' name='email' onChange={handleChange}/>
                        </div>
                        <div className='form-item'>
                            <label>Password:</label>
                            <input type='password' id='password' name='password' onChange={handleChange}/>
                        </div>
                        <div className='form-item'>
                            <label>Repeat Password:</label>
                            <input type='password' id='rpass' name='rpass'/>
                        </div>
                        <button type='submit' onSubmit={handleSubmit}>Register</button>
                    </div>
                    <div className='form-divider-right'>
                        <div className='form-divider-rigth__box'>
                            <h1>Already have an account?</h1>
                            <p>Login to connect with your friends!</p>
                            <Link to='/login'><button>Log in</button></Link>
                        </div>
                    </div>
                    </Form>
                )
            }
       
        </Formik>
    </div>
  )
  
}
