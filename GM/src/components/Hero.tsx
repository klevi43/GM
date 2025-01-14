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

          
          <img className='hero__image' 
          srcSet={`${images[0]} 768w, ${images[1]}, 1024w`}
          sizes='(min-width: 768px) 768px, (min-width: 1024px) 1024px' 
          alt="a person doing a pullup" />
        </div>
      </div>
      
    
    </>
    
  )
}

export default Hero