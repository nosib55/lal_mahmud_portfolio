"use client"

import { motion, useInView } from "framer-motion"
import { useRef, JSX } from "react"
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa"

interface EducationItem {
    number: string;
    icon: JSX.Element;
    degree: string;
    place: string;
    year: string;
    description: string;
}

export default function Education() {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true })

    const items: EducationItem[] = [
        {
            number: "01",
            icon: <FaUniversity />,
            degree: "Bachelor in Accounting",
            place: "National University — Tangail, Dhaka",
            year: "Present",
            description:
                "Currently studying Accounting under the National University program while improving programming and development skills.",
        },
        {
            number: "02",
            icon: <FaSchool />,
            degree: "HSC — Science",
            place: "G. B. G. College, Ghatail, Tangail",
            year: "2024",
            description:
                "Completed Higher Secondary Education in Science with strong analytical foundation and interest in technology.",
        },
        {
            number: "03",
            icon: <FaGraduationCap />,
            degree: "SSC — Science",
            place: "JHAWAIL M. H. K. High School, Gopalpur, Tangail",
            year: "2022",
            description:
                "Built strong basics in Mathematics, Physics, and problem-solving, shaping future interest in development.",
        },
    ]

    return (
        <section
            id="education"
            ref={ref}
            className="w-full max-w-7xl mx-auto py-24 px-6 lg:px-0"
        >
            {/* HEADER */}
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
                    My{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">
                        Education
                    </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg">
                    A clean breakdown of my academic background.
                </p>
            </motion.div>

            {/* GLASS STEP CARDS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 80 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: i * 0.2 }}
                        whileHover={{
                            scale: 1.06,
                            y: -10,
                            boxShadow: "0 15px 40px rgba(99,102,241,0.35)",
                        }}
                        className="relative p-8 rounded-3xl backdrop-blur-xl bg-white/10 
                       dark:bg-black/20 border border-white/20 shadow-xl"
                    >
                        {/* Glowing Ring Number */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                            <motion.div
                                animate={{
                                    scale: [1, 1.15, 1],
                                    opacity: [0.7, 1, 0.7],
                                }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                                className="w-16 h-16 rounded-full bg-gradient-to-br 
                           from-indigo-500 to-blue-500 text-white text-2xl 
                           font-bold flex items-center justify-center shadow-lg"
                            >
                                {item.number}
                            </motion.div>
                        </div>

                        {/* Icon */}
                        <div className="mt-10 mb-4 text-4xl text-blue-500 flex justify-center">
                            {item.icon}
                        </div>

                        {/* Titles */}
                        <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                            {item.degree}
                        </h3>
                        <p className="text-blue-500 font-semibold text-center">{item.place}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-center text-sm mb-4">
                            {item.year}
                        </p>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
