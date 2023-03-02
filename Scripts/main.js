/*
*  archivo main.js
*  Creado por: Orlando Arboleda Molina
*  Fecha: 28-Julio-2022
*
*  Descripción: 
*  Aplicativo que permite la manipulación de objetos de la clase vehiculo, 
*  para el curso de EDyA1 en la Universidad Autónoma de Occidente
*/

import {Soat} from './Soat.js';
import {VehiculoPublico} from './VehiculoPublico.js';
import {VehiculoParticular} from './VehiculoParticular.js';

// obtiene botones y combos
const btnIngresar = document.getElementById("ingresar");
const btnConsultar = document.getElementById("consultar");
let salida = document.getElementById("salida");

let bdVehiculos = [];

// se asignan eventos
btnIngresar.addEventListener('click',ingresarNvoVehiculo);
btnConsultar.addEventListener('click',listarVehiculos);


function ingresarNvoVehiculo(){
    let placa = document.getElementById("laPlaca").value;
    let modelo = document.getElementById("elModelo").value;
    let numero = parseInt(document.getElementById("elNumero").value);
    let aseguradora = document.getElementById("laAseguradora").value;
    let valor = document.getElementById("elValor").value;
    let tipo = document.getElementById("elTipo").value;
    let empresa = document.getElementById("laEmpresa").value;
    let propietario = document.getElementById("elPropietario").value;


 
    let obj;
    
    if (tipo === "particular") {
        obj = new VehiculoParticular(placa, modelo, numero, new Soat(aseguradora, valor), propietario);
    } else if (tipo === "publico") {
        obj = new VehiculoPublico(placa, modelo, numero, new Soat(aseguradora, valor), empresa);
    } else {
        // handle invalid input
    }

    bdVehiculos.push(obj);

    
    


    
    
    


    salida.value = obj.toString();
    console.log(obj.toString());
}

function listarVehiculos(){  
    // invocar a filtrarVehiculos 
    let res = filtrarVehiculos(bdVehiculos);

    

    salida.value = res;
    console.log(res)
}

function filtrarVehiculos(bd){    
    let res = 'Los vehículos buscados son:\n';

    // Recorrer el arreglo y obtener lo solicitado
    for (let i = 0; i < bd.length; i++) {
        // Obtener los atributos del vehículo
        let tipo = bd[i].constructor.name;
        let marca = bd[i].marca;
        let modelo = bd[i].modelo;

        // Filtrar por tipo de vehículo
        if (tipo === 'VehiculoParticular') {
            res += `Vehículo particular: ${bd[i].toString()}\n`;
        } else if (tipo === 'VehiculoPublico') {
            res += `Vehículo público: ${bd[i].toString()}\n`;
        }

        // Filtrar por marca
        if (marca === 'Toyota') {
            res += `Marca Toyota: ${bd[i].toString()}\n`;
        }

        // Filtrar por modelo
        if (modelo === 'Corolla') {
            res += `Modelo Corolla: ${bd[i].toString()}\n`;
        }
    }

    return res;
}

