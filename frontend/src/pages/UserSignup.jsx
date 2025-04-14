import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const {user, setUser} = React.useContext(UserDataContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    // setUserData({
    //   fullName:{
    //     firstName: firstName,
    //     lastName: lastName
    //   },
    //   email: email,
    //   password: password
    // });

    const newUser = {
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      navigate('/home');
      
    }
    console.log(userData);
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
    console.log(userData);
  }
  
  return (
    
      <div className='p-7 flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }} action="" className='space-y-6'>
            <h3 className='text-xl mb-2 font-semibold text-gray-800 flex'>What's your name</h3>
            <div className=''>
              <input
                type='text'
                className='bg-[#73bdbb] rounded px-4 py-3 w-1/2 text-lg placeholder:text-base border focus:outline-none focus:ring-2 focus:ring-[#73bdbb]'
                required
                placeholder='First name'
                value={firstName}
                onChange={(e)=>{
                  setFirstName(e.target.value)
                }}
              />
              <input
                type='text'
                className='bg-[#73bdbb] rounded px-4 py-3 w-1/2 text-lg placeholder:text-base border focus:outline-none focus:ring-2 focus:ring-[#73bdbb]'
                required
                placeholder='Last name'
                value={lastName}
                onChange={(e)=>{
                  setLastName(e.target.value)
                }}
              />
            </div>
            
            <h3 className='text-xl mb-2 font-semibold text-gray-800'>What's your email</h3>
            <input
              type='email'
              className='bg-[#73bdbb] rounded px-4 py-3 w-full text-lg placeholder:text-base border focus:outline-none focus:ring-2 focus:ring-[#73bdbb]'
              required
              placeholder='Your email'
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
            />
            <h3 className='text-xl mb-2 font-semibold text-gray-800'>Enter Password</h3>
            <input
              type='password'
              className='bg-[#73bdbb] rounded px-4 py-3 w-full text-lg placeholder:text-base border focus:outline-none focus:ring-2 focus:ring-[#73bdbb]'
              required
              placeholder='Your password'
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              
            />
            <button className='bg-[#111] text-white font-semibold rounded px-4 py-3 w-full text-lg hover:bg-gray-900 transition'>
              Create new account
            </button>
            <Link to='/login' className='text-blue-600 hover:underline hover:text-blue-800 block text-center text-xl font-semibold transition duration-300 ease-in-out'>Already have an account? Login here</Link>
          </form>
        </div>
        <div className='mt-6 w-full max-w-md'>
          <p className='text-xm leading-tight'>Public transport is an eco-friendly and cost-effective way to travel, reducing traffic and pollution. It offers a convenient alternative to driving, saving money on fuel and parking. With proper planning, it can be a relaxing and efficient commute.</p>
        </div>
      </div>
    
  )
}

export default UserSignup