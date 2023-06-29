/**
 * Propiedades privadas
 * Aun no los soporta todos los navegadores, 
 * pero se los mostrare para que cuand sea liberado ya sepan usarlos
 * el modo PRIVATE ES CON UN #
 * todavia no existen los METHODO PRIVADOS
 */

class Rectangulo {

    #area = 0;

    constructor (base = 0,altura=0){
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }

    /**
     * Los Methodos o Funciones tambien pueden ser privados, pero esperemos
     * a que esto sea oficial en todos los navegadores
     * https://caniuse.com/?search=private%20class
     */
    #calcularArea (){
        this.#area = this.base * this.altura;
    }
}

const areaRectangulo = new  Rectangulo(20,10);

// areaRectangulo.area = 20;

console.log(areaRectangulo);