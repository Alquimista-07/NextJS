import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

import {Navbar} from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - NextJS</title>
        <meta name="description" content="About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      
      <main className={`${styles.main} ${inter.className}`}>

        <h1>About Page</h1>
        
        <h1 className={styles.title}>
          {/* NOTA: Al algunas veces en donde necesitamos decirle a Next Hey sabes que Next necesito que hasta donde sea posible hagas un prefetch de la siguiente página que puede apuntar a una página en particular
                    y cuando el usuario vaya a esa página esta puede ser que ya este en memoria, por lo tanto automáticamente no se va a volver a cargar por lo tanto de forma automática se va a realizar la transasición
                    de forma instantanea y todo esto se hace con el NextLink y se usa llamando la etiqueta Link que se importa. Adicionalmente este prefetch lo podemos desactivar agregando la propieda prefetch={false}
                    ya que por defecto esta activado, o podemos mandar un objeto con argumentos para mandar otra información, otra opcion que tenemos es el replace, el cual especifica que se evite ir a la página anterior
                    dando en la flecha del navegador por ejemplo si el usuario ya paso por el login y se autentico ya no sería necesario regresar a él. Podemos revisar todo lo relacionado al Link y sus demás funciones en el sitio web oficial: 
          */}
          {/* Ir a <a href='/'>Home</a> */}
          Ir a <Link href='/'>Home</Link>
        </h1>

        <div className={`${styles.center} ${styles.description}`}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/about.jsx</code>
          </p>
        </div>

      </main>
    </>
  )
}
