import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

const PaymentList: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await api.get('/payments');
        setPayments(response.data);
      } catch (error) {
        console.error('Error fetching payments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="payment-list">
      <h2>Payment List</h2>
      {payments.length === 0 ? (
        <p>No payments found.</p>
      ) : (
        <ul>
          {payments.map((payment) => (
            <li key={payment.id}>
              <p>Amount: {payment.amount}</p>
              <p>Method: {payment.method}</p>
              <p>Status: {payment.status}</p>
              <p>User ID: {payment.userId}</p>
              <p>Order ID: {payment.orderId}</p>
              <Link to={`/edit-payment/${payment.id}`}>Edit</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaymentList;
