import React from 'react';
import 'remixicon/fonts/remixicon.css';

const LocationSearchPanel = (props) => {
  const Locations = [
    "347/138 Purana Tikait Ganj Bairagi Tola haiderganj Lucknoe",
    "12 Hidaerganj Tiraha",
    "78 Hidaerganj Tiraha",
    "98 Hidaerganj Tiraha",
    "7 Hidaerganj Tiraha",
    "78 Hidaerganj Tiraha",
    "89 Hidaerganj Tiraha",
  ];

  return (
    <>
      {Locations.map((elem, index) => (
        <div
          key={index}
          onClick={() => {

            props.setVehiclePanel(true);
          }}

          className="flex items-center justify-start gap-4 pt-2 active:border-2 cursor-pointer"
        >
          <h2 className="bg-[#eee] p-2 h-10 w-10 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-line text-lg"></i>
          </h2>
          <div className="font-medium">{elem}</div>
        </div>
      ))}
    </>
  );
};

export default LocationSearchPanel;
