var objListaMenu : ListaMenu = new ListaMenu(); //OBJETO PARA ACCEDER A LOS METODOS DE LA CLASE LISTACATEGORIA
let listaLibro1 : ListaLibro = new ListaLibro();

//SE INGRESAN DATOS DE CATEGORIAS
objListaMenu.insertarNodoMenu("Matematicas");
objListaMenu.insertarNodoMenu("Historia");
objListaMenu.insertarNodoMenu("Geografia");

//APUNTADORES
var auxiliarCategoria : Categoria; //APUNTADOR PARA RECORRER LOS NODOS CATEGORIA
var auxiliarLibro : Libro; //APUNTADOR PARA RECORRER LOS NODOS DE TIPO LIBRO

//SE INICIALIZA APUNTADOR DE CATEGORIA
auxiliarCategoria = objListaMenu.getInicio(); //SE POSICION EL APUNTADOR DE CATEGORIA EN EL PRIMER ELEMENTO DE LA LISTA

//SE INGRESAN DATOS DE LIBRO EN LA PRIMERA CATEGORIA
let libroDefault1: Array <string>=["mi titulo","un autor","1995","pearson","primera edicion","mexico"];
let libroDefault2: Array <string>=["otro titulo","segundo autor","1995","segunda editorial","tercera edicion","EUA"];
let libroDefault3: Array <string>=["otro tercer titulo","tercer autor","1995","tercera editorial","quinta edicion","Canada"];

listaLibro1.insertarNodoLibro(auxiliarCategoria,listaLibro1,libroDefault1);
listaLibro1.insertarNodoLibro(auxiliarCategoria,listaLibro1,libroDefault2);
listaLibro1.insertarNodoLibro(auxiliarCategoria,listaLibro1,libroDefault3);

//SE INICIALIZA APUNTADOR DE LIBROS
auxiliarLibro = auxiliarCategoria.getAbajo();


//SE LLAMA AL METODO PARA MOSTRAR LA PRIMERA CATEGORIA
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
	
	let objListaLibro: Lista;
	if(auxiliarCategoria.getLista()==null){//SI NO EXISTE UNA LISTA DE LIBROS CREADA EN ESA CATEGORIA
		objListaLibro = new Lista();
	}
	else{
		objListaLibro = auxiliarCategoria.getLista(); //SE OBTIENE LA INSTANCIA ALMACENADA DE ESA LISTA
	}

	objListaLibro.insertarNodoLibro(auxiliarCategoria, objListaLibro, datos); //SE MANDAN A ALMACENAR LOS DATOS
	auxiliarLibro = objListaLibro.getInicio();//SE SITUA EL APUNTADOR AL PRINCIPIO DE LA LISTA DE LIBROS
	document.getElementById("formLibro").reset();
	alert("El libro se registro correctamente");
}

function siguienteLibro(){
	if(auxiliarLibro.getSiguiente()!=null){
		auxiliarLibro = auxiliarLibro.getSiguiente();
		getInfoLibro();

	}
}

function anteriorLibro(){
	if(auxiliarLibro.getAnterior()!=null){
		auxiliarLibro = auxiliarLibro.getAnterior();
		getInfoLibro();
	}
}

function getInfoLibro(){
	mostrarSeccionIL();

	//COMPROBAR SI EXISTEN LIBROS REGISTRADOS
	if(auxiliarCategoria.getAbajo==null){
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

		document.getElementById("siguienteLibro").removeAttribute("disabled");
		document.getElementById("anteriorLibro").removeAttribute("disabled");
		
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
		auxiliarLibro = auxiliarCategoria.getAbajo(); //INICIALIZAR EL APUNTADOR DE LIBROS
		mostrarSeccionIC();
		//SE OBTIENEN LOS DATOS DE LA CATEGORIA
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
