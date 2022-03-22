import Head from 'next/head';
import type { NextPage } from 'next';
import LinkCard from "../components/LinkCard";


// @ts-ignore 
export async function getServerSideProps(context){
    return {
        props : {
            upi_data : context.query,
        }
    }
}
// @ts-ignore

const PayPage : NextPage = ({upi_data})=>{
    const {upi_id , amount} = upi_data;
    return(
        <>
        <Head>
        <title>UPayI</title>
        <meta name="title" content="UPay" />
        <meta
          name="description"
          content={
            amount
              ? `${upi_id} is requesting you ₹${amount}`
              : `Generate shareable UPI payment links`
          }
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="UPayI" />
        <meta
          property="og:description"
          content={
            amount
              ? `${upi_id} is requesting ₹${amount}`
              : `Generate shareable UPI payment links`
          }
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="UPayI" />
        <meta
          property="twitter:description"
          content={
            amount
              ? `${upi_id} is requesting ₹${amount}`
              : `Generate shareable UPI payment links`
          }
        />
        <meta property="twitter:image" content="" />
      </Head>
      <div className="h-screen w-full content-center overflow-y-clip bg-gradient-to-r from-purple-400 to-yellow-400">
        <div className="py-14 px-2 sm:py-36">
          <LinkCard upi_data={upi_data} />
        </div>
      </div>
        
        </>
    )
}

export default PayPage;