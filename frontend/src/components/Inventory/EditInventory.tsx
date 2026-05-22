import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';
import './Inventory.css';

const EditInventory: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const fetchInventoryItem = async () => {
      try {
        const response = await api.get(`/inventories/${id}`);
        const item = response.data;
        setProductName(item.productName);
        setQuantity(item.quantity);
      } catch (error) {
        console.error('Error fetching inventory item:', error);
      }
    };

    fetchInventoryItem();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const updatedInventoryItem = { productName, quantity };
      await api.patch(`/inventories/${id}`, updatedInventoryItem);
      window.location.href = '/inventories';
    } catch (error) {
      console.error('Error updating inventory item:', error);
    }
  };

  return (
    <div className="edit-inventory">
      <h2>Edit Inventory Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            id="productName"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <button type="submit">Update Inventory Item</button>
      </form>
    </div>
  );
};

export default EditInventory;
