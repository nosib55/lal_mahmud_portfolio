import { useEffect, useRef } from "react"
import {
  FaReact, FaNodeJs, FaHtml5, FaGitAlt
} from "react-icons/fa"
import {
  SiTailwindcss, SiMongodb, SiJavascript, SiNextdotjs,
  SiFirebase, SiVercel, SiRender, SiExpress
} from "react-icons/si"

// ICON + COLOR (GLOW COLOR)
const iconData = [
  { icon: <FaReact />, color: "#61dafb" },
  { icon: <SiNextdotjs />, color: "#ffffff" },
  { icon: <SiJavascript />, color: "#f7df1e" },
  { icon: <SiTailwindcss />, color: "#38bdf8" },
  { icon: <FaNodeJs />, color: "#3c873a" },
  { icon: <SiMongodb />, color: "#4db33d" },
  { icon: <FaHtml5 />, color: "#e44d26" },
  { icon: <SiExpress />, color: "#aaaaaa" },
  { icon: <SiFirebase />, color: "#ffa611" },
  { icon: <SiRender />, color: "#8b5cf6" },
  { icon: <SiVercel />, color: "#ffffff" },
  { icon: <FaGitAlt />, color: "#de4c36" },
]

export default function SkillsMarquee() {
  const containerRef = useRef(null)
  const balls = useRef([])

  useEffect(() => {
    const container = containerRef.current
    const width = container.offsetWidth
    const height = container.offsetHeight
    const radius = 30 // radius for collision/border

    // CREATE FIREFLIES
    balls.current = iconData.map(() => ({
      x: Math.random() * (width - 60) + 30,
      y: Math.random() * (height - 60) + 30,
      vx: (Math.random() - 0.5) * 0.9,
      vy: (Math.random() - 0.5) * 0.9,
      glowBase: Math.random() * 0.4 + 0.4,  // base glow intensity
      glowSpeed: Math.random() * 0.04 + 0.02, // flicker speed
    }))

    function animate() {
      balls.current.forEach((ball, i) => {
        // Random firefly wobble / drifting
        ball.vx += (Math.random() - 0.5) * 0.04
        ball.vy += (Math.random() - 0.5) * 0.04

        // Keep speed soft and smooth
        ball.vx = Math.max(Math.min(ball.vx, 1.2), -1.2)
        ball.vy = Math.max(Math.min(ball.vy, 1.2), -1.2)

        // Move firefly
        ball.x += ball.vx
        ball.y += ball.vy

        // BORDER LIMITS (never leave container)
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

        // GET HTML ELEMENT
        const el = document.getElementById(`ball-${i}`)
        if (el) {
          el.style.transform = `translate(${ball.x - radius}px, ${ball.y - radius}px)`

          // REAL FIRELY GLOW (jonaki style)
          const glowPulse =
            ball.glowBase +
            Math.sin(Date.now() * ball.glowSpeed) * 0.5

          el.style.boxShadow = `
            0 0 ${25 * glowPulse}px ${10 * glowPulse}px ${iconData[i].color}
          `

          // Soft opacity flicker
          el.style.opacity = 0.5 + glowPulse * 0.6
        }
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[350px] overflow-hidden rounded-xl"
    >
      {iconData.map((item, i) => (
        <div
          key={i}
          id={`ball-${i}`}
          className="
            absolute flex items-center justify-center
            w-12 h-12 text-2xl
            rounded-full bg-white/5 backdrop-blur-md 
            border border-white/10 
            transition-all duration-300
          "
          style={{
            transform: "translate(-50%, -50%)",
            color: item.color,
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  )
}
