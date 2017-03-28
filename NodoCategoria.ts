//NODO PARA LAS CATEGORIAS
class Categoria{

	//APUNTADORES DE TIPO CATEGORIA
	private siguiente : Categoria;
	private anterior : Categoria;

	//APUNTADOR DE TIPO NODO LIBRO
	private abajo : Libro;

	//APUNTADOR PARA LA LISTA DE LIBROS
	private lista : ListaLibro;

	//INFORMACION DEL NODO
	private nombre : string;
	private cantidad : number;

	constructor(){
		this.siguiente = null;
		this.anterior = null;
		this.abajo = null;
		this.lista = null;
		this.cantidad = 0;
	}

	//METODOS PARA INGRESAR Y OBTENER LA INFORMACION
	public setNombre(nombre : string):void {
		this.nombre = nombre;
	}

	public aumentarCantidad() : void{
		this.cantidad++;
	}

	public getNombre() : string {
		return this.nombre;
	}

	public getCantidad() : number {
		return this.cantidad;
	}

	//METODOS PARA GUARDAR Y OBTENER LOS APUNTADORES
	public setSiguiente(siguiente : Categoria) : void {
		this.siguiente = siguiente;
	}

	public setAnterior(anterior : Categoria) : void {
		this.anterior = anterior;
	}

	public setAbajo(abajo : Libro) : void {
		this.abajo = abajo;
	}

	public setLista(lista : ListaLibro) :void{
		this.lista = lista;
	}

	public getSiguiente() : Categoria {
		return this.siguiente;
	}

	public getAnterior() : Categoria {
		return this.anterior;
	}

	public getAbajo() : Libro {
		return this.abajo;
	}

	public getLista() : ListaLibro {
		return this.lista;
	}

}
