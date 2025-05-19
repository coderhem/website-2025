import Head from 'next/head';
import React from 'react'

const Header = () => {
  return (
    <section className='bg-black backdrop-blur-3xl py-7'>
      <div className="container absolute top-5 left-0 right-0 z-[2]">
        <div className="flex items-center text-white">
          <p>Welcome to iron GYM Fitness</p>

        </div>
      </div>
    </section>
  )
}

export default Header;
