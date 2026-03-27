'use client';

import Image from "next/image";
import { useState } from "react";
import { 
  MapPinIcon, 
  UserGroupIcon, 
  ClockIcon, 
  StarIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState("Sector 5, Vasundhara");

  const services = [
    {
      title: "Dry Cleaning",
      description: "Professional dry cleaning with premium fabric care",
      icon: "🧸",
      price: "₹50",
      originalPrice: "₹70",
      time: "2-3 days",
      provider: "Ashutosh",
      rating: 4.8,
      reviews: 124,
      tag: "Most Booked",
      tagColor: "bg-blue-600"
    },
    {
      title: "Ironing Services", 
      description: "Expert ironing for all fabric types",
      icon: "👚",
      price: "₹20",
      originalPrice: "₹30",
      time: "Same day",
      provider: "Ashutosh",
      rating: 4.9,
      reviews: 89,
      tag: "Popular",
      tagColor: "bg-purple-600"
    },
    {
      title: "Car Cleaning",
      description: "Complete car wash with interior & exterior care",
      icon: "🚗", 
      price: "₹200",
      originalPrice: "₹300",
      time: "1-2 hours",
      provider: "Govind",
      rating: 4.7,
      reviews: 156,
      tag: "Summer Sale",
      tagColor: "bg-orange-600"
    },
    {
      title: "Instant Help",
      description: "Quick assistance for pickup, delivery & daily tasks",
      icon: "⚡",
      price: "₹30",
      originalPrice: "₹50",
      time: "30 mins",
      provider: "Available",
      rating: 4.6,
      reviews: 67,
      tag: "Top Rated",
      tagColor: "bg-green-600"
    },
    {
      title: "Chole Kulcha",
      description: "Fresh homemade chole kulcha delivered hot",
      icon: "🥘",
      price: "₹80",
      originalPrice: "₹100", 
      time: "45 mins",
      provider: "Karthik",
      rating: 4.9,
      reviews: 234,
      tag: "Top Rated",
      tagColor: "bg-green-600"
    },
    {
      title: "Part-time Jobs",
      description: "Local employment opportunities with fair wages",
      icon: "💼",
      price: "Apply Now",
      originalPrice: "",
      time: "Flexible",
      provider: "Local",
      rating: 0,
      reviews: 0,
      tag: "New",
      tagColor: "bg-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S5</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Sector-5 Works</h1>
                </div>
              </div>
              
              {/* Location Selector */}
              <div className="hidden md:flex items-center space-x-2 px-3 py-2 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                <MapPinIcon className="h-5 w-5 text-indigo-600" />
                <span className="text-base font-medium text-gray-700">{selectedLocation}</span>
                <ChevronDownIcon className="h-4 w-4 text-gray-500" />
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for services"
                  className="w-full pl-10 pr-4 py-3 text-base border border-gray-300 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-6">
                <a href="#services" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                  Services
                </a>
                <a href="#about" className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                  About
                </a>
              </nav>
              
              <ThemeToggle />
              
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <ShoppingCartIcon className="h-6 w-6" />
              </button>
              
              <button className="bg-gray-900 text-white px-6 py-2 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors">
                Staff Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What are you 
            <span className="text-indigo-600"> looking for?</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert services for every need. Local professionals delivering quality services 
            to your doorstep in Sector 5, Vasundhara.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-2xl p-1">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-base font-medium shadow-sm">
              Most Booked
            </button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-900 rounded-xl text-base font-medium transition-colors">
              Popular
            </button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-900 rounded-xl text-base font-medium transition-colors">
              Summer Sale
            </button>
          </div>
        </div>

        {/* Services Grid - Urban Company Style */}
        <section id="services" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Service Tag */}
                {service.tag && (
                  <div className={`${service.tagColor} text-white px-3 py-1 text-xs font-semibold inline-block`}>
                    {service.tag}
                  </div>
                )}
                
                <div className="p-6">
                  {/* Service Icon and Info */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                        {service.description}
                      </p>
                      
                      {/* Time */}
                      <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        <span>{service.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">
                        {service.price}
                      </span>
                      {service.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {service.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    {/* Rating */}
                    {service.rating > 0 && (
                      <div className="flex items-center space-x-1">
                        <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-900">
                          {service.rating}
                        </span>
                        <span className="text-sm text-gray-500">
                          ({service.reviews})
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Provider */}
                  <div className="text-sm text-gray-600 mb-4">
                    by <span className="font-medium text-indigo-600">{service.provider}</span>
                  </div>

                  {/* Book Button */}
                  <button className="w-full bg-gray-900 text-white py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors">
                    + Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coming Soon */}
        <section className="mb-16 bg-gray-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-xl text-gray-600">More services launching in your sector</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { title: "Pharmacy", icon: "💊", description: "Medicine delivery" },
              { title: "Tailors", icon: "✂️", description: "Alterations & stitching" },
              { title: "Shoe Repair", icon: "👟", description: "Professional shoe care" },
              { title: "House Help", icon: "🏠", description: "Cleaning & maintenance" },
              { title: "Gardner", icon: "🌱", description: "Plant care & landscaping" }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center opacity-60"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S5</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Sector-5 Works</span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Quality home services delivered to your doorstep by verified professionals.
              </p>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Company</h3>
              <ul className="space-y-4 text-lg text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* For Customers */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">For Customers</h3>
              <ul className="space-y-4 text-lg text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Reviews</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Categories</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* For Professionals */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">For Professionals</h3>
              <ul className="space-y-4 text-lg text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Register as Pro</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Pro Dashboard</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-200 pt-8 mt-12 text-center">
            <p className="text-gray-600 text-lg">
              © 2026 Sector-5 Works. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}