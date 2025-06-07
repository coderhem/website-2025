'use clients';
import Hero from '@/components/Hero';
import HeroBanner from '@/components/hero/index';
import React from 'react'

const About = () => {
  return (
    <>
      <HeroBanner
        heroTitle='About Us'
        pageName='About Us'
        pageLink='/'
        linkText='Home'
      />
      <div className="bg-black text-white">
        {/* Mission and Vision */}
        <section className="py-16 px-6">
          <div className="container">
            <div className="justify-center flex flex-wrap -mx-10">
              <div className='w-full md:w-1/2 text-center px-10'>
                <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
                <p>
                  To design and deliver scalable, intuitive solutions that solve real-world problems. We focus on performance, simplicity, and user-first design.
                </p>
                <div className="mt-8">
                  <a href="/team" className='btn btn-primary'>Learn More</a>
                </div>
              </div>
              <div className='w-full md:w-1/2 text-center px-10'>
                <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
                <p>
                  To become a global leader in digital transformation by blending innovation, design, and code.
                </p>
                <div className="mt-8">
                  <a href="/team" className='btn btn-outline'>Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-zinc-900 py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-10">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black border border-zinc-700 rounded-xl p-6 shadow-md shadow-primary/20 duration-300 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-white mb-2">Personal Training</h3>
                <p>
                  Get one-on-one coaching from certified trainers who create personalized workout and nutrition plans tailored to your goals—whether it’s weight loss, muscle gain, or overall fitness.
                </p>
              </div>
              <div className="bg-black border border-zinc-700 rounded-xl p-6 shadow-md shadow-primary/20 duration-300 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-white mb-2">Group Fitness Classes</h3>
                <p>
                  Join our high-energy group classes including Zumba, HIIT, Yoga, Pilates, Spinning, and more. Stay motivated and have fun while working out in a supportive community.                </p>
              </div>
              <div className="bg-black border border-zinc-700 rounded-xl p-6 shadow-md shadow-primary/20 duration-300 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-white mb-2">Strength & Conditioning</h3>
                <p>
                  Build your strength and improve endurance with our state-of-the-art free weights, resistance machines, and functional training zones. Suitable for all levels.                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Let’s Build Together</h2>
          <p className="text-white/80 mb-6">
            We’re ready to help you turn your ideas into real products. Let’s create something meaningful.
          </p>
          <a
            href="/contact"
            className="btn btn-primary"
          >
            Contact Us
          </a>
        </section>
      </div>
    </>
  )
}

export default About;
