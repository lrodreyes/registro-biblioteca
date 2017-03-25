var objListaCategoria : ListaCategorias; //OBJETO PARA ACCEDER A LOS METODOS DE LA CLASE LISTACATEGORIA
objListaCategoria = new ListaCategorias();

objListaCategoria.insertarCategoria("Matematicas");
objListaCategoria.insertarCategoria("Historia");
objListaCategoria.insertarCategoria("Geografia");

var auxiliarCategoria : Categoria; //APUNTADOR PARA RECORRER LOS NODOS CATEGORIA
var auxiliarLibro : Libro; //APUNTADOR PARA RECORRER LOS NODOS DE TIPO LIBRO


auxiliarCategoria = this.objListaCategoria.getInicio(); //SE POSICION EL APUNTADOR DE CATEGORIA EN EL PRIMER ELEMENTO DE LA LISTA

function mostrarSeccionIC(){
	document.getElementById("seccionAgregarCategoria").setAttribute("hidden","true");
	document.getElementById("seccionInformacionLibro").setAttribute("hidden","true");
	document.getElementById("seccionAgregarLibro").setAttribute("hidden","true");
	document.getElementById("seccionInformacionCategoria").removeAttribute("hidden");
}

function mostrarSeccionIL(){
	document.getElementById("seccionAgregarCategoria").setAttribute("hidden","true");
	document.getElementById("seccionInformacionLibro").removeAttribute("hidden");
	document.getElementById("seccionAgregarLibro").setAttribute("hidden","true");
	document.getElementById("seccionInformacionCategoria").setAttribute("hidden","true");
}

function mostrarSeccionAC(){
	document.getElementById("seccionAgregarCategoria").removeAttribute("hidden");
	document.getElementById("seccionInformacionLibro").setAttribute("hidden","true");
	document.getElementById("seccionAgregarLibro").setAttribute("hidden","true");
	document.getElementById("seccionInformacionCategoria").setAttribute("hidden","true");
}

function mostrarSeccionAL(){
	document.getElementById("seccionAgregarCategoria").setAttribute("hidden","true");
	document.getElementById("seccionInformacionLibro").setAttribute("hidden","true");
	document.getElementById("seccionAgregarLibro").removeAttribute("hidden");
	document.getElementById("seccionInformacionCategoria").setAttribute("hidden","true");
}


//SE VERIFICA SI EXISTEN CATEGORIAS CREADAS
if(auxiliarCategoria==null){
//EN CASO DE NO HABER NINGUNA CATEGORIA
	
	//MOSTRAR SOLO LA SECCION DE INFORMACION DE CATEGORIAS
	mostrarSeccionIC();
	//INSERTARLE EL MENSAJE DE QUE NO HAY NADA PARA MOSTRAR
	document.getElementById("datosCategoria").innerHTML = "No hay categorias disponibles <br> Porfavor ingresa una categoria";

	//DESABILITAR BOTONOES
	document.getElementById("verLibros").setAttribute("disabled","true");
	document.getElementById("anteriorCategoria").setAttribute("disabled","true");
	document.getElementById("siguienteCategoria").setAttribute("disabled","true");

}
else{
	//EN CASO DE SI HABERLAS ENTONCES SE MUESTRA LA INFORMACION DE LA PRIMERA
	mostrarSeccionIC();
	getInfoCategoria();
}

function anteriorCategoria(){//CADA VEZ QUE SE 
	auxiliarCategoria = auxiliarCategoria.getAnterior();
	getInfoCategoria();
}

function siguienteCategoria(){
	auxiliarCategoria = auxiliarCategoria.getSiguiente();
	getInfoCategoria();
}

function registrarCategoria(){
	//RECOGER EL NOMBRE DE LA CATEGORIA 
	let nombre : string = (<HTMLInputElement> document.getElementById("nombre")).value.toString();
	objListaCategoria.insertarCategoria(nombre);
	alert("La categoria se registro correctamente");
	document.getElementById("nombre").value = "";
}

function agregarLibro(){

}

function getInfoLibro(){
	mostrarSeccionIL();
	
}

function getInfoCategoria(){
	mostrarSeccionIC();
	let nombre = auxiliarCategoria.getNombre();
	let cantidad = auxiliarCategoria.getCantidad();

	document.getElementById("datosCategoria").innerHTML = `	
		<p>${nombre}<p>
		<p>${cantidad} Libros registrados<p>`;
}
