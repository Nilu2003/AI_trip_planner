import React, { useState } from 'react'
import { budgets, peoples } from '../Constants/cardConstant'
import { useNavigate } from "react-router-dom"
import API from '../api/api'

const CreateTrip = () => {
    const [tripData, setTripData] = useState({
        location: "",
        days: "",
        budget: "",
        people: ""
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const handleGenerateTrip = async () => {
        const storedUser = localStorage.getItem("user")

        if (!storedUser) {
            navigate("/signin", { state: { message: "Please login first" } })
            return
        }

        if (!tripData.location || !tripData.days || !tripData.budget || !tripData.people) {
            setError("Please fill all fields")
            return
        }

        try {
            setLoading(true)
            setError("")
            localStorage.removeItem("trip")

            const res = await API.post("/trip/create-trip", tripData)

            localStorage.setItem("trip", JSON.stringify(res.data.data))
            navigate("/generate-trip")

        } catch (err) {
            if (err.response) {
                setError(err.response.data?.message || "Something went wrong")
            } else if (err.request) {
                setError("Server not responding. Try again later.")
            } else {
                setError("Unexpected error occurred")
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='flex flex-col items-center gap-8 px-4 sm:px-6 md:px-8'>

            
            <div className='mt-8 max-w-2xl text-center'>
                <div className='font-bold text-xl sm:text-2xl md:text-3xl'>
                    Tell us your travel preferences ✈️
                </div>
                <div className='mt-3 text-sm sm:text-base text-gray-600'>
                    Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
                </div>
            </div>

            
            {error && (
                <p className="text-red-500 text-sm text-center">
                    {error}
                </p>
            )}

            <div className='w-full max-w-2xl flex flex-col gap-6'>

                
                <div>
                    <p className='font-semibold text-sm sm:text-base'>Destination</p>
                    <input
                        type="text"
                        onChange={(e) => setTripData({ ...tripData, location: e.target.value })}
                        className='border w-full mt-2 rounded-md p-2 text-sm sm:text-base'
                    />
                </div>

                {/* Days */}
                <div>
                    <p className='font-semibold text-sm sm:text-base'>Number of Days</p>
                    <input
                        type="text"
                        onChange={(e) => setTripData({ ...tripData, days: e.target.value })}
                        className='border w-full mt-2 rounded-md p-2 text-sm sm:text-base'
                    />
                </div>

                
                <div>
                    <p className='font-semibold text-sm sm:text-base'>Select Budget</p>

                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3'>
                        {budgets.map((budget) => (
                            <div
                                key={budget.id}
                                onClick={() => setTripData({ ...tripData, budget: budget.title })}
                                className={`shadow-md rounded-md cursor-pointer p-2 transition text-center 
                                ${tripData.budget === budget.title ? "outline outline-black" : "hover:outline"}`}
                            >
                                <div>{budget.icon}</div>
                                <div className='font-bold text-sm'>{budget.title}</div>
                                <div className='text-[10px] text-gray-500'>{budget.description}</div>
                            </div>
                        ))}
                    </div>
                </div>

                
                <div>
                    <p className='font-semibold text-sm sm:text-base'>Travel With</p>

                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3'>
                        {peoples.map((people) => (
                            <div
                                key={people.id}
                                onClick={() => setTripData({ ...tripData, people: people.title })}
                                className={`shadow-md rounded-md cursor-pointer p-2 transition text-center 
                                ${tripData.people === people.title ? "outline outline-black" : "hover:outline"}`}
                            >
                                <div>{people.icon}</div>
                                <div className='font-bold text-sm'>{people.title}</div>
                                <div className='text-[10px] text-gray-500'>{people.description}</div>
                            </div>
                        ))}
                    </div>
                </div>

                
                <button
                    onClick={handleGenerateTrip}
                    disabled={loading}
                    className='w-full sm:w-auto self-center sm:self-end bg-black text-white px-5 py-2 rounded-md flex justify-center items-center'
                >
                    {loading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        "Generate Trip"
                    )}
                </button>

                {loading && (
                    <p className='text-sm text-gray-500 text-center sm:text-right'>
                        Please wait, generating your trip...
                    </p>
                )}

            </div>
        </div>
    )
}

export default CreateTrip