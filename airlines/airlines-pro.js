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

function mostrarVuelos() {
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
  let ultimos = [];
  for (let i = flights.length - 5; i < flights.length; i++) {
    ultimos += "-" + flights[i].to + "\n";
  }

  prompt(`Los ultimos destinos del dia son:\n${ultimos}`);
}

function compararIdFlights(idflight) {
  mismaId = false;
  for (let i = 0; i < flights.length; i++) {
    if (idflight == flights[i].id) {
      mismaId = true;
    }
  }
  return mismaId;
}

function crearVuelo() {
  let newFlight = {
    id: "",
    to: "",
    from: "",
    cost: "",
    scale: "",
  };
  do {
    newFlight.id = +prompt("Indique el id del nuevo vuelo:");
    if (compararIdFlights(newFlight.id)) {
      alert("El id coincide con otro vuelo, inserte uno nuevo.");
    }
  } while (compararIdFlights(newFlight.id));

  newFlight.to = prompt("Indique el destino del vuelo");
  newFlight.from = prompt("Indique el origen del vuelo");
  newFlight.cost = +prompt("indique el precio del vuelo");
  newFlight.scale = prompt(
    "Indique si el vuelo realizara escala (Y) o no (N)"
  ).toLowerCase();

  if (newFlight.scale == "y") {
    newFlight.scale = true;
  } else {
    newFlight.scale = false;
  }

  flights.push(newFlight);
  prompt("Actualizando lista de vuelos...");
  for (let i = 0; i < flights.length; i++) {
    prompt(flights[i]);
  }

  if (confirm("Desea añadir otro vuelo?") && flights.length < 15) {
    crearVuelo();
  } else {
    alert("Error: No pueden haber mas de 15 vuelos");
  }
}

function eliminarVuelo() {
  let IdVueloEliminar;
  do {
    IdVueloEliminar = +prompt("Indique el id del vuelo que quiere eliminar");
    if (!compararIdFlights(IdVueloEliminar)) {
      alert("El id introducido no coincide con ningun vuelo");
    }
  } while (!compararIdFlights(IdVueloEliminar));

  if (compararIdFlights(IdVueloEliminar)) {
    for (let i = 0; i < flights.length; i++) {
      if (IdVueloEliminar == flights[i].id) {
        IdVueloEliminar = i;
      }
    }
    flights.splice(IdVueloEliminar, 1);
  }
  prompt("Actualizando lista de vuelos...");
  for (let i = 0; i < flights.length; i++) {
    console.log(flights[i]);
  }

  if (confirm("Desea eliminar otro vuelo?") && flights.length > 0) {
    eliminarVuelo();
  } else {
    alert("Error: No hay mas vuelos para eliminar");
  }
}

function comprarVuelos() {
  let idVueloComprar;
  let precioMax = +prompt("Indique el limite de precio que quiere buscar:");
  for (let i = 0; i < flights.length; i++) {
    if (precioMax >= flights[i].cost) {
      prompt(flights[i]);
    }
  }
  do {
    idVueloComprar = +prompt("Indique el id del vuelo que quiere comprar");
    if (!compararIdFlights(idVueloComprar)) {
      alert("El id introducido no coincide con ningun vuelo");
    }
  } while (!compararIdFlights(idVueloComprar));

  for (let i = 0; i < flights.length; i++) {
    if (idVueloComprar == flights[i].id) {
      prompt(
        "Confirmacion de vuelo; origen: " +
          flights[i].from +
          ", destino: " +
          flights[i].to +
          ", precio: " +
          flights[i].cost +
          " € "
      );
    }
  }
  if (confirm("Desea comprar otro vuelo?")) {
    comprarVuelos();
  } else {
    alert("Gracias por realizar su compra! Vuelva pronto.");
  }
}

let user;

user = prompt("Introduzca el Usuario");
alert("Bienvenido " + user + "!");

mostrarVuelos();
precioMedio();
escala();
ultimosVuelos();

let userType = prompt(
  "Introduzca su categoria de usuario: Admin/User."
).toLowerCase();

if (userType == "admin") {
  for (let i = 0; i < flights.length; i++) {
    prompt(flights[i]);
  }

  let operacionVuelo = prompt("Desea añadir vuelo(+) o eliminar vuelo(-) ?");

  if (operacionVuelo == "+" && flights.length < 15) {
    crearVuelo();
  } else if (operacionVuelo == "-") {
    eliminarVuelo();
  } else {
    alert("Hay demasiados vuelos, no se pueden añadir mas.");
  }
} else if (userType == "user") {
  comprarVuelos();
}
