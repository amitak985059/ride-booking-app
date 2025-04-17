import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';
const CaptainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {captain, setCaptain}= React.useContext(CaptainDataContext);
    const navigate = useNavigate();

    const submitHandler = async(e) => {
      e.preventDefault();
      const captain = {
        email: email,
        password: password,
      }
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
        console.log(data);
      }
      setEmail('');
      setPassword('');
      console.log(captain);
    };
  return (
    <>
      <div className='p-7 flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }} action="" className='space-y-6'>
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
              Login
            </button>
            <Link to='/captain-signup' className='text-blue-600 hover:underline block text-center'>Register as a captain</Link>
          </form>
        </div>
        <div className='mt-6 w-full max-w-md'>
          <Link to='/login' className='block text-center bg-[#eaa758] text-white font-semibold rounded px-4 py-3 w-full text-lg hover:bg-green-700 transition'>
            Sign in as User
          </Link>
        </div>
      </div>
    </>
  )
}

export default CaptainLogin