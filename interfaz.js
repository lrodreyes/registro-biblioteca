var objListaMenu = new ListaMenu(); //OBJETO PARA ACCEDER A LOS METODOS DE LA CLASE LISTACATEGORIA
var listaLibro1 = new ListaLibro();
//APUNTADORES
var auxiliarCategoria; //APUNTADOR PARA RECORRER LOS NODOS CATEGORIA
var auxiliarLibro; //APUNTADOR PARA RECORRER LOS NODOS DE TIPO LIBRO
//SE INGRESAN DATOS DE CATEGORIAS
objListaMenu.insertarNodoMenu("Matematicas");
objListaMenu.insertarNodoMenu("Historia");
objListaMenu.insertarNodoMenu("Geografia");
//SE INICIALIZA APUNTADOR DE CATEGORIA
auxiliarCategoria = objListaMenu.getInicio(); //SE POSICION EL APUNTADOR DE CATEGORIA EN EL PRIMER ELEMENTO DE LA LISTA
//SE INGRESAN DATOS DE LIBRO EN LA PRIMERA CATEGORIA
var libroDefault1 = ["mi titulo", "un autor", "1995", "pearson", "primera edicion", "mexico"];
var libroDefault2 = ["otro titulo", "segundo autor", "1995", "segunda editorial", "tercera edicion", "EUA"];
var libroDefault3 = ["otro tercer titulo", "tercer autor", "1995", "tercera editorial", "quinta edicion", "Canada"];
listaLibro1.insertarNodoLibro(auxiliarCategoria, listaLibro1, libroDefault1);
listaLibro1.insertarNodoLibro(auxiliarCategoria, listaLibro1, libroDefault2);
listaLibro1.insertarNodoLibro(auxiliarCategoria, listaLibro1, libroDefault3);
//SE INICIALIZA APUNTADOR DE LIBROS
auxiliarLibro = auxiliarCategoria.getAbajo();
//SE LLAMA AL METODO PARA MOSTRAR LA PRIMERA CATEGORIA
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
        auxiliarLibro = auxiliarCategoria.getAbajo();
        getInfoCategoria();
    }
}
function siguienteCategoria() {
    if (auxiliarCategoria.getSiguiente() != null) {
        auxiliarCategoria = auxiliarCategoria.getSiguiente();
        auxiliarLibro = auxiliarCategoria.getAbajo();
        getInfoCategoria();
    }
}
function registrarCategoria() {
    //RECOGER EL NOMBRE DE LA CATEGORIA 
    var nombre = document.getElementById("nombre").value.toString();
    objListaMenu.insertarNodoMenu(nombre);
    alert("La categoria se registro correctamente");
    document.getElementById("formCategoria").reset();
    if (auxiliarCategoria == null) {
        auxiliarCategoria = objListaMenu.getInicio();
    }
}
function registrarLibro() {
    var nombre = document.getElementById("titulo").value.toString();
    var autor = document.getElementById("autor").value.toString();
    var año = document.getElementById("año").value.toString();
    var editorial = document.getElementById("editorial").value.toString();
    var edicion = document.getElementById("edicion").value.toString();
    var pais = document.getElementById("pais").value.toString();
    var datos = [nombre, autor, año, editorial, edicion, pais];
    var objListaLibro;
    if (auxiliarCategoria.getLista() == null) {
        objListaLibro = new ListaLibro(); // SE CREA UN NUEVO OBJETO DE LISTA
    }
    else {
        objListaLibro = auxiliarCategoria.getLista(); //SE OBTIENE LA INSTANCIA ALMACENADA DE ESA LISTA
    }
    objListaLibro.insertarNodoLibro(auxiliarCategoria, objListaLibro, datos); //SE MANDAN A ALMACENAR LOS DATOS
    auxiliarLibro = objListaLibro.getInicio(); //SE SITUA EL APUNTADOR AL PRINCIPIO DE LA LISTA DE LIBROS
    document.getElementById("formLibro").reset();
    alert("El libro se registro correctamente");
}
function siguienteLibro() {
    if (auxiliarLibro.getSiguiente() != null) {
        auxiliarLibro = auxiliarLibro.getSiguiente();
        getInfoLibro();
    }
}
function anteriorLibro() {
    if (auxiliarLibro.getAnterior() != null) {
        auxiliarLibro = auxiliarLibro.getAnterior();
        getInfoLibro();
    }
}
function getInfoLibro() {
    mostrarSeccionIL();
    //COMPROBAR SI EXISTEN LIBROS REGISTRADOS
    if (auxiliarLibro == null) {
        //NO HAY LIBROS REGISTRADOS
        console.log("es null");
        var seccion = document.getElementById("datosLibro");
        seccion.innerHTML = "\n\t\t\t<p> No existen libros registrados</p>";
        document.getElementById("siguienteLibro").setAttribute("disabled", "true");
        document.getElementById("anteriorLibro").setAttribute("disabled", "true");
    }
    else {
        console.log("no es null");
        mostrarSeccionIL();
        var titulo = auxiliarLibro.getTitulo();
        var autor = auxiliarLibro.getAutor();
        var añoPublicacion = auxiliarLibro.getAñoPublicacion();
        var editorial = auxiliarLibro.getEditorial();
        var edicion = auxiliarLibro.getEdicion();
        var pais = auxiliarLibro.getPais();
        var seccion = document.getElementById("datosLibro");
        seccion.innerHTML = "\n\t\t\t<p>titulo: " + titulo + "<p>\n\t\t\t<p>autor: " + autor + "<p>\n\t\t\t<p>a\u00F1oPublicacion: " + añoPublicacion + "<p>\n\t\t\t<p>editorial: " + editorial + "<p>\n\t\t\t<p>edicion: " + edicion + "<p>\n\t\t\t<p>pais: " + pais + "<p>";
        document.getElementById("siguienteLibro").removeAttribute("disabled");
        document.getElementById("anteriorLibro").removeAttribute("disabled");
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
        auxiliarLibro = auxiliarCategoria.getAbajo(); //INICIALIZAR EL APUNTADOR DE LIBROS
        mostrarSeccionIC();
        //SE OBTIENEN LOS DATOS DE LA CATEGORIA
        var nombre = auxiliarCategoria.getNombre();
        var cantidad = auxiliarCategoria.getCantidad();
        document.getElementById("datosCategoria").innerHTML = "\t\n\t\t\t<p>" + nombre + "<p>\n\t\t\t<p>" + cantidad + " Libros registrados<p>";
        document.getElementById("verLibros").removeAttribute("disabled");
        document.getElementById("anteriorCategoria").removeAttribute("disabled");
        document.getElementById("siguienteCategoria").removeAttribute("disabled");
    }
}
