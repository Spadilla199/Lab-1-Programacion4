const { request, response } = require('express')
const { ListadodetalleEnvio } = require('../models/detalleEnvio')
const{ guardarDB, leerDB } =require('../helpers/gestorDB')
const res = require('express/lib/response')

const GetdetalleEnvio =(req = request,res = response) =>{
    let lista = new ListadodetalleEnvio()
    let datosJSON = leerDB('DetalleEnvio')
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
    }

    const postDetalleEnvio =(req = request,res = response) =>{
        let lista = new ListadodetalleEnvio()
        let datosJSON = leerDB('DetalleEnvio');
        lista.cargarTareasFromArray(datosJASON)
        lista.crearEnvio(req.body)
        guardarDB(lista.listadoArr,'DetalleEnvio')
        res.send('Registro Creado ')
    }
    const putDetalleEnvio =(req = request,res = response) =>{
        let lista = new ListadodetalleEnvio()
        let datosJSON = leerDB('DetalleEnvio');
        lista.cargarTareasFromArray(datosJSON)
    
        const datos = lista.listadoArr.map(p =>
            p.id == req.params.id
            ?{"id": p.id,...req.body}
            : p
            
            );
            guardarDB(datos,'DetalleEnvio')
            res.send('Registro Actualizado')
    }

    const deleteDetalleEnvio =(req = request,res = response) =>{
        let lista = new ListadodetalleEnvio()
        let datosJSON = leerDB('DetalleEvio');
        lista.cargarTareasFromArray(datosJSON)
    
        let data= lista.listadoArr.filter(item => item.id !== req.params.id)
        guardarDB(data, 'DetalleEnvio')
        res.send('Registro Eliminado')
    }
    

module.exports ={

GetdetalleEnvio,
postDetalleEnvio,
putDetalleEnvio,
deleteDetalleEnvio


}