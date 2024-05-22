import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Orders from './components/Orders';
import CreateOrder from './components/CreateOrder';
import { ProductsList, AddProduct, EditProduct } from './components/Products';
import { InventoryList, AddInventory, EditInventory } from './components/Inventory';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/inventories" element={<InventoryList />} />
          <Route path="/add-inventory" element={<AddInventory />} />
          <Route path="/edit-inventory/:id" element={<EditInventory />} />
          {/* Añade más rutas aquí */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
