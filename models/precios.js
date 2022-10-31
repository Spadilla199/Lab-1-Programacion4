const{ v4: uuidv4 } = require (uuid);
class Precios{
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

class ListadoPrecios{
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
        datos.forEach(precios => {
            this._listado[precios.id] =  precios;
        });
    }
    crearPrecios(datos){
        const envio = new  Precios(
            datos.codigo,
            datos.fecha,
            datos.tracking,
            datos.emisor,
            datos.origen,
            datos.destino,
            datos.destinatario);
            this._listado[Precios.id] =Precios;
}
}

module.exports ={
    ListadoPrecios
}