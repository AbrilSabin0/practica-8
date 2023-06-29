

class Persona {

    /**
     * Si creamos una variable de tipo static
     * no aparecera en nuestra isntancia al crear new Persona()
     */
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.nombre ); // undefined
        console.log('Hola a todos, soy un método stático');
    }


    nombre = '';
    numero_empleado = '';
    puesto  = '';
    comida = '';

    /**
     * 
     * Se ejecute siempre que se crea una instancia de esta clase
     */
    constructor( nombre = 'Sin nombre', numero_empleado = 'Sin código', puesto = 'Sin puesto') {
        console.log('Constructos por default');
        this.nombre = nombre;
        this.numero_empleado = numero_empleado;
        this.puesto  = puesto;

        Persona._conteo++;
    }
    
    /**
     * SET Y GET
     * Sirven para llevar el control de como se establezca, ya qye sino se crean 
     * podriamos editar directamente la variable.
     */

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }


    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi numero de empleado es ${ this.numero_empleado }`);
    }

    mipuesto() {
        this.quienSoy();
        console.log(`${ this.numero_empleado} dice: ${ this.puesto }`);
    }

}



const spiderman = new Persona( 'Peter Parker', '123', 'Analista' );
const ironman   = new Persona( 'Tony Stark', '3455', 'Programador' );

// console.log( ironman );

spiderman.mipuesto();
// ironman.mipuesto();

/**
 * Llamar a mi SET
 */

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
/**
 * Esto es algo delicado, actualmente algunos navegadores aun no acepta el tipo de variable private, 
 * entonces podrias estes esto.
 * spiderman.comida = 'Duende Verde';
 * Cosa que no se debe de hacer por buenas practicas,
 * Javascript lo acepta, porque recuerden que es debilmente typeado
 */


// console.log( spiderman.getComidaFavorita );

// console.log( spiderman );
// Persona._conteo = 2;
console.log('Conteo stático', Persona._conteo );
console.log( Persona.conteo );
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';

console.log( Persona.propiedadExterna );
console.log( Persona );

