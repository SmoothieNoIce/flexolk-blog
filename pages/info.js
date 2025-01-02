import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import PortFolioCard1 from '../components/card/portfolioCard1'

export default function Info({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
                <meta
                    name="description"
                    content="普洱自介"
                />
            </Head>
            <img className={utilStyles.headingBackground} src="/images/oc.png"></img>
            <section className={utilStyles.headingMd}>
                <h2>普洱自介</h2>
                <p>
                    嗨你好！我是普洱！(也可以叫我 Flex！)目前是研究生，專注於資安相關、網路、網頁等資訊領域。
                </p>
                <ul>
                    <li>興趣(我覺得我要多點興趣)：打遊戲、出毛、畫畫、寫程式</li>
                    <li>遊戲：絕區零、鬥陣、猛獸派對、皇室戰爭、PTCG、主機遊戲(Switch)、VR</li>
                </ul>


                <h3>連結</h3>
                <ul>
                    <li><Link href="https://www.facebook.com/flexolk.fn">Facebook(毛毛居多)</Link></li>
                    <li><Link href="https://x.com/SmoothieNoIce">X/Twitter(毛毛居多)</Link></li>
                    <li><Link href="https://www.plurk.com/flexolk">Plurk</Link></li>
                    <li><Link href="https://github.com/SmoothieNoIce">Github(程式)</Link></li>
                    <li><Link href="https://steamcommunity.com/id/SmoothieNoIce/">Steam(遊戲)</Link></li>
                </ul>

                <h3>主推毛毛們</h3>
                <ul>
                    <li><Link href="https://x.com/Kechisy">Sanu</Link></li>
                    <li><Link href="https://x.com/Hydreigon_owo">Kushamo</Link></li>
                    <li><Link href="https://x.com/josh911031">Arnold 阿諾</Link></li>
                    <li><Link href="https://x.com/Rikujyun">凜紅</Link></li>
                    <li><Link href="https://x.com/loynuwu">Loyn</Link></li>
                    <li><Link href="https://x.com/wade990047">龍沁</Link></li>
                    <li><Link href="https://x.com/AirouCat620">Airou</Link></li>
                </ul>

                <h3>自己的毛毛</h3>
                <p>目前有一套毛！裝師是<Link href="https://t.co/D5piYVgy1P">木有(獸喜鍋工作室)</Link></p>
                <img src="/images/photo/photo_2025-01-02_13-07-50.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText1}>りしれ供さ小</p>
                <p className={utilStyles.imgText2}>Photo by <Link href="https://x.com/MostFluffySean">sean</Link></p>
                <img src="/images/photo/photo_2025-01-02_13-07-51.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText1}>♫夢みた未来ってどんなだっけな？♫</p>
                <p className={utilStyles.imgText1}>曾經夢想的未來是什麼樣子的呢？ Hanaregumi - 深呼吸</p>
                <p className={utilStyles.imgText2}>Photo by <Link href="https://x.com/maxkirito_yxiao">啊雷</Link></p>

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
