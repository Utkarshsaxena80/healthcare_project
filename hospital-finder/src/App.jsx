import { useState } from 'react'
import HospitalList from './components/HospitalList'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-50 py-12 px-4 animate-gradient">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-bold text-blue-800 mb-3">{import.meta.env.VITE_APP_TITLE}</h1>
          <p className="text-gray-600">{import.meta.env.VITE_APP_DESCRIPTION}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg animate-slideUp">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder={`Enter city name (e.g., ${import.meta.env.VITE_APP_DEFAULT_CITY})`}
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg bg-white/90"
              required
            />
            <button
              type="submit"
              className="group px-8 py-3 bg-blue-600 text-white rounded-lg transition-all duration-300 ease-in-out
                       hover:bg-blue-700 hover:shadow-xl active:scale-95
                       relative overflow-hidden"
            >
              <span className="relative z-10">Search Hospitals</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </form>

        {submitted && <HospitalList city={city} />}
      </div>
      <div className="text-center text-gray-500 text-sm mt-8">
        Version {import.meta.env.VITE_APP_VERSION}
      </div>
    </div>
  );
}

export default App