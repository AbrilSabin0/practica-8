class Persona{

    /**
     *Static
     *Sirve para poder llamarla desde la clase
     *No es necesario crear un objeto para llamarle 
     * 
     */   
    nombre='';
    numeroEmpleado = 0;
    puesto = 'Variable Static';

    static _nombre = 'Test';

    // constructor (){}

    constructor (nombre='Sin nombre', numeroEmpleado=null, puesto='Sin puesto'){
      this.nombre = nombre;
      this.numeroEmpleado = numeroEmpleado;
      this.puesto = puesto
    }

    set setNombre (nombre){
      this.nombre = nombre.toUpperCase();
    }

    set setNumeroEmpleado (numeroEmpleado){
      this.numeroEmpleado = numeroEmpleado;
    }

    set setPuesto (puesto){
      this.puesto = puesto;
    }

    get getNombre(){
      return this.nombre;
    } 

    get getNumeroEmpleado(){
      return this.numeroEmpleado;
    } 

    get getPuesto(){
      return this.puesto;
    } 
    
    quienSoy(){
      return `Hola mi nombre es ${this.nombre}, con número de empleado ${this.numeroEmpleado} y puesto ${this.puesto}`;
    }
}

let persona1 = new Persona();
persona1.setNombre ='Amanda';
persona1.setNumeroEmpleado = 123;
persona1.setPuesto = 'Full Stack';
console.log(persona1);

let persona2 = new Persona();
console.log(persona2);

let persona3 = new Persona('Abril',24,'Estudiante');
console.log(persona3);
