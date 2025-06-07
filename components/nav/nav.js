'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const NavBar = () => {
  const navData = [
    { navText: 'Home', navLink: '/' },
    { navText: 'About Us', navLink: '/about' },
    { navText: 'Services', navLink: '/services' },
    { navText: 'Pricing', navLink: '/pricing' },
    { navText: 'Contact Us', navLink: '/contact' }
  ]
  const [isOpen, setisOpen] = useState(false);
  const hamBurger = () => {
    setisOpen(!isOpen)
  }
  const pathname = usePathname();
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
    <>
      <nav
        className={`max-lg:-mt-1 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-5 bg-gradient-to-b from-black from-75% via-transparent to-transparent md:bg-gradient-to-l md:from-black md:from-5% md:via-transparent md:to-transparent ${isHidden ? 'translate-y-0 opacity-100 shadow-lg backdrop-blur bg-black/80' : 'max-sm:translate-y-[160%] sm:translate-y-[130%] md:translate-y-full lg:translate-y-[60%]'}
  `}
      >
        <div className="container">
          <div className="flex justify-between items-center relative z-20">
            <div className="[&_a]:text-white">
              <Link href="/">
                <h4>Logo Here</h4>
              </Link>
            </div>
            <navbar className='nav flex items-center'>
              <ul className='flex gap-8 items-wrapper'>
                {navData.map((data, index) => {
                  const isActive =
                    pathname === data.navLink ||
                    (pathname.startsWith(data.navLink) && data.navLink !== '/');
                  return (
                    <li key={index} className='nav-item'>
                      <Link className={isActive ? "!text-primary before:!w-[80%]" : ""} href={data.navLink}>
                        {data.navText}
                      </Link>
                    </li>
                  )
                })}

              </ul>
              <button className="" onClick={hamBurger}>
                {isOpen ? (
                  <div className="hamBurger active">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                ) : (
                  <div className="hamBurger group">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
              </button>
            </navbar>
          </div>

          <div className={`lg:hidden bg-black py-10 px-5 absolute w-full h-svh inset-0 pt-24 z-10 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[-125%]'}`} >
            <div className="container">
              <ul className="flex flex-col gap-8 text-start">
                {navData.map((data, index) => {
                  const isActive =
                    pathname === data.navLink ||
                    (pathname.startsWith(data.navLink) && data.navLink !== '/');

                  return (
                    <li key={index} className='nav-item'>
                      <Link
                        href={data.navLink}
                        className={isActive ? '!text-primary before:!w-[80%]' : ''}
                        onClick={() => setisOpen(false)} // optional: close menu on click
                      >
                        {data.navText}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
