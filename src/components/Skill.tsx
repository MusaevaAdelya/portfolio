type SkillsProps = {
    title: string,
    img: string
}

function Skill({ title, img }: SkillsProps) {
    return (
        <div className={`flex flex-col justify-center items-center bg-light-400 text-dark-700 shadow-none hover:shadow-[0_0_50px_25px_rgba(193,2,1,0.7)] hover:-translate-y-5 duration-300 ease-in-out  hover:text-light-450 rounded-xl md:rounded-2xl lg:rounded-4xl py-3 lg:py-5  hover:bg-accent border-4 border-light-400 hover:border-dashed hover:border-light-500 `}>
            <img src={img} alt="typescript icon" className="lg:w-18 lg:h-18 w-15 h-15" />
            <span className=" font-bold text-lg lg:text-xl mt-2">{title}</span>
        </div>
    )
}

export default Skill