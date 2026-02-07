"use client"

import { useEffect, useRef } from "react"
import { FaReact, FaNodeJs, FaHtml5, FaGitAlt } from "react-icons/fa"
import {
    SiTailwindcss,
    SiMongodb,
    SiJavascript,
    SiNextdotjs,
    SiFirebase,
    SiVercel,
    SiRender,
    SiExpress,
    SiTypescript,
} from "react-icons/si"

// ---------------- ICON CONFIG ----------------

type IconItem = {
    icon: React.ReactNode
    color: string
}

const iconData: IconItem[] = [
    { icon: <FaReact />, color: "#61dafb" },
    { icon: <SiNextdotjs />, color: "#06f3a8ff" },
    { icon: <SiJavascript />, color: "#f7df1e" },
    { icon: <SiTailwindcss />, color: "#38bdf8" },
    { icon: <FaNodeJs />, color: "#3c873a" },
    { icon: <SiMongodb />, color: "#4db33d" },
    { icon: <FaHtml5 />, color: "#e44d26" },
    { icon: <SiExpress />, color: "#aaaaaa" },
    { icon: <SiFirebase />, color: "#ffa611" },
    { icon: <SiRender />, color: "#8b5cf6" },
    { icon: <SiVercel />, color: "#000000" },
    { icon: <FaGitAlt />, color: "#de4c36" },
    { icon: <SiTypescript />, color: "#3178c6" },
]

// ---------------- BALL PHYSICS ----------------

type Ball = {
    x: number
    y: number
    vx: number
    vy: number
    glowBase: number
    glowSpeed: number
}

export default function SkillsMarquee(): React.JSX.Element {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const balls = useRef<Ball[]>([])

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const width = container.offsetWidth
        const height = container.offsetHeight
        const radius = 30

        // Initialize floating balls
        balls.current = iconData.map(() => ({
            x: Math.random() * (width - 60) + 30,
            y: Math.random() * (height - 60) + 30,
            vx: (Math.random() - 0.5) * 0.9,
            vy: (Math.random() - 0.5) * 0.9,
            glowBase: Math.random() * 0.4 + 0.4,
            glowSpeed: Math.random() * 0.04 + 0.02,
        }))

        let animationId: number

        const animate = () => {
            if (!containerRef.current) return

            const width = containerRef.current.offsetWidth
            const height = containerRef.current.offsetHeight

            balls.current.forEach((ball, i) => {
                // gentle drift
                ball.vx += (Math.random() - 0.5) * 0.04
                ball.vy += (Math.random() - 0.5) * 0.04

                ball.vx = Math.max(Math.min(ball.vx, 1.2), -1.2)
                ball.vy = Math.max(Math.min(ball.vy, 1.2), -1.2)

                ball.x += ball.vx
                ball.y += ball.vy

                // borders
                if (ball.x < radius) {
                    ball.x = radius
                    ball.vx *= -1
                }
                if (ball.x > width - radius) {
                    ball.x = width - radius
                    ball.vx *= -1
                }
                if (ball.y < radius) {
                    ball.y = radius
                    ball.vy *= -1
                }
                if (ball.y > height - radius) {
                    ball.y = height - radius
                    ball.vy *= -1
                }

                const el = document.getElementById(`ball-${i}`)
                if (!el) return

                el.style.transform = `translate3d(${ball.x}px, ${ball.y}px, 0) translate(-50%, -50%)`

                const glowPulse = ball.glowBase + Math.sin(Date.now() * ball.glowSpeed) * 0.5

                el.style.boxShadow = `0 0 ${25 * glowPulse}px ${10 * glowPulse}px ${iconData[i].color}`
                el.style.opacity = (0.5 + glowPulse * 0.6).toString()
            })

            animationId = requestAnimationFrame(animate)
        }

        animate()

        return () => cancelAnimationFrame(animationId)
    }, [])

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[350px] overflow-hidden rounded-2xl pointer-events-none"
        >
            {iconData.map((item, i) => (
                <div
                    key={i}
                    id={`ball-${i}`}
                    className="absolute flex items-center justify-center w-12 h-12 text-2xl rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 transition-all duration-300"
                    style={{ color: item.color }}
                >
                    {item.icon}
                </div>
            ))}
        </div>
    )
}
