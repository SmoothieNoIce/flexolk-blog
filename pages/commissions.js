import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import PortFolioCard1 from '../components/card/portfolioCard1'

export default function Commissions({ allPostsData }) {
    const title = `Commissions | ${siteTitle}`
    return (
        <Layout home>
            <Head>
                <title>{title}</title>
                <meta name="og:title" content={title} key="title"/>
                <meta
                property="og:image"
                content={`${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${`@Flexolk`}&description=${`/commissions`}`}
                key="image"
                />
            </Head>
            <img className={utilStyles.headingBackground} src="/images/oc.png"></img>
            <section className={utilStyles.headingMd}>
                <h2>普洱的委託</h2>
                <p>
                    這邊放置我的一些委託~
                </p>
                <br></br>

                <h2>設定</h2>

                <p>
                    設定: 藍藍灰灰狐狐
                </p>

                <img className={utilStyles.commision_img} src="/images/commissions/fu_15.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>飯友 By <Link href="https://x.com/monufun_f">ふー</Link></p>
                <p className={utilStyles.imgText4}>2025/01/04 <Link href="https://x.com/monufun_f/status/1775598335161970886">link</Link></p>

                <img className={utilStyles.commision_img} src="/images/commissions/lanlan_youwu_1.png" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>名牌 By <Link href="https://www.facebook.com/profile.php?id=100021853863367">英文好爛悠無君</Link></p>
                <p className={utilStyles.imgText4}>2023/08/10 <Link href="https://www.facebook.com/permalink.php?story_fbid=pfbid0Vzn7bbNMXc6TdLocLLfYJCjCyYdmvvzt78ERgRmXabajHswPqQzNX7BwpT9VoFJil&id=100021853863367">link</Link></p>

                <img className={utilStyles.commision_img} src="/images/commissions/ref.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>設定圖 By <Link href="https://x.com/lyf_31">tea</Link></p>
                <p className={utilStyles.imgText4}>2022/10/29</p>
                
                <h2>贈圖</h2>

                <p>
                    謝謝大家的贈圖！
                </p>

                <img className={utilStyles.commision_img} src="/images/commissions/ysu_1.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>笨笨 By <Link href="https://www.facebook.com/profile.php?id=100004859077724">阿諾</Link></p>
                <p className={utilStyles.imgText4}>2024/10/20</p>

                <img className={utilStyles.commision_img} src="/images/commissions/rappy_5.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>Hi By <Link href="https://x.com/rappy325">Rappy</Link></p>
                <p className={utilStyles.imgText4}></p>

                <img className={utilStyles.commision_img} src="/images/commissions/rappy_4.png" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>打打 By <Link href="https://x.com/rappy325">Rappy</Link></p>
                <p className={utilStyles.imgText4}></p>

                <img className={utilStyles.commision_img} src="/images/commissions/rappy_3.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>睡覺 By <Link href="https://x.com/rappy325">Rappy</Link></p>
                <p className={utilStyles.imgText4}></p>

                <img className={utilStyles.commision_img} src="/images/commissions/rappy_2.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>吞吞 By <Link href="https://x.com/rappy325">Rappy</Link></p>

                <img className={utilStyles.commision_img} src="/images/commissions/rappy_1.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>By <Link href="https://x.com/rappy325">Rappy</Link></p>
                <p className={utilStyles.imgText4}></p>

                <img className={utilStyles.commision_img} src="/images/commissions/fg_tail_1.PNG" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>網路拓樸 By <Link href="https://x.com/FGTail075">鬆尾</Link></p>
                <p className={utilStyles.imgText4}></p>

                <img className={utilStyles.commision_img} src="/images/commissions/woofwolf.png" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>兄弟 By <Link href="https://www.facebook.com/profile.php?id=100080198721688">愛貓</Link></p>

                <h2>委託</h2> 

                <img className={utilStyles.commision_img} src="/images/commissions/lanlan_youwu_2.png" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>長香菇 By <Link href="https://www.facebook.com/profile.php?id=100021853863367">英文好爛悠無君</Link></p>
                <p className={utilStyles.imgText4}>2025/01/04 <Link href="https://www.facebook.com/flexolk.fn/posts/pfbid02i4NpwRfMPhbMz5NiWc9hmAMyj2LrUaHNm59DE9udioxJUHS1CCF6zaFsjRhTYXsbl">link</Link></p>

                <img className={utilStyles.commision_img} src="/images/commissions/faier_2.png" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>大亨堡 By <Link href="https://x.com/RA_FAIER">音川菲爾</Link></p>
                <p className={utilStyles.imgText4}>2024/10/26</p>

                <img className={utilStyles.commision_img} src="/images/commissions/faier_1.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>被大亨堡 By <Link href="https://x.com/RA_FAIER">音川菲爾</Link></p>
                <p className={utilStyles.imgText4}>2024/10/26</p>

                <img className={utilStyles.commision_img} src="/images/commissions/noshi_3.png" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>uw&lt;  By <Link href="https://x.com/nyano52">noshi</Link></p>
                <p className={utilStyles.imgText4}>2024/01/27</p>

                <img className={utilStyles.commision_img} src="/images/commissions/noshi_2.png" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>拍拍 By <Link href="https://x.com/nyano52">noshi</Link></p>
                <p className={utilStyles.imgText4}>2024/01/27</p>

                <img className={utilStyles.commision_img} src="/images/commissions/noshi_1.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>普洱昏昏 By <Link href="https://x.com/nyano52">noshi</Link></p>
                <p className={utilStyles.imgText4}>2024/01/27 <Link href="https://x.com/nyano52/status/1751217342577844530">link</Link></p>

                <img className={utilStyles.commision_img} src="/images/commissions/yuxiao.png" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>愛貓 普洱 By <Link href="https://www.facebook.com/yuxiao8787">郁咲</Link></p>
                <p className={utilStyles.imgText4}>2023/12/24 <Link href="https://www.facebook.com/photo.php?fbid=371565075526780&set=pb.100080198721688.-2207520000&type=3">link</Link></p>

                <img className={utilStyles.commision_img} src="/images/commissions/idk_1.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>圍巾藏了東西 By 大陸繪師</p>
                <p className={utilStyles.imgText4}>2023/11/04</p>

                <img className={utilStyles.commision_img} src="/images/commissions/moustachesan.png" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>胖胖 By  <Link href="https://www.facebook.com/profile.php?id=100024995226364">鬍子桑</Link></p>
                <p className={utilStyles.imgText4}>2023/05/09 <Link href="https://www.facebook.com/photo.php?fbid=1368959127280582&set=pb.100024995226364.-2207520000&type=3">link</Link></p>

                <h2>Skeb</h2>

                <img className={utilStyles.commision_img} src="/images/commissions/fu_11.gif" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>拍怪圖 By <Link href="https://x.com/monufun_f">ふー</Link></p>
                <p className={utilStyles.imgText4}>2024/05/12 <Link href="https://skeb.jp/@monufun_f/works/78">link</Link></p>

                <img className={utilStyles.commision_img} src="/images/commissions/fu_14.png" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>結帳怪圖 By <Link href="https://x.com/monufun_f">ふー</Link></p>
                <p className={utilStyles.imgText4}>2024/01/18 <Link href="https://skeb.jp/@monufun_f/works/65">link</Link></p>

                <img className={utilStyles.commision_img} src="/images/commissions/fu_12.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>普洱昏倒 By <Link href="https://x.com/monufun_f">ふー</Link></p>
                <p className={utilStyles.imgText4}>2024/01/06 <Link href="https://skeb.jp/@monufun_f/works/59">link</Link></p>

                <img className={utilStyles.commision_img} src="/images/commissions/fu_10.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>(普洱 庫家莫 sanu flani 大豆) 冒險 By <Link href="https://x.com/monufun_f">ふー</Link></p>
                <p className={utilStyles.imgText4}>2024/01/03 <Link href="https://skeb.jp/@monufun_f/works/52">link</Link></p>
                
                <img className={utilStyles.commision_img} src="/images/commissions/fu_8.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>(普洱 庫家莫 sanu) 吃吃 By <Link href="https://x.com/monufun_f">ふー</Link></p>
                <p className={utilStyles.imgText4}>2023/08/12 <Link href="https://skeb.jp/@monufun_f/works/46">link</Link></p>

                <img className={utilStyles.commision_img} src="/images/commissions/fu_9.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>吃庫加莫 By <Link href="https://x.com/monufun_f">ふー</Link></p>
                <p className={utilStyles.imgText4}>2023/08/12 <Link href="https://skeb.jp/@monufun_f/works/44">link</Link></p>

                <img className={utilStyles.commision_img} src="/images/commissions/fu_7.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>(普洱 庫家莫 sanu) 趴趴哭哭 By <Link href="https://x.com/monufun_f">ふー</Link></p>
                <p className={utilStyles.imgText4}>2023/08/12 <Link href="https://skeb.jp/@monufun_f/works/38">link</Link></p>

                <img src="/images/commissions/komepan_pan_1.WEBP" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>大佬膜拜 By <Link href="https://x.com/Komepan_pan">こがねぱん</Link></p>
                <p className={utilStyles.imgText4}>2023/07/15 <Link href="https://skeb.jp/@Komepan_pan/works/12">link</Link></p>

                <img className={utilStyles.commision_img} src="/images/commissions/komepan_pan_2.WEBP" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>和遊馬抱抱 By <Link href="https://x.com/Komepan_pan">こがねぱん</Link></p>
                <p className={utilStyles.imgText4}>2023/05/24 <Link href="https://skeb.jp/@Komepan_pan/works/9">link</Link></p>

                <img className={utilStyles.commision_img} src="/images/commissions/fu_6.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>(普洱 Tamu Sanu) 問號 By <Link href="https://x.com/monufun_f">ふー</Link></p>
                <p className={utilStyles.imgText4}>2023/05/14 <Link href="https://skeb.jp/@monufun_f/works/35">link</Link></p>

                <img className={utilStyles.commision_img} src="/images/commissions/fu_5.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>和庫家莫抱抱 By <Link href="https://x.com/monufun_f">ふー</Link></p>
                <p className={utilStyles.imgText4}>2023/05/14 <Link href="https://skeb.jp/@monufun_f/works/34">link</Link></p>

                <img className={utilStyles.commision_img} src="/images/commissions/fu_4.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>和sanu的普洱問號-2 By <Link href="https://x.com/monufun_f">ふー</Link></p>
                <p className={utilStyles.imgText4}>2023/03/11 <Link href="https://skeb.jp/@monufun_f/works/30">link</Link></p>

                <img className={utilStyles.commision_img} src="/images/commissions/fu_3.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>和sanu的普洱問號 By <Link href="https://x.com/monufun_f">ふー</Link></p>
                <p className={utilStyles.imgText4}>2023/03/10 <Link href="https://skeb.jp/@monufun_f/works/26">link</Link></p>

                <img className={utilStyles.commision_img} src="/images/commissions/fu_2.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>專注普洱 By <Link href="https://x.com/monufun_f">ふー</Link></p>
                <p className={utilStyles.imgText4}>2023/02/28 <Link href="https://skeb.jp/@monufun_f/works/23">link</Link></p>

                <img className={utilStyles.commision_img} src="/images/commissions/fu_1.jpg" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>害羞普洱 By <Link href="https://x.com/monufun_f">ふー</Link></p>
                <p className={utilStyles.imgText4}>2023/01/24 <Link href="https://skeb.jp/@monufun_f/works/20">link</Link></p>

                <h2>自己畫的</h2> 

                <img className={utilStyles.commision_img}  src="/images/commissions/flex_1.png" alt="Picture of the author" />
                <p className={utilStyles.imgText3}>驚訝普洱</p>


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
