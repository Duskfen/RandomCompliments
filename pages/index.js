import Head from 'next/head'

import Test from "./test"


export default function Home() {
   return (
      <>
         <Head>
            <title>A Compliment</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
               name="description"
               content="Because you deserve it. <3"
            />
         </Head>
         <Test />
      </>
   )
}
