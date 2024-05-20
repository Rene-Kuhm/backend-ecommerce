export interface InventoryItem {
  productId: number;
  quantity: number;
  price: number;
}

export interface Inventory {
  id: number;
  name: string;
  items: InventoryItem[];
}
