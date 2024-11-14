import React from 'react';
import { Hospital } from '../types';
import { BuildingOffice2Icon, MapPinIcon } from '@heroicons/react/24/outline';

interface HospitalCardProps {
  hospital: Hospital;
  onSelect: (hospital: Hospital) => void;
}

export const HospitalCard: React.FC<HospitalCardProps> = ({ hospital, onSelect }) => {
  const availableBeds = hospital.beds.filter(bed => bed.isAvailable).length;
  
  return (
    <div 
      className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer"
      onClick={() => onSelect(hospital)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <BuildingOffice2Icon className="h-8 w-8 text-indigo-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{hospital.name}</h3>
              <div className="flex items-center text-gray-500 mt-1">
                <MapPinIcon className="h-4 w-4 mr-1" />
                <span className="text-sm">{hospital.location}</span>
              </div>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            hospital.type === 'Public' 
              ? 'bg-blue-100 text-blue-800' 
              : 'bg-purple-100 text-purple-800'
          }`}>
            {hospital.type}
          </span>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900">{availableBeds}</div>
            <div className="text-xs text-gray-500">Available</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900">{hospital.totalBeds}</div>
            <div className="text-xs text-gray-500">Total Beds</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900">
              {Math.round((availableBeds / hospital.totalBeds) * 100)}%
            </div>
            <div className="text-xs text-gray-500">Availability</div>
          </div>
        </div>
      </div>
    </div>
  );
};