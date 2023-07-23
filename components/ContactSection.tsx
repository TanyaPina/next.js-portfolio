import React from 'react'
import {
    AiOutlineMail,
    AiOutlineLinkedin,
    AiOutlineGithub,
  } from "react-icons/ai"

const ContactSection = () => {
    return (
        <section id="contact">
            <hr className="w-6 h-1 mx-auto my-10 bg-teal-500 border-0 rounded"></hr>
            <h2 className="text-center text-2xl font-bold mb-10">Contact Me</h2>
            <div className="flex flex-col space-y-28">
                <p className="text-center justify-text">
                    Let's work on great things together! Feel free to reach out and connect through any of the following means:
                </p>
            </div>
        </section>
    )
}

export default ContactSection