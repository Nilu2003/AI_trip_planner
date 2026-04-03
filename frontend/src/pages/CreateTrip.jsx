import React from 'react'
import { budgets, peoples } from '../Constants/cardConstant'
import {useNavigate} from "react-router-dom"



const CreateTrip = () => {
    const navigate=useNavigate()
    return (
        <div className='flex flex-col justify-center items-center gap-10 '>
            <div className='mt-10 max-w-xl'>
                <div className='text-xl font-bold '>Tell us your travel preferences ✈️</div>
                <div className=' mt-3'>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.</div>
            </div>
            <div className='w-full max-w-xl flex flex-col gap-5 '>
                <div className=' '>
                    <p className='font-bold'>What is destination of choice?</p>
                    <input type="text" className='border w-full max-w-xl mt-2 rounded-md' />
                </div>
                <div className=''>
                    <p className='font-bold'>How many days are you planning your trip?</p>
                    <input type="text" className='border w-full max-w-xl mt-2 rounded-md' />
                </div>
                <div className=''>
                    <p className='font-bold'>What is Your Budget?</p>

                    <div className='flex flex-row gap-2 mt-4'>
                        {budgets.map((budget) => (
                        <div key={budget.id} className='shadow-md w-50 h-20 rounded-md hover:outline ' >
                            <div className='ml-2'>{budget.icon}</div>
                            <div className='ml-2 font-bold'>{budget.title}</div>
                            <div className='ml-2 text-[10px]'>{budget.description}</div>
                        </div>
                    ))}
                    </div>

                </div>
                <div className=''>
                    <p className='font-bold'>Who do you plan on traveling with on your next adventure?</p>
                    <div className='flex flex-row gap-2 mt-4'>
                        {peoples.map((people) => (
                        <div key={people.id} className='shadow-md w-50 h-20 rounded-md hover:outline-2' >
                            <div className='ml-2'>{people.icon}</div>
                            <div className='ml-2 font-bold'>{people.title}</div>
                            <div className='ml-2 text-[10px]'>{people.description}</div>
                        </div>
                    ))}
                    </div>

                </div>
                <button
                onClick={() => navigate("/generate-trip")}
                 className='m-5 self-end border bg-black text-[12px] text-white text-bold h-8 w-25 rounded-md'>generate Trip</button>
            </div>
                 
            <div>
            </div>
            
        </div>
    )
}

export default CreateTrip