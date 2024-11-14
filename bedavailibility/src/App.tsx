import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { BedList } from './components/BedList';
import { PatientForm } from './components/PatientForm';
import { ReservationList } from './components/ReservationList';
import { HospitalCard } from './components/HospitalCard';
import { Hospital, Patient, Reservation } from './types';
import { hospitals as initialHospitals } from './data/hospitals';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

function App() {
  const [hospitals, setHospitals] = useState<Hospital[]>(initialHospitals);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [selectedBedId, setSelectedBedId] = useState<number | null>(null);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [showPatientForm, setShowPatientForm] = useState(false);

  const handleHospitalSelect = (hospital: Hospital) => {
    setSelectedHospital(hospital);
  };

  const handleBedSelect = (bedId: number) => {
    setSelectedBedId(bedId);
    setShowPatientForm(true);
  };

  const handlePatientSubmit = (patient: Patient) => {
    if (selectedHospital && selectedBedId) {
      const newReservation: Reservation = {
        hospitalId: selectedHospital.id,
        bedId: selectedBedId,
        patient,
        timestamp: new Date(),
      };

      setReservations([...reservations, newReservation]);
      
      setHospitals(hospitals.map(h => {
        if (h.id === selectedHospital.id) {
          return {
            ...h,
            beds: h.beds.map(b =>
              b.id === selectedBedId ? { ...b, isAvailable: false } : b
            ),
          };
        }
        return h;
      }));

      setShowPatientForm(false);
      setSelectedBedId(null);
      toast.success('Bed reserved successfully!', {
        duration: 3000,
        position: 'top-right',
        style: {
          background: '#10B981',
          color: '#FFFFFF',
        },
      });
    }
  };

  const handleBack = () => {
    if (showPatientForm) {
      setShowPatientForm(false);
      setSelectedBedId(null);
    } else {
      setSelectedHospital(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Hospital Bed Reservation System
          </h1>
          <p className="text-lg text-gray-600">
            Find and reserve hospital beds across the city
          </p>
        </div>

        {selectedHospital ? (
          <>
            <button
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Hospitals
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="border-b border-gray-100 p-6">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedHospital.name}</h2>
                  <p className="text-sm text-gray-500 mt-1">Click on an available bed to make a reservation</p>
                </div>
                <BedList 
                  beds={selectedHospital.beds} 
                  onSelectBed={handleBedSelect}
                  hospitalName={selectedHospital.name}
                />
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                {showPatientForm && selectedBedId ? (
                  <PatientForm
                    onSubmit={handlePatientSubmit}
                    selectedBedId={selectedBedId}
                    onCancel={() => {
                      setShowPatientForm(false);
                      setSelectedBedId(null);
                    }}
                  />
                ) : (
                  <ReservationList 
                    reservations={reservations.filter(r => r.hospitalId === selectedHospital.id)} 
                  />
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitals.map((hospital) => (
              <HospitalCard
                key={hospital.id}
                hospital={hospital}
                onSelect={handleHospitalSelect}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;