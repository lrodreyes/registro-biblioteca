class Lista{

	private inicio : any;
	private fin : any;

	constructor(){
		this.inicio=null;
		this.fin=null;
	}

	public insertarNodo(nodo : any) : void{
		//COMPROBAR SI NO EXISTE NINGUN NODO CATEGORIA
		if (this.inicio== null && this.fin==null){ 

			//REFERENCIAR EL NODO POR LOS APUNTADORES DE INICIO Y FIN			
			this.inicio = nodo;
			this.fin = nodo;
		}
		else if (this.inicio!=null && this.fin!=null){
			//SI EXISTEN NODOS CATEGORIAS ENTONCES SE IRAN INSERTANDO AL FINAL
			this.fin.setSiguiente(nodo);//SE HACE QUE EL ULTIMO NODO DE LA LISTA APUNTE AL QUE SE ACABA DE CREAR
			nodo.setAnterior(this.fin);//EL NODO QUE SE ACABA DE CREAR APUNTA AL ANTERIOR 
			this.fin = nodo;//SE HACE QUE FIN APUNTE AL ULTIMO NODO CREADO

			//SE APUNTAN LOS EXTREMOS DE LA LISTA MUTUAMENTE
			this.fin.setSiguiente(this.inicio);
			this.inicio.setAnterior(this.fin);
		}
	}
	//RETORNA EL NODO APUNTADO POR INICIO
	public getInicio(){
		return this.inicio;
	}

	//RETORNA EL NODO APUNTADO POR FIN
	public getFin(){
		return this.fin;
	}
	
	public EliminarNodo(nodo : any) : void{

	}

}

class ListaMenu extends Lista{

	constructor(){
		super();
	}

	insertarNodoMenu(nombre : string){
		let nodo = new Categoria();
		nodo.setNombre(nombre)
		this.insertarNodo(nodo);
	}
}

class ListaLibro extends Lista{
	constructor(){
		super();
	}

	insertarNodoLibro(nodoCategoria : Categoria, datos : Array <string>) : void {
		let nodoLibro = new Libro();
		nodoLibro.setTitulo(datos[0]);
		nodoLibro.setAutor(datos[1]);
		nodoLibro.setAñoPublicacion(datos[2]);
		nodoLibro.setEditorial(datos[3]);
		nodoLibro.setEdicion(datos[4]);
		nodoLibro.setPais(datos[5]);

		if (nodoCategoria.getAbajo()==null){ //SI NO EXISTE ALGUN LIBRO REGISTRADO EN ESA CATEGORIA
			this.insertarNodo(nodoLibro);
			nodoCategoria.setAbajo(nodoLibro);
			nodoLibro.setMiCategoria(nodoCategoria);
		}
		else{//SI EXISTE SE AGREGAN LOS NODOS DE FORMA NORMAL
			this.insertarNodo(nodoLibro);
		}
	}
}