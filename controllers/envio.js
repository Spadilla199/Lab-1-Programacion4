const { request, response } = require('express')
const { ListadoEnvios } = require('../models/envio')
const{ guardarDB, leerDB } =require('../helpers/gestorDB')
const res = require('express/lib/response')

const Getenvio =(req = request,res = response) =>{
let lista = new ListadoEnvios()
let datosJSON = leerDB('envio')
lista.cargarTareasFromArray(datosJSON)
res.json(lista.listadoArr)
}

const postenvio =(req = request,res = response) =>{
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJASON)
    lista.crearEnvio(req.body)
    guardarDB(lista.listadoArr,'envios')
    res.send('Registro Creado ')
}

const putenvio =(req = request,res = response) =>{
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadoArr.map(p =>
        p.id == req.params.id
        ?{"id": p.id,...req.body}
        : p
        
        );
        guardarDB(datos,'envios')
        res.send('Registro Actualizado')
}

const deleteenvio =(req = request,res = response) =>{
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)

    let data= lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data, 'envios')
    res.send('Registro Eliminado')
}




module.exports ={

Getenvio,
postenvio,
putenvio,
deleteenvio


}