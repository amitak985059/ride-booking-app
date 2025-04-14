import React from 'react'
import {Link} from 'react-router-dom'

const Start = () => {
  return (
    <div className=' '>
      <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1605602560252-2d23ec73d48a?q=80&w=2761&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] pt-5 pl-5 h-screen flex flex-col w-full bg-red-400 justify-between flex-item-end">
        <img className = ' w-11 ml-8 'src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="no image available" />
        <div className='bg-white py-5 px-4 w'>
          <h2 className='text-2xl font-bold  '>Get started with uber</h2>
          <Link to='/login' className='flex justify-center items-center w-full bg-black text-white py-3 rounded mt-2'>Conitnue</Link>
        </div>
        
      </div>
    </div>
  )
}

export default Start