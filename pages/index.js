import Head from 'next/head'

import Test from "./test"


export default function Home() {
   return (
      <>
      <Head>
        <title>Hetzi Liebe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Test />
   </>
  )
}
