// src/components/AmbulanceList.js
import React from "react";
import "../amp.css";

const AmbulanceList = ({ ambulances }) => {
  const handleCall = (ambulanceName,distance,phone) => {
    const userName = prompt("Please enter your name:");
    const emergencyType = prompt("Please describe your emergency:");

    if (userName && emergencyType) {
      alert(
        `Calling ${ambulanceName}...\n\nName: ${userName}\n\nEmergency: ${emergencyType} \n\nETA:${distance}\n\nPhone Number: ${phone}`
      );
    } else {
      alert("All fields are required!");
    }
  };

  return (
    <div>
      <h1>Available Ambulances</h1>
      <ul>
        {ambulances.map((ambulance, index) => (
          <li key={index}>
            <h2 className="i">{ambulance.name}</h2>
            <h4>Distance: {ambulance.distance}</h4>
            <h4>ETA: {ambulance.eta}</h4>
            <h4>Phone: {ambulance.phone}</h4>
            <button
              onClick={() =>
                handleCall(ambulance.name, ambulance.distance, ambulance.phone)
              }
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