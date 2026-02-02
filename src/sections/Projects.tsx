import ProjectCard from "../components/ProjectCard";
import { PlacedFlower } from "../components/PlacedFlower";
import { FlowerLightRedOutlinedBeige } from "../components/Flower";

function Projects() {
  const scrollToContacts = () => {
    document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="bg-accent relative rounded-2xl lg:rounded-[50px] overflow-hidden border-dashed border-2 border-dark-500 pt-5 lg:pt-10 px-5 lg:px-30 pb-8 lg:pb-15 mb-10"
    >
      <PlacedFlower top="4%" left="37%" size={50}>
        <FlowerLightRedOutlinedBeige
          style={{ width: "100%", height: "100%" }}
          className="hidden lg:block"
        />
      </PlacedFlower>
      <PlacedFlower top="6%" left="93%" size={140}>
        <FlowerLightRedOutlinedBeige
          style={{ width: "100%", height: "100%" }}
        />
      </PlacedFlower>
      <PlacedFlower top="96%" left="5%" size={60}>
        <FlowerLightRedOutlinedBeige
          style={{ width: "100%", height: "100%" }}
        />
      </PlacedFlower>
      <div className="z-10 relative px-0 xl:px-20 mt-7 pb-10">
        <h2
          className="uppercase text-light-350 font-bold text-center mb-5 lg:mb-15 text-3xl lg:text-4xl"
          data-aos="fade-up"
        >
          my projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-7">
          <div data-aos="fade-up" data-aos-delay="0">
            <ProjectCard
              img="project-kanban.png"
              title="Kanban Flow"
              description="A collaborative Kanban workspace where teams can organize tasks, share attachments, leave comments, and stay synced in real time"
              skills={["TypeScript", "Angular", "Tailwind", "Firebase"]}
              githubLink="https://github.com/MusaevaAdelya/kanban-board"
              liveDemoLink="https://kanban-board-adelya-musaeva.vercel.app/"
              figmaLink="https://www.figma.com/design/E3eRxbxnalxvaRLz9Et9c4/Kanban-board?node-id=0-1&t=tQyEcNVA09Z5QSYu-1"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="50">
            <ProjectCard
              img="project-guv.png"
              title="Gewinn- und Verlustrechnung"
              description="A profit and loss app that visualizes income and expenses with charts and summaries over a selected period"
              skills={["TypeScript", "React", "Tailwind", "Supabase"]}
              githubLink="https://github.com/MusaevaAdelya/guv-app-electron"
              liveDemoLink="https://guv-app-electron.vercel.app/"
              figmaLink="https://www.figma.com/design/jX8kCrRqEcO32rBJ7puFBu/GuV?node-id=0-1&t=ukWLKDlqvp65z43I-1"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <ProjectCard
              img="project-uniflow.png"
              title="UniFlow"
              description="A UI/UX design concept for an all-in-one student platform, designed in Figma during a university hackathon"
              skills={["Figma"]}
              figmaLink="https://www.figma.com/design/buCz3R5dt7p5JqMu9gk68E/UniFlow?node-id=0-1&p=f&t=ukWLKDlqvp65z43I-0"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <ProjectCard
              img="project-todo.png"
              title="To-do App"
              description="A clean and simple to-do app for creating, tracking, and managing daily tasks"
              skills={["JavaScript", "React", "Tailwind"]}
              githubLink="https://github.com/MusaevaAdelya/to-do-app"
              liveDemoLink="https://to-do-app-adelyas-projects.vercel.app/all"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <ProjectCard
              img="project-weather.png"
              title="Weather App"
              description="A weather app that shows current conditions and forecasts for any city"
              skills={["JavaScript", "React", "SCSS"]}
              liveDemoLink="https://musaevaadelya.github.io/weather-react-app/"
              githubLink="https://github.com/MusaevaAdelya/weather-react-app"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <ProjectCard
              img="project-starwars.png"
              title="Star Wars App"
              description="A Star Wars app that fetches data from a public Star Wars API (SWAPI)"
              skills={["JavaScript", "React", "Tailwind"]}
              githubLink="https://github.com/MusaevaAdelya/star-wars"
              liveDemoLink="https://star-wars-rho-one.vercel.app/"
            />
          </div>
        </div>
        <div
          
          className="min-h-[400px] md:min-h-[500px] relative flex flex-col text-white bg-accent py-13 px-8 rounded-4xl text-xl gap-3 border-3 border-secondary justify-center items-center hover:scale-105 transition-transform duration-300 w-full md:max-w-100 mx-auto mt-5 xl:mt-7"
        >
          <p className="text-secondary font-bold text-2xl lg:text-4xl text-center leading-normal lg:leading-11">
            HERE CAN BE
            <br />
            YOUR
            <br />
            APPLICATION
          </p>
          <button
            onClick={scrollToContacts}
            className="capitalize text-lg lg:text-2xl bg-secondary px-5 lg:px-8 text-dark-700 font-bold py-3 rounded-2xl absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 hover:bg-secondary-100 hover:scale-110 transition-all duration-300"
          >
            Contact me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
