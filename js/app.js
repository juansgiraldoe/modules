import { nombreCliente, ahorro, mostrarInfo, tieneSaldo, Cliente } from "./cliente.js";
console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInfo(nombreCliente, ahorro));
console.log(tieneSaldo(ahorro));

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarInformacion());