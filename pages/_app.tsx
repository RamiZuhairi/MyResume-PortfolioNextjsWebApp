import '../styles/globals.css'
import NavBar from '../components/NavBar'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
     <NavBar ></NavBar>
     <Component {...pageProps} />
    </>
   

  ) 
}
export default MyApp
