//que es un objeto? es una entidad independiente el cual tine propiedades y atributos
// este esta compuesto por un (keys) y un value


//el objeto de un carro

const carro={
    color: "azul", //color es la key (propiedad) y azul es el value (atributo)
    motor: 1.6,
    modelo: "mustang",
    marca: "changan",
    nuevo: false,
};
console.log("es un objeto",carro);
console.table(carro);

const persona = {
    edad:34,
    nombre: "pantuflina",
    sexo: "femenino",
    talla: 1.65,
    estadoCivil: "casada",
    mayorEdad: true,
    donacionOrganos: true,

}


//como acceder a un atributo      ---de un objeto

console.log("nombre",persona.estadoCivil)
console.log("persona",persona)

//como sustituir

persona.nombre ="katty";
persona.talla=2.00;


const laptop={
    ram: "2.5gb",
    so: "w10",
    espacioDisco: "1tb",
    marca: "Acer",
    Modelo: "Nitro 5",
};

console.log("Las caracteristicas de mi laptop son: ",laptop)

