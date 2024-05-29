import React, { useState } from 'react';
import api from '../../api';
import './Inventory.css';

interface InventoryItem {
  productId: number;
  quantity: number;
  price: number;
}

// Definir una interfaz para el error extendido que incluye `response`
interface AxiosError extends Error {
  response?: {
    status: number;
    statusText: string;
  };
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
      const response = await api.post('/inventories', newInventory);
      if (response.status === 200 || response.status === 201) {
        window.location.href = '/inventories';
      } else {
        console.error('Error adding inventory:', response.statusText);
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response && axiosError.response.status === 401) {
        // Redirigir a la página de inicio de sesión si el usuario no está autenticado
        window.location.href = '/login';
      } else {
        console.error('Error adding inventory:', axiosError.message);
      }
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
          <div key={index} className="form-group item-group">
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
            <button type="button" className="remove-button" onClick={() => handleRemoveItem(index)}>Remove</button>
          </div>
        ))}
        <button type="button" className="add-button" onClick={handleAddItem}>Add Item</button>
        <button type="submit" className="submit-button">Add Inventory</button>
      </form>
    </div>
  );
};

export default AddInventory;
