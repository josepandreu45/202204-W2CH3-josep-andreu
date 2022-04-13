const questions = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },

  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },

  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },

  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },

  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },

  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },

  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },

  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },

  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },

  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },

  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },

  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },

  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },

  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },

  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },

  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },

  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },

  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },

  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },

  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },

  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },

  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },

  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },

  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },

  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },

  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },

  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

const ranking = [
  { nombre: "juan", aciertos: 25 },
  { nombre: "alberto", aciertos: 23 },
  { nombre: "jesus", aciertos: 19 },
  { nombre: "maria", aciertos: 15 },
  { nombre: "maribel", aciertos: 13 },
];

let respuesta = "";
let aciertos = 0;
let fallos = 0;
let pasapalabra = 0;
let nombre = "";
let end = false;

const nombreJugador = () => {
  nombre = "Bienvenido a pasapalabra, por favor inserte su nombre: ";
  if (!nombre) {
    return nombreJugador();
  }
  return `Bienvenido ${nombre}`;
};

const añadirRanking = () => {
  let i = 0;
  while (ranking.length > i && ranking[i].aciertos > aciertos) {
    i++;
  }
  ranking.splice(i, 0, { Nombre: nombre, Aciertos: aciertos });
};

const primerRosco = () => {
  for (let i = 0; i < questions.length; i++) {
    respuesta = questions[i].question.toLowerCase();

    if (respuesta === questions[i].answer) {
      aciertos++;
      return `Respuesta correcta! llevas ${aciertos} aciertos.`;
    }
    if (respuesta === "pasapalabra") {
      questions[i].status = 1;
      pasapalabra++;
    } else if (respuesta === "end") {
      end = true;
      return end;
    } else {
      return `Incorrecto! la respuesta correcta es: " ${questions[i].answer}  .`;
    }
  }
  const siguienteRosco = () => {
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].status === 1) {
        respuesta = prompt(questions[i].question).toLowerCase();
        if (respuesta === questions[i].answer) {
          questions[i].status = 0;
          aciertos++;
          pasapalabra--;
          alert(`Respuesta correcta! llevas ${aciertos} aciertos.`);
        } else if (respuesta === "pasapalabra") {
          questions[i].status = 1;
        } else if (respuesta === "end") {
          end = true;
          return end;
        } else {
          return `Incorrecto! la respuesta correcta es: ${questions[i].answer}.`;
          questions[i].status = 0;
          fallos++;
          pasapalabra--;
        }
      }
    }
  };

  const reseteaVariables = () => {
    respuesta = "";
    aciertos = 0;
    fallos = 0;
    pasapalabra = 0;
    nombre = "";
    end = false;
  };

  const instrucciones = () =>
    "Bienvenido al pasapalabra Le saldran las preguntas a las cuales ha de responder, si la acierta le saldra un aviso que indicara que es correcta y los aciertos que lleva. En caso contrario le saldra la respuesta que es correcta, si deja la casilla en blanco la respuesta contara como incorrecta. Puede salir del juego en cualquier momento escribiendo En en lugar de la respuesta, tenga en cuenta que en caso de salir su puntuacion no se guardara en el rannking. Una vez haya terminado el juego le saldra la tabla de rankings con su posicion en el Adelante!!!";
  const juego = () => {
    reseteaVariables();
    nombre = nombreJugador();
    instrucciones();
    mostrarRanking();
    primerRosco();
    siguienteRosco();

    do {
      siguienteRosco();
    } while (pasapalabra > 0);

    if (end === true) {
      return `Gracias por jugar, has acertado: ${aciertos} y has fallado ${fallos}.`;
    }
    return `Enhorabuena por terminar el juego, has acertado: ${aciertos} preguntas y fallado ${fallos}.`;
  };

  juego();
};
