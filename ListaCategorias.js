var ListaCategorias = (function () {
    function ListaCategorias() {
        this.inicio = null;
        this.fin = null;
    }
    ListaCategorias.prototype.insertarCategoria = function (nombre) {
        //COMPROBAR SI NO EXISTE NINGUN NODO CATEGORIA
        if (this.inicio == null && this.fin == null) {
            //CREAR UN NUEVO NODO CATEGORIA, REFERENCIADO POR LOS APUNTADORES DE INICIO Y FIN
            var objCategoria = new Categoria();
            objCategoria.setNombre(nombre); //SE LE MANDA EL NOMBRE
            this.inicio = objCategoria;
            this.fin = objCategoria;
        }
        else if (this.inicio != null && this.fin != null) {
            //SI EXISTEN NODOS CATEGORIAS ENTONCES SE IRAN INSERTANDO AL FINAL
            var objCategoria = new Categoria();
            objCategoria.setNombre(nombre);
            this.fin.setSiguiente(objCategoria); //SE HACE QUE EL ULTIMO NODO DE LA LISTA APUNTE AL QUE SE ACABA DE CREAR
            objCategoria.setAnterior(this.fin); //EL NODO QUE SE ACABA DE CREAR APUNTA AL ANTERIOR 
            this.fin = objCategoria; //SE HACE QUE FIN APUNTE AL ULTIMO NODO CREADO
            //SE APUNTAN LOS EXTREMOS DE LA LISTA MUTUAMENTE
            this.fin.setSiguiente(this.inicio);
            this.inicio.setAnterior(this.fin);
        }
    };
    //METODO PARA MANEJAR EL RECORRIDO ENTRE LOS NODOS
    ListaCategorias.prototype.getPosicion = function () {
    };
    ListaCategorias.prototype.getInicio = function () {
        return this.inicio;
    };
    ListaCategorias.prototype.getFin = function () {
        return this.fin;
    };
    ListaCategorias.prototype.EliminarCategoria = function (obj) {
    };
    return ListaCategorias;
}());
