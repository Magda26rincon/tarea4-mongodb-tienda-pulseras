// 4. Consultas con filtros, operadores y join

// Filtros con operadores $gte y $in
db.pedidos.find({estado:"entregado",valor_total:{$gte:150000},ciudad:{$in:["Bogotá","Medellín"]}},{_id:0,codigo_pedido:1,cliente:1,ciudad:1,valor_total:1})

// Join entre pedidos y productos con $lookup
db.pedidos.aggregate([
  {$match:{codigo_pedido:"PED050"}},
  {$unwind:"$items"},
  {$lookup:{from:"productos",localField:"items.codigo_producto",foreignField:"codigo_producto",as:"producto"}},
  {$unwind:"$producto"},
  {$project:{_id:0,codigo_pedido:1,cliente:1,cantidad:"$items.cantidad",producto:"$producto.nombre",material:"$producto.material"}}
])
