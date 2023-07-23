import React from 'react'
import { AiFillHeart } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="">
        <div className="flex flex-row items-center justify-center space-x-1">
          Made with <AiFillHeart className="mr-1 ml-1" /> by Tanya Piña
        </div>
      </div>
    </footer>
  )
}

export default Footer