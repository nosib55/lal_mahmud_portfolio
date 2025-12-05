import { FaReact, FaNodeJs, FaHtml5, FaGitAlt } from "react-icons/fa"
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiJavascript, 
  SiNextdotjs, 
  SiExpress 
} from "react-icons/si"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: "React.js", icon: <FaReact className="text-4xl text-blue-500" />, level: 85, color: "from-blue-500 to-cyan-500" },
    { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-white" />, level: 45, color: "from-gray-700 to-gray-900" },
    { name: "JavaScript", icon: <SiJavascript className="text-4xl text-yellow-500" />, level: 90, color: "from-yellow-400 to-yellow-600" },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-600" />, level: 80, color: "from-green-500 to-green-700" },
    { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-500" />, level: 75, color: "from-green-400 to-green-600" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-cyan-500" />, level: 95, color: "from-cyan-400 to-blue-500" },
    { name: "HTML & CSS", icon: <FaHtml5 className="text-4xl text-orange-500" />, level: 95, color: "from-orange-500 to-red-500" },
    { name: "Express.js", icon: <SiExpress className="text-4xl text-gray-400" />, level: 70, color: "from-gray-400 to-gray-600" },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-4xl text-orange-600" />, level: 85, color: "from-orange-500 to-red-600" },
  ]

  const [activeIndex, setActiveIndex] = useState(null)

  const toggleSkill = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section ref={ref} className="w-full max-w-7xl mx-auto py-20">
      
      {/* Section Header */}
      <motion.div 
        className="text-left mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            My Skills
          </span>
        </motion.div>
        
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Skills that power my <span className="text-secondary">development journey</span>
        </motion.h2>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {skills.map((skill, index) => {
          const isOpen = activeIndex === index

          return (
            <motion.div 
              key={index}
              onClick={() => toggleSkill(index)}
              className="group relative cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg 
                         hover:shadow-2xl transition-all duration-300 border-2 border-transparent 
                         hover:border-secondary overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Hover Light */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  
                  {/* Icon */}
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 
                               rounded-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill.icon}
                  </motion.div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-secondary transition-colors">
                      {skill.name}
                    </h3>

                    {/* Status Text */}
                    {!isOpen && (
                      <p className="text-sm text-gray-400 dark:text-gray-500 italic">
                        Click to reveal level
                      </p>
                    )}
                  </div>
                </div>

                {/* Hidden Meter */}
                {isOpen && (
                  <>
                    <motion.div 
                      className="text-4xl font-bold text-secondary mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {skill.level}%
                    </motion.div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )
        })}

      </div>
    </section>
  )
}

export default Skills
