'use client';
import HeroBanner from '@/components/hero/index';
import Pricing from '@/components/pricing';
import SectionTitle from '@/components/sectionTitle';
import React from 'react'
import { Col, Row } from 'react-grid-system';

const pricingPlans = [
 {
  plan: 'Basic',
  dollorIcon: '$',
  price: '29',
  time: '/month',
  featureItems: [
   { label: 'Access to gym floor (cardio & weight training)', available: true },
   { label: 'Locker facility', available: true },
   { label: 'Free fitness consultation (1 session)', available: true },
   { label: 'Group fitness classes (Yoga, Zumba)', available: false },
   { label: 'Personal training (1 session/month)', available: false },
   { label: 'Sauna & steam room access', available: false },
   { label: 'Nutrition coaching', available: false }
  ],
  ctaText: 'Join Basic',
  ctaLink: '#'
 },
 {
  plan: 'Standard',
  dollorIcon: '$',
  price: '49',
  time: '/month',
  featureItems: [
   { label: 'Access to gym floor (cardio & weight training)', available: true },
   { label: 'Locker facility', available: true },
   { label: 'Free fitness consultation (2 sessions)', available: true },
   { label: 'Group fitness classes (Yoga, Zumba)', available: true },
   { label: 'Personal training (1 session/month)', available: true },
   { label: 'Sauna & steam room access', available: false },
   { label: 'Nutrition coaching', available: false }
  ],
  ctaText: 'Join Standard',
  ctaLink: '#'
 },
 {
  plan: 'Premium',
  dollorIcon: '$',
  price: '79',
  time: '/month',
  featureItems: [
   { label: 'Access to gym floor (cardio & weight training)', available: true },
   { label: 'Locker facility', available: true },
   { label: 'Free fitness consultation (unlimited)', available: true },
   { label: 'Group fitness classes (Yoga, Zumba, HIIT)', available: true },
   { label: 'Personal training (3 sessions/month)', available: true },
   { label: 'Sauna & steam room access', available: true },
   { label: 'Nutrition coaching', available: true }
  ],
  ctaText: 'Join Premium',
  ctaLink: '#'
 }
];

const PricingPage = () => {
 return (
  <>
   <HeroBanner
    heroTitle='Pricing'
    pageName='Pricing'
    pageLink='/'
    linkText='Home'
   />
   <section className='bg-black py-14 md:py-20 lg:py-24 relative z-[2]'>
    <div className="mb-20">
     <SectionTitle
      title="Membership Plans"
      description="Choose a plan that fits your goals. Whether you're just starting or already crushing your workouts — we've got you covered."
     />
    </div>
    <div className="container px-10">
     <Row className='xl:[&>*:nth-child(2)]:scale-110' gutterWidth={50} style={{ rowGap: '30px' }}>
      {pricingPlans.map((data, index) => {
       return (
        <Col md={6} xl={4} key={index}>
         <Pricing
          plan={data.plan}
          dollorIcon={data.dollorIcon}
          price={data.price}
          time={data.time}
          featureItems={data.featureItems}
          ctaLink={data.ctaLink}
          ctaText={data.ctaText}
          crossIcon={data.crossIcon}
         />
        </Col>
       )
      })}
     </Row>
    </div>
   </section>
  </>
 )
}

export default PricingPage;
