import nueva, { nombreCliente as name, ahorro, mostrarInfo, tieneSaldo, Cliente } from "./cliente.js";
//Importar empresa.
import { Empresa } from "./empresa.js";
console.log(name);
console.log(ahorro);

console.log(mostrarInfo(name, ahorro));
console.log(tieneSaldo(ahorro));

const cliente = new Cliente(name, ahorro);
console.log(cliente.mostrarInformacion());


const empresa = new Empresa('Bustter', 100000000, 'Motociclismo')
console.log(empresa);
console.log(empresa.mostrarInformacion());
nueva();