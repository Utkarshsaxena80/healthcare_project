// src/components/AmbulanceList.js
import React from "react";
import "../amp.css";

const AmbulanceList = ({ ambulances }) => {
  const handleCall = (ambulanceName,distance) => {
    const userName = prompt("Please enter your name:");
    const emergencyType = prompt("Please describe your emergency:");

    if (userName && emergencyType) {
      alert(
        `Calling ${ambulanceName}...\n\nName: ${userName}\n\nEmergency: ${emergencyType} \n\nETA:${distance}`
      );
    } else {
      alert("All fields are required!");
    }
  };

  return (
    <div>
      <h2>Available Ambulances</h2>
      <ul>
        {ambulances.map((ambulance, index) => (
          <li key={index}>
            <h3>{ambulance.name}</h3>
            <p>Distance: {ambulance.distance}</p>
            <p>ETA: {ambulance.eta}</p>
            <p>Phone: {ambulance.phone}</p>
            <button
              onClick={() => handleCall(ambulance.name, ambulance.distance)}
            >
              Call
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AmbulanceList;
