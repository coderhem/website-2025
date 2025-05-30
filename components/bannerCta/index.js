import React from 'react'

const BannerCta = (
  {
    title,
    infoText,
    description,
    ctaLink
  }
) => {
  return (
    <>
      <div className="bg-[url('../assets/images/discount-banner.jpg')] bg-cover py-14 rounded-3xl my-7 lg:my-10 px-7 relative z-[1] before:absolute before:rounded-3xl before:z-[-1] before:inset-0 before:bg-gradient-to-r from-black via-black/20 to-black after:absolute after:bg-[url('../assets/images/dots-bg.jpg')] after:left-0 after:top-0 after:bottom-0 after:right-1/2 after:z-[-2] after:bg-no-repeat after:bg-contain after:rounded-3xl">
        <div className="max-w-2xl text-white/90 [&_h2]:inline-block [&_h2]:mb-5 [&_h2]:relative [&_h2]:before:absolute [&_h2]:before:-bottom-1 [&_h2]:before:left-0 [&_h2]:before:bg-primary [&_h2]:before:w-1/2 [&_h2]:before:h-1 [&_h2]:before:rounded-tr-3xl [&_h2]:before:rounded-bl-3xl">
          <h2>{title} <span className='text-primary'> {infoText}</span></h2>
          <p>{description}</p>
          <div className="mt-8">
            <a href="#" className='btn btn-outline'>{ctaLink}</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default BannerCta;
