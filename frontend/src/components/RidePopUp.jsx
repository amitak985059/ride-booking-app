import React from 'react'

const RidePopUp = (props) => {
    return (
        <div>
            <h5 className='p1 text-center w[93%] absolute top-0' onClick={() => { props.setRidePopupPanel(false) }}>
                <i className="text-3xl text-gray-600 ri-arrow-down-fill"></i>
            </h5>
            <h3 className='font-bold text-2xl mb-5'>New Ride!!</h3>
            <div className='flex gap-4 justify-between items-center bg-gray-50 rounded-lg p-4 mt-4'>
                <div className='flex gap-4 items-center'>
                    <img className='h-15 w-15 rounded-full object-cover' src="https://yt3.googleusercontent.com/eC0eP1Y5pOYFB7WJcH95zYnUl2syORfMILqIr9ayp3MCNk4dKkEp3KYmupHlQ3GVCnHafWJ4iA=s900-c-k-c0x00ffffff-no-rj" alt="" />
                    <h2 className='text-lg font-semibold'>Seema Haider</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.5Km</h5>
            </div>

            <div className='flex gap-4 justify-between items-center flex-col'>

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
                <div className='flex gap-4 items-center justify-between w-full '>
                    <button onClick={() => { props.setConfirmRidePopupPanel(true) }} className='w-full bg-black text-white py-3'>Accept</button>
                    <button onClick={() => { props.setRidePopupPanel(false) }} className='w-full py-3 bg-white-700 text-gray-700 bg-gray-400'>Ignore</button>

                </div>
            </div>
        </div>
    )
}

export default RidePopUp