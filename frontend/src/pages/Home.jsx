import React, { use, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRidePanel from '../components/ConfirmRide'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmPanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const submitHandler = (e) => {
    e.preventDefault()
  }
  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        duration: 0.5,
        ease: 'power2.out',
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        duration: 0.5,
        ease: 'power2.in',
      })
      opacity: 0;
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0%)',
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }

  }, [vehiclePanel])
  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmPanelRef.current, {
        transform: 'translateY(0%)',
      })
    } else {
      gsap.to(confirmPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }

  }, [confirmRidePanel])
  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0%)',
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
      })
    }

  }, [vehicleFound])
  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0%)',
      })
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)',
      })
    }

  }, [waitingForDriver])
  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='fixed absolute  top-5 left-5 w-16' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" />

      <div className='h-screen w-screen'>
        <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VjsvYqXpEkX11RLR8PyL-IV5D6YC0PcTRQ&s" alt="" />
      </div>

      <div className='flex flex-col justify-end absolute top-0 w-full  h-screen'>
        <div className='h-[30%] bg-white p-6'>
          <i ref={panelCloseRef} opacity={0} onClick={() => { setPanelOpen(!panelOpen) }} class="ri-arrow-down-fill"></i>
          <h4 className='text-2xl font-bold'>Find Trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <input onClick={() => { setPanelOpen(true) }} value={pickup} onChange={(e) => { setPickup(e.target.value) }} className='mt-5 bg=[#eee] px-8 py-2 text-lg rounded-lg w-full' type="text" placeholder='Enter pickup location' />
            <input onClick={() => { setPanelOpen(true) }} value={destination} onChange={(e) => { setDestination(e.target.value) }} className="bg=[#eee] px-8 py-2 text-lg rounded-lg w-full" type="text" placeholder='Enter drop location' />
          </form>
        </div>
        <div ref={panelRef} className=' bg-[#eee] '>
          <LocationSearchPanel vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel} />

        </div>
      </div>


      <div ref={vehiclePanelRef} className="fixed z-10 bottom-0 bg-white w-full ">
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>
      <div ref={confirmPanelRef} className="fixed z-10 bottom-0 bg-white w-full px-3 py-6 pt-12 ">
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className="fixed z-10 bottom-0 bg-white w-full px-3 py-6 pt-12 ">
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div ref={waitingForDriverRef} className="fixed z-10 bottom-0 bg-white w-full px-3 py-6 pt-12 ">
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>

  )
}

export default Home