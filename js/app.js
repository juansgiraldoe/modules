import { nombreCliente, ahorro, mostrarInfo, tieneSaldo, Cliente } from "./cliente.js";
//Importar empresa.
import { Empresa } from "./empresa.js";
console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInfo(nombreCliente, ahorro));
console.log(tieneSaldo(ahorro));

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarInformacion());


const empresa = new Empresa('Bustter', 100000000, 'Motociclismo')
console.log(empresa);
console.log(empresa.mostrarInformacion());