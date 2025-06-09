import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h2 className='font-bold text-2xl p-4' onClick={() => {props.setVehiclePanel(false)}} >
      Choose your ride
    </h2>
      <div onClick={() => { props.setConfirmRidePanel(true) }} className='flex items-center justify-between p-4  bg-gray-100 active:border-black rounded-xl m-4'>
        <img className='h-20' src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="knkl" />
        <div className=" h-full p-4 w-1/2">
          <h4 className='font-medium'>Uber Go <span><i class="ri-user-line"></i>4</span></h4>
          <h5>x min away</h5>
        </div>
        <h2 className='text-2xl font-semibold'>$Price</h2>
      </div>
      <div onClick={() => { props.setConfirmRidePanel(true) }} className='flex items-center justify-between p-4  bg-gray-100 active:border-black rounded-xl m-4'>
        <img className='h-20' src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="knkl" />
        <div className=" h-full p-4 w-1/2">
          <h4 className='font-medium'>Uber Auto <span><i class="ri-user-line"></i>3</span></h4>
          <h5>x min away</h5>
        </div>
        <h2 className='text-2xl font-semibold'>$Price</h2>
      </div>
      <div onClick={() => { props.setConfirmRidePanel(true) }} className='flex items-center justify-between p-4  bg-gray-100 active: border-black rounded-xl m-4'>
        <img className='h-20' src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="knkl" />
        <div className=" h-full p-4 w-1/2">
          <h4 className='font-medium'>Uber Moto <span><i class="ri-user-line"></i>1</span></h4>
          <h5>x min away</h5>
        </div>
        <h2 className='text-2xl font-semibold'>$Price</h2>
      </div>
    </div>
  )
}

export default VehiclePanel