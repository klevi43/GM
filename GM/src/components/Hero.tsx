import React from 'react'

interface Props {
  image: string;
}
const Hero = ({image}: Props) => {
  return (
    <>
      <div className='hero'><header className='hero__header'><h2 className='heading'>Track Your Progress.<br/>See Results.</h2>
      <p className='subheading'>Creating the best version of yourself starts today.</p>
      <a className='btn btn--primary'>Get Started</a></header>
      <div className='image__container'><img className='hero__image'src={image} alt="a person doing a pullup" /></div></div>
      
    
    </>
    
  )
}

export default Hero