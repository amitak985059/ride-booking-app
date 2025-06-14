import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useState, useRef } from 'react';
import ConfirmRidePopup from '../components/ConfirmRidePopup';

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupRef = useRef(null);


  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(0%)",
      })
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(100%)",
      })
    }
  }, [ridePopupPanel])
  useGSAP(() => {
    if (confirmRidePopupPanel) {
      gsap.to(confirmRidePopupRef.current, {
        transform: "translateY(0%)",
      })
    } else {
      gsap.to(confirmRidePopupRef.current, {
        transform: "translateY(100%)",
      })
    }
  }, [confirmRidePopupPanel])
  return (
    <>
      <div className='h-screen max-w-screen-sm mx-auto'>
        <div className='fixed p-3 top-0 flex justify-between items-center w-full '>
          <img className='top-5 left-5 w-16' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" />

          <Link to='/captain-login' className='flex h-10 w-10 bg-white justify-center items-center rounded-full shadow-md'>
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
          </Link>

        </div>

        <div className='h-3/5 overflow-hidden'>
          <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VjsvYqXpEkX11RLR8PyL-IV5D6YC0PcTRQ&s" alt="Banner" />
        </div>

        <div className='h-2/5 p-4 flex flex-col justify-between'>
          <CaptainDetails />

        </div>
        <div
          ref={ridePopupPanelRef}
          className="fixed z-10 bottom-0 bg-white w-full px-3 py-6 pt-12"

        >
          <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
        </div>
        <div
          ref={confirmRidePopupRef}
          className="fixed z-10 bottom-0 bg-white w-full px-3 py-6 pt-12 h-screen"

        >
          <ConfirmRidePopup setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
        </div>

      </div>
    </>
  );
};

export default CaptainHome;