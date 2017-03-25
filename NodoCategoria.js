//NODO PARA LAS CATEGORIAS
var Categoria = (function () {
    function Categoria() {
        this.siguiente = null;
        this.anterior = null;
        this.abajo = null;
        this.cantidad = 0;
    }
    //METODOS PARA INGRESAR Y OBTENER LA INFORMACION
    Categoria.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Categoria.prototype.aumentarCantidad = function () {
        this.cantidad++;
    };
    Categoria.prototype.getNombre = function () {
        return this.nombre;
    };
    Categoria.prototype.getCantidad = function () {
        return this.cantidad;
    };
    //METODOS PARA GUARDAR Y OBTENER LOS APUNTADORES
    Categoria.prototype.setSiguiente = function (siguiente) {
        this.siguiente = siguiente;
    };
    Categoria.prototype.setAnterior = function (anterior) {
        this.anterior = anterior;
    };
    Categoria.prototype.setAbajo = function (abajo) {
        this.abajo = abajo;
    };
    Categoria.prototype.getSiguiente = function () {
        return this.siguiente;
    };
    Categoria.prototype.getAnterior = function () {
        return this.anterior;
    };
    Categoria.prototype.getAbajo = function () {
        return this.abajo;
    };
    return Categoria;
}());
