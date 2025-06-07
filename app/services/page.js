import HeroBanner from '@/components/hero/index';
import React from 'react'

const ServicePage = () => {
 return (
  <>
   <HeroBanner
    heroTitle='Services'
    linkText='Home'
    pageLink='/'
    pageName='Services'
   />
   <section className="py-20 bg-black text-white">
    <div className="container mx-auto px-4">
     <h2 className="text-4xl font-bold text-primary text-center mb-6">Our Services</h2>
     <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
      Whether youre looking to get stronger, leaner, or just feel better, our wide range of expert services are designed to help you achieve your personal fitness goals.
     </p>

     <div className="flex flex-wrap justify-center gap-10">
      {/* Service Card 1 */}
      <div className="flex-1 min-w-[280px] max-w-[340px] bg-gradient-to-b from-black via-zinc-900 to-zinc-800 p-6 rounded-2xl border border-primary shadow-lg hover:scale-105 transition-transform duration-300">
       <h3 className="text-2xl font-bold text-primary mb-3">🏋️‍♂️ Personal Training</h3>
       <p className="text-gray-300">
        Get personalized training programs from certified professionals tailored to your body type, lifestyle, and goals.
       </p>
      </div>

      {/* Service Card 2 */}
      <div className="flex-1 min-w-[280px] max-w-[340px] bg-gradient-to-b from-black via-zinc-900 to-zinc-800 p-6 rounded-2xl border border-primary shadow-lg hover:scale-105 transition-transform duration-300">
       <h3 className="text-2xl font-bold text-primary mb-3">🔥 HIIT & Group Classes</h3>
       <p className="text-gray-300">
        Join high-energy classes like HIIT, Zumba, CrossFit, and more. Perfect for motivation and community support.
       </p>
      </div>

      {/* Service Card 3 */}
      <div className="flex-1 min-w-[280px] max-w-[340px] bg-gradient-to-b from-black via-zinc-900 to-zinc-800 p-6 rounded-2xl border border-primary shadow-lg hover:scale-105 transition-transform duration-300">
       <h3 className="text-2xl font-bold text-primary mb-3">🏃‍♂️ Cardio Training</h3>
       <p className="text-gray-300">
        Burn calories and boost stamina using our top-tier treadmills, elliptical machines, and spin bikes.
       </p>
      </div>

      {/* Service Card 4 */}
      <div className="flex-1 min-w-[280px] max-w-[340px] bg-gradient-to-b from-black via-zinc-900 to-zinc-800 p-6 rounded-2xl border border-primary shadow-lg hover:scale-105 transition-transform duration-300">
       <h3 className="text-2xl font-bold text-primary mb-3">💪 Strength Zone</h3>
       <p className="text-gray-300">
        Access free weights, resistance machines, and Olympic-grade equipment to sculpt your ideal physique.
       </p>
      </div>

      {/* Service Card 5 */}
      <div className="flex-1 min-w-[280px] max-w-[340px] bg-gradient-to-b from-black via-zinc-900 to-zinc-800 p-6 rounded-2xl border border-primary shadow-lg hover:scale-105 transition-transform duration-300">
       <h3 className="text-2xl font-bold text-primary mb-3">🥗 Nutrition Coaching</h3>
       <p className="text-gray-300">
        Get custom meal plans, body assessments, and guidance from certified nutritionists to fuel your progress.
       </p>
      </div>

      {/* Service Card 6 */}
      <div className="flex-1 min-w-[280px] max-w-[340px] bg-gradient-to-b from-black via-zinc-900 to-zinc-800 p-6 rounded-2xl border border-primary shadow-lg hover:scale-105 transition-transform duration-300">
       <h3 className="text-2xl font-bold text-primary mb-3">🧘 Wellness & Recovery</h3>
       <p className="text-gray-300">
        Recharge with massage therapy, sauna sessions, and guided stretching routines to prevent injuries.
       </p>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default ServicePage;
