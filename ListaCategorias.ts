class Lista{

	private inicio : any;
	private fin : any;

	public insertarNodo(nombre : string, nodo : any) : void{
		//SE LE PASA EL NOMBRE DE LA CATEGORIA
		nodo.setNombre(nombre);
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

	//METODO PARA MANEJAR EL RECORRIDO ENTRE LOS NODOS

	//RETORNA EL NODO APUNTADO POR INICIO
	public getInicio(){
		return this.inicio;
	}

	//RETORNA EL NODO APUNTADO POR FIN
	public getFin(){
		return this.fin;
	}
	
	public EliminarCategoria(obj : Categoria) : void{

	}

}

class ListaMenu extends Lista{

	constructor(){
		super();
	}

	insertarNodoMenu(nombre : string){
		let objNodo = new Categoria();
		this.insertarNodo(nombre,objNodo);
	}
}

class ListaLibro extends Lista{
	constructor(){
		super();
	}

	// insertarNodoLibro(nombre : string){
	// 	let objNodo
	// }
}