import { useState } from "react"
import { HiOutlineXMark, HiOutlineBars3 } from "react-icons/hi2"

function Header() {
  const [open, setOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      {/* HEADER */}
      <header className="bg-light-200 border-dark-100 border-2 border-solid rounded-xl lg:rounded-4xl flex items-center justify-between py-2 px-4 lg:p-0">
        <p className="text-accent uppercase font-bold text-xl lg:text-2xl lg:ml-10 ml-5">
          adelya musaeva
        </p>

        <nav className="hidden lg:flex text-dark-600 font-bold items-center text-xl lg:text-xl">
          <button 
            onClick={() => scrollToSection('skills')}
            className="flex items-center gap-2 px-6 cursor-pointer hover:text-accent transition-colors duration-300"
          >
            <span>Skills</span>
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="flex items-center gap-2 px-6 cursor-pointer hover:text-accent transition-colors duration-300"
          >
            <span>Experience</span>
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-2 px-6 cursor-pointer hover:text-accent transition-colors duration-300"
          >
            <span>Projects</span>
          </button>
          <button 
            onClick={() => scrollToSection('contacts')}
            className="flex items-center gap-2 px-8 py-3 border-dark-600 border-2 rounded-4xl cursor-pointer hover:bg-accent hover:text-light-150 hover:border-accent transition-all duration-300"
          >
            <span>Contact me</span>
          </button>
        </nav>

        {/* Бургер на мобилке */}
        <button
          className="lg:hidden flex items-center justify-center p-2 hover:scale-110 transition-transform duration-300"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <HiOutlineBars3 className="w-7 h-7 text-dark-600" />
        </button>
      </header>

      {/* Оверлей с blur */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } bg-black/30 backdrop-blur-md`}
        onClick={() => setOpen(false)}
      />

      {/* Сайд-меню */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 max-w-full bg-light-200 z-50 shadow-xl transform transition-transform duration-300 ease-out lg:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Верхняя часть */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <p className="text-accent uppercase font-bold text-lg">
            adelya musaeva
          </p>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-1 hover:scale-110 transition-transform duration-300"
          >
            <HiOutlineXMark className="w-7 h-7" />
          </button>
        </div>

        {/* Пункты меню */}
        <nav className="flex flex-col text-dark-600 font-semibold text-lg gap-4 px-6 pt-4">
          <button 
            onClick={() => scrollToSection('skills')}
            className="flex items-center gap-3 py-1 hover:text-accent transition-colors duration-300"
          >
            <span>Skills</span>
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="flex items-center gap-3 py-1 hover:text-accent transition-colors duration-300"
          >
            <span>Experience</span>
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-3 py-1 hover:text-accent transition-colors duration-300"
          >
            <span>Projects</span>
          </button>
        </nav>

        {/* Кнопка Contact внизу */}
        <div className="mt-auto px-6 pb-8 pt-6">
          <button 
            onClick={() => scrollToSection('contacts')}
            className="w-full flex items-center justify-center gap-2 border-2 border-dark-600 rounded-3xl py-3 font-bold hover:bg-accent hover:text-light-150 hover:border-accent transition-all duration-300"
          >
            <span>Contact me</span>
          </button>
        </div>
      </aside>
    </>
  )
}

export default Header