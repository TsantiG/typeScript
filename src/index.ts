let Name: string ="hola";
const Gato: string = "";

console.log(Name);

// let lasname: String|null = prompt("");

if(Name == Gato){
    console.log(Gato);
}

let bool: boolean = true ? false : true;

const array: Array<string> = ["juan", "fernando", "caminlo"];

// let i = 0; i < array.length; i++
// array of Element: tring[]
for(let i:number = 0; i < array.length; i++) {
    console.log(array[i]);
}

for(let Element of array) {
    console.log(Element);
}


const animales = {
    leon: "leon",
    perro: "perro",
    gato: "gato",
}

interface zoologico {

}


const p:() => string[] = ():string[] =>{
    return []
}


interface cosas{
    
    info: Function
}


class cosa1{
    constructor(name:string){
        this.name = name;
    }


    name:string;
    apellido?: string|null; 


}

class cosa2 extends cosa1{

    notas:number = 0;
    constructor(name:string, notas:number){
        super(name);
        this.notas=notas;
    }


}


class objeto {
    private nombre?: string;

    public apellido: string;

    public nota: number

    constructor(apellido: string, notas:number) {
        this.apellido = apellido;
        this.nota = notas;
    }


}

class objeto2 extends objeto{

    

    constructor(apellido: string, notas: number, nombre: string, vales: number) {
        super(apellido, notas);
        this.vales = vales
        this.nombres = nombre;
        
    }

    function ()  {
        this.vales = this.vales+1
        function nombres(nombre: string) {
            if (nombre === "Juan"){
                 
            }
        }



        
    }
    
    nombres = "santi";
    vales = 0;
}

