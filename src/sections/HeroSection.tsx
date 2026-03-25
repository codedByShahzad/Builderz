import React from 'react'
import MovingEdge from '../components/MovingEdge'

const HeroSection = () => {
  return (
    <div className='relative overflow-hidden bg-[#f8f8f8] min-h-[80vh] flex items-center'>
      
      <MovingEdge
        imageSrc="/images/bartop.png"
        position="top"
        speed="normal"
        height={30}
      />
    </div>
  )
}

export default HeroSection