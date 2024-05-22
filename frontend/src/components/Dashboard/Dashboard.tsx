import React from 'react';
import {
  Box,
  Flex,
  Link,
  Text,
  VStack,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { FiHome, FiUsers, FiBox, FiBell, FiDollarSign } from 'react-icons/fi';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

interface NavItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
  to: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, children, to }) => {
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
        _hover={{ bg: 'gray.200', cursor: 'pointer' }}
      >
        {icon && <Box as={icon} mr="4" fontSize="16" />}
        {children}
      </Flex>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          Dashboard
        </Text>
      </Flex>
      <VStack align="start" spacing="4" p="4">
        <NavItem icon={FiHome} to="/">
          Home
        </NavItem>
        <NavItem icon={FiBox} to="/products">
          Products
        </NavItem>
        <NavItem icon={FiUsers} to="/orders">
          Orders
        </NavItem>
        <NavItem icon={FiBox} to="/inventories">
          Inventory
        </NavItem>
        <NavItem icon={FiBell} to="/notifications">
          Notifications
        </NavItem>
        <NavItem icon={FiDollarSign} to="/payments">
          Payments
        </NavItem>
      </VStack>
    </Box>
  );
};

const Dashboard: React.FC = () => {
  const auth = useAuth();

  return (
    <Flex h="100vh">
      <Sidebar />
      <Box ml={{ base: 0, md: 60 }} p="4" flex="1">
        <Flex justifyContent="space-between" mb="4">
          <Text fontSize="xl">Welcome, {auth.user?.username}</Text>
          <Button onClick={auth.logout}>Logout</Button>
        </Flex>
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Dashboard;
