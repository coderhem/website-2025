import React from 'react'
import SectionTitle from './sectionTitle';

const Hero = () => {
  return (
    <>
      <div className="bg-[url('../assets/images/hero-bg-image.webp')] bg-cover bg-center py-36 relative z-[1] before:absolute before:z-[-1] before:inset-0 before:bg-gradient-to-r from-black from-50% sm:from-40% via-black/80 md:via-slate-300/20 v to-transparent to-99% sm:to-90% ">
        <div className="container">
          <div className="max-w-[600px] [&_h1]:uppercase md:[&_h1]:leading-[77px] [&_h1]:text-primary [&_h1]:mb-5 max-sm:text-sm text-white/85">
            <h1>Challenge Your <span className='bg-white'>limits</span></h1>
            <p>Transform your body and mind with expert guidance and modern equipment.
              Achieve your goals with personalized workouts and proven techniques.
              Join a community that motivates, supports, and grows with you.
              Every rep brings you closer to a stronger, healthier you.</p>
            <ul className='[&_li]:relative  [&_li]:pl-7 [&_li]:before:absolute [&_li]:before:top-0 [&_li]:before:left-0 [&_li]:before:content-["\e908"] [&_li]:before:font-icomoon [&_li]:before:text-primary'>
              <li>Burn Fat & Build Muscle</li>
              <li>Boost Strength & Endurance</li>
              <li>Improve Focus & Mental Health</li>
              <li>Build Confidence & Discipline</li>
              <li>Strengthen Heart & Lungs</li>
            </ul>
            <div className="mt-8">
              <a href="#" className='btn btn-primary-100'>Join Now</a>
            </div>
          </div>
        </div>

      </div>
      {/* /Hero */}

    </>
  )
}

export default Hero;
