import React, { useEffect, useState } from "react";

export default function TripPage() {
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("trip");
    if (data) {
      setTrip(JSON.parse(data));
    }
  }, []);

  if (!trip) return <p className="text-center mt-10">Loading...</p>;

  const hotels = trip.hotels || [];
  const itinerary = trip.itinerary || [];

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-4 max-w-7xl mx-auto">

     
      <div className="rounded-2xl overflow-hidden">
        <img
          src={itinerary[0]?.places[0]?.image_url}
          className="w-full h-48 sm:h-64 object-cover"
          alt="trip"
        />
      </div>

      
      <h1 className="text-lg sm:text-2xl font-bold mt-4">
        {trip.summary}
      </h1>

      
      <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">
        Hotel Recommendation
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {hotels.map((hotel, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
            onClick={() => window.open(hotel.google_map_link, "_blank")}
          >
            <img
              src={hotel.image_url}
              className="h-36 sm:h-40 w-full object-cover"
              alt="hotel"
            />
            <div className="p-3">
              <h3 className="font-semibold text-sm sm:text-base">
                {hotel.name}
              </h3>
              <p className="text-xs text-gray-500">{hotel.address}</p>
              <p className="text-sm mt-1">💰 {hotel.price_range}</p>
              <p className="text-sm">⭐ {hotel.rating}</p>
            </div>
          </div>
        ))}
      </div>

     
      <h2 className="text-lg sm:text-xl font-semibold mt-6">
        Places to Visit
      </h2>

      {itinerary.map((dayData, index) => (
        <div key={index}>
          <h3 className="mt-4 text-gray-600 text-sm sm:text-base">
            Day {dayData.day} - {dayData.area_covered}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
            {dayData.places.map((place, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row bg-white shadow rounded-xl p-3 gap-3 cursor-pointer hover:scale-105 transition"
                onClick={() => window.open(place.google_map_link, "_blank")}
              >
                <img
                  src={place.image_url}
                  className="w-full sm:w-24 h-40 sm:h-24 rounded-lg object-cover"
                  alt="place"
                />
                <div>
                  <p className="text-xs sm:text-sm text-orange-500">
                    {place.time_slot}
                  </p>
                  <h3 className="font-semibold text-sm sm:text-base">
                    {place.place_name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {place.description}
                  </p>
                  <p className="text-xs mt-1">⏱ {place.duration}</p>
                  <p className="text-xs">💰 {place.cost}</p>
                </div>
              </div>
            ))}
          </div>

          
          <p className="mt-2 text-xs sm:text-sm text-gray-700">
            💸 Daily Cost: {dayData.daily_cost_estimate}
          </p>
        </div>
      ))}

  
      <h2 className="text-lg sm:text-xl font-semibold mt-6">
        Budget Summary
      </h2>

      <div className="bg-gray-100 p-3 sm:p-4 rounded-md mt-3 text-sm sm:text-base">
        <p>🏨 Hotel: {trip.budget_summary.hotel_cost}</p>
        <p>🍜 Food: {trip.budget_summary.food_cost}</p>
        <p>🚗 Travel: {trip.budget_summary.travel_cost}</p>
        <p className="font-bold mt-2">
          💰 Total: {trip.budget_summary.total_cost}
        </p>
      </div>

    </div>
  );
}