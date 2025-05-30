import React from 'react'

const ServiceCard = (
 {
  cardTitle,
  cardDescription,
  cardIcon,
  cardLink
 }
) => {
 return (
  <div className="h-full before:animate-ping before:duration-700 after:animate-ping bg-black rounded-tr-3xl rounded-bl-3xl py-7 px-6 text-white shadow-[0_0_40px_0_rgb(255,0,0,0.8)] shadow-primary/20 lg:max-w-max relative before:absolute before:w-1 before:h-24 before:bottom-0 before:top-16 before:translate-y-[20%] before:right-0 before:bg-gradient-to-b before:from-primary before:via-transparent before:to-sky-500 before:z-[1] before:rounded-xl after:absolute after:bottom-0 after:top-16 after:translate-y-[20%] after:left-0 after:w-1 after:h-24 after:bg-gradient-to-t from-primary via-transparent to-sky-500 after:z-[1] after:rounded-xl hover:shadow-[0_0_25px_0_rgb(255,0,0,0.5)] transition-all duration-500">
   <div className="[&_i]:text-4xl bg-primary/80 text-white p-4 flex justify-center items-center rounded-full size-16 mb-5">
    <i className={cardIcon}></i>
   </div>
   <div className="lg:max-w-96">
    <h2 className='h4'>{cardTitle}</h2>
    <div dangerouslySetInnerHTML={{ __html: cardDescription }} />
    <a href="#" className='stretched-link'>{cardLink}</a>
   </div>
  </div>
 )
}

export default ServiceCard;
