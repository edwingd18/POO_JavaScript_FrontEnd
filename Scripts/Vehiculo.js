/*
*  Clase Vehiculo
*  Creado por: Orlando Arboleda Molina
*  Fecha: 26-Julio-2022
*
*  Descripci�n: 
*  Simulación de la clase Vehiculo, para el ejercicio propuesto en el curso de EDyA1 en la 
*  Universidad Aut�noma de Occidente
*/
import {Soat} from './Soat.js';

export class Vehiculo {
    constructor(placa, modelo, suSoat) {
        this.placa = placa;
        this.modelo = modelo;
        this.suSoat = suSoat;
    }  

    obtenerEstadoEsperado(modelo) {
        let res;

        if (modelo >= 2020){
            res = "MODERNO";
        }else{
            res = "RODADO"
        }


        // completar
        
        return res;
    }

    toString() {
        return "Placa:" + this.placa + "  Modelo:" + this.modelo +
            "\n Soat:" + this.suSoat.toString();
    }    
}
