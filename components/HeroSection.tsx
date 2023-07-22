import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section id="home">
      <div>
        <div>
          <Image src="/headshot.jpg" 
          alt="Headshot of Tanya, a Mexican-American person wearing a smile and a burgundy shirt." 
          width={300} 
          height={300}/>
        </div>
        <div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection