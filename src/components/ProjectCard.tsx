import { FaGithub, FaFigma } from "react-icons/fa"
import { CiGlobe } from "react-icons/ci"

type ProjectCardProps = {
    img: string
    title: string
    description: string
    skills: string[]
    githubLink?: string
    liveDemoLink?: string
    figmaLink?: string
}

function ProjectCard({
    img,
    title,
    description,
    skills,
    githubLink,
    liveDemoLink,
    figmaLink,
}: ProjectCardProps) {
    return (
        <div className="flex flex-col text-white bg-tertiary py-7 lg:py-8 px-4 lg:px-8 rounded-xl lg:rounded-4xl text-xl gap-3 hover:scale-105 transition-transform duration-300 h-full">
            <img
                src={img}
                alt="project image"
                className="w-full rounded-lg lg:rounded-2xl lg:mb-3 mb-2 md:h-[300px] lg:h-[260px] object-cover transition-transform duration-300"
            />

            <p className="text-xl lg:text-xl text-center">{title}</p>
            <p className="text-base lg:leading-normal leading-6">{description}</p>

            <div className="flex gap-1 lg:gap-2 mb-3 lg:mb-3 flex-wrap">
                {skills.map((skill) => (
                    <ProjectSkill key={skill} name={skill} />
                ))}
            </div>

            <div className="flex gap-3 lg:gap-3 mt-auto text-sm lg:text-lg">
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 underline hover:opacity-80 hover:scale-110 transition-all duration-300"
                    >
                        <FaGithub className="text-2xl"/>
                        <span>GitHub</span>
                    </a>
                )}

                {figmaLink && (
                    <a
                        href={figmaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 underline hover:opacity-80 hover:scale-110 transition-all duration-300"
                    >
                        <FaFigma className="text-2xl"/>
                        <span>Figma</span>
                    </a>
                )}

                {liveDemoLink && (
                    <a
                        href={liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 underline hover:opacity-80 hover:scale-110 transition-all duration-300"
                    >
                        <CiGlobe className="text-2xl"/>
                        <span>Live Demo</span>
                    </a>
                )}
            </div>
        </div>
    )
}

type ProjectSkillsProps = {
    name: string
    borderColor?: string
    backgroundColor?: string
}

export function ProjectSkill({
    name,
    borderColor = "#FF977B",
    backgroundColor = "#DD7244",
}: ProjectSkillsProps) {
    return (
        <div
            className="border-2 px-2 py-0.5 lg:px-3 text-sm lg:text-lg rounded-lg lg:rounded-3xl  transition-transform duration-300"
            style={{ borderColor, backgroundColor }}
        >
            {name}
        </div>
    )
}

export default ProjectCard