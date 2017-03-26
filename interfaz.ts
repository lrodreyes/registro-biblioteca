var objListaCategoria : ListaMenu; //OBJETO PARA ACCEDER A LOS METODOS DE LA CLASE LISTACATEGORIA
objListaCategoria = new ListaMenu();

objListaCategoria.insertarNodoMenu("Matematicas");
objListaCategoria.insertarNodoMenu("Historia");
objListaCategoria.insertarNodoMenu("Geografia");

var auxiliarCategoria : Categoria; //APUNTADOR PARA RECORRER LOS NODOS CATEGORIA
var auxiliarLibro : Libro; //APUNTADOR PARA RECORRER LOS NODOS DE TIPO LIBRO


auxiliarCategoria = this.objListaCategoria.getInicio(); //SE POSICION EL APUNTADOR DE CATEGORIA EN EL PRIMER ELEMENTO DE LA LISTA
auxiliarLibro = auxiliarCategoria.getAbajo();

// auxiliarLibro.setTitulo("libro de matematicas");
// auxiliarLibro.setAutor("juan");
// auxiliarLibro.setAñoPublicacion("1995");
// auxiliarLibro.setEditorial("mi editorial");
// auxiliarLibro.setEdicion("segunda edicion");
// auxiliarLibro.setPais("Mexico");

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
	document.getElementById("datosCategoria").innerHTML = "<p> No hay categorias registradas </p>";

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
	objListaCategoria.insertarNodoMenu(nombre);
	alert("La categoria se registro correctamente");
	document.getElementById("nombre").value = "";
}

function agregarLibro(){

}

function getInfoLibro(){
	mostrarSeccionIL();

	//COMPROBAR SI EXISTEN LIBROS REGISTRADOS
	if(auxiliarLibro==null){
		//NO HAY LIBROS REGISTRADOS
		let seccion = document.getElementById("datosLibro");
		seccion.innerHTML=`
			<p> No existen libros registrados</p>`;
		document.getElementById("siguienteLibro").setAttribute("disabled","true");
		document.getElementById("anteriorLibro").setAttribute("disabled","true");

	}
	else{

		mostrarSeccionIL();
		let titulo = auxiliarLibro.getTitulo();
		let autor = auxiliarLibro.getAutor();
		let añoPublicacion = auxiliarLibro.getAñoPublicacion();
		let editorial = auxiliarLibro.getEditorial();
		let edicion = auxiliarLibro.getEdicion();
		let pais = auxiliarLibro.getPais();

		let seccion = document.getElementById("datosLibro");
		seccion.innerHTML= `
			<p>titulo: ${titulo}<p>
			<p>autor: ${autor}<p>
			<p>añoPublicacion: ${añoPublicacion}<p>
			<p>editorial: ${editorial}<p>
			<p>edicion: ${edicion}<p>
			<p>pais: ${pais}<p>`;
	}
}

function getInfoCategoria(){
	//LIMPIAR INPUT EN CASO DE QUE HAYA ESCRITO ALGO 
	document.getElementById("nombre").value="";
	mostrarSeccionIC();
	let nombre = auxiliarCategoria.getNombre();
	let cantidad = auxiliarCategoria.getCantidad();

	document.getElementById("datosCategoria").innerHTML = `	
		<p>${nombre}<p>
		<p>${cantidad} Libros registrados<p>`;
}
