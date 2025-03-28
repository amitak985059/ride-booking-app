import React, { useState } from 'react'
import {Link} from 'react-router-dom'




const UserLogin = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [userData, setuserData] = useState({})

const submitHandler = (e)=>{
  e.preventDefault();
  setuserData({
    email:email,
    password:password
  })
  setEmail('')
  setPassword('')
  console.log(userData)

}

  return (
    <>
      <div className='p-7'>
        <div>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }} action="">
            <h3 className='text-xl mb-2'>What's you email</h3>
            <input
              type="email"
              className='bg-[#73bdbb] mb-7rounded px-4 py-4 w-full text-lg placeholder:text-base border'
              required
              placeholder='Your email'
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
            />
            <h3 className='text-xl mb-2'>Enter Password </h3>
            <input
              type="password"
              className='bg-[#73bdbb] mb-7rounded px-4 py-4 w-full text-lg placeholder:text-base border'
              required
              placeholder='your password'
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
               />
            <button className='bg-[#111] text-white font-semibold mb-7rounded px-4 py-4 w-full text-lg placeholder:text-base'>Login </button>
            <Link to = '/signup'className='text-blue-600'>Create new account</Link>
          </form>
        </div>
        <div>
          <Link to='/captain-login' className='pt-4 flex items-centre justify-centre mt-4 bg-[#288222] text-white font-semibold mb-7rounded px-4 py-4 w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
        </div>
      </div>
    </>
  );
}

export default UserLogin