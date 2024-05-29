import React, { useState } from 'react';
import api from '../../api';
import './Inventory.css';

interface InventoryItem {
  productId: number;
  quantity: number;
  price: number;
}

const AddInventory: React.FC = () => {
  const [name, setName] = useState('');
  const [items, setItems] = useState<InventoryItem[]>([{ productId: 0, quantity: 0, price: 0 }]);

  const handleAddItem = () => {
    setItems([...items, { productId: 0, quantity: 0, price: 0 }]);
  };

  const handleRemoveItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleItemChange = (index: number, field: keyof InventoryItem, value: string | number) => {
    const newItems = items.map((item, i) => i === index ? { ...item, [field]: value } : item);
    setItems(newItems);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newInventory = { name, items };
      await api.post('/inventories', newInventory);
      window.location.href = '/inventories';
    } catch (error) {
      console.error('Error adding inventory:', error);
    }
  };

  return (
    <div className="add-inventory">
      <h2>Add Inventory</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {items.map((item, index) => (
          <div key={index} className="form-group">
            <label htmlFor={`productId-${index}`}>Product ID</label>
            <input
              id={`productId-${index}`}
              type="number"
              value={item.productId}
              onChange={(e) => handleItemChange(index, 'productId', Number(e.target.value))}
            />
            <label htmlFor={`quantity-${index}`}>Quantity</label>
            <input
              id={`quantity-${index}`}
              type="number"
              value={item.quantity}
              onChange={(e) => handleItemChange(index, 'quantity', Number(e.target.value))}
            />
            <label htmlFor={`price-${index}`}>Price</label>
            <input
              id={`price-${index}`}
              type="number"
              value={item.price}
              onChange={(e) => handleItemChange(index, 'price', Number(e.target.value))}
            />
            <button type="button" onClick={() => handleRemoveItem(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={handleAddItem}>Add Item</button>
        <button type="submit">Add Inventory</button>
      </form>
    </div>
  );
};

export default AddInventory