/* bucle es una estructura que se repite varias veces, los cuales son mayormente usados
para poder recorrer arrays objetos, etc
leer cada elemento de manera independiente

el bucle mas usado es el FOR

//----------------------------------bucle FOR----------------------------------------------------

iterar => indice
i++
i= i+i

Estructura:
for(int i=0;i<10;i++)
*/

for(let i=0;i<10;i++){
    console.log("iterador",i);
}

const numeros=[1,2,3,4,5,6,7,8,9,10];

for(let j =0;j<numeros.length;j++){
    if(numeros[j]%2===0){
        console.log(numeros[j])
    }
}


const alumnos=["pepe","katty","jose","jhon","vero","marina","isabel"];
for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i])
}
// for(let j=5;j<20;j++){
//     console.log("ejemplo",j);
// }

const laptop=[
    {
    marca:"mac",
    precio: 2500,
    nombre:"android",
    },
    {
        marca:"acer",
        precio: 2500,
        nombre:"juan",
    },
    {
        marca:"lenovo",
        precio: 2500,
        nombre:"monito",
    }
]

for(o=0;o<laptop.length;o++){
    //recorre todos los objetos y todos loa tributos de lso objetos
    //console.log(laptop[o].marca)
    
    //recorre todas las marcas de cada objeto
    console.log(laptop[o].precio)
}



//----------------------------------bucle map-------------------------------------------------------------------------

//SIRVE PARA LEER sí o sí un array, y retorna el mismo array

const productos=[
    {
        name: "tv",
        price: 1800,
    },
    {
        name: "celular",
        price: 2000,
    },
    {
        name: "monitor",
        price: 1200,
    }
]

productos.map((productos,index)=>{
    console.log("indice",index);
    console.log("producto",productos.price)
})

for (let i = 0; i < productos.length; i++) {
    //muestra nombre del producto+el precio
    console.log(productos[i].name,productos[i].price);
    //muestra precio del producto
    console.log(productos[i].price);
}



//----------------------------------bucle while----------------------------------------------------
/* sirve para poder hacer una accion en un numero determinado de veces en un bucle */

let contador=0;

while(contador<=5){
    console.log("contador: ",contador);
   contador++
}

//escribir un programa que pida al usuario y la muestre en pantalla 10 veces
const imprimirDiezveces = (palabra)=>{
    let contador = 0;
    while(contador<20){
        console.log(palabra);
        contador++;
    }
}

imprimirDiezveces("Holaaa chicos");


function imprimirDiezveces1 (palabra){
    let contador = 0;
    while(contador<25){
        console.log(palabra);
        contador++;
    }
}

imprimirDiezveces1("Holaaa chicos");



//------------------------------BUCLE FOR EACH----------

//es un bucle que mezcla map y for, recorre arrays
//solo recorre uno por uno

const numeros2=[1,2,3,4,5,6,7,8,9,10]
numeros2.forEach((numeros2,index)=>{
    //console.log("incio ",index)
    console.log("que hace ",numeros2)
    //return numeros2*2;
})

const productos2=[
    {
        name: "guillermo",
        price:10000,
    },
    {
        name: "abraham",
        price:20000,
    },
    {
        name: "dani daniel",
        price:-0.5,
    },
];

productos2.forEach((productos2)=>{
    console.log(productos2);
}
)

productos2.forEach(
    (productos2)=>console.log(productos2.price)
)

//un contador que tenga botones

//atraparemos con un selecctor un elemento html, usano for each


