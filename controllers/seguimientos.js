const { request, response } = require('express')
const { ListadoSeguimientos } = require('../models/Seguimientos')
const{ guardarDB, leerDB } =require('../helpers/gestorDB')
const res = require('express/lib/response')



const Getseguimientos =(req = request,res = response) =>{
    let lista = new ListadoSeguimientos()
    let datosJSON = leerDB('Seguimientos')
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
    }

    const postseguimientos =(req = request,res = response) =>{
        let lista = new ListadoSeguimientos()
        let datosJSON = leerDB('Seguimientos');
        lista.cargarTareasFromArray(datosJASON)
        lista.crearEnvio(req.body)
        guardarDB(lista.listadoArr,'Seguimientos')
        res.send('Registro Creado ')
    }

    const putseguimientos =(req = request,res = response) =>{
        let lista = new ListadoSeguimientos()
        let datosJSON = leerDB('Seguimientos');
        lista.cargarTareasFromArray(datosJSON)
    
        const datos = lista.listadoArr.map(p =>
            p.id == req.params.id
            ?{"id": p.id,...req.body}
            : p
            
            );
            guardarDB(datos,'Seguimientos')
            res.send('Registro Actualizado')
    }

    const deleteprecios =(req = request,res = response) =>{
        let lista = new ListadoSeguimientos()
        let datosJSON = leerDB('Seguimientos');
        lista.cargarTareasFromArray(datosJSON)
    
        let data= lista.listadoArr.filter(item => item.id !== req.params.id)
        guardarDB(data, 'Seguimientos')
        res.send('Registro Eliminado')
    }


module.exports ={

Getseguimientos,
postseguimientos,
putseguimientos,
deleteseguimientos


}