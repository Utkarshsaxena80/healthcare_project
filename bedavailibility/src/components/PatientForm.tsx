import React, { useState } from 'react';
import { Patient } from '../types';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface PatientFormProps {
  onSubmit: (patient: Patient) => void;
  selectedBedId: number;
  onCancel: () => void;
}

export const PatientForm: React.FC<PatientFormProps> = ({ onSubmit, selectedBedId, onCancel }) => {
  const [patient, setPatient] = useState<Patient>({
    name: '',
    age: '',
    gender: '',
    contactNumber: '',
    emergencyContact: '',
    medicalCondition: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(patient);
  };

  return (
    <div className="relative">
      <button
        onClick={onCancel}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        <XMarkIcon className="h-6 w-6" />
      </button>
      <form onSubmit={handleSubmit} className="space-y-6 p-6">
        <div className="border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-900">Patient Details</h2>
          <p className="mt-1 text-sm text-gray-500">For Bed #{selectedBedId}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              required
              placeholder="John Doe"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={patient.name}
              onChange={(e) => setPatient({ ...patient, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              required
              placeholder="25"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={patient.age}
              onChange={(e) => setPatient({ ...patient, age: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={patient.gender}
              onChange={(e) => setPatient({ ...patient, gender: e.target.value })}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="tel"
              required
              placeholder="+1 (555) 000-0000"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={patient.contactNumber}
              onChange={(e) => setPatient({ ...patient, contactNumber: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Emergency Contact</label>
            <input
              type="tel"
              required
              placeholder="+1 (555) 000-0000"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={patient.emergencyContact}
              onChange={(e) => setPatient({ ...patient, emergencyContact: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Medical Condition</label>
          <textarea
            required
            rows={4}
            placeholder="Please describe the medical condition..."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={patient.medicalCondition}
            onChange={(e) => setPatient({ ...patient, medicalCondition: e.target.value })}
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Confirm Reservation
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-white text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};