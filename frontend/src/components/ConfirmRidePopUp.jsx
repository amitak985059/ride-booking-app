import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ConfirmRidePopup = (props) => {
    const [OTP, setOTP] = useState("")
    const submitHandler = (e) => {
        e.preventDefault()

    }
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

                <div className='mt-6 flex gap-4 w-full'>
                    <form className='flex flex-col w-full' onSubmit={(e) => { submitHandler(e) }}>
                        <input onChange={(e) => { setOTP(e.target.value) }} value={OTP} className='mt-5 bg=[#eee] px-8 py-2 text-lg rounded-lg w-full border-black-500' type="text" name="" id=" " placeholder='Enter OTP' />
                        <Link to='/captain-riding' onClick={() => { }} className='w-full bg-black text-white p-3 flex items-center mt-7 justify-center'>Confirm</Link>
                        <button onClick={() => { props.setConfirmRidePopupPanel(false); props.setRidePopupPanel(false) }} className='w-full p-3 mt-7 bg-white-700 text-gray-700 bg-gray-400'>Cancel</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRidePopup