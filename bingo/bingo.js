/* eslint-disable no-undef */
let bingoCard = [
  // primera linea

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },

  // segunda linea

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },

  // tercera linea

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },
];

let match = 0;
let count = 0;
let linea = false;
let bombo = [];
let puntos = 200;
let newNumber;
let randomNumber;

const ranking = [
  { nombre: "carlos", puntos: 120 },
  { nombre: "Manolo", puntos: 79 },
  { nombre: "Leonardo", puntos: 76 },
  { nombre: "Emilie", puntos: 42 },
  { nombre: "Rose", puntos: 24 },
];

function newRandomNumber() {
  do {
    randomNumber = Math.floor(Math.random() * (91 - 1)) + 1;
  } while (randomNumber < 0);
  return randomNumber;
}
function numeroRepetidoCarton(numeroABuscar) {
  let coincide = false;
  for (let i = 0; i < bingoCard.length; i++) {
    if (bingoCard[i].number === numeroABuscar) {
      coincide = true;
    }
  }
  return coincide;
}
function nuevoCartonBingo() {
  for (let i = 0; i < bingoCard.length; i++) {
    do {
      newNumber = newRandomNumber();
    } while (numeroRepetidoCarton(newNumber) || newNumber < 1);
    bingoCard[i].number = newNumber;
  }
}
function mostrarCarton() {
  let primeraLinea = "";
  // eslint-disable-next-line no-undef
  for (i = 0; i < 5; i++) {
    if (bingoCard[i].matched) {
      primeraLinea += `  ${bingoCard[i].number} X`;
    } else {
      primeraLinea += `  ${bingoCard[i].number}  `;
    }
  }
  primeraLinea;
  segundaLinea = "";
  for (i = 5; i < 10; i++) {
    if (bingoCard[i].matched) {
      segundaLinea += `  ${bingoCard[i].number} X`;
    } else {
      segundaLinea += `  ${bingoCard[i].number}  `;
    }
  }
  segundaLinea;
  terceraLinea = "";
  for (i = 10; i < 15; i++) {
    if (bingoCard[i].matched) {
      terceraLinea += `  ${bingoCard[i].number} X`;
    } else {
      terceraLinea += `  ${bingoCard[i].number}  `;
    }
  }
  terceraLinea;
}
function nuevaBola() {
  let nuevaBolaBombo = 0;

  do {
    nuevaBolaBombo = newRandomNumber();
  } while (bombo.includes(nuevaBolaBombo));

  for (let i = 0; i < bingoCard.length; i++) {
    if (nuevaBolaBombo === bingoCard[i].number) {
      bingoCard[i].matched = true;
      match++;
    }
  }

  count++;
  bombo.push(nuevaBolaBombo);

  alert(`La siguiente bola es... el ${nuevaBolaBombo}!`);
  mostrarCarton();
  revisarLinea();
  revisarBingo();
}
function siguienteTurno() {
  do {
    if (
      confirm(
        "Pulse aceptar para sacar otra bola o cancelar para salir del juego"
      )
    ) {
      nuevaBola();
    } else {
      `Gracias por haber jugado! tus bolas acertadas han sido: ${match}`;
      otraPartida();
      return;
    }
  } while (match < 15);
}
function revisarLinea() {
  if (linea === false) {
    if (
      bingoCard[0].matched === true &&
      bingoCard[1].matched === true &&
      bingoCard[2].matched === true &&
      bingoCard[3].matched === true &&
      bingoCard[4].matched === true
    ) {
      linea = true;
      alert("LINEA!!!");
    }
  }
  if (linea === false) {
    if (
      bingoCard[5].matched === true &&
      bingoCard[6].matched === true &&
      bingoCard[7].matched === true &&
      bingoCard[8].matched === true &&
      bingoCard[9].matched === true
    ) {
      linea = true;
      alert("LINEA!!!");
    }
  }
  if (linea === false) {
    if (
      bingoCard[10].matched === true &&
      bingoCard[11].matched === true &&
      bingoCard[12].matched === true &&
      bingoCard[13].matched === true &&
      bingoCard[14].matched === true
    ) {
      linea = true;
      alert("LINEA!!!");
    }
  }
}
function revisarBingo() {
  if (match === 15) {
    alert("BINGO!!! HAS TERMINADO LA PARTIDA!!!");
    alert("BINGO!!!");
  }
}
function otraPartida() {
  if (confirm("Desea volver a jugar?")) {
    reiniciaVariables();
    bingo();
  } else {
    alert("Gracias por jugar! Hasta pronto.");
  }
}
function generarCartonNuevo() {
  let nuevoCarton = "";

  do {
    nuevoCarton = prompt("Desea un carton nuevo (Yes)?").toLowerCase();

    if (nuevoCarton === "yes") {
      nuevoCartonBingo();
      alert("Aqui tienes un nuevo carton");
      mostrarCarton();
    }
  } while (nuevoCarton === "yes");
}
function printRanking() {
  prompt(ranking);
}
function puntuacion() {
  if (match === 15) {
    puntos -= count;

    let i = 0;
    while (ranking.length > i && ranking[i].puntos > puntos) {
      i++;
    }
    ranking.splice(i, 0, { nombre: userName, puntos });
  }
}
function instrucciones() {
  alert(
    "Bienvenido al bingo. \n",
    "Le generearemos un carton y usted podra elegir si jugar con ese o en su lugar quiere otro carton nuevo, \n",
    "una vez aceptado el carton empieza el juego. \n",
    "La puntuacion inicial sera de 200 puntos que se iran restando con cada turno,\n",
    "a menor numero de turnos mayor puntuacion.\n",
    "Que empiece el juego :"
  );
}
function reiniciaVariables() {
  bingoCard = [
    // primera linea

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    // segunda linea

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    // tercera linea

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },
  ];
  match = 0;
  count = 0;
  linea = false;
  bombo = [];
  puntos = 200;
}

function bingo() {
  instrucciones();
  printRanking();
  nuevoCartonBingo();
  mostrarCarton();
  generarCartonNuevo();

  mostrarCarton();
  siguienteTurno();

  return `Has terminado el juego en ${count} turnos.`;
}
puntuacion();
userName = "Cual es su nombre?";

bingo();
