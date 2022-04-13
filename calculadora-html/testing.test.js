/**
 * @jest-environment jsdom
 */

const numeroUno = document.getElementById("uno");
const numeroDos = document.getElementById("dos");
const numeroTres = document.getElementById("tres");
const numeroCuatro = document.getElementById("cuatro");
const numeroCinco = document.getElementById("cinco");
const numeroSeis = document.getElementById("seis");
const numeroSiete = document.getElementById("siete");
const numeroOcho = document.getElementById("ocho");
const numeroNueve = document.getElementById("nueve");
const numeroCero = document.getElementById("cero");
const botonAc = document.getElementById("ac");
const botonBorrar = document.getElementById("return");
const botonComa = document.getElementById("coma");
const botonSuma = document.getElementById("suma");
const botonResta = document.getElementById("resta");
const botonDivision = document.getElementById("division");
const botonMultiplicacion = document.getElementById("multiplicacion");
const botonIgual = document.getElementById("igual");
const pantalla = document.getElementById("pantalla");

const numeroActual = [];
let numeroPrevio = [];
const signoOperacion = "";
let resultado = [];
let firstTime = true;

function operacion() {
  switch (signoOperacion) {
    case "+":
      if (firstTime) {
        numeroPrevio.push(Number(numeroActual.join("")));
        resultado = [
          Math.round((numeroPrevio[0] + numeroPrevio[1]) * 1000) / 1000,
        ];

        numeroPrevio = [];
        numeroPrevio.push(resultado);
        pantalla.innerHTML += signoOperacion;
        pantalla.innerHTML = resultado;
        firstTime = false;
      } else {
        resultado.push(Number(numeroActual.join("")));
        resultado = [Math.round((resultado[0] + resultado[1]) * 1000) / 1000];

        numeroPrevio = [];
        pantalla.innerHTML = resultado + signoOperacion;
      }

      break;

    case "-":
      if (firstTime) {
        numeroPrevio.push(Number(numeroActual.join("")));
        resultado = [
          Math.round((numeroPrevio[0] - numeroPrevio[1]) * 1000) / 1000,
        ];

        numeroPrevio = [];
        numeroPrevio.push(resultado);
        pantalla.innerHTML += signoOperacion;
        pantalla.innerHTML = resultado;
        firstTime = false;
      } else {
        resultado.push(Number(numeroActual.join("")));
        resultado = [Math.round((resultado[0] - resultado[1]) * 1000) / 1000];

        numeroPrevio = [];
        pantalla.innerHTML = resultado + signoOperacion;
      }

      break;

    case "*":
      if (firstTime) {
        numeroPrevio.push(Number(numeroActual.join("")));
        resultado = [
          Math.round(numeroPrevio[0] * numeroPrevio[1] * 1000) / 1000,
        ];

        numeroPrevio = [];
        numeroPrevio.push(resultado);
        pantalla.innerHTML += signoOperacion;
        pantalla.innerHTML = resultado;
        firstTime = false;
      } else {
        resultado.push(Number(numeroActual.join("")));
        resultado = [Math.round(resultado[0] * resultado[1] * 1000) / 1000];

        numeroPrevio = [];
        pantalla.innerHTML = resultado + signoOperacion;
      }

      break;

    case "/":
      if (firstTime) {
        numeroPrevio.push(Number(numeroActual.join("")));
        resultado = [
          Math.round((numeroPrevio[0] / numeroPrevio[1]) * 1000) / 1000,
        ];

        numeroPrevio = [];
        numeroPrevio.push(resultado);
        pantalla.innerHTML += signoOperacion;
        pantalla.innerHTML = resultado;
        firstTime = false;
      } else {
        resultado.push(Number(numeroActual.join("")));
        resultado = [Math.round((resultado[0] / resultado[1]) * 1000) / 1000];

        numeroPrevio = [];
        pantalla.innerHTML = resultado + signoOperacion;
      }

      break;

    default:
      pantalla.innerHTML = "error";
  }
}

numeroUno.onclick = () => {
  numeroActual.push(1);
  numeroActual.join("");
  pantalla.innerHTML = numeroActual.join("");
};

numeroDos.onclick = () => {
  numeroActual.push(2);
  numeroActual.join("");
  pantalla.innerHTML = numeroActual.join("");
};

numeroTres.onclick = () => {
  numeroActual.push(3);
  numeroActual.join("");
  pantalla.innerHTML = numeroActual.join("");
};

numeroCuatro.onclick = () => {
  numeroActual.push(4);
  numeroActual.join("");
  pantalla.innerHTML = numeroActual.join("");
};

numeroCinco.onclick = () => {
  numeroActual.push(5);
  numeroActual.join("");
  pantalla.innerHTML = numeroActual.join("");
};

