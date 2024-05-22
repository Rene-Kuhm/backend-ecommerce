import React, { useState } from 'react';
import api from '../../api';
import './CreateOrder.css';

const CreateOrder: React.FC = () => {
  const [userId, setUserId] = useState<number>(0);
  const [items, setItems] = useState<{ productId: number; quantity: number; price: number }[]>([]);
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleAddItem = () => {
    setItems([...items, { productId: 0, quantity: 0, price: 0 }]);
  };

  const handleItemChange = (index: number, field: string, value: string) => {
    const newItems = items.slice();
    newItems[index] = { ...newItems[index], [field]: Number(value) };
    setItems(newItems);
  };

  const handleCreateOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const response = await api.post('/orders', { userId, items });
      setMessage('Order created successfully');
      console.log('Order created successfully:', response.data);
    } catch (error) {
      setError('Error creating order');
      console.error('Error creating order:', error);
    }
  };

  return (
    <div className="create-order-container">
      <form className="create-order-form" onSubmit={handleCreateOrder}>
        <h2>Create Order</h2>
        {message && <p className="message success">{message}</p>}
        {error && <p className="message error">{error}</p>}
        <div className="form-group">
          <label htmlFor="userId">User ID</label>
          <input
            id="userId"
            type="number"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(Number(e.target.value))}
          />
        </div>
        {items.map((item, index) => (
          <div key={index} className="item-group">
            <input
              type="number"
              placeholder="Product ID"
              value={item.productId}
              onChange={(e) => handleItemChange(index, 'productId', e.target.value)}
            />
            <input
              type="number"
              placeholder="Quantity"
              value={item.quantity}
              onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
            />
            <input
              type="number"
              placeholder="Price"
              value={item.price}
              onChange={(e) => handleItemChange(index, 'price', e.target.value)}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddItem}>Add Item</button>
        <button type="submit">Create Order</button>
      </form>
    </div>
  );
};

export default CreateOrder;
