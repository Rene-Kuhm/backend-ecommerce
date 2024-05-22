import React, { useEffect, useState } from 'react';
import api from '../../api';

interface InventoryItem {
  id: number;
  productId: number;
  quantity: number;
  price: number;
  productName: string;
}

interface Inventory {
  id: number;
  name: string;
  items: InventoryItem[];
}

const InventoryList: React.FC = () => {
  const [inventories, setInventories] = useState<Inventory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInventories = async () => {
      try {
        const response = await api.get('/inventories');
        const inventoriesData = response.data;

        // Fetch product names
        const fetchProductNames = async (items: InventoryItem[]) => {
          return await Promise.all(
            items.map(async (item) => {
              const productResponse = await api.get(`/products/${item.productId}`);
              return { ...item, productName: productResponse.data.name };
            })
          );
        };

        const inventoriesWithProductNames = await Promise.all(
          inventoriesData.map(async (inventory: Inventory) => {
            const itemsWithNames = await fetchProductNames(inventory.items);
            return { ...inventory, items: itemsWithNames };
          })
        );

        setInventories(inventoriesWithProductNames);
      } catch (error) {
        console.error('Error fetching inventories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInventories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Inventory List</h2>
      {inventories.length === 0 ? (
        <p>No inventories found.</p>
      ) : (
        <ul>
          {inventories.map((inventory) => (
            <li key={inventory.id}>
              <h3>{inventory.name}</h3>
              <ul>
                {inventory.items.map((item) => (
                  <li key={item.id}>
                    Product Name: {item.productName}, Quantity: {item.quantity}, Price: {item.price}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InventoryList;
