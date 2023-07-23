"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from "react-scroll/modules"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image className="rounded-full" src="/headshotteal.png"
            alt="Headshot of Tanya, a Mexican-American person wearing a smile and a burgundy shirt."
            width={300}
            height={300} />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl"> Hi, I'm Tanya!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I'm a {" "}
            <span className="font-semibold text-teal-800 dark:text-teal-500">
              Full-Stack Software Engineer{" "}
            </span>
            based in sunny CA. I am passionate about creating inclusive
            tech spaces that are by and for underrepresented communities.
          </p>
          <a href="/Tanya Pina Resume 23.pdf"
            target="_blank"
            className="text-neutral-50 dark:text-stone-900 font-semibold px-6 py-3 mr-2 bg-teal-800 dark:bg-teal-500 rounded shadow hover:bg-teal-900 dark:hover:bg-teal-300"
          >
            Resume</a>
          <Link
            to="projects"
            className="text-neutral-50 dark:text-stone-900 font-semibold px-6 py-3 bg-teal-800 dark:bg-teal-500 rounded shadow cursor-pointer hover:bg-teal-900 dark:hover:bg-teal-300"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection