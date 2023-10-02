import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

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
      
      <main className={`${styles.main} ${inter.className}`}>
        
        <h1 className={styles.title}>
          Ir a <a href='/'>Home</a>
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
