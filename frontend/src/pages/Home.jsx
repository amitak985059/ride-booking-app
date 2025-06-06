import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LocationSearchPael from '../components/LocationSearchPael';
const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        duration: 0.5,
        ease: 'power2.inOut',
      });
    }
  }, [panelOpen]);
  const uberLogo = "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
  const backgroundPicture = "https://images.unsplash.com/photo-1650217124806-36e7a0b7afb8?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <div>
      {/* Logo */}
      <img
        className="w-16 h-10 absolute left-5 top-5"
        src={uberLogo}
        alt=""
      />

      {/* Background Image */}
      <div>
        <img
          className="w-screen object-cover h-screen"
          src={backgroundPicture}
          alt="Uber ride animation"
        />
      </div>

      {/* Form and Expanding Panel */}
      <div className="absolute flex flex-col justify-end text-white h-screen top-0 left-0 w-full">
        {/* Static Form */}
        <div className="h-[30%] bg-white p-5">
          <h4 className="text-2xl font-bold mt-5 ml-5 text-black">
            Find the right Ride for you
          </h4>
          <form onSubmit={submitHandler} className="bg-white w-full p-2">
            <input
              onClick={() => setPanelOpen(prev => !prev)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-8 py-2 text-lg rounded-lg mt-6 w-full placeholder:text-gray-500"
              type="text"
              placeholder="Where to?"
            />

            <input
              onClick={() => setPanelOpen(prev => !prev)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-8 py-2 text-lg rounded-lg mt-4 w-full placeholder:text-gray-500"
              type="text"
              placeholder="Destination"
            />

          </form>
        </div>
        {/* Expanding Panel */}
        <div
          ref={panelRef}
          className="bg-white w-full overflow-hidden"
          style={{ height: '0%' }}
        >
          {/* Content of expanding panel */}
          <div className="p-5 text-black">
            <h2 className="text-xl font-semibold">Suggested Locations</h2>
            {/* Add more content here */}
            <LocationSearchPael />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;