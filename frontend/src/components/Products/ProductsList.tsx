import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  const deleteProduct = (id: number) => {
    axios.delete(`http://localhost:3000/products/${id}`).then(() => {
      setProducts(products.filter((product) => product.id !== id));
    });
  };

  return (
    <Box>
      <Flex justifyContent="space-between" mb="4">
        <Button as={Link} to="/add-product" colorScheme="blue">
          Add Product
        </Button>
      </Flex>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Price</Th>
            <Th>Stock</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <Tr key={product.id}>
              <Td>{product.name}</Td>
              <Td>{product.description}</Td>
              <Td>{product.price}</Td>
              <Td>{product.stock}</Td>
              <Td>
                <Button as={Link} to={`/edit-product/${product.id}`} mr="2">
                  Edit
                </Button>
                <Button
                  onClick={() => deleteProduct(product.id)}
                  colorScheme="red"
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ProductList;
