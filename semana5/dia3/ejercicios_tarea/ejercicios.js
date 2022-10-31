//creamos nuestra funcion
//llama a la funcion y prompt
function callMenu() {
  let nro_ejercicio = parseInt(
    prompt(
      "Ingrese nro de ejericicio que desea ejecutar: \r\n 1. suma. \r\n 2. Promedio examenes \r\n 3. Calcular el area de un rectangulo \r\n 4. Calcular el area de un triangulo \r\n 5. Calcular el area de un circulo \r\n 6. Determina sueldo semanal \r\n 7.  \r\n 8. \r\n 9. \r\n 10. \r\n 11. \r\n 12. \r\n 13. \r\n 14."
    )
  );
  if (isNaN(nro_ejercicio)) {
    alert("Por favor, ingresa valores");
  } else {
    MenuEjercicios(nro_ejercicio);
  }
}
//van todos los ejercicios y valores
function MenuEjercicios(nro_ejercicio) {
  switch (nro_ejercicio) {
    case 1:
      let valor1 = parseFloat(prompt("Ingresa el valor 1 a sumar: "));
      let valor2 = parseFloat(prompt("Ingresa el valor 2 a sumar: "));
      alert(ej1_sumarValores(valor1, valor2));
      break;

    case 2:
      let ex1 = parseFloat(prompt("Ingresa nota 1: "));
      let ex2 = parseFloat(prompt("Ingresa nota 2: "));
      let ex3 = parseFloat(prompt("Ingresa nota 3: "));
      let ex4 = parseFloat(prompt("Ingresa nota 4: "));
      alert(ej2_calcularPromedio(ex1, ex2, ex3, ex4));
      break;

    case 3:
      let base_rect = parseFloat(prompt("Ingrese Base: "));
      let altura_rect = parseFloat(prompt("Ingresa Altura: "));
      alert(ej3_calculaAreaRectangulo(base_rect, altura_rect));
      break;

    case 4:
      let base_tri = parseFloat(prompt("Ingrese BaseT: "));
      let altura_tri = parseFloat(prompt("Ingrese AlturaT: "));
      alert(ej4_calcularAreaTri(base_tri, altura_tri));
      break;

    case 5:
      let radio = parseFloat(prompt("Ingresa radio: "));
      alert(ej5_CalcularCiruclo(radio));
      break;

    case 6:
      let horasTrabajo = parseFloat(prompt("Ingrese horas trabajaas: "));
      let salarioHora = parseFloat(prompt("Ingrese Salario: "));
      alert(ej6_calculaSalario(horasTrabajo, salarioHora));
      break;

    case 7:
      let telaMetro = parseFloat(prompt("ingresa cantidad Tela: "));
      alert(ej7_modista(telaMetro));
      break;

    case 8:
      let soles = parseFloat(prompt("Ingresa cuantos soles tienes: "));
      alert(ej8_dolar(soles));
      break;

    case 9:
      let anioNac = parseInt(prompt("Ingrese en qué año nació: "));
      alert(ej9_calculaEdad(anioNac));
      break;

    case 10:
      let name1 = prompt("Ingresa tu nombre: ");
      let edad1 = prompt("Ingrese su edad: ");

      let name2 = prompt("Ingresa tu nombre: ");
      let edad2 = prompt("Ingrese su edad: ");

      let name3 = prompt("Ingresa tu nombre: ");
      let edad3 = prompt("Ingrese su edad: ");

      alert(ej10_edadMenor(name1, name2, name3, edad1, edad2, edad3));
      break;

    case 11:
        let anio = prompt("Ingrese años de antiguedad en la empresa: ");
        alert(ej11_bono(anio));
        break;

    case 12:
      prompt("Mostrar salario durante 6 años")
      alert(ej12_salario());
  }
}

//cada funcion para cada ejercicio
function ej1_sumarValores(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Por favor ingresa valores!";
  } else {
    return a + b;
  }
}

