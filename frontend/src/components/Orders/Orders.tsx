import React, { useState, useEffect } from 'react';
import api from '../../api';
import './Orders.css';

interface Order {
    id: number;
    totalPrice: number;
}

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get('/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.totalPrice}</li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
