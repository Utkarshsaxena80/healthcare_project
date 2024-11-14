import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { InventoryList } from './components/InventoryList';
import { ItemForm } from './components/ItemForm';
import { InventoryItem } from './types/inventory';

function App() {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<InventoryItem | undefined>();

  const handleAddItem = (newItem: Omit<InventoryItem, 'id'>) => {
    const item: InventoryItem = {
      ...newItem,
      id: Math.random().toString(36).substr(2, 9),
    };
    setItems([...items, item]);
  };

  const handleEditItem = (updatedItem: Omit<InventoryItem, 'id'>) => {
    if (editingItem) {
      setItems(items.map(item => 
        item.id === editingItem.id 
          ? { ...updatedItem, id: item.id }
          : item
      ));
      setEditingItem(undefined);
    }
  };

  const handleDeleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const openEditForm = (item: InventoryItem) => {
    setEditingItem(item);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Medical Supplies Inventory</h1>
          <button
            onClick={() => setIsFormOpen(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Medical Supply
          </button>
        </div>

        <Dashboard items={items} />
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Inventory Items</h2>
          <InventoryList
            items={items}
            onEdit={openEditForm}
            onDelete={handleDeleteItem}
          />
        </div>

        {isFormOpen && (
          <ItemForm
            item={editingItem}
            onSubmit={editingItem ? handleEditItem : handleAddItem}
            onClose={() => {
              setIsFormOpen(false);
              setEditingItem(undefined);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;