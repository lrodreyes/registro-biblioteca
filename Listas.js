var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lista = (function () {
    function Lista() {
        this.inicio = null;
        this.fin = null;
    }
    Lista.prototype.insertarNodo = function (nodo) {
        //COMPROBAR SI NO EXISTE NINGUN NODO CATEGORIA
        if (this.inicio == null && this.fin == null) {
            //REFERENCIAR EL NODO POR LOS APUNTADORES DE INICIO Y FIN			
            this.inicio = nodo;
            this.fin = nodo;
        }
        else if (this.inicio != null && this.fin != null) {
            //SI EXISTEN NODOS CATEGORIAS ENTONCES SE IRAN INSERTANDO AL FINAL
            this.fin.setSiguiente(nodo); //SE HACE QUE EL ULTIMO NODO DE LA LISTA APUNTE AL QUE SE ACABA DE CREAR
            nodo.setAnterior(this.fin); //EL NODO QUE SE ACABA DE CREAR APUNTA AL ANTERIOR 
            this.fin = nodo; //SE HACE QUE FIN APUNTE AL ULTIMO NODO CREADO
            //SE APUNTAN LOS EXTREMOS DE LA LISTA MUTUAMENTE
            this.fin.setSiguiente(this.inicio);
            this.inicio.setAnterior(this.fin);
        }
    };
    //RETORNA EL NODO APUNTADO POR INICIO
    Lista.prototype.getInicio = function () {
        return this.inicio;
    };
    //RETORNA EL NODO APUNTADO POR FIN
    Lista.prototype.getFin = function () {
        return this.fin;
    };
    Lista.prototype.EliminarNodo = function (nodo) {
    };
    return Lista;
}());
var ListaMenu = (function (_super) {
    __extends(ListaMenu, _super);
    function ListaMenu() {
        return _super.call(this) || this;
    }
    ListaMenu.prototype.insertarNodoMenu = function (nombre) {
        var nodo = new Categoria();
        nodo.setNombre(nombre);
        this.insertarNodo(nodo);
    };
    return ListaMenu;
}(Lista));
var ListaLibro = (function (_super) {
    __extends(ListaLibro, _super);
    function ListaLibro() {
        return _super.call(this) || this;
    }
    ListaLibro.prototype.insertarNodoLibro = function (nodoCategoria, datos) {
        var nodoLibro = new Libro();
        nodoLibro.setTitulo(datos[0]);
        nodoLibro.setAutor(datos[1]);
        nodoLibro.setAñoPublicacion(datos[2]);
        nodoLibro.setEditorial(datos[3]);
        nodoLibro.setEdicion(datos[4]);
        nodoLibro.setPais(datos[5]);
        if (nodoCategoria.getAbajo() == null) {
            this.insertarNodo(nodoLibro);
            nodoCategoria.setAbajo(nodoLibro);
            nodoLibro.setMiCategoria(nodoCategoria);
        }
        else {
            this.insertarNodo(nodoLibro);
        }
    };
    return ListaLibro;
}(Lista));
