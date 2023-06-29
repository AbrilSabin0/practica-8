class Persona{
    nombre='';
    numero_empleado = 0;
    puesto = '';



    /**
     * El método constructor es un metodo especial para crear e inicializar un objeto creado a partir de una clase.
     * Sirve para inicializar x propiedades al crear un objeto
     * Se ejecute siempre que se crea una instancia de esta clase
     * Sólo puede haber un método especial con el nombre de "constructor" en una clase. 
     * Un error de sintaxis será lanzado, si la clase contiene más de una ocurrencia de un método constructor.
     * Un constructor puede utilizar la palabra clave super para llamar al constructor de una clase padre.
     * Si no especifica un método constructor, se utiliza un constructor predeterminado.
     * 
     * MOSTRARLES QUE SI EL CONSTRUCTOR NO VIENE LLENO, 
     * NO TE INICIALIZARA LAS VARIABLES DE LA CLASE
     */
    // constructor (...args){
    //     console.log('Constructor 1');
    //   return args;
    // }

    
    constructor (nombre='Sin nombre', numeroEmpleado=null, puesto='Sin puesto'){
      this.nombre = nombre;
      this.numeroEmpleado = numeroEmpleado;
      this.puesto = puesto
  }
    
}
/**
 * CREAMOS UNA ISNTANCIA
 */
persona0 = new Persona();
console.log(persona0);

// persona1 = new Persona('Amanda',3,'Full Stack');
// console.log(persona1);


