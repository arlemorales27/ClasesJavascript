class Empleado {
    #nombre;
    constructor(nombre) {
        this.#nombre = nombre;
    }
    get nombre() {
        return this.#nombre;
    }

    set nombre(value) {
        this.#nombre = value;
    }
}

const empleado = new Empleado("Arle");
console.log(empleado.nombre);
empleado.nombre = "Manuel";
console.log(`el nuevo nombre de este objeto es  ${empleado.nombre}`)

