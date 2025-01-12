import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "TripIncento",
    description: "TripIncento is a web application created to enhance Brampton's transit system by encouraging sustainable travel through a rewards program. It allows users to track their travel habits, earn rewards, and log in securely. The platform also analyzes travel data to identify busy areas, helping city planners optimize bus routes and prioritize improvements. TripIncento makes eco-friendly travel easier while contributing to better transit planning for the community.",
    image: "/tripincento.png",
    github: "https://github.com/zhouwinston1/TripIncento-backend",
    link: "https://github.com/zhouwinston1/TripIncento-backend",
  },
  {
    name: "Neighbourhood Gem",
    description: "Neighbourhood Gems is a local events marketplace that brings communities together by highlighting unique activities and events. The platform allows users to book events, write reviews for tours, and easily explore what's happening in their area. Designed with a user-friendly interface and secure features, it makes discovering, booking, and sharing local experiences simple and enjoyable, helping to strengthen community connections.",
    image: "/temp.png",
    github: "https://github.com/zhouwinston1/Neighbourhood-Gems",
    link: "https://github.com/zhouwinston1/Neighbourhood-Gems",
  },
  {
    name: "RoboCup World's Line Competition",
    description:
      "Represented my country at RoboCup Worlds after earning the title of national champions. Competed on an international stage, showcasing expertise in robotics design, programming, and teamwork. Gained invaluable experience working with computer vision and firmware and collaborating with global teams in a high-pressure environment.",
    image: "/robocup.png",
    github: "https://github.com/zhouwinston1/RoboCup-Arduino-Line-Following-Bot",
    link: "https://github.com/zhouwinston1/RoboCup-Arduino-Line-Following-Bot",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default ProjectsSection
