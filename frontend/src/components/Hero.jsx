import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center px-4 text-center'>


      <div className='font-bold mt-12 
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
        max-w-4xl leading-snug flex flex-col gap-2'>

        <span className='text-red-400'>
          Discover Your Next Adventure with AI:
        </span>

        Personalized Itineraries at Your Fingertips
      </div>


      <div className='mt-4 text-sm sm:text-base md:text-lg font-medium max-w-2xl'>
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
      </div>


      <div className='mt-8'>
        <Link to="/create-trip">
          <button className='px-6 py-2 text-sm sm:text-base font-bold bg-black text-white rounded-md hover:bg-gray-800 transition'>
            Get Started, It's Free
          </button>
        </Link>
      </div>

    </div>
  )
}

export default Hero