//NODO PARA LOS LIBROS
var Libro = (function () {
    function Libro() {
        anterior: Libro;
        this.siguiente = null;
        this.anterior = null;
    }
    Libro.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Libro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Libro.prototype.setAñoPublicacion = function (añoPublicacion) {
        this.añoPublicacion = añoPublicacion;
    };
    Libro.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    Libro.prototype.setEdicion = function (edicion) {
        this.edicion = edicion;
    };
    Libro.prototype.setPais = function (pais) {
        this.pais = pais;
    };
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.getAñoPublicacion = function () {
        return this.añoPublicacion;
    };
    Libro.prototype.getEditorial = function () {
        return this.editorial;
    };
    Libro.prototype.getEdicion = function () {
        return this.edicion;
    };
    Libro.prototype.getPais = function () {
        return this.pais;
    };
    return Libro;
}());
