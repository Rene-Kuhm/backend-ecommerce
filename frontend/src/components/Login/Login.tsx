import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import { Box, Button, FormControl, FormLabel, Input, VStack, Text } from '@chakra-ui/react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', { username, password });
      const user = { username, ...response.data }; // Puedes ajustar esto según la respuesta de tu API
      auth.login(user);
      navigate('/'); // Redirigir al dashboard
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <Box p={8}>
      <VStack as="form" spacing={4} onSubmit={handleLogin}>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        {error && <Text color="red.500">{error}</Text>}
        <Button type="submit" colorScheme="blue">Login</Button>
      </VStack>
    </Box>
  );
};

export default Login;
