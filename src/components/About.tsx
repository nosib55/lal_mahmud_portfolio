"use client"

import { FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const About = () => {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section
            id="about"
            ref={ref}
            className="w-full max-w-7xl mx-auto py-28 px-6"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* ==== LEFT: FLOATING IMAGE CARD ==== */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center"
                >
                    {/* Glow Aura */}
                    <motion.div
                        className="absolute inset-0 -z-10 rounded-3xl bg-blue-500/20 blur-3xl"
                        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />

                    {/* Floating Card */}
                    <motion.div
                        className="relative w-80 h-96 rounded-3xl overflow-hidden 
            shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20"
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <img
                            src="https://i.ibb.co.com/bMj9vBb6/Chat-GPT-Image-Dec-6-2025-01-57-37-AM.png"
                            alt="LAM MAHMUD"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </motion.div>

                {/* ==== RIGHT: CONTENT ==== */}
                <motion.div
                    initial={{ opacity: 0, x: 70 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2
            bg-blue-500/10 border border-blue-500/20 rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                    >
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-blue-500">About Me</span>
                    </motion.div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
                        I'm{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
                            LAL MAHMUD
                        </span>
                    </h2>

                    <p className="text-xl font-semibold text-gray-800 dark:text-gray-300">
                        MERN Stack & Next.js Developer
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Passionate full-stack developer with a strong focus on crafting modern,
                        fast, and visually refined digital experiences.
                        Specialized in **React, Next.js, Node.js, Express, MongoDB**, and
                        creating clean UI/UX using **Tailwind CSS**.
                    </p>

                    {/* Contact List */}
                    <div className="space-y-5 pt-3">

                        {/* Email */}
                        <motion.div
                            className="flex items-center gap-4 group"
                            whileHover={{ x: 8 }}
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center 
                group-hover:bg-blue-600/20 transition">
                                <FaEnvelope className="text-blue-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">lalmahmud092@gmail.com</p>
                            </div>
                        </motion.div>

                        {/* Phone */}
                        <motion.div
                            className="flex items-center gap-4 group"
                            whileHover={{ x: 8 }}
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center 
                group-hover:bg-blue-600/20 transition">
                                <FaPhone className="text-blue-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">+8801875860361</p>
                            </div>
                        </motion.div>

                    </div>

                    {/* Experience + Resume Button */}
                    <div className="flex items-center gap-10 pt-10">

                        {/* Experience Number */}
                        <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                            <p className="text-5xl font-extrabold text-blue-500">0.6</p>
                            <p className="text-gray-500 dark:text-gray-400">Years Experience</p>
                        </motion.div>

                        {/* Resume Button */}
                        <motion.a
                            href="https://drive.google.com/file/d/1vH7PkGfH-L46NvWmqYQZWScE9kyvzW-0/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-7 py-3 
              bg-gradient-to-r from-blue-500 to-indigo-500 text-white 
              font-semibold rounded-full shadow-xl"
                            whileHover={{
                                scale: 1.06,
                                boxShadow: "0 10px 35px rgba(59,130,246,0.35)"
                            }}
                        >
                            View Resume
                            <motion.span
                                animate={{ x: [0, 6, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <FaArrowRight />
                            </motion.span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
