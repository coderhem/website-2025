import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-black py-10 md:py-14 lg:py-20 max-sm:pb-40">
        <div className="container">
          <div className="flex justify-between flex-wrap">
            <div className="max-w-md">
              <h2 className='h3'>Footer Logo</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa harum blanditiis necessitatibus unde quaerat quod, recusandae atque suscipit, incidunt dolorem nesciunt voluptatibus, culpa illum asperiores? Doloremque minus quae atque at.</p>
            </div>
            <div className="[&_h2]:uppercase">
              <h2 className='h4'>Links</h2>
              <ul className='[&_li]:mb-2'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact Us</a></li>
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
