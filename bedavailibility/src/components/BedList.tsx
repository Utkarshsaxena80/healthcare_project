import React from 'react';
import { Bed } from '../types';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

interface BedListProps {
  beds: Bed[];
  onSelectBed: (bedId: number) => void;
  hospitalName: string;
}

export const BedList: React.FC<BedListProps> = ({ beds, onSelectBed, hospitalName }) => {
  const getBedTypeColor = (type: string) => {
    switch (type) {
      case 'ICU': return 'text-amber-600';
      case 'Emergency': return 'text-red-600';
      default: return 'text-blue-600';
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
      {beds.map((bed) => (
        <div
          key={bed.id}
          className={`relative p-6 rounded-xl border-2 transition-all duration-200 ${
            bed.isAvailable
              ? 'border-emerald-500 bg-emerald-50 cursor-pointer hover:bg-emerald-100 hover:shadow-lg transform hover:-translate-y-1'
              : 'border-rose-500 bg-rose-50 cursor-not-allowed opacity-75'
          }`}
          onClick={() => bed.isAvailable && onSelectBed(bed.id)}
        >
          {bed.isAvailable ? (
            <CheckCircleIcon className="h-6 w-6 absolute top-3 right-3 text-emerald-500" />
          ) : (
            <XCircleIcon className="h-6 w-6 absolute top-3 right-3 text-rose-500" />
          )}
          <h3 className="text-lg font-semibold mb-2">Bed #{bed.id}</h3>
          <p className={`text-sm ${getBedTypeColor(bed.type)} font-medium mb-1`}>
            {bed.ward} Ward
          </p>
          <p className={bed.isAvailable ? 'text-emerald-600 font-medium' : 'text-rose-600 font-medium'}>
            {bed.isAvailable ? 'Available' : 'Occupied'}
          </p>
        </div>
      ))}
    </div>
  );
};