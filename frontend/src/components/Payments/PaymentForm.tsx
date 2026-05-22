// src/components/PaymentForm.tsx
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

const PaymentForm: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos al backend
    console.log({ amount, paymentMethod });
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl id="amount">
          <FormLabel>Amount</FormLabel>
          <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </FormControl>
        <FormControl id="paymentMethod">
          <FormLabel>Payment Method</FormLabel>
          <Input value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="orange">Process Payment</Button>
      </VStack>
    </Box>
  );
};

export default PaymentForm;
