'use client';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Head from 'next/head';
import React from 'react';
import BannerCta from '@/components/bannerCta';
import ServiceCard from '@/components/cards/serviceCards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/sectionTitle';
import whyUsImage from '../assets/images/why-us-img-8.webp'
import whyUsImage2 from '../assets/images/why-us-img-2.webp'
import whyUsImage3 from '../assets/images/why-us-img-3.webp'
import whyUsImage5 from '../assets/images/why-us-img-5.webp'
import whyUsImage6 from '../assets/images/why-us-img-6.webp'
import whyUsImage7 from '../assets/images/why-us-img-7.webp'
import WhysUsCard from '@/components/whyUs';
import { Col, Row } from 'react-grid-system';
import userImg from '../assets/images/why-us-img-9.webp'
import TestimonialCard from '@/components/testimonialCard';
import CardTeam from '@/components/cards/cardTeam';
import Pricing from '@/components/pricing';

const serviceData = [
  {
    cardTitle: 'Strength Training',
    cardDescription: `<p>Build lean muscle with guided weight and resistance workouts.</p>`,
    cardIcon: 'icon-machine',
    cardLink: ''
  },
  {
    cardTitle: 'Cardio & HIIT',
    cardDescription: `<p>Burn fat fast with high-intensity interval and cardio sessions.</p>`,
    cardIcon: 'icon-men',
    cardLink: ''
  },

  {
    cardTitle: 'Yoga & Flexibility',
    cardDescription: 'Improve your flexibility and reduce stress through yoga sessions.',
    cardIcon: 'icon-foot',
    cardLink: ''
  },
  {
    cardTitle: 'Certified Trainers',
    cardDescription: 'Certified and experienced, our trainers provide personalized guidance to help you achieve your fitness goals.',
    cardIcon: 'icon-user',
    cardLink: ''
  },
  {
    cardTitle: 'State-of-the-art Equipment',
    cardDescription: 'Modern, high-quality machines and tools to enhance every workout session.',
    cardIcon: 'icon-dumble',
    cardLink: ''
  },
  {
    cardTitle: 'Personalized Diet Plans',
    cardDescription: 'Custom meal plans designed to complement your fitness goals and lifestyle.',
    cardIcon: ' icon-fire',
    cardLink: ''
  }


];

const whyUsData = [
  {
    title: 'Expertise You Can Trust',
    description: 'With a team of skilled professionals and years of industry experience, we bring knowledge, precision, and innovation to every project.',
    imgName: whyUsImage,
    imgWidth: 2308,
    imgHeight: 1723,
    imgAlt: "Expertise You Can Trust Featured Image",
    ctaLink: 'Join Us'
  },
  {
    title: 'Client-Centered Approach',
    description: 'Your goals are our priority. We take the time to understand your needs and deliver tailor-made solutions that exceed expectations.',
    imgName: whyUsImage2,
    imgWidth: 2308,
    imgHeight: 1723,
    imgAlt: "Client-Centered Approach Featured",
    ctaLink: 'Join Us'
  },
  {
    title: 'Quality Without Compromise',
    description: 'From planning to execution, we maintain the highest standards to ensure exceptional results every time.',
    imgName: whyUsImage3,
    imgWidth: 2308,
    imgHeight: 1723,
    imgAlt: "Quality Without Compromise Featured Image",
    ctaLink: 'Join Us'

  },
  {
    title: 'On-Time, Every Time',
    description: 'We respect your time and deadlines. Our streamlined processes and efficient project management keep everything on track.',
    imgName: whyUsImage5,
    imgWidth: 2308,
    imgHeight: 1723,
    imgAlt: "On-Time, Every Time Featured Image",
    ctaLink: 'Join Us'

  },
  {
    title: 'Transparent Communication',
    description: 'Stay informed every step of the way. We believe in open, honest, and responsive communication.',
    imgName: whyUsImage6,
    imgWidth: 2308,
    imgHeight: 1723,
    imgAlt: "Transparent Communication Featured Image",
    ctaLink: 'Join Us'

  },
  {
    title: 'Future-Ready Solutions',
    description: 'We build with the future in mind — scalable, flexible, and ready to grow with your business.',
    imgName: whyUsImage7,
    imgWidth: 2308,
    imgHeight: 1723,
    imgAlt: "Future-Ready Solutions Featured Image",
    ctaLink: 'Join Us'

  },
];

