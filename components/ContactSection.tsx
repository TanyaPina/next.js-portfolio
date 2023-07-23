import React from 'react'
import Link from "next/link"
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
                <div className="flex flex-row items-center justify-center space-x-2 mb-1">
                    <Link
                        href="mailto:tanyapina15@gmail.com"
                        target="_blank"
                        className="flex inline-flex flex-row items-center px-4 py-2 m-2">
                        <AiOutlineMail
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer mr-2"
                        /> Email
                    </Link>
                    <Link href="https://www.linkedin.com/in/tanyapina/"
                        target="_blank"
                        className="flex inline-flex flex-row items-center px-4 py-2 m-2">
                        <AiOutlineLinkedin
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer mr-2"
                        /> LinkedIn
                    </Link>
                    <Link
                        href="https://github.com/TanyaPina"
                        target="_blank"
                        className="flex inline-flex flex-row items-center px-4 py-2 m-2">
                        <AiOutlineGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer mr-2"
                        />GitHub
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ContactSection