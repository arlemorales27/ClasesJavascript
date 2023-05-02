class Animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }
    comer() {
        console.log(`${this.nombre} está comiendo.`);
    }
    mover() {
        console.log(`${this.nombre} se está moviendo.`);
    }
}
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre, "perro");
        this.raza = raza;
    }

    ladrar() {
        console.log(`${this.nombre} está ladrando.`);
    }
}
let miPerro = new Perro("Fido", "Labrador");
miPerro.comer(); // muestra "Fido está comiendo."
miPerro.mover(); // muestra "Fido se está moviendo."
miPerro.ladrar(); // muestra "Fido está ladrando."