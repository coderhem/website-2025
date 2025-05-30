import React from 'react'

const CardTeam = (
  {
    trainerImg,
    imgWidth,
    imgHeight,
    imgAlt,
    trainerName,
    postName,
    fbIconClass,
    instaIconClass,
    linkedInIconClass,
    bioDescription,
    ctaLink

  }

) => {
  if (!trainerImg && !trainerName && !postName && !bioDescription && !ctaLink) return null;
  return (
    <>
      <div className="relative z-[2] bg-primary rounded-tl-xl rounded-tr-xl [&_img]:w-48 [&_img]:h-48 [&_img]:object-cover [&_img]:object-center [&_img]:rounded-full [&_img]:-mb-14 [&_img]:border-4 [&_img]:bg-white [&_img]:p-[4px] [&_img]:border-primary pt-6 flex justify-center items-center">
        {trainerImg &&
          <img
            src={trainerImg?.src || trainerImg}
            width={imgWidth}
            height={imgHeight}
            alt={imgAlt}
            loading='lazy' />
        }
      </div>

      <div className="pt-16 pb-6 px-8 bg-white shadow-2xl text-dark text-center [&_h2]:text-primary rounded-bl-xl rounded-br-xl [&_h2]:mb-0 relative z-[1]">
        {trainerName && <h2 className="h3">{trainerName}</h2>}
        {postName && <span className='inline-block mb-1 font-semibold'>{postName}</span>}
        {bioDescription && <p>{bioDescription}<a href="#"> {ctaLink} </a></p>}
        {fbIconClass && linkedInIconClass && instaIconClass &&
          <ul className='relative before:absolute before:bg-dark/20 before:w-4/12 before:h-[1px] before:top-1/2 before:right-0 before:-translate-y-1/2 before:z-[-1] after:absolute after:bg-dark/20 after:w-4/12 after:h-[1px] after:top-1/2 after:left-0 after:-translate-y-1/2 after:z-[-1] mt-6 flex gap-4 justify-center [&_li_a]:size-8 [&_li_a]:flex [&_li_a]:justify-center [&_li_a]:items-center 
            [&_li_a]:border [&_li_a]:border-dark/80 [&_li_a]:bg-white [&_li_a]:rounded-full [&_li_a]:relative [&_li_a]:transition-all [&_li_a]:duration-300'>
            <li>
              <a href="#" className='text-dark/80 stretched-link transition-all duration-300 hover:text-white hover:bg-primary hover:border-primary'><i className={fbIconClass}></i>
              </a>
            </li>
            <li>
              <a href="#" className='text-dark/80 stretched-link transition-all duration-300 hover:text-white hover:bg-primary hover:border-primary'><i className={instaIconClass}></i>
              </a>
            </li>
            <li>
              <a href="#" className='text-dark/80 stretched-link transition-all duration-300 hover:text-white hover:bg-primary hover:border-primary'><i className={linkedInIconClass}></i>
              </a>
            </li>
          </ul>
        }
      </div>
    </>
  )
}

export default CardTeam;
