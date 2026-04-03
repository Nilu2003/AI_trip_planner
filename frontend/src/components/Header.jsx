import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isLogged, setIsLogged] = useState(true)
    const [showProfile, setShowProfile] = useState(false)

    const handleLogout = () => {
        // Add logout logic here
        setIsLogged(false)
    }

    const profile = 'https://via.placeholder.com/36' // Placeholder profile image

    return (
        <div className='flex flex-row justify-between h-14 shadow-sm items-center'>
            <div className='ml-4'>
                <div className='text-2xl font-bold'>Logo</div>
            </div>
            <div className='mr-4'>
                {isLogged ? (
                    <div className='flex flex-row gap-3'>
                        <Link to="/create-trip">
                            <button className='border rounded-md font-bold cursor-pointer'>Create Trip</button>
                        </Link>
                        <Link to="/my-trips">
                            <button className='border rounded-md font-bold cursor-pointer'>My Trip</button>
                        </Link>
                        <div className='relative'>
                            <img
                                src={profile}
                                alt="photo"
                                onClick={() => setShowProfile(!showProfile)}
                                className='w-9 h-9 rounded-full cursor-pointer'
                            />
                            {showProfile && (
                                <div className='absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md p-3 flex flex-col gap-3'>
                                    <Link to="/profile" onClick={() => setShowProfile(false)}>
                                        Profile
                                    </Link>
                                    <button
                                        onClick={() => {
                                            setShowProfile(false)
                                            handleLogout()
                                        }}
                                        className="text-left text-red-500"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <Link to="/signin">
                        <button className='border w-12 h-8 text-[10px] text-white bg-black rounded-md font-bold cursor-pointer'>Sign In</button>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Header