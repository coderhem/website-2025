import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="shadow-yellow-100/40 shadow-[10px_3px_40px_rgba(255,255,255,0.7)] bg-black py-10 md:py-14 lg:py-20 max-sm:pb-40">
        <div className="container">
          <div className="flex justify-between flex-wrap">
            <div className="max-w-md">
              <h2 className='h3'>Footer Logo</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa harum blanditiis necessitatibus unde quaerat quod, recusandae atque suscipit, incidunt dolorem nesciunt voluptatibus, culpa illum asperiores? Doloremque minus quae atque at.</p>
            </div>
            <div className="[&_h2]:uppercase">
              <h2 className='h4'>Links</h2>
              <ul className='[&_li]:mb-2'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="about">About Us</Link></li>
                <li><Link href="services">Services</Link></li>
                <li><Link href="pricing">Pricing</Link></li>
                <li><Link href="contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="[&_h2]:uppercase">
              <h2 className='h4'>Hours</h2>
              <ul className='[&_li]:mb-2'>
                <li>Sunday-Friday</li>
                <li>5:00 AM - 8:00 PM</li>
                <li>Staturday - <span className='text-primary'>Closed</span></li>
              </ul>
            </div>
            <div className="[&_h2]:uppercase">
              <h2 className='h4'>Location</h2>
              <ul className='[&_li]:mb-2'>
                <li>Lorem ipsum dolor sit amet, consectetur. <a href="#">Click for Map</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
