import React from 'react'

const HeroBanner = (
 {
  heroTitle,
  pageName,
  linkText,
  pageLink,

 }
) => {
 return (
  <>
   <section className="pt-44 pb-11 bg-[url('../assets/images/hero-bg.jpg')] bg-cover bg-top relative z-[1] before:absolute before:inset-0 before:bg-gradient-to-bl from-primary/80 via-black/80 to-black/40 before:z-[-1]">
    {heroTitle && pageLink && linkText &&
     <div className="container text-center">
      <h1>{heroTitle}</h1>
      <strong className='text-white/90 flex items-center gap-2 justify-center'>{pageName} <i className="icon-arrow-right2"></i>
       <a href={pageLink}>{linkText}</a>
      </strong>
     </div>
    }
   </section >
  </>
 )
}

export default HeroBanner;
