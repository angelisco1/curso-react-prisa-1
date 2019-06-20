let texto: string = "Hola a todos!";
// texto = 4;
// texto = true;

let cualquierValor;
cualquierValor = 'Algo';
cualquierValor = 3;

let colores: Array<string> = ['Azul', 'Verde', 'Rojo'];

let direccion: [string, string, number] = ['C/', 'Miguel Yuste', 30];

type Serie = {
  titulo: string,
  numTemporadas: number,
  numEpisodios: number,
  numVistos: number,
  episodiosPorVer: () => number
}

let serie: Serie = {
  titulo: 'Game of Thrones',
  numTemporadas: 8,
  numEpisodios: 100,
  numVistos: 99,
  episodiosPorVer: function() {
    return this.numEpisodios - this.numVistos;
  }
}

console.log(serie.titulo + ' ' + serie.episodiosPorVer() + ' episodios restantes');

type numOrBoolean = number | boolean;

// let numobool: boolean | number = true;
let numobool: numOrBoolean = true;
numobool = 1;
// numobool = 'Un texto';

let infoGOT = 'Titulo: ' + serie.titulo;
infoGOT = `
Título: ${serie.titulo}
Me quedan ${serie.episodiosPorVer()} episodios por ver.
`;
console.log(infoGOT);

// let titulo = serie.titulo;
// let numTemporadas = serie.numTemporadas;
let { titulo: nombre, numTemporadas } = serie;
console.log(nombre);

let [azul, , rojo] = colores;

let nums = [1, 2, 3, 4, 5];
let [n1, n2, ..._] = nums;
console.log(n1, n2)
console.log(_)

let equiposPar = ['Valencia', 'Real Madrid', 'Barcelona', 'Sevilla', 'Levante', 'At Madrid', 'At Bilbao', 'Betis'];
//  Valencia vs Barcelona
//  Sevilla vs Real Madrid
let equiposImpar = ['Valencia', 'Real Madrid', 'Barcelona', 'Sevilla', 'Levante', 'At Madrid', 'At Bilbao', 'Betis', 'Getafe'];
//  Valencia vs Levante
//  Sevilla vs Real Madrid
//  Barcelona pasa directamente

function reordenar(equipos: Array<string>): Array<string> {
  let equiposReordenados: Array<string> = [];
  for (let i = equipos.length; i > 0; i--) {
    let pos: number = Math.floor(Math.random()*equipos.length);
    equiposReordenados.push(equipos.splice(pos, 1)[0]);
  }
  return equiposReordenados;
}

// console.log(reordenar(equiposImpar))

function getEnfrentamientos(equipos: Array<string>): Array<string> {
  if (equipos.length <= 1) {
    if (equipos.length == 1) {
      console.log(`${equipos[0]} pasa a la siguiente fase`);
    }
    console.log('No quedan mas enfrentamientos');
  } else {
    let [equipo1, equipo2, ...restoEquipos] = equipos;
    console.log(`${equipo1} vs ${equipo2}`);
    return getEnfrentamientos(restoEquipos);
  }
}

getEnfrentamientos(reordenar(equiposPar));
getEnfrentamientos(reordenar(equiposImpar));


let numDobles = nums.map(function (num, pos) {
  return num*2;
});

let numTriples = nums.map(num => num*3);

console.log(numDobles);
console.log(numTriples);

let persona = {
  nombre: 'Angel',
  addProp: function (prop, val) {
    this[prop] = val;
    // var self = this;
    // let mostrar = function (p1, p2) {
    let mostrar = () => {
      console.log(this);
    }
    mostrar();
    // mostrar.apply({marca: 'audi'}, [1, 2]);
    // mostrar.call({marca: 'audi'}, 1, 2);
  }
}

persona.addProp('apellido', 'Villalba');


