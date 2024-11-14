import React from 'react';
import { Stethoscope, AlertTriangle, IndianRupee, Package } from 'lucide-react';
import { InventoryItem } from '../types/inventory';

interface DashboardProps {
  items: InventoryItem[];
}

export function Dashboard({ items }: DashboardProps) {
  const totalItems = items.length;
  const lowStock = items.filter(item => item.quantity <= item.threshold).length;
  const totalValue = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const expiringItems = items.filter(item => {
    if (!item.expiryDate) return false;
    const monthsUntilExpiry = Math.floor((new Date(item.expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24 * 30));
    return monthsUntilExpiry <= 3;
  }).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Items</p>
            <p className="text-2xl font-bold">{totalItems}</p>
          </div>
          <Package className="text-blue-500 w-8 h-8" />
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Low Stock Alerts</p>
            <p className="text-2xl font-bold">{lowStock}</p>
          </div>
          <AlertTriangle className="text-red-500 w-8 h-8" />
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Value</p>
            <p className="text-2xl font-bold">₹{totalValue.toLocaleString('en-IN')}</p>
          </div>
          <IndianRupee className="text-green-500 w-8 h-8" />
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Expiring Soon</p>
            <p className="text-2xl font-bold">{expiringItems}</p>
          </div>
          <Stethoscope className="text-purple-500 w-8 h-8" />
        </div>
      </div>
    </div>
  );
}