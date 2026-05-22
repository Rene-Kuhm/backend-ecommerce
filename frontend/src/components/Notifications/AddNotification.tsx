import React, { useState } from 'react';
import api from '../../api';
import './Notifications.css';

const AddNotification: React.FC = () => {
  const [userId, setUserId] = useState<number | ''>('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newNotification = { userId, message };
      await api.post('/notifications', newNotification);
      window.location.href = '/notifications';
    } catch (error) {
      console.error('Error adding notification:', error);
    }
  };

  return (
    <div className="add-notification">
      <h2>Add Notification</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="message">Message</label>
          <input
            id="message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Add Notification</button>
      </form>
    </div>
  );
};

export default AddNotification;
