import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa"

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-6, 6, -6],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

const Footer = () => {
  return (
    <footer className="relative bg-[#0d1117] pt-20 text-white">

      {/* 🌊 Animated Wave Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,53.3C672,53,768,75,864,80C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32L1440,120L0,120Z"
            fill="#1f2937"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,53.3C672,53,768,75,864,80C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32L1440,120L0,120Z;
                M0,26L48,32C96,38,192,50,288,52C384,54,480,46,576,48C672,50,768,60,864,66C960,72,1056,74,1152,70C1248,66,1344,58,1392,52L1440,46L1440,120L0,120Z;
                M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,53.3C672,53,768,75,864,80C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32L1440,120L0,120Z"
            />
          </path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8 relative z-10">

        {/* Branding + Socials */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <h1 className="text-3xl font-bold tracking-wide">LAM MAHMUD</h1>
          <p className="text-gray-400 text-center max-w-lg">
            MERN Stack & Next.js Developer — building smooth, scalable, and modern web experiences.
          </p>

          {/* Floating Social Icons */}
          <div className="flex gap-6 mt-3">

            {/* GitHub */}
            <motion.a
              href="https://github.com/nosib55"
              target="_blank"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center 
                        hover:bg-secondary hover:text-primary transition-all shadow-lg"
              {...floatAnimation}
              whileHover={{ scale: 1.2, rotate: 8 }}
            >
              <FaGithub className="text-xl" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/lalmahmud"
              target="_blank"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center 
                        hover:bg-secondary hover:text-primary transition-all shadow-lg"
              {...floatAnimation}
              whileHover={{ scale: 1.2, rotate: -8 }}
            >
              <FaLinkedin className="text-xl" />
            </motion.a>

            {/* Facebook */}
            <motion.a
              href="https://web.facebook.com/lm.nosib"
              target="_blank"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center 
                        hover:bg-secondary hover:text-primary transition-all shadow-lg"
              {...floatAnimation}
              whileHover={{ scale: 1.2, rotate: 6 }}
            >
              <FaFacebook className="text-xl" />
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:lalmahmud092@gmail.com"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center 
                        hover:bg-secondary hover:text-primary transition-all shadow-lg"
              {...floatAnimation}
              whileHover={{ scale: 1.2, rotate: -6 }}
            >
              <FaEnvelope className="text-xl" />
            </motion.a>

          </div>
        </div>

        {/* ✨ Animated Credits Line */}
        <motion.div
          className="text-center text-gray-400 text-sm border-t border-white/10 pt-6"
          animate={{
            opacity: [0.4, 1, 0.4],
            letterSpacing: ["0px", "2px", "0px"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          © {new Date().getFullYear()} LAM MAHMUD — All Rights Reserved
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
