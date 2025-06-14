
import { Link } from 'react-router-dom'
const CaptainRiding = () => {
    return (
        <div className='h-screen max-w-screen-sm mx-auto'>

            <div className='fixed p-3 top-0 flex justify-between items-center w-full '>
                <img className='top-5 left-5 w-16' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" />

                <Link to='/captain-login' className='flex h-10 w-10 bg-white justify-center items-center rounded-full shadow-md'>
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>

            </div>

            <div className='h-4/5 overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VjsvYqXpEkX11RLR8PyL-IV5D6YC0PcTRQ&s" alt="Banner" />
            </div>

            <div className='h-1/5 p-4 bg-yellow-400 '>
                <h5 className='p-1 text-center ' >

                    <i class="text-3xl text-gray-600  ri-arrow-up-s-fill"></i>
                </h5>
                <div className='flex justify-between items-center'>

                    <h4 className='font-semibold text-xl'>4 km away</h4>
                    <button className='w-[50%] bg-black text-white py-3'>Complete Ride</button>
                </div>
            </div>


        </div>
    )
}

export default CaptainRiding