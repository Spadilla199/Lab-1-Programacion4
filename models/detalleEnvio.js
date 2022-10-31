const{ v4: uuidv4 } = require (uuid);

class detalleEnvio{
    constructor(id,codigo,fecha,tracking,origen,destino,emisor,destinatario){
    this.id=uuidv4
    this.codigo=codigo
    this.fecha=fecha
    this.tracking=tracking
    this.origen=origen
    this.destino=destino
    this.destinatario=destinatario
    }
}

class ListadodetalleEnvio{
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
        datos.forEach(detalleEnvio => {
            this._listado[detalleEnvio.id] = detalleEnvio;
        });
    }

    crearDetalleEnvio(datos){
        const envio = new  detalleEnvio(
            datos.codigo,
            datos.fecha,
            datos.tracking,
            datos.emisor,
            datos.origen,
            datos.destino,
            datos.destinatario);
            this._listado[detalleEnvio.id] =detalleEnvio;
    }

}

module.exports ={
    ListadodetalleEnvio
}