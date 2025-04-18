import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import { useState } from 'react';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(() => {
    if(panelOpen){
      gsap.to(panelRef.current, {
        height: '70%',
      })
    }else{
      gsap.to(panelRef.current, {
        height: '0%',
      })
    }
  }, [panelOpen]);
  return (
    <div>
      <img className='w-16 h-10 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" />
      <div>
        <img className='w-screen object-cover h-screen' src="https://images.unsplash.com/photo-1650217124806-36e7a0b7afb8?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Uber ride animation" />
      </div>

      <div className='absolute display flex flex-col justify-end text-color-white h-screen top-0'>
        <div className='h-[30%] bg-white p-5'>
          <h4 className='text-2xl font-bold mt-5 ml-5'>
            Find the right Ride for you
          </h4>
          <form onSubmit={(e) => { submitHandler(e) }} className='bg-white w-full p-2' action="" type="text">
            <input onClick={() => { setPanelOpen(true) }} value={pickup} onChange={(e) => { setPickup(e.target.value) }} className='bg-[#eee] px-8 py-2 text-lg rounded-lg mt-6 w-full' type="text" placeholder='Where to?' />
            <input onClick={() => { setPanelOpen(true) }} value={destination} onChange={(e) => { setDestination(e.target.value) }} className='bg-[#eee] px-8 py-2 text-lg rounded-lg mt-4 w-full' type="text" placeholder='Destination' />
          </form>
        </div>
        <div ref={panelRef} className='h-[70%] bg-red p-5 hidden'>

        </div>
      </div>
    </div>
  )
}

export default Home