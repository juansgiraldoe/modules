export const nombreCliente = 'Juan';
export const ahorro = 200;

// //Funciones de ejecucion inmediata.
// (function () {
//   console.log('Desde un IIFE.');
// })();

export function mostrarInfo(nombre, ahorro) {
  return `El cliente ${nombre} y tiene un ahorro de ${ahorro}.`;
}

export function tieneSaldo(ahorro) {
  if (ahorro>0) {
    console.log('Si tiene saldo');
  }else{
    console.log('Sin fondos.');
  }
}

export class Cliente {
  constructor(nombre, ahorro){
    this.nombre = nombre;
    this.ahorro = ahorro;
  };
  mostrarInformacion(){
    return `El cliente ${this.nombre} y tiene un ahorro de ${this.ahorro}.`;
  };
};

//No requiere estar entre {} en el archivo que lo importe.
export default function nueva() {
  console.log('Este es el export default.');
}
//Solo puede haber uno, y se puede llamar de otra forma.