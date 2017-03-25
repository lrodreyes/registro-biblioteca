class ListaCategorias{

	private inicio : Categoria;
	private fin : Categoria;

	constructor(){
		this.inicio = null;
		this.fin = null;
	}

	public insertarCategoria(nombre : string) : void{

		//COMPROBAR SI NO EXISTE NINGUN NODO CATEGORIA
		if (this.inicio== null && this.fin==null){ 

			//CREAR UN NUEVO NODO CATEGORIA, REFERENCIADO POR LOS APUNTADORES DE INICIO Y FIN
			let objCategoria = new Categoria();
			objCategoria.setNombre(nombre); //SE LE MANDA EL NOMBRE
			this.inicio = objCategoria;
			this.fin = objCategoria;
		}
		else if (this.inicio!=null && this.fin!=null){
			//SI EXISTEN NODOS CATEGORIAS ENTONCES SE IRAN INSERTANDO AL FINAL
			let objCategoria = new Categoria();
			objCategoria.setNombre(nombre);

			this.fin.setSiguiente(objCategoria);//SE HACE QUE EL ULTIMO NODO DE LA LISTA APUNTE AL QUE SE ACABA DE CREAR
			objCategoria.setAnterior(this.fin);//EL NODO QUE SE ACABA DE CREAR APUNTA AL ANTERIOR 
			this.fin = objCategoria;//SE HACE QUE FIN APUNTE AL ULTIMO NODO CREADO

			//SE APUNTAN LOS EXTREMOS DE LA LISTA MUTUAMENTE
			this.fin.setSiguiente(this.inicio);
			this.inicio.setAnterior(this.fin);
		}
	}

	//METODO PARA MANEJAR EL RECORRIDO ENTRE LOS NODOS
	public getPosicion(){
		
	}

	public getInicio(){
		return this.inicio;
	}

	public getFin(){
		return this.fin;
	}
	
	public EliminarCategoria(obj : Categoria) : void{

	}

}