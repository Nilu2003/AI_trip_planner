import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../api/api'

const SignUp = () => {
    const navigate = useNavigate();
    const [error,setError]=useState(false)
    const [fromData,setFromData]=useState({
      email:"",
      password:"",
      fullName:""
    })
   
    const handleChange= (e)=>{
      setFromData({...fromData,
        [e.target.name]:e.target.value
      })
    }

    const handleSubmit= async () =>{
      try {
        const res=await API.post("/users/register", fromData)
        console.log(res)
        navigate('/signin');

      } catch (err) {
        console.log(err);
        
        setError(err?.response?.data?.message || "server issue")
        }
      }


  return (
    <div className='flex justify-center items-center mt-25 '>

      <div className='w-80 md:w-100 lg:w-120 bg-white shadow-2xl flex flex-col p-4 rounded-3xl'>

        <h2 className="text-center text-lg font-bold mb-3">Sign Up</h2>

        
        {error && (
          <p className="text-red-500 text-sm text-center mb-2">{error}</p>
        )}

        <label>Email:</label>
        <input
          type="email"
          name='email'
          value={fromData.email}
          onChange={handleChange}
          className='border-2 m-1 rounded-md p-1'
        />

        <label>Password:</label>
        <input
          type="password"
          name='password'
          value={fromData.password}
          onChange={handleChange}
          className='border-2 m-1 rounded-md p-1'
        />
        <label>Full Name:</label>
        <input
          type="text"
          name='fullName'
          value={fromData.fullName}
          onChange={handleChange}
          className='border-2 m-1 rounded-md p-1'
        />

        <div className='flex flex-col justify-center items-center gap-2'>
            <button 
            className='border mt-2 w-20 rounded-md bg-black text-white font-semibold cursor-pointer'
            onClick={handleSubmit}
            >Sign Up</button>
            <p className=''>Already have an account? <Link to="/signin" className='text-blue-500'>Sign In</Link> </p>
        </div>
         
      </div>
    </div> 
  )
}


export default SignUp