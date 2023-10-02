import '@/styles/globals.css'

// NOTA: Este es el punto central de la aplicación, equivalente al app.js de una aplicación React.
//       Por lo tanto todas los componentes pasan por acá al momento de constuirsen haciendo que este
//       archivo sea super importante y no lo debemos borrar. Adicionalmente esto es muy util si queremos
//       poner un Context (Contexto) que sea disponible a lo largo de la aplicación para todos los componentes
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
