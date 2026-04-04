import { generateTripPlan } from "../services/ai.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Trip } from "../models/trip.model.js";

const createTrip = asyncHandler(async (req,res) => {
    const {days,location,people,budget}=req.body
    // console.log(req.body);
    
   
const prompt = `
You are a professional travel planner.

Generate a complete travel plan in STRICT JSON format only.
Do NOT include any explanation or text outside JSON.

User Details:
- Location: ${location}
- Days: ${days}
- People: ${people} (single, couple, family, group)
- Budget: ${budget} (cheap, moderate, luxury)

Requirements:

1. Provide hotel recommendations with:
   - name
   - address
   - price_range (e.g. "₹1000-₹2500 per night")
   - rating (out of 5)
   - image_url (real image link)
   - google_map_link

2. Provide day-wise places with TIME SLOTS (IMPORTANT for UI cards):
Each place must include:
   - place_name
   - description (short)
   - time_slot (e.g. "10:00 AM - 12:00 PM")
   - duration (e.g. "15 minutes", "2 hours")
   - cost (e.g. "₹300-₹400" or "Free")
   - image_url (real image link)
   - google_map_link

3. Day-wise itinerary format:
   - day
   - area_covered
   - places (array of places with time slots)
   - food_suggestions (array)
   - daily_cost_estimate

4. Provide total budget summary:
   - hotel_cost
   - food_cost
   - travel_cost
   - total_cost

5. Response must be in EXACT format:

{
  "summary": "",
  "hotels": [
    {
      "name": "",
      "address": "",
      "price_range": "",
      "rating": "",
      "image_url": "",
      "google_map_link": ""
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "area_covered": "",
      "places": [
        {
          "place_name": "",
          "description": "",
          "time_slot": "",
          "duration": "",
          "cost": "",
          "image_url": "",
          "google_map_link": ""
        }
      ],
      "food_suggestions": [],
      "daily_cost_estimate": ""
    }
  ],
  "budget_summary": {
    "hotel_cost": "",
    "food_cost": "",
    "travel_cost": "",
    "total_cost": ""
  }
}

IMPORTANT:
- Return ONLY valid JSON
- No markdown
- No explanation
- No extra text
- Ensure all fields are filled
- Use realistic data (real places, real-like prices)
`;

    const aiResponse=await generateTripPlan(prompt)
      const clean = aiResponse.replace(/```json|```/g, "").trim();

    let data;
    try {
        data = JSON.parse(clean);
    } catch (error) {
        throw new Error("Invalid AI JSON");
    }
    // console.log(data);

    return res.status(200).json(new ApiResponse(200,data,"response fetche sucessfully"))
    

})






const saveTrip = asyncHandler(async (req, res) => {
    const { location, days, people, budget, tripData } = req.body;

    const trip = await Trip.create({
        location,
        days,
        people,
        budget,
        tripData
    });

    res.status(201).json(
        new ApiResponse(201, trip, "Trip saved successfully")
    );
});


export {createTrip,
  saveTrip 

}

