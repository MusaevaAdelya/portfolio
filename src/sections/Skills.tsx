import Skill from "../components/Skill"
import { PlacedFlower } from "../components/PlacedFlower"
import { FlowerBeigeOutlinedRed } from "../components/Flower"

function Skills() {
  return (
    <section id="skills" className="bg-light-200/60 relative rounded-2xl lg:rounded-[50px] overflow-hidden border-dashed border-2 border-dark-500 pt-5 lg:pt-10 px-5 lg:px-30 pb-8 lg:pb-15 mb-10">
      <PlacedFlower top="7%" left="7%" size={50}>
        <FlowerBeigeOutlinedRed style={{ width: "100%", height: "100%" }} />
      </PlacedFlower>
      <PlacedFlower top="8%" left="93%" size={70}>
        <FlowerBeigeOutlinedRed style={{ width: "100%", height: "100%" }} />
      </PlacedFlower>
      <PlacedFlower top="80%" left="10%" size={180}>
        <FlowerBeigeOutlinedRed style={{ width: "100%", height: "100%" }} className="lg:block hidden"/>
      </PlacedFlower>
      <PlacedFlower top="85%" left="85%" size={100}>
        <FlowerBeigeOutlinedRed style={{ width: "100%", height: "100%" }} className="lg:block hidden"/>
      </PlacedFlower>

      <div className="z-10 relative px-2 lg:px-20">
        <div className="pointer-events-none absolute inset-0 -z-10 blur-[180px]">
          <div className="absolute top-8 right-7 h-150 w-150 rounded-full bg-accent-bright" />
        </div>
        <div className="text-center mt-7 lg:mt-10 mb-8 lg:mb-13" data-aos="fade-up">
          <h2 className="uppercase font-bold text-3xl lg:text-4xl mb-2 lg:mb-4">what i do</h2>
          <p className="text-lg lg:text-xl font-bold leading-6 lg:leading-normal">Design, Frontend, Backend, Databases, Deployment — bringing ideas to life</p>
        </div>
        <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 md:gap-6 justify-center">
          <div data-aos="fade-up" data-aos-delay="0"><Skill title="TypeScript" img="skills-ts.svg" /></div>
          <div data-aos="fade-up" data-aos-delay="50"><Skill title="JavaScript" img="skills-js.svg" /></div>
          <div data-aos="fade-up" data-aos-delay="100"><Skill title="HTML" img="skills-html.svg" /></div>
          <div data-aos="fade-up" data-aos-delay="150"><Skill title="CSS" img="skills-css.svg" /></div>
          <div data-aos="fade-up" data-aos-delay="200"><Skill title="SCSS" img="skills-scss.svg" /></div>
          <div data-aos="fade-up" data-aos-delay="250"><Skill title="React" img="skills-react.svg" /></div>
          <div data-aos="fade-up" data-aos-delay="300"><Skill title="Redux" img="skills-redux.svg" /></div>
          <div data-aos="fade-up" data-aos-delay="350"><Skill title="Tailwind" img="skills-tailwind.svg" /></div>
          <div data-aos="fade-up" data-aos-delay="400"><Skill title="NestJS" img="skills-nestjs.svg" /></div>
          <div data-aos="fade-up" data-aos-delay="450"><Skill title="Java" img="skills-java.svg" /></div>
          <div data-aos="fade-up" data-aos-delay="500"><Skill title="Spring Boot" img="skills-spring-boot.svg" /></div>
          <div data-aos="fade-up" data-aos-delay="550"><Skill title="PostgreSQL" img="skills-postgres.svg" /></div>
          <div data-aos="fade-up" data-aos-delay="600"><Skill title="Supabase" img="skills-supabase.svg" /></div>
          <div data-aos="fade-up" data-aos-delay="650"><Skill title="GitHub" img="skills-github.svg" /></div>
          <div data-aos="fade-up" data-aos-delay="700"><Skill title="Figma" img="skills-figma.svg" /></div>
          <div data-aos="fade-up" data-aos-delay="750"><Skill title="Docker" img="skills-docker.svg" /></div>
          <div data-aos="fade-up" data-aos-delay="800"><Skill title="Openshift" img="skills-openshift.svg" /></div>
        </div>
      </div>
    </section>
  )
}

export default Skills