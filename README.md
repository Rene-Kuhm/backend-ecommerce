<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


## Comando para crear carpeta y archivos 
```bash
# auth
mkdir -p src/auth
touch src/auth/auth.controller.ts src/auth/auth.module.ts src/auth/auth.service.ts src/auth/jwt.strategy.ts src/auth/local.strategy.ts
# users
mkdir -p src/users
touch src/users/users.controller.ts src/users/users.module.ts src/users/users.service.ts src/users/user.entity.
# products
mkdir -p src/products
touch src/products/products.controller.ts src/products/products.module.ts src/products/products.service.ts src/products/product.entity.ts
# orders
mkdir -p src/orders
touch src/orders/orders.controller.ts src/orders/orders.module.ts src/orders/orders.service.ts src/orders/order.entity.ts
# Crear directorios
mkdir -p src/inventory src/payments src/cart src/notifications src/admin src/dto

# Crear archivos para inventory
touch src/inventory/inventory.controller.ts src/inventory/inventory.module.ts src/inventory/inventory.service.ts src/inventory/inventory.entity.ts

# Crear archivos para payments
touch src/payments/payments.controller.ts src/payments/payments.module.ts src/payments/payments.service.ts src/payments/payment.entity.ts

# Crear archivos para cart
touch src/cart/cart.controller.ts src/cart/cart.module.ts src/cart/cart.service.ts src/cart/cart.entity.ts

# Crear archivos para notifications
touch src/notifications/notifications.controller.ts src/notifications/notifications.module.ts src/notifications/notifications.service.ts

# Crear archivos para admin
touch src/admin/admin.controller.ts src/admin/admin.module.ts src/admin/admin.service.ts

# Crear archivos para dto
touch src/dto/create-inventory.dto.ts src/dto/update-inventory.dto.ts src/dto/create-payment.dto.ts src/dto/update-payment.dto.ts src/dto/create-cart.dto.ts src/dto/update-cart.dto.ts src/dto/create-notification.dto.ts src/dto/update-notification.dto.ts src/dto/create-admin.dto.ts src/dto/update-admin.dto.ts
```

# Backend Ecommerce API

Esta es la documentación de la API para el proyecto Backend Ecommerce.

## Endpoints

Aquí puedes encontrar ejemplos de comandos `curl` para probar los endpoints de la API.

<details>
  <summary>Ver comandos de prueba</summary>

```bash
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
</details>
```