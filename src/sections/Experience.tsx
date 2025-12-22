import { FlowerRed } from "../components/Flower"
import { PlacedFlower } from "../components/PlacedFlower"
import { FlowerBeigeOutlinedRed } from "../components/Flower"
import ExperienceCard from "../components/ExperienceCard"

function Experience() {
    return (
        <section id="experience" className="bg-light-200/60 relative rounded-2xl lg:rounded-[50px] overflow-hidden border-dashed border-2 border-dark-500 pt-8 lg:pt-10 px-5 md:px-30 pb-8 lg:pb-15 mb-10">
            <PlacedFlower top="7%" left="20%" size={50}>
                <FlowerBeigeOutlinedRed style={{ width: "100%", height: "100%" }} className="hidden lg:block" />
            </PlacedFlower>
            <PlacedFlower top="8%" left="93%" size={150}>
                <FlowerBeigeOutlinedRed style={{ width: "100%", height: "100%" }} />
            </PlacedFlower>
            <PlacedFlower top="50%" left="10%" size={150}>
                <FlowerBeigeOutlinedRed style={{ width: "100%", height: "100%" }} />
            </PlacedFlower>
            <PlacedFlower top="45%" left="85%" size={150}>
                <FlowerBeigeOutlinedRed style={{ width: "100%", height: "100%" }} />
            </PlacedFlower>
            <PlacedFlower top="60%" left="30%" size={40}>
                <FlowerBeigeOutlinedRed style={{ width: "100%", height: "100%" }} />
            </PlacedFlower>
            <PlacedFlower top="40%" left="60%" size={50}>
                <FlowerBeigeOutlinedRed style={{ width: "100%", height: "100%" }} />
            </PlacedFlower>
            <div className="pointer-events-none absolute top-1/12 left-1/12 inset-0 -z-10 blur-[80px]">
                <div className="absolute h-150 w-150 rounded-full bg-accent-bright" />
            </div>

            <div className="pointer-events-none absolute top-5/12 left-7/12 inset-0 -z-10 blur-[80px]">
                <div className="absolute h-150 w-150 rounded-full bg-accent-bright" />
            </div>

            <div className="relative z-10">
                <h2 className="uppercase font-bold text-3xl lg:text-4xl mb-0 lg:mb-10 text-center" data-aos="fade-up">my experience</h2>
                <div className="relative isolate">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-dark-500 z-0 lg:block hidden"
                    />

                    <div className="grid-cols-1 lg:grid-cols-[1fr_200px_1fr] grid gap-3 lg:gap-7 relative z-10 mt-5 lg:mt-15">
                        <div data-aos="fade-right">
                            <ExperienceCard 
                                company="Bank 'Bai Tushum'" 
                                location="Bishkek, Kyrgyzstan" 
                                position="Software Developer Intern" 
                                date="march 2024 - may 2024"
                                skills={["Java", "Spring Boot", "Oracle"]} 
                            />
                        </div>
                        <div className="lg:flex items-center justify-center hidden" data-aos="zoom-in">
                            <FlowerRed />
                        </div>
                        <div className="lg:flex items-center justify-center hidden" data-aos="fade-left">
                            <span className="uppercase text-accent font-bold text-3xl">march 2024 - may 2024</span>
                        </div>

                        <div className="lg:flex items-center justify-center hidden" data-aos="fade-right">
                            <span className="uppercase text-accent font-bold text-3xl">september 2025 - januar 2026</span>
                        </div>
                        <div className="lg:flex items-center justify-center z-20 hidden" data-aos="zoom-in">
                            <FlowerRed />
                        </div>
                        <div data-aos="fade-left">
                            <ExperienceCard 
                                company="BOSCH" 
                                location="Stuttgart, Germany" 
                                position="Full Stack Developer Intern" 
                                date="september 2025 - januar 2026"
                                skills={["TypeScript", "React", "NestJS", "Axios", "Jest", "PostgreSQL", "Stardog", "Docker", "Openshift", "Git", "GitHub Actions", "VSCode"]} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience