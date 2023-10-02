// NOTA: OJO recordemos que dentro de pages no podemos colocar componentes ya que dicho directorio es precisamente para eso para poner
//       páginas o vistas que se van a mostar por lo tanto los componentes los tenemos que separar, debido a que si lo creamos dentro
//       pages lo tomaría como una página a la cual podríamos navegar a través de la URL.
//       Por lo tanto al separalo ya le estamos diciendo que esto es un componente y adicionalmente podemos aplicar las buenas prácticas
//       de react como por ejemplo es que el nombre del componente este capitalizado y con la extensión jsx. Y para crearlo podemos usar
//       el snipet rafc que tenemos instalado y esto nos va a crear el código base automáticamente y sobre el cual colocaríamos todo lo
//       demás.

export const Navbar = () => {
  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
};