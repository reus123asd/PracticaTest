// 1. crear la función que reciba un arreglo de números y retorne el promedio de la suma de todos los números, además se deberá crear los test

//  -> cuando el valor esperado es correcto
//  -> cuando el valor esperado es incorrecto
function promedioDeNotas(notas) {
  if (notas instanceof Array) {
    let suma = notas.reduce((totalsuma, numero) => totalsuma + numero);
    let promedio = suma / notas.length;
    return promedio;
  }
}

console.log(promedioDeNotas([12, 17, 20, 10]));

// 2. hacer una función que reciba 2 parametros (nombres y apellidos) y permita concantenarlas y convertirlas a mayusculas, además se deberá crear el test
//  -> cuando el valor esperado es correcto
//  -> cuando el valor esperado es incorrecto

function concatenar(nombre, apellido) {
  return (nombre + " " + apellido).toUpperCase();
}
console.log(concatenar("owen", "barahona"));

// crear una función para saber si una persona es mayor de edad, esta función recibirá un parametro edad de tipo número, además se deberá crear los test

function mayorEdad(n1) {
  if (n1 < 17) {
    return "Es menor de edad";
  } else {
    return "Es mayor de edad";
  }
}
console.log(mayorEdad(20));

//   4. crear una función que permita ingresar un array de números y retorne el número mayor, además se deberá hacer sus test

// const numeros = [1, 2, 3, 30, 5, 6];
function mayorNumero(numero) {
  let max = Math.max(...numero);
  return max;
}

console.log(mayorNumero([4, 12, 1, 50, 38]));

// 5. Crear una función FIZZBUZZ y hacer unit test

for (let i = 1; i <= 100; i++) {
  let result = "";
  if (i % 3 == 0) {
    result += "Fizz";
  }
  if (i % 5 == 0) {
    result += "Buzz";
  }
  console.log(result || i);
}

module.exports = { promedioDeNotas, concatenar, mayorEdad, mayorNumero };