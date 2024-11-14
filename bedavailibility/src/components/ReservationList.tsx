import React from 'react';
import { Reservation } from '../types';
import { ClockIcon, UserIcon, PhoneIcon } from '@heroicons/react/24/outline';

interface ReservationListProps {
  reservations: Reservation[];
}

export const ReservationList: React.FC<ReservationListProps> = ({ reservations }) => {
  if (reservations.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Reservations</h2>
        <p className="text-gray-500">No reservations yet</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Reservations</h2>
      <div className="space-y-4">
        {reservations.map((reservation) => (
          <div
            key={reservation.bedId}
            className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-indigo-600">Bed #{reservation.bedId}</h3>
              <div className="flex items-center text-gray-500 text-sm">
                <ClockIcon className="h-4 w-4 mr-1" />
                {reservation.timestamp.toLocaleTimeString()}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center text-gray-700">
                <UserIcon className="h-5 w-5 mr-2" />
                <span className="font-medium">{reservation.patient.name}</span>
                <span className="mx-2">•</span>
                <span>{reservation.patient.age} years</span>
                <span className="mx-2">•</span>
                <span className="capitalize">{reservation.patient.gender}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <PhoneIcon className="h-5 w-5 mr-2" />
                {reservation.patient.contactNumber}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};