import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'

const socialLinks = [
  {
    icon: FaGithub,
    link: 'https://github.com/sagar-374',
  },
  {
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/sagar-kate-sk007/',
  },
  {
    icon: FaInstagram,
    link: 'https://www.instagram.com/__sagar.sk.007__?igsh=dXRncjhtZTA4ZTNl',
  },
  {
    icon: FaTwitter,
    link: 'https://x.com/SagarKa24557133',
  },
]

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'sagarkate374@gmail.com',
    color: 'cyan',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 98908 24905',
    color: 'purple',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Pune, India',
    color: 'pink',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0 bg-[#020617]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/10 blur-[140px] rounded-full" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="w-full h-full bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================================================= */}
        {/* HEADING */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 backdrop-blur-xl text-cyan-300 mb-6">
            <Sparkles size={16} />

            <span className="uppercase tracking-[0.25em] text-sm">
              Get In Touch
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            Contact
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {' '}Me
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
            Open for internships, freelance projects,
            collaborations, and full-time opportunities.
            Let’s build something amazing together.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* MAIN GRID */}
        {/* ================================================= */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden
              rounded-[2.5rem]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-10 md:p-12
            "
          >
            {/* Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

            {/* Floating Decoration */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                top-8
                right-8
                w-16
                h-16
                rounded-2xl
                bg-cyan-400/10
                border
                border-cyan-400/20
                flex
                items-center
                justify-center
              "
            >
              <ArrowUpRight
                className="text-cyan-400"
                size={26}
              />
            </motion.div>

            {/* Content */}
            <div className="relative z-10">

              <h3 className="text-4xl font-black mb-6 leading-tight">
                Let’s Create
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {' '}Something Great
                </span>
              </h3>

              <p className="text-slate-400 leading-relaxed text-lg mb-12">
                I’m passionate about building modern web
                experiences and collaborating on impactful
                digital products. Feel free to reach out
                anytime.
              </p>

              {/* Contact Items */}
              <div className="space-y-6">

                {contactInfo.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 8 }}
                      className="
                        flex items-center gap-5
                        rounded-3xl
                        border border-white/10
                        bg-white/[0.03]
                        p-5
                        backdrop-blur-xl
                        hover:bg-white/[0.05]
                        transition-all
                        duration-300
                      "
                    >
                      {/* Icon */}
                      <div
                        className={`
                          w-16 h-16 rounded-2xl flex items-center justify-center
                          ${
                            item.color === 'cyan'
                              ? 'bg-cyan-500/10 text-cyan-400'
                              : item.color === 'purple'
                              ? 'bg-purple-500/10 text-purple-400'
                              : 'bg-pink-500/10 text-pink-400'
                          }
                        `}
                      >
                        <Icon size={28} />
                      </div>

                      {/* Info */}
                      <div>
                        <p className="text-slate-400 text-sm mb-1">
                          {item.title}
                        </p>

                        <h4 className="text-lg font-semibold">
                          {item.value}
                        </h4>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="flex gap-5 mt-12 flex-wrap">

                {socialLinks.map((social, index) => {
                  const Icon = social.icon

                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        y: -6,
                        scale: 1.08,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="
                        w-16 h-16 rounded-2xl
                        border border-white/10
                        bg-white/[0.04]
                        backdrop-blur-xl
                        flex items-center justify-center
                        hover:bg-cyan-500/10
                        hover:border-cyan-400/30
                        hover:text-cyan-400
                        transition-all duration-300
                      "
                    >
                      <Icon size={24} />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* CONTACT FORM */}
          {/* ================================================= */}

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden
              rounded-[2.5rem]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-10 md:p-12
              space-y-7
            "
          >
            {/* Glow */}
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full" />

            {/* Heading */}
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-3">
                Send a Message
              </h3>

              <p className="text-slate-400">
                Fill out the form and I’ll get back to you soon.
              </p>
            </div>

            {/* Inputs */}
            {[
              {
                label: 'Your Name',
                type: 'text',
                placeholder: 'Enter your name',
              },
              {
                label: 'Your Email',
                type: 'email',
                placeholder: 'Enter your email',
              },
            ].map((field, index) => (
              <div
                key={index}
                className="relative z-10"
              >
                <label className="block mb-3 text-slate-300 font-medium">
                  {field.label}
                </label>

                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="
                    w-full
                    p-5
                    rounded-2xl
                    bg-[#0f172a]/80
                    border border-white/10
                    outline-none
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20
                    transition-all
                    duration-300
                  "
                />
              </div>
            ))}

            {/* Textarea */}
            <div className="relative z-10">
              <label className="block mb-3 text-slate-300 font-medium">
                Message
              </label>

              <textarea
                rows="7"
                placeholder="Write your message..."
                className="
                  w-full
                  p-5
                  rounded-2xl
                  bg-[#0f172a]/80
                  border border-white/10
                  outline-none
                  resize-none
                  focus:border-cyan-400
                  focus:ring-2
                  focus:ring-cyan-400/20
                  transition-all
                  duration-300
                "
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.96,
              }}
              type="submit"
              className="
                relative z-10
                w-full
                py-5
                rounded-2xl
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                text-black
                font-bold
                flex items-center justify-center gap-3
                shadow-[0_10px_30px_rgba(34,211,238,0.25)]
              "
            >
              Send Message

              <Send size={20} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}