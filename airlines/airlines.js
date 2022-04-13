let flights = [
  { id: 00, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 01, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 02, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 03, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 04, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 05, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 06, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 07, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 08, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 09, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

let user;

user = prompt("Introduzca el Usuario");
alert("Bienvenido " + user + "!");

function vuelos() {
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale) {
      prompt(
        "El vuelo con origen: " +
          flights[i].from +
          ", y destino: " +
          flights[i].to +
          ", tiene un coste de " +
          flights[i].cost +
          " € , este vuelo realiza escala"
      );
    } else {
      prompt(
        "El vuelo con origen: " +
          flights[i].from +
          ", y destino: " +
          flights[i].to +
          ", tiene un coste de " +
          flights[i].cost +
          " € y no realiza ninguna escala"
      );
    }
  }
}

function precioMedio() {
  let precioTotal = 0;
  for (let i = 0; i < flights.length; i++) {
    precioTotal += flights[i].cost;
  }
  prompt(
    "El coste medio de los vuelos es de: " +
      Math.round((precioTotal / flights.length) * 100) / 100 +
      " €."
  );
}

function escala() {
  let contadorEscalas = 0;

  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale) {
      contadorEscalas++;
    }
  }
  prompt(
    "Este es el numero de vuelos que realizan escala: " + contadorEscalas + "."
  );
}

function ultimosVuelos() {
  let ultimos = "";
  for (let i = flights.length - 5; i < flights.length; i++) {
    ultimos += flights[i].to + " ,";
  }
  prompt("Los ultimos destinos del dia son: " + ultimos);
}

vuelos();
precioMedio();
escala();
ultimosVuelos();
