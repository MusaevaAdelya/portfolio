import { ProjectSkill } from "../components/ProjectCard";
import { IoLocationSharp } from "react-icons/io5";
import { BsPersonFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";

type ExperienceCardProps = {
  company: string;
  location: string;
  position: string;
  skills: string[];
  date?: string;
};

function ExperienceCard({
  company,
  location,
  position,
  skills,
  date,
}: ExperienceCardProps) {
  return (
    <div className="bg-accent rounded-xl lg:rounded-3xl text-white text-2xl py-6 lg:py-14 lg:px-10 px-5 hover:scale-105 transition-transform duration-300">
      <p className="uppercase font-bold text-lg lg:text-3xl text-center mb-5">
        {company}
      </p>
      <div className="flex text-lg gap-2 lg:gap-4 mb-1 lg:mb-3 items-center leading-5 lg:leading-normal">
        <BsPersonFill className="text-xl lg:text-3xl" />
        <span>{position}</span>
      </div>

      <div className="flex text-lg gap-2 lg:gap-4 mb-1 lg:mb-3 items-center leading-5 lg:leading-normal">
        <IoLocationSharp className="text-xl lg:text-3xl" />
        <span>{location}</span>
      </div>

      {date && (
        <div className="flex text-lg gap-2 lg:gap-4 mb-1 lg:mb-3 items-center lg:hidden leading-5 lg:leading-normal">
          <FaCalendarAlt className="text-xl lg:text-3xl" />
          <span className="capitalize">{date}</span>
        </div>
      )}

      <div className="flex gap-2 mt-5 lg:mt-10 flex-wrap">
        {skills.map((skillName) => (
          <ProjectSkill
            key={skillName}
            name={skillName}
            backgroundColor="#D44033"
            borderColor="#EF705A"
          />
        ))}
      </div>
    </div>
  );
}

export default ExperienceCard;
