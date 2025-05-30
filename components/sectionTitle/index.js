import React from 'react'

const SectionTitle = (
 {title,
 description,
 specialChar}
) => {
 return (
  <>
   <div className="mb-8">
    <div className="max-w-4xl text-center mx-auto [&_h2]:tracking-widest [&_h2]:relative [&_h2]:z-[2]">
     <h2><span className='relative z-[1] before:absolute before:-left-2 before:-top-0 before:size-12 before:rounded-full before:bg-primary/20 before:z-[-1]'>{specialChar}</span>{title}</h2>
     <p>{description}</p>
    </div>
   </div>
  </>
 )
}

export default SectionTitle;
