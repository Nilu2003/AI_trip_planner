import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='text-4xl font-bold mt-15 h-30 w-216 text-center flex flex-col gap-2'> <span className='text-red-400'>Discover Your Next Adventure with Al:</span> Personalized Itineraries at Your Fingertips</div>
        <div className='text-[14px] font-semibold'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</div>
        <div className='mt-8'>
          <Link to="/create-trip">
            <button className='border h-8 w-38 text-[12px] font-bold bg-black text-white rounded-md cursor-pointer'>Get Started, It's Free</button>
          </Link> 
        </div> 
    </div>
  )
}

export default Hero