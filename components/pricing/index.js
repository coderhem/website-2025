import React from 'react'

const Pricing = (
 {
  plan,
  dollorIcon,
  price,
  time,
  featureItems,
  crossIcon,
  ctaText,
  ctaLink,
 }

) => {
 // if (!plan || !dollorIcon || !plan || !time || !crossIcon || !featureItems || !ctaLink || !ctaText) return null;
 return (
  <>
   <div className="bg-black border border-white rounded-xl text-center relative z-[1] clip-path after:absolute after:top-[2.87rem] after:-left-[1.263rem] after:w-8 after:h-8 after:bg-[url('../assets/images/polygon-icon.svg')] after:bg-no-repeat after:bg-contain after:rotate-[-5.6deg] after:z-[-2]">
    {plan && dollorIcon && price && time &&
     <div className="bg-primary px-6 rounded-tr-xl rounded-tl-xl py-6 text-white">
      {plan && <h2>{plan}</h2>}
      <h3 className='h1'><span className='text-base'>{dollorIcon}</span>{price}<span className='text-base'>{time}</span></h3>
     </div>}
    {featureItems &&
     <ul className="bg-black px-6 pt-14 text-start [&_li]:mb-3 [&_li]:font-medium [&_li]:relative [&_li]:pl-6 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-0 [&_li]:before:content-['\ea10'] [&_li]:before:font-icomoon [&_li.cross]:before:text-primary [&_li]:before:text-green-500 [&_li.cross]:before:text-sm [&_li.cross]:before:content-['\ea0f']">
      {featureItems?.map((item, index) => (
       <li key={index} className={!item.available ? 'cross' : ''}>
        {item.label}
       </li>
      ))}
     </ul>
    }
    {ctaLink && ctaText &&
     <div className="mt-16">
      <a href={ctaLink} className='btn btn-primary w-full rounded-bl-xl rounded-br-xl'>{ctaText}</a>
     </div>
    }
   </div >
  </>
 )
}

export default Pricing;
