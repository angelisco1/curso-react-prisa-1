import { Disponible } from './mixin';

class Persona {
  constructor(public nombre: string, public apellidos: string) { }

  disponible: boolean = true;
  cambiarDisponibilidad() {}
}

function applyMixins(baseClass, mixinsClass) {
  mixinsClass.forEach(mix => {
    Object.getOwnPropertyNames(mix.prototype).forEach(propName => {
      console.log(propName);
      baseClass.prototype[propName] = mix.prototype[propName];
    })
  })
}

applyMixins(Persona, [Disponible])

let p = new Persona('Angel', 'Villalba');
console.log(p.disponible);
p.cambiarDisponibilidad();
console.log(p.disponible);