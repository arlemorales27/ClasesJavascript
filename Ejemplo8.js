const dulces = [
    { nombre: "Chocolatina", cantidad: 5, precio:800 },
    { nombre: "Chicles", cantidad: 10, precio:400 },
    { nombre: "Choclito", cantidad: 7, precio:1500 },
    { nombre: "Bombones", cantidad: 3, precio: 800 },
];
class DispensadoraDeDulces {
    constructor(nombre, dulces) {
        this.nombre = nombre;
        this.dulces = dulces;
    }

    consultarDulce(nombre) {
        const dulce = this.dulces.find(d => d.nombre === nombre);

        if (!dulce) {
            console.log(`Lo siento, no hay dulces llamados ${nombre} en esta dispensadora.`);
            return;
        }

        if (dulce.cantidad < 1) {
            console.log(`Lo siento, no hay ${nombre} en esta dispensadora.`);
            return;
        }

        console.log(`¡Disfruta  ${nombre}! compralo, si lo hay => ${dulce.cantidad}`);
    }

    realizarCompra(nombre, cantidad) {
        const dulce = this.dulces.find(d => d.nombre === nombre);

        if (!dulce) {
            console.log(`Lo siento, no hay dulces llamados ${nombre} en esta dispensadora.`);
            return;
        }

        if (dulce.cantidad < cantidad) {
            console.log(`Lo siento, solo quedan ${dulce.cantidad} ${nombre} en esta dispensadora.`);
            return;
        }

        dulce.cantidad -= cantidad;
        console.log(`Has comprado ${cantidad} ${nombre}. ¡Disfrútalos!`);
        console.log(`Quedan ${dulce.cantidad} ${nombre} en la dispensadora.`);
    }

    realizarDevolucion(nombre, cantidad, valor) {
        const dulce = this.dulces.find(d => d.nombre === nombre);

        if (!dulce) {
            console.log(`error ${nombre} escrito mal.`);
            return;
        }
        if(valor > (dulce.cantidad * dulce.precio)){
            console.log("Estamos procesando su pedido..");
            this.realizarCompra(nombre,cantidad);
            dulce.cantidad += cantidad;
            console.log(`¡Gracias por tu compra!`);
            console.log(`Quedan ${dulce.cantidad} ${nombre} en la dispensadora.`);
            console.log(` su devuelta es ${valor -(dulce.cantidad * dulce.precio)}`);
        }else{
            console.log(`saldo insuficiente para compra`);

        }
    }
}
const miDispensadora = new DispensadoraDeDulces("Mi Dispensadora dulces", dulces);
miDispensadora.consultarDulce("Bombones");
miDispensadora.realizarDevolucion("Bombones", 2, 4000);
