var objListaMenu : ListaMenu = new ListaMenu(); //OBJETO PARA ACCEDER A LOS METODOS DE LA CLASE LISTACATEGORIA
var objListaLibro : ListaLibro = new ListaLibro();

// objListaMenu.insertarNodoMenu("Matematicas");
// objListaMenu.insertarNodoMenu("Historia");
// objListaMenu.insertarNodoMenu("Geografia");

var auxiliarCategoria : Categoria; //APUNTADOR PARA RECORRER LOS NODOS CATEGORIA
var auxiliarLibro : Libro; //APUNTADOR PARA RECORRER LOS NODOS DE TIPO LIBRO

auxiliarCategoria = this.objListaMenu.getInicio(); //SE POSICION EL APUNTADOR DE CATEGORIA EN EL PRIMER ELEMENTO DE LA LISTA
	
getInfoCategoria();

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

function anteriorCategoria(){//CADA VEZ QUE SE 
	if(auxiliarCategoria.getAnterior()!=null){
		auxiliarCategoria = auxiliarCategoria.getAnterior();
		getInfoCategoria();
	}	
}

function siguienteCategoria(){
	if (auxiliarCategoria.getSiguiente()!=null){
		auxiliarCategoria = auxiliarCategoria.getSiguiente();
		getInfoCategoria();
	}
}

function registrarCategoria(){
	//RECOGER EL NOMBRE DE LA CATEGORIA 
	let nombre : string = (<HTMLInputElement> document.getElementById("nombre")).value.toString();
	objListaMenu.insertarNodoMenu(nombre);
	alert("La categoria se registro correctamente");
	document.getElementById("formCategoria").reset();

	if(auxiliarCategoria==null){
		auxiliarCategoria = objListaMenu.getInicio();
	}
}

function registrarLibro(){
	let nombre : string = (<HTMLInputElement> document.getElementById("nombre")).value.toString();
	let autor : string = (<HTMLInputElement> document.getElementById("autor")).value.toString();
	let año : string = (<HTMLInputElement> document.getElementById("año")).value.toString();
	let editorial : string = (<HTMLInputElement> document.getElementById("editorial")).value.toString();
	let edicion : string = (<HTMLInputElement> document.getElementById("edicion")).value.toString();
	let pais : string = (<HTMLInputElement> document.getElementById("pais")).value.toString();

	let datos : Array<string> = [nombre, autor, año, editorial, edicion, pais];
	
	objListaLibro.insertarNodoLibro(auxiliarCategoria,datos);

	document.getElementById("formLibro").reset();
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
	if(auxiliarCategoria==null){		
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
		auxiliarLibro = auxiliarCategoria.getAbajo();
		mostrarSeccionIC();
		let nombre = auxiliarCategoria.getNombre();
		let cantidad = auxiliarCategoria.getCantidad();

		document.getElementById("datosCategoria").innerHTML = `	
			<p>${nombre}<p>
			<p>${cantidad} Libros registrados<p>`;

		document.getElementById("verLibros").removeAttribute("disabled");
		document.getElementById("anteriorCategoria").removeAttribute("disabled");
		document.getElementById("siguienteCategoria").removeAttribute("disabled");
	}
	
}
