// src/components/Dashboard/Dashboard.tsx
import React from 'react';
import {
  Box,
  Flex,
  Link,
  Text,
  VStack,
  useColorModeValue,
  Button,
  Avatar,
} from '@chakra-ui/react';
import { FiHome, FiUsers, FiBox, FiBell, FiDollarSign } from 'react-icons/fi';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

const Sidebar = () => {
  return (
    <Box
      bg={useColorModeValue('gray.800', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.700', 'gray.600')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      zIndex="1"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold" color="white">
          TDP Dashboard
        </Text>
      </Flex>
      <VStack align="start" spacing="4" p="4">
        <NavItem icon={FiHome} to="/">
          Home
        </NavItem>
        <NavItem icon={FiUsers} to="/products">
          Products
        </NavItem>
        <NavItem icon={FiBox}  to="/add-product" >
          Add Product
        </NavItem>
        <NavItem icon={FiUsers} to="/orders">
          Orders
        </NavItem>
        <NavItem icon={FiBox} to="/create-order">
          Create Order
        </NavItem>
        <NavItem icon={FiBox} to="/inventories">
          Inventory
        </NavItem>
        <NavItem icon={FiBox} to="/add-inventory">
          Add Inventory
        </NavItem>
        <NavItem icon={FiBell} to="/notifications">
          Notifications
        </NavItem>
        <NavItem icon={FiBell} to="/add-notification">
          Add Notification
        </NavItem>
        <NavItem icon={FiDollarSign} to="/payments">
          Payments
        </NavItem>
        <NavItem icon={FiDollarSign} to="/add-payment">
          Add Payment
        </NavItem>
      </VStack>
    </Box>
  );
};

const NavItem = ({
  icon,
  children,
  to,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
  to: string;
}) => {
  return (
    <Link
      as={RouterLink}
      to={to}
      style={{ textDecoration: 'none', width: '100%' }}
    >
      <Flex
        align="center"
        p="2"
        mx="4"
        borderRadius="md"
        _hover={{ bg: 'gray.700', cursor: 'pointer' }}
        color="white"
      >
        {icon && <Box as={icon} mr="4" fontSize="16" />}
        {children}
      </Flex>
    </Link>
  );
};

const Dashboard: React.FC = () => {
  const auth = useAuth();

  const getGreeting = () => {
    if (!auth?.user) return 'Bienvenido/a';
    return auth.user.gender === 'male' ? 'Bienvenido' : 'Bienvenida';
  };

  return (
    <Flex h="100vh">
      <Sidebar />
      <Box ml={{ base: 0, md: 60 }} p="4" flex="1" bg="gray.900" color="white">
        <Flex justifyContent="space-between" mb="4" align="center">
          <Text fontSize="xl">
            {getGreeting()}, {auth?.user?.username}
          </Text>
          <Flex align="center">
            <Avatar name={auth?.user?.username} size="sm" mr="4" />
            <Button onClick={auth?.logout}>Logout</Button>
          </Flex>
        </Flex>
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Dashboard;
