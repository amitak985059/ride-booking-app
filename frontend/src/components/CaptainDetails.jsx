import React from 'react'

const CaptainDetails = () => {
    return (
        <div>
            <div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-start gap-4'>
                        <img className='h-20 w-20 object-cover rounded-full' src="https://images.indianexpress.com/2024/01/yoga-for-women.jpg" alt="   " />
                        <h4 className='text-2xl font-semibold'>
                            Sumit Kumar
                        </h4>
                    </div>
                    <div>
                        <h4 className='text-2xl font-semibold'>$32.5</h4>
                        <p className='text-sm text-gray-600 font-medium'>Earned</p>
                    </div>
                </div>

                <div className="flex justify-center items-start gap-6 pt-6">
                    <div className="bg-gray-900 h-40 text-white p-4 rounded-xl shadow-md w-40 text-center hover:bg-gray-800 transition-colors duration-300">
                        <i className="ri-time-line text-3xl mb-2 text-gray-200"></i>
                        <h5 className="text-lg font-semibold">10.20 hrs online</h5>
                        <p className="text-sm text-gray-400">Time Spent</p>
                    </div>

                    <div className="bg-gray-900 h-40 text-white p-4 rounded-xl shadow-md w-40 text-center hover:bg-gray-800 transition-colors duration-300">
                        <i className="ri-speed-up-fill text-3xl mb-2 text-gray-200"></i>
                        <h5 className="text-lg font-semibold">10.20 hrs online</h5>
                        <p className="text-sm text-gray-400">Speed Score</p>
                    </div>

                    <div className="bg-gray-900 h-40 text-white p-4 rounded-xl shadow-md w-40 text-center hover:bg-gray-800 transition-colors duration-300">
                        <i className="ri-sticky-note-2-line text-3xl mb-2 text-gray-200"></i>
                        <h5 className="text-lg font-semibold">10.20 hrs online</h5>
                        <p className="text-sm text-gray-400">Notes Taken</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CaptainDetails