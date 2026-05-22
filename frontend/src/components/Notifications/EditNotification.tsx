import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';
import './Notifications.css';

interface Notification {
  id: number;
  userId: number;
  message: string;
}

const EditNotification: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [notification, setNotification] = useState<Notification | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const response = await api.get(`/notifications/${id}`);
        setNotification(response.data);
      } catch (error) {
        setError('Failed to fetch notification');
      } finally {
        setLoading(false);
      }
    };

    fetchNotification();
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNotification((prevNotification) => prevNotification ? { ...prevNotification, [name]: value } : null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.patch(`/notifications/${id}`, notification);
      window.location.href = '/notifications';
    } catch (error) {
      setError('Failed to update notification');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="edit-notification">
      <h2>Edit Notification</h2>
      {notification && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userId">User ID</label>
            <input
              id="userId"
              name="userId"
              type="number"
              value={notification.userId}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input
              id="message"
              name="message"
              type="text"
              value={notification.message}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Update Notification</button>
        </form>
      )}
    </div>
  );
};

export default EditNotification;
