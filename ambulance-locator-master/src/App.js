// src/App.js
import React, { useState } from "react";
import AmbulanceList from "./components/AmbulanceList";
import "./App.css";

const App = () => {
  const [location, setLocation] = useState("");
  const [showAmbulances, setShowAmbulances] = useState(false);

  const ambulances = [
    {
      name: "City Ambulance Service",
      distance: "2.5 KM",
      eta: "7 minutes",
      phone: "(555) 123-4567",
    },
    {
      name: "Metro Health Ambulance",
      distance: "3.0 KM",
      eta: "10 minutes",
      phone: "(555) 234-5678",
    },
    {
      name: "Rapid Response Ambulance",
      distance: "1.8 KM",
      eta: "5 minutes",
      phone: "(555) 345-6789",
    },
    {
      name: "Emergency Medical Services",
      distance: "4.2 KM",
      eta: "12 minutes",
      phone: "(555) 456-7890",
    },
    {
      name: "Community Ambulance",
      distance: "3.5 KM",
      eta: "9 minutes",
      phone: "(555) 567-8901",
    },
    {
      name: "First Response Ambulance",
      distance: "2.0 KM",
      eta: "6 minutes",
      phone: "(555) 678-9012",
    },
    {
      name: "Rescue Ambulance Service",
      distance: "3.1 KM",
      eta: "8 minutes",
      phone: "(555) 789-0123",
    },
  ];

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      setShowAmbulances(true);
    } else {
      alert("Please enter a valid location.");
    }
  };

  return (
    <div>
      <h1>Ambulance Locator</h1>
      <form onSubmit={handleLocationSubmit}>
        <input
          type="text"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Find Ambulances</button>
      </form>
      {showAmbulances && <AmbulanceList ambulances={ambulances} />}
    </div>
  );
};

export default App;
