class Persona{
 
    nombre='';
    numeroEmpleado = 0;
    puesto = 'Variable Static';

    static _nombre = 'Test';

    constructor (nombre='Sin nombre', numeroEmpleado=null, puesto='Sin puesto'){
        console.log('Ejecutanfo constructor Persona');
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

class Perfil extends Persona{
    rol='';
    /*
     * Mostrarles como funciona el constructor sin SUPER y con super
     * El super debe de ir al principio, antes de un this.
     * osea que si puedes colocar let y const pero no un this.
     * pero por buenas practicas colocalo hasta arriba
     * El super lo que hace, es indicarle a la clase que su construvtor sera el que ejecute
     */
    constructor(){
        super();
    }

}

let perfil = new Perfil();
perfil.setNombre ='Amanda';
perfil.setNumeroEmpleado = 123;
perfil.setPuesto = 'Full Stack';
console.log(perfil);

let perfil2 = new Perfil('Tani',345,'Admin');
console.log(perfil2);

