class Hotel {
    constructor(nombre) {
        this.nombre = nombre;
        this.habitaciones = [];
    }
    agregarHabitacion(habitacion) {
        this.habitaciones.push(habitacion);
    }

    buscarHabitacion(tipo, fechaEntrada, fechaSalida) {
        let habitacionDisponible = null;

        for (let i = 0; i < this.habitaciones.length; i++) {
            let habitacion = this.habitaciones[i];

            if (habitacion.tipo === tipo && habitacion.estaDisponible(fechaEntrada, fechaSalida)) {
                habitacionDisponible = habitacion;
                break;
            }
        }

        return habitacionDisponible;
    }
}
class Habitacion {
    constructor(numero, tipo, capacidad) {
        this.numero = numero;
        this.tipo = tipo;
        this.capacidad = capacidad;
        this.reservas = [];
    }

    estaDisponible(fechaEntrada, fechaSalida) {
        for (let i = 0; i < this.reservas.length; i++) {
            let reserva = this.reservas[i];

            if (reserva.fechaEntrada <= fechaSalida && reserva.fechaSalida >= fechaEntrada) {
                return false;
            }
        }

        return true;
    }

    reservar(fechaEntrada, fechaSalida, nombreCliente) {
        if (!this.estaDisponible(fechaEntrada, fechaSalida)) {
            console.log(`La habitación ${this.numero} no está disponible en esas fechas`);
            return false;
        }

        this.reservas.push({ fechaEntrada, fechaSalida, nombreCliente });
        console.log(`Reservado habitación ${this.numero} para ${nombreCliente} desde ${fechaEntrada} hasta ${fechaSalida}`);
        return true;
    }
}

// Crear un nuevo hotel
const hotel = new Hotel('Hotel Von Humboltd');

// Agregar habitaciones al hotel
hotel.agregarHabitacion(new Habitacion(101, 'individual', 1));
hotel.agregarHabitacion(new Habitacion(102, 'doble', 2));
hotel.agregarHabitacion(new Habitacion(103, 'doble', 2));
hotel.agregarHabitacion(new Habitacion(104, 'suite', 4));

// Buscar una habitación disponible
const habitacionDisponible = hotel.buscarHabitacion('doble', '2023-05-01', '2023-05-03');

// Si se encuentra una habitación disponible, reservarla
if (habitacionDisponible) {
    habitacionDisponible.reservar('2023-05-01', '2023-05-03', 'Juan Pérez');
}
