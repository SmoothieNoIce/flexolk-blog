import Layout, { siteTitle } from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import styled from '@emotion/styled'

const Img = styled.img(
  props => (
    {
      width: "100%",
      margin:"30px 0 30px 0"
    }
  ))


export default function Post({ postData }) {
  const title = `${postData.title_short} | ${siteTitle}`
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="og:title" content={title} key="title"/>
        <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${`@Flexolk`}&description=${`/posts/${postData.title_short}`}`}
        key="image"
        />
      </Head>
      <article>
        <Img src={postData.img}></Img>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
