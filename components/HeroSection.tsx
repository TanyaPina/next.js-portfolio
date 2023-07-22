"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from "react-scroll/modules"

const HeroSection = () => {
  return (
    <section id="home">
      <div>
        <div>
          <Image className="rounded-full shadow-xl" src="/headshot.jpg" 
          alt="Headshot of Tanya, a Mexican-American person wearing a smile and a burgundy shirt." 
          width={300} 
          height={300}/>
        </div>
          <h1> Hi, I'm Tanya!</h1>
          <p>
            I'm a {" "}
            <span className="font-semibold text-teal-800 dark:text-teal-500">
            Full-Stack Software Engineer{" "}
            </span>
            based in sunny CA. I am passionate about creating inclusive 
            tech spaces that are by and for underrepresented communities.
          </p>
          <Link
          to="projects"
          className="text-neutral-50 dark:text-stone-900 font-semibold px-6 py-3 bg-teal-800 dark:bg-teal-500 rounded shadow hover:bg-teal-900 dark:hover:bg-teal-300" 
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          >
            Projects
          </Link>
        <div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection