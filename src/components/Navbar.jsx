import { useState, useEffect } from "react"
import { MdMenu, MdClose } from "react-icons/md"
import { motion, AnimatePresence } from "framer-motion"
import Tilt from "react-parallax-tilt"

// CHANGE THIS NUMBER (1–6) TO SWITCH LOGO STYLE
const LOGO_STYLE = 1

// ---------------- LM LOGO STYLES ---------------- //
const LogoStyles = {
  1: (
    <motion.h1
      whileHover={{ scale: 1.15, rotate: 2 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="text-3xl font-extrabold tracking-wide 
             bg-gradient-to-r from-blue-400 to-blue-600 
             text-transparent bg-clip-text drop-shadow-lg"
    >
      LM
    </motion.h1>
  ),

  2: (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="px-4 py-2 bg-white/20 backdrop-blur-lg 
             border border-white/30 rounded-xl shadow-lg"
    >
      <h1 className="text-2xl font-bold text-white tracking-widest">LM</h1>
    </motion.div>
  ),

  3: (
    <Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05}>
      <div className="px-5 py-3 rounded-xl bg-gradient-to-br 
                  from-blue-600 to-indigo-700 shadow-xl">
        <h1 className="text-3xl font-extrabold text-white">LM</h1>
      </div>
    </Tilt>
  ),

  4: (
    <motion.div
      whileHover={{ scale: 1.15 }}
      className="w-14 h-14 flex items-center justify-center 
             rounded-full bg-blue-600 text-white 
             text-2xl font-bold shadow-lg"
    >
      LM
    </motion.div>
  ),

  5: (
    <motion.h1
      className="text-4xl font-extrabold tracking-widest 
             text-transparent bg-clip-text 
             bg-gradient-to-r from-blue-400 to-blue-600 
             drop-shadow-2xl"
      animate={{
        textShadow: [
          "0 0 10px #3b82f6",
          "0 0 20px #60a5fa",
          "0 0 10px #3b82f6",
        ],
      }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      LM
    </motion.h1>
  ),

  6: (
    <motion.h1
      className="text-3xl font-extrabold text-blue-500"
      animate={{
        textShadow: [
          "0 0 6px rgba(59,130,246,0.7)",
          "0 0 20px rgba(59,130,246,1)",
          "0 0 6px rgba(59,130,246,0.7)"
        ]
      }}
      transition={{ duration: 2.5, repeat: Infinity }}
    >
      LM
    </motion.h1>
  ),
}
// ------------------------------------------------ //

function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // ⭐ NEW ORDER → Projects before Skills
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },  // ⬅ moved up
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setActiveSection(id)
      setIsMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300

      menuItems.forEach((item) => {
        const section = document.getElementById(item.id)
        if (section) {
          const { offsetTop, offsetHeight } = section

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="w-full max-w-7xl mx-auto px-4 py-5 sticky top-0 z-50 
                       bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg shadow-lg">

      <nav className="flex justify-between items-center">

        {/* LOGO */}
        {LogoStyles[LOGO_STYLE]}

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.12 }}
              className={`relative text-lg font-medium px-3 py-2 transition-all
                ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
            >
              {item.label}

              {activeSection === item.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[3px] bg-blue-500 rounded-full"
                />
              )}
            </motion.button>
          ))}

          {/* RESUME BUTTON */}
          <motion.a
            href="https://drive.google.com/file/d/1V9qRg1yO4WaErXI6OKtBH2haYObFCgj3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="bg-blue-600 text-white font-semibold px-6 py-3 
                       rounded-full shadow-lg hover:bg-blue-500 transition-all"
          >
            Resume
          </motion.a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden p-2 text-gray-900 dark:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <MdClose size={34} /> : <MdMenu size={34} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="lg:hidden mt-4 bg-gray-100/90 dark:bg-gray-800/90 
                       rounded-2xl p-5 shadow-xl"
          >
            <div className="flex flex-col gap-3">

              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className={`px-4 py-3 rounded-lg font-medium text-left
                    ${
                      activeSection === item.id
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-300/40 dark:hover:bg-gray-700/40"
                    }`}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.a
                href="https://drive.google.com/file/d/1V9qRg1yO4WaErXI6OKtBH2haYObFCgj3/view?usp=sharing"
                target="_blank"
                className="block text-center bg-blue-600 text-white font-semibold 
                           px-4 py-3 rounded-lg mt-3"
                whileHover={{ scale: 1.05 }}
              >
                Resume
              </motion.a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
