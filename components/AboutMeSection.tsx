import React from 'react'

const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "React" },
    { skill: "Express" },
    { skill: "Node.js" },
    { skill: "PostgreSQL" },
    { skill: "Git" },
    { skill: "GitHub" },
    { skill: "Postman" },
    { skill: "Vite" },
    { skill: "Material UI" },
    { skill: "Semantic UI" },
    { skill: "Daisy UI" },
]

export const AboutMeSection = () => {
    return (
        <section id="about">
            <div className="text-xl my-12 pb-12 md:pb-10">
                <hr className="w-6 h-1 mx-auto my-10 bg-teal-500 border-0 rounded"></hr>
                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 ">
                        <h2 className="text-center text-3xl font-bold mb-6 md:text-left">
                            About Me
                        </h2>
                        <p>
                         As a first-generation Latine who values community and growth, my journey has led me to working within inclusive and cross-functional spaces.
                         Before breaking into tech, I was a library assistant under the County of San Bernardino and applied learned skills from my anthropology studies at UC San Diego to host community events and programs. 
                        I love to read comics in my spare time and hope to make a zine website soon!
                        </p>
                    </div>
                    <div className="text-center md:w-1/2 md:text-left">
                        <h2 className="text-3xl font-bold mb-6">My Skills</h2>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {skills.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-zinc-700 rounded font-semibold"
                                    >
                                        {item.skill}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMeSection