"use client"

import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"
import Tilt from "react-parallax-tilt"

import {
    FaReact, FaNodeJs, FaJsSquare
} from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"

function Hero() {

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <main className="w-full max-w-7xl mx-auto pt-28 pb-10 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 text-center lg:text-left"
                >

                    {/* Status Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 
              dark:bg-white/10 backdrop-blur-lg rounded-full border 
              border-white/20 shadow-md"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-gray-900 dark:text-gray-300 text-sm">
                            Available for new projects
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        className="text-5xl md:text-6xl font-extrabold leading-tight
              text-gray-900 dark:text-white"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Hi, I'm{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r 
              from-blue-400 to-blue-600">
                            LAL MAHMUD
                        </span>
                    </motion.h1>

                    {/* Typewriter Subtitle */}
                    <div className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 h-[40px]">
                        <Typewriter
                            options={{
                                strings: [
                                    "MERN Stack Developer",
                                    "Next.js Developer",
                                    "Front-End Developer",
                                    "React Developer",
                                    "Full Stack Developer"
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>

                    {/* Description */}
                    <motion.p
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        I build fast, modern and responsive web applications using today’s
                        most powerful technologies. Clean UI, optimized backend, and a
                        smooth user experience — that’s my focus.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <motion.button
                            onClick={() => scrollToSection("contact")}
                            className="px-8 py-3 rounded-full bg-blue-600 text-white shadow-lg font-semibold"
                            whileHover={{ scale: 1.08 }}
                        >
                            Contact Me
                        </motion.button>

                        <motion.button
                            onClick={() => scrollToSection("projects")}
                            className="px-8 py-3 rounded-full border-2 border-blue-500 
              text-blue-500 hover:bg-blue-500 hover:text-white transition-all"
                            whileHover={{ scale: 1.08 }}
                        >
                            View Projects
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* RIGHT SIDE — TILT IMAGE + FLOATING ICONS */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center lg:justify-end"
                >

                    {/* FLOATING ICONS */}
                    <motion.div className="absolute -top-10 left-0 text-blue-400 text-5xl"
                        animate={{ y: [0, -18, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    ><FaReact /></motion.div>

                    <motion.div className="absolute top-32 -right-8 text-green-500 text-5xl"
                        animate={{ y: [0, -18, 0] }}
                        transition={{ duration: 2.6, repeat: Infinity }}
                    ><FaNodeJs /></motion.div>

                    <motion.div className="absolute bottom-16 -left-8 text-yellow-400 text-5xl"
                        animate={{ y: [0, -18, 0] }}
                        transition={{ duration: 2.4, repeat: Infinity }}
                    ><FaJsSquare /></motion.div>

                    <motion.div className="absolute top-20 left-20 text-black dark:text-white text-5xl"
                        animate={{ y: [0, -18, 0] }}
                        transition={{ duration: 2.8, repeat: Infinity }}
                    ><SiNextdotjs /></motion.div>

                    <motion.div className="absolute bottom-6 right-10 text-cyan-400 text-5xl"
                        animate={{ y: [0, -18, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity }}
                    ><SiTailwindcss /></motion.div>

                    {/* TILT IMAGE */}
                    <Tilt glareEnable={true} glareMaxOpacity={0.3} glareColor="lightblue">
                        <motion.div
                            className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border-8 
                border-white dark:border-gray-700"
                            whileHover={{ scale: 1.04 }}
                        >
                            <img
                                src="https://i.ibb.co.com/sdk4zqFm/Whats-App-Image-2025-12-06-at-01-48-53-ad8606b4.jpg"
                                alt="LAL MAHMUD"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </Tilt>

                </motion.div>

            </div>
        </main>
    )
}

export default Hero
