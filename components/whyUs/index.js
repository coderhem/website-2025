import React from 'react';

const WhysUsCard = (
 {
  imgName,
  imgWidth,
  imgHeight,
  imgAlt,
  title,
  description,
  ctaLink
 },
) => {

 if (!imgName && !description && !title) return null;

 return (
  <div className="group bg-white text-black shadow-[0_0_40px_0_rgb(255,0,0,0.8)] shadow-primary/20 relative h-full flex flex-col justify-between">
   {imgName &&
    <div className="relative before:absolute before:inset-0 before:bg-gradient-to-l before:from-primary/30 before:from-5% via-transparent via-100% before:to-transparent to-100% group-hover:blur-[2px] transition-all duration-300 [&_img]:max-h-[235px] [&_img]:object-cover [&_img]:object-top-center">
     <img
      src={imgName?.src || imgName}
      width={imgWidth}
      height={imgHeight}
      alt={imgAlt}
      loading='lazy'
     />
    </div>
   }
   <div className="px-6 py-5 [&_h2]:text-primary">
    {title && <h3 className='h4'>{title}</h3>}
    {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
   </div>
   {ctaLink && <a href="#" className='btn btn-primary w-full stretched-link flex justify-end'>{ctaLink}</a>}
  </div>
 );
}

export default WhysUsCard
