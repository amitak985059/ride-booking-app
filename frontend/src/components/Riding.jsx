import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to='/home' className='flex fixed h-10 w-10 bg-white justify-center items-center rounded-full right-2 top-2'>
                <i className="text-lg font-medium ri-home-5-line"></i>
            </Link>
            <div className='h-1/2'>
                <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VjsvYqXpEkX11RLR8PyL-IV5D6YC0PcTRQ&s" alt="" />
            </div>
            <div className='h-1/2 p-4'>
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


                <div className='flex justify-between items-center flex-col'>

                    <div className='w-full p-4'>
                       
                        <div className='flex gap-4 items-center border-b p-4'>
                            <i className="ri-map-pin-5-line"></i>
                            <div className='text-lg font-medium'>
                                <h3> Your destination location</h3>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <div className='flex gap-4 p-4 items-center border-b p-4'>
                            <i className="ri-currency-line"></i>
                            <div className='text-lg font-medium'>
                                <h3>$25</h3>
                                <p>Payment method.</p>
                            </div>
                        </div>
                    </div>


                </div>
                <button  className='w-full bg-black text-white py-3'>Make a payment</button>
            </div>
        </div>
    )
}

export default Riding