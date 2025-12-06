import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(false)

    const formData = new FormData(e.target)

    try {
      const response = await fetch("https://formsubmit.co/lalmahmud092@gmail.com", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      })

      const data = await response.json()

      if (data.success === "true") {
        setShowSuccess(true)
        e.target.reset()
        setTimeout(() => setShowSuccess(false), 4000)
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" ref={ref} className="w-full max-w-4xl mx-auto py-20 px-6">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Let's <span className="text-secondary">Connect</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Have a project, idea, or question? Send a message and get a quick response.
        </p>
      </motion.div>

      {/* FORM */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-[#0f2828] rounded-3xl p-8 shadow-2xl space-y-6 border border-gray-700"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >

        {/* HIDDEN FORMSETTINGS */}
        <input type="hidden" name="_subject" value="New message from portfolio" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://your-netlify-site.netlify.app/contact-success" />

        {/* NAME */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
            className="w-full px-4 py-3 bg-[#0d1f1f] border border-gray-700 rounded-lg text-white
            focus:border-secondary outline-none transition-all"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 bg-[#0d1f1f] border border-gray-700 rounded-lg text-white
            focus:border-secondary outline-none transition-all"
          />
        </div>

        {/* MESSAGE */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Write your message..."
            className="w-full px-4 py-3 bg-[#0d1f1f] border border-gray-700 rounded-lg text-white
            focus:border-secondary resize-none outline-none transition-all"
          ></textarea>
        </div>

        {/* SUCCESS */}
        {showSuccess && (
          <div className="bg-secondary/20 border border-secondary text-secondary px-4 py-3 rounded-lg text-center font-semibold">
            ✓ Your message has been sent!
          </div>
        )}

        {/* ERROR */}
        {error && (
          <div className="bg-red-500/20 border border-red-400 text-red-400 px-4 py-3 rounded-lg text-center font-semibold">
            ✗ Something went wrong. Try again.
          </div>
        )}

        {/* BUTTON */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-secondary text-primary font-bold py-3 rounded-full shadow-xl disabled:opacity-50"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>

      {/* SOCIAL ICONS */}
      <motion.div
        className="flex justify-center gap-4 mt-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <a href="https://github.com/nosib55" target="_blank" className="social-btn">
          <FaGithub className="text-xl" />
        </a>

        <a href="https://www.linkedin.com/in/lalmahmud" target="_blank" className="social-btn">
          <FaLinkedin className="text-xl" />
        </a>

        <a href="https://web.facebook.com/lm.nosib" target="_blank" className="social-btn">
          <FaFacebook className="text-xl" />
        </a>
      </motion.div>
    </section>
  )
}

export default Contact
