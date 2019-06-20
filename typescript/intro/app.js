"use strict";
exports.__esModule = true;
var mixin_1 = require("./mixin");
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.disponible = true;
    }
    Persona.prototype.cambiarDisponibilidad = function () { };
    return Persona;
}());
function applyMixins(baseClass, mixinsClass) {
    mixinsClass.forEach(function (mix) {
        Object.getOwnPropertyNames(mix.prototype).forEach(function (propName) {
            console.log(propName);
            baseClass.prototype[propName] = mix.prototype[propName];
        });
    });
}
applyMixins(Persona, [mixin_1.Disponible]);
var p = new Persona('Angel', 'Villalba');
console.log(p.disponible);
p.cambiarDisponibilidad();
console.log(p.disponible);
