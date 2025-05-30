import React from 'react'

const TestimonialCard = (
 {
  clientName,
  postName,
  feedbackDescription,
  clientImage,
  imgWidth,
  imgHeight,
  imgAlt,
  ctaLink,
  ctaText,
  target
 }
) => {
  if (!clientImage && !feedbackDescription && !clientName) return null;

 return (
  <>

   <div className="h-full group bg-white py-3 px-4 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] transition-all duration-300 [&_h2]:text-white text-dark rounded-2xl relative before:absolute before:-right-8 before:-bottom-20 before:bg-[url('../assets/images/clound-img.png')] before:opacity-[0.2] before:bg-contain before:bg-no-repeat overflow-hidden before:w-40 before:h-40">
    <div className="bg-black py-2 px-3 rounded-full [&_img]:w-24 [&_img]:h-24 [&_img]:rounded-full [&_img]:object-cover [&_img]:object-center [&_img]:border-primary [&_img]:border-2 flex justify-between items-center mb-4 group-hover:shadow-[0_0_20px_rgba(255,0,0,0.9)] transition-all duration-300">
     {clientImage &&
      <img
       src={clientImage?.src || clientImage}
       width={imgWidth}
       height={imgHeight}
       alt={imgAlt}
       loading='lazy'
      />}
     <div className="flex flex-col text-center [&_h2]:mb-0 text-primary">
      {clientName && <h2 className='h6'>{clientName}</h2>}
      {postName && <strong>{postName}</strong>}
     </div>
    </div>
    <div className="[&_div]:line-clamp-5 [&_div]:mb-2 [&_a]:underline hover:[&_a]:no-underline">
     {feedbackDescription && <div dangerouslySetInnerHTML={{ __html: feedbackDescription }} />}
     <a href={ctaLink} className='stretched-link' target={target}>{ctaText}</a>
    </div>
   </div>

  </>
 )
}

export default TestimonialCard;
