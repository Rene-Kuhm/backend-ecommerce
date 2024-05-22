import React, { useState, useEffect } from 'react';
import api from '../../api';
import './Products.css';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="products-list">
      <h2>Products</h2>
      <button onClick={() => window.location.href = '/add-product'}>Add Product</button>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => window.location.href = `/edit-product/${product.id}`}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
