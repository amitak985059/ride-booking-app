import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <h5 className='p1 text-center w[93%] absolute top-0' onClick={() => { props.setVehicleFound(false) }}>
        <i className="text-3xl text-gray-600 ri-arrow-down-fill"></i>
      </h5>
      <h3 className='font-bold text-2xl mb-5'>Looking for a Driver</h3>

      <div className='flex gap-4 justify-between items-center flex-col'>
        <img className='h-20' src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
        <div className='w-full'>
          <div className='flex gap-4 items-center border-b p-4'>
            <i className="text-lg ri-map-pin-time-fill"></i>
            <div className='text-lg font-medium'>
              <h3> Your source location</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className='flex gap-4 items-center border-b p-4'>
            <i className="ri-map-pin-5-line"></i>
            <div className='text-lg font-medium'>
              <h3> Your destination location</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className='flex gap-4 items-center border-b p-4'>
            <i className="ri-currency-line"></i>
            <div className='text-lg font-medium'>
              <h3>$25</h3>
              <p>Payment method.</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default LookingForDriver