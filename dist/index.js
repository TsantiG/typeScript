"use strict";
let Name = "hola";
const Gato = "";
console.log(Name);
// let lasname: String|null = prompt("");
if (Name == Gato) {
    console.log(Gato);
}
let bool = true ? false : true;
const array = ["juan", "fernando", "caminlo"];
// let i = 0; i < array.length; i++
// array of Element: tring[]
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
for (let Element of array) {
    console.log(Element);
}
const animales = {
    leon: "leon",
    perro: "perro",
    gato: "gato",
};
const p = () => {
    return [];
};
class cosa1 {
    constructor(name) {
        this.name = name;
    }
}
class cosa2 extends cosa1 {
    constructor(name, notas) {
        super(name);
        this.notas = 0;
        this.notas = notas;
    }
}
class objeto {
    constructor(apellido, notas) {
        this.apellido = apellido;
        this.nota = notas;
    }
}
class objeto2 extends objeto {
    constructor(apellido, notas, nombre, vales) {
        super(apellido, notas);
        this.nombres = "santi";
        this.vales = 0;
        this.vales = vales;
        this.nombres = nombre;
    }
    function() {
        this.vales = this.vales + 1;
        function nombres(nombre) {
            if (nombre === "Juan") {
            }
        }
    }
}
