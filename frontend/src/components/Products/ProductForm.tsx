// src/components/ProductForm.tsx
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

const ProductForm: React.FC = () => {
  const [productId, setProductId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos al backend
    console.log({ productId });
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl id="productId">
          <FormLabel>Product ID</FormLabel>
          <Input value={productId} onChange={(e) => setProductId(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="teal">Get Product</Button>
      </VStack>
    </Box>
  );
};

export default ProductForm;
