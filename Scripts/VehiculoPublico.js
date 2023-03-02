/*
*  Clase VehiculoPublico
*  Creado por: Orlando Arboleda Molina
*  Fecha: 26-Julio-2022
*
*  Descripci�n: 
*  Simulación de la clase VehiculoPublico, para el ejercicio propuesto en el curso de EDyA1 en la 
*  Universidad Aut�noma de Occidente
*/

// incluir import de vehiculo
import { Vehiculo } from "./Vehiculo";
// indicar que extiende de Vehiculo

export class VehiculoPublico  extends Vehiculo{
    constructor(empresa, placa, modelo, suSoat) {
        super(placa, modelo, suSoat);
        this.empresa = empresa;
    }  

    obtenerAñoRenovacion(modelo) {
        let año;

        año = modelo + 20;

        return año// completar
    }

    toString() {
        return "Empresa:" + this.empresa + "  " + super.toString();
    }    
}