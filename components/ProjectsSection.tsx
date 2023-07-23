import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
    {
        name: "Guess-a-Mon",
        description:
            "Guess-a-Mon is a web app that uses the PERN stack to provide a way for the nostalgic anime fans to test themselves on their Pokémon knowledge.",
        image: "/Guess-a-Mon.png",
        github: "https://github.com/TanyaPina/guess-a-mon",
        link: "https://server-stus.onrender.com",
    },
    {
        name: "Question Craft",
        description: "Question-Craft is a group-made web application that generates questions using the Chat GPT OpenAI API based on user input. It utilizes React and Bootstrap for the frontend and Node.js with Express for the backend.",
        image: "/Question Craft.png",
        github: "https://github.com/TanyaPina/question-craft",
    },
]

const ProjectsSection = () => {
    return (
        <section id="projects">
            <hr className="w-6 h-1 mx-auto my-10 bg-teal-500 border-0 rounded"></hr>
            <h2 className="text-center text-2xl font-bold mb-6">Projects</h2>
            <div className="flex flex-col space-y-28">
                {projects.map((project, idx) => {
                    return (
                        <div key={idx}>
                            <div className="flex flex-col md:space-x-12">
                                <div className="md:w-1/2">
                                    <Image
                                        src={project.image}
                                        alt=""
                                        width={1000}
                                        height={1000}
                                        className="rounded-xl shadow-xl hover:opacity-70"
                                    />
                                </div>
                                <div className="md:w-1/2">
                                    <h2>{project.name}</h2>
                                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-row align-bottom space-x-4">
                                        <Link href={project.github}>
                                            <BsGithub
                                                size={30}
                                                className="hover:-translate-y-1 transition-transform cursor-pointer"
                                            />
                                        </Link>
                                        {project.link && <Link href={project.link}>
                                            <BsArrowUpRightSquare
                                                size={30}
                                                className="hover:-translate-y-1 transition-transform cursor-pointer"
                                            />
                                        </Link>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ProjectsSection