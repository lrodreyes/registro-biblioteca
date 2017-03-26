var objListaMenu = new ListaMenu(); //OBJETO PARA ACCEDER A LOS METODOS DE LA CLASE LISTACATEGORIA
var objListaLibro = new ListaLibro();
// objListaMenu.insertarNodoMenu("Matematicas");
// objListaMenu.insertarNodoMenu("Historia");
// objListaMenu.insertarNodoMenu("Geografia");
var auxiliarCategoria; //APUNTADOR PARA RECORRER LOS NODOS CATEGORIA
var auxiliarLibro; //APUNTADOR PARA RECORRER LOS NODOS DE TIPO LIBRO
auxiliarCategoria = this.objListaMenu.getInicio(); //SE POSICION EL APUNTADOR DE CATEGORIA EN EL PRIMER ELEMENTO DE LA LISTA
getInfoCategoria();
function mostrarSeccionIC() {
    document.getElementById("seccionAgregarCategoria").setAttribute("hidden", "true");
    document.getElementById("seccionInformacionLibro").setAttribute("hidden", "true");
    document.getElementById("seccionAgregarLibro").setAttribute("hidden", "true");
    document.getElementById("seccionInformacionCategoria").removeAttribute("hidden");
}
function mostrarSeccionIL() {
    document.getElementById("seccionAgregarCategoria").setAttribute("hidden", "true");
    document.getElementById("seccionInformacionLibro").removeAttribute("hidden");
    document.getElementById("seccionAgregarLibro").setAttribute("hidden", "true");
    document.getElementById("seccionInformacionCategoria").setAttribute("hidden", "true");
}
function mostrarSeccionAC() {
    document.getElementById("seccionAgregarCategoria").removeAttribute("hidden");
    document.getElementById("seccionInformacionLibro").setAttribute("hidden", "true");
    document.getElementById("seccionAgregarLibro").setAttribute("hidden", "true");
    document.getElementById("seccionInformacionCategoria").setAttribute("hidden", "true");
}
function mostrarSeccionAL() {
    document.getElementById("seccionAgregarCategoria").setAttribute("hidden", "true");
    document.getElementById("seccionInformacionLibro").setAttribute("hidden", "true");
    document.getElementById("seccionAgregarLibro").removeAttribute("hidden");
    document.getElementById("seccionInformacionCategoria").setAttribute("hidden", "true");
}
function anteriorCategoria() {
    if (auxiliarCategoria.getAnterior() != null) {
        auxiliarCategoria = auxiliarCategoria.getAnterior();
        getInfoCategoria();
    }
}
function siguienteCategoria() {
    if (auxiliarCategoria.getSiguiente() != null) {
        auxiliarCategoria = auxiliarCategoria.getSiguiente();
        getInfoCategoria();
    }
}
function registrarCategoria() {
    //RECOGER EL NOMBRE DE LA CATEGORIA 
    var nombre = document.getElementById("nombre").value.toString();
    objListaMenu.insertarNodoMenu(nombre);
    alert("La categoria se registro correctamente");
    document.getElementById("nombre").value = "";
    if (auxiliarCategoria == null) {
        auxiliarCategoria = objListaMenu.getInicio();
    }
}
function registrarLibro() {
    var nombre = document.getElementById("nombre").value.toString();
    var autor = document.getElementById("autor").value.toString();
    var año = document.getElementById("año").value.toString();
    var editorial = document.getElementById("editorial").value.toString();
    var edicion = document.getElementById("edicion").value.toString();
    var pais = document.getElementById("pais").value.toString();
    var datos = [nombre, autor, año, editorial, edicion, pais];
    objListaLibro.insertarNodo(auxiliarCategoria, datos);
}
function getInfoLibro() {
    mostrarSeccionIL();
    //COMPROBAR SI EXISTEN LIBROS REGISTRADOS
    if (auxiliarLibro == null) {
        //NO HAY LIBROS REGISTRADOS
        var seccion = document.getElementById("datosLibro");
        seccion.innerHTML = "\n\t\t\t<p> No existen libros registrados</p>";
        document.getElementById("siguienteLibro").setAttribute("disabled", "true");
        document.getElementById("anteriorLibro").setAttribute("disabled", "true");
    }
    else {
        mostrarSeccionIL();
        var titulo = auxiliarLibro.getTitulo();
        var autor = auxiliarLibro.getAutor();
        var añoPublicacion = auxiliarLibro.getAñoPublicacion();
        var editorial = auxiliarLibro.getEditorial();
        var edicion = auxiliarLibro.getEdicion();
        var pais = auxiliarLibro.getPais();
        var seccion = document.getElementById("datosLibro");
        seccion.innerHTML = "\n\t\t\t<p>titulo: " + titulo + "<p>\n\t\t\t<p>autor: " + autor + "<p>\n\t\t\t<p>a\u00F1oPublicacion: " + añoPublicacion + "<p>\n\t\t\t<p>editorial: " + editorial + "<p>\n\t\t\t<p>edicion: " + edicion + "<p>\n\t\t\t<p>pais: " + pais + "<p>";
    }
}
function getInfoCategoria() {
    //LIMPIAR INPUT EN CASO DE QUE HAYA ESCRITO ALGO 
    document.getElementById("nombre").value = "";
    if (auxiliarCategoria == null) {
        //MOSTRAR SOLO LA SECCION DE INFORMACION DE CATEGORIAS
        mostrarSeccionIC();
        //INSERTARLE EL MENSAJE DE QUE NO HAY NADA PARA MOSTRAR
        document.getElementById("datosCategoria").innerHTML = "<p> No hay categorias registradas </p>";
        //DESABILITAR BOTONOES
        document.getElementById("verLibros").setAttribute("disabled", "true");
        document.getElementById("anteriorCategoria").setAttribute("disabled", "true");
        document.getElementById("siguienteCategoria").setAttribute("disabled", "true");
    }
    else {
        auxiliarLibro = auxiliarCategoria.getAbajo();
        mostrarSeccionIC();
        var nombre = auxiliarCategoria.getNombre();
        var cantidad = auxiliarCategoria.getCantidad();
        document.getElementById("datosCategoria").innerHTML = "\t\n\t\t\t<p>" + nombre + "<p>\n\t\t\t<p>" + cantidad + " Libros registrados<p>";
        document.getElementById("verLibros").removeAttribute("disabled");
        document.getElementById("anteriorCategoria").removeAttribute("disabled");
        document.getElementById("siguienteCategoria").removeAttribute("disabled");
    }
}
