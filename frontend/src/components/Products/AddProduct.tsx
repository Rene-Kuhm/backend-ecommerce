import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

const AddProduct: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/products', { name, description, price, stock });
    navigate('/products');
  };

  return (
    <Box p={8}>
      <VStack as="form" spacing={4} onSubmit={handleSubmit}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="description">
          <FormLabel>Description</FormLabel>
          <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <FormControl id="price">
          <FormLabel>Price</FormLabel>
          <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </FormControl>
        <FormControl id="stock">
          <FormLabel>Stock</FormLabel>
          <Input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue">Add Product</Button>
      </VStack>
    </Box>
  );
};

export default AddProduct;