//ejercicio 2 funcino promedio
function ej2_calcularPromedio(ex1, ex2, ex3, ex4) {
  if (isNaN(ex1) || isNaN(ex2) || isNaN(ex3) || isNaN(ex4)) {
    return "Por favor ingresa todos las notas";
  } else {
    return (ex1 + ex2 + ex3 + ex4) / 4;
  }
}

//ejercicio 3: calcualr area rectangulo
function ej3_calculaAreaRectangulo(b, h) {
  if (isNaN(b) || isNaN(h)) {
    return "Por favor ingresa los datos del rectangulo";
  } else {
    return b * h;
  }
}

//ejercicio 4: calcula area triangulo

function ej4_calcularAreaTri(b, a) {
  if (isNaN(b) || isNaN(a)) {
    return "Por favor ingresa los datos del triangulo";
  } else {
    return (b * a) / 2;
  }
}

//ejercicio 5: area de un circulo

function ej5_CalcularCiruclo(r) {
  if (isNaN(r)) {
    return "Por favor ingresa radio del circulo";
  } else {
    return Math.PI * Math.pow(r, 2);
  }
}

//ejercicio 6: determinar sueldo
function ej6_calculaSalario(h, s) {
  if (isNaN(h) || isNaN(s)) {
    return "Por favor ingresa datos";
  } else {
    return "Su salario de esta semana es " + h * s * 5;
  }
}

//ejercicio 7: metros a pulgadas
function ej7_modista(t) {
  if (isNaN(t)) {
    return "Por favor ingrese datos";
  } else {
    return "Debes pedir " + t / 0.0254 + " pulgadas ";
  }
}

//ejercicio 8: convertir soles a dolares
function ej8_dolar(s) {
  if (isNaN(s)) {
    return "Por favor ingrese datos";
  } else {
    return "Con S/. " + s + ", puedes obetener $" + s / 3.99;
  }
}

//ejercicio 9: Calcular edad actual
function ej9_calculaEdad(a) {
  if (isNaN(a)) {
    return "Por favor ingresa año de nacimiento";
  } else {
    return "Tienes " + (2022 - a) + " años";
  }
}

//ejercicio 10: calcular edad del menor
function ej10_edadMenor(nm1, nm2, nm3, e1, e2, e3) {
    // console.log({
    //     nm1,
    //     nm2,
    //     nm3,
    //     e1,
    //     e2,
    //     e3
    // })
  if (!(nm1 && nm1 != "")) {
    return "Complete el nombre 1"
  }
  if (!(nm2 && nm2 != "")) {
    return "Complete el nombre 2"
  }
  if (!(nm3 && nm3 != "")) {
    return "Complete el nombre 3"
  }
  
  if (!(e1 && e1 != "")) {
    return "Complete la edad 1"
  }
  if (!(e2 && e2 != "")) {
    return "Complete la edad 2"
  }
  if (!(e3 && e3 != "")) {
    return "Complete la edad 3"
  }

  if(isNaN(e1)){
    return "La edad 1 debe ser un valor numerico"
  }
  if(isNaN(e2)){
    return "La edad 2 debe ser un valor numerico"
  }
  if(isNaN(e3)){
    return "La edad 3 debe ser un valor numerico"
  }

  if (e1 < e2 && e1 < e3) {
    return "El menor es "+nm1+" con "+ e1 +" años";

  } else if (e2 < e1 && e2 < e3) {
    return "El menor es "+nm2+" con "+ e2 +" años";

  } else if (e3 < e1 && e3 < e2) {
    return "El menor es "+nm3+" con "+ e3 +" años";

  } else if(e1==e2||e2==e3||e1==e3) {
    return "Hay edades iguales";
  }
}

//ejercicio 11 calcular bono
function ej11_bono(a){
  if(a<=5){
    return "Por "+a+" años, recibirá: "+a*100+"de bono";
  } else if(a>5){
    return "Por "+a+" años, recibirá: "+a*1000+"de bono";
  }

function ej12_salario(){
  
}

}


