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
      <img className={utilStyles.headingBackground} src="/images/bg.jpg"></img>
      <section className={utilStyles.headingMd}>
        <p>During my job experience, I had practical skills with interesting technologies, tasks, people. In the whole role of my engineering practice incude web development and experience on multiple platform software design.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Skill</h2>
        <p className={utilStyles.ArticleMd}>Backend development</p>
        <ul className={utilStyles.ArticleLi}>
          <li>PHP, Laravel Framework</li>
          <li>Python, Django Framework</li>
          <li>Golang, Gin Framework</li>
          <li>Java, Spring Framework</li>
          <li>Node.js, Express Framework</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>InfluxDB</li>
        </ul>
        <p className={utilStyles.ArticleMd}>Frontend development</p>
        <ul className={utilStyles.ArticleLi}>
          <li>HTML, CSS, Javascript</li>
          <li>React Framework</li>
          <li>Next.js Framework</li>
          <li>Vue Framework</li>
          <li>Android (Java, Kotlin)</li>
          <li>IOS SwiftUI</li>
        </ul>
        <p className={utilStyles.ArticleMd}>Server management</p>
        <ul className={utilStyles.ArticleLi}>
          <li>Linux</li>
          <li>Bash Script</li>
          <li>Docker</li>
        </ul>
        <p className={utilStyles.ArticleMd}>Other</p>
        <ul className={utilStyles.ArticleLi}>
          <li>Git</li>
          <li>Resolving technical issues</li>
          <li>Teamwork</li>
          <li>Communication skills</li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Degree</h2>
        <p className={utilStyles.ArticleMd}>2018-2022 B.S, Computer Science And Engineering</p>
        <p className={utilStyles.ArticleMd}>National Taiwan Ocean University</p>
        <ul className={utilStyles.ArticleLi}>
          <li>GPA 3.36</li>
          <li>Followed my passion in software engineering and cloud computing classes.</li>
          <li>Submitted capstone project to College Student Research Creativity Award.</li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Work Experience</h2>
        <ul>
          <li>
            <p className={utilStyles.ArticleMd}>Junior Backend Developer</p>
            <p className={utilStyles.ArticleMd}>25sprout</p>
            <p className={utilStyles.Article2Md}>2022/7 -</p>
            <p className={utilStyles.Article2Md}>Taipei City, Taiwan</p>
          </li>
          <li>
            <p className={utilStyles.ArticleMd}>Backend Developer Intern</p>
            <p className={utilStyles.ArticleMd}>25sprout</p>
            <p className={utilStyles.Article2Md}>2021/9 - 2022/6</p>
            <p className={utilStyles.Article2Md}>Taipei City, Taiwan</p>
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Certificate</h2>
        <p className={utilStyles.ArticleMd}>CPE Professional(4), 2022</p>
        <p className={utilStyles.ArticleMd}>RHCSA 8, 2020</p>
        <p className={utilStyles.ArticleMd}>TOEIC LR 820, 2019</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Portfolio</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, img, brief_description }) => (
            <li className={utilStyles.listItem} key={id}>
              <PortFolioCard1
                img={img}
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
        <h2 className={utilStyles.headingLg}>Contact Me</h2>
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
