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
            <div className="my-12 pb-12 md:pb-48">
                <hr className="w-6 h-1 mx-auto my-10 bg-teal-500 border-0 rounded"></hr>
                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 ">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            About Me
                        </h1>
                        <p>
                            Nyan nyan goes the cat, scraaaaape scraaaape goes the walls when the cat murders them with its claws
                            please let me outside pouty face yay! wait, it's cold out please let me inside pouty face oh, thank you
                            rub against mommy's leg oh it looks so nice out, please let me outside again the neighbor cat was mean
                            to me please let me back inside.
                        </p>
                        <br />
                        <p>
                            Nyan nyan goes the cat, scraaaaape scraaaape goes the walls when the cat murders them with its claws
                            please let me outside pouty face yay! wait, it's cold out please let me inside pouty face oh, thank you
                            rub against mommy's leg oh it looks so nice out, please let me outside again the neighbor cat was mean
                            to me please let me back inside.
                        </p>
                        <br />
                        <p>
                            Nyan nyan goes the cat, scraaaaape scraaaape goes the walls when the cat murders them with its claws
                            please let me outside pouty face yay! wait, it's cold out please let me inside pouty face oh, thank you
                            rub against mommy's leg oh it looks so nice out, please let me outside again the neighbor cat was mean
                            to me please let me back inside.
                        </p>

                    </div>
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-2xl font-bold mb-6">My Skills</h1>
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