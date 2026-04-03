import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    const [error,setError]=useState(false)
  return (
    <div className='flex justify-center items-center mt-25 '>

      <div className='w-80 md:w-100 lg:w-120 bg-white shadow-2xl flex flex-col p-4 rounded-3xl'>

        <h2 className="text-center text-lg font-bold mb-3">Login</h2>

        
        {error && (
          <p className="text-red-500 text-sm text-center mb-2">{error}</p>
        )}

        <label>Email:</label>
        <input
          type="text"
          name='username'
          value=""
          onChange=""
          className='border-2 m-1 rounded-md p-1'
        />

        <label>Password:</label>
        <input
          type="password"
          name='password'
          value=""
          onChange=""
          className='border-2 m-1 rounded-md p-1'
        />

        <div className='flex flex-col justify-center items-center gap-2'>
            <button className='border mt-2 w-20 rounded-md bg-black text-white font-semibold cursor-pointer'>Sign In</button>
            <p className=''>Create an account ? <Link to="/signup" className='text-blue-500'>Sign Up</Link> </p>
        </div>
         
      </div>
    </div> 
  )
}


export default SignIn