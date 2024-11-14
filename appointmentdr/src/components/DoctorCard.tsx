import React from 'react';
import { Calendar, Clock, MapPin, Star, Phone } from 'lucide-react';

interface DoctorProps {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  location: string;
  image: string;
  experience: number;
  onBooking: (doctorId: string, time: string) => void;
}

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '02:00 PM', '03:00 PM', '04:00 PM'
];

export default function DoctorCard({
  id,
  name,
  specialty,
  rating,
  location,
  image,
  experience,
  onBooking
}: DoctorProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="flex gap-4 p-4">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-indigo-600 font-medium">{specialty}</p>
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-gray-600">{rating.toFixed(1)} • {experience} years exp.</span>
          </div>
          <div className="flex items-center gap-1 mt-1 text-gray-500">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-100 p-4">
        <div className="flex flex-wrap gap-2">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => onBooking(id, time)}
              className="px-3 py-1 text-sm rounded-full border border-indigo-100 text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}