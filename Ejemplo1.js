class Persona {
    #PrimerNombre; // (A)
    constructor(PrimerNombre) {
        this.#PrimerNombre = PrimerNombre; // (B)
    }
    describe() {
        return `persona llamada ${this.#PrimerNombre}`;
    }
    static extractNames(persons) {
        return persons.map(person => person.#PrimerNombre);
    }
}
const ana = new Persona('Ana');
const juan = new Persona('Juan');

console.log(ana.describe());