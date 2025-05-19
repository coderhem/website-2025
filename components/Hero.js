import React from 'react'

const Hero = () => {
 return (
  <div className="bg-[url('../images/hero-bg-image.webp')] bg-cover bg-center py-20 md:py-24 lg:py-32 relative z-[1] before:absolute before:z-[-1] before:inset-0 before:bg-gradient-to-r from-black from-40% via-slate-300/20 v to-transparent to-90%">
   <div className="container">
    <div className="max-w-[600px] [&_h1]:uppercase [&_h1]:leading-[77px] [&_h1]:text-primary [&_h1]:mb-5">
     <h1>Challenge Your <span className='bg-white'>limits</span></h1>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque placeat, vel deleniti obcaecati excepturi illo modi doloribus minima fuga saepe ab consequuntur temporibus ducimus debitis provident, voluptas delectus architecto explicabo.</p>
     <ul className='[&_li]:relative  [&_li]:pl-5 [&_li]:before:absolute [&_li]:before:top-2 [&_li]:before:left-0 [&_li]:before:bg-primary [&_li]:before:size-2 [&_li]:before:rounded-full'>
      <li>Burn Fat & Build Muscle</li>
      <li>Boost Strength & Endurance</li>
      <li>Improve Focus & Mental Health</li>
       <li>Build Confidence & Discipline</li>
       <li>Strengthen Heart & Lungs</li>
     </ul>
     <div className="mt-8">
      <a href="#" className='btn btn-primary'>Join Now</a>
     </div>
    </div>
   </div>

  </div>
 )
}

export default Hero;
