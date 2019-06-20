let texto = "Hola a todos!";
// texto = 4;
// texto = true;
let cualquierValor;
cualquierValor = 'Algo';
cualquierValor = 3;
let colores = ['Azul', 'Verde', 'Rojo'];
let direccion = ['C/', 'Miguel Yuste', 30];
let serie = {
    titulo: 'Game of Thrones',
    numTemporadas: 8,
    numEpisodios: 100,
    numVistos: 99,
    episodiosPorVer: function () {
        return this.numEpisodios - this.numVistos;
    }
};
console.log(serie.titulo + ' ' + serie.episodiosPorVer() + ' episodios restantes');
// let numobool: boolean | number = true;
let numobool = true;
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
console.log(n1, n2);
console.log(_);
let equiposPar = ['Valencia', 'Real Madrid', 'Barcelona', 'Sevilla', 'Levante', 'At Madrid', 'At Bilbao', 'Betis'];
//  Valencia vs Barcelona
//  Sevilla vs Real Madrid
let equiposImpar = ['Valencia', 'Real Madrid', 'Barcelona', 'Sevilla', 'Levante', 'At Madrid', 'At Bilbao', 'Betis', 'Getafe'];
//  Valencia vs Levante
//  Sevilla vs Real Madrid
//  Barcelona pasa directamente
function reordenar(equipos) {
    let equiposReordenados = [];
    for (let i = equipos.length; i > 0; i--) {
        let pos = Math.floor(Math.random() * equipos.length);
        equiposReordenados.push(equipos.splice(pos, 1)[0]);
    }
    return equiposReordenados;
}
// console.log(reordenar(equiposImpar))
function getEnfrentamientos(equipos) {
    if (equipos.length <= 1) {
        if (equipos.length == 1) {
            console.log(`${equipos[0]} pasa a la siguiente fase`);
        }
        console.log('No quedan mas enfrentamientos');
    }
    else {
        let [equipo1, equipo2, ...restoEquipos] = equipos;
        console.log(`${equipo1} vs ${equipo2}`);
        return getEnfrentamientos(restoEquipos);
    }
}
getEnfrentamientos(reordenar(equiposPar));
getEnfrentamientos(reordenar(equiposImpar));
let numDobles = nums.map(function (num, pos) {
    return num * 2;
});
let numTriples = nums.map(num => num * 3);
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
        };
        mostrar();
        // mostrar.apply({marca: 'audi'}, [1, 2]);
        // mostrar.call({marca: 'audi'}, 1, 2);
    }
};
persona.addProp('apellido', 'Villalba');
function sustituirPalabras(texto, palabras, sustituto = '*') {
    let resultado = texto;
    for (let palabra of palabras) {
        let reg = new RegExp(palabra, 'gi');
        // resultado = resultado.replace(reg, sustituto || '*');
        resultado = resultado.replace(reg, sustituto);
    }
    return resultado;
}
let textoSustituir = 'Jamón ipsum friolero probando canario pero los descafeinado, mola mazo sus jodido Carnaval salir de estopa un abanica y colarse al tuntún ancha es Castilla.. Movida a quillo y farruco a bingo pasan, chorizo pero fulano piripi pipas mis chiquilla tócate con playita copazo, canturreando pero gordinflón tu truhán. Oveja negra mete una bola tu colarse pero posturitas, con mariposita Rey las escanciando sidra. Honor gazpacho vino rioja trae.';
console.log(sustituirPalabras(textoSustituir, ['jodido', 'fulano', 'con']));
function doble(valor) {
    if (typeof (valor) == 'number') {
        return valor * 2;
    }
    else if (typeof (valor) == 'string') {
        return valor.repeat(2);
    }
    else {
        throw new Error('No está definida');
    }
}
console.log(doble(2));
console.log(doble('Buenas... '));
let pelicula1 = {
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
};
pelicula1.info();
var Direccion;
(function (Direccion) {
    Direccion[Direccion["NORTE"] = 10] = "NORTE";
    // SUR = 9,
    Direccion[Direccion["SUR"] = 11] = "SUR";
    Direccion[Direccion["ESTE"] = 12] = "ESTE";
    Direccion[Direccion["OESTE"] = 13] = "OESTE";
})(Direccion || (Direccion = {}));
;
console.log(Direccion.NORTE);
console.log(Direccion[10]);
var Pais;
(function (Pais) {
    Pais["Espanya"] = "es";
    Pais["Francia"] = "fr";
    Pais["Portugal"] = "po";
})(Pais || (Pais = {}));
console.log(Pais['es']);
console.log(Pais.Portugal);
class Vehiculo {
    // private marca: string;
    // private modelo: string;
    // private color: string;
    // constructor(marca: string, modelo: string, color: string) {
    //   this.marca = marca;
    //   this.modelo = modelo;
    //   this.color = color;
    // }
    constructor(_marca, _modelo, _color) {
        this._marca = _marca;
        this._modelo = _modelo;
        this._color = _color;
    }
    get marca() {
        return this._marca;
    }
    set marca(val) {
        this._marca = val;
    }
}
class Coche extends Vehiculo {
    constructor(marca, modelo, color, matricula) {
        super(marca, modelo, color);
        this.matricula = matricula;
    }
    getNumRuedas() {
        return 4;
    }
}
let miCoche = new Coche('Tesla', 'Roadster', 'rojo', '2345XXS');
console.log(miCoche.marca);
miCoche.marca = 'Audi';
console.log(miCoche.marca);
// console.log(miCoche._marca)
// miCoche.matricula = '3456IDY';
function getItem(listaItems) {
    let pos = Math.floor(Math.random() * listaItems.length);
    return listaItems[pos];
}
console.log(getItem(nums));
console.log(getItem(colores));
class Concesionario {
    constructor(listaItems) {
        this.listaItems = listaItems;
    }
    addItem(item) {
    }
    getItem(id) {
        return this.listaItems[0];
    }
}
new Concesionario([]);
