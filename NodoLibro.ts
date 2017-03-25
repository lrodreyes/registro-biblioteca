//NODO PARA LOS LIBROS
class Libro{

	//APUNTADORES DE TIPO LIBRO
	private siguiente : Libro;
	private anterior;

	//INFORMACION
	private titulo : string;
	private autor : string;
	private añoPublicacion: string;
	private editorial : string;
	private edicion : string;
	private pais : string;

	constructor (){
		anterior : Libro;
		this.siguiente = null;
		this.anterior = null;
	}

	public setTitulo(titulo : string) : void {
		this.titulo = titulo;
	}

	public setAutor(autor : string) : void {
		this.autor = autor;
	}

	public setAñoPublicacion(añoPublicacion : string) : void {
		this.añoPublicacion = añoPublicacion;
	}

	public setEditorial(editorial : string) : void {
		this.editorial = editorial;
	}

	public setEdicion(edicion : string) : void {
		this.edicion = edicion;
	}

	public setPais(pais : string) : void {
		this.pais = pais;
	}

	public getTitulo() : string {
		return this.titulo;
	}

	public getAutor() : string {
		return this.autor;
	}

	public getAñoPublicacion() : string {
		return this.añoPublicacion;
	}

	public getEditorial() : string {
		return this.editorial;
	}

	public getEdicion() : string {
		return this.edicion;
	}

	public getPais() : string {
		return this.pais;
	}
}