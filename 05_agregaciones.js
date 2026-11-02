// 5. Consultas de agregación (contar, sumar, promediar)

// Estadísticas generales
db.pedidos.aggregate([{$group:{_id:null,total_pedidos:{$sum:1},total_vendido:{$sum:"$valor_total"},promedio_pedido:{$avg:"$valor_total"},pedido_mayor:{$max:"$valor_total"},pedido_menor:{$min:"$valor_total"}}}])

// Ventas por ciudad
db.pedidos.aggregate([{$group:{_id:"$ciudad",pedidos:{$sum:1},vendido:{$sum:"$valor_total"},promedio:{$avg:"$valor_total"}}},{$sort:{vendido:-1}}])