const testimonialData = [
  {
    clientName: 'John Doe',
    clientImage: userImg,
    postName: 'Trainer',
    feedbackDescription: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non ea consectetur perferendis quia impedit porro dolorem aspernatur laborum, adipisci est consequuntur assumenda nobis odio reiciendis accusantium quibusdam quo numquam?</p>`,
    ctaLink: '#',
    ctaText: 'View More'
  },
  {
    clientName: 'John Doe',
    clientImage: userImg,
    postName: 'Trainer',
    feedbackDescription: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non ea consectetur perferendis quia impedit porro dolorem aspernatur laborum, adipisci est consequuntur assumenda nobis odio reiciendis accusantium quibusdam quo numquam?</p>`,
    ctaLink: '#',
    ctaText: 'View More'
  },
  {
    clientName: 'Hem Raj Joshi',
    clientImage: userImg,
    postName: 'Developer',
    feedbackDescription: `<p>dolore fugit cumque esse, error similique reiciendis quaerat. Ratione, ea. Earum dignissimos autem labore voluptate!</p>`,
    ctaLink: 'https://joshihemraj.com.np',
    ctaText: 'View More',
    target: '_blank'
  },
  {
    clientName: 'Hem Raj Joshi',
    clientImage: userImg,
    postName: 'Developer',
    feedbackDescription: `<p>dolore fugit cumque esse, error similique reiciendis quaerat. Ratione, ea. Earum dignissimos autem labore voluptate!</p>`,
    ctaLink: 'https://joshihemraj.com.np',
    ctaText: 'View More',
    target: '_blank'
  },
  {
    clientName: 'Hem Raj Joshi',
    clientImage: userImg,
    postName: 'Developer',
    feedbackDescription: `<p>dolore fugit cumque esse, error similique reiciendis quaerat. Ratione, ea. Earum dignissimos autem labore voluptate!</p>`,
    ctaLink: 'https://joshihemraj.com.np',
    ctaText: 'View More',
    target: '_blank'
  },

]

const teamData = [
  {
    trainerImg: userImg,
    imgWidth: 300,
    imgHeight: 300,
    imgAlt: 'User Featured Image',
    trainerName: 'John Doe',
    postName: 'Trainer',
    bioDescription: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quos optio repellendus deserunt libero magnam quis ut eligendi impedit nobis aut eveniet non velit nisi, culpa sint est consectetur veritatis.',
    fbIconClass: 'icon-facebook',
    instaIconClass: 'icon-instagram',
    linkedInIconClass: 'icon-linkedin',
    ctaLink: 'Learn More'
  },
  {
    trainerImg: userImg,
    imgWidth: 300,
    imgHeight: 300,
    imgAlt: 'User Featured Image',
    trainerName: 'John Doe',
    postName: 'Trainer',
    bioDescription: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quos optio repellendus deserunt libero magnam quis ut eligendi impedit nobis aut eveniet non velit nisi, culpa sint est consectetur veritatis.',
    fbIconClass: 'icon-facebook',
    instaIconClass: 'icon-instagram',
    linkedInIconClass: 'icon-linkedin',
    ctaLink: 'Learn More'
  },
  {
    trainerImg: userImg,
    imgWidth: 300,
    imgHeight: 300,
    imgAlt: 'User Featured Image',
    trainerName: 'John Doe',
    postName: 'Trainer',
    bioDescription: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quos optio repellendus deserunt libero magnam quis ut eligendi impedit nobis aut eveniet non velit nisi, culpa sint est consectetur veritatis.',
    fbIconClass: 'icon-facebook',
    instaIconClass: 'icon-instagram',
    linkedInIconClass: 'icon-linkedin',
    ctaLink: 'Learn More'
  },
  {
    trainerImg: userImg,
    imgWidth: 300,
    imgHeight: 300,
    imgAlt: 'User Featured Image',
    trainerName: 'John Doe',
    postName: 'Trainer',
    bioDescription: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quos optio repellendus deserunt libero magnam quis ut eligendi impedit nobis aut eveniet non velit nisi, culpa sint est consectetur veritatis.',
    fbIconClass: 'icon-facebook',
    instaIconClass: 'icon-instagram',
    linkedInIconClass: 'icon-linkedin',
    ctaLink: 'Learn More'
  },
  {
    trainerImg: userImg,
    imgWidth: 300,
    imgHeight: 300,
    imgAlt: 'User Featured Image',
    trainerName: 'John Doe',
    postName: 'Trainer',
    bioDescription: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quos optio repellendus deserunt libero magnam quis ut eligendi impedit nobis aut eveniet non velit nisi, culpa sint est consectetur veritatis.',
    fbIconClass: 'icon-facebook',
    instaIconClass: 'icon-instagram',
    linkedInIconClass: 'icon-linkedin',
    ctaLink: 'Learn More'
  },
]

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

