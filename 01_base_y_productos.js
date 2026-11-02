// Tarea 4 - Big Data UNAD
// Caso: Tienda de pulseras personalizadas
// 1. Crear la base de datos y cargar la colección productos (20 documentos)

use tienda_pulseras

db.productos.insertMany([
{codigo_producto:"P001",nombre:"Pulsera Luna",material:"plata",colores:["plateado","azul"],precio:45000,stock:12,personalizable:true,dije:"luna"},
{codigo_producto:"P002",nombre:"Pulsera Sol",material:"acero",colores:["dorado"],precio:38000,stock:20,personalizable:false},
{codigo_producto:"P003",nombre:"Pulsera Mostacilla Arcoíris",material:"mostacilla",colores:["rojo","amarillo","verde","azul"],precio:15000,stock:40,personalizable:true},
{codigo_producto:"P004",nombre:"Pulsera Inicial Grabada",material:"acero",colores:["plateado"],precio:42000,stock:15,personalizable:true,grabado:"letra inicial"},
{codigo_producto:"P005",nombre:"Pulsera Cuero Trenzado",material:"cuero",colores:["café"],precio:28000,stock:25,personalizable:false,talla:"M"},
{codigo_producto:"P006",nombre:"Pulsera Corazón",material:"plata",colores:["plateado","rosado"],precio:50000,stock:10,personalizable:true,dije:"corazón"},
{codigo_producto:"P007",nombre:"Pulsera Piedras Naturales",material:"piedra",colores:["morado","blanco"],precio:35000,stock:18,personalizable:false},
{codigo_producto:"P008",nombre:"Pulsera Hilo Rojo",material:"hilo",colores:["rojo"],precio:10000,stock:60,personalizable:false},
{codigo_producto:"P009",nombre:"Pulsera Nombre Mostacilla",material:"mostacilla",colores:["negro","blanco"],precio:20000,stock:30,personalizable:true,grabado:"nombre"},
{codigo_producto:"P010",nombre:"Pulsera Infinito",material:"acero",colores:["dorado","plateado"],precio:40000,stock:14,personalizable:true,dije:"infinito"},
{codigo_producto:"P011",nombre:"Pulsera Perlas",material:"perla",colores:["blanco"],precio:55000,stock:8,personalizable:false},
{codigo_producto:"P012",nombre:"Pulsera Macramé",material:"hilo",colores:["verde","beige"],precio:18000,stock:35,personalizable:true,talla:"ajustable"},
{codigo_producto:"P013",nombre:"Pulsera Fecha Especial",material:"plata",colores:["plateado"],precio:60000,stock:6,personalizable:true,grabado:"fecha"},
{codigo_producto:"P014",nombre:"Pulsera Ojo Turco",material:"hilo",colores:["azul","negro"],precio:12000,stock:50,personalizable:false,dije:"ojo turco"},
{codigo_producto:"P015",nombre:"Pulsera Pareja Imanes",material:"cuero",colores:["negro","café"],precio:48000,stock:10,personalizable:true},
{codigo_producto:"P016",nombre:"Pulsera Estrella",material:"acero",colores:["dorado"],precio:36000,stock:16,personalizable:true,dije:"estrella"},
{codigo_producto:"P017",nombre:"Pulsera Cristal",material:"cristal",colores:["transparente","lila"],precio:30000,stock:22,personalizable:false},
{codigo_producto:"P018",nombre:"Pulsera Mamá",material:"plata",colores:["plateado","dorado"],precio:58000,stock:9,personalizable:true,grabado:"Mamá"},
{codigo_producto:"P019",nombre:"Pulsera Ancla",material:"cuero",colores:["azul","plateado"],precio:32000,stock:20,personalizable:false,dije:"ancla"},
{codigo_producto:"P020",nombre:"Pulsera Cuarzo Rosa",material:"piedra",colores:["rosado"],precio:34000,stock:17,personalizable:true}
])
