class detalleEnvio{
    constructor(id,codigo,fecha,tracking,origen,destino,emisor,destinatario){
    this.id=id,
    this.codigo=codigo,
    this.fecha=fecha,
    this.tracking=tracking,
    this.origen=origen,
    this.destino=destino,
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
}