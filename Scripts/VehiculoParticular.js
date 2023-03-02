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
export class VehiculoParticular extends Vehiculo {
    constructor(propietario, placa, modelo, suSoat) {
        super(placa, modelo, suSoat);
        this.propietario = propietario;
    }  

    toString() {
        return "Propietario:" + this.propietario + "  " + super.toString();
    }    
}