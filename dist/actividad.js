"use strict";
//------------------------  ACTIVIDAD --------------------------------------
class Animal {
    constructor(nombre, edades) {
        this._nombre = nombre;
        this.edad = edades;
    }
    nombre() {
        return this._nombre;
    }
    static descripcion() {
        return "Animals are living organisms that feed on organic matter.";
    }
}
class Perro extends Animal {
    constructor(nombre, edad, criado) {
        super(nombre, edad);
        this._criado = criado;
    }
    criado() {
        return this._criado;
    }
    sonido() {
        console.log("Woof! Woof!");
    }
    mensaje() {
        return `${this.nombre()} es un ${this._criado} perro y tiene ${this.edad} años.`;
    }
}
const miPerro = new Perro("Buddy", 3, "Golden Retriever");
console.log(miPerro.nombre());
console.log(miPerro.criado());
console.log(miPerro.mensaje());
console.log(Animal.descripcion());
