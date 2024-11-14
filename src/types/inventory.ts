export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  threshold: number;
  lastUpdated: string;
  expiryDate?: string;
  batchNumber?: string;
  manufacturer?: string;
}

export type MedicalCategory = 
  | 'Medicines'
  | 'Surgical Supplies'
  | 'Equipment'
  | 'Disposables'
  | 'First Aid'
  | 'Diagnostic Tools';