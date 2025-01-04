import '../styles/global.css'
import { GoogleTagManager } from '@next/third-parties/google'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="G-PGZRZ606MH" />
    </>
  )
}
