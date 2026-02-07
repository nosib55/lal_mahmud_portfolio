"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"

const Contact = () => {
    const [explode, setExplode] = useState(false)

    const mailTo = () => {
        setExplode(true)
        setTimeout(() => setExplode(false), 600)

        setTimeout(() => {
            window.location.href =
                "mailto:lalmahmud092@gmail.com?subject=Hello LAL MAHMUD&body=Write your message here..."
        }, 300)
    }

    return (
        <section id="contact" className="w-full max-w-4xl mx-auto py-32 px-6 text-center">

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Let's <span className="text-secondary">Connect</span>
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto mb-16">
                Want to reach out? Hit the button below — with STYLE.
            </p>

            {/* Neon Pulsing Button Wrapper */}
            <motion.div
                className="relative flex justify-center"
                animate={{
                    boxShadow: [
                        "0 0 0px rgba(174,255,114,0.0)",
                        "0 0 25px rgba(174,255,114,0.6)",
                        "0 0 0px rgba(174,255,114,0.0)"
                    ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
            >

                {/* Neon Mail Button */}
                <motion.button
                    onClick={mailTo}
                    className="relative flex items-center gap-3 px-12 py-4 rounded-full
                     text-primary font-bold text-lg bg-secondary shadow-[0_0_20px_rgba(174,255,114,0.7)]
                     hover:shadow-[0_0_35px_rgba(174,255,114,1)] transition-all"
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.88 }}
                >
                    <FaEnvelope className="text-2xl" />
                    Mail Me

                    {/* Pulsing Ring */}
                    <motion.span
                        className="absolute inset-0 rounded-full border-2 border-secondary"
                        animate={{
                            scale: [1, 1.6],
                            opacity: [0.7, 0]
                        }}
                        transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeOut"
                        }}
                    />
                </motion.button>

                {/* Explosion Particles */}
                <AnimatePresence>
                    {explode && (
                        <>
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 1, scale: 1 }}
                                    animate={{
                                        opacity: 0,
                                        scale: 0,
                                        x: (Math.random() - 0.5) * 200,
                                        y: (Math.random() - 0.5) * 200
                                    }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute w-3 h-3 rounded-full bg-secondary"
                                ></motion.div>
                            ))}
                        </>
                    )}
                </AnimatePresence>

            </motion.div>

            {/* 🔥 Social Icons Section */}
            <motion.div
                className="flex justify-center gap-6 mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* GitHub */}
                <motion.a
                    href="https://github.com/nosib55"
                    target="_blank"
                    className="w-14 h-14 flex items-center justify-center rounded-full 
                     bg-gray-200/50 dark:bg-white/10 text-gray-800 dark:text-white 
                     border border-gray-300/50 dark:border-white/10 shadow-lg 
                     hover:bg-secondary hover:text-primary transition-all"
                    whileHover={{ scale: 1.2, rotate: 8 }}
                >
                    <FaGithub className="text-2xl" />
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                    href="https://www.linkedin.com/in/lal-mahmud02"
                    target="_blank"
                    className="w-14 h-14 flex items-center justify-center rounded-full 
                     bg-gray-200/50 dark:bg-white/10 text-gray-800 dark:text-white 
                     border border-gray-300/50 dark:border-white/10 shadow-lg 
                     hover:bg-secondary hover:text-primary transition-all"
                    whileHover={{ scale: 1.2, rotate: -8 }}
                >
                    <FaLinkedin className="text-2xl" />
                </motion.a>

                {/* Facebook */}
                <motion.a
                    href="https://web.facebook.com/lm.nosib"
                    target="_blank"
                    className="w-14 h-14 flex items-center justify-center rounded-full 
                     bg-gray-200/50 dark:bg-white/10 text-gray-800 dark:text-white 
                     border border-gray-300/50 dark:border-white/10 shadow-lg 
                     hover:bg-secondary hover:text-primary transition-all"
                    whileHover={{ scale: 1.2, rotate: 6 }}
                >
                    <FaFacebook className="text-2xl" />
                </motion.a>
            </motion.div>

        </section>
    )
}

export default Contact
