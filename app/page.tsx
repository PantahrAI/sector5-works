import Image from "next/image";
import { Clock, Star, MapPin, Phone, Users, Calendar } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Dry Cleaning",
      icon: "👔",
      price: "From ₹50",
      time: "2-3 days"
    },
    {
      title: "Ironing",
      icon: "🧽",
      price: "From ₹20",
      time: "Same day"
    },
    {
      title: "Car Wash",
      icon: "🚗",
      price: "From ₹200",
      time: "1-2 hours"
    },
    {
      title: "Home Cleaning",
      icon: "🏠",
      price: "From ₹300",
      time: "2-3 hours"
    },
    {
      title: "Laundry",
      icon: "👕",
      price: "From ₹30",
      time: "1-2 days"
    },
    {
      title: "Shoe Cleaning",
      icon: "👟",
      price: "From ₹100",
      time: "Same day"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-orange-500" />
            <span className="text-sm text-gray-600">Sector 5, Vasundhara</span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-gray-600" />
            <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-orange-600">S</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Your <span className="text-orange-500">Sector</span>
          </h1>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Your Services
          </h2>
          <h3 className="text-lg font-medium text-orange-500 mb-4">
            Your Schedule
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            What are you looking for today?
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="text-3xl mb-2">{service.icon}</div>
              <h3 className="font-medium text-gray-900 text-sm mb-1">
                {service.title}
              </h3>
              <p className="text-xs text-orange-500 font-medium mb-1">
                {service.price}
              </p>
              <p className="text-xs text-gray-500">{service.time}</p>
            </div>
          ))}
        </div>

        {/* Promo Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-4 mb-8 text-white">
          <h3 className="font-bold text-lg mb-2">Get 25% off on your first booking</h3>
          <p className="text-sm opacity-90 mb-3">Valid till 31st March</p>
          <button className="bg-white text-orange-500 px-4 py-2 rounded-md font-medium text-sm">
            Book Now
          </button>
        </div>

        {/* Bottom Section */}
        <div className="space-y-4">
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Boost Your Local Economy</h4>
            <p className="text-sm text-gray-600 mb-2">
              Pani ki tanki se Asharam tak!
            </p>
            <p className="text-xs text-gray-500">How it works</p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 text-center py-4">
            <div>
              <Clock className="h-6 w-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xs text-gray-600">Quick Service</p>
            </div>
            <div>
              <Star className="h-6 w-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xs text-gray-600">Quality Assured</p>
            </div>
            <div>
              <MapPin className="h-6 w-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xs text-gray-600">Local Partners</p>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black text-white">
        <div className="max-w-md mx-auto grid grid-cols-4 py-2">
          <div className="text-center py-2">
            <div className="text-orange-500">🏠</div>
            <p className="text-xs mt-1">Home</p>
          </div>
          <div className="text-center py-2">
            <div>📋</div>
            <p className="text-xs mt-1">My Bookings</p>
          </div>
          <div className="text-center py-2">
            <div>💬</div>
            <p className="text-xs mt-1">Live Chat Support</p>
          </div>
          <div className="text-center py-2">
            <div>👤</div>
            <p className="text-xs mt-1">My Profile</p>
          </div>
        </div>
      </nav>
    </div>
  );
}