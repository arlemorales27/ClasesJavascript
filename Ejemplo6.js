class CajeroAutomatico {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }

    retirarDinero(cantidad) {
        if (cantidad > this.saldo) {
            console.log("Saldo insuficiente");
            return;
        }

        this.saldo -= cantidad;
        console.log(`Retirado ${cantidad} pesos. Saldo restante: ${this.saldo} pesos`);
    }

    depositarDinero(cantidad) {
        this.saldo += cantidad;
        console.log(`Depositado ${cantidad} pesos. Saldo actual: ${this.saldo} pesos`);
    }

    consultarSaldo() {
        console.log(`Saldo actual: ${this.saldo} pesos`);
    }
}

let miCajero = new CajeroAutomatico(1000);
miCajero.consultarSaldo(); // Saldo actual: 1000 pesos

miCajero.retirarDinero(500); // Retirado 500 pesos. Saldo restante: 500 pesos
miCajero.consultarSaldo(); // Saldo actual: 500 pesos

miCajero.depositarDinero(200); // Depositado 200 pesos. Saldo actual: 700 pesos
miCajero.consultarSaldo(); // Saldo actual: 700 pesos



