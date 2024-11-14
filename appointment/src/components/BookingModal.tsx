import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctorName: string;
  time: string;
  onConfirm: (data: { name: string; phone: string }) => void;
}

export default function BookingModal({
  isOpen,
  onClose,
  doctorName,
  time,
  onConfirm,
}: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim()) {
      setError('Please fill in all fields');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    onConfirm({ name, phone });
    setName('');
    setPhone('');
    setError('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Book Appointment
        </h3>

        <div className="mb-6 p-3 bg-indigo-50 rounded-lg">
          <p className="text-indigo-700 font-medium">{doctorName}</p>
          <p className="text-indigo-600 text-sm">Time: {time}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your phone number"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}