export const nombreCliente = 'Juan';
export const ahorro = 200;

// //Funciones de ejecucion inmediata.
// (function () {
//   console.log('Desde un IIFE.');
// })();

export function mostrarInfo(nombreCliente, ahorro) {
  return `El cliente ${nombreCliente} y tiene un ahorro de ${ahorro}.`;
}

export function tieneSaldo(ahorro) {
  if (ahorro>0) {
    console.log('Si tiene saldo');
  }else{
    console.log('Sin fondos.');
  }
}