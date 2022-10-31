const { request, response } = require('express')
const { ListadoPrecios } = require('../models/Precio')
const{ guardarDB, leerDB } =require('../helpers/gestorDB')
const res = require('express/lib/response')

const Getpaquetes =(req = request,res = response) =>{
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('Precios')
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
    }

    
   const postpaquetes =(req = request,res = response) =>{
        let lista = new ListadoPrecios()
        let datosJSON = leerDB('Precios');
        lista.cargarTareasFromArray(datosJASON)
        lista.crearEnvio(req.body)
        guardarDB(lista.listadoArr,'Precios')
        res.send('Registro Creado ')
    }

    const putprecios =(req = request,res = response) =>{
        let lista = new ListadoPrecios()
        let datosJSON = leerDB('Precios');
        lista.cargarTareasFromArray(datosJSON)
    
        const datos = lista.listadoArr.map(p =>
            p.id == req.params.id
            ?{"id": p.id,...req.body}
            : p
            
            );
            guardarDB(datos,'Precios')
            res.send('Registro Actualizado')
    }

    const deleteprecios =(req = request,res = response) =>{
        let lista = new ListadoPrecios()
        let datosJSON = leerDB('Precios');
        lista.cargarTareasFromArray(datosJSON)
    
        let data= lista.listadoArr.filter(item => item.id !== req.params.id)
        guardarDB(data, 'Precios')
        res.send('Registro Eliminado')
    }


module.exports ={

Getprecios,
postprecios,
putprecios,
deleteprecios


}