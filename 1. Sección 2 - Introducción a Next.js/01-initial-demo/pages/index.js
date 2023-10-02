import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
// NOTA: Acá tenemos un functional component que no es más que es un simple componente de React, solo que hay ciertas 
//       diferencias con un componente tradicional en React. Primero es obligatorio que las páginas que se encuentran acá dentro del directorio pages sean la exportación por defecto (default). Otra cosa es que acá el functional 
//       componente principal lo llaman Home pero el archivo se llama index, pero para aclcarar es que no tiene relación el nombre del componente con el del archivo ya que el componente lo podemos llamar de cualquier forma y la app
//       va a seguir funcionando. Otra cosa es que la extensión del archivo es .js y en React estamos acostumbrados a que sea .jsx ya que el intelicence va a saber y dar las recomendaciones y características de React, y hacer este cambio 
//       no va a afectar en nada. Lo que si nos no va a funcionarnos especialmente todo lo que sea pages ya que ese directorio es como especial, es si llegamos a capitalizar el nombre del archivo por ejemplo el index.js cambiarlo a Index.js
//       ya que si estamos acostumbrados que en React los nombres de los archivos los definamos capitalizados ya que es una buena práctica pero si hacemos esto de capitalizar esto si va a romper la aplicación y su manejo es diferente en
//       next ya que los componentes o nuestras páginas que son simples componentes, en este caso functional components tienen que estar nombrados en minúscula, sin espacioes, podemos usar guiones bajos, guiones normales, pero lo importante es que
//       el nombre que le demos dentro de pages es el nombre del path que vamos a usar en la URL y esto es porque cuando navegamos a una página web el archivo que se va a servir primero siempre va a ser el index.html en minúscula ya que es como un
//       estándar para los servidores buscar y servir siempre ese primer archivo con dicho nombre, por lo tanto si lo cambiamos el servidor no lo va a encontrar asi lo llamemos igual pero capitalizado va a fallar ya que es key sensitive. Adicionalmente
//       si podríamos cambiarlo pero al navegar en la url tendríamos que especificar el nombre exácto por ejemplo http://localhost:3000/home lo que indicaría que el archivo ya no se llama index.js sino home.js o jsx y esto indica que como definamos los
//       nombres de los archivos va a ser como se definen los path y la navegación. Ya que next maneja el enrutamiento por directorios o basado en File System
export default function HomePage() {
  return (
    <>
      {/* EL Head como nos damos cuenta es un componente especial y propio de Next que le dice al mismo framework, Hey! la información que está aquí es información que debería estar en el head de la página literalmente en el head del html.
          Adicionalmente podemos tener múltiples Head y no necesariamente en el mismo componente los cuales añaden información adicional o otra información dependiendo de la página en donde me encuentre teniendo en cuenta que si dejamos
          por ejemplo el title en ambos lo que contenga el primero va a ser reescrito por lo tanto por eso se dice que sirve es para agregar información adicioanl. Adicionalmente para más información podemos ir a la web oficial y revisar
          la documentación.
      */}
      <Head>
        <title>Home - NextJS</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      
      <main className={`${styles.main} ${inter.className}`}>

        <h1>Home Page</h1>
        
        <h1 className={styles.title}>
          {/* NOTA: Al algunas veces en donde necesitamos decirle a Next Hey sabes que Next necesito que hasta donde sea posible hagas un prefetch de la siguiente página que puede apuntar a una página en particular
                    y cuando el usuario vaya a esa página esta puede ser que ya este en memoria, por lo tanto automáticamente no se va a volver a cargar por lo tanto de forma automática se va a realizar la transasición
                    de forma instantanea y todo esto se hace con el NextLink y se usa llamando la etiqueta Link que se importa. Adicionalmente este prefetch lo podemos desactivar agregando la propieda prefetch={false}
                    ya que por defecto esta activado, o podemos mandar un objeto con argumentos para mandar otra información, otra opcion que tenemos es el replace, el cual especifica que se evite ir a la página anterior
                    dando en la flecha del navegador por ejemplo si el usuario ya paso por el login y se autentico ya no sería necesario regresar a él. Podemos revisar todo lo relacionado al Link y sus demás funciones en el sitio web oficial: 
          */}
          {/* Ir a <a href='/about'>About</a> */}
          Ir a <Link href='/about'>About</Link>
        </h1>

        <div className={`${styles.center} ${styles.description}`}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
        </div>

      </main>
    </>
  )
}
