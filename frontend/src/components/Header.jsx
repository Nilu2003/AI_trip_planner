import React, { useState } from 'react'
import {Link}   from 'react-router-dom'

const Header = () => {
    const [isLogged,setIsLogged]=useState(false)

  return (
    <div className=' flex flex-row justify-between h-14 shadow-sm items-center  '>
        <div className='ml-4'>
            <div className='text-2xl font-bold '>Logo</div>
        </div>
        <div className='mr-4'>
            <Link to="/signin">
            <button className='border w-12 h-8 text-[10px]  text-white bg-black rounded-md font-bold cursor-pointer'>Sign In</button>
            </Link>
        </div>
    </div>
  )
}

export default Header