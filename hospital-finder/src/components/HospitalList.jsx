const hospitals = [
  {
    id: 1,
    name: "Anand Hospital",
    address: "Garh Road, Meerut",
    contact: "+91-121-2760101",
    speciality: "Multi-Specialty"
  },
  {
    id: 2,
    name: "Metro Hospital",
    address: "Pallav Puram, Meerut",
    contact: "+91-121-2970000",
    speciality: "Cardiac Care"
  },
  {
    id: 3,
    name: "Bhagat Hospital",
    address: "Western Kutchery Road, Meerut",
    contact: "+91-121-2643088",
    speciality: "General Medicine"
  },
  {
    id: 4,
    name: "Valentis Hospital",
    address: "Garh Road, Meerut",
    contact: "+91-121-2404040",
    speciality: "Multi-Specialty"
  },
  {
    id: 5,
    name: "PGI Hospital",
    address: "LLRM Medical College, Meerut",
    contact: "+91-121-2760378",
    speciality: "Teaching Hospital"
  }
];

export default function HospitalList({ city }) {
  if (city.toLowerCase() !== 'meerut') {
    return (
      <div className="text-center p-8 bg-red-50 rounded-xl mt-8 animate-fadeIn">
        <div className="text-red-600 text-xl font-semibold">
          Sorry, we currently only have data for Meerut city.
        </div>
        <p className="text-red-500 mt-2">Please try searching for "Meerut"</p>
      </div>
    );
  }

  return (
    <div className="mt-12 animate-fadeIn">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Hospitals in {city}
        <div className="text-sm text-gray-500 mt-2">Showing {hospitals.length} results</div>
      </h2>
      <div className="grid gap-6">
        {hospitals.map((hospital, index) => (
          <div 
            key={hospital.id} 
            className="bg-white/80 backdrop-blur-sm border border-gray-200 p-6 rounded-xl shadow-sm 
                     hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1
                     animate-slideUp"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-blue-700 mb-3">{hospital.name}</h3>
              <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {hospital.speciality}
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-gray-700 flex items-center">
                <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {hospital.address}
              </p>
              <p className="text-gray-700 flex items-center">
                <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {hospital.contact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}