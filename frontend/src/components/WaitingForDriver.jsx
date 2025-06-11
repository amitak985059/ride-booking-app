import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 className='p1 text-center w[93%] absolute top-0' onClick={() => { props.setConfirmRidePanel(false) }}>
        <i className="text-3xl text-gray-600 ri-arrow-down-fill"></i>
      </h5>
      <div className="flex items-center justify-between bg-white shadow-md rounded-2xl p-4 max-w-md mx-auto">
        <img
          className="h-20 w-20 object-cover rounded-full"
          src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Car"
        />
        <div className="flex-1 ml-4 text-right bg-grey-100">
          <h2 className="text-xl font-semibold text-gray-800">Amit</h2>
          <h4 className="text-md text-gray-600">Car Number</h4>
          <p className="text-sm text-gray-500">Car name</p>
        </div>
      </div>


      <div className='flex gap-4 justify-between items-center flex-col'>

        <div className='w-full'>
          <div className='flex gap-4 items-center border-b p-4'>
            <i class="text-lg ri-map-pin-time-fill"></i>
            <div className='text-lg font-medium'>
              <h3> Your source location</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className='flex gap-4 items-center border-b p-4'>
            <i class="ri-map-pin-5-line"></i>
            <div className='text-lg font-medium'>
              <h3> Your destination location</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className='flex gap-4 items-center border-b p-4'>
            <i class="ri-currency-line"></i>
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

export default WaitingForDriver