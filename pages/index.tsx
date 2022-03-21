import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import { ToastContainer, toast } from 'react-toastify';
import Card from '../components/Card';

const Home: NextPage = () => {
  

  
  return (
    <>
    <Head>
      <title>UpayI</title>
      <meta name = "title" content ="UpayI"/>
      <meta name = "description" content = "sharable links to payment"/>

      <meta property ="og:type" content = "website"/>
      <meta property = "og:url" content = ""/>
      <meta property = "og:title" content = "UpayI"/> 
      <meta property = "og:description" content = "Sharable Links to payment"/>

      <meta property = "og:image" content = ""/>

      <meta property = "twitter:card" content = "summary_large_image"/>
      <meta property = "twitter:url" content = ""/>
      <meta property = "twitter:title" content ="UpayI"/>

      <meta 
        property = "twitter:description"
        content = "Sharable links for UPI payment"/>

    </Head>
        <div className = "h-screen w-full content-center overflow-y-clip bg-gradient-to-r from-purple-400 to-yellow-400">
          <div className = "py-14 px-2 sm:py-36">
            <Card/>
          </div>
        </div>
    </>
  )
}
//bg-gradient-to-r from-purple-400 to-yellow-400
export default Home
