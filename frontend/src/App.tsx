import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from './components/Register';
import { Login } from './components/Login';
import Orders from './components/Orders';
import CreateOrder from './components/CreateOrder';
import { ProductsList, AddProduct, EditProduct } from './components/Products';
import {
  InventoryList,
  AddInventory,
  EditInventory,
} from './components/Inventory';
import {
  AddNotification,
  EditNotification,
  NotificationList,
} from './components/Notifications';
import { AddPayment, EditPayment, PaymentList } from './components/Payments';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/inventories" element={<InventoryList />} />
          <Route path="/add-inventory" element={<AddInventory />} />
          <Route path="/edit-inventory/:id" element={<EditInventory />} />
          <Route path="/notifications" element={<NotificationList />} />
          <Route path="/add-notification" element={<AddNotification />} />
          <Route path="/edit-notification/:id" element={<EditNotification />} />
          <Route path="/payments" element={<PaymentList />} />
          <Route path="/add-payment" element={<AddPayment />} />
          <Route path="/edit-payment/:id" element={<EditPayment />} />

          {/* Añade más rutas aquí */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
