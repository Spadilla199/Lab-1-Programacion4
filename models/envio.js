const{ v4: uuidv4 } = require (uuid);


class Envios{
    constructor(id,codigo,fecha,tracking,origen,destino,emisor,destinatario){
    this.id=uuidv4
    this.codigo=codigo
    this.fecha=fecha
    this.tracking=tracking
    this.origen=origen
    this.destino=destino
    this.destinatario=destinatario
    this._listado[envio.id] = envio;

    }
}

class ListadoEnvios{
    constructor(){
        this._listado = {};
    }
    getlistadoArr(){
        const listado =[];
        Object.keys(this._listado).forEach(key =>{
            listado.push(tarea);
        });
        return listado;
    }
    cargarTareasFromArray(datos =[] ){
        datos.forEach(envio => {
            this._listado[envio.id] = envio;
        });
    }

    crearEnvio(datos){
        const envio = new  Envios(
            datos.codigo,
            datos.fecha,
            datos.tracking,
            datos.emisor,
            datos.origen,
            datos.destino,
            datos.destinatario);
            this._listado[envio.id] =envio;
    }
    }



module.exports ={
    ListadoEnvios
}