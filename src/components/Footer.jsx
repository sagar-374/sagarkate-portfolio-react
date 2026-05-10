import { motion } from 'framer-motion'

import {
  ArrowUp,
  Sparkles,
  ChevronRight,
} from 'lucide-react'

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaHeart,
} from 'react-icons/fa'

const navLinks = [
  'Home',
  'About',
  'Skills',
  'Projects',
  'Contact',
]

const socials = [
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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020617]">

      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="w-full h-full bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-10">

        {/* ================================================= */}
        {/* TOP SECTION */}
        {/* ================================================= */}

        <div className="grid lg:grid-cols-3 gap-16 items-start">

          {/* ================================================= */}
          {/* LEFT SECTION */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">

              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                  w-14 h-14 rounded-2xl
                  bg-cyan-500/10
                  border border-cyan-400/20
                  flex items-center justify-center
                  backdrop-blur-xl
                "
              >
                <Sparkles
                  className="text-cyan-400"
                  size={26}
                />
              </motion.div>

              <h2 className="text-4xl font-black tracking-tight">
                <span className="text-white">
                  Sagar
                </span>

                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  .
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-slate-400 leading-relaxed text-lg max-w-md">
              Java Full Stack Developer passionate about
              building scalable web applications, premium UI
              experiences, and impactful digital products.
            </p>

            {/* Status Badge */}
            <div
              className="
                inline-flex items-center gap-3
                px-5 py-3 rounded-2xl
                bg-cyan-500/10
                border border-cyan-400/20
                text-cyan-300
                mt-8
              "
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />

              <span className="text-sm tracking-wide">
                Available for Internship & Full-Time Roles
              </span>
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* CENTER NAVIGATION */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-start lg:items-center"
          >
            {/* Title */}
            <h3 className="text-2xl font-bold mb-8 text-white">
              Quick Links
            </h3>

            {/* Links */}
            <div className="flex flex-col gap-5">

              {navLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 6 }}
                  className="
                    group
                    relative
                    flex items-center gap-3
                    text-slate-300
                    hover:text-cyan-400
                    transition-all duration-300
                  "
                >
                  {/* Arrow */}
                  <ChevronRight
                    size={16}
                    className="
                      text-cyan-400/70
                      group-hover:translate-x-1
                      transition
                    "
                  />

                  {/* Text */}
                  <span className="text-lg font-medium">
                    {item}
                  </span>

                  {/* Underline */}
                  <span
                    className="
                      absolute
                      left-7
                      -bottom-1
                      h-[2px]
                      w-0
                      bg-cyan-400
                      transition-all
                      duration-300
                      group-hover:w-[70%]
                    "
                  />
                </motion.a>
              ))}

            </div>
          </motion.div>

          {/* ================================================= */}
          {/* RIGHT SECTION */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="lg:text-right"
          >
            <h3 className="text-2xl font-bold mb-8">
              Connect With Me
            </h3>

            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm lg:ml-auto">
              Follow me on social platforms and stay connected
              for projects, collaborations, and updates.
            </p>

            {/* Social Links */}
            <div className="flex lg:justify-end gap-5 flex-wrap">

              {socials.map((social, index) => {
                const Icon = social.icon

                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -8,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      group
                      relative
                      w-14 h-14 rounded-2xl
                      border border-white/10
                      bg-white/[0.04]
                      backdrop-blur-xl
                      flex items-center justify-center
                      overflow-hidden
                      transition-all duration-300
                    "
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />

                    <Icon
                      size={22}
                      className="relative z-10 group-hover:text-cyan-400 transition"
                    />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* DIVIDER */}
        {/* ================================================= */}

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent my-14" />

        {/* ================================================= */}
        {/* BOTTOM FOOTER */}
        {/* ================================================= */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              text-slate-400 text-sm
              flex items-center gap-2
              text-center
            "
          >
            © 2026 Sagar Kate. Crafted with

            <FaHeart
              className="text-cyan-400 animate-pulse"
              size={12}
            />

            using React & Tailwind CSS
          </motion.p>

          {/* Back To Top */}
          <motion.a
            href="#home"
            whileHover={{
              y: -4,
            }}
            className="
              group
              flex items-center gap-3
              px-5 py-3 rounded-2xl
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              hover:bg-cyan-500/10
              hover:border-cyan-400/20
              transition-all duration-300
            "
          >
            <span className="text-sm font-medium group-hover:text-cyan-300 transition">
              Back to Top
            </span>

            <div
              className="
                w-8 h-8 rounded-xl
                bg-cyan-400 text-black
                flex items-center justify-center
                group-hover:-translate-y-1
                transition
              "
            >
              <ArrowUp size={16} />
            </div>
          </motion.a>
        </div>
      </div>
    </footer>
  )
}