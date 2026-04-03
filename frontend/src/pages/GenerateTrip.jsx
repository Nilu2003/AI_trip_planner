import React from "react";

const hotels = [
  {
    name: "The Venetian Resort Las Vegas",
    address: "3355 Las Vegas Blvd S, Las Vegas, NV",
    price: "$200-$350 per night",
    rating: "4.5",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
  },
  {
    name: "The Cosmopolitan of Las Vegas",
    address: "3708 Las Vegas Blvd S, Las Vegas, NV",
    price: "$250-$450 per night",
    rating: "4.5",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
  },
  {
    name: "The Wynn Las Vegas",
    address: "3131 Las Vegas Blvd S, Las Vegas, NV",
    price: "$300-$500 per night",
    rating: "5",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
  },
  {
    name: "The Palazzo Resort Hotel Casino",
    address: "3325 Las Vegas Blvd S, Las Vegas, NV",
    price: "$220-$380 per night",
    rating: "4.5",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
  }
];

const places = [
  {
    time: "10:00 AM - 12:00 PM",
    title: "High Roller Observation Wheel",
    desc: "360-degree city views.",
    duration: "15 minutes",
    cost: "$30-$40",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    time: "12:00 PM - 2:00 PM",
    title: "The LINQ Promenade",
    desc: "Shopping and dining area.",
    duration: "10 minutes",
    cost: "Free",
    img: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53"
  },
  {
    time: "2:00 PM - 4:00 PM",
    title: "Bellagio Garden",
    desc: "Beautiful botanical garden.",
    duration: "15 minutes",
    cost: "Free",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    time: "4:00 PM - 6:00 PM",
    title: "The Venetian",
    desc: "Luxury resort exploration.",
    duration: "Flexible",
    cost: "Varies",
    img: "https://images.unsplash.com/photo-1496412705862-e0088f16f791"
  }
];

export default function TripPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header Image */}
      <div className="rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mt-4">Las Vegas, NV, USA</h1>

      {/* Tags */}
      <div className="flex gap-3 mt-2">
        <span className="bg-gray-200 px-3 py-1 rounded-full">2 Day</span>
        <span className="bg-gray-200 px-3 py-1 rounded-full">Moderate Budget</span>
        <span className="bg-gray-200 px-3 py-1 rounded-full">5-10 People</span>
      </div>

      {/* Hotels */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Hotel Recommendation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {hotels.map((hotel, i) => (
          <div key={i} className="bg-white shadow rounded-xl overflow-hidden">
            <img src={hotel.img} className="h-40 w-full object-cover" />
            <div className="p-3">
              <h3 className="font-semibold text-sm">{hotel.name}</h3>
              <p className="text-xs text-gray-500">{hotel.address}</p>
              <p className="text-sm mt-1">💰 {hotel.price}</p>
              <p className="text-sm">⭐ {hotel.rating}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Places */}
      <h2 className="text-xl font-semibold mt-8">Places to Visit</h2>
      <h3 className="mt-2 text-gray-600">Day 1</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {places.map((place, i) => (
          <div key={i} className="flex bg-white shadow rounded-xl p-3 gap-3">
            <img src={place.img} className="w-24 h-24 rounded-lg object-cover" />
            <div>
              <p className="text-sm text-orange-500">{place.time}</p>
              <h3 className="font-semibold">{place.title}</h3>
              <p className="text-sm text-gray-500">{place.desc}</p>
              <p className="text-xs mt-1">⏱ {place.duration}</p>
              <p className="text-xs">💰 {place.cost}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
