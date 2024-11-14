import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingDetails: {
    doctorName: string;
    time: string;
    patientName: string;
    phone: string;
  };
}

export default function ConfirmationModal({
  isOpen,
  onClose,
  bookingDetails,
}: ConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Appointment Confirmed!
          </h3>
          <p className="text-gray-600 mb-6">
            Your appointment has been successfully booked.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
          <p className="text-gray-700">
            <span className="font-medium">Doctor:</span> {bookingDetails.doctorName}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Time:</span> {bookingDetails.time}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Patient:</span> {bookingDetails.patientName}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Phone:</span> {bookingDetails.phone}
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );
}