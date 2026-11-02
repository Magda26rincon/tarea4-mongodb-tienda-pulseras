# Tarea 4 – Almacenamiento y Consultas de Datos en Big Data

**Curso:** Big Data (202016911A_2204) – UNAD
**Grupo:** 202016911_151
**Estudiante:** Magda Yolima Rincón Clavijo

## Caso de uso: Tienda de pulseras personalizadas

Base de datos MongoDB `tienda_pulseras` con dos colecciones:

- **productos** (20 documentos): código, nombre, material, colores, precio, stock, personalizable y campos opcionales (dije, grabado, talla).
- **pedidos** (100 documentos): código, cliente, ciudad, fecha, arreglo `items` (codigo_producto, cantidad, precio_unitario), valor total y estado.

Las colecciones se relacionan por el campo `codigo_producto`.

## Archivos

| Archivo | Contenido |
| --- | --- |
| 01_base_y_productos.js | Creación de la base y carga de productos |
| 02_pedidos.js | Carga de los 100 pedidos |
| 03_consultas_crud.js | Inserción, selección, actualización y eliminación |
| 04_filtros_y_join.js | Filtros con $gte y $in, join con $lookup |
| 05_agregaciones.js | Estadísticas con $group, $sum, $avg, $max, $min |

## Cómo ejecutarlo

Abrir MongoDB Compass, conectarse a `mongodb://localhost:27017`, abrir la consola mongosh y ejecutar los archivos en orden.

Herramientas: MongoDB Community Server 9.0.4 y MongoDB Compass.
