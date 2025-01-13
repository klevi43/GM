import React from 'react'

interface Props {
  images: string[];
}
const Hero = ({images}: Props) => {
  return (
    <>
      <div className='hero'><header className='hero__header'><h2 className='heading'>Track Your Progress.<br/>See Results.</h2>
        <p className='subheading'>Creating the best version of yourself starts today.</p>
        <a className='btn btn--primary' href='#'>Get Started</a></header>
        <div className='image__container'>

          <picture>
            <source media=''srcSet={images[0]} />
          </picture>
          <img className='hero__image' src={images[1]} alt="a person doing a pullup" />
        </div>
      </div>
      
    
    </>
    
  )
}

export default Hero