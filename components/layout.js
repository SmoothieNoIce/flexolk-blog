import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Flexolk'
export const siteTitle = 'Flexolk'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Flexolk's personal website"
        />
        <meta
          name="og:description"
          content="Flexolk's personal website"
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${`@Flexolk`}&description=${`/home`}`}
          key="image"
        />
        <meta name="og:title" content={siteTitle} key="title"/>
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <nav className={styles.nav}>
        <Link href="/commissions"><p className={styles.url}>commissions</p></Link>
        <Link href="/info"><p className={styles.url}>info</p></Link>
        <Link href="https://github.com/SmoothieNoIce" rel="noopener noreferrer" target="_blank"><p className={styles.url}>github</p></Link>
        <Link href="https://blog.flexolk.me" rel="noopener noreferrer" target="_blank"><p className={styles.url}>blog</p></Link>
        <Link href="/"><p className={styles.url}>home</p></Link>
        
      </nav>

      <header className={styles.header}>
        <>
          <Link href="/"><h1 className={utilStyles.heading2Xl}>{name}</h1></Link>
        </> 
      </header>



      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            ← Back to home
          </Link>
        </div>
      )}
    </div>
  )
}
