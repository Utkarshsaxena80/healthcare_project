import React from "react";
import { PackageSearch, Building2, Ambulance, Calendar } from "lucide-react";
import Navbar from "./components/Navbar";
import ServiceCard from "./components/ServiceCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=2000"
          alt="Healthcare"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-4">
              Your Health, Our Priority
            </h1>
            <p className="text-xl max-w-2xl">
              Providing comprehensive healthcare services with state-of-the-art
              facilities and experienced medical professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div onClick={() => console.log("clicked")}>
            <ServiceCard
              Icon={PackageSearch}
              title="Inventory Management"
              description="Track and manage medical supplies and equipment efficiently"
            />
          </div>
          <div onClick={() => console.log("clicked")}>
            <ServiceCard
              Icon={Building2}
              title="Bed Services"
              description="Access Bed and Room details and availability at your fingertips"
            />
          </div>
          <div onClick={() => console.log("clicked")}>
            <ServiceCard
              Icon={Ambulance}
              title="24/7 Ambulance"
              description="Emergency medical transportation services available round the clock"
            />
          </div>
          <div onClick={() => console.log("clicked")}>
            <ServiceCard
              Icon={Calendar}
              title="Appointments"
              description="Easy online booking for consultations and medical services"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Medical Assistance?
          </h2>
          <p className="text-blue-100 mb-8">
            Our team is available 24/7 to help you with any medical emergencies
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Contact Us Now
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
