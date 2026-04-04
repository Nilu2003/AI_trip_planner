import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import profile from '../assets/logo.png'
import API from '../api/api'

const Header = () => {
  const [user, setUser] = useState(null)
  const [showProfile, setShowProfile] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/users/getprofile")

        const userData = res.data.data
        setUser(userData)

        localStorage.setItem("user", JSON.stringify(userData))

      } catch (err) {
        localStorage.removeItem("user")
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  const handleLogout = async () => {
    try {
      await API.post('/users/logout')
    } catch (error) {
      console.log("Logout API failed, clearing anyway")
    } finally {
      localStorage.removeItem("user")
      localStorage.removeItem("trip")
      setUser(null)
    }
  }

  return (
    <div className='flex justify-between items-center h-14 px-4 shadow-sm'>

      
      <Link to="/">
        <div className='text-2xl font-bold flex items-center gap-1'>
          <span></span>
          <span className="hidden md:inline">Travely</span>
        </div>
      </Link>

      
      <div>
        {loading ? (
          // ✅ LOADER
          <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
        ) : user ? (
          <div className='flex items-center gap-2 sm:gap-3'>

            
            <Link to="/create-trip">
              <button className='px-2 sm:px-3 py-1 text-xs sm:text-sm bg-black text-white rounded-md font-bold'>
                + Trip
              </button>
            </Link>

            
            <div className='relative'>
              <img
                src={profile}
                alt="profile"
                onClick={() => setShowProfile(!showProfile)}
                className='w-8 h-8 sm:w-9 sm:h-9 rounded-full cursor-pointer'
              />

              {showProfile && (
                <div className='absolute right-0 mt-2 w-36 sm:w-40 bg-white shadow-md rounded-md p-2 sm:p-3 flex flex-col gap-2 z-50'>
                  <button
                    onClick={() => {
                      setShowProfile(false)
                      handleLogout()
                    }}
                    className="text-left text-red-500 text-sm"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

          </div>
        ) : (
          <Link to="/signin">
            <button className='px-3 py-1 text-xs sm:text-sm bg-black text-white rounded-md font-bold'>
              Sign In
            </button>
          </Link>
        )}
      </div>

    </div>
  )
}

export default Header