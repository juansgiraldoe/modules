import { Cliente } from "./cliente.js";

export class Empresa extends Cliente{
  constructor(nombre, ahorro, tipo){
    super(nombre, ahorro);
    this.tipo = tipo
  };
  mostrarInformacion(){
    return `La empresa ${this.nombre} tiene un ahorro de ${this.ahorro} y es de categoria ${this.tipo}.`;
  };
};