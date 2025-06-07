import HeroBanner from '@/components/hero/index';
import React from 'react'

const ContactPage = () => {
 return (
  <>

   <HeroBanner
    heroTitle='Contact Us'
    pageName='Contact Us'
    linkText='Home'
    pageLink='/'
   />

   <section className="py-20 bg-black text-white">
    <div className="container mx-auto px-4">
     <h2 className="text-4xl font-bold text-center text-primary mb-12">Contact Information</h2>
     <div className="flex flex-wrap gap-8 justify-center">
      {/* Card 1 - Location */}
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 w-full sm:w-[300px] shadow-lg hover:shadow-primary transition-shadow duration-300">
       <div className="text-3xl mb-4 text-primary">📍</div>
       <h4 className="text-xl font-semibold mb-2">Our Location</h4>
       <p className="text-gray-400">
        123 Fitness Blvd,<br /> Flex City, USA 90000
       </p>
      </div>

      {/* Card 2 - Phone */}
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 w-full sm:w-[300px] shadow-lg hover:shadow-primary transition-shadow duration-300">
       <div className="text-3xl mb-4 text-primary">📞</div>
       <h4 className="text-xl font-semibold mb-2">Call Us</h4>
       <p className="text-gray-400">
        +1 (800) 456-7890<br /> +1 (800) 123-4567
       </p>
      </div>

      {/* Card 3 - Email */}
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 w-full sm:w-[300px] shadow-lg hover:shadow-primary transition-shadow duration-300">
       <div className="text-3xl mb-4 text-primary">📧</div>
       <h4 className="text-xl font-semibold mb-2">Email</h4>
       <p className="text-gray-400">
        support@yourgym.com<br /> info@yourgym.com
       </p>
      </div>

      {/* Card 4 - Hours */}
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 w-full sm:w-[300px] shadow-lg hover:shadow-primary transition-shadow duration-300">
       <div className="text-3xl mb-4 text-primary">⏰</div>
       <h4 className="text-xl font-semibold mb-2">Opening Hours</h4>
       <p className="text-gray-400">
        Mon - Sat: 6am – 10pm<br /> Sun: 8am – 8pm
       </p>
      </div>
     </div>
    </div>
    <div className="container flex justify-center my-14">
     {/* Contact Form */}
     <form className="w-full md:w-1/2 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 space-y-6 shadow-xl">
      <div>
       <label className="block text-sm font-semibold mb-1">Full Name</label>
       <input
        type="text"
        placeholder="John Doe"
        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
       />
      </div>
      <div>
       <label className="block text-sm font-semibold mb-1">Email</label>
       <input
        type="email"
        placeholder="john@example.com"
        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
       />
      </div>
      <div>
       <label className="block text-sm font-semibold mb-1">Message</label>
       <textarea
        rows="4"
        placeholder="Your message..."
        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
       ></textarea>
      </div>
      <a
       type="submit"
       className="w-full btn btn-primary"
      >
       Send Message
      </a>
     </form>
    </div>
   </section>
  </>
 )
}

export default ContactPage;
