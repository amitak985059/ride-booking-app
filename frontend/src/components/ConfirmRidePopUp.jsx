import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopup = (props) => {
    return (
        <div className=''>
            <h5 className='p1 text-center w[93%] absolute top-0' onClick={() => { props.setConfirmRidePopupPanel(false) }}>
                <i className="text-3xl text-gray-600 ri-arrow-down-fill"></i>
            </h5>
            <h3 className='font-bold text-2xl mb-5'>Confirm this ride to start</h3>
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

                <Link to='/captain-riding' onClick={() => { }} className='w-full bg-black text-white py-3 flex items-center justify-center'>Confirm</Link>
                <button onClick={() => { props.setConfirmRidePopupPanel(false) ; props.setRidePopupPanel(false)} } className='w-full py-3 bg-white-700 text-gray-700 bg-gray-400'>Cancel</button>
            </div>
        </div>
    )
}

export default ConfirmRidePopup