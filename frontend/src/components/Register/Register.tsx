import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, VStack, Select, Text } from '@chakra-ui/react';

export const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/auth/register', { username, password, gender });
      navigate('/login');
    } catch (error) {
      setError('Registration failed');
    }
  };

  return (
    <Box p={8}>
      <VStack as="form" spacing={4} onSubmit={handleRegister}>
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
        <FormControl id="gender">
          <FormLabel>Gender</FormLabel>
          <Select value={gender} onChange={(e) => setGender(e.target.value as 'male' | 'female')}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </FormControl>
        {error && <Text color="red.500">{error}</Text>}
        <Button type="submit" colorScheme="blue">Register</Button>
      </VStack>
    </Box>
  );
};
