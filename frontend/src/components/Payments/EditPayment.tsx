import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';
import './Payments.css';

interface Payment {
  id: number;
  amount: number;
  method: string;
  status: string;
  userId: number;
  orderId: number;
}

const EditPayment: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [payment, setPayment] = useState<Payment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const response = await api.get(`/payments/${id}`);
        setPayment(response.data);
      } catch (error) {
        setError('Failed to fetch payment');
      } finally {
        setLoading(false);
      }
    };

    fetchPayment();
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayment((prevPayment) => prevPayment ? { ...prevPayment, [name]: value } : null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.patch(`/payments/${id}`, payment);
      window.location.href = '/payments';
    } catch (error) {
      setError('Failed to update payment');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="edit-payment">
      <h2>Edit Payment</h2>
      {payment && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              name="amount"
              type="number"
              value={payment.amount}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="method">Method</label>
            <input
              id="method"
              name="method"
              type="text"
              value={payment.method}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <input
              id="status"
              name="status"
              type="text"
              value={payment.status}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userId">User ID</label>
            <input
              id="userId"
              name="userId"
              type="number"
              value={payment.userId}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="orderId">Order ID</label>
            <input
              id="orderId"
              name="orderId"
              type="number"
              value={payment.orderId}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Update Payment</button>
        </form>
      )}
    </div>
  );
};

export default EditPayment;
