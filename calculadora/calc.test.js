let primer;
let segundo;
let operacion;
const resultSum = [];
const resultRest = [];
const resultMult = [];
const resultDiv = [];
/*
while (isNaN(primer)) {
  primer = Number(prompt("Inserte el primer numero"));
}
while (isNaN(segundo)) {
  segundo = Number(prompt("Inserte el segundo numero"));
}

if (primer == "") {
  (`La raiz cuadrada de ${segundo} es = ${Math.sqrt(segundo)}`);
} else if (segundo == "") {
  (`La raiz cuadrada de ${primer} es = ${Math.sqrt(primer)}`);
} else {
  operacion = prompt("Indique la operacion a realizar: +, -, *, /");
} */

function suma(n1, n2) {
  resultSum.push(Math.round((n1 + n2) * 1000) / 1000);

  return resultSum;
}
function resta(n1, n2) {
  resultRest.push(Math.round((n1 - n2) * 1000) / 1000);

  return resultRest;
}
function multiplicacion(n1, n2) {
  resultMult.push(Math.round(n1 * n2 * 1000) / 1000);

  return resultMult;
}
function division(n1, n2) {
  resultDiv.push(Math.round((n1 / n2) * 1000) / 1000);

  return resultDiv;
}
/*
switch (operacion) {
  case "+":
    suma(primer, segundo);
    break;
  case "-":
    resta(primer, segundo);
    break;
  case "/":
    division(primer, segundo);
    break;
  case "*":
    multiplicacion(primer, segundo);
    break;
  default:
    ("No ha seleccionado una operacion correcta");
} */

describe("given the suma function", () => {
  describe("when it recieves the parameters 2 and 2", () => {
    test("then it should return [4]", () => {
      const primerNumero = 2;
      const segundoNumero = 2;
      const resultSum = [];
      const expectedResult = [4];

      result = suma(2, 2);

      expect(result).toMatchObject(expectedResult);
    });
  });
});
