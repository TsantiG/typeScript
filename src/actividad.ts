

//------------------------  ACTIVIDAD --------------------------------------


abstract class Animal {
 
    private _nombre: string;


    public edad: number;


    constructor(nombre: string, edades: number) {
        this._nombre = nombre;
        this.edad = edades;
    }


    public nombre(): string {
        return this._nombre;
    }


    public abstract sonido(): void;


    public static descripcion(): string {
        return "Animals are living organisms that feed on organic matter.";
    }
}


class Perro extends Animal {
   
    private _criado: string;

    constructor(nombre: string, edad: number, criado: string) {
        
        super(nombre, edad);
        this._criado = criado;
    }

  
    public criado(): string {
        return this._criado;
    }


    public sonido(): void {
        console.log("Woof! Woof!");
    }

   
    public mensaje(): string {
        return `${this.nombre()} es un ${this._criado} perro y tiene ${this.edad} años.`;
    }
}


const miPerro = new Perro("Buddy", 3, "Golden Retriever");


console.log(miPerro.nombre()); 
console.log(miPerro.criado()); 
console.log(miPerro.mensaje()); 


console.log(Animal.descripcion()); 

