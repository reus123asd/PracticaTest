const { promedioDeNotas } = require("./Ejercicio01");

test("El promedio de notas", () => {
  expect(promedioDeNotas([12, 17, 20, 10])).toBe(14.75);
});

const { concatenar } = require("./Ejercicio01");

test("Mi nombre y apellido deberia estar en mayuscula", () => {
  expect(concatenar("Owen", "Barahona")).toBe("OWEN BARAHONA");
});

const { mayorEdad } = require("./Ejercicio01");

test("Para ser mayor de edad deberias ser mayor o igual a 18", () => {
  expect(mayorEdad(18)).toBe("Es mayor de edad");
});

const { mayorNumero } = require("./Ejercicio01");

test("Mayor numero", () => {
  expect(mayorNumero([4, 12, 1, 50, 38])).toBe(50);
});