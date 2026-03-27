import Image from "next/image";
import { Clock, Star, MapPin, Phone, Users, Calendar } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Dry Cleaning",
      icon: "👔",
      price: "From ₹50",
      time: "2-3 days",
      provider: "Ashutosh"
    },
    {
      title: "Ironing",
      icon: "🧽", 
      price: "From ₹20",
      time: "Same day",
      provider: "Ashutosh"
    },
    {
      title: "Car Wash",
      icon: "🚗",
      price: "From ₹200", 
      time: "1-2 hours",
      provider: "Govind"
    },
    {
      title: "Instant Help",
      icon: "⚡",
      price: "From ₹30",
      time: "30 mins",
      provider: "Available"
    },
    {
      title: "Chole Kulcha",
      icon: "🥘", 
      price: "From ₹80",
      time: "45 mins",
      provider: "Karthik"
    },
    {
      title: "Part-time Jobs",
      icon: "💼",
      price: "Apply Now",
      time: "Flexible",
      provider: "Local"
    }
  ];

  const comingSoonServices = [
    { title: "Pharmacy", icon: "💊", status: "Coming Soon" },
    { title: "Tailors", icon: "✂️", status: "Coming Soon" },
    { title: "Shoe Repair", icon: "👟", status: "Coming Soon" },
    { title: "House Help", icon: "🏠", status: "Coming Soon" },
    { title: "Gardner", icon: "🌱", status: "Coming Soon" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-indigo-600" />
            <span className="text-sm text-gray-600">Sector 5, Vasundhara</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600 font-medium">
              Staff Login
            </button>
            <Users className="h-5 w-5 text-gray-600" />
            <div className="h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-indigo-600">S</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Your <span className="text-indigo-600">Sector</span>
          </h1>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Your Services
          </h2>
          <h3 className="text-lg font-medium text-blue-600 mb-4">
            Your Schedule
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Local services by your neighbors, for your neighbors
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 text-center active:scale-95 transition-transform cursor-pointer shadow-sm"
            >
              <div className="text-3xl mb-2">{service.icon}</div>
              <h3 className="font-medium text-gray-900 text-sm mb-1">
                {service.title}
              </h3>
              <p className="text-xs text-blue-600 font-medium mb-1">
                {service.price}
              </p>
              <p className="text-xs text-gray-500 mb-1">{service.time}</p>
              <p className="text-xs text-indigo-500 font-medium">
                by {service.provider}
              </p>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Coming Soon to Your Sector
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {comingSoonServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center opacity-70"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <h3 className="font-medium text-gray-700 text-xs mb-1">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500">{service.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Promo Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg p-4 mb-8 text-white">
          <h3 className="font-bold text-lg mb-2">Welcome to Sector5 Works</h3>
          <p className="text-sm opacity-90 mb-3">No commission • Direct support • Local economy</p>
          <button className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium text-sm active:scale-95 transition-transform">
            Start Booking
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
              <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <p className="text-xs text-gray-600">Quick Service</p>
            </div>
            <div>
              <Star className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
              <p className="text-xs text-gray-600">No Commission</p>
            </div>
            <div>
              <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <p className="text-xs text-gray-600">Local Economy</p>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white">
        <div className="max-w-md mx-auto grid grid-cols-4 py-2">
          <div className="text-center py-2 active:bg-gray-800 transition-colors">
            <div className="text-blue-400">🏠</div>
            <p className="text-xs mt-1">Home</p>
          </div>
          <div className="text-center py-2 active:bg-gray-800 transition-colors">
            <div>📋</div>
            <p className="text-xs mt-1">Bookings</p>
          </div>
          <div className="text-center py-2 active:bg-gray-800 transition-colors">
            <div>💼</div>
            <p className="text-xs mt-1">Jobs</p>
          </div>
          <div className="text-center py-2 active:bg-gray-800 transition-colors">
            <div>👤</div>
            <p className="text-xs mt-1">Profile</p>
          </div>
        </div>
      </nav>
    </div>
  );
}