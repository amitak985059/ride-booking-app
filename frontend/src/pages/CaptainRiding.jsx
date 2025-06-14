import { Link } from 'react-router-dom'
import FinishRidePopup from '../components/FinishRidePopup';
import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const CaptainRiding = () => {
    const finishRidePanelRef = useRef(null);
    const [finishRidePopupPanel, setfinishRidePopupPanel] = useState(false);
    useGSAP(() => {
        if (finishRidePopupPanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: "translateY(0%)",
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: "translateY(100%)",
            })
        }
    }, [finishRidePopupPanel])
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

            <div
                className="h-1/5 p-4 bg-gray-900 border-t border-gray-700 shadow-inner cursor-pointer"
                onClick={() => setfinishRidePopupPanel(true)}
            >
                <h5 className="p-1 text-center">
                    <i
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent parent click
                            setfinishRidePopupPanel(!finishRidePopupPanel);
                        }}
                        className="text-3xl text-gray-400 hover:text-white ri-arrow-up-s-fill transition duration-200"
                    ></i>
                </h5>

                <div className="flex justify-between items-center mt-2">
                    <h4 className="font-semibold text-xl text-white">4 km away</h4>
                    <button className="w-[50%] bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg transition duration-300">
                        Complete Ride
                    </button>
                </div>
            </div>

            <div
                ref={finishRidePanelRef}
                className="fixed z-10 bottom-0 bg-white w-full px-3 py-6 pt-12"
            >
                <FinishRidePopup setfinishRidePopupPanel={setfinishRidePopupPanel} />
            </div>

        </div>
    )
}

export default CaptainRiding