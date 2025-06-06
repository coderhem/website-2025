'use client';
import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import NavBar from './nav/nav';
const Header = (
  {
    navText,
    navLink
  }
) => {

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsHidden(true);
      }
      else {
        setIsHidden(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='fixed top-0 left-0 right-0 z-10 max-md:text-center'>
      <div className={`bg-black py-4 md:py-3 transition-transform duration-500 ease-in-out ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="container">
          <div className="flex flex-wrap items-center justify-between text-white [&_p]:mb-0">
            <div className="w-full lg:w-1/2 font-semibold max-md:text-sm max-lg:text-center max-lg:mb-4">
              <p><a href="#" className='underline hover:no-underline'>Join Us +</a> Online & Get Upto <span className='text-primary'>30%!</span> OFF, Offer Ends Soon</p>
            </div>
            <div className="w-full lg:w-1/2 flex items-center flex-wrap gap-y-4 justify-center lg:justify-end">
              <div className="flex items-center relative group pr-4 text-sm">
                <i className="icon-location2 text-xl sm:text-lg sm:pr-2 group-hover:text-primary group-focus:text-primary transition-all duration-300 max-sm:bg-white max-sm:rounded-full max-sm:text-black max-sm:size-10 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:group-hover:bg-transparent max-sm:group-hover:text-white max-sm:group-focus:text-white max-sm:border max-sm:border-white"></i>
                <a href="#" className='stretched-link text-white group-hover:text-primary underline hover:no-underline'><span className='max-sm:hidden'>Kharibot Kathmandu, Nepal</span></a>
              </div>
              <div className="flex items-center relative group pr-4 text-sm">
                <i className="icon-mail text-xl sm:text-lg sm:pr-2 group-hover:text-primary group-focus:text-primary transition-all duration-300 max-sm:bg-white max-sm:rounded-full max-sm:text-black max-sm:size-10 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:group-hover:bg-transparent max-sm:group-hover:text-white max-sm:group-focus:text-white max-sm:border max-sm:border-white"></i>
                <a href="mailto:use@gmail.com" className='stretched-link text-white group-hover:text-primary underline hover:no-underline'><span className='max-sm:hidden'>use@gmail.com</span></a>
              </div>
              <div className="flex items-center relative group text-sm">
                <i className="icon-phone text-xl sm:text-lg sm:pr-2 group-hover:text-primary group-focus:text-primary transition-all duration-300 max-sm:bg-white max-sm:rounded-full max-sm:text-black max-sm:size-10 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:group-hover:bg-transparent max-sm:group-hover:text-white max-sm:group-focus:text-white max-sm:border max-sm:border-white"></i>
                <a href="tel:9865900739" className='stretched-link text-white group-hover:text-primary underline hover:no-underline'><span className='max-sm:hidden'>9865900739</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /Top Header */}
      <NavBar />

      <div className="flex gap-2 items-center fixed sm:top-1/2 sm:-translate-y-1/2 right-0 max-sm:bottom-0 max-sm:left-0">
        <ul className='flex sm:flex-col max-sm:w-full gap-4 max-sm:justify-center [&_li_a]:flex [&_li_a]:justify-center [&_li_a]:items-center [&_li_a]:size-9 [&_li_a]:rounded-full [&_li_a]:bg-transparent [&_li_a]:border [&_li_a]:border-white bg-black sm:pl-3 py-5 pr-2 sm:py-3 sm:rounded-tl-3xl sm:rounded-bl-3xl'>
          <li>
            <a href="#" className='hover:bg-white focus:bg-white text-white hover:text-black focus:text-black transition duration-300'>
              <i className="icon-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" className='hover:bg-white focus:bg-white text-white hover:text-black focus:text-black transition duration-300'>
              <i className="icon-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#" className='hover:bg-white focus:bg-white text-white hover:text-black focus:text-black transition duration-300'>
              <i className="icon-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#" className='hover:bg-white focus:bg-white text-white hover:text-black focus:text-black transition duration-300'>
              <i className="icon-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
      {/* /Side Social Links */}

    </header>
  )
}

export default Header;
