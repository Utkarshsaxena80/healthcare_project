import { Hospital } from '../types';

export const hospitals: Hospital[] = [
  {
    id: 1,
    name: 'City General Hospital',
    location: 'Downtown, Metro City',
    totalBeds: 8,
    type: 'Public',
    beds: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      isAvailable: true,
      ward: i < 4 ? 'General' : i < 6 ? 'ICU' : 'Emergency',
      type: i < 4 ? 'General' : i < 6 ? 'ICU' : 'Emergency',
    })),
  },
  {
    id: 2,
    name: 'St. Mary\'s Medical Center',
    location: 'Westside, Metro City',
    totalBeds: 6,
    type: 'Private',
    beds: Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      isAvailable: true,
      ward: i < 3 ? 'General' : i < 5 ? 'ICU' : 'Emergency',
      type: i < 3 ? 'General' : i < 5 ? 'ICU' : 'Emergency',
    })),
  },
  {
    id: 3,
    name: 'Metropolitan Hospital',
    location: 'Eastside, Metro City',
    totalBeds: 10,
    type: 'Public',
    beds: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      isAvailable: true,
      ward: i < 6 ? 'General' : i < 8 ? 'ICU' : 'Emergency',
      type: i < 6 ? 'General' : i < 8 ? 'ICU' : 'Emergency',
    })),
  },
];