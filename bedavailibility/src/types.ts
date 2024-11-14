export interface Hospital {
  id: number;
  name: string;
  location: string;
  totalBeds: number;
  type: 'Public' | 'Private';
  beds: Bed[];
}

export interface Bed {
  id: number;
  isAvailable: boolean;
  ward: string;
  type: 'General' | 'ICU' | 'Emergency';
}

export interface Patient {
  name: string;
  age: string;
  gender: string;
  contactNumber: string;
  emergencyContact: string;
  medicalCondition: string;
}

export interface Reservation {
  hospitalId: number;
  bedId: number;
  patient: Patient;
  timestamp: Date;
}