const page = () => {
  return (
    <div>
      <Head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet"></link>

        {/* Font Awesome CSS */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" integrity="sha512-..." crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <Hero />

      <section className="overflow-hidden py-12 md:py-16 lg:py-20 bg-gradient-to-t from-black to-black text-white relative z-[1] before:absolute before:-right-14 before:top-0 before:bg-primary before:size-40 before:z-[-1] before:rounded-full before:blur-[180px]">
        <div className="container">
          <SectionTitle
            title="elcome"
            specialChar="W"
            description="Welcome to [Your Gym Name], your ultimate destination for achieving fitness goals. Located in the heart of [City], we offer a motivating and supportive environment for beginners and pros alike. Whether you're here to lose weight, gain muscle, or maintain a healthy lifestyle — we've got your back."
          />
          <div className="flex flex-wrap gap-y-10 pt-7 -mx-5">
            {serviceData.map((serviceData, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-5" >
                <ServiceCard {...serviceData} />
              </div>
            ))}
          </div>
        </div>
      </section >
      {/* /Services */}

      <section className='mb-10'>
        <div className="container">
          <BannerCta
            title="Limited Time Offer! Get"
            infoText="30% OFF"
            description="Start your fitness journey with expert trainers, top-notch equipment, and a supportive community.
⏳ Hurry, this exclusive deal won’t last long – join now and save big!"
            ctaLink="Join Now"

          />
        </div>
      </section>
      {/* /Discount Banner */}

      <section className='bg-black py-10 md:py-14 lg:py-20'>
        <div className="container">
          <div className="stroke [&_h2_span]:top-4">
            <SectionTitle
              title="Why Choose Us"
              description="Here’s a compelling Why Choose Us section content for your gym website: Why Choose Us At [Your Gym Name], we go beyond workouts — we create a fitness experience. From certified trainers and modern equipment to personalized plans and a friendly atmosphere, everything is designed to help you succeed. Whether you're just starting or leveling up, we’re here to support every step of your journey. Join us and feel the difference!"
            />
            <Row justify='center'>
              {whyUsData.map((whydata, index) => {
                return (
                  <Col md={6} xl={4} key={index} className='mb-10'>
                    <WhysUsCard
                      title={whydata.title}
                      description={whydata.description}
                      imgName={whydata.imgName}
                      imgWidth={whydata.imgWidth}
                      imgHeight={whydata.imgHeight}
                      imgAlt={whydata.imgAlt}
                      ctaLink={whydata.ctaLink}
                    />
                  </Col>
                );
              })}

              <Col sm={12} className='text-center pt-10'>
                <a href="#" className='btn btn-outline'>View More</a>
              </Col>

            </Row>
          </div>
        </div>
      </section>
      {/* Why Us */}

      <section className='py-10 md:py-14 lg:py-20 bg-black'>
        <div className="container">
          <SectionTitle
            title="Our Team"
            description="Here’s a compelling Why Choose Us section content for your gym website: Why Choose Us At [Your Gym Name], we go beyond workouts — we create a fitness experience. From certified trainers and modern equipment to personalized plans and a friendly atmosphere, everything is designed to help you succeed. Whether you're just starting or leveling up, we’re here to support every step of your journey. Join us and feel the difference!"
          />
          <Row style={{ rowGap: '30px' }}>
            {teamData.map((data, index) => {
              return (
                <Col md={6} lg={4} key={index}>
                  <CardTeam
                    trainerImg={data.trainerImg}
                    trainerName={data.trainerName}
                    postName={data.postName}
                    imgWidth={data.imgWidth}
                    imgHeight={data.imgHeight}
                    imgAlt={data.imgAlt}
                    fbIconClass={data.fbIconClass}
                    instaIconClass={data.instaIconClass}
                    linkedInIconClass={data.linkedInIconClass}
                    bioDescription={data.bioDescription}
                    ctaLink={data.ctaLink}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
      {/* /Card Team */}

      <section className='bg-black py-14 md:py-20 lg:py-24 relative z-[2]'>
        <div className="container">
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

      <section className='py-14 md:py-20 lg:py-24 bg-black/80'>
        <div className="container">
          <SectionTitle
            title="What Our Clients Say"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non ea consectetur perferendis quia impedit porro dolorem aspernatur laborum, adipisci est consequuntur assumenda nobis odio reiciendis accusantium quibusdam quo numquam?"
          />
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {testimonialData.map((testimonialData, index) => {
              return (
                <SwiperSlide lg={3} key={index} className='!h-auto'>
                  <TestimonialCard {...testimonialData} />
                </SwiperSlide>
              )
            })}
          </Swiper>

        </div>
      </section>
      {/* /Section Testiminials */}

    </div >
  )
}

export default page;
