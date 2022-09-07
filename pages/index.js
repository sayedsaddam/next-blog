import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next JS blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name='keywords' content='nextjsblog, blog by saddam, build with next, next, nextjs, next framework' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src='custom.js' strategy='lazyOnload'></Script> */}
      <nav className={styles.mainnav}>
        <ul>
          <Link href="/"><li><a href="">Home</a></li></Link>
          <Link href="/about"><li><a href="">About</a></li></Link>
          <Link href="/blog"><li><a href="">Blog</a></li></Link>
          <Link href="/contact"><li><a href="">Contact</a></li></Link>
        </ul>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Stacklag
        </h1>

        <p className={styles.description}>
          A blog being built in NextJS
        </p>

        <div className="blogs">
          <h2>Popular blogs</h2>
          <div className="blogItem">
            <h3>How to learn Javascript in 2022</h3>
            <p>Some content for the blog built with Next JS.</p>
          </div>
          <div className="blogItem">
            <h3>How to learn Javascript in 2022</h3>
            <p>Some content for the blog built with Next JS.</p>
          </div>
          <div className="blogItem">
            <h3>How to learn Javascript in 2022</h3>
            <p>Some content for the blog built with Next JS.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
