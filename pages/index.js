import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import PortFolioCard1 from '../components/card/portfolioCard1'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a Software Engineer, currently major in Computer Science And Engineering at NTOU, a back-end intern at 25sprout</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Skill</h2>
        <p>I'm currently using JavaScript、Emotion、Next.js、React、or Vue to build a modern interactive website.</p>
        <p>Also I'm using Django、Express、Spring、or Laravel to build backend servers.</p>
        <p>I have 3 years of experience developing android apps and 1 year of experience developing swiftUI apps.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Certificate</h2>
        <p>RHCSA 8</p>
        <p>TOEIC LR 820</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Portfolio</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title,img,brief_description }) => (
            <li className={utilStyles.listItem} key={id}>
              <PortFolioCard1
                img = {img}
                title={<Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>}
                content={<small className={utilStyles.lightText}>
                  {brief_description}
                </small>}></PortFolioCard1>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Contact me</h2>
        <p>aci5722@gmail.com</p>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
