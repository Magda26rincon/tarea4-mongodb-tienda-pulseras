// 3. Consultas básicas (CRUD)

// Inserción
db.productos.insertOne({codigo_producto:"P021",nombre:"Pulsera Mariposa",material:"plata",colores:["plateado","celeste"],precio:47000,stock:11,personalizable:true,dije:"mariposa"})

// Selección (filtro + proyección)
db.productos.find({material:"plata"},{_id:0,codigo_producto:1,nombre:1,precio:1})

// Actualización
db.productos.updateOne({codigo_producto:"P021"},{$set:{precio:52000,stock:15}})

// Eliminación
db.productos.deleteOne({codigo_producto:"P021"})
