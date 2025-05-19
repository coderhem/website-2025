import Hero from '@/components/Hero';
import Head from 'next/head';
import React from 'react'

const page = () => {
  return (
    <div>
     <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Hero />
      <h3>This is Main</h3>
    </div>
  )
}

export default page;
