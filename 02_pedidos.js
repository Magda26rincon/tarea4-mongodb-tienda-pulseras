// 2. Cargar la colección pedidos (100 documentos)
// Cada pedido trae de 1 a 3 artículos en el arreglo "items",
// relacionados con productos por el campo codigo_producto.

const clientes=["Laura Gómez","Carlos Pérez","Ana Torres","Juan Ramírez","Sofía Díaz","Andrés López","Valentina Ruiz","Camilo Herrera","Daniela Castro","Felipe Moreno"];
const ciudades=["Bogotá","Medellín","Cali","Barranquilla","Bucaramanga"];
const estados=["pendiente","enviado","entregado","cancelado"];
const prods=db.productos.find().toArray();
let pedidos=[];
for(let i=1;i<=100;i++){
  let items=[];
  for(let j=0;j<(i%3)+1;j++){
    let p=prods[(i*7+j*5)%20];
    items.push({codigo_producto:p.codigo_producto,cantidad:((i+j)%3)+1,precio_unitario:p.precio});
  }
  let total=items.reduce((s,it)=>s+it.cantidad*it.precio_unitario,0);
  pedidos.push({codigo_pedido:"PED"+String(i).padStart(3,"0"),cliente:clientes[i%10],ciudad:ciudades[i%5],fecha:new Date(2026,8,1+(i%60)),items:items,valor_total:total,estado:estados[i%4]});
}
db.pedidos.insertMany(pedidos)