function sustituirPalabras(texto: string, palabras: Array<string>, sustituto: string = '*'): string {
  let resultado = texto;
  for (let palabra of palabras) {
    let reg = new RegExp(palabra, 'gi');
    // resultado = resultado.replace(reg, sustituto || '*');
    resultado = resultado.replace(reg, sustituto);
  }
  return resultado;
}
let textoSustituir: string = 'Jamón ipsum friolero probando canario pero los descafeinado, mola mazo sus jodido Carnaval salir de estopa un abanica y colarse al tuntún ancha es Castilla.. Movida a quillo y farruco a bingo pasan, chorizo pero fulano piripi pipas mis chiquilla tócate con playita copazo, canturreando pero gordinflón tu truhán. Oveja negra mete una bola tu colarse pero posturitas, con mariposita Rey las escanciando sidra. Honor gazpacho vino rioja trae.'

console.log(sustituirPalabras(textoSustituir, ['jodido', 'fulano', 'con']));

function doble(valor: number): number;
function doble(valor: string): string;

function doble(valor: number | string): number | string {
    if (typeof(valor) == 'number') {
      return valor * 2;
    } else if (typeof(valor) == 'string') {
      return valor.repeat(2);
    } else {
      throw new Error('No está definida');
    }
}

console.log(doble(2))
console.log(doble('Buenas... '))

interface Persona {
  nombre: string,
  apellidos: string
}

interface Actor extends Persona {
  sueldoMillonario?: boolean,
  peliculas?: Array<Pelicula>
}

interface Pelicula {
  titulo: string,
  fechaEstreno?: number,
  actores: Array<Actor>,
  info: () => void
}

let pelicula1: Pelicula = {
  titulo: 'Los mercenarios',
  // fechaEstreno: 2015,
  actores: [
    {
      nombre: 'Json',
      apellidos: 'Statham'
    }, {
      nombre: 'Silvester',
      apellidos: 'Standalone'
    }
  ],
  info() {
    console.log(`
      Titulo: ${this.titulo}
      Actores: ${this.actores.map(a => a.nombre + ' ' + a.apellidos).join(', ')}
    `);
  }
}

pelicula1.info();

interface Pelicula {
  estrenada?: boolean
}

enum Direccion {
  NORTE = 10,
  // SUR = 9,
  SUR,
  ESTE,
  OESTE
};

console.log(Direccion.NORTE);
console.log(Direccion[10]);

enum Pais {
  Espanya = 'es',
  Francia = 'fr',
  Portugal = 'po'
}

console.log(Pais['es'])
console.log(Pais.Portugal)

abstract class Vehiculo {
  // private marca: string;
  // private modelo: string;
  // private color: string;
  // constructor(marca: string, modelo: string, color: string) {
  //   this.marca = marca;
  //   this.modelo = modelo;
  //   this.color = color;
  // }

  constructor(private _marca: string, private _modelo: string, private _color: string) {}

  get marca(): string {
    return this._marca;
  }

  set marca(val: string) {
    this._marca = val;
  }

  abstract getNumRuedas(): number;
  // getNumRuedas(): number {
  //   return 4;
  // }

}

class Coche extends Vehiculo {
  constructor(marca: string, modelo: string, color: string, readonly matricula: string) {
      super(marca, modelo, color);
  }

  getNumRuedas() {
    return 4;
  }
}

let miCoche = new Coche('Tesla', 'Roadster', 'rojo', '2345XXS');
console.log(miCoche.marca)
miCoche.marca = 'Audi'
console.log(miCoche.marca)
// console.log(miCoche._marca)
// miCoche.matricula = '3456IDY';


function getItem<T>(listaItems: Array<T>): T {
  let pos = Math.floor(Math.random()*listaItems.length);
  return listaItems[pos];
}

console.log(getItem<number>(nums));
console.log(getItem<string>(colores));

interface Catalogo<T> {
  listaItems: Array<T>,
  addItem: (item: T) => void
  getItem: (id: number) => T
}

class Concesionario<T> implements Catalogo<T> {
  constructor(public listaItems: Array<T>) {}

  addItem(item: T) {

  }

  getItem(id: number): T {
    return this.listaItems[0];
  }
}

new Concesionario<Coche>([]);