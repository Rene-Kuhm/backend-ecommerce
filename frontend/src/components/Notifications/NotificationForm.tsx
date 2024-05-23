// src/components/NotificationForm.tsx
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

const NotificationForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos al backend
    console.log({ title, message });
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl id="title">
          <FormLabel>Title</FormLabel>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Input value={message} onChange={(e) => setMessage(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="yellow">Send Notification</Button>
      </VStack>
    </Box>
  );
};

export default NotificationForm;
