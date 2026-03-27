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
      icon: "/icons/dry-cleaning.svg",
      price: "₹50",
      originalPrice: "₹70",
      time: "2-3 days",
      provider: "Ashutosh",
      rating: 4.8,
      reviews: 124,
      tag: "Most Booked"
    },
    {
      title: "Ironing Services", 
      description: "Expert ironing for all fabric types",
      icon: "/icons/ironing.svg",
      price: "₹20",
      originalPrice: "₹30",
      time: "Same day",
      provider: "Ashutosh",
      rating: 4.9,
      reviews: 89,
      tag: "Popular"
    },
    {
      title: "Car Cleaning",
      description: "Complete car wash with interior & exterior care",
      icon: "/icons/car-wash.svg", 
      price: "₹200",
      originalPrice: "₹300",
      time: "1-2 hours",
      provider: "Govind",
      rating: 4.7,
      reviews: 156,
      tag: "Summer Sale"
    },
    {
      title: "Instant Help",
      description: "Quick assistance for pickup, delivery & daily tasks",
      icon: "/icons/instant-help.svg",
      price: "₹30",
      originalPrice: "₹50",
      time: "30 mins",
      provider: "Available",
      rating: 4.6,
      reviews: 67,
      tag: ""
    },
    {
      title: "Chole Kulcha",
      description: "Fresh homemade chole kulcha delivered hot",
      icon: "/icons/food.svg",
      price: "₹80",
      originalPrice: "₹100", 
      time: "45 mins",
      provider: "Karthik",
      rating: 4.9,
      reviews: 234,
      tag: "Top Rated"
    },
    {
      title: "Part-time Jobs",
      description: "Local employment opportunities with fair wages",
      icon: "/icons/jobs.svg",
      price: "Apply Now",
      originalPrice: "",
      time: "Flexible",
      provider: "Local",
      rating: 0,
      reviews: 0,
      tag: "New"
    }
  ];

  const comingSoonServices = [
    { title: "Pharmacy", icon: "/icons/pharmacy.svg", description: "Medicine delivery" },
    { title: "Tailors", icon: "/icons/tailor.svg", description: "Alterations & stitching" },
    { title: "Shoe Repair", icon: "/icons/shoe-repair.svg", description: "Professional shoe care" },
    { title: "House Help", icon: "/icons/house-help.svg", description: "Cleaning & maintenance" },
    { title: "Gardner", icon: "/icons/gardening.svg", description: "Plant care & landscaping" }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Choose a service",
      description: "Pick from our wide range of home services and select a convenient time slot.",
      icon: "📋"
    },
    {
      step: "2", 
      title: "Get a verified pro",
      description: "A background-checked, trained professional is assigned to your booking.",
      icon: "👨‍🔧"
    },
    {
      step: "3",
      title: "Sit back & relax", 
      description: "The professional arrives at your doorstep and delivers quality service.",
      icon: "⭐"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Desktop Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S5</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">Sector-5 Works</h1>
                </div>
              </div>
              
              {/* Location Selector */}
              <div className="hidden md:flex items-center space-x-2 px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <MapPinIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-base font-medium text-gray-700 dark:text-gray-300">{selectedLocation}</span>
                <ChevronDownIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for services"
                  className="w-full pl-10 pr-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-6">
                <a href="#services" className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Services
                </a>
                <a href="#about" className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  About
                </a>
              </nav>
              
              <ThemeToggle />
              
              <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <ShoppingCartIcon className="h-6 w-6" />
              </button>
              
              <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-2 rounded-lg text-base font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
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
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            What are you 
            <span className="text-indigo-600 dark:text-indigo-400"> looking for?</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert services for every need. Local professionals delivering quality services 
            to your doorstep in Sector 5, Vasundhara.
          </p>
        </div>

        {/* Services Grid */}
        <section id="services" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-600 cursor-pointer"
              >
                {/* Service Tag */}
                {service.tag && (
                  <div className="bg-indigo-600 text-white px-4 py-2 text-sm font-medium">
                    {service.tag}
                  </div>
                )}
                
                <div className="p-8">
                  {/* Service Icon */}
                  <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">{service.title === 'Dry Cleaning' ? '👔' : 
                                                   service.title === 'Ironing Services' ? '👚' :
                                                   service.title === 'Car Cleaning' ? '🚗' :
                                                   service.title === 'Instant Help' ? '⚡' :
                                                   service.title === 'Chole Kulcha' ? '🥘' : '💼'}</span>
                  </div>

                  {/* Service Info */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {service.price}
                    </span>
                    {service.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        {service.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Rating & Reviews */}
                  {service.rating > 0 && (
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex items-center space-x-1">
                        <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="text-base font-medium text-gray-900 dark:text-white">
                          {service.rating}
                        </span>
                      </div>
                      <span className="text-base text-gray-500 dark:text-gray-400">
                        ({service.reviews} reviews)
                      </span>
                    </div>
                  )}

                  {/* Time & Provider */}
                  <div className="flex items-center justify-between text-base text-gray-600 dark:text-gray-400 mb-6">
                    <span className="flex items-center space-x-1">
                      <ClockIcon className="h-5 w-5" />
                      <span>{service.time}</span>
                    </span>
                    <span className="font-medium text-indigo-600 dark:text-indigo-400">
                      by {service.provider}
                    </span>
                  </div>

                  {/* Book Button */}
                  <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 rounded-xl text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors group-hover:scale-105 transform duration-200">
                    + Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it Works */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">How it works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">3 simple steps to get started</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Promo Banner */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-base font-medium mb-6">
                🕒 Limited Time Offer
              </div>
              <h2 className="text-5xl font-bold mb-6">
                Get 25% off on your first booking
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                New to Sector-5 Works? Use code <span className="font-bold bg-white/20 px-3 py-1 rounded">FIRST25</span> at checkout.
              </p>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
                Book Now →
              </button>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 border border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Coming Soon</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">More services launching in your sector</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {comingSoonServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/50 dark:bg-gray-800/50 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center opacity-70"
              >
                <div className="text-4xl mb-4">{service.title === 'Pharmacy' ? '💊' :
                                                   service.title === 'Tailors' ? '✂️' :
                                                   service.title === 'Shoe Repair' ? '👟' :
                                                   service.title === 'House Help' ? '🏠' : '🌱'}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S5</span>
                </div>
                <span className="text-xl font-bold">Sector-5 Works</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Quality home services delivered to your doorstep by verified professionals.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span>📘</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span>🐦</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span>📷</span>
                </div>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Company</h3>
              <ul className="space-y-4 text-lg text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* For Customers */}
            <div>
              <h3 className="text-xl font-semibold mb-6">For Customers</h3>
              <ul className="space-y-4 text-lg text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              </ul>
            </div>

            {/* For Professionals */}
            <div>
              <h3 className="text-xl font-semibold mb-6">For Professionals</h3>
              <ul className="space-y-4 text-lg text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Register as Pro</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pro Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-gray-800 pt-12 mt-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-semibold mb-2">Subscribe to our newsletter</h3>
                <p className="text-gray-400 text-lg">Get the latest updates and offers</p>
              </div>
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-80"
                />
                <button className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 pt-8 mt-12 text-center">
            <p className="text-gray-400 text-lg">
              © 2026 Sector-5 Works. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}