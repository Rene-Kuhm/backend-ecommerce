#!/bin/bash

# Crear Usuario de Prueba
echo "Creando usuario de prueba..."
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"username":"testuser","email":"test@example.com","password":"password", "role": "user"}'
echo -e "\n"

# Crear Producto de Prueba
echo "Creando producto de prueba..."
curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{"name":"Product 1","description":"Description of Product 1","price":100.0,"stock":50}'
echo -e "\n"

# Crear Inventario
echo "Creando inventario..."
curl -X POST http://localhost:3000/inventories -H "Content-Type: application/json" -d '{"name":"Main Inventory","items":[{"productId":1,"quantity":10,"price":100.0}]}'
echo -e "\n"

# Obtener Todos los Inventarios
echo "Obteniendo todos los inventarios..."
curl http://localhost:3000/inventories
echo -e "\n"

# Obtener un Inventario por ID
echo "Obteniendo inventario con ID 1..."
curl http://localhost:3000/inventories/1
echo -e "\n"

# Actualizar un Inventario
echo "Actualizando inventario con ID 1..."
curl -X PATCH http://localhost:3000/inventories/1 -H "Content-Type: application/json" -d '{"name":"Updated Inventory","items":[{"productId":1,"quantity":20,"price":150.0}]}'
echo -e "\n"

# Eliminar un Inventario
echo "Eliminando inventario con ID 1..."
curl -X DELETE http://localhost:3000/inventories/1
echo -e "\n"

# Crear Notificación
echo "Creando notificación..."
curl -X POST http://localhost:3000/notifications -H "Content-Type: application/json" -d '{"userId":1,"message":"Your order has been shipped"}'
echo -e "\n"

# Obtener Todas las Notificaciones
echo "Obteniendo todas las notificaciones..."
curl http://localhost:3000/notifications
echo -e "\n"

# Obtener una Notificación por ID
echo "Obteniendo notificación con ID 1..."
curl http://localhost:3000/notifications/1
echo -e "\n"

# Actualizar una Notificación
echo "Actualizando notificación con ID 1..."
curl -X PATCH http://localhost:3000/notifications/1 -H "Content-Type: application/json" -d '{"message":"Your order has been delivered"}'
echo -e "\n"

# Eliminar una Notificación
echo "Eliminando notificación con ID 1..."
curl -X DELETE http://localhost:3000/notifications/1
echo -e "\n"

# Crear una Orden
echo "Creando una orden..."
curl -X POST http://localhost:3000/orders -H "Content-Type: application/json" -d '{"userId":1,"items":[{"productId":1,"quantity":2,"price":100.0}]}'
echo -e "\n"

# Obtener Todas las Órdenes
echo "Obteniendo todas las órdenes..."
curl http://localhost:3000/orders
echo -e "\n"

# Obtener una Orden por ID
echo "Obteniendo orden con ID 1..."
curl http://localhost:3000/orders/1
echo -e "\n"

# Actualizar una Orden
echo "Actualizando orden con ID 1..."
curl -X PATCH http://localhost:3000/orders/1 -H "Content-Type: application/json" -d '{"userId":1,"items":[{"productId":1,"quantity":3,"price":100.0}]}'
echo -e "\n"

# Eliminar una Orden
echo "Eliminando orden con ID 1..."
curl -X DELETE http://localhost:3000/orders/1
echo -e "\n"

# Finalizado
echo "Pruebas completadas."
