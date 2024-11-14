import React, { useState } from 'react';
import { Search, Calendar } from 'lucide-react';
import DoctorCard from './components/DoctorCard';
import BookingModal from './components/BookingModal';
import ConfirmationModal from './components/ConfirmationModal';

const doctors = [
  {
    id: '1',
    name: 'Dr. Sarah Wilson',
    specialty: 'Cardiologist',
    rating: 4.9,
    location: 'New York Medical Center',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
    experience: 12
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    rating: 4.8,
    location: 'Central Hospital',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
    experience: 15
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    rating: 4.9,
    location: 'Children\'s Medical Center',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
    experience: 8
  },
  {
    id: '4',
    name: 'Dr. James Anderson',
    specialty: 'Orthopedic Surgeon',
    rating: 4.7,
    location: 'Sports Medicine Institute',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300',
    experience: 20
  },
  {
    id: '5',
    name: 'Dr. Lisa Patel',
    specialty: 'Dermatologist',
    rating: 4.9,
    location: 'Skin Care Clinic',
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=300&h=300',
    experience: 10
  },
  {
    id: '6',
    name: 'Dr. Robert Kim',
    specialty: 'Psychiatrist',
    rating: 4.8,
    location: 'Mental Wellness Center',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300',
    experience: 14
  },
  {
    id: '7',
    name: 'Dr. Maria Santos',
    specialty: 'Gynecologist',
    rating: 4.9,
    location: 'Women\'s Health Center',
    image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=300&h=300',
    experience: 16
  },
  {
    id: '8',
    name: 'Dr. David Thompson',
    specialty: 'Ophthalmologist',
    rating: 4.7,
    location: 'Vision Care Institute',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=300&h=300',
    experience: 13
  },
  {
    id: '9',
    name: 'Dr. Rachel Greene',
    specialty: 'Endocrinologist',
    rating: 4.8,
    location: 'Diabetes & Hormone Center',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=300&h=300',
    experience: 11
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [bookingDetails, setBookingDetails] = useState<any>(null);

  const handleBooking = (doctorId: string, time: string) => {
    setSelectedDoctor(doctorId);
    setSelectedTime(time);
    setBookingModalOpen(true);
  };

  const handleConfirmBooking = (userData: { name: string; phone: string }) => {
    const doctor = doctors.find(d => d.id === selectedDoctor);
    setBookingDetails({
      doctorName: doctor?.name,
      time: selectedTime,
      patientName: userData.name,
      phone: userData.phone
    });
    setBookingModalOpen(false);
    setConfirmationModalOpen(true);
  };

  const specialties = [...new Set(doctors.map(doctor => doctor.specialty))];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialty.toLowerCase() === selectedSpecialty.toLowerCase();
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-indigo-600" />
              <h1 className="text-xl font-semibold text-gray-900">DocSchedule</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Find and Book Your Doctor
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule appointments with top-rated doctors in your area
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-4 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              <option value="all">All Specialties</option>
              {specialties.sort().map(specialty => (
                <option key={specialty} value={specialty.toLowerCase()}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Doctor List */}
        <div className="grid grid-cols-1 gap-6">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              {...doctor}
              onBooking={handleBooking}
            />
          ))}
        </div>
      </main>

      {/* Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        doctorName={doctors.find(d => d.id === selectedDoctor)?.name || ''}
        time={selectedTime}
        onConfirm={handleConfirmBooking}
      />

      <ConfirmationModal
        isOpen={confirmationModalOpen}
        onClose={() => setConfirmationModalOpen(false)}
        bookingDetails={bookingDetails}
      />
    </div>
  );
}

export default App;