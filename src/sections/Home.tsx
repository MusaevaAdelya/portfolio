import Header from "../components/Header"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Home() {
    const handleDownloadCV = () => {
        const link = document.createElement('a')
        link.href = '/Adelya Musaeva, Software Developer.pdf'
        link.download = 'Adelya Musaeva, Software Developer.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section id="home" className="bg-light-200/60 relative rounded-2xl lg:rounded-[50px] overflow-hidden border-dashed border-2 border-dark-500 pt-5 lg:pt-7 px-5 lg:px-30 pb-5 lg:pb-15 mb-10">
            <Header />
            <div className="flex justify-between gap-10 items-center lg:gap-0 lg:justify-around min-h-40 mt-10 flex-col lg:flex-row">
                <div className="relative" data-aos="fade-right">
                    <div className="pointer-events-none absolute inset-0 z-0 blur-[60px] transform translate-z-0">
                        <div className="absolute h-150 w-150 -ml-15 -mt-17 lg:-ml-25 rounded-full bg-accent-bright  transform translate-z-0" />
                    </div>
                    <div className="relative z-10 text-center lg:text-left">
                        <div className="space-y-2 lg:space-y-4">
                            <p className="text-light-300 font-bold text-2xl lg:text-2xl">Software Developer</p>
                            <p className="text-dark-700 font-bold text-5xl lg:text-6xl leading-12 lg:leading-17"><span className="text-light-300">Hello I'm</span> <br />Adelya <br /> Musaeva</p>
                            <p className="text-light-300 text-lg lg:text-xl max-w-[400px]">Focused on developing reliable, scalable applications with modern technologies.</p>
                        </div>
                        <div className="flex mt-9 gap-3 justify-center lg:justify-start">
                            <button 
                                onClick={handleDownloadCV}
                                className="bg-accent py-2 lg:py-4 px-4 lg:px-8 text-light-150 font-bold text-lg lg:text-xl rounded-2xl hover:bg-accent-bright hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                                Download CV
                            </button>
                            <a 
                                href="https://github.com/MusaevaAdelya" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-accent border-accent border-2 rounded-full w-12 h-12 lg:w-15 lg:h-15 p-1.5 lg:p-2 hover:bg-accent hover:text-light-150 hover:scale-110 transition-all duration-300"
                            >
                                <FaGithub className="w-full h-full"/>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/adelya-musaeva-a730a5255/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-accent border-accent border-2 rounded-full w-12 h-12 lg:w-15 lg:h-15 p-1.5 lg:p-2 hover:bg-accent hover:text-light-150 hover:scale-110 transition-all duration-300"
                            >
                                <FaLinkedin className="w-full h-full"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end z-10" data-aos="fade-left">
                    <img src="avatar.jfif" alt="avatar picture" className="rounded-full border-dashed border-2 border-dark-500 max-h-[300px] lg:max-h-[450px] hover:scale-105 transition-transform duration-300" />
                </div>
            </div>
        </section>
    )
}

export default Home