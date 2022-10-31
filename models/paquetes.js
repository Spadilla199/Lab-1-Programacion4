const{ v4: uuidv4 } = require (uuid);
class paquetes{
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

class ListadoPaquetes{
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
        datos.forEach(paquetes => {
            this._listado[paquetes.id] = paquetes;
        });
    }

    crearPaquetes(datos){
        const envio = new  paquetes(
            datos.codigo,
            datos.fecha,
            datos.tracking,
            datos.emisor,
            datos.origen,
            datos.destino,
            datos.destinatario);
            this._listado[paquetes.id] =paquetes;
}
}

module.exports ={
    ListadoPaquetes
}