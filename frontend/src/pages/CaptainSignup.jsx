import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setvehiclePlate] = useState('');
  const [vehicleCapacity, setvehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const navigate = useNavigate();


  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async(e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle :{
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }
    console.log(userData);
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
    setVehicleColor('');
    setvehiclePlate('');
    setvehicleCapacity('');
    setVehicleType('');
    console.log(userData);
  }
  return (

    <div className='p-7 flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <form onSubmit={(e) => {
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
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
            <input
              type='text'
              className='bg-[#73bdbb] rounded px-4 py-3 w-1/2 text-lg placeholder:text-base border focus:outline-none focus:ring-2 focus:ring-[#73bdbb]'
              required
              placeholder='Last name'
              value={lastName}
              onChange={(e) => {
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
            onChange={(e) => {
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
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <h3 className='text-xl mb-2 font-semibold text-gray-800'>Vehicle Information</h3>
          <div className=''>
            <input
              type='text'
              className='bg-[#73bdbb] rounded px-4 py-3 w-1/2 text-lg placeholder:text-base border focus:outline-none focus:ring-2 focus:ring-[#73bdbb]'
              required
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              type='text'
              className='bg-[#73bdbb] rounded px-4 py-3 w-1/2 text-lg placeholder:text-base border focus:outline-none focus:ring-2 focus:ring-[#73bdbb]'
              required
              placeholder='Vehicle Plate Number'
              value={vehiclePlate}
              onChange={(e) => {
                setvehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className=''>
            <input
              type='number'
              className='bg-[#73bdbb] rounded px-4 py-3 w-1/2 text-lg placeholder:text-base border focus:outline-none focus:ring-2 focus:ring-[#73bdbb]'
              required
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setvehicleCapacity(e.target.value)
              }}
            />
            <select
              className='bg-[#73bdbb] rounded px-4 py-3 w-1/2 text-lg placeholder:text-base border focus:outline-none focus:ring-2 focus:ring-[#73bdbb]'
              required
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="">Select Vehicle Type</option>
              <option value="Car">Car</option>
              <option value="Motorcycle">Motorcycle</option>
              <option value="Auto">Auto</option>
            </select>
          </div>

          <button className='bg-[#111] text-white font-semibold rounded px-4 py-3 w-full text-lg hover:bg-gray-900 transition'>
            Create Captain personal account
          </button>
          <Link to='/captain-login' className='text-blue-600 hover:underline hover:text-blue-800 block text-center text-xl font-semibold transition duration-300 ease-in-out'>Already have an account? Login here</Link>
        </form>
      </div>
      <div className='mt-6 w-full max-w-md'>
        <p className='text-xm leading-tight'>Public transport is an eco-friendly and cost-effective way to travel, reducing traffic and pollution. It offers a convenient alternative to driving, saving money on fuel and parking. With proper planning, it can be a relaxing and efficient commute.</p>
      </div>
    </div>
  )
}

export default CaptainSignup