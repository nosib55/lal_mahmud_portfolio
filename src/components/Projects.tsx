"use client"

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { motion, useInView } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { useRef } from "react"

interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
    github: string;
    live: string;
}

const Projects = () => {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
    }

    const projects: Project[] = [
        {
            title: "SWAP X",
            description: "Buy & Sell New & Used Products Online with SWAP X Marketplace.",
            tech: ["Next.js", "React", "Node.js", "Tailwind", "Firebase", "Express.js",
                "MongoDB"],
            image: "https://i.ibb.co.com/MDh2bvNZ/ONLINE-SELLING-SITES.jpg",
            github: "https://github.com/nosib55/swapx-clint.git",
            live: "https://swapx-clint-2cmx.vercel.app/"
        },
        {
            title: "Toy-Topia",
            description: "A full-stack toy marketplace app with user authentication and CRUD operations.",
            tech: ["React", "JavaScript", "Node.js",
                "Express.js",
                "MongoDB", "Tailwind", "Firebase"],
            image: "https://i.ibb.co.com/pvJzfJzC/toy-store-main-new.png",
            github: "https://github.com/nosib55/toytopia-app-.git",
            live: "https://toy-topia-bd7f7.web.app/"
        },
        {
            title: "Eco Track",
            description: "Eco Track helps users monitor their eco-friendly activities ",
            tech: ["React", "JavaScript", "Node.js", "MongoDB", "Express.js", "Firebase", "Tailwind"],
            image: "https://i.ibb.co.com/bMQ8HWgc/original.png",
            github: "https://github.com/nosib55/eco-track-client.git",
            live: "https://eco-track-bd.netlify.app/"
        },
        {
            title: "HERO APP IO",
            description: "seamless integration, and powerful tools for developers of all levels.",
            tech: ["React",
                "Tailwind CSS",
                "JavaScript",
                "DaisyUI",
                "React Icons",
                "Recharts",
                "REST APIs"],
            image: "https://i.ibb.co.com/FLGmJnVT/privacy-security-c7ffaiitglg2-large-2x.jpg",
            github: "https://github.com/nosib55/hero-app.git",
            live: "https://hero-app-dot.netlify.app/"
        }
    ]

    return (
        <section id="projects" ref={ref} className="w-full max-w-7xl mx-auto py-24 px-6">

            {/* Section Title */}
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full">
                    <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">My Projects</p>
                </div>

                <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mt-4 leading-tight">
                    Showcasing my <span className="text-secondary">creative work</span>
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-400 mt-3 max-w-xl">
                    From personal designs to functional web apps — here are my top projects.
                </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 60, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                        <Tilt glareEnable={true} glareBorderRadius="20px" tiltMaxAngleX={10} tiltMaxAngleY={10}>
                            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-white/10 hover:border-secondary transition duration-300">

                                {/* IMAGE */}
                                <motion.div
                                    className="relative h-56 overflow-hidden"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                                </motion.div>

                                {/* CONTENT */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary/20 text-secondary"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={project.github}
                                            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition"
                                        >
                                            <FaGithub /> Code
                                        </a>

                                        <a
                                            href={project.live}
                                            className="flex items-center gap-2 bg-secondary text-primary px-4 py-2 rounded-full shadow-md hover:scale-105 transition"
                                        >
                                            <FaExternalLinkAlt /> Live
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Projects
