import Head from 'next/head'
import Image from 'next/image'
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
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <nav className={styles.nav}>
        <Link href="https://github.com/SmoothieNoIce"><a><p className={styles.url}>github</p></a></Link>
        <Link href="https://medium.com/@flexolk"><a><p className={styles.url}>blog</p></a></Link>
        <Link href="/"><a><p className={styles.url}>home</p></a></Link>

      </nav>

      <header className={styles.header}>
        <>
          <Link href="/"><a><h1 className={utilStyles.heading2Xl}>{name}</h1></a></Link>
        </> 
      </header>



      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