numeroSeis.onclick = () => {
  numeroActual.push(6);
  numeroActual.join("");
  pantalla.innerHTML = numeroActual.join("");
};

numeroSiete.onclick = () => {
  numeroActual.push(7);
  numeroActual.join("");
  pantalla.innerHTML = numeroActual.join("");
};

numeroOcho.onclick = () => {
  numeroActual.push(8);
  numeroActual.join("");
  pantalla.innerHTML = numeroActual.join("");
};

numeroNueve.onclick = () => {
  numeroActual.push(9);
  numeroActual.join("");
  pantalla.innerHTML = numeroActual.join("");
};

numeroCero.onclick = () => {
  numeroActual.push(0);
  numeroActual.join("");
  pantalla.innerHTML = numeroActual.join("");
};

botonComa.onclick = () => {
  numeroActual.push(".");
  numeroActual.join("");
  pantalla.innerHTML = numeroActual.join("");
};

botonAc.onclick = () => {
  numeroActual = [];
  numeroPrevio = [];
  signoOperacion = "";
  resultado = [];
  firstTime = true;
  pantalla.innerHTML = 0;
};

botonBorrar.onclick = () => {
  if (numeroActual.length > 1) {
    numeroActual.pop();
    numeroActual.join("");
    pantalla.innerHTML = numeroActual.join("");
  } else {
    numeroActual = [];
    pantalla.innerHTML = resultado;
  }
};

botonSuma.onclick = () => {
  if (firstTime) {
    if (signoOperacion === "+") {
      numeroPrevio.push(Number(numeroActual.join("")));
      resultado = [
        Math.round((numeroPrevio[0] + numeroPrevio[1]) * 1000) / 1000,
      ];
      firstTime = false;
      numeroActual = [];
      pantalla.innerHTML = resultado + signoOperacion;
    } else {
      operacion();
      numeroPrevio.push(Number(numeroActual.join("")));
      signoOperacion = "+";
      numeroActual = [];
      pantalla.innerHTML += signoOperacion;
    }
  } else {
    operacion();
    signoOperacion = "+";
    numeroActual = [];
    pantalla.innerHTML = resultado + signoOperacion;
  }
};

botonResta.onclick = () => {
  if (firstTime) {
    if (signoOperacion === "-") {
      numeroPrevio.push(Number(numeroActual.join("")));
      resultado = [
        Math.round((numeroPrevio[0] - numeroPrevio[1]) * 1000) / 1000,
      ];
      firstTime = false;
      numeroActual = [];
      pantalla.innerHTML = resultado + signoOperacion;
    } else {
      operacion();
      numeroPrevio.push(Number(numeroActual.join("")));

      signoOperacion = "-";
      numeroActual = [];
      pantalla.innerHTML += signoOperacion;
    }
  } else {
    operacion();
    signoOperacion = "-";
    numeroActual = [];
    pantalla.innerHTML = resultado + signoOperacion;
  }
};

botonMultiplicacion.onclick = () => {
  if (firstTime) {
    if (signoOperacion === "*") {
      numeroPrevio.push(Number(numeroActual.join("")));
      resultado = [Math.round(numeroPrevio[0] * numeroPrevio[1] * 1000) / 1000];
      firstTime = false;
      numeroActual = [];
      pantalla.innerHTML = resultado + signoOperacion;
    } else {
      operacion();
      numeroPrevio.push(Number(numeroActual.join("")));
      signoOperacion = "*";
      numeroActual = [];
      pantalla.innerHTML += signoOperacion;
    }
  } else {
    operacion();
    signoOperacion = "*";
    numeroActual = [];
    pantalla.innerHTML = resultado + signoOperacion;
  }
};

botonDivision.onclick = () => {
  if (firstTime) {
    if (signoOperacion === "/") {
      numeroPrevio.push(Number(numeroActual.join("")));
      resultado = [
        Math.round((numeroPrevio[0] / numeroPrevio[1]) * 1000) / 1000,
      ];
      firstTime = false;
      numeroActual = [];
      pantalla.innerHTML = resultado + signoOperacion;
    } else {
      operacion();
      numeroPrevio.push(Number(numeroActual.join("")));
      signoOperacion = "/";
      numeroActual = [];
      pantalla.innerHTML += signoOperacion;
    }
  } else {
    operacion();
    signoOperacion = "/";
    numeroActual = [];
    pantalla.innerHTML = resultado + signoOperacion;
  }
};

botonIgual.onclick = () => {
  operacion();
  pantalla.innerHTML = resultado;
  signoOperacion = "";
};

describe("given de operacion function", () => {
  describe("when it recieves 2+2", () => {
    test("then it showld return 4", () => {
      const signoOperacion = "+";
      const numeroActual = 2;
      const numeroPrevio = 2;
      const expectedResult = 4;

      const result = operacion();

      expect(result).toBe(expectedResult);
    });
  });
});
