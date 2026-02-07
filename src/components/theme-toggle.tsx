"use client"

import * as React from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-10 h-10" /> // Placeholder
    }

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 dark:bg-gray-800/50 border border-white/20 shadow-md backdrop-blur-md transition-colors hover:bg-white/20 ml-4"
            aria-label="Toggle theme"
        >
            <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
            <FaMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
        </motion.button>
    )
}
