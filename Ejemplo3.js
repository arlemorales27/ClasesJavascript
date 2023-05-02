class Subasta {
    constructor(producto, precioBase) {
        this.producto = producto;
        this.precioBase = precioBase;
        this.pujas = [];
        this.finalizada = false;
    }

    agregarPuja(puja) {
        if (!this.finalizada && puja > this.getPrecioActual()) {
            this.pujas.push(puja);
            console.log(`Se agregó una puja por $${puja}`);
        } else {
            console.log(`La puja por $${puja} no es válida`);
        }
    }

    finalizar() {
        this.finalizada = true;
        console.log(`La subasta para ${this.producto} ha finalizado`);
    }

    getPrecioActual() {
        if (this.pujas.length > 0) {
            return Math.max(...this.pujas);
        } else {
            return this.precioBase;
        }
    }
}

const subas1 = new Subasta("Gafas", 100);
subas1.agregarPuja(102);
subas1.agregarPuja(105);
subas1.agregarPuja(110);
subas1.finalizar();
console.log("la subasta termno en " + subas1.getPrecioActual())
