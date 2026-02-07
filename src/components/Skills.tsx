"use client"

import { FaReact, FaNodeJs, FaHtml5, FaGitAlt } from "react-icons/fa"
import { SiTailwindcss, SiMongodb, SiJavascript, SiNextdotjs, SiExpress, SiTypescript } from "react-icons/si"

import { motion, useInView } from "framer-motion"
import { useRef, useState, JSX } from "react"

interface Skill {
    name: string;
    icon: JSX.Element;
    level: number;
    color: string;
}

interface SoftSkill {
    name: string;
    desc: string;
}

const Skills = () => {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const skills: Skill[] = [
        { name: "React.js", icon: <FaReact className="text-4xl text-blue-500" />, level: 85, color: "from-blue-500 to-cyan-500" },
        { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-white" />, level: 45, color: "from-gray-700 to-gray-900" },
        { name: "TypeScript", icon: <SiTypescript className="text-4xl text-blue-600" />, level: 85, color: "from-blue-500 to-blue-700" },
        { name: "JavaScript", icon: <SiJavascript className="text-4xl text-yellow-500" />, level: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-600" />, level: 80, color: "from-green-500 to-green-700" },
        { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-500" />, level: 75, color: "from-green-400 to-green-600" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-cyan-500" />, level: 95, color: "from-cyan-400 to-blue-500" },
        { name: "HTML & CSS", icon: <FaHtml5 className="text-4xl text-orange-500" />, level: 95, color: "from-orange-500 to-red-500" },
        { name: "Express.js", icon: <SiExpress className="text-4xl text-gray-400" />, level: 70, color: "from-gray-400 to-gray-600" },
        { name: "Git & GitHub", icon: <FaGitAlt className="text-4xl text-orange-600" />, level: 85, color: "from-orange-500 to-red-600" },
    ]

    const softSkills: SoftSkill[] = [
        { name: "Communication", desc: "Clear and professional communication with clients and team members." },
        { name: "Teamwork", desc: "Works collaboratively with teams to achieve project goals." },
        { name: "Problem Solving", desc: "Thinks logically to solve coding and UI/UX challenges." },
        { name: "Time Management", desc: "Manages tasks efficiently to meet deadlines." },
        { name: "Creativity", desc: "Brings fresh and unique ideas to frontend design." },
        { name: "Adaptability", desc: "Learns new technologies quickly and applies them effectively." },
    ]

    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const toggleSkill = (index: number) => {
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
                >
                    <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">My Skills</span>
                </motion.div>

                <motion.h2
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                >
                    Skills that power my <span className="text-secondary">development journey</span>
                </motion.h2>
            </motion.div>

            {/* Technical Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {skills.map((skill, index) => {
                    const isOpen = activeIndex === index

                    return (
                        <motion.div
                            key={index}
                            onClick={() => toggleSkill(index)}
                            className="group relative cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg 
                         border-2 border-transparent hover:border-secondary transition-all overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >

                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-all`}
                            />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <motion.div
                                        className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl flex items-center justify-center"
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        {skill.icon}
                                    </motion.div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                                        {!isOpen && <p className="text-sm text-gray-400 italic">Click to reveal level</p>}
                                    </div>
                                </div>

                                {isOpen && (
                                    <>
                                        <motion.div
                                            className="text-4xl font-bold text-secondary mb-2"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        >
                                            {skill.level}%
                                        </motion.div>

                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
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

            {/* Soft Skills Section */}
            <motion.div
                className="mt-20 mb-10"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    Soft Skills
                </h2>
            </motion.div>

            {/* Soft Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {softSkills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg 
                       hover:shadow-2xl border border-transparent hover:border-secondary 
                       transition-all duration-300"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                    >
                        <h3 className="text-xl font-bold text-secondary mb-2">{skill.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{skill.desc}</p>
                    </motion.div>
                ))}

            </div>
        </section>
    )
}

export default Skills