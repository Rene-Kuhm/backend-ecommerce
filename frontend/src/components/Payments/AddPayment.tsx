import React, { useState } from 'react';
import api from '../../api';
import './Payments.css';

const AddPayment: React.FC = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const [method, setMethod] = useState('');
  const [status, setStatus] = useState('');
  const [userId, setUserId] = useState<number | ''>('');
  const [orderId, setOrderId] = useState<number | ''>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newPayment = { amount, method, status, userId, orderId };
      await api.post('/payments', newPayment);
      window.location.href = '/payments';
    } catch (error) {
      console.error('Error adding payment:', error);
    }
  };

  return (
    <div className="add-payment">
      <h2>Add Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label htmlFor="method">Method</label>
          <input
            id="method"
            type="text"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <input
            id="status"
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userId">User ID</label>
          <input
            id="userId"
            type="number"
            value={userId}
            onChange={(e) => setUserId(Number(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label htmlFor="orderId">Order ID</label>
          <input
            id="orderId"
            type="number"
            value={orderId}
            onChange={(e) => setOrderId(Number(e.target.value))}
          />
        </div>
        <button type="submit">Add Payment</button>
      </form>
    </div>
  );
};

export default AddPayment;
