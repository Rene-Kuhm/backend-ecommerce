// src/components/OrderForm.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

const OrderForm: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/orders', { productName, quantity });
      // Manejar la respuesta o mostrar un mensaje de éxito
      console.log(response);
    } catch (error) {
      // Manejar 
      console.log(error);
    }
  };

  return (
    <Box p={8} bg="gray.700" borderRadius="md" color="white">
      <VStack as="form" spacing={4} onSubmit={handleSubmit}>
        <FormControl id="productName">
          <FormLabel>Product Name</FormLabel>
          <Input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </FormControl>
        <FormControl id="quantity">
          <FormLabel>Quantity</FormLabel>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">Create Order</Button>
      </VStack>
    </Box>
  );
};

export default OrderForm;
