import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);

  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);

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

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        y: "100%",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [vehiclePanel]);

  const uberLogo = "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg";
  const backgroundPicture = "https://images.unsplash.com/photo-1650217124806-36e7a0b7afb8?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div>
      {/* Logo */}
      <img
        className="w-16 h-10 absolute left-5 top-5"
        src={uberLogo}
        alt="Uber Logo"
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
            <LocationSearchPanel vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel} />
          </div>
        </div>
      </div>

      {/* Vehicle Panel */}
      <div
        ref={vehiclePanelRef}
        className="fixed bottom-0 left-0 right-0 w-full bg-white rounded-t-2xl shadow-xl px-4 pt-4 pb-6 z-20 max-h-[60vh] overflow-y-auto"
        style={{ transform: 'translateY(100%)' }} // initial hidden state
      >
        <div className="mb-4 text-center">
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-2"></div>
          <h2 className="text-lg font-semibold text-gray-700">Available Rides</h2>
        </div>

        {/* Cab Ride */}
        <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg shadow-sm mb-3">
          <div className="flex items-center space-x-4">
            <img
              className="h-14 w-14 object-contain"
              src="https://png.pngtree.com/png-clipart/20190611/original/pngtree-vector-cartoon-taxi-cab-creative-png-image_2708392.jpg"
              alt="cab"
            />
            <div>
              <h4 className="text-base font-semibold text-gray-800">
                4 Wheeler <span className="ml-2 text-gray-600"><i className="ri-user-line"></i> 4</span>
              </h4>
              <p className="text-sm text-gray-500">2 min away</p>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-800">₹200</h3>
        </div>

        {/* Auto Ride */}
        <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg shadow-sm mb-3">
          <div className="flex items-center space-x-4">
            <img
              className="h-14 w-14 object-contain"
              src="https://cdn-icons-png.flaticon.com/512/2972/2972127.png" // example auto image
              alt="auto"
            />
            <div>
              <h4 className="text-base font-semibold text-gray-800">
                Auto <span className="ml-2 text-gray-600"><i className="ri-user-line"></i> 3</span>
              </h4>
              <p className="text-sm text-gray-500">1 min away</p>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-800">₹80</h3>
        </div>

        {/* Bike Ride */}
        <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg shadow-sm mb-3">
          <div className="flex items-center space-x-4">
            <img
              className="h-14 w-14 object-contain"
              src="https://cdn-icons-png.flaticon.com/512/2972/2972135.png" // example bike image
              alt="bike"
            />
            <div>
              <h4 className="text-base font-semibold text-gray-800">
                Bike <span className="ml-2 text-gray-600"><i className="ri-user-line"></i> 1</span>
              </h4>
              <p className="text-sm text-gray-500">3 min away</p>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-800">₹50</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
