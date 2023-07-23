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
    { skill: "Daisy UI" },
]

export const AboutMeSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h2 className="text-center font-bold text-3xl">About Me</h2>
                <div className="flex flex-col space-y-10 item-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
                    <div className="md:w-1/2">-

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
                        <br />
                    </div>
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <h2>My Skills</h2>
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-teal-100 px-4 py-2 mr-2 mt-2 text-zinc-700 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMeSection