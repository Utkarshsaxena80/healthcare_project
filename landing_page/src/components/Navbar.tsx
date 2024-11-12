import React from 'react';
import { Stethoscope } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold text-gray-800">HealthCare Plus</span>
          </div>
          <div className="flex items-center space-x-8">
            <NavLink href="#inventory">Inventory</NavLink>
            <NavLink href="#hospital">Hospital</NavLink>
            <NavLink href="#ambulance">Ambulance</NavLink>
            <NavLink href="#appointment">Appointment</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </a>
);

export default Navbar